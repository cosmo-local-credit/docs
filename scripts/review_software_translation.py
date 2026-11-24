#!/usr/bin/env python3
"""Back-translate changed software-reference copy with a machine-local model.

The reviewed pages retain one Markdown line per source unit. The baseline is
another checkout containing the locale before this cleanup. Nothing here
changes public pages or promotes a locale; the JSON output is a review aid.
"""

import argparse
import hashlib
import json
import re
from difflib import SequenceMatcher
from pathlib import Path

from generate_documentation_translations import CachedTranslator, MadladTranslator

ROOT = Path(__file__).resolve().parents[1]


def digest(text):
    return hashlib.sha256(text.encode()).hexdigest()


def prose(line):
    line = re.sub(r"<[^>]*>", "", line)
    line = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", line)
    line = re.sub(r"https?://\S+", "", line)
    return re.sub(r"[*`|]", "", line).strip()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--locale", required=True)
    parser.add_argument("--baseline-root", type=Path, required=True)
    parser.add_argument("--model", type=Path, required=True)
    parser.add_argument("--cache", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--threads", type=int, default=8)
    args = parser.parse_args()
    registry = json.loads((ROOT / "docs/i18n/software-docs-rollout.json").read_text())
    units = []
    pages = {}
    for route, source in registry["source"]["routes"].items():
        english = (ROOT / "docs/pages" / source["source"]).read_text()
        relative = Path("docs/pages") / args.locale / source["source"]
        translated = (ROOT / relative).read_text()
        previous_lines = set((args.baseline_root / relative).read_text().splitlines())
        english_lines, translated_lines = english.splitlines(), translated.splitlines()
        if len(english_lines) != len(translated_lines):
            raise ValueError(f"{route}: align the translated Markdown units with English before review")
        pages[route] = {"sourceSha256": digest(english), "sha256": digest(translated)}
        for line_number, (source_line, target_line) in enumerate(zip(english_lines, translated_lines), 1):
            if not target_line.strip() or target_line in previous_lines or re.fullmatch(r"[\s|:-]+", target_line):
                continue
            units.append({"route": route, "line": line_number, "source": prose(source_line), "translation": prose(target_line)})

    for field, source in registry["locales"]["en"]["readingNote"].items():
        units.append({"route": "/white-paper#software-reference-note", "field": field,
                      "source": source, "translation": registry["locales"][args.locale]["readingNote"][field]})
    translator = CachedTranslator(MadladTranslator(args.model, args.threads), args.cache)
    backward = translator.translate_many([unit["translation"] for unit in units], args.locale, "en", beam_size=1)
    for unit, back in zip(units, backward):
        unit["backTranslation"] = back
        unit["similarity"] = round(SequenceMatcher(None, unit["source"].casefold(), back.casefold(), autojunk=False).ratio(), 4)
    report = {"locale": args.locale, "model": args.model.name,
              "method": "independent machine back-translation of revised units; manual meaning review required",
              "status": "awaiting-manual-review", "pages": pages, "units": units}
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(f"Reviewed {len(units)} changed units; {sum(unit['similarity'] < .45 for unit in units)} need low-confidence inspection. Report: {args.output}")


if __name__ == "__main__":
    main()
