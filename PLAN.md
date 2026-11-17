# Repository completion ledger

Last updated: 17 November 2026

This ledger records work that belongs to this documentation repository. The
technical localization workflow and commands live in the
[documentation localization guide](docs/i18n/README.md).

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
| 12 | Hindi (`hi`) | Final | NLLB back-translation, legal-meaning review, and focused checks passed | Prior release only; Privacy reconciliation pending | User-managed | External follow-up |
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

English, French, Spanish, Portuguese, Italian, Kiswahili, German, Ukrainian, Serbian, Arabic, Dzongkha, and Dutch are current. The remaining 5 translated locales are deliberately marked
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
