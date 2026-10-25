# Documentation localization guide

This directory owns the locale registry, visitor-facing catalogs, navigation,
heading mappings, app-aligned glossary, and translation review manifest for the
public documentation site. The `clc-app` `origin/develop` baseline is commit
`facf5e034dc668c2e5ded90b9dd5995690f0fb63`, which includes the merged Filipino
and Flemish catalogs.

English is unprefixed. Localized routes use their registered locale prefix. The
registry contains Arabic, Simplified Chinese, Traditional Chinese, German,
Dzongkha, Spanish, French, Hindi, Italian, Dutch, Flemish, Portuguese, Serbian,
Kiswahili, Ukrainian, and Filipino. Detailed documentation is normally
released one reviewed language at a time. French, Spanish, Portuguese, Italian,
Kiswahili, German, Ukrainian, and Serbian have completed web review. Arabic,
Dzongkha, Dutch, Hindi, Simplified Chinese, Traditional Chinese, and Filipino
are complete, validated web drafts with outstanding review checkpoints.
Flemish is a complete first draft based on the merged app catalog and remains
under review. Stable English slugs are deliberately retained below each
published locale prefix.

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

The English Policy hub, Privacy Notice, Data Protection Policy, and Child
Safeguarding Policy are currently review drafts. French has a complete,
validated working translation for review. Other policy languages remain on the
English fallback until their complete four-page candidates have passed review.
`policy-locales.json` is the single registry for policy source hashes, localized
draft metadata, navigation labels, and the policy locales included in review
builds. No translated policy becomes an App destination until the English texts
are approved, dated, frozen, and the relevant locale is deployed.

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

## Accelerated policy workflow

Prepare exactly one language in an isolated workspace. The command translates
the four policy pages and their policy-specific labels in one forward batch,
performs one back-translation batch, checks the recorded English source hashes,
and writes a candidate catalog, manifest, and low-confidence report. Replace
the dates and App commit with the values verified for the current language.

```sh
/path/to/python \
  scripts/generate_documentation_translations.py \
  --policy-draft --locales es \
  --policy-workspace /tmp/clc-policy-es \
  --policy-app-commit <audited-clc-app-commit> \
  --policy-source-draft-date "24 de octubre de 2026" \
  --policy-translation-draft-date "<Spanish review date>"

npm run check:policies -- es --candidate /tmp/clc-policy-es
```

Review every entry in `policy-review.es.json`, the mandatory legal and
technical topics listed there, and all four pages for natural language. After
manual corrections, refresh only the back-translations affected by changed
units; the machine-local cache avoids repeating unchanged work.

```sh
/path/to/python \
  scripts/review_policy_translation.py es \
  --candidate /tmp/clc-policy-es

npm run check:policies -- es --candidate /tmp/clc-policy-es
```

Promote only a reviewed four-page candidate. Promotion copies the pages, merges
their manifest entries, adds the locale and its labels to the single policy
registry, regenerates heading mappings, and runs the focused validator.

```sh
npm run policies:promote -- es \
  --candidate /tmp/clc-policy-es --reviewed
```

Then run the full validation gate once:

```sh
npm run typecheck
npm run check:policies -- es
npm run check:i18n
npm run i18n:headings:check
npm run check:theme
npm run build
git diff --check
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

The app's committed `origin/develop` registry includes Filipino (`fil`) with
`fil-PH` formatting and `tl` browser-language alias matching, and Flemish
(`nl-BE`) with `nl-BE` formatting. Belgian Dutch browser tags map to Flemish;
generic Dutch and non-Belgian Dutch regions map to `nl`, while West Flemish
`vls` is not treated as `nl-BE`. Documentation deep links become eligible only
after the corresponding docs locale has been reviewed and deployed.
