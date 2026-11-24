# Repository completion ledger

Last updated: 24 November 2026

This ledger records work that belongs to this documentation repository. The
technical localization workflow and commands live in the
[documentation localization guide](docs/i18n/README.md).

## Software-reference consolidation — sequential translations

[CLC Developer Docs](https://software.cosmolocal.credit/) is the definitive
software implementation reference. The local software-docs review baseline is
`40a5b7f` (22 November 2026). This site retains participant guidance,
concepts, governance, policies, history, and versioned publications.

- English Protocol overview, Smart contracts, and Network architecture are
  shorter reader guides linked to the implementation reference. Every prior
  heading anchor and route is retained.
- Getting Started, Concepts, the practical example, and Governance mechanics
  replace repeated implementation details with contextual links.
- A web-only note above the English White Paper landing page points to the
  current software reference. Published White Paper sources, LaTeX, PDFs, and
  legal texts remain unchanged. The note is excluded from printing.
- Source hashes, predecessor hashes, per-locale reviewed hashes, and the
  reading note live in `docs/i18n/software-docs-rollout.json`. Pending
  translations retain their reviewed source records; this review does not
  promote the unfinished November clarity translations.
- Four of the nine pre-existing Simplified Chinese drafts are explicitly
  reconciled within the seven-guide software review. The five separate Terms,
  Privacy and White Paper edits remain untouched and unfinished; their original
  hash/notice failures and heading differences are outside this checkpoint.
- The build exposed one pre-existing Dzongkha anchor-map mismatch caused by
  literal Markdown emphasis markers. The heading mapper now parses Markdown
  text, with regression checks; only the affected mapping changed, without
  changing the White Paper heading or publication source.
- English acceptance was confirmed on 23 November 2026. The software-reference
  translations were completed sequentially on 24 November 2026, with the
  validation checkpoint below. This does not complete the separate older
  clarity-review work or deploy the changes.

| Order | Locale | Software-reference cleanup |
| ---: | --- | --- |
| — | English (`en`) | Accepted; validated |
| 1 | French (`fr`) | Current; translation review, build, search, and browser gates passed |
| 2 | Spanish (`es`) | Current; translation review, build, search, and browser gates passed |
| 3 | Portuguese (`pt`) | Current; translation review, build, search, and browser gates passed |
| 4 | Italian (`it`) | Current; translation review, build, search, and browser gates passed |
| 5 | Kiswahili (`sw`) | Current; translation review, build, search, and browser gates passed |
| 6 | German (`de`) | Current; translation review, build, search, and browser gates passed |
| 7 | Ukrainian (`uk`) | Current; translation review, build, search, and browser gates passed |
| 8 | Serbian (`sr`) | Current; translation review, build, search, and browser gates passed |
| 9 | Arabic (`ar`) | Current; translation review, build, search, and RTL browser gates passed |
| 10 | Dzongkha (`dz`) | Current; full controlled-page reconciliation, build, search, Tibetan layout, and legacy-heading gates passed |
| 11 | Dutch (`nl`) | Current; translation review, build, search, browser, and legacy-heading gates passed |
| 12 | Hindi (`hi`) | Current; translation review, build, search, Devanagari layout, and legacy-heading gates passed |
| 13 | Simplified Chinese (`zh`) | Current; overlapping drafts explicitly reconciled; build, search, markup, browser, and legacy-heading gates passed |
| 14 | Traditional Chinese (`zh-Hant`) | Current; translation review, build, search, CJK layout, browser, and legacy-heading gates passed |
| 15 | Filipino (`fil`) | Current; full controlled-guide reconciliation, translation review, build, search, browser, and legacy-heading gates passed |
| 16 | Flemish (`nl-BE`) | Current; translation review, build, search, browser, and legacy-heading gates passed |

### Traditional Chinese checkpoint — 24 November 2026

All seven guides and the web-only reading note are current. The reviewed
Simplified Chinese guides provided a semantic starting point, followed by a
complete Traditional Chinese clarity revision and comparison with English.
Quoted controls match the committed App catalog at `f9172c63`, including
“取得,” “傳送,” “可存入,” and “通行金鑰.” Independent back-translation covered
320 changed units. All 16 low-confidence results were inspected; unrelated
model additions are absent from the actual translation. Exact hashes and
review decisions are recorded in `docs/i18n/software-review.zh-Hant.json`.

Twenty-six older section destinations are preserved by meaning. The isolated
checkpoint passes TypeScript, localization, heading, theme and regression
checks. The final production build emits 697 routes within the asset limit,
with isolated search and LLM outputs and all 121 compatibility aliases.
Browser checks pass for all seven guides at desktop/mobile widths in both
themes, including CJK wrapping, no visible Markdown delimiters or horizontal
overflow, localized search, reading-note print exclusion, theme persistence,
and equivalent-heading language switching with query preservation. Published
White Paper and approved legal sources are unchanged. The five separate
Simplified Chinese drafts remain untouched and outside this checkpoint.
Filipino is next; older unfinished clarity reviews remain pending.

### Filipino checkpoint — 24 November 2026

The seven guides and web-only reading note are current. The older Introduction
copy was reconciled with the accepted participant journeys, including Offering,
Pangangailangan, the simple three-person example, retirement requests, and
responsibility boundaries. Quoted controls follow committed App catalog
`7d51e3e8`. Independent back-translation covered all 330 revised units; the ten
low-confidence results were directly checked against English. Model-only
liability exclusions and unrelated definitions are absent from the source.
Final clarity edits and protected Quoter labels were independently rechecked.
Exact hashes and decisions are in `docs/i18n/software-review.fil.json`.

Twenty-three former heading destinations are preserved by meaning. TypeScript,
localization/source hashes, heading, theme, and regression checks pass in the
isolated checkpoint. The production build emits 697 routes within the asset
limit and regenerates isolated search/LLM outputs; all 144 compatibility
anchors are present in HTML. Desktop/mobile browser checks pass in both
themes, including text wrapping, localized search, reading-note print
exclusion, query/heading switching, and persistent theme selection. Legal and
publication sources, the five separate Chinese drafts, and older unfinished
clarity-review statuses remain unchanged. Flemish is next.

### Flemish and final checkpoint — 24 November 2026

All 17 software-reference locales are current. Flemish uses the reviewed Dutch
guides as a semantic starting point, with a complete source/clarity comparison
and the committed App vocabulary at `7d51e3e8`: “Portefeuille,” “Verzoek,” and
“Omwisseling bevestigen,” among others. Independent back-translation covered
261 revised units, with all 15 low-confidence results inspected. Nineteen
older heading destinations are preserved. Review decisions and exact hashes
are in `docs/i18n/software-review.nl-BE.json`.

The final consistency pass also clarified one Dutch Concepts paragraph about
making a protection claim; its separate back-translation and review evidence
are retained in `software-review.nl.json`. It corrected 16 Getting Started
Privacy-section links; Dzongkha already used the right destination. All 17
destinations were verified against the localized numbered headings. These
URL-only changes preserve the prose and are explicitly recorded in the
rollout registry, review reports, and manifests. No legal text changed.

The isolated production checkpoint passes TypeScript, localization/source
hashes, heading parity, theme, 15 regression cases, and diff checks. The build
emits 697 routes and 1,521 files; the largest asset is 4.1 MiB, below the
25 MiB limit. All 163 legacy heading aliases and 17 internal heading links
are verified in emitted HTML. An independent check verifies all 697 static
pages' language, direction, canonical and reciprocal alternate metadata, all
17 search indexes' isolation, and revised software references in all 17 LLM
outputs. A fresh final browser matrix passed for all 17 languages at desktop
and mobile widths in both themes; all 17 Privacy links were followed in the
mobile browser. Existing language/query/heading switching, reading-note print
exclusion and theme persistence remain working.

Published White Paper HTML sources, LaTeX, PDFs, approved legal texts, and the
five excluded Chinese drafts remain unchanged. The main checkout retains the
eight known hash/notice failures and stale heading mappings caused by those
five drafts. Keep them outside this software checkpoint commit. The complete
validated checkpoint is available locally at `http://localhost:4173` from
`/tmp/clc-software-reference-checkpoint`; deployment, committing, pushing, and
sibling-repository changes remain user-owned handoffs.

For future per-language updates, use one commit boundary per language.
Deployment and pushing commits remain
user-managed. The workflow is in the [localization guide](docs/i18n/README.md#software-reference-consolidation).

### French checkpoint — 23 November 2026

The seven French guides and web-only reading note are current. All existing
French heading destinations remain intact. The 64 revised units passed a
semantic and clarity review, independent MADLAD back-translation, and direct
comparison with English. Three low-confidence table/introduction units were
reviewed as equivalent wording; no legal responsibility or capability changed.
Exact evidence is recorded in `docs/i18n/software-review.fr.json`; stale
metrics in the affected manifest entries were replaced with the new review.

The isolated checkpoint passes source/hash, localization, heading, theme,
TypeScript, regression, and diff checks. Its production build emits all 697
routes within Cloudflare's asset limit. Browser checks passed for all seven
pages on desktop/mobile in both themes, theme persistence, the French reading
note and print exclusion, French-only search results, and language switching
to the equivalent English heading. Spanish is next. The separate unfinished
Chinese clarity work remains unpromoted.

### Spanish checkpoint — 23 November 2026

The seven Spanish guides and web-only reading note are current, with all
existing heading destinations preserved. The 64 changed units passed semantic
and clarity review, independent MADLAD back-translation, and source comparison.
The one low-confidence introductory sentence was reviewed as equivalent
wording. Back-translation-only additions about CLS/framework downloads were
checked and are absent from the Spanish source. Review hashes and metrics are
recorded in `docs/i18n/software-review.es.json` and the Spanish manifest.

The isolated checkpoint passes the source/hash, localization, heading,
TypeScript, theme, regression, and diff checks. The production build emits all
697 routes within Cloudflare's asset limit. Canonical/alternate/language
metadata, Spanish-only revised search, and `llms` output were verified.
Desktop/mobile browser checks passed in both themes, including persistence,
the localized reading note, print exclusion, search, and equivalent-heading
language switching. Portuguese is next; earlier Chinese work is unchanged.

### Portuguese checkpoint — 23 November 2026

The seven Portuguese guides and web-only reading note are current. All 65
changed units passed semantic and clarity review and independent MADLAD
back-translation; the two low-confidence introduction/table units were
reviewed as equivalent wording. Exact hashes and new metrics are recorded in
`docs/i18n/software-review.pt.json` and the Portuguese manifest.

All previous heading destinations remain present. The corrected quote heading
retains its former MDX anchor; the existing smart-contract settlement heading
is retained because Vocs strips inline HTML aliases from Markdown pages.
Source/hash, localization, heading, TypeScript, theme, regression, and diff
checks pass in the isolated checkpoint. Its production build emits all 697
routes within the asset limit. Metadata, revised LLM output, locale-isolated
search, desktop/mobile light/dark behavior, theme persistence, reading-note
print exclusion, and equivalent-heading switching were verified. Italian is
next. The separate Chinese clarity work remains unchanged and unpromoted.

### Italian checkpoint — 23 November 2026

The seven Italian guides and web-only reading note are current. All 64 changed
units passed semantic and clarity review, independent back-translation, and
comparison with English. The one low-confidence quotation-module label was
confirmed equivalent; model-only additions and incorrect financial expansions
are absent from Italian. Exact hashes and metrics are recorded in
`docs/i18n/software-review.it.json` and its manifest.

The isolated checkpoint passes all source/hash, localization, heading,
TypeScript, theme, regression, and diff checks. Its production build emits
697 routes within the asset limit. All previous heading destinations, locale
metadata, revised LLM content, isolated search, desktop/mobile light/dark
layout, persistence, reading-note print exclusion, and equivalent-heading
switching were verified. Kiswahili is next; earlier Chinese work is unchanged.

### Kiswahili checkpoint — 23 November 2026

The seven Kiswahili guides and web-only reading note are current. All 72
revised units passed semantic and clarity review and independent
back-translation. Shortened definitions and future-credit explanations were
aligned with English on the controlled participant pages. The new White
Paper references use the existing navigation term, “Waraka Mweupe.” No
published paper or legal text changed. Exact source/translation hashes and
review metrics are in `docs/i18n/software-review.sw.json` and its manifest.

The isolated checkpoint passes source/hash, localization, heading,
TypeScript, theme, regression, and diff checks. Its final production build
emits 697 routes within the asset limit. All previous heading destinations,
metadata, revised LLM content, isolated search, desktop/mobile light/dark
layout, persistence, reading-note print exclusion, and equivalent-heading
switching were verified. German is next. Older Chinese clarity work remains
unchanged and unpromoted.

### German checkpoint — 23 November 2026

The seven German guides and web-only reading note are current. All 64 revised
units passed semantic and clarity review, independent back-translation, and
comparison with English. The one low-confidence execution-link unit was
confirmed equivalent; model-only repetitions and additions are absent from
the German source. Exact hashes and new review metrics are recorded in
`docs/i18n/software-review.de.json` and its manifest.

The isolated checkpoint passes source/hash, localization, heading,
TypeScript, theme, regression, and diff checks. The production build emits
697 routes within the asset limit. All previous heading destinations, locale
metadata, revised LLM output, isolated search, desktop/mobile light/dark
layout, theme persistence, reading-note print exclusion, and equivalent-heading
switching were verified. Ukrainian is next. Separate Chinese clarity work
remains unchanged and unpromoted.

### Ukrainian checkpoint — 23 November 2026

The seven Ukrainian guides and web-only reading note are current. All 64
revised units passed semantic and clarity review, independent back-translation,
and comparison with English. Three low-confidence table/link units were
confirmed equivalent. Model omissions and substitutions were checked against
the actual source; owner withdrawals, issuer duties and separate Pool control
remain explicit. Exact hashes and new metrics are recorded in
`docs/i18n/software-review.uk.json` and its manifest.

The isolated checkpoint passes source/hash, localization, heading,
TypeScript, theme, regression, and diff checks. Its production build emits
697 routes within the asset limit. Existing heading destinations, metadata,
revised LLM output, isolated search, desktop/mobile light/dark layout, theme
persistence, reading-note print exclusion, and equivalent-heading switching
were verified. Serbian is next; separate Chinese clarity work is unchanged.

### Serbian checkpoint — 23 November 2026

The seven Serbian guides and web-only reading note are current. All 64 revised
units passed semantic and clarity review, independent back-translation, and
source comparison. Four low-confidence units were confirmed equivalent.
Redemption wording now means using a Voucher with its issuer, avoiding a cash
buyback implication; depositor wording avoids implying investment. These two
clarifications were independently rechecked. Exact hashes and metrics are in
`docs/i18n/software-review.sr.json` and its manifest.

The isolated checkpoint passes source/hash, localization, heading,
TypeScript, theme, regression, and diff checks. The final production build
emits 697 routes within the asset limit; corrected server and client text were
explicitly checked for agreement. All existing heading destinations, metadata,
revised LLM output, isolated search, desktop/mobile light/dark layout, theme
persistence, reading-note print exclusion, and equivalent-heading switching
passed without hydration errors. Arabic is next. The separate Chinese
clarity work remains unchanged and unpromoted.

### Arabic checkpoint — 23 November 2026

The seven Arabic guides and web-only reading note are current. All 68 revised
units passed semantic and clarity review, independent back-translation, and
comparison with English. Six low-confidence results were confirmed equivalent
after accounting for clause order and model omissions. The controlled example
now includes the Want publisher and the complete issuer, Steward and Holder
responsibilities. Review hashes and metrics are recorded in
`docs/i18n/software-review.ar.json` and its manifest.

The browser gate exposed an existing RTL desktop logo positioned over the
language/theme controls. The docs-owned RTL compatibility styles now mirror
that logo into the correct side. The final production build emits 697 routes
within the asset limit. Source/hash, localization, heading, TypeScript, theme,
regression, diff, metadata, previous-anchor and revised LLM checks pass in the
isolated checkpoint. Browser checks verify isolated Arabic search,
desktop/mobile light/dark layout, persistence, reading-note print exclusion,
and equivalent-heading switching. Additional RTL checks at 1440, 390 and 320px
confirm clickable controls, the physical mobile control order, a sticky bar,
LTR technical identifiers and no horizontal overflow. Dzongkha is next;
separate Chinese clarity work remains unchanged and unpromoted.

### Dzongkha checkpoint — 23 November 2026

The seven controlled Dzongkha guides and web-only reading note are current.
The older copy required full meaning reconciliation: wallet/bank confusion,
profit and guarantee implications, and responsibility omissions could not be
resolved by adding software links alone. All 371 revised units were compared
directly with English. The independent MADLAD report retains its 140
low-confidence results and known model errors; those scores were diagnostic,
not used as proof of correctness. Exact hashes and review evidence are in
`docs/i18n/software-review.dz.json` and the refreshed locale manifest.

The read-only app vocabulary check used commit `d54c667c`. Valid Dzongkha
labels are retained. The app's Want value contains Arabic script, so the
guides explain it in Dzongkha; the untranslated “Request retirement” label is
quoted and explained. These app catalog observations are external follow-up.
Terms, policies, White Paper publication sources, LaTeX and PDFs are unchanged.

All 64 former heading IDs are preserved in static HTML and client navigation
through the shared heading-alias registry. Bookmarked headings switch to the
equivalent English section. The isolated checkpoint passes TypeScript,
localization/source hashes, heading parity, theme, regression and diff checks.
The production build emits 697 routes and stays within the asset limit;
localized search and LLM outputs are regenerated. Browser checks cover all
seven guides in desktop/mobile light/dark modes, Tibetan glyphs and wrapping
at 1440/390/320px, native heading styles, print exclusion, and no overflow or
hydration errors. French and Arabic regression checks also pass. Dutch is
next. Separate Chinese clarity work remains unchanged and unpromoted.

### Dutch checkpoint — 23 November 2026

The seven Dutch guides and web-only reading note are current. All 79 revised
units passed semantic and clarity review, independent back-translation, and
direct source comparison, including the five low-confidence results. The
committed app glossary at `d54c667c` was checked read-only; the guides now use
“Besteden” for Spend. Fee/tax, valuation, upgrade and contract-power wording
was corrected within the controlled routes. Review evidence and actual hashes
are in `docs/i18n/software-review.nl.json` and its locale manifest.

The isolated checkpoint passes TypeScript, localization/source hashes,
heading parity, theme, regression and diff checks. Its production build emits
697 routes within the asset limit and regenerates localized search/LLM data.
Desktop/mobile light/dark browser checks pass for all seven guides, theme
persistence, isolated Dutch search, the reading note and print exclusion.
Five corrected headings retain their old destinations; all 69 aliases across
Dzongkha and Dutch are present in static HTML, and bookmarked headings switch
to the equivalent English section. No frozen legal/publication sources or
sibling files changed. Hindi is next; separate Chinese work remains untouched.

### Hindi checkpoint — 23 November 2026

The seven Hindi guides and web-only reading note are current. All 124 revised
units passed direct English comparison, clarity review and independent
back-translation, including the five final low-confidence results. The
committed app glossary at `d54c667c` was checked read-only. The controlled
guides now consistently explain inventory, Pool capacity, retirement,
governance responsibilities and collateral-based future credit arrangements.
Exact hashes and review evidence are in `docs/i18n/software-review.hi.json`
and the refreshed Hindi manifest.

The isolated checkpoint passes TypeScript, localization/source hashes,
heading parity, theme, regression and diff checks. The production build emits
697 routes within the asset limit and regenerates isolated search/LLM data.
Browser checks pass for the seven guides, both themes, theme persistence,
Hindi search, the reading note and print exclusion. Devanagari layout was
checked at 1440/390/320px without overflow. The two corrected Hindi headings
retain their former IDs, and bookmarked headings switch to English correctly;
all 71 compatibility aliases are verified in static HTML. Frozen legal and
publication sources remain unchanged. Simplified Chinese is next, with its
separate unfinished clarity work preserved for explicit reconciliation.

### Simplified Chinese checkpoint — 23 November 2026

The seven Simplified Chinese guides and web-only reading note are current.
The four overlapping clarity drafts were retained and explicitly reconciled
against English and committed baseline `61659cb`; they were not promoted by
refreshing hashes alone. All 302 final changed units passed direct meaning
and clarity review plus independent back-translation, including 17
low-confidence results. Exact source/translation hashes, the original draft
hashes, excluded-file hashes and review decisions are in
`docs/i18n/software-review.zh.json`. Quoted controls follow the committed app
catalog at `d54c667c`, including its non-literal “可存入” label for Credit.

The review preserves participant and legal boundaries, distinguishes
exchange from redemption presentment, fulfillment and discharge, and keeps
the Chinese explanation beside the protected English route illustration.
Twenty-four former heading destinations are mapped by meaning, including
sections moved when the guide expanded. All draft heading destinations remain
available. Browser review also caught visible CJK Markdown delimiters; spacing
was corrected and a parser-based guard added for the controlled guides.

The final isolated checkpoint passes TypeScript, localization/source hashes,
heading parity, theme, 15 regression cases and diff checks. Its rebuilt output
contains 697 routes within the asset limit, regenerated isolated search/LLM
data, and all 95 compatibility anchors. Browser checks pass for all seven
guides in both themes, theme persistence, isolated Chinese search, the reading
note and print exclusion. Additional checks at 1440/390/320px confirm CJK
wrapping, no literal Markdown markers or horizontal overflow, and correct
English destinations for old bookmarks. Traditional Chinese is next.

The separate unfinished files remain:

- `docs/pages/zh/governance/terms.md`
- `docs/pages/zh/governance/privacy.md`
- `docs/pages/zh/white-paper/index.mdx`
- `docs/pages/zh/white-paper/executive-summary.md`
- `docs/pages/zh/white-paper/chapter-17-legal-compliance-note.md`

These five files are byte-for-byte unchanged from their pre-existing drafts.
They still cause eight hash/notice failures in the main checkout. Their
Privacy, White Paper landing and legal-chapter heading edits also make the
main heading-map check fail. These are excluded draft failures, not software
rollout failures. The older Chinese clarity rollout remains pending. Keep
these five edits outside the software checkpoint commit; the isolated
checkpoint uses their unchanged committed versions. All 614 frozen legal and
publication file snapshots remain unchanged, including those five drafts.

### English checkpoint verification — 23 November 2026

The English cleanup passed in an isolated checkout containing this change and
excluding the nine pre-existing Chinese edits:

- TypeScript, localization/source-hash, heading-map, theme, and diff checks.
- Eight regression cases for reviewed-source pinning and Markdown heading IDs.
- Production build: 17 splash routes and 680 documentation routes; all 1,572
  emitted files pass Cloudflare's 25 MiB limit (largest: 4.3 MiB).
- Canonical, alternate, and language metadata for all 119 affected
  route/locale combinations; revised English search and `llms` content.
- Live software destinations and all four linked section anchors.
- Browser checks for seven English guides, desktop/mobile light and dark
  themes, theme persistence, print exclusion, the legacy fee anchor, mobile
  navigation, English/French transitions, and the White Paper reading note.
- No changes to White Paper publication sources, LaTeX/PDFs, approved legal
  texts, or sibling repositories.

At this English checkpoint, the main working tree contained nine unfinished
Chinese edits and 12 existing hash/notice failures. Its original Chinese diff
was verified unchanged then. The later Simplified Chinese checkpoint above
records the explicit four-guide reconciliation and the five remaining drafts.

### Differences recorded during consolidation

| Topic | Observed difference | Treatment here |
| --- | --- | --- |
| Commitment Pool | Software docs use `SwapPool` as software shorthand; public/legal docs describe the governed arrangement and its contract separately. | Retain the responsibility distinction in participant explanations. |
| Routing eligibility | The November review described verified, relative-priced Pools and an explicit plain-token allowlist. The software routing page describes relative/no-quoter Pools and non-expiring GiftableToken vouchers; its configuration reference also documents `router.plain_erc20`. | Remove local eligibility specifications and link to the definitive software reference. The software owner can reconcile its own page-level details. |
| Fee-controller scope | The old local reference described generic optional contract composition; software docs describe the shared controller in CLC deployments. | Retain only participant-facing fee disclosures and link to the software mechanics. |
| Routing parameters and records | Local pages repeated hop limits, quote expiry, prepared calls, wallet types, settlement fields, and service internals. | Keep the participant journey and outcomes; link to the maintained technical pages. |

This pass changes no sibling repository and does not amend approved legal
positions or the published White Paper. The earlier ledgers below describe
their own review baselines, separately from this new cleanup.

## Fixed baselines

- Supported site locales: English (`en`), Arabic (`ar`), German (`de`),
  Dzongkha (`dz`), Spanish (`es`), Filipino (`fil`), French (`fr`), Hindi
  (`hi`), Italian (`it`), Dutch (`nl`), Flemish (`nl-BE`), Portuguese (`pt`),
  Serbian (`sr`), Kiswahili (`sw`), Ukrainian (`uk`), Simplified Chinese
  (`zh`), and Traditional Chinese (`zh-Hant`).
- Translated-policy baseline: `clc-app` commit
  `704480cf2173dd9d95f3feadda3748999df2b072` and `clc-core` commit
  `aee51f6c41c2aaee52d17fe533113a93f7a9d503`.
- Current English product-review baseline: `clc-app` `origin/develop` commit
  `28ba4cb22182a22c2781ca24af1aa8c0291b3339`, local clean `clc-core`
  commit `d2f6c45614573a8f2145121c845b74d750c9faa0`, and Protocol v1.1.0
  commit `ce090fd3d5a7493c726fb939da39af15ef1c9d7c`.
- Production-routing audit baseline: `clc-app` `master` commit
  `b5f337f3c2d7bc508d11f35126ad2175b6c717eb`, `clc-core` `master`
  commit `ef0f0067ce3ac8f254d33b7f974304510a439aab`, and Protocol
  v1.1.0 commit `ce090fd3d5a7493c726fb939da39af15ef1c9d7c`.
- English controls the policy suite and all convenience translations.
- The current build contains 17 splash routes and 680 documentation routes.
  Complete four-policy sets exist in all 16 translated locales, but their
  Privacy Notices remain pinned to the prior reviewed English source pending
  reconciliation.
- The existing 36-page documentation translations remain structurally
  validated against their last reviewed source. The English clarity review
  on 17 November materially changed nine routes; those translations remain
  pinned to their previous reviewed source until they are reconciled one
  language at a time. The controlled registry is
  `docs/i18n/english-review-rollout.json`.
- Policy Version 1.0 uses 9 November 2026 as its publication and effective
  date. If production deployment happens later, update both dates and every
  dependent policy hash before publishing.

## Video scripts

Markdown is authoritative; each source has a matching DOCX export.

| Script | Markdown | DOCX | Product review |
| --- | --- | --- | --- |
| Original doctor/farmer social introduction | Complete | Complete | Complete |
| Original doctor/farmer Wants and Pool explainer | Complete | Complete | Complete |
| Short dentist–farmer–mechanic Unboxing edit | Complete | Complete | Complete |
| Full dentist–farmer–mechanic Unboxing | Complete | Complete | Complete |
| Community-owned Health Market follow-up | Complete | Complete | Complete |

## English legal suite

| Item | Status | Evidence or next action |
| --- | --- | --- |
| Policy hub, Privacy Notice, Data Protection Policy, and Child Safeguarding Policy | English review updated | Version 1.0 remains the legal baseline. The Privacy Notice now has a verified current-service register and direct ODPC complaint link; child-data guidance points to the current guidance note. |
| Factual product audit | Current | Retirement, routing eligibility, and acceptance controls were checked against the current App/Core commits above. |
| Counsel-approved legal structure | Approved | The product owner confirmed approval of the revised English legal text on 17 November 2026. |
| Terms v1.1 | Factual corrections prepared | Publication and effective date remain 1 October 2026. Current acceptance controls and the reviewed retirement lifecycle are described without claiming a durable versioned acceptance record. |
| Translation status | Reconciliation required | Privacy Notice and Terms convenience translations remain pinned to their previous approved English source. Do not present them as translations of the revised English text yet. |
| Production deployment | Translation reconciliation in progress | Reconcile and validate each convenience translation before deploying this English-review batch. |

## Policy localization ledger

“Release-ready” means all four policy pages are present, reconciled to the
frozen English source, carry the English-controls notice, and pass the focused
repository validator. “Deployed” and “App handoff” remain separate operational
steps.

| Order | Locale | Translation | Verification | Release readiness | Deployment | App link handoff |
| ---: | --- | --- | --- | --- | --- | --- |
| — | English (`en`) | Revised source approved | Current product audit complete | Release-ready | User-managed | External follow-up |
| 1 | French (`fr`) | Reconciled to the approved English review | Focused checks and localized PDF passed | Release-ready | User-managed | External follow-up |
| 2 | Spanish (`es`) | Reconciled to the approved English review | Focused checks and localized PDF passed | Release-ready | User-managed | External follow-up |
| 3 | Portuguese (`pt`) | Reconciled to the approved English review | Focused checks, production build, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 4 | Italian (`it`) | Reconciled to the approved English review | Focused checks, production build, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 5 | Kiswahili (`sw`) | Reconciled to the approved English review | Focused checks, production build, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 6 | German (`de`) | Reconciled to the approved English review | Focused checks, production build, browser smoke test, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 7 | Ukrainian (`uk`) | Reconciled to the approved English review | Focused checks, production build, browser smoke test, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 8 | Serbian (`sr`) | Reconciled to the approved English review | Focused checks, production build, browser smoke test, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 9 | Arabic (`ar`) | Reconciled to the approved English review | Focused checks, production build, RTL browser smoke test, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 10 | Dzongkha (`dz`) | Reconciled to the approved English review | Product-owner acceptance of the prior machine translation, targeted source reconciliation, foreign-script cleanup, and focused checks passed | Release-ready | User-managed | External follow-up |
| 11 | Dutch (`nl`) | Reconciled to the approved English review | Focused checks and localized PDF passed | Release-ready | User-managed | External follow-up |
| 12 | Hindi (`hi`) | Reconciled to the approved English review | NLLB back-translation, legal-meaning review, focused checks, and localized PDF passed | Release-ready | User-managed | External follow-up |
| 13 | Simplified Chinese (`zh`) | Final | NLLB back-translation, complete low-confidence review, legal-meaning review, and focused checks passed | Prior release only; Privacy reconciliation pending | User-managed | External follow-up |
| 14 | Traditional Chinese (`zh-Hant`) | Final | App-vocabulary alignment, independent back-translation, complete low-confidence review, and focused checks passed | Prior release only; Privacy reconciliation pending | User-managed | External follow-up |
| 15 | Filipino (`fil`) | Final | Focused checks passed | Prior release only; Privacy reconciliation pending | User-managed | External follow-up |
| 16 | Flemish (`nl-BE`) | Final | Focused checks passed | Prior release only; Privacy reconciliation pending | User-managed | External follow-up |

## English clarity-review rollout

The 17 November review improved the English learner path, splash hierarchy,
current App behavior, legal discoverability, White Paper structure, and page
metadata. The affected routes are Getting Started, Concepts, the practical
example, Protocol network architecture, Privacy Notice, Terms, the White Paper
landing page, Executive Summary, and legal/compliance chapter.

English, French, Spanish, Portuguese, Italian, Kiswahili, German, Ukrainian, Serbian, Arabic, Dzongkha, Dutch, and Hindi are current. The remaining 4 translated locales are deliberately marked
`pending` for these nine routes in `docs/i18n/english-review-rollout.json`.
Their files, hashes, search content, and links remain usable at the last
reviewed version; validators must not silently promote them to the new English
source. Reconcile one locale at a time using the established semantic,
clarity, protected-token, and back-translation workflow.

The splash layout improvement applies to every locale because it changes the
shared component. The revised English splash copy is the new source copy; its
localized equivalents should be updated during the same per-language pass.

The revised English Terms and Privacy Notice were approved on 17 November
2026. Translation reconciliation is now the only repository gate for this
batch.

## Production-routing documentation rollout

White Paper v0.9 is dated 16 November 2026. It documents the production
App/Core route workflow while keeping the Protocol v1.1.0 Solidity
`SwapRouter` quote-only. The rollout registry is
`docs/i18n/routing-rollout.json`. All 17 locales are now marked current. The
registry still enforces that any future pending locale remains pinned to its
last reviewed pages, manifest hashes, search/LLM output, and PDF until that
locale is reconciled.

| Order | Locale | Routing pages | White Paper | PDF | Release status |
| ---: | --- | --- | --- | --- | --- |
| — | English (`en`) | Updated and evidence-audited | v0.9 | v0.9 verified | Current source; release gate passed |
| 1 | French (`fr`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 2 | Spanish (`es`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 3 | Portuguese (`pt`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 4 | Italian (`it`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 5 | Kiswahili (`sw`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 6 | German (`de`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 7 | Ukrainian (`uk`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 8 | Serbian (`sr`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 9 | Arabic (`ar`) | Reconciled and reviewed, including RTL terminology and layout | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 10 | Dzongkha (`dz`) | Reconciled and reviewed, including app terminology and Tibetan-script checks | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 11 | Dutch (`nl`) | Reconciled and reviewed | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 12 | Hindi (`hi`) | Reconciled and reviewed, including Devanagari terminology and PDF font checks | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 13 | Simplified Chinese (`zh`) | Reconciled and reviewed, including app terminology and CJK PDF font checks | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 14 | Traditional Chinese (`zh-Hant`) | Reconciled and reviewed, including app terminology, Traditional-script review, and CJK PDF font checks | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 15 | Filipino (`fil`) | Reconciled and reviewed, including app terminology and natural-language corrections | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |
| 16 | Flemish (`nl-BE`) | Reconciled against the reviewed Dutch edition and aligned with Flemish App terminology | v0.9 | v0.9 verified | Current; release gate passed 17 November 2026 |

### Routing release gate for one locale

- Reconcile every route listed in the routing rollout registry with the v0.9
  English source and the shared terminology.
- Update the localized v0.9 notice, archive page, navigation-visible content,
  source hashes, heading map, isolated search data, and `llms` output.
- Generate and inspect that locale's v0.9 LaTeX and PDF while retaining its
  v0.8 PDF as an archived artifact.
- Mark the locale `current` only after focused route checks, back-translation,
  a production build, PDF text/font checks, and `git diff --check` pass.

### Repository completion gate

The earlier production-routing rollout remains complete in all 17 locales.
The subsequent English clarity review is a separate controlled rollout and is
not complete until its nine changed routes have been reconciled in all 16
translated locales. The revised English legal text was approved on 17
November 2026.

## Remaining external handoff

1. Reconcile the nine English-review routes and splash copy one locale at a time.
2. Run the final repository and browser gate, then deploy the docs.
3. Verify the policy routes and localized navigation on the production domain.
4. After deployment, update `clc-app` so localized About, Terms, and Privacy
   links use only deployed documentation locales. That App change is an
   external handoff, not unfinished documentation work.
5. When a final public URL and captions or transcript are available for a
   current CLC explainer, review whether it should replace or supplement the
   historical commitment-pooling video on the splash page.

## Release gate for one policy locale

- All four pages match the current English source structure and hashes.
- Names, citations, dates, emails, routes, identifiers, and legal boundaries
  are protected.
- The convenience-translation notice links to the English source and states
  that English controls unless applicable law requires otherwise.
- Public/private resource fields, recipient lookup, blockchain permanence,
  lawful bases, transfers, retention, complaints, and safeguarding reporting
  retain the English meaning.
- Navigation, heading mappings, search, canonical/alternate metadata, and
  locale-specific `llms` output are present.
- The focused validator and final repository gate pass.
