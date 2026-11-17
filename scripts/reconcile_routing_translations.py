#!/usr/bin/env python3
"""Reconcile the v0.9 routing changes into one reviewed locale.

The general translation generator is useful for a first draft, but replacing a
whole established locale can regress previously reviewed terminology.  This
tool performs a three-way, section-level reconciliation instead:

* the committed English page is the v0.8 base;
* the working-tree English page is the v0.9 source;
* the tracked localized page supplies every unchanged section.

Only changed or inserted sections are translated.  Markdown/MDX structure,
links, code, formulas, contract names, and diagram syntax are kept outside the
translation model.  Output is always written to a candidate directory for
review; this script never promotes files into ``docs/pages``.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import subprocess
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path

from generate_documentation_translations import (
    CachedTranslator,
    I18N,
    LANGUAGE_CODES,
    LOCALES,
    MadladTranslator,
    NllbTranslator,
    ROUTING_ROLLOUT,
)


ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "docs/pages"
ROUTES = list(ROUTING_ROLLOUT["source"]["affectedRoutes"])
SOURCE_VERSION = ROUTING_ROLLOUT["source"]["whitePaperVersion"]
SOURCE_DATE = ROUTING_ROLLOUT["source"]["publicationDate"]

UNCHANGED_TERMS = [
    "Cosmo-Local Credit",
    "Grassroots Economics Foundation",
    "Sarafu Network",
    "Protocol v1.1.0",
    "CLC App",
    "CLC Core",
    "SwapPool",
    "SwapRouter",
    "Calibur",
    "EOA",
    "Safe",
    "revertOnFailure",
    "MiniSearch",
    "Gnosis Chain",
    "GEF",
    "CPP",
    "HTLC",
]


@dataclass
class Section:
    level: int
    title: str
    text: str


@dataclass
class TranslationUnit:
    route: str
    source: str
    prepared: str
    replacements: list[tuple[str, str]]


def sha256(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def route_to_relative(route: str) -> Path:
    relative = route.lstrip("/") or "index"
    for suffix in (".mdx", ".md"):
        candidate = Path(f"{relative}{suffix}")
        if (PAGES / candidate).exists():
            return candidate
    index = Path(relative) / "index.mdx"
    if (PAGES / index).exists():
        return index
    raise FileNotFoundError(f"No English page for {route}")


def committed_source(relative: Path) -> str:
    result = subprocess.run(
        ["git", "show", f"HEAD:docs/pages/{relative.as_posix()}"],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def parse_sections(value: str) -> list[Section]:
    lines = value.splitlines(keepends=True)
    sections: list[Section] = []
    start = 0
    level = 0
    title = "__preamble__"
    in_fence = False
    for index, line in enumerate(lines):
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
        if in_fence:
            continue
        match = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if not match:
            continue
        if index > start or sections or start == 0:
            previous = "".join(lines[start:index])
            if previous or not sections:
                sections.append(Section(level, title, previous))
        level = len(match.group(1))
        title = match.group(2)
        start = index
    tail = "".join(lines[start:])
    sections.append(Section(level, title, tail))
    if sections and not sections[0].text and sections[0].title == "__preamble__":
        sections.pop(0)
    return sections


def assert_base_locale_structure(
    route: str, base: list[Section], localized: list[Section]
) -> None:
    base_levels = [section.level for section in base]
    locale_levels = [section.level for section in localized]
    if base_levels != locale_levels:
        raise ValueError(
            f"{route}: committed English and localized heading levels differ: "
            f"{base_levels!r} != {locale_levels!r}"
        )


class CandidateRenderer:
    def __init__(
        self,
        locale: str,
        translator: CachedTranslator,
        review_translator: CachedTranslator,
        glossary: dict[str, str],
    ) -> None:
        self.locale = locale
        self.translator = translator
        self.review_translator = review_translator
        self.glossary = glossary
        self.units: list[TranslationUnit] = []
        self.templates: dict[str, list[str]] = {}

    @staticmethod
    def marker(index: int) -> str:
        return f"ZXQ{index:04d}QXZ"

    def protect(self, value: str) -> tuple[str, list[tuple[str, str]]]:
        # Structural and technical spans are split out by ``add_unit`` before
        # this point, so the model receives ordinary prose without opaque
        # placeholders.  This deliberately avoids marker hallucinations in
        # MADLAD while ``restore`` remains available for older cache entries.
        return value, []

    def normalize_terms(self, source: str, value: str) -> str:
        """Normalize model-retained English terms to the app-aligned glossary.

        Opaque placeholders are reliable for code and identifiers, but an NLLB
        model may omit a placeholder used as a grammatical noun.  Canonical
        product vocabulary therefore stays visible during translation and is
        normalized afterward whenever the model retains the English term.
        """

        for english, localized in sorted(
            self.glossary.items(), key=lambda item: len(item[0]), reverse=True
        ):
            if not re.search(
                rf"(?<![\w]){re.escape(english)}(?![\w])",
                source,
                flags=re.IGNORECASE,
            ):
                continue
            value = re.sub(
                rf"(?<![\w]){re.escape(english)}(?![\w])",
                localized,
                value,
                flags=re.IGNORECASE,
            )
        if self.locale == "fr" and re.search(r"\bPools?\b", source):
            value = re.sub(r"\bpiscines\b", "Bassins", value, flags=re.IGNORECASE)
            value = re.sub(r"\bpiscine\b", "Bassin", value, flags=re.IGNORECASE)
        return value

    @staticmethod
    def restore(value: str, replacements: list[tuple[str, str]]) -> str:
        # Targets can contain an earlier marker (for example a protected
        # Markdown link destination containing a protected URL), so unwind in
        # reverse order.
        for marker, replacement in reversed(replacements):
            marker_number = int(re.search(r"\d+", marker).group(0))
            marker_pattern = (
                rf"Z(?:X)+Q[a-z]*\s*0*{marker_number}"
                rf"(?:\s*QX+(?:\s*Z)?)?"
            )
            if not re.search(marker_pattern, value, flags=re.IGNORECASE):
                raise ValueError(
                    f"Translation dropped protected marker {marker}; output={value!r}"
                )
            value = re.sub(
                marker_pattern,
                lambda _match, target=replacement: target,
                value,
                flags=re.IGNORECASE,
            )
        if re.search(
            r"Z(?:X)+Q[a-z]*\s*\d+(?:\s*QX+(?:\s*Z)?)?",
            value,
            flags=re.IGNORECASE,
        ):
            raise ValueError(f"Unrestored marker in {value!r}")
        return value

    def add_unit(self, route: str, value: str) -> str:
        if not re.search(r"[A-Za-z]", value):
            return value
        leading = re.match(r"^\s*", value).group(0)
        trailing = re.search(r"\s*$", value).group(0)
        core_end = len(value) - len(trailing) if trailing else len(value)
        core = value[len(leading) : core_end]
        if core != value:
            return f"{leading}{self.add_unit(route, core)}{trailing}"
        if "<br/>" in value:
            return "<br/>".join(
                self.add_unit(route, part) for part in value.split("<br/>")
            )
        anchor = re.search(r"(<a\b[^>]*>)(.*?)(</a>)", value)
        if anchor:
            return "".join(
                [
                    self.add_unit(route, value[: anchor.start()]),
                    anchor.group(1),
                    self.add_unit(route, anchor.group(2)),
                    anchor.group(3),
                    self.add_unit(route, value[anchor.end() :]),
                ]
            )
        math = re.search(r"\$[^$\n]+\$|\\\([^\n]+?\\\)", value)
        if math:
            return "".join(
                [
                    self.add_unit(route, value[: math.start()]),
                    math.group(0),
                    self.add_unit(route, value[math.end() :]),
                ]
            )
        address = re.search(r"\b0x[a-fA-F0-9]+\b", value)
        if address:
            return "".join(
                [
                    self.add_unit(route, value[: address.start()]),
                    address.group(0),
                    self.add_unit(route, value[address.end() :]),
                ]
            )
        html = re.search(r"<[^>]+>", value)
        if html:
            return "".join(
                [
                    self.add_unit(route, value[: html.start()]),
                    html.group(0),
                    self.add_unit(route, value[html.end() :]),
                ]
            )
        inline_code = re.search(r"`([^`\n]+)`", value)
        if inline_code:
            return "".join(
                [
                    self.add_unit(route, value[: inline_code.start()]),
                    inline_code.group(0),
                    self.add_unit(route, value[inline_code.end() :]),
                ]
            )
        link = re.search(r"\[([^\]\n]+)\]\(([^)\n]+)\)", value)
        if link:
            return "".join(
                [
                    self.add_unit(route, value[: link.start()]),
                    "[",
                    self.add_unit(route, link.group(1)),
                    f"]({link.group(2)})",
                    self.add_unit(route, value[link.end() :]),
                ]
            )
        bare_url = re.search(r"(?:https?://|mailto:)[^\s)>]+", value)
        if bare_url:
            return "".join(
                [
                    self.add_unit(route, value[: bare_url.start()]),
                    bare_url.group(0),
                    self.add_unit(route, value[bare_url.end() :]),
                ]
            )
        parts = re.split(r"(?<=[.!?])\s+(?=(?:[*`\[]|[A-Z]))", value)
        if len(parts) > 1:
            return " ".join(self.add_unit(route, part) for part in parts)
        if len(value) > 600:
            chunks = re.split(r"(?<=[:;])\s+", value)
            if len(chunks) == 1:
                chunks = re.split(r"(?<=,)\s+", value)
            if len(chunks) > 1:
                return " ".join(self.add_unit(route, chunk) for chunk in chunks)
        prepared, replacements = self.protect(value)
        index = len(self.units)
        self.units.append(TranslationUnit(route, value, prepared, replacements))
        return f"@@CLCUNIT{index:06d}@@"

    def template_line(self, route: str, line: str, *, in_chart: bool) -> str:
        if not line.strip():
            return line
        if re.match(r"^\s*(?:import|export)\b", line):
            return line
        if re.match(r"^\s*(?:```|~~~)", line):
            return line
        if re.match(r"^\s*\|?\s*:?-{3,}", line):
            return line

        if in_chart:
            # Translate only visitor-facing node and edge labels. Mermaid IDs,
            # arrows, and operators remain untouched.
            def quoted(match: re.Match[str]) -> str:
                return f'"{self.add_unit(route, match.group(1))}"'

            line = re.sub(r'"([^"\n]+)"', quoted, line)
            line = re.sub(
                r"\|([^|\n]+)\|",
                lambda match: f"|{self.add_unit(route, match.group(1))}|",
                line,
            )
            return line

        prop = re.match(
            r'^(\s*(?:scrollMessage|errorMessage|label)=")([^"]+)(".*)$', line
        )
        if prop:
            newline = "\n" if line.endswith("\n") else ""
            return (
                f"{prop.group(1)}{self.add_unit(route, prop.group(2))}"
                f"{prop.group(3)}{newline}"
            )

        if re.match(r"^\s*[A-Za-z][A-Za-z0-9]*=\{", line):
            return line

        heading = re.match(r"^(#{1,6}\s+)(.*?)(\s*)$", line)
        if heading:
            return f"{heading.group(1)}{self.add_unit(route, heading.group(2))}{heading.group(3)}"

        if line.lstrip().startswith("|") and line.count("|") >= 2:
            parts = line.split("|")
            rendered = []
            for part in parts:
                if part.strip() and not re.fullmatch(r"\s*:?-{3,}:?\s*", part):
                    leading = part[: len(part) - len(part.lstrip())]
                    trailing = part[len(part.rstrip()) :]
                    rendered.append(
                        f"{leading}{self.add_unit(route, part.strip())}{trailing}"
                    )
                else:
                    rendered.append(part)
            return "|".join(rendered)

        item = re.match(r"^(\s*(?:(?:[-*+])|(?:\d+[.)]))\s+)(.*?)(\s*)$", line)
        if item:
            return f"{item.group(1)}{self.add_unit(route, item.group(2))}{item.group(3)}"

        quote = re.match(r"^(\s*>\s*)(.*?)(\s*)$", line)
        if quote:
            return f"{quote.group(1)}{self.add_unit(route, quote.group(2))}{quote.group(3)}"

        # JSX structure and closing braces contain no visitor-facing prose.
        if re.match(r"^\s*(?:<[/A-Z]|[/}>]+\s*$)", line):
            return line
        return self.add_unit(route, line.rstrip("\n")) + ("\n" if line.endswith("\n") else "")

    def template_section(self, route: str, value: str) -> str:
        lines: list[str] = []
        in_chart = False
        for line in value.splitlines(keepends=True):
            if "chart={`" in line:
                in_chart = True
                lines.append(line)
                continue
            if in_chart and "`}" in line:
                in_chart = False
                lines.append(line)
                continue
            lines.append(self.template_line(route, line, in_chart=in_chart))
        return "".join(lines)

    def translate_all(self) -> tuple[list[str], list[dict[str, object]]]:
        prepared = [unit.prepared for unit in self.units]
        translated = self.translator.translate_many(
            prepared, "en", self.locale, beam_size=4
        )
        restored: list[str] = []
        for unit, value in zip(self.units, translated, strict=True):
            try:
                restored_value = self.restore(value, unit.replacements)
            except ValueError as error:
                raise ValueError(
                    f"{unit.route}: {unit.source!r}: replacements={unit.replacements!r}: {error}"
                ) from error
            restored.append(self.normalize_terms(unit.source, restored_value))

        # Independent back-translation supports focused human review.  Protect
        # the already restored target terms only by translating the natural
        # output directly; similarity is an alert, not an automatic approval.
        back = self.review_translator.translate_many(
            restored, self.locale, "en", beam_size=4
        )
        reviews: list[dict[str, object]] = []
        for unit, target, back_value in zip(
            self.units, restored, back, strict=True
        ):
            similarity = SequenceMatcher(
                None, unit.source.lower(), back_value.lower()
            ).ratio()
            reviews.append(
                {
                    "route": unit.route,
                    "source": unit.source,
                    "translation": target,
                    "backTranslation": back_value,
                    "similarity": round(similarity, 4),
                }
            )
        return restored, reviews


def localize_links(value: str, locale: str) -> str:
    prefixes = ("/introduction", "/protocol", "/governance", "/white-paper")

    def replace(match: re.Match[str]) -> str:
        target = match.group(1)
        if target.startswith(f"/{locale}/"):
            return match.group(0)
        if target.startswith(prefixes) and not target.startswith("/white-paper/Cosmo-"):
            return f"](/{locale}{target})"
        return match.group(0)

    value = re.sub(r"\]\((/[^)]+)\)", replace, value)
    if locale != "en":
        value = value.replace(
            f"/white-paper/Cosmo-Local-Credit-CLC-White-Paper-v{SOURCE_VERSION}.pdf",
            f"/white-paper/Cosmo-Local-Credit-CLC-White-Paper-v{SOURCE_VERSION}-{locale}.pdf",
        )
    return value


def interpolate(template: str, values: list[str]) -> str:
    def replace(match: re.Match[str]) -> str:
        return values[int(match.group(1))]

    return re.sub(r"@@CLCUNIT(\d{6})@@", replace, template)


def reconcile_page(
    route: str,
    base_text: str,
    current_text: str,
    localized_text: str,
    renderer: CandidateRenderer,
) -> tuple[str, int]:
    base = parse_sections(base_text)
    current = parse_sections(current_text)
    localized = parse_sections(localized_text)
    assert_base_locale_structure(route, base, localized)

    base_keys = [(section.level, section.title) for section in base]
    current_keys = [(section.level, section.title) for section in current]
    matcher = SequenceMatcher(None, base_keys, current_keys, autojunk=False)
    output: list[str] = []
    changed = 0

    def reconcile_lines(
        old_section: Section,
        new_section: Section,
        localized_section: Section,
    ) -> str:
        old_lines = old_section.text.splitlines(keepends=True)
        new_lines = new_section.text.splitlines(keepends=True)
        localized_lines = localized_section.text.splitlines(keepends=True)
        if len(old_lines) != len(localized_lines):
            return renderer.template_section(route, new_section.text)

        line_matcher = SequenceMatcher(
            None, old_lines, new_lines, autojunk=False
        )
        rendered: list[str] = []
        for line_tag, a1, a2, b1, b2 in line_matcher.get_opcodes():
            if line_tag == "equal":
                rendered.extend(localized_lines[a1:a2])
            elif line_tag == "delete":
                continue
            elif line_tag in {"replace", "insert"}:
                # Version-only White Paper edits retain the reviewed localized
                # label and update only the stable version tokens and filename.
                if (
                    route == "/white-paper"
                    and line_tag == "replace"
                    and a2 - a1 == b2 - b1 == 1
                    and any(
                        token in old_lines[a1]
                        for token in ["0.8", "v8.pdf", "v8 "]
                    )
                ):
                    updated = localized_lines[a1]
                    updated = updated.replace("0.8", "0.9")
                    updated = updated.replace("v8.pdf", "v9.pdf")
                    updated = updated.replace("v8-", "v9-")
                    rendered.append(updated)
                    continue
                for line in new_lines[b1:b2]:
                    rendered.append(
                        renderer.template_section(route, line)
                    )
        return "".join(rendered)

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == "equal":
            for offset in range(i2 - i1):
                old = base[i1 + offset]
                new = current[j1 + offset]
                if old.text == new.text:
                    output.append(localized[i1 + offset].text)
                else:
                    output.append(
                        reconcile_lines(old, new, localized[i1 + offset])
                    )
                    changed += 1
        elif tag in {"replace", "insert"}:
            for section in current[j1:j2]:
                output.append(renderer.template_section(route, section.text))
                changed += 1
        elif tag == "delete":
            continue
    return "".join(output), changed


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--locale", required=True, choices=LOCALES)
    parser.add_argument("--model", type=Path, required=True)
    parser.add_argument(
        "--model-family", choices=["nllb", "madlad"], default="nllb"
    )
    parser.add_argument("--cache", type=Path, required=True)
    parser.add_argument("--review-model", type=Path)
    parser.add_argument("--review-cache", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--translation-date", required=True)
    parser.add_argument("--threads", type=int, default=16)
    parser.add_argument("--cache-batch-size", type=int, default=128)
    args = parser.parse_args()

    glossary_data = json.loads((I18N / "glossary.json").read_text())
    glossary = {
        source: translations[args.locale]
        for source, translations in glossary_data["terms"].items()
    }
    engine = (
        MadladTranslator(args.model, args.threads)
        if args.model_family == "madlad"
        else NllbTranslator(args.model, args.threads)
    )
    translator = CachedTranslator(engine, args.cache, args.cache_batch_size)
    if args.review_model:
        review_engine = NllbTranslator(args.review_model, args.threads)
        review_translator = CachedTranslator(
            review_engine,
            args.review_cache or args.cache.with_name(f"{args.cache.stem}-review.json"),
            args.cache_batch_size,
        )
    else:
        review_translator = translator
    renderer = CandidateRenderer(
        args.locale, translator, review_translator, glossary
    )

    templates: dict[Path, str] = {}
    page_report: dict[str, object] = {}
    for route in ROUTES:
        relative = route_to_relative(route)
        base = committed_source(relative)
        current = (PAGES / relative).read_text()
        localized_path = PAGES / args.locale / relative
        localized = localized_path.read_text()
        template, changed = reconcile_page(
            route, base, current, localized, renderer
        )
        templates[relative] = template
        page_report[route] = {
            "source": relative.as_posix(),
            "sourceSha256": sha256(current),
            "changedSections": changed,
        }

    notice_text = (
        f"This is a translation of White Paper v{SOURCE_VERSION}. "
        f"The English source was published on {SOURCE_DATE}. "
        f"This translation was published on {args.translation_date}. "
        "English is the source text."
    )
    notice_template = renderer.add_unit("/white-paper", notice_text)

    values, reviews = renderer.translate_all()
    translated_notice = interpolate(notice_template, values)
    ui = json.loads((I18N / f"ui/{args.locale}.json").read_text())
    notice_title = ui["whitePaper"]["translationTitle"]
    source_label = ui["whitePaper"]["englishSource"]
    notice = (
        f'> **{notice_title}.** {translated_notice} '
        f'<a data-english-source="true" href="/white-paper" hrefLang="en">'
        f"{source_label}</a>."
    )
    args.output.mkdir(parents=True, exist_ok=True)
    for relative, template in templates.items():
        rendered = localize_links(interpolate(template, values), args.locale)
        if relative.as_posix() == "white-paper/index.mdx":
            if re.search(r"(?m)^> .*\n\n", rendered):
                rendered = re.sub(
                    r"(?m)^> .*\n\n", f"{notice}\n\n", rendered, count=1
                )
            else:
                rendered = re.sub(
                    r"(?m)^(# .+\n)", rf"\1\n{notice}\n", rendered, count=1
                )
        destination = args.output / args.locale / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(rendered)
        page_report["/" + relative.with_suffix("").as_posix().removesuffix("/index")][
            "candidateSha256"
        ] = sha256(rendered)

    low_confidence = [review for review in reviews if review["similarity"] < 0.35]
    report = {
        "locale": args.locale,
        "whitePaperVersion": SOURCE_VERSION,
        "englishPublicationDate": SOURCE_DATE,
        "translationPublicationDate": args.translation_date,
        "sourceAppCommit": ROUTING_ROLLOUT["source"]["appCommit"],
        "sourceCoreCommit": ROUTING_ROLLOUT["source"]["coreCommit"],
        "sourceProtocolCommit": ROUTING_ROLLOUT["source"]["protocolCommit"],
        "summary": {
            "changedSections": sum(
                int(page["changedSections"]) for page in page_report.values()
            ),
            "translatedUnits": len(reviews),
            "meanBackTranslationSimilarity": round(
                sum(float(review["similarity"]) for review in reviews)
                / max(len(reviews), 1),
                4,
            ),
            "unitsBelow0_35": len(low_confidence),
        },
        "mandatoryReview": [
            "route discovery is estimated and the pinned-block quote is authoritative",
            "current maximum route depth is three Pool swaps",
            "same-chain Calibur batch uses revertOnFailure and per-hop bounds",
            "Safes and other contract wallets are unsupported by the current route quote",
            "Pool and protocol fees are per hop and there is no current route-service fee",
            "Solidity SwapRouter remains quote-only",
            "participant routing does not authorize Pool rebalancing",
            "settlement remains separate from voucher fulfillment and discharge",
            "complete natural-language page skim",
        ],
        "pages": page_report,
        "lowConfidenceUnits": low_confidence,
    }
    report_path = args.output.parent / f"routing-review.{args.locale}.json"
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps(report["summary"], ensure_ascii=False))


if __name__ == "__main__":
    main()
