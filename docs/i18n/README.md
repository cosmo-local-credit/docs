# Documentation localization guide

This directory owns the locale registry, visitor-facing catalogs, navigation,
heading mappings, app-aligned glossary, and translation review manifest for the
public documentation site. The synchronization baseline is `clc-app`
`origin/develop` commit `32265981e7e2f7fcca9c0bb53b7aad8a1559f7f1`.

English is unprefixed. Arabic, Dzongkha, German, Spanish, French, Italian,
Portuguese, Serbian, Kiswahili, and Ukrainian use their two-letter locale prefix.
All eleven splash pages are available. Detailed documentation is released one
reviewed language at a time; French and Spanish are the drafts currently under
review. Stable
English slugs are deliberately retained below each published locale prefix.

## Files

- `locales.ts` is the single locale registry and preserves the app's order,
  native names, number-formatting locales, and text directions.
- `messages/` contains the splash catalogs.
- `ui/` contains site controls, search, accessibility, legal, and White Paper
  translation notices for released documentation languages.
- `navigation/` contains sidebar labels; `navigation.ts` generates each
  released path-scoped sidebar from one route structure.
- `glossary.json` records the app vocabulary and the docs' canonical
  Commitment Pool and Pool Steward terms.
- `heading-map.json` maps equivalent heading anchors by document order.
- `translation-manifest.<locale>.json` records source and translation hashes,
  the app baseline, draft status, date, and automated review results.
- `drafts/pages/` preserves unfinished deep-page translations outside Vocs'
  public route compiler.

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

To regenerate one translation with an already downloaded CTranslate2 model:

```sh
/path/to/python scripts/generate_documentation_translations.py \
  --locales es --model /path/to/nllb-ct2 --threads 8 \
  --manifest docs/i18n/translation-manifest.es.json
node scripts/synchronize_protected_content.mjs es
npm run i18n:manifest
npm run i18n:headings
```

Validate the reviewable web draft:

```sh
npm run typecheck
npm run check:i18n
npm run build
git diff --check
```

The build emits one MiniSearch index and one `llms.txt`/`llms-full.txt` pair per
released documentation locale. Localized search never loads results from
another language. Before publication, generate and inspect that locale's White
Paper PDF; a web-review draft may link explicitly to the English source PDF.

## Adding an app language

1. Record the app commit and confirm its locale code, native name, formatting
   locale, direction, and product vocabulary.
2. Add the locale to `locales.ts`, the route/search build lists, and the static
   splash route.
3. Add splash, UI, navigation, and glossary entries.
4. Generate all 36 translated documentation pages in the non-public draft area.
5. Review the pages, move the locale into the public page tree, add it to
   `DOCUMENTATION_LOCALES`, and rebuild heading mappings and its manifest.
6. Generate and inspect the localized v0.8 PDF.
7. Validate browser matching, manual English override, query/hash preservation,
   RTL/LTR behavior, isolated search, metadata, sidebars, links, PDF glyphs, and
   mobile/desktop layouts before publishing that language.
