# Multilingual documentation rollout

Last updated: 10 October 2026

This file tracks the one-language-at-a-time rollout of the public documentation.
The implementation details, commands, file conventions, and translation tooling
remain in the [documentation localization guide](docs/i18n/README.md).

English is the source text. All thirteen current `clc-app` languages now have a
translated splash page and a complete 36-page documentation set. Dutch and
Hindi were detected after the original eleven-language splash rollout.
Detailed documentation is normally released only after all 36 pages, the
navigation, the site interface, and the locale manifest are complete and the
reviewable web draft has been accepted. The current uninterrupted batch is the
explicit exception: each complete, validated draft is wired for review before
the combined handoff.

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
| 6 | Arabic (`ar`) | Complete | Complete | Batch review pending | Complete | Pending companion app work | Deferred |
| 7 | Dzongkha (`dz`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Deferred |
| 8 | Dutch (`nl`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Deferred |
| 9 | Hindi (`hi`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Deferred |

Only one queued language is normally active at a time. Each web draft must pass
its validation gate before work starts on the next language. Arabic, Dzongkha,
Dutch, and Hindi were completed as one uninterrupted batch at the user's
request. All four are now wired into the review build; user acceptance and
deployment remain pending.

## Translation and app baselines

- The documentation glossary and translation manifests use `clc-app`
  `origin/develop` commit `0ce5b4e808bf0d28da5c6925fa8dbf2459c200cd`
  as their current synchronization baseline.
- `clc-app` `origin/develop` was last audited at
  `0ce5b4e808bf0d28da5c6925fa8dbf2459c200cd` on 10 October 2026.
- That committed registry contains all thirteen current app languages,
  including Dutch (`nl`) and Hindi (`hi`). The docs registry now represents the
  same thirteen locale codes and metadata values.
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
| 10 October 2026 | `0ce5b4e808bf0d28da5c6925fa8dbf2459c200cd` | Dutch (`nl`) is present in the committed app locale registry and catalog. The docs use `Fonds`, `Fondsen`, `Waardebon`, `Waardebonnen`, `Markt`, `Uitgever`, `Inwisselen`, `Waardebon buiten gebruik stellen`, `Verzenden`, `Ruilen`, `Portemonnee`, `Kredietlimiet`, and `Aanbod`; `Commitmentfonds` and `Fondsbeheerder` cover concepts without exact app labels. |
| 10 October 2026 | `0ce5b4e808bf0d28da5c6925fa8dbf2459c200cd` | Hindi (`hi`) is now committed on `origin/develop`. The app terms are `पूल`, `वाउचर`, `बाज़ार`, `जारीकर्ता`, `भुनाएँ`, `रिटायर वाउचर`, `भेजें`, `अदला-बदली`, `वॉलेट`, `क्रेडिट सीमा`, and `ऑफ़र`; the docs glossary adds `प्रतिबद्धता पूल` and `पूल प्रबंधक` for concepts without exact app labels. |

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
6. Normally wait for acceptance before starting another language. For the
   current explicitly authorized batch, record the review as pending, complete
   the validation gate, and continue to the next queued language.
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

### 6. Arabic (`ar`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Refresh or replace the existing non-public Arabic draft.
- [x] Review RTL layout, Arabic-Indic display numbers, logical-direction styles,
      and LTR isolation for code, formulas, addresses, symbols, and URLs.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Arabic navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass automated validation and the production build; include final RTL
      desktop/mobile inspection in the batch visual review.
- [ ] Provide the batch review URLs and record user acceptance.
- [x] Add Arabic to the released documentation set; the commit remains user-managed.
- [ ] Deploy and verify the Arabic routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 7. Dzongkha (`dz`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Review Tibetan-script terminology, native display digits, the `other`
      plural category, line breaking, platform-font fallback, and glyph coverage.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Dzongkha navigation, UI/search text, metadata, and notices.
- [x] Complete a first-draft priority-page clarity pass; native-language review
      is still required before publication-quality approval.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass automated validation and rendered desktop/mobile smoke inspection.
- [ ] Provide the review URLs and record user acceptance.
- [x] Add Dzongkha to the released documentation set; the commit remains user-managed.
- [ ] Deploy and verify the Dzongkha routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 8. Dutch (`nl`)

- [x] Record the current `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Add Dutch to the docs locale registry, splash catalogs, browser matching,
      metadata, and the reusable language selector.
- [x] Review natural Dutch terminology for Voucher, Commitment Pool, Pool
      Steward, Market, Issuer, Redeem, Send, Swap, Wallet, and Credit limit.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Dutch navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass automated validation and rendered-route smoke inspection.
- [ ] Provide the review URLs and record user acceptance.
- [x] Add Dutch to the released documentation set; the commit remains user-managed.
- [ ] Deploy and verify the Dutch routes.
- [ ] Complete the coordinated `clc-app` link verification.
- [ ] Generate and publish the localized PDF in the later PDF phase.

### 9. Hindi (`hi`)

- [x] Confirm that the app's Hindi work is committed and record the exact
      `clc-app` `origin/develop` commit and vocabulary audit.
- [x] Add Hindi to the docs locale registry, splash catalogs, browser matching,
      metadata, and the reusable language selector.
- [x] Review Devanagari terminology, natural action labels, plural handling,
      number formatting, font fallback, line breaking, and technical-token
      isolation.
- [x] Generate and structurally verify all 36 translated pages.
- [x] Add and review Hindi navigation, UI/search text, metadata, and notices.
- [x] Complete the priority-page clarity pass.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass automated validation and rendered desktop/mobile smoke inspection.
- [ ] Provide the review URLs and record user acceptance.
- [x] Add Hindi to the released documentation set; the commit remains user-managed.
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

