#!/usr/bin/env python3
"""Generate the static documentation translations with a local NLLB model.

This is a maintainer tool, not a site runtime dependency. It preserves Markdown,
code, formulas, URLs, identifiers, and product names; applies the clc-app glossary;
and records source hashes plus an automated back-translation review.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Callable

import ctranslate2
import sentencepiece as spm


ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "docs/pages"
I18N = ROOT / "docs/i18n"
LOCALES = ["ar", "de", "dz", "es", "fr", "it", "pt", "sr", "sw", "uk"]
LANGUAGE_CODES = {
    "en": "eng_Latn",
    "ar": "arb_Arab",
    "de": "deu_Latn",
    "dz": "dzo_Tibt",
    "es": "spa_Latn",
    "fr": "fra_Latn",
    "it": "ita_Latn",
    "pt": "por_Latn",
    "sr": "srp_Cyrl",
    "sw": "swh_Latn",
    "uk": "ukr_Cyrl",
}
APP_BASELINE = "32265981e7e2f7fcca9c0bb53b7aad8a1559f7f1"
TRANSLATION_DATE = "8 October 2026"
UNCHANGED_NAMES = [
    "Cosmo-Local Credit",
    "CLC App",
    "Sarafu Network",
    "Grassroots Economics Foundation",
    "Joseph Kimani",
    "William O. Ruddick",
    "Mohamed Sohail",
    "Protocol v1.1.0",
    "White Paper v0.8",
    "SwapPool",
    "SwapRouter",
    "Limiter",
    "Quoter",
    "VoucherFactory",
    "PoolFactory",
    "OpenZeppelin",
    "MiniSearch",
]


@dataclass
class Protected:
    token: str
    source: str
    replacement: str


class Translator:
    def __init__(self, model: Path, threads: int) -> None:
        self.engine = ctranslate2.Translator(
            str(model),
            device="cpu",
            compute_type="int8",
            inter_threads=1,
            intra_threads=threads,
        )
        self.tokenizer = spm.SentencePieceProcessor(
            model_file=str(model / "sentencepiece.bpe.model")
        )

    def translate_many(
        self, texts: list[str], source: str, target: str, beam_size: int = 2
    ) -> list[str]:
        if not texts:
            return []
        unique_texts = list(dict.fromkeys(texts))
        tokenized = [
            [LANGUAGE_CODES[source]] + self.tokenizer.encode(text, out_type=str) + ["</s>"]
            for text in unique_texts
        ]
        results = self.engine.translate_batch(
            tokenized,
            target_prefix=[[LANGUAGE_CODES[target]]] * len(tokenized),
            beam_size=beam_size,
            max_batch_size=256,
            batch_type="tokens",
            max_decoding_length=512 if target == "dz" else 256,
            replace_unknowns=True,
        )
        translated_unique = [
            self.tokenizer.decode(result.hypotheses[0][1:]).strip()
            for result in results
        ]
        translations = dict(zip(unique_texts, translated_unique, strict=True))
        return [translations[text] for text in texts]


def digest(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def english_sources() -> list[Path]:
    sources: list[Path] = []
    for section in ["introduction", "protocol", "governance", "white-paper"]:
        sources.extend(
            path
            for path in sorted((PAGES / section).glob("*"))
            if path.suffix in {".md", ".mdx"}
        )
    return sources


def route_for(path: Path) -> str:
    relative = path.relative_to(PAGES).with_suffix("").as_posix()
    return "/" + (relative.removesuffix("/index") or "")


def protect_text(
    value: str,
    locale: str,
    canonical_terms: dict[str, str],
    app_glossary: dict[str, dict[str, str]],
) -> tuple[str, list[Protected]]:
    protected: list[Protected] = []
    value = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", value)
    value = re.sub(r"__(.+?)__", r"<strong>\1</strong>", value)

    def store(
        source: str,
        replacement: str | None = None,
        _token_hint: str | None = None,
    ) -> str:
        token = f"XxOpaque{len(protected):04d}Xx"
        protected.append(
            Protected(token, source, replacement if replacement is not None else source)
        )
        return token

    for name in sorted(UNCHANGED_NAMES, key=len, reverse=True):
        if name in value:
            token = re.sub(r"[^A-Za-z]+", "", name) + "NameProtected"
            value = value.replace(name, store(name, name, token))

    glossary = {
        **{source: translations[locale] for source, translations in app_glossary.items()},
        **canonical_terms,
    }
    for source, replacement in sorted(glossary.items(), key=lambda item: len(item[0]), reverse=True):
        pattern = rf"(?<![\w]){re.escape(source)}(?![\w])"
        value = re.sub(
            pattern,
            lambda match, target=replacement: store(match.group(0), target),
            value,
        )

    patterns = [
        r"<strong>[^<\n]*(?:=|≈|−|≤|≥)[^<\n]*</strong>",
        r"`[^`\n]+`",
        r"(?<=\])\([^\n)]*\)",
        r"https?://[^\s)>]+",
        r"mailto:[^\s)>]+",
        r"<(?!/?(?:strong|em)\b)[^>]+>",
        r"\$[^$\n]+\$",
        r"\\\([^\n]+?\\\)",
        r"\{[^{}\n]+\}",
        r"\b0x[a-fA-F0-9]+\b",
        r"\b\d+(?:\.\d+)+(?:-[A-Za-z0-9.]+)?\b",
        r"(?!XxOpaque\d{4}Xx)\b[A-Z][A-Z0-9-]{1,}\b",
    ]
    for pattern in patterns:
        value = re.sub(pattern, lambda match: store(match.group(0)), value)
    return value, protected


def restore_text(value: str, protected: list[Protected]) -> str:
    for item in reversed(protected):
        token_pattern = re.escape(item.token)
        if item.token.startswith("XxOpaque"):
            token_pattern = re.escape(item.token[:-2]) + r"Xx?"
        token_match = re.search(token_pattern, value, flags=re.IGNORECASE)
        if not token_match:
            raise ValueError(
                f"Translation dropped protected token {item.token}: {item.source}; output={value!r}"
            )
        value = re.sub(
            token_pattern,
            lambda _match, replacement=item.replacement: replacement,
            value,
            flags=re.IGNORECASE,
        )
    return value.replace("<strong>", "**").replace("</strong>", "**")


def split_long(value: str, tokenizer: spm.SentencePieceProcessor) -> list[str]:
    pieces = re.split(r"(?<=[.!?。؟])\s+", value)
    if len(pieces) > 1:
        return [piece for piece in pieces if piece]
    if len(tokenizer.encode(value, out_type=str)) <= 420:
        return [value]
    chunks: list[str] = []
    current = ""
    for piece in pieces:
        candidate = f"{current} {piece}".strip()
        if current and len(tokenizer.encode(candidate, out_type=str)) > 380:
            chunks.append(current)
            current = piece
        else:
            current = candidate
    if current:
        chunks.append(current)
    return chunks


class MarkdownTemplate:
    def __init__(self, source: str) -> None:
        self.source = source
        self.segments: list[str] = []
        self.template: str | None = None

    def marker(self, value: str) -> str:
        if not value.strip():
            return value
        if "<br/>" in value:
            return "<br/>".join(self.marker(part) for part in value.split("<br/>"))
        bold = re.fullmatch(r"(\s*)\*\*(.+?)\*\*(\s*)", value)
        if bold:
            marker = f"CLCTRANSLATE{len(self.segments):05d}"
            self.segments.append(bold.group(2))
            return f"{bold.group(1)}**{marker}**{bold.group(3)}"
        bold_prefix = re.fullmatch(r"(\s*)\*\*(.+?)\*\*(.+)", value)
        if bold_prefix:
            label_source = bold_prefix.group(2)
            label_suffix = ":" if label_source.endswith(":") else ""
            label = self.marker(label_source.removesuffix(":")) + label_suffix
            remainder_source = bold_prefix.group(3)
            separator = re.match(r"\s*", remainder_source).group(0)  # type: ignore[union-attr]
            remainder = self.marker(remainder_source[len(separator) :])
            return f"{bold_prefix.group(1)}**{label}**{separator}{remainder}"
        marker = f"CLCTRANSLATE{len(self.segments):05d}"
        self.segments.append(value)
        return marker

    def build(self) -> str:
        if self.template is not None:
            return self.template
        lines = self.source.splitlines()
        output: list[str] = []
        in_code = False
        in_math = False
        in_chart = False
        for line in lines:
            stripped = line.strip()
            if stripped.startswith("```"):
                in_code = not in_code
                output.append(line)
                continue
            if stripped == "$$":
                in_math = not in_math
                output.append(line)
                continue
            if in_code or in_math:
                output.append(line)
                continue
            if line.startswith("import ") or line.startswith("export "):
                output.append(line.replace("../../components/", "../../../components/"))
                continue
            if "chart={`" in line:
                in_chart = True
                output.append(line)
                continue
            if in_chart:
                if "`}" in line:
                    in_chart = False
                    output.append(line)
                    continue
                line = re.sub(
                    r'(?<=\[\")(.+?)(?=\"\])',
                    lambda match: self.marker(match.group(0)),
                    line,
                )
                line = re.sub(
                    r"(?<=\|)([^|]+)(?=\|)",
                    lambda match: self.marker(match.group(0)),
                    line,
                )
                output.append(line)
                continue
            if re.fullmatch(r"\s*\|?(?:\s*:?-+:?\s*\|)+\s*", line):
                output.append(line)
                continue
            if stripped.startswith("|") and stripped.endswith("|"):
                cells = line.split("|")
                output.append("|".join(self.marker(cell) if cell.strip() else cell for cell in cells))
                continue
            if re.fullmatch(r"\s*(?:</?[A-Z][^>]*>|[A-Z][A-Za-z]+\s*=.*|/>)\s*", line):
                label_match = re.search(r'label="([^"]+)"', line)
                if label_match:
                    value = self.marker(label_match.group(1))
                    line = line[: label_match.start(1)] + value + line[label_match.end(1) :]
                output.append(line)
                continue
            prefix_match = re.match(
                r"^(\s*(?:(?:#{1,6}|>|[-+*]|\d+[.)])\s+|\[[ xX]\]\s+))",
                line,
            )
            if prefix_match:
                prefix = prefix_match.group(1)
                output.append(prefix + self.marker(line[len(prefix) :]))
            else:
                output.append(self.marker(line))
        self.template = "\n".join(output) + ("\n" if self.source.endswith("\n") else "")
        return self.template

    def render(self, translated: list[str]) -> str:
        value = self.build()
        for index, segment in enumerate(translated):
            value = value.replace(f"CLCTRANSLATE{index:05d}", segment)
        if "CLCTRANSLATE" in value:
            raise ValueError("Not every Markdown translation marker was resolved")
        return value


def translate_segments(
    translator: Translator,
    segments: list[str],
    locale: str,
    canonical_terms: dict[str, str],
    app_glossary: dict[str, dict[str, str]],
) -> tuple[list[str], dict[str, float | int]]:
    protected_segments: list[tuple[list[str], list[Protected]]] = []
    flat_chunks: list[str] = []
    chunk_counts: list[int] = []
    for segment in segments:
        protected_value, protected = protect_text(
            segment, locale, canonical_terms, app_glossary
        )
        visible_source = protected_value
        for item in protected:
            visible_source = re.sub(
                re.escape(item.token), "", visible_source, flags=re.IGNORECASE
            )
        visible_source = re.sub(r"<[^>]+>", "", visible_source)
        chunks = (
            split_long(protected_value, translator.tokenizer)
            if re.search(r"[A-Za-z]", visible_source)
            else [protected_value]
        )
        protected_segments.append((chunks, protected))
        if re.search(r"[A-Za-z]", visible_source):
            flat_chunks.extend(chunks)
            chunk_counts.append(len(chunks))
        else:
            chunk_counts.append(0)

    translated_chunks = translator.translate_many(flat_chunks, "en", locale)
    translated: list[str] = []
    offset = 0
    for source_segment, (source_chunks, protected), count in zip(
        segments, protected_segments, chunk_counts, strict=True
    ):
        value = (
            " ".join(translated_chunks[offset : offset + count])
            if count
            else source_chunks[0]
        )
        try:
            translated.append(restore_text(value, protected))
        except ValueError as error:
            raise ValueError(f"source={source_segment!r}; {error}") from error
        offset += count

    # Verification is a separate full back-translation pass over every unit.
    back_chunks = translator.translate_many(translated, locale, "en", beam_size=1)
    similarities = [
        SequenceMatcher(None, source.casefold(), back.casefold()).ratio()
        for source, back in zip(segments, back_chunks, strict=True)
    ]
    review = {
        "units": len(segments),
        "meanBackTranslationSimilarity": round(sum(similarities) / len(similarities), 4)
        if similarities
        else 1.0,
        "unitsBelow0_35": sum(score < 0.35 for score in similarities),
        "scores": similarities,
    }
    return translated, review


def review_scores(scores: list[float]) -> dict[str, float | int]:
    return {
        "units": len(scores),
        "meanBackTranslationSimilarity": round(sum(scores) / len(scores), 4)
        if scores
        else 1.0,
        "unitsBelow0_35": sum(score < 0.35 for score in scores),
    }


def json_template(value: object, segments: list[str]) -> object:
    if isinstance(value, str):
        index = len(segments)
        segments.append(value)
        return {"__clcTranslationIndex": index}
    if isinstance(value, list):
        return [json_template(item, segments) for item in value]
    if isinstance(value, dict):
        return {key: json_template(item, segments) for key, item in value.items()}
    return value


def render_json_template(value: object, translated: list[str]) -> object:
    if isinstance(value, dict) and set(value) == {"__clcTranslationIndex"}:
        return translated[int(value["__clcTranslationIndex"])]
    if isinstance(value, list):
        return [render_json_template(item, translated) for item in value]
    if isinstance(value, dict):
        return {key: render_json_template(item, translated) for key, item in value.items()}
    return value


def translate_json(
    value: object,
    translate: Callable[[list[str]], tuple[list[str], dict[str, float | int]]],
) -> tuple[object, list[dict[str, float | int]]]:
    reviews: list[dict[str, float | int]] = []
    if isinstance(value, str):
        translated, review = translate([value])
        reviews.append(review)
        return translated[0], reviews
    if isinstance(value, list):
        output = []
        for item in value:
            translated, item_reviews = translate_json(item, translate)
            output.append(translated)
            reviews.extend(item_reviews)
        return output, reviews
    if isinstance(value, dict):
        output = {}
        for key, item in value.items():
            translated, item_reviews = translate_json(item, translate)
            output[key] = translated
            reviews.extend(item_reviews)
        return output, reviews
    return value, reviews


def localize_links(value: str, locale: str, routes: set[str]) -> str:
    def replace_target(match: re.Match[str]) -> str:
        wrapper, target = match.groups()
        path, suffix = re.match(r"([^?#]+)(.*)", target).groups()  # type: ignore[union-attr]
        if path not in routes:
            return match.group(0)
        return f"{wrapper}/{locale}{path}{suffix}"

    value = re.sub(r"((?:\]\(|href=[\"']))(/[^)\"']+)", replace_target, value)
    return value


def insert_notice(value: str, notice: str) -> str:
    lines = value.splitlines()
    for index, line in enumerate(lines):
        if line.startswith("# "):
            lines[index + 1 : index + 1] = ["", notice]
            break
    return "\n".join(lines) + "\n"


def aggregate_reviews(reviews: list[dict[str, float | int]]) -> dict[str, float | int]:
    units = sum(int(review["units"]) for review in reviews)
    if not units:
        return {"units": 0, "meanBackTranslationSimilarity": 1.0, "unitsBelow0_35": 0}
    weighted = sum(
        float(review["meanBackTranslationSimilarity"]) * int(review["units"])
        for review in reviews
    )
    return {
        "units": units,
        "meanBackTranslationSimilarity": round(weighted / units, 4),
        "unitsBelow0_35": sum(int(review["unitsBelow0_35"]) for review in reviews),
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", type=Path, required=True)
    parser.add_argument("--locales", nargs="*", choices=LOCALES, default=LOCALES)
    parser.add_argument("--threads", type=int, default=10)
    parser.add_argument(
        "--manifest", type=Path, default=I18N / "translation-manifest.json"
    )
    args = parser.parse_args()

    translator = Translator(args.model, args.threads)
    glossary_data = json.loads((I18N / "glossary.json").read_text())
    if glossary_data["sourceAppCommit"] != APP_BASELINE:
        raise ValueError("The glossary is not synchronized to the required clc-app commit")
    app_glossary = glossary_data["terms"]
    english_ui = json.loads((I18N / "ui/en.json").read_text())
    english_navigation = json.loads((I18N / "navigation/en.json").read_text())
    sources = english_sources()
    routes = {route_for(path) for path in sources}
    manifest: dict[str, object] = {
        "sourceAppCommit": APP_BASELINE,
        "translationPublicationDate": TRANSLATION_DATE,
        "reviewProcess": [
            "semantic NLLB translation with protected technical tokens",
            "clarity normalization with complete-line context and the clc-app glossary",
            "unit-by-unit automated back-translation and structural verification",
        ],
        "pages": {},
    }

    for locale in args.locales:
        canonical_source = ["Commitment Pool", "Commitment Pools", "Pool Steward", "Pool Stewards"]
        canonical_terms = {
            source: app_glossary[source][locale] for source in canonical_source
        }

        def translate(values: list[str]):
            return translate_segments(
                translator, values, locale, canonical_terms, app_glossary
            )

        ui_segments: list[str] = []
        ui_template = json_template(english_ui, ui_segments)
        ui_translated, ui_review = translate(ui_segments)
        ui = render_json_template(ui_template, ui_translated)
        # Reuse the app-aligned controls already reviewed for the splash page.
        splash = json.loads((I18N / f"messages/{locale}.json").read_text())
        ui["controls"] = {
            key: splash["controls"][key]
            for key in ["language", "colorTheme", "lightMode", "darkMode"]
        }
        (I18N / f"ui/{locale}.json").write_text(
            json.dumps(ui, ensure_ascii=False, indent=2) + "\n"
        )

        nav_segments: list[str] = []
        nav_template = json_template(english_navigation, nav_segments)
        nav_translated, nav_review = translate(nav_segments)
        navigation = render_json_template(nav_template, nav_translated)
        (I18N / f"navigation/{locale}.json").write_text(
            json.dumps(navigation, ensure_ascii=False, indent=2) + "\n"
        )

        locale_reviews: list[dict[str, float | int]] = [ui_review, nav_review]
        page_jobs: list[tuple[Path, str, MarkdownTemplate, int, int]] = []
        all_page_segments: list[str] = []
        for source_path in sources:
            source = source_path.read_text()
            template = MarkdownTemplate(source)
            template.build()
            start = len(all_page_segments)
            all_page_segments.extend(template.segments)
            page_jobs.append(
                (source_path, source, template, start, len(all_page_segments))
            )

        try:
            all_translated, all_review = translate(all_page_segments)
        except ValueError as error:
            raise ValueError(f"documentation corpus: {error}") from error
        all_scores = all_review.pop("scores")

        for source_path, source, template, start, end in page_jobs:
            translated_segments = all_translated[start:end]
            review = review_scores(all_scores[start:end])
            translated = template.render(translated_segments)
            translated = localize_links(translated, locale, routes)

            if source_path == PAGES / "protocol/network.mdx":
                diagram_messages = ui["chrome"]
                translated = translated.replace(
                    "<MermaidDiagram\n",
                    "<MermaidDiagram\n"
                    f"  scrollMessage={json.dumps(diagram_messages['diagramScroll'], ensure_ascii=False)}\n"
                    f"  errorMessage={json.dumps(diagram_messages['diagramError'], ensure_ascii=False)}\n",
                )

            route = route_for(source_path)
            if route == "/governance/terms":
                legal = ui["legal"]
                notice = (
                    f"> **{legal['translationTitle']}.** {legal['translationNotice']} "
                    f'<a data-english-source="true" href="/governance/terms" hreflang="en">'
                    f"{legal['englishSource']}</a>."
                )
                translated = insert_notice(translated, notice)
            elif route.startswith("/white-paper"):
                paper = ui["whitePaper"]
                notice = (
                    f"> **{paper['translationTitle']}.** {paper['translationNotice']} "
                    f'<a data-english-source="true" href="{route}" hreflang="en">'
                    f"{paper['englishSource']}</a>."
                )
                translated = insert_notice(translated, notice)
                if route == "/white-paper":
                    translated = translated.replace(
                        "Cosmo-Local-Credit-CLC-White-Paper-v8.pdf",
                        f"Cosmo-Local-Credit-CLC-White-Paper-v8-{locale}.pdf",
                    )
                if route == "/white-paper/archive":
                    translated += f"\n> {paper['archivedEnglishOnly']}\n"

            relative = source_path.relative_to(PAGES)
            destination = PAGES / locale / relative
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_text(translated)
            locale_reviews.append(review)

            pages = manifest["pages"]
            page_entry = pages.setdefault(  # type: ignore[union-attr]
                route,
                {
                    "source": relative.as_posix(),
                    "sourceSha256": digest(source),
                    "locales": {},
                },
            )
            page_entry["locales"][locale] = {  # type: ignore[index]
                "sha256": digest(translated),
                "review": review,
            }

        print(f"{locale}: {aggregate_reviews(locale_reviews)}", flush=True)

    args.manifest.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n"
    )


if __name__ == "__main__":
    main()
