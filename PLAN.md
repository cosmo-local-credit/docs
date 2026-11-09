# Repository completion ledger

Last updated: 9 November 2026

This ledger records work that belongs to this documentation repository. The
technical localization workflow and commands live in the
[documentation localization guide](docs/i18n/README.md).

## Fixed baselines

- Supported site locales: English (`en`), Arabic (`ar`), German (`de`),
  Dzongkha (`dz`), Spanish (`es`), Filipino (`fil`), French (`fr`), Hindi
  (`hi`), Italian (`it`), Dutch (`nl`), Flemish (`nl-BE`), Portuguese (`pt`),
  Serbian (`sr`), Kiswahili (`sw`), Ukrainian (`uk`), Simplified Chinese
  (`zh`), and Traditional Chinese (`zh-Hant`).
- Product audit: `clc-app` `origin/develop` commit
  `79b498f74e615f4a942122f91081f23beb8760ee`.
- Backend audit: `clc-core` `origin/develop` commit
  `15a65e5ab751841fb16f7eb761910d0377c7f322`.
- English controls the policy suite and all convenience translations.
- The current safe build contains 17 splash routes and 668 documentation
  routes. Four-policy sets are release-ready in 13 translated locales; the
  remaining three locales use the English-policy fallback.
- The existing 36-page documentation translations are structurally validated
  but are outside editorial re-review in this completion pass.
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
| Policy hub, Privacy Notice, Data Protection Policy, and Child Safeguarding Policy | Final source prepared | Version 1.0; final source hashes are recorded in `docs/i18n/policy-locales.json`. |
| Factual product audit | Complete | Reconciled with the App and backend commits above. |
| Counsel-approved legal structure | Preserved | Factual corrections do not silently change rights, liability, or legal position. |
| Terms v1.1 | Unchanged except factual privacy contact | Publication and effective date remain 1 October 2026. |
| Production deployment | User-managed | Change the policy dates and hashes first if deployment is later than 9 November 2026. |

## Policy localization ledger

“Release-ready” means all four policy pages are present, reconciled to the
frozen English source, carry the English-controls notice, and pass the focused
repository validator. “Deployed” and “App handoff” remain separate operational
steps.

| Order | Locale | Translation | Verification | Release readiness | Deployment | App link handoff |
| ---: | --- | --- | --- | --- | --- | --- |
| — | English (`en`) | Source final | Product audit complete | Release-ready | User-managed | External follow-up |
| 1 | French (`fr`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 2 | Spanish (`es`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 3 | Portuguese (`pt`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 4 | Italian (`it`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 5 | Kiswahili (`sw`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 6 | German (`de`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 7 | Ukrainian (`uk`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 8 | Serbian (`sr`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 9 | Arabic (`ar`) | Final | Focused checks passed, including RTL structure | Release-ready | User-managed | External follow-up |
| 10 | Dzongkha (`dz`) | Candidate rejected | Unsafe machine candidates mixed scripts and changed legal meaning; qualified replacement required | Blocked from release | Not deployed | English fallback |
| 11 | Dutch (`nl`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 12 | Hindi (`hi`) | Final | NLLB back-translation, legal-meaning review, and focused checks passed | Release-ready | User-managed | External follow-up |
| 13 | Simplified Chinese (`zh`) | Candidate rejected | Independent candidates changed negations, roles, and safeguarding meaning; qualified review required | Blocked from release | Not deployed | English fallback |
| 14 | Traditional Chinese (`zh-Hant`) | Candidate rejected | Independent candidate contained truncated obligations, malformed links, and unsafe legal wording; qualified review required | Blocked from release | Not deployed | English fallback |
| 15 | Filipino (`fil`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |
| 16 | Flemish (`nl-BE`) | Final | Focused checks passed | Release-ready | User-managed | External follow-up |

## Completion sequence

1. Obtain qualified fluent legal-language review for Dzongkha, Simplified
   Chinese, and Traditional Chinese. Their generated candidates were rejected
   and remain outside Git; their sites continue to use the English policies.
2. After each replacement passes the release gate, promote its four pages,
   refresh the heading map and manifest, and validate it independently.
3. Run the focused policy validator for every released policy locale, followed by type,
   localization, heading, theme, production-build, and whitespace checks.
4. Inspect policy notices and tables on mobile and desktop, in both themes,
   including Arabic RTL and Devanagari. Inspect Tibetan and both Chinese
   scripts when their qualified replacements are available.
5. Deploy the docs. Deployment is not represented as complete in Git.
6. After deployment, update `clc-app` so localized About, Terms, and Privacy
   links use only deployed documentation locales. That App change is an
   external handoff, not unfinished documentation work.

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
