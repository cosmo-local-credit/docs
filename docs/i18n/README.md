# Documentation localization guide

This directory owns the locale registry, visitor-facing catalogs, navigation,
heading mappings, app-aligned glossary, and translation review manifest for the
complete public documentation site. The synchronization baseline is `clc-app`
`origin/develop` commit `32265981e7e2f7fcca9c0bb53b7aad8a1559f7f1`.

English is unprefixed. Arabic, Dzongkha, German, Spanish, French, Italian,
Portuguese, Serbian, Kiswahili, and Ukrainian use their two-letter locale prefix.
Stable English slugs are deliberately retained below each prefix.

## Files

- `locales.ts` is the single locale registry and preserves the app's order,
  native names, number-formatting locales, and text directions.
- `messages/` contains the splash catalogs.
- `ui/` contains translated site controls, search, accessibility, legal, and
  White Paper translation notices.
- `navigation/` contains sidebar labels; `navigation.ts` generates every
  path-scoped sidebar from one route structure.
- `glossary.json` records the app vocabulary and the docs' canonical
  Commitment Pool and Pool Steward terms.
- `heading-map.json` maps equivalent heading anchors by document order.
- `translation-manifest.json` records source and translation hashes, the app
  baseline, publication date, and automated review results.

`LocaleSelector.tsx` is presentation-only and reusable. `SiteControls.tsx` owns
global routing, browser detection, persistence, translated Vocs chrome, and
theme controls. An explicit localized URL controls that visit without changing
the saved preference; only a manual choice writes `clc.docs.locale`.

## Translation and review workflow

The maintained translation generator uses the local open NLLB-200 distilled
model (`JustFrederik/nllb-200-distilled-600M-ct2-int8`, CC BY-NC 4.0) as a
maintainer tool. It is not shipped to visitors and is not a runtime dependency.
Every release applies:

1. semantic translation with URLs, code, formulas, names, contract identifiers,
   dates, and version identifiers protected;
2. clarity normalization using complete Markdown units and the app-aligned
   glossary;
3. unit-by-unit back-translation, source-hash checks, heading parity, protected
   token checks, internal-link checks, and rendered inspection.

The English Terms are controlling; every localized Terms page is a convenience
translation and links prominently to English. English is also the source text
for White Paper v0.8. Localized HTML and PDFs state the English publication date
and the translation publication date.

To regenerate translations with an already downloaded CTranslate2 model:

```sh
/path/to/python scripts/generate_documentation_translations.py \
  --model /path/to/nllb-ct2 --threads 8
node scripts/synchronize_locale_catalogs.mjs
node scripts/synchronize_protected_content.mjs
node scripts/merge_translation_manifests.mjs
npm run i18n:headings
```

Then generate the localized PDFs and validate the atomic release:

```sh
npm run whitepaper:publish
npm run typecheck
npm run check:i18n
npm run build
git diff --check
```

The build emits one MiniSearch index and one `llms.txt`/`llms-full.txt` pair per
locale. Localized search never loads results from another language.

## Adding an app language

1. Record the app commit and confirm its locale code, native name, formatting
   locale, direction, and product vocabulary.
2. Add the locale to `locales.ts`, the route/search build lists, and the static
   splash route.
3. Add splash, UI, navigation, and glossary entries.
4. Generate all 36 translated documentation pages and the localized v0.8 PDF.
5. Rebuild heading mappings and the translation manifest.
6. Validate browser matching, manual English override, query/hash preservation,
   RTL/LTR behavior, isolated search, metadata, sidebars, links, PDF glyphs, and
   mobile/desktop layouts before publishing every language together.
