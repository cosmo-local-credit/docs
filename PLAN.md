# Multilingual documentation rollout

Last updated: 10 October 2026

This file tracks the one-language-at-a-time rollout of the public documentation.
The implementation details, commands, file conventions, and translation tooling
remain in the [documentation localization guide](docs/i18n/README.md).

English is the source text. The original eleven-language set already has a
translated splash page. Dutch and Hindi were detected later in `clc-app`; their
splash pages and full documentation are included in the remaining rollout.
Detailed documentation is released only after all 36 pages, the navigation,
the site interface, and the locale manifest are complete and the reviewable web
draft has been accepted.

## Rollout status

| Order | Language | Splash | Web translation | User review | Docs release | App-link verification | Localized PDF |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| — | English (`en`) | Complete | Source | Complete | Complete | Current unprefixed links | Current source PDF |
| — | French (`fr`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| — | Spanish (`es`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| — | Portuguese (`pt`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| 1 | Italian (`it`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| 2 | Kiswahili (`sw`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| 3 | German (`de`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| 4 | Ukrainian (`uk`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| 5 | Serbian (`sr`) | Complete | Complete | Complete | Complete | Pending companion app work | Deferred |
| 6 | Arabic (`ar`) | Complete | In progress | Pending | Pending | Pending | Deferred |
| 7 | Dzongkha (`dz`) | Complete | Queued | Pending | Pending | Pending | Deferred |
| 8 | Dutch (`nl`) | Queued | Queued | Pending | Pending | Pending | Deferred |
| 9 | Hindi (`hi`) | Queued | Queued | Pending | Pending | Pending | Deferred |

Only one queued language is active at a time. Do not begin the next language
until the current web draft passes validation and is accepted for release.

## Translation and app baselines

- The existing documentation glossary and released translation manifests use
  `clc-app` commit `32265981e7e2f7fcca9c0bb53b7aad8a1559f7f1` as their translation baseline.
- `clc-app` `origin/develop` was last audited at
  `e0aab634fbd6cb9c7731cef6a49244cdbd23185c` on 10 October 2026.
- The committed registry at that audit includes Dutch (`nl`). A separate local
  `clc-app` branch, `feat/hindi-language`, also contains uncommitted Hindi
  (`hi`) work. Hindi terminology will be synchronized from a committed app
  revision before its docs draft is released.
- The current app catalog entries for Voucher, Pool, Market, Issuer, Redeem,
  Send, Swap, and Wallet agreed with the existing docs glossary where those
  locales were already represented.
- At the start of every language, record the exact current `origin/develop`
  commit and compare the app locale metadata and vocabulary again. Unrelated app
  copy changes do not invalidate completed documentation translations.
- If a relevant app term changes, record the decision here, update the glossary,
  and review that term in every already released documentation language.

### Vocabulary audit log

| Date | App commit | Result |
| --- | --- | --- |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Locale registry unchanged; current core catalog terms remain aligned with the docs glossary. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Italian reviewed. The docs use the natural action label “Invia”; the app catalog currently uses the formal label “Invii”. Other core terms remain aligned. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Kiswahili reviewed. The docs consistently use `Kikundi`, matching the established splash glossary and the app's primary labels; older app entries using `Puli` or `Bwawa` are treated as app catalog drift. Core actions remain `Tuma`, `Komboa`, and `Badilisha`. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | German reviewed. The docs preserve the app terms `Gutschein`, `Fonds`, `Herausgeber`, `Markt`, `Einlösen`, `Senden`, `Tauschen`, `Geldbörse`, and `Kreditlimit`; `Commitment-Fonds` and `Fonds-Verantwortliche` follow the established splash glossary. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Ukrainian reviewed. The docs preserve the app terms `Ваучер`, `Пул`, `Емітент`, `Ринок`, `Погасити`, `Надіслати`, `Обміняти`, `Гаманець`, and `Кредитний ліміт`; `Пул зобов’язань` and `Куратор Пулу` follow the established splash glossary. |
| 10 October 2026 | `e0aab634fbd6cb9c7731cef6a49244cdbd23185c` | Serbian reviewed. The docs use the established Serbian splash terms `Ваучер`, `Тржница`, `Тржница обавеза`, `Управник Тржнице`, `Издавалац`, `Тржиште`, `Искористи`, `Пошаљи`, `Размена`, `Новчаник`, and `Кредитни лимит`. The app catalog mixes `Тржница` with `пул`, Ekavian with Ijekavian forms, and Cyrillic with the Latin label `Povuci vaučer`; the docs consistently use Serbian Cyrillic and the splash glossary. |
| 10 October 2026 | `e0aab634fbd6cb9c7731cef6a49244cdbd23185c` | Arabic reviewed. Locale metadata remains `ar`, RTL, with `ar-u-nu-arab` number formatting. The docs preserve the app terms `قسيمة`, `الصندوق`, `السوق`, `الجهة المصدرة`, `استرداد`, `سحب القسيمة من التداول`, `إرسال`, `مبادلة`, `المحفظة`, and `حد الائتمان`; `صندوق الالتزامات` and `مشرف الصندوق` follow the established splash glossary. |
| 10 October 2026 | `e0aab634fbd6cb9c7731cef6a49244cdbd23185c` | Dutch (`nl`) is present in the committed app locale registry and catalog but was absent from the original docs rollout. It is now queued for a splash page and complete documentation pass. |
| 10 October 2026 | Local `feat/hindi-language` work based on `e0aab634fbd6cb9c7731cef6a49244cdbd23185c` | Hindi (`hi`) is present in the app working registry and a new catalog, but is not yet part of the audited `origin/develop` commit. It is queued after Dutch; its exact terminology and baseline commit must be re-audited once the app work is committed. |

## Repeatable language workflow

For every language:

1. Audit the current app locale registry and message catalog and record the app
   commit in the checklist below.
2. Translate all 36 English pages while protecting names, contracts, code,
   formulas, URLs, dates, addresses, identifiers, and version numbers.
3. Add the navigation, global UI and search labels, metadata, Terms convenience
   translation notice, White Paper source notice, heading mappings, and locale
   manifest.
4. Perform a fast clarity pass, prioritizing Getting Started, Concepts, Terms,
   the White Paper landing page, Protocol overview and network pages, search,
   navigation, and previous/next controls.
5. Run the checks documented below, then provide local preview links for the
   splash page, Getting Started, Concepts, Terms, Protocol, and White Paper.
6. Wait for acceptance before adding the language to the released documentation
   set or starting another language.
7. Release the docs before enabling that locale's deep-documentation links in
   `clc-app`. Keep each language in its own commit or pull request.

## Language checklists

### 1. Italian (`it`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Confirm natural Italian action verbs and the glossary terms, especially
      Voucher, Send, Redeem, Swap, Issuer, Pool, and Pool Steward.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Italian navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass all automated and visual validation.
- [x] Provide the review URLs and record user acceptance.
- [x] Add Italian to the released documentation set and commit the language.
- [ ] Deploy and verify the Italian routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 2. Kiswahili (`sw`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Review natural community and economic terminology, especially whether the
      app-aligned Pool and Commitment Pool terms remain clear in longer prose.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Kiswahili navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass all automated and visual validation.
- [x] Provide the review URLs and record user acceptance.
- [x] Add Kiswahili to the released documentation set and commit the language.
- [ ] Deploy and verify the Kiswahili routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 3. German (`de`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Preserve the app terms `Fonds`, `Gutschein`, and `Geldbörse`; review
      compound words, long labels, line wrapping, and overflow.
- [x] Refresh or replace the existing non-public German draft and structurally
      verify all 36 translated pages.
- [x] Add and review German navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass all automated and visual validation.
- [x] Provide the review URLs and record user acceptance.
- [x] Add German to the released documentation set; the commit remains user-managed.
- [ ] Deploy and verify the German routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 4. Ukrainian (`uk`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Review Cyrillic terminology, plural forms, decimal formatting, and
      non-breaking-space grouping while preserving machine-readable values.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Ukrainian navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass all automated and visual validation.
- [x] Provide the review URLs and record user acceptance.
- [x] Add Ukrainian to the released documentation set; the commit remains user-managed.
- [ ] Deploy and verify the Ukrainian routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 5. Serbian (`sr`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Review Cyrillic terminology, consistent orthography, technical labels,
      formulas, and code isolation.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Serbian navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass all automated and visual validation.
- [x] Provide the review URLs and record user acceptance.
- [x] Add Serbian to the released documentation set; the commit remains user-managed.
- [ ] Deploy and verify the Serbian routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 6. Arabic (`ar`) — current draft

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [ ] Refresh or replace the existing non-public Arabic draft.
- [ ] Review RTL layout, Arabic-Indic display numbers, logical-direction styles,
      and LTR isolation for code, formulas, addresses, symbols, and URLs.
- [ ] Generate and structurally verify all 36 translated pages.
- [ ] Add and review Arabic navigation, UI/search text, metadata, and notices.
- [ ] Complete the priority-page clarity pass.
- [ ] Refresh the translation manifest and heading mappings.
- [ ] Pass all automated and visual validation, including RTL mobile layouts.
- [ ] Provide the review URLs and record user acceptance.
- [ ] Add Arabic to the released documentation set and commit the language.
- [ ] Deploy and verify the Arabic routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 7. Dzongkha (`dz`)

- [ ] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [ ] Review Tibetan-script terminology, native display digits, the `other`
      plural category, line breaking, platform-font fallback, and glyph coverage.
- [ ] Generate and structurally verify all 36 translated pages.
- [ ] Add and review Dzongkha navigation, UI/search text, metadata, and notices.
- [ ] Complete the priority-page clarity pass.
- [ ] Refresh the translation manifest and heading mappings.
- [ ] Pass all automated and visual validation.
- [ ] Provide the review URLs and record user acceptance.
- [ ] Add Dzongkha to the released documentation set and commit the language.
- [ ] Deploy and verify the Dzongkha routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 8. Dutch (`nl`)

- [ ] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [ ] Add Dutch to the docs locale registry, splash catalogs, browser matching,
      metadata, and the reusable language selector.
- [ ] Review natural Dutch terminology for Voucher, Commitment Pool, Pool
      Steward, Market, Issuer, Redeem, Send, Swap, Wallet, and Credit limit.
- [ ] Generate and structurally verify all 36 translated pages.
- [ ] Add and review Dutch navigation, UI/search text, metadata, and notices.
- [ ] Complete the priority-page clarity pass.
- [ ] Refresh the translation manifest and heading mappings.
- [ ] Pass all automated and visual validation.
- [ ] Provide the review URLs and record user acceptance.
- [ ] Add Dutch to the released documentation set and commit the language.
- [ ] Deploy and verify the Dutch routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 9. Hindi (`hi`)

- [ ] Confirm that the app's Hindi work is committed and record the exact
      `clc-app` `origin/develop` commit and vocabulary audit.
- [ ] Add Hindi to the docs locale registry, splash catalogs, browser matching,
      metadata, and the reusable language selector.
- [ ] Review Devanagari terminology, natural action labels, plural handling,
      number formatting, font fallback, line breaking, and technical-token
      isolation.
- [ ] Generate and structurally verify all 36 translated pages.
- [ ] Add and review Hindi navigation, UI/search text, metadata, and notices.
- [ ] Complete the priority-page clarity pass.
- [ ] Refresh the translation manifest and heading mappings.
- [ ] Pass all automated and visual validation.
- [ ] Provide the review URLs and record user acceptance.
- [ ] Add Hindi to the released documentation set and commit the language.
- [ ] Deploy and verify the Hindi routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

## Validation gate

Before requesting review for a language, run:

```sh
npm run typecheck
npm run check:i18n
npm run i18n:headings:check
npm run build
git diff --check
```

The review must also confirm:

- locale-isolated search results and translated search controls;
- browser detection, saved manual selection, and manual English override;
- query and equivalent-heading hash preservation during language changes;
- localized internal links and explicit unprefixed English-source links;
- correct canonical, `hreflang`, `lang`, and `dir` metadata;
- light and dark themes on desktop and mobile;
- readable tables, diagrams, code, navigation, and long labels;
- no unresolved translation markers, protected-token changes, or mixed-language
  site chrome.

## `clc-app` documentation-link contract

Localized documentation links are a coordinated release checkpoint, but app
implementation remains owned by the `clc-app` repository.

- Both repositories use the same locale codes.
- English documentation is always unprefixed; there is no `/en/` route.
- Every supported non-English locale can link its About entry to `/{locale}/`
  because all localized splash pages already exist.
- A deep link such as Terms uses `/{locale}/governance/terms` only after that
  locale's complete documentation has been deployed.
- Before a locale's docs release, its Terms link falls back to
  `/governance/terms` in English.
- The app should use one locale-aware docs URL resolver for About, Terms, and
  future documentation links rather than adding more static URL constants.
- The app's `clc.locale` preference and the docs' `clc.docs.locale` preference
  remain independent; cross-origin storage sharing is not attempted.

Expected behavior:

| App locale and docs state | About | Terms |
| --- | --- | --- |
| English | `/` | `/governance/terms` |
| French, released | `/fr/` | `/fr/governance/terms` |
| Italian, before release | `/it/` | `/governance/terms` |
| Italian, after release | `/it/` | `/it/governance/terms` |

Release order for each language:

1. Deploy and verify the documentation language.
2. Add the language to the app's known full-documentation locale set.
3. Run `vp check`, `vp test`, and the app's focused documentation-link tests.
4. Verify About and Terms from the running app in that language.
5. Mark the app-link verification complete in the rollout table and checklist.

## Deferred localized PDF phase

After all remaining web drafts are reviewed, generate the twelve localized White
Paper v0.8 PDFs one language at a time in the same order. Until each PDF passes
inspection, its translated HTML landing page continues to link explicitly to
the English-source PDF.

For each PDF, verify extracted text, formulas, links, embedded fonts, document
language metadata, line wrapping, RTL behavior where applicable, and the absence
of missing glyphs. English remains identified as the source text.

