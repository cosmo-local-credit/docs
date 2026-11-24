# Documentation localization guide

This directory owns the locale registry, visitor-facing catalogs, navigation,
heading mappings, app-aligned glossary, and translation review manifest for the
public documentation site. The current production-routing baseline is
`clc-app` `master` commit `b5f337f3c2d7bc508d11f35126ad2175b6c717eb`,
`clc-core` `master` commit `ef0f0067ce3ac8f254d33b7f974304510a439aab`,
and Protocol v1.1.0 commit `ce090fd3d5a7493c726fb939da39af15ef1c9d7c`.
The separate policy factual-audit baseline remains recorded in
`policy-locales.json`.

English is unprefixed. Localized routes use their registered locale prefix. The
site registry contains Arabic, Simplified Chinese, Traditional Chinese, German,
Dzongkha, Spanish, French, Hindi, Italian, Dutch, Flemish, Portuguese, Serbian,
Kiswahili, Ukrainian, and Filipino. Detailed documentation is normally
released one reviewed language at a time. The existing 36-page translations
are structurally validated and are not being editorially reopened during the
policy completion pass. Stable English slugs are deliberately retained below
each published locale prefix.

The 17 November 2026 English clarity review is a separate controlled rollout.
Its materially changed routes and per-locale status are recorded in
`english-review-rollout.json`; a pending locale remains pinned to its last
reviewed source until that focused reconciliation is complete.

## Software-reference consolidation

