#!/usr/bin/env python3
"""Compile every tracked White Paper TeX source and publish its PDF."""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TEX_DIR = ROOT / "white-paper"
PUBLIC_DIR = ROOT / "docs/public/white-paper"
BUILD_ROOT = TEX_DIR / "build"
TEX_CACHE = BUILD_ROOT / ".texlive-cache"
LOCALES = ["en", "ar", "zh", "zh-Hant", "dz", "de", "es", "fil", "fr", "hi", "it", "nl", "pt", "sr", "uk", "sw"]
SOURCE_DATE_EPOCHS = {
    "en": "1790743564",
    "es": "1791547200",
    "fr": "1791547200",
    **{
        locale: "1791633600"
        for locale in {"ar", "zh", "zh-Hant", "dz", "de", "fil", "hi", "it", "nl", "pt", "sr", "uk", "sw"}
    },
}


def compile_pdf(locale: str) -> None:
    stem = "clc_white_paper" if locale == "en" else f"clc_white_paper_{locale}"
    source = TEX_DIR / f"{stem}.tex"
    build_dir = BUILD_ROOT if locale == "en" else BUILD_ROOT / locale
    build_dir.mkdir(parents=True, exist_ok=True)
    TEX_CACHE.mkdir(parents=True, exist_ok=True)

    engine = "-pdf" if locale == "en" else "-lualatex"
    environment = os.environ.copy()
    environment["SOURCE_DATE_EPOCH"] = SOURCE_DATE_EPOCHS[locale]
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
    published = PUBLIC_DIR / f"Cosmo-Local-Credit-CLC-White-Paper-v8{suffix}.pdf"
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
