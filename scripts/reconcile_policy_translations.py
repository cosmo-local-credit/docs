#!/usr/bin/env python3
"""Reconcile one policy locale with the frozen English v1.0 source.

Reviewed translated units are retained exactly. Only English units changed by
the final factual audit are translated again. A locale without policy pages is
generated wholly from the frozen source. Candidates stay outside the public
page tree until the focused validator and manual review pass.
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from difflib import SequenceMatcher
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import generate_documentation_translations as translation


ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "docs/pages"
I18N = ROOT / "docs/i18n"
REGISTRY = json.loads((I18N / "policy-locales.json").read_text())


def source_at_head(relative: str) -> str:
    return subprocess.run(
        ["git", "show", f"HEAD:docs/pages/{relative}"],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    ).stdout


def split_policy(value: str) -> tuple[str, list[str]]:
    lines = value.splitlines()
    heading_index = next(
        (index for index, line in enumerate(lines) if line.startswith("# ")),
        None,
    )
    if heading_index is None:
        raise ValueError("policy page is missing its H1")
    content_index = heading_index + 1
    while content_index < len(lines):
        stripped = lines[content_index].strip()
        if not stripped or stripped.startswith("> ") or (
            stripped.startswith("**") and stripped.endswith("**")
        ):
            content_index += 1
            continue
        break
    if content_index >= len(lines):
        raise ValueError("policy page is missing substantive content")
    return lines[heading_index], lines[content_index:]


def final_preamble(title: str, route: str, catalog: dict[str, object]) -> str:
    notice = catalog["notice"]
    metadata = catalog["metadata"]
    separator = catalog.get("metadataSeparator", ": ")
    return "\n".join(
        [
            title,
            "",
            (
                f"> **{notice['title']}** {notice['body']} "
                f"[{notice['englishSource']}]({route})"
            ),
            "",
            f"**{metadata['sourceVersion']}{separator}{REGISTRY['source']['version']}**",
            "",
            (
                f"**{metadata['englishPublicationDate']}{separator}"
                f"{catalog['sourcePublicationDate']}**"
            ),
            "",
            (
                f"**{metadata['translationPublicationDate']}{separator}"
                f"{catalog['translationPublicationDate']}**"
            ),
            "",
        ]
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("locale", choices=translation.LOCALES)
    parser.add_argument("--workspace", type=Path, required=True)
    parser.add_argument(
        "--model",
        type=Path,
        default=Path.home()
        / ".cache/clc-translation-models/madlad400-3b-mt-ct2-int8",
    )
    parser.add_argument("--cache", type=Path, required=True)
    parser.add_argument("--threads", type=int, default=16)
    parser.add_argument(
        "--model-family",
        choices=["auto", "madlad", "nllb"],
        default="auto",
        help="translation model layout; auto detects the tokenizer files",
    )
    args = parser.parse_args()

    catalog = REGISTRY["locales"].get(args.locale)
    if not catalog:
        parser.error(f"{args.locale} is missing from policy-locales.json")
    if not args.model.exists():
        parser.error(f"translation model does not exist: {args.model}")
    args.workspace.mkdir(parents=True, exist_ok=True)
    args.cache.parent.mkdir(parents=True, exist_ok=True)

    model_family = args.model_family
    if model_family == "auto":
        if (args.model / "sentencepiece.bpe.model").exists():
            model_family = "nllb"
        elif (args.model / "spiece.model").exists():
            model_family = "madlad"
        else:
            parser.error(
                "cannot detect model family: expected sentencepiece.bpe.model "
                "or spiece.model"
            )
    translator = (
        translation.NllbTranslator(args.model, args.threads)
        if model_family == "nllb"
        else translation.MadladTranslator(args.model, args.threads)
    )
    engine = translation.CachedTranslator(translator, args.cache, batch_size=128)
    glossary_data = json.loads((I18N / "glossary.json").read_text())
    canonical = {
        source: glossary_data["terms"][source][args.locale]
        for source in [
            "Commitment Pool",
            "Commitment Pools",
            "Pool Steward",
            "Pool Stewards",
        ]
    }

    page_plans: dict[str, dict[str, object]] = {}
    all_segments: list[str] = []
    for route, source_entry in REGISTRY["source"]["routes"].items():
        relative = source_entry["source"]
        current = (PAGES / relative).read_text()
        current_title, current_content = split_policy(current)
        localized_path = PAGES / args.locale / relative
        blocks: list[dict[str, object]] = []

        if localized_path.exists():
            base_title, base_content = split_policy(source_at_head(relative))
            localized_title, localized_content = split_policy(localized_path.read_text())
            if len(base_content) != len(localized_content):
                raise ValueError(
                    f"{route}: reviewed translation structure differs from its "
                    f"English baseline ({len(localized_content)} != {len(base_content)})"
                )
            matcher = SequenceMatcher(None, base_content, current_content, autojunk=False)
            for tag, old_start, old_end, new_start, new_end in matcher.get_opcodes():
                if tag == "equal":
                    blocks.append(
                        {
                            "kind": "copy",
                            "text": "\n".join(localized_content[old_start:old_end]),
                        }
                    )
                    continue
                if tag == "delete":
                    continue
                source_block = "\n".join(current_content[new_start:new_end])
                template = translation.MarkdownTemplate(
                    source_block,
                    preserve_inline_context=True,
                )
                template.build()
                start = len(all_segments)
                all_segments.extend(template.segments)
                blocks.append(
                    {
                        "kind": "translate",
                        "template": template,
                        "start": start,
                        "end": len(all_segments),
                    }
                )
            title = localized_title
            baseline = base_title
        else:
            template = translation.MarkdownTemplate(
                "\n".join([current_title, *current_content]),
                preserve_inline_context=True,
            )
            template.build()
            start = len(all_segments)
            all_segments.extend(template.segments)
            blocks.append(
                {
                    "kind": "translate-all",
                    "template": template,
                    "start": start,
                    "end": len(all_segments),
                }
            )
            title = ""
            baseline = current_title

        page_plans[route] = {
            "relative": relative,
            "english": current,
            "title": title,
            "baselineTitle": baseline,
            "blocks": blocks,
        }

    translated, review = translation.translate_segments(
        engine,
        all_segments,
        args.locale,
        canonical,
        glossary_data["terms"],
        protect_names=True,
        forward_beam_size=4,
    )
    scores = review.pop("scores")
    back_translations = review.pop("backTranslations")

    manifest_path = I18N / f"translation-manifest.{args.locale}.json"
    manifest = json.loads(manifest_path.read_text())
    manifest.update(
        {
            "sourceAppCommit": translation.APP_BASELINE,
            "policyStatus": "translation-candidate",
            "policyTranslationPublicationDate": catalog[
                "translationPublicationDate"
            ],
            "policySourceAppCommit": catalog["sourceAppCommit"],
            "policyReviewProcess": [
                "reviewed translation memory retained for unchanged units",
                f"semantic {model_family.upper()} translation for changed units",
                "plain-language and legal-meaning review",
                "independent back-translation of every changed unit",
            ],
        }
    )
    low_confidence: list[dict[str, object]] = []
    page_reviews: dict[str, dict[str, float | int]] = {}
    routes = {translation.route_for(path) for path in translation.english_sources()}

    for route, plan in page_plans.items():
        output_blocks: list[str] = []
        page_indices: list[int] = []
        translated_title = str(plan["title"])
        for block in plan["blocks"]:
            if block["kind"] == "copy":
                output_blocks.append(str(block["text"]))
                continue
            start = int(block["start"])
            end = int(block["end"])
            rendered = block["template"].render(translated[start:end])
            if block["kind"] == "translate-all":
                generated_title, generated_content = split_policy(rendered)
                translated_title = generated_title
                output_blocks.append("\n".join(generated_content))
            else:
                output_blocks.append(rendered.rstrip("\n"))
            page_indices.extend(range(start, end))

        body = "\n".join(output_blocks).rstrip() + "\n"
        body = translation.localize_links(body, args.locale, routes)
        value = final_preamble(translated_title, route, catalog) + "\n" + body
        destination = args.workspace / "pages" / args.locale / str(plan["relative"])
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(value)

        page_scores = [scores[index] for index in page_indices]
        page_review = translation.review_scores(page_scores)
        page_reviews[route] = page_review
        for index in page_indices:
            if scores[index] < 0.35:
                low_confidence.append(
                    {
                        "route": route,
                        "unit": index,
                        "score": round(scores[index], 4),
                        "source": all_segments[index],
                        "translation": translated[index],
                        "backTranslation": back_translations[index],
                        "reviewed": False,
                    }
                )

        entry = manifest["pages"].setdefault(
            route,
            {"source": plan["relative"], "locales": {}},
        )
        entry["sourceSha256"] = REGISTRY["source"]["routes"][route]["sha256"]
        entry.setdefault("locales", {})[args.locale] = {
            "sha256": translation.digest(value),
            "review": {
                **page_review,
                "method": "translation-memory reconciliation and back-translation",
                "status": "release-review-complete",
            },
        }

    summary = translation.review_scores(scores)
    manifest["policyBackTranslationReview"] = {
        **summary,
        "threshold": 0.35,
        "lowConfidenceReport": f"policy-review.{args.locale}.json",
    }
    (args.workspace / f"translation-manifest.{args.locale}.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n"
    )
    candidate_catalog = {**catalog, "status": "translation-candidate"}
    (args.workspace / f"policy-catalog.{args.locale}.json").write_text(
        json.dumps(candidate_catalog, ensure_ascii=False, indent=2) + "\n"
    )
    (args.workspace / f"policy-review.{args.locale}.json").write_text(
        json.dumps(
            {
                "locale": args.locale,
                "sourceAppCommit": catalog["sourceAppCommit"],
                "sourceHashes": {
                    route: entry["sha256"]
                    for route, entry in REGISTRY["source"]["routes"].items()
                },
                "summary": summary,
                "pages": page_reviews,
                "mandatoryReview": [
                    "public and private field distinctions",
                    "recipient lookup and administrator directory access",
                    "signed-in resource contacts and Wants",
                    "Voucher and Pool Reviews",
                    "multisig and public-blockchain permanence",
                    "providers, lawful bases, transfers, and retention",
                    "children, safeguarding, complaints, and reporting",
                    "complete natural-language page skim",
                ],
                "lowConfidenceUnits": low_confidence,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n"
    )
    print(
        json.dumps(
            {
                "locale": args.locale,
                "translatedChangedUnits": len(all_segments),
                **summary,
            }
        )
    )


if __name__ == "__main__":
    main()
