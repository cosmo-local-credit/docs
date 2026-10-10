# Documentation localization guide

This directory owns the locale registry, visitor-facing catalogs, navigation,
heading mappings, app-aligned glossary, and translation review manifest for the
public documentation site. The `clc-app` `origin/develop` baseline is commit
`0808066dae3c0063729b69085df85ba5ce12a90d`; Filipino is synchronized to the
committed feature branch at `b4c4a496dc45232470d3874a3317912e86b466a8`.

English is unprefixed. Localized routes use their two-letter locale prefix. The
registry contains Arabic, Simplified Chinese, Traditional Chinese, German,
Dzongkha, Spanish, French, Hindi, Italian, Dutch, Portuguese, Serbian,
Kiswahili, Ukrainian, and Filipino. Detailed documentation is normally released one
reviewed language at a time. French, Spanish, Portuguese, Italian, Kiswahili,
German, Ukrainian, and Serbian have completed web review. Arabic, Dzongkha,
Dutch, Hindi, Simplified Chinese, and Traditional Chinese are complete,
validated web drafts awaiting the combined user review authorized for this
batch. Filipino is a complete review draft based on the app's committed
`origin/feat/filipino-language` branch; release waits for the app merge, docs
review, and coordinated deployment. Stable English slugs are deliberately
retained below each published locale prefix.

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

The tracked PDF builder uses pdfLaTeX for English and LuaLaTeX for localized
papers. Polyglossia provides most localized typesetting; Arabic uses Babel's
LuaTeX bidi engine so RTL text and embedded LTR product names do not depend on
the separate `luabidi` package. Builds use fixed source timestamps so generated
PDFs are reproducible. Simplified and Traditional Chinese use separate Noto CJK
font variants and Chinese language metadata.

To regenerate one translation with an already downloaded CTranslate2 model:

```sh
/path/to/python scripts/generate_documentation_translations.py \
  --locales pt --model /path/to/nllb-ct2 --threads 8 \
  --manifest docs/i18n/translation-manifest.pt.json
node scripts/synchronize_protected_content.mjs pt
npm run i18n:manifest
npm run i18n:headings
```

For Filipino refinement, the generator can also read the Apache-licensed
MADLAD-400 CTranslate2 model from the machine-local cache at
`/home/wor/.cache/clc-translation-models/madlad400-3b-mt-ct2-int8/`. Keep that
cache outside both repositories and never add model files to Git. Use a
temporary output tree first so a model comparison cannot overwrite reviewed
pages:

```sh
/path/to/python scripts/generate_documentation_translations.py \
  --locales fil \
  --model /home/wor/.cache/clc-translation-models/madlad400-3b-mt-ct2-int8 \
  --model-family madlad --threads 16 --cache-batch-size 16 \
  --cache /tmp/clc-madlad-docs-cache.json \
  --output-pages /tmp/clc-madlad-docs-pages \
  --manifest /tmp/clc-madlad-fil-manifest.json
```

The 3B model is CPU-intensive. Accept its output page by page only where it is
clearer and still preserves the docs glossary and protected technical content.

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
Paper PDF. Each published localized landing page links to its localized PDF and
retains a separate link to the controlling English source.

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

The app's committed `origin/feat/filipino-language` branch adds Filipino (`fil`)
with `fil-PH` formatting and `tl` browser-language alias matching. The docs
include a complete review draft and localized PDF synchronized to commit
`b4c4a496dc45232470d3874a3317912e86b466a8`. Filipino is not yet part of app
`origin/develop`, so production deep links must continue to use English until
the app merge, docs review, and coordinated release gate are complete.