The definitive software implementation reference is
[CLC Developer Docs](https://software.cosmolocal.credit/), maintained in the
separate `software-docs` repository. Keep App journeys, participant concepts,
responsibilities, governance, and policies here. Link to the software site for
contract mechanics, API schemas, deployment, configuration, and operation.
The software site is currently English-only: translate link labels, identify
the destination as English, and never add a docs locale prefix to its URLs.

The 23 November 2026 cleanup is recorded in `software-docs-rollout.json`.
English was accepted on 23 November 2026 and all 17 software-reference locales
completed their sequential review on 24 November 2026. Consult the registry for
each locale’s current status. Each affected
route records its prior and revised English hashes. Each pending locale also
records the actual English source hash from its existing manifest. The new
review takes precedence only for its seven affected routes; the November
clarity and policy reviews continue to govern all other routes.

After English acceptance, reconcile French, Spanish, Portuguese, Italian,
Kiswahili, German, Ukrainian, Serbian, Arabic, Dzongkha, Dutch, Hindi,
Simplified Chinese, Traditional Chinese, Filipino, and Flemish sequentially.
For a locale, update the seven pages, translate its complete `readingNote`
strings, and review meaning, clarity, protected content, and external links.
Then set that locale's new rollout status to `current`, refresh its manifest,
and refresh the heading map. Never refresh a pending locale's source hashes
as a substitute for translating it. Pending translations keep their existing
content in localized search and `llms` output.

Preserve every existing heading destination. Record corrected headings and
their previous IDs in `heading-aliases.json`. The shared MDX heading wrapper
renders these compatibility anchors in server HTML and client navigation,
including Markdown pages where Vocs strips raw source HTML. The language
switcher resolves old IDs before mapping the equivalent translated section.
Run `npm run check:software-reference:build` after building to verify that all
registered old IDs remain in the emitted HTML. Existing source-level MDX
aliases remain supported; the heading mapper excludes inline HTML from text.
When an earlier guide has fewer sections, map its old headings by meaning,
not by ordinal position. Preserve both published bookmarks and any heading
destinations in the draft being reconciled.

Keep spaces around emphasized CJK labels when they touch neighboring words.
Otherwise CommonMark can show literal asterisks, especially after a closing
parenthesis or quotation mark. The locale check rejects unparsed strong
markers in current software guides; code spans and fenced code are excluded.

`scripts/review_software_translation.py` batches independent back-translation
of revised units and the reading note with the machine-local MADLAD model.
Pass `--locale`, `--baseline-root` (a checkout with that locale before this
cleanup), `--model`, `--cache` (outside Git), and `--output` (a temporary
candidate report). Keep one Markdown line per corresponding English unit.
Review every unit against English, including every low-confidence result;
the similarity score is an aid, not an approval decision.

Dzongkha requires direct source comparison because the machine model often
misreads valid app vocabulary and negation. Its software-reference review
records these limitations, corrects the seven controlled guides, and preserves
old heading IDs through the alias registry. Do not reuse the model's English
output as authoritative. The app catalog's unrelated Arabic-script Want
value is explained in Dzongkha here; untranslated action labels are quoted
with a clear explanation. These observations do not authorize app edits or
changes to the frozen legal and publication sources.

The Simplified Chinese software pass explicitly reconciles the four
overlapping clarity drafts within the seven controlled guides. Review those
changes against the last committed sources as well as English, so an existing
draft does not acquire fresh hashes without a meaning review. The separate
Terms, Privacy and three White Paper edits remain unfinished, unchanged and
outside this pass. Keep their original hash/notice failures visible in the
main checkout; do not mark the older clarity rollout complete or refresh
those five hashes. Validate the software checkpoint independently of them.

Save the completed review as `software-review.<locale>.json`, recording the
review date, resolutions, exact source/translation hashes and hashes of both
reading-note catalogs. Replace the seven pages' old manifest review metrics
with their actual new review evidence. A current locale must have a completed
report matching its source, translation, and reading-note hashes.

The final checkpoint records URL-only Privacy-section corrections separately
in the registry's `source.linkCorrections` and each report's `linkVerification`.
The translated prose and existing back-translation units are unchanged by
those corrections; the source and translation hashes cover the actual revised
files. Use the localized heading correspondence, including section numbers,
instead of copying an English fragment into a translated link. The software
checks validate internal heading destinations against the tracked map and,
with `--built`, the emitted destination HTML. Do not change an approved policy
to compensate for an incorrect link to it.

Traditional Chinese may use the reviewed Simplified Chinese guides as a
semantic starting point, but character conversion is not a translation review.
Reconcile regional phrasing, the existing Traditional Chinese glossary and
exact App controls, then independently back-translate every revised unit and
compare it with English. Preserve the distinct fulfillment/discharge terms
and map old sections by meaning when the Introduction structure expands.
Keep any machine-local conversion or translation tooling outside Git.

Freeze the reviewed page text and reading note before starting the production
build. If public copy changes during a build, rebuild from the final text and
verify both the prerendered page and client bundle; fresh server HTML alone
does not prove that the browser will hydrate with matching text.

Run `npm run check:software-reference`, `npm run typecheck`,
`npm run check:i18n`, `npm run i18n:headings:check`, the production build, and
`git diff --check` at each review checkpoint. Check the localized page links,
desktop/mobile navigation, theme, and reading note in the browser.

The note above the White Paper landing page is a layout-supplied MDX wrapper.
It is outside the publication source, omitted from print, and displayed only
in languages that have completed this review. White Paper HTML source,
LaTeX, PDFs, Terms, and policy texts are frozen for this cleanup; do not
regenerate or revise them as part of these seven-page translations.

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
- `heading-aliases.json` preserves former IDs in the controlled software
  guides when correcting a translated heading; it does not change publications.
- `translation-manifest.<locale>.json` records source and translation hashes,
  the app baseline, review status, date, and automated review results.
- `routing-rollout.json` records the v0.9 production-routing source evidence,
  affected routes, per-locale release state, and current White Paper version.
- `english-review-rollout.json` records the current English product-review
  evidence, materially changed routes, exact source hashes, and the translations
  that still require reconciliation.
- `software-docs-rollout.json` owns the software-reference cleanup status and
  reading notes; `software-review.<locale>.json` records each completed review.
- `drafts/pages/` preserves unfinished deep-page translations outside Vocs'
  public route compiler.

`LocaleSelector.tsx` is presentation-only and reusable. `SiteControls.tsx` owns
global routing, browser detection, persistence, translated Vocs chrome, and
theme controls. An explicit localized URL controls that visit without changing
the saved preference; only a manual choice writes `clc.docs.locale`.

## Translation and review workflow

The maintained policy workflow uses the Apache-licensed MADLAD-400 model from
the machine-local cache. A local NLLB-200 distilled model may be used as an
independent comparison for a language that fails substantive review. These are
maintainer tools; neither model is shipped to visitors or added to Git.
Every release applies:

1. semantic translation with URLs, code, formulas, names, contract identifiers,
   dates, and version identifiers protected;
2. clarity normalization using complete Markdown units and the app-aligned
   glossary;
3. unit-by-unit back-translation, source-hash checks, heading parity, protected
   token checks, internal-link checks, and rendered inspection.

The English Terms are controlling; every localized Terms page is a convenience
translation and links prominently to English. English is also the source text
for the White Paper. All locales publish the reviewed v0.9 routing edition.
When a later English review changes a route, a pending locale remains pinned
to its last reviewed page, hash, search/LLM output, and PDF text until its
focused update passes the sequential release gate.

The English Policy hub, Privacy Notice, Data Protection Policy, and Child
Safeguarding Policy are the controlling Version 1.0 source. Their product audit
commits, publication metadata, and frozen source hashes are recorded in
`policy-locales.json`. The same registry owns localized notices, metadata,
navigation labels, and release state. No translated policy becomes an App
destination until its complete four-page set passes review and the locale is
deployed. All 16 translated locales now contain complete four-page policy sets.
Simplified and Traditional Chinese have completed independent back-translation
and legal-meaning review. The Dzongkha machine translation was accepted by the
product owner for this release after a dedicated Dzongkha back-translation,
foreign-script cleanup, and the focused structural checks.

The registry's `source.auditedAppCommit` and `source.auditedCoreCommit` record
the latest factual product audit. Per-locale `sourceAppCommit` values retain the
App vocabulary baseline used when that translation was reviewed; a later
factual audit does not invalidate a translation when the controlling English
policy text and its hashes remain unchanged.

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

Prepare exactly one language in an isolated workspace. The reconciliation
command retains reviewed translation memory for unchanged units, translates
only changed or missing units, performs a separate back-translation pass,
checks the frozen English hashes, and writes a candidate catalog, manifest, and
low-confidence report.

```sh
/path/to/python scripts/reconcile_policy_translations.py es \
  --workspace /tmp/clc-policy-es \
  --cache /tmp/clc-policy-es-cache.json \
  --threads 16

npm run check:policies -- es --candidate /tmp/clc-policy-es
```

Review every entry in `policy-review.es.json`, the mandatory legal and
technical topics listed there, and all four pages for natural language. A
candidate that changes public/private distinctions, reporting instructions,
rights, or safeguarding meaning must not be promoted. After manual corrections,
refresh only the back-translations affected by changed units; the machine-local
cache avoids repeating unchanged work.

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
  --candidate /tmp/clc-policy-es --reviewed --replace

node scripts/refresh_policy_manifest.mjs es
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

## Production-routing v0.9 workflow

Process one locale at a time in the order recorded in `PLAN.md`. Pending
locales intentionally keep their previous English source hashes for the routes
listed in `routing-rollout.json`; their translated-file hashes must remain
unchanged. This permits English v0.9 to be current without misrepresenting a
v0.8 translation as reconciled.

For each locale:

1. translate only the affected routes from the v0.9 English source in a
   temporary output tree;
2. preserve product names, contract identifiers, UI labels, code, formulas,
   URLs, version numbers, fees, wallet limits, and settlement/fulfillment
   distinctions;
3. perform a full natural-language pass and independent back-translation;
4. update that locale's White Paper notice and archive page;
5. promote the reviewed pages, refresh its manifest and heading mappings, and
   mark the locale `current` in `routing-rollout.json`;
6. generate and inspect the locale's v0.9 LaTeX/PDF while retaining v0.8; and
7. run the focused checks, one production build, PDF text/font inspection, and
   `git diff --check` before starting the next locale.

The validators allow heading and source-hash differences only for an explicitly
pending affected route. Every unaffected route and every current locale remains
strict.

## English clarity-review workflow

Process the routes in `english-review-rollout.json` one locale at a time. Start
from that locale's current reviewed page, translate only changed semantic
units, preserve protected product and legal terms, then perform the normal
clarity and back-translation review. Include the English splash-copy changes
in the same pass.

When the reviewed English update is already committed, pass the parent of that
rollout commit with `--base-ref`. For the 17 November 2026 clarity review, use
`--base-ref '5e067c0^'`; the default `HEAD` remains useful while the English
source changes are still uncommitted.

For each accepted locale, refresh its translation manifest and heading map,
update any affected localized White Paper PDF, and change only that locale's
rollout status to `current`. Do not refresh a pending route's English source
hash merely to make validation green. The manifest refresher intentionally
preserves that prior source hash until the locale is promoted.

The revised English Terms and Privacy Notice were approved on 17 November
2026. Each convenience translation must still be reconciled and validated
against that frozen source before the locale is promoted.

## Adding an app language

1. Record the app commit and confirm its locale code, native name, formatting
   locale, direction, and product vocabulary.
2. Add the locale to `locales.ts`, the route/search build lists, and the static
   splash route.
3. Add splash, UI, navigation, and glossary entries.
4. Generate all 36 translated documentation pages in the non-public draft area.
5. Review the pages, move the locale into the public page tree, add it to
   `DOCUMENTATION_LOCALES`, and rebuild heading mappings and its manifest.
6. Generate and inspect the White Paper version assigned to that locale in
   `routing-rollout.json`.
7. Validate browser matching, manual English override, query/hash preservation,
   RTL/LTR behavior, isolated search, metadata, sidebars, links, PDF glyphs, and
   mobile/desktop layouts before publishing that language.

The app's committed `origin/develop` registry includes Filipino (`fil`) with
`fil-PH` formatting and `tl` browser-language alias matching, and Flemish
(`nl-BE`) with `nl-BE` formatting. Belgian Dutch browser tags map to Flemish;
generic Dutch and non-Belgian Dutch regions map to `nl`, while West Flemish
`vls` is not treated as `nl-BE`. Documentation deep links become eligible only
after the corresponding docs locale has been reviewed and deployed.
