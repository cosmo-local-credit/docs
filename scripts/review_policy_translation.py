#!/usr/bin/env python3
"""Refresh a policy candidate's back-translation report after manual edits."""

from __future__ import annotations

import argparse
import json
import sys
from difflib import SequenceMatcher
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import generate_documentation_translations as translation


ROOT = Path(__file__).resolve().parents[1]
POLICY_REGISTRY = json.loads(
    (ROOT / "docs/i18n/policy-locales.json").read_text()
)


def without_policy_preamble(value: str) -> str:
    lines = value.splitlines()
    quote_index = next(
        (index for index, line in enumerate(lines) if line.startswith("> ")),
        None,
    )
    if quote_index is None:
        raise ValueError("policy page is missing its draft notice")
    end = quote_index + 1
    while end < len(lines):
        stripped = lines[end].strip()
        if not stripped or (stripped.startswith("**") and stripped.endswith("**")):
            end += 1
            continue
        break
    return "\n".join(lines[:quote_index] + lines[end:]) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("locale", choices=translation.LOCALES)
    parser.add_argument("--candidate", type=Path, required=True)
    parser.add_argument(
        "--model",
        type=Path,
        default=(
            Path.home()
            / ".cache/clc-translation-models/madlad400-3b-mt-ct2-int8"
        ),
    )
    parser.add_argument("--threads", type=int, default=10)
    args = parser.parse_args()

    manifest_path = args.candidate / f"translation-manifest.{args.locale}.json"
    catalog_path = args.candidate / f"policy-catalog.{args.locale}.json"
    report_path = args.candidate / f"policy-review.{args.locale}.json"
    manifest = json.loads(manifest_path.read_text())
    catalog = json.loads(catalog_path.read_text())
    previous_report = json.loads(report_path.read_text()) if report_path.exists() else {}
    previous_reviewed = {
        (item["route"], item["source"], item["translation"]): item.get(
            "reviewed", False
        )
        for item in previous_report.get("lowConfidenceUnits", [])
    }

    aligned: list[tuple[str, int, str, str]] = []
    route_ranges: dict[str, tuple[int, int]] = {}
    for route, source_entry in POLICY_REGISTRY["source"]["routes"].items():
        english_path = ROOT / "docs/pages" / source_entry["source"]
        translated_path = (
            args.candidate / "pages" / args.locale / source_entry["source"]
        )
        english = translation.MarkdownTemplate(
            without_policy_preamble(english_path.read_text())
        )
        localized = translation.MarkdownTemplate(
            without_policy_preamble(translated_path.read_text())
        )
        english.build()
        localized.build()
        if len(english.segments) != len(localized.segments):
            raise ValueError(
                f"{route}: segment count differs from English "
                f"({len(english.segments)} != {len(localized.segments)})"
            )
        start = len(aligned)
        aligned.extend(
            (route, index, source, target)
            for index, (source, target) in enumerate(
                zip(english.segments, localized.segments, strict=True)
            )
        )
        route_ranges[route] = (start, len(aligned))

    cache_path = (
        Path.home()
        / f".cache/clc-translation-models/policy-{args.locale}-review.json"
    )
    cache_path.parent.mkdir(parents=True, exist_ok=True)
    engine = translation.CachedTranslator(
        translation.MadladTranslator(args.model, args.threads),
        cache_path,
        batch_size=128,
    )
    back_translations = engine.translate_many(
        [target for _, _, _, target in aligned],
        args.locale,
        "en",
        beam_size=1,
    )

    records = []
    for (route, index, source, target), back_translation in zip(
        aligned, back_translations, strict=True
    ):
        score = SequenceMatcher(
            None, source.casefold(), back_translation.casefold()
        ).ratio()
        records.append(
            {
                "route": route,
                "unit": index,
                "score": round(score, 4),
                "source": source,
                "translation": target,
                "backTranslation": back_translation,
                "reviewed": previous_reviewed.get((route, source, target), False),
            }
        )

    def summary(items: list[dict[str, object]]) -> dict[str, float | int]:
        return {
            "units": len(items),
            "meanBackTranslationSimilarity": round(
                sum(float(item["score"]) for item in items) / len(items), 4
            )
            if items
            else 1.0,
            "unitsBelow0_35": sum(float(item["score"]) < 0.35 for item in items),
        }

    page_reviews = {
        route: summary(records[start:end])
        for route, (start, end) in route_ranges.items()
    }
    overall = summary(records)
    low_confidence = [item for item in records if float(item["score"]) < 0.35]
    report = {
        "locale": args.locale,
        "sourceAppCommit": catalog["sourceAppCommit"],
        "sourceHashes": {
            route: entry["sha256"]
            for route, entry in POLICY_REGISTRY["source"]["routes"].items()
        },
        "summary": overall,
        "pages": page_reviews,
        "mandatoryReview": previous_report.get("mandatoryReview", []),
        "lowConfidenceUnits": low_confidence,
    }
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")

    manifest["policyBackTranslationReview"] = {
        **overall,
        "threshold": 0.35,
        "lowConfidenceReport": report_path.name,
    }
    for route, source_entry in POLICY_REGISTRY["source"]["routes"].items():
        translated = (
            args.candidate / "pages" / args.locale / source_entry["source"]
        ).read_text()
        manifest["pages"][route]["sourceSha256"] = source_entry["sha256"]
        manifest["pages"][route]["locales"][args.locale]["sha256"] = (
            translation.digest(translated)
        )
        manifest["pages"][route]["locales"][args.locale]["review"] = (
            page_reviews[route]
        )
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n"
    )
    print(json.dumps(overall))


if __name__ == "__main__":
    main()
