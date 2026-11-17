#!/usr/bin/env python3
"""Compile every tracked White Paper TeX source and publish its PDF."""

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TEX_DIR = ROOT / "white-paper"
PUBLIC_DIR = ROOT / "docs/public/white-paper"
BUILD_ROOT = TEX_DIR / "build"
TEX_CACHE = BUILD_ROOT / ".texlive-cache"
LOCALES = ["en", "ar", "zh", "zh-Hant", "dz", "de", "es", "fil", "fr", "hi", "it", "nl", "nl-BE", "pt", "sr", "uk", "sw"]
ROUTING_ROLLOUT = json.loads(
    (ROOT / "docs" / "i18n" / "routing-rollout.json").read_text(encoding="utf-8")
)


def source_date_epoch(locale: str) -> str:
    value = ROUTING_ROLLOUT["locales"][locale]["translationPublicationDate"]
    parsed = datetime.strptime(value, "%d %B %Y").replace(
        hour=12,
        tzinfo=timezone.utc,
    )
    return str(int(parsed.timestamp()))


def compile_pdf(locale: str) -> None:
    stem = "clc_white_paper" if locale == "en" else f"clc_white_paper_{locale}"
    source = TEX_DIR / f"{stem}.tex"
    build_dir = BUILD_ROOT if locale == "en" else BUILD_ROOT / locale
    build_dir.mkdir(parents=True, exist_ok=True)
    TEX_CACHE.mkdir(parents=True, exist_ok=True)

    engine = "-pdf" if locale == "en" else "-lualatex"
    environment = os.environ.copy()
    environment["SOURCE_DATE_EPOCH"] = source_date_epoch(locale)
    environment["FORCE_SOURCE_DATE"] = "1"
    environment["TEXMFCACHE"] = str(TEX_CACHE)
    environment["TEXMFVAR"] = str(TEX_CACHE)
    subprocess.run(
        [
            "latexmk",
            "-g",
            engine,
            "-interaction=nonstopmode",
            "-halt-on-error",
            f"-outdir={build_dir}",
            str(source),
        ],
        cwd=ROOT,
        env=environment,
        check=True,
    )

    built = build_dir / f"{stem}.pdf"
    suffix = "" if locale == "en" else f"-{locale}"
    version = ROUTING_ROLLOUT["locales"][locale]["whitePaperVersion"].removeprefix("0.")
    published = PUBLIC_DIR / f"Cosmo-Local-Credit-CLC-White-Paper-v{version}{suffix}.pdf"
    shutil.copyfile(built, published)
    if built.read_bytes() != published.read_bytes():
        raise RuntimeError(f"Published PDF differs from build output: {locale}")
    print(published)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--locale", choices=LOCALES)
    args = parser.parse_args()
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    locales = [args.locale] if args.locale else LOCALES
    for locale in locales:
        compile_pdf(locale)


if __name__ == "__main__":
    main()
