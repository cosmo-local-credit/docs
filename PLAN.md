# Multilingual documentation rollout

Last updated: 25 October 2026

This file tracks the one-language-at-a-time rollout of the public documentation.
The implementation details, commands, file conventions, and translation tooling
remain in the [documentation localization guide](docs/i18n/README.md).

English is the source text. All seventeen locales committed on `clc-app`
`origin/develop`—English plus sixteen translated languages—are represented in
the docs with a translated splash page and a complete 36-page documentation
set. Dutch, Hindi, Simplified Chinese, Traditional Chinese, Filipino, and
Flemish were detected after the original eleven-language splash rollout.

Detailed documentation is normally released only after all 36 pages, the
navigation, the site interface, and the locale manifest are complete and the
reviewable web draft has been accepted. The current uninterrupted batch is the
explicit exception: each complete, validated draft is wired for review before
the combined handoff.

## English policy-suite checkpoint

- [x] Add English review drafts for the Policy hub, Privacy Notice, Data
  Protection Policy, and Child Safeguarding Policy.
- [x] Keep the four routes English-only during live review, including English
  navigation, search, canonical metadata, and `llms` output.
- [x] Verify the documented App visibility boundaries against `clc-app`
  `765c94c6c19f621b6aa8211fd13e58caa8cc9d03` and `clc-core`
  `f8c6ccf645a917c687ddbd30b64045c04a5506ea` on 24 October 2026.
- [ ] Verify the processor, international-transfer, retention, child-safety,
  and publication statements; obtain legal approval; then add actual publication
  and effective dates.
- [ ] Freeze the approved English sources before translating the four pages into
  all sixteen non-English documentation languages.
- [ ] After approval, add localized navigation, notices, headings, manifests,
  search and `llms` entries, then coordinate the stable Privacy Notice URL with
  `clc-app`.

## Policy translation rollout

The four policy pages form a separate, sequential translation release. A
translation review draft may be prepared against the recorded English source
hashes, but no translated policy is released until the English drafts have been
approved, assigned actual publication and effective dates, and frozen as the
source text. After that gate, the four pages move together for one language at
a time:

- Policy hub: `/governance/policies`
- CLC App Privacy Notice: `/governance/privacy`
- Data Protection Policy: `/governance/data-protection`
- Child Safeguarding Policy: `/governance/child-safeguarding`

The existing 36 translated documentation pages remain released while this work
proceeds. A locale expands from 36 to 40 documentation pages only when all four
policy translations for that locale have passed review and validation. Until
then, language switching from an English policy page continues to use the
English route.

The accelerated workflow keeps `docs/i18n/policy-locales.json` as the single
registry for policy source hashes, review-build locales, localized policy
metadata, and navigation labels. The policy generator translates only the four
policy pages into a temporary workspace, produces a low-confidence report, and
reuses machine-local forward and back-translation caches. Promotion is a
deliberate post-review step; the full site is built only once per language. See
the [localization guide](docs/i18n/README.md#accelerated-policy-workflow) for
the commands.

### Policy rollout order and status

| Order | Language | Four-page draft | Semantic and clarity review | User review | Docs release | App Privacy link |
| ---: | --- | --- | --- | --- | --- | --- |
| — | English (`en`) | Prepared | Operational and legal verification pending | Pending | Review deployment pending | English URL |
| 1 | French (`fr`) | Complete review draft | Complete | Ready | Queued | English fallback |
| 2 | Spanish (`es`) | Queued | Queued | Queued | Queued | English fallback |
| 3 | Portuguese (`pt`) | Queued | Queued | Queued | Queued | English fallback |
| 4 | Italian (`it`) | Queued | Queued | Queued | Queued | English fallback |
| 5 | Kiswahili (`sw`) | Queued | Queued | Queued | Queued | English fallback |
| 6 | German (`de`) | Queued | Queued | Queued | Queued | English fallback |
| 7 | Ukrainian (`uk`) | Queued | Queued | Queued | Queued | English fallback |
| 8 | Serbian (`sr`) | Queued | Queued | Queued | Queued | English fallback |
| 9 | Arabic (`ar`) | Queued | Queued | Queued | Queued | English fallback |
| 10 | Dzongkha (`dz`) | Queued | Queued | Queued | Queued | English fallback |
| 11 | Dutch (`nl`) | Queued | Queued | Queued | Queued | English fallback |
| 12 | Hindi (`hi`) | Queued | Queued | Queued | Queued | English fallback |
| 13 | Simplified Chinese (`zh`) | Queued | Queued | Queued | Queued | English fallback |
| 14 | Traditional Chinese (`zh-Hant`) | Queued | Queued | Queued | Queued | English fallback |
| 15 | Filipino (`fil`) | Queued | Queued | Queued | Queued | English fallback |
| 16 | Flemish (`nl-BE`) | Queued | Queued | Queued | Queued | English fallback |

Only one row may be marked **In progress** at a time. Do not begin the next
language until the current language has a complete preview, passes validation,
and is accepted for release. Use one commit or pull request per language.

### Per-language policy workflow

For each language:

1. Recheck the current `clc-app` locale catalog and record its exact commit.
   Reuse the established App and docs glossary without weakening distinctions
   among profile data, public resources, exact recipient lookup, public
   blockchain data, Issuers, and Pool Stewards.
2. Confirm that the four English source hashes still match the frozen approved
   version. If English changed, stop and assess every policy language already
   released before translating further.
3. Translate all four pages together. Preserve organization and product names,
   email addresses, URLs, statutory citations, version numbers, publication and
   effective dates, route paths, technical identifiers, and public/private field
   boundaries.
4. Apply the same three passes used elsewhere: semantic translation, natural
   plain-language revision, and independent back-translation with technical and
   legal verification. The English source controls unless applicable law
   requires otherwise; every localized page must carry the convenience-
   translation notice and a prominent English-source link.
5. Add the four localized routes, navigation labels, heading mappings, source
   hashes, translation-manifest entries, locale-isolated search records,
   canonical and reciprocal `hreflang` metadata, and localized `llms` entries.
6. Run the complete validation gate and inspect all four pages on desktop and
   mobile in both themes. Review tables, links, long headings, email addresses,
   statutory citations, and RTL or complex-script rendering where applicable.
7. Provide direct preview URLs for the Policy hub, Privacy Notice, Data
   Protection Policy, and Child Safeguarding Policy. Record requested changes
   and user acceptance before release.
8. Deploy and verify the four pages. Only then may `clc-app` use
   `/{locale}/governance/privacy`; until then it must use
   `/governance/privacy`. Record the app-link result before starting the next
   language.

### Policy language checklists

#### 1. French (`fr`)

- [x] Synchronize policy vocabulary with the current French app catalog at
  `origin/develop` commit `27321a637fded39c8ac0fb1a9e4783a852a5113b`.
- [x] Translate all four pages as a complete French review draft.
- [x] Complete the final source comparison, clarity pass, and review of all
  privacy-field and safeguarding distinctions.
- [x] Add French policy navigation, routes, metadata, search, manifests, and notices.
- [x] Validate the French routes, search isolation, metadata, desktop layout,
  and mobile layout in the production build.
- [ ] Record user acceptance.
- [ ] Release the French policy suite and verify `/fr/governance/privacy` from the app.

#### 2. Spanish (`es`)

- [ ] Synchronize policy vocabulary with the current Spanish app catalog.
- [ ] Translate and complete the three-pass review of all four pages.
- [ ] Add Spanish policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Spanish policy suite and verify `/es/governance/privacy` from the app.

#### 3. Portuguese (`pt`)

- [ ] Synchronize policy vocabulary with the current Portuguese app catalog.
- [ ] Translate and complete the three-pass review of all four pages.
- [ ] Add Portuguese policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Portuguese policy suite and verify `/pt/governance/privacy` from the app.

#### 4. Italian (`it`)

- [ ] Synchronize policy vocabulary with the current Italian app catalog.
- [ ] Translate and complete the three-pass review of all four pages.
- [ ] Add Italian policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Italian policy suite and verify `/it/governance/privacy` from the app.

#### 5. Kiswahili (`sw`)

- [ ] Synchronize policy vocabulary with the current Kiswahili app catalog.
- [ ] Translate and review natural privacy, safeguarding, and complaints terminology.
- [ ] Add Kiswahili policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Kiswahili policy suite and verify `/sw/governance/privacy` from the app.

#### 6. German (`de`)

- [ ] Synchronize policy vocabulary with the current German app catalog.
- [ ] Translate and review legal compounds, sentence length, and plain-language clarity.
- [ ] Add German policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate long headings and tables, preview, and record user acceptance.
- [ ] Release the German policy suite and verify `/de/governance/privacy` from the app.

#### 7. Ukrainian (`uk`)

- [ ] Synchronize policy vocabulary with the current Ukrainian app catalog.
- [ ] Translate and review legal terminology and Cyrillic technical-token isolation.
- [ ] Add Ukrainian policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Ukrainian policy suite and verify `/uk/governance/privacy` from the app.

#### 8. Serbian (`sr`)

- [ ] Synchronize policy vocabulary with the current Serbian app catalog.
- [ ] Translate in consistent Serbian Cyrillic and review legal terminology.
- [ ] Add Serbian policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Serbian policy suite and verify `/sr/governance/privacy` from the app.

#### 9. Arabic (`ar`)

- [ ] Synchronize policy vocabulary with the current Arabic app catalog.
- [ ] Translate and review legal meaning, RTL flow, and LTR isolation for URLs,
  emails, identifiers, citations, and blockchain addresses.
- [ ] Add Arabic policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate RTL tables and controls, preview, and record user acceptance.
- [ ] Release the Arabic policy suite and verify `/ar/governance/privacy` from the app.

#### 10. Dzongkha (`dz`)

- [ ] Synchronize policy vocabulary with the current Dzongkha app catalog.
- [ ] Translate and review privacy and safeguarding concepts, Tibetan-script
  glyphs, line breaking, and natural explanatory language.
- [ ] Add Dzongkha policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate fonts and long tables, preview, and record user acceptance.
- [ ] Release the Dzongkha policy suite and verify `/dz/governance/privacy` from the app.

#### 11. Dutch (`nl`)

- [ ] Synchronize policy vocabulary with the current Dutch app catalog.
- [ ] Translate and complete the three-pass review of all four pages.
- [ ] Add Dutch policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Dutch policy suite and verify `/nl/governance/privacy` from the app.

#### 12. Hindi (`hi`)

- [ ] Synchronize policy vocabulary with the current Hindi app catalog.
- [ ] Translate and review natural legal language, Devanagari rendering, and
  isolation of URLs, emails, identifiers, and citations.
- [ ] Add Hindi policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate fonts and tables, preview, and record user acceptance.
- [ ] Release the Hindi policy suite and verify `/hi/governance/privacy` from the app.

#### 13. Simplified Chinese (`zh`)

- [ ] Synchronize policy vocabulary with the current Simplified Chinese app catalog.
- [ ] Translate and review legal terminology, punctuation, and field-level distinctions.
- [ ] Add Simplified Chinese policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate CJK wrapping and search, preview, and record user acceptance.
- [ ] Release the suite and verify `/zh/governance/privacy` from the app.

#### 14. Traditional Chinese (`zh-Hant`)

- [ ] Synchronize policy vocabulary with the current Traditional Chinese app catalog.
- [ ] Translate independently from English and review Traditional Chinese legal usage.
- [ ] Add Traditional Chinese policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate CJK wrapping and search, preview, and record user acceptance.
- [ ] Release the suite and verify `/zh-Hant/governance/privacy` from the app.

#### 15. Filipino (`fil`)

- [ ] Synchronize policy vocabulary with the current Filipino app catalog.
- [ ] Translate and review natural privacy, safeguarding, and complaints language.
- [ ] Add Filipino policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate, preview, and record user acceptance.
- [ ] Release the Filipino policy suite and verify `/fil/governance/privacy` from the app.

#### 16. Flemish (`nl-BE`)

- [ ] Synchronize policy vocabulary with the current Flemish app catalog.
- [ ] Translate from English, using Dutch structure only where appropriate, and
  review every unit for Belgian usage and legal clarity.
- [ ] Add Flemish policy navigation, routes, metadata, search, manifests, and notices.
- [ ] Validate Dutch/Flemish separation, preview, and record user acceptance.
- [ ] Release the Flemish policy suite and verify `/nl-BE/governance/privacy` from the app.

## Rollout status

| Order | Language | Splash | Web translation | User review | Docs release | App-link verification | Localized PDF |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| — | English (`en`) | Complete | Source | Complete | Complete | Current unprefixed links | Current source PDF |
| — | French (`fr`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| — | Spanish (`es`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| — | Portuguese (`pt`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| 1 | Italian (`it`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| 2 | Kiswahili (`sw`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| 3 | German (`de`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| 4 | Ukrainian (`uk`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| 5 | Serbian (`sr`) | Complete | Complete | Complete | Complete | Pending companion app work | Published and linked |
| 6 | Arabic (`ar`) | Complete | Complete | Batch review pending | Complete | Pending companion app work | Published and linked |
| 7 | Dzongkha (`dz`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Published and linked |
| 8 | Dutch (`nl`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Published and linked |
| 9 | Hindi (`hi`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Published and linked |
| 10 | Simplified Chinese (`zh`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Published and linked |
| 11 | Traditional Chinese (`zh-Hant`) | Complete | Complete first draft | Batch review pending | Complete | Pending companion app work | Published and linked |
| 12 | Filipino (`fil`) | Complete | Complete first draft | Review pending | Complete | Pending companion app work | Published and linked |
| 13 | Flemish (`nl-BE`) | Complete | Complete first draft | Review pending | Review build ready | Pending docs deployment | Published and linked in review build |

Only one queued language is normally active at a time. Each web draft must pass
its validation gate before work starts on the next language. Arabic, Dzongkha,
Dutch, Hindi, Simplified Chinese, and Traditional Chinese were completed as an
uninterrupted batch at the user's request. Their routes are released, while the
recorded user-review and companion app-link checkpoints remain pending.
Filipino was completed from the feature catalog and has since been merged into
app `origin/develop`; its docs review and companion app-link verification also
remain open. Flemish was completed after its final catalog was merged. Its
review, docs deployment, and companion app-link verification remain open.

## Translation and app baselines

- The documentation glossary and translation manifests use `clc-app`
  `origin/develop` commit `facf5e034dc668c2e5ded90b9dd5995690f0fb63`
  as the latest committed synchronization baseline. This commit merged the
  Flemish feature through app pull request 245.
- The committed `origin/develop` registry contains seventeen locales: English,
  Arabic, German, Dzongkha, Spanish, Filipino, French, Hindi, Italian, Dutch,
  Flemish, Portuguese, Serbian, Kiswahili, Ukrainian, Simplified Chinese, and
  Traditional Chinese. The docs registry represents all seventeen with
  identical locale codes and metadata.
- Flemish (`nl-BE`) uses native label `Vlaams`, LTR direction, and `nl-BE`
  formatting. The committed catalog has 1,330 populated `msgstr` entries, only
  the normal empty PO header entry, and no fuzzy entries.
- Chinese browser matching mirrors the app: generic `zh`, `zh-Hans`, and
  regions CN, SG, and MY resolve to Simplified Chinese; `zh-Hant` and regions
  TW, HK, and MO resolve to Traditional Chinese; an explicit script takes
  precedence over a conflicting region.
- Filipino (`fil`) is now committed on app `origin/develop`. It retains native
  label `Filipino`, LTR direction, `fil-PH` formatting, and `tl` as a
  browser-language alias.
- The Flemish matcher maps `nl-BE`, including script-qualified and
  underscore forms, to `nl-BE`. Generic `nl` and other Dutch regions continue
  to map to `nl`; the separate West Flemish code `vls` is not treated as
  Belgian Dutch. The docs browser matcher mirrors this behavior.
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
| 25 October 2026 | `27321a637fded39c8ac0fb1a9e4783a852a5113b` on `origin/develop` | French policy vocabulary reviewed. The current app catalog uses `Bon d’échange`, `Bassin`, `Demande`, `Catalogue`, `Portefeuille`, `Marché`, `Émetteur`, `Utiliser`, `Envoyer`, `Échanger`, `Offres`, `Publications`, and `Avis`; the French policy draft preserves those terms and the established `Gestionnaire de Bassin`. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Locale registry unchanged; current core catalog terms remain aligned with the docs glossary. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Italian reviewed. The docs use the natural action label “Invia”; the app catalog currently uses the formal label “Invii”. Other core terms remain aligned. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Kiswahili reviewed. The docs consistently use `Kikundi`, matching the established splash glossary and the app's primary labels; older app entries using `Puli` or `Bwawa` are treated as app catalog drift. Core actions remain `Tuma`, `Komboa`, and `Badilisha`. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | German reviewed. The docs preserve the app terms `Gutschein`, `Fonds`, `Herausgeber`, `Markt`, `Einlösen`, `Senden`, `Tauschen`, `Geldbörse`, and `Kreditlimit`; `Commitment-Fonds` and `Fonds-Verantwortliche` follow the established splash glossary. |
| 10 October 2026 | `69d8196ba431ccad9b7e88b19d669d417f7c196b` | Ukrainian reviewed. The docs preserve the app terms `Ваучер`, `Пул`, `Емітент`, `Ринок`, `Погасити`, `Надіслати`, `Обміняти`, `Гаманець`, and `Кредитний ліміт`; `Пул зобов’язань` and `Куратор Пулу` follow the established splash glossary. |
| 10 October 2026 | `e0aab634fbd6cb9c7731cef6a49244cdbd23185c` | Serbian reviewed. The docs use the established Serbian splash terms `Ваучер`, `Тржница`, `Тржница обавеза`, `Управник Тржнице`, `Издавалац`, `Тржиште`, `Искористи`, `Пошаљи`, `Размена`, `Новчаник`, and `Кредитни лимит`. The app catalog mixes `Тржница` with `пул`, Ekavian with Ijekavian forms, and Cyrillic with the Latin label `Povuci vaučer`; the docs consistently use Serbian Cyrillic and the splash glossary. |
| 10 October 2026 | `e0aab634fbd6cb9c7731cef6a49244cdbd23185c` | Arabic reviewed. Locale metadata remains `ar`, RTL, with `ar-u-nu-arab` number formatting. The docs preserve the app terms `قسيمة`, `الصندوق`, `السوق`, `الجهة المصدرة`, `استرداد`, `سحب القسيمة من التداول`, `إرسال`, `مبادلة`, `المحفظة`, and `حد الائتمان`; `صندوق الالتزامات` and `مشرف الصندوق` follow the established splash glossary. |
| 10 October 2026 | `0ce5b4e808bf0d28da5c6925fa8dbf2459c200cd` | Dutch (`nl`) is present in the committed app locale registry and catalog. The docs use `Fonds`, `Fondsen`, `Waardebon`, `Waardebonnen`, `Markt`, `Uitgever`, `Inwisselen`, `Waardebon buiten gebruik stellen`, `Verzenden`, `Ruilen`, `Portemonnee`, `Kredietlimiet`, and `Aanbod`; `Commitmentfonds` and `Fondsbeheerder` cover concepts without exact app labels. |
| 10 October 2026 | `0ce5b4e808bf0d28da5c6925fa8dbf2459c200cd` | Hindi (`hi`) is now committed on `origin/develop`. The app terms are `पूल`, `वाउचर`, `बाज़ार`, `जारीकर्ता`, `भुनाएँ`, `रिटायर वाउचर`, `भेजें`, `अदला-बदली`, `वॉलेट`, `क्रेडिट सीमा`, and `ऑफ़र`; the docs glossary adds `प्रतिबद्धता पूल` and `पूल प्रबंधक` for concepts without exact app labels. |
| 10 October 2026 | `0808066dae3c0063729b69085df85ba5ce12a90d` | Simplified Chinese (`zh`) is committed on `origin/develop`. The app catalog uses `代金券` (Voucher), `资金池` (Pool), `市场` (Market), `发行方` (Issuer), `兑付` (Redeem), `停用代金券` (Retire voucher), `发送` (Send), `兑换` (Swap), `钱包` (Wallet), `信用额度` (Credit limit), and `商品或服务项目` (Offerings). The docs use `承诺资金池` and `资金池管理者` for the two concepts without exact app labels. |
| 10 October 2026 | `0808066dae3c0063729b69085df85ba5ce12a90d` | Traditional Chinese (`zh-Hant`) is committed on `origin/develop`. The app catalog uses `代金券`, `資金池`, `市場`, `發行方`, `兌付`, `停用代金券`, `傳送`, `兌換`, `錢包`, `信用額度`, and `商品或服務項目`; the docs use `承諾資金池` and `資金池管理者`. |
| 10 October 2026 | `b4c4a496dc45232470d3874a3317912e86b466a8` on `origin/feat/filipino-language` | Filipino (`fil`) is committed with native label `Filipino`, LTR direction, `fil-PH` formatting, and `tl` browser matching. The app catalog uses `Voucher`, `Mga voucher`, `Pool`, `Mga pool`, `Pamilihan`, `Tagapag-isyu`, `Tubusin`, `Mag-retire ng voucher`, `Ipadala`, `Palitan`, `Wallet`, and `Mga alok`; `Credit limit` remains untranslated in the app. The docs add `Pool ng Pangako` and `Tagapangasiwa ng Pool` for concepts without exact app labels. |
| 10 October 2026 | `984f17713ed97ee89bacae6103efeb9abd518f02` on `origin/develop` | Filipino was merged through app pull request 243. The committed app registry now has sixteen locales and every committed locale is represented in the docs. |
| 11 October 2026 | `facf5e034dc668c2e5ded90b9dd5995690f0fb63` on `origin/develop` | Flemish (`nl-BE`) was merged through app pull request 245 with native label `Vlaams`, LTR direction, and `nl-BE` formatting. The committed catalog uses `Waardebon`, `Fonds`, `Markt`, `Marktplaats`, `Uitgever`, `Inwisselen`, `Waardebon buiten gebruik stellen`, `Verzenden`, `Omwisselen`, `Portefeuille`, `Kredietlimiet`, and `Aanbod`. The docs use `Commitmentfonds` and `Fondsbeheerder` for the two concepts without exact app labels. |

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

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
- [x] Generate and publish the localized PDF.

### 10. Simplified Chinese (`zh`)

- [x] Confirm that the app's Simplified Chinese work is committed and record
      the resulting `clc-app` commit as the new synchronization baseline.
- [x] Re-audit the committed app catalog and approve docs glossary terms for
      Commitment Pool and Pool Steward while preserving `代金券`, `资金池`,
      `市场`, `发行方`, `兑付`, `停用代金券`, `发送`, `兑换`, `钱包`,
      `信用额度`, and `商品或服务项目` where their app meanings apply.
- [x] Add `zh` to the docs locale registry with native label `中文（简体）`, LTR
      direction, `zh-CN` formatting, and the reusable language selector.
- [x] Mirror the app's browser matcher for generic and Simplified Chinese tags,
      including `zh-Hans`, CN, SG, and MY, without mapping explicit Traditional
      Chinese tags to the Simplified route.
- [x] Translate the splash page and all 36 documentation pages as a first draft.
- [x] Add and review Simplified Chinese navigation, UI/search text, metadata,
      Terms convenience notice, and White Paper source notice.
- [x] Complete the priority-page clarity pass and review Simplified Chinese
      terminology, punctuation, line breaking,
      CJK font fallbacks, search tokenization, number formatting, and LTR
      isolation for code, formulas, addresses, symbols, and URLs.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass automated validation and rendered desktop/mobile inspection in both
      color themes, including locale-isolated Chinese search.
- [ ] Provide the review URLs and record user acceptance.
- [x] Add Simplified Chinese to the released documentation set; the commit
      remains user-managed.
- [ ] Deploy and verify `/zh/` and all `/zh/...` documentation routes.
- [ ] Complete the coordinated `clc-app` About and Terms link verification.
- [x] Generate, inspect, publish, and link the Simplified Chinese White Paper
      v0.8 PDF with embedded CJK fonts and `zh-CN` PDF language metadata.

### 11. Traditional Chinese (`zh-Hant`)

- [x] Record committed `clc-app` baseline
      `0808066dae3c0063729b69085df85ba5ce12a90d` and audit the app catalog.
- [x] Add `zh-Hant` with native label `中文（繁體）`, LTR direction,
      `zh-Hant` formatting, and the reusable language selector.
- [x] Match `zh-Hant`, `zh-TW`, `zh-HK`, and `zh-MO`, while giving an explicit
      Chinese script subtag precedence over region.
- [x] Convert and review the splash page and all 36 documentation pages as a
      first draft, preserving the app terms and locale-aware internal links.
- [x] Add Traditional Chinese navigation, UI/search text, metadata, Terms
      convenience notice, and White Paper source notice.
- [x] Complete the priority-page clarity pass and review Traditional Chinese
      terminology, punctuation, CJK font fallback, search segmentation, number
      formatting, and technical-token isolation.
- [x] Refresh the translation manifest and heading mappings.
- [x] Pass automated validation and rendered desktop/mobile inspection in both
      color themes, including locale-isolated Chinese search.
- [ ] Provide the review URLs and record user acceptance.
- [x] Add Traditional Chinese to the released documentation set; the commit
      remains user-managed.
- [ ] Deploy and verify `/zh-Hant/` and all `/zh-Hant/...` routes.
- [ ] Complete the coordinated `clc-app` About and Terms link verification.
- [x] Generate, inspect, publish, and link the Traditional Chinese White Paper
      v0.8 PDF with embedded Traditional CJK fonts and `zh-Hant` metadata.

### 12. Filipino (`fil`)

- [x] Confirm the app's Filipino registry and catalog are committed on
      `origin/feat/filipino-language` at `b4c4a496dc45232470d3874a3317912e86b466a8`.
- [x] Confirm the Filipino feature branch is merged into app `origin/develop`
      at `984f17713ed97ee89bacae6103efeb9abd518f02`.
- [x] Record the exact feature commit and audit the populated app catalog terms for
      Voucher, Pool, Market, Issuer, Redeem, Retire voucher, Send, Swap, Wallet,
      Credit limit, Offering, Commitment Pool, and Pool Steward.
- [x] Add `fil` with native label `Filipino`, LTR direction, `fil-PH`
      formatting, and `tl` browser-language alias matching.
- [x] Translate the splash page and all 36 documentation pages as a complete
      first draft, with a manual clarity pass on the key entry, lifecycle,
      Protocol, governance, Terms, history, and White Paper pages.
- [x] Compare the machine-local MADLAD-400 output in a temporary tree. Reject
      replacements that corrupt protected names or technical terms, and retain
      the clearer reviewed draft with manual corrections to the affected legal
      and White Paper sections.
- [x] Add Filipino navigation, UI/search text, metadata, notices, manifest,
      heading mappings, isolated search, and locale-aware internal links.
- [x] Pass the automated validation gate.
- [ ] Inspect the rendered desktop/mobile review build and provide the review
      URLs for user acceptance.
- [x] Release and deploy the Filipino docs.
- [ ] Enable and verify localized Filipino deep links from `clc-app`.
- [x] Generate, technically inspect, publish, and link the Filipino White Paper
      v0.8 PDF.

### 13. Flemish (`nl-BE`)

- [x] Detect and provisionally audit the uncommitted app locale on
      `feat/flemish-language`, based on
      `984f17713ed97ee89bacae6103efeb9abd518f02`.
- [x] Wait for the Flemish app work to be committed, record the exact commit,
      and re-audit the final registry, catalog, and tests before translating.
- [x] Confirm the committed locale metadata remains `nl-BE`, native label
      `Vlaams`, LTR direction, and `nl-BE` formatting.
- [x] Add Flemish to the docs locale registry, splash catalogs, metadata,
      language selector, route generation, search indexes, `llms` output, and
      PDF tooling.
- [x] Mirror the app matcher so `nl-BE`, `nl-Latn-BE`, and underscore forms map
      to Flemish, generic Dutch remains `nl`, and `vls` is not misclassified as
      Belgian Dutch.
- [x] Establish a Flemish glossary from the committed app catalog, including
      `Waardebon`, `Fonds`, `Markt`, `Marktplaats`, `Uitgever`, `Inwisselen`,
      `Verzenden`, `Omwisselen`, `Portefeuille`, `Kredietlimiet`, and `Aanbod`;
      decide the Flemish terms for Commitment Pool and Pool Steward explicitly.
- [x] Translate and review the splash page and all 36 documentation pages.
      Reuse Dutch structure where helpful, but review every unit for Belgian
      usage rather than treating Flemish as a formatting-only Dutch variant.
- [x] Add Flemish navigation, UI/search text, metadata, Terms convenience
      notice, White Paper source notice, heading mappings, locale manifest,
      and locale-aware internal links.
- [x] Complete the priority-page clarity pass and compare Dutch/Flemish action
      vocabulary, especially `Ruilen`/`Omwisselen` and
      `Portemonnee`/`Portefeuille`.
- [x] Pass the complete validation gate and inspect desktop/mobile rendering,
      both themes, search isolation, browser detection, and language switching.
- [ ] Provide review URLs and record user acceptance before release.
- [ ] Deploy and verify `/nl-BE/` and every localized documentation route.
- [ ] Complete the coordinated `clc-app` About and Terms link verification.
- [x] Generate, inspect, publish, and link the Flemish White Paper v0.8 PDF.

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
- Every released non-English locale can link its About entry to `/{locale}/`.
  A newly added app locale must continue to use the unprefixed English splash
  until its localized splash route has been deployed. Flemish must continue to
  use the English fallback until the Flemish docs are reviewed and deployed.
- A deep link such as Terms uses `/{locale}/governance/terms` only after that
  locale's complete documentation has been deployed.
- Before a locale's docs release, its Terms link falls back to
  `/governance/terms` in English.
- The app should use one locale-aware docs URL resolver for About, Terms, and
  future documentation links rather than adding more static URL constants.
- At the 11 October 2026 audit of app commit
  `facf5e034dc668c2e5ded90b9dd5995690f0fb63`, the app still used the static
  constants `PLATFORM_ABOUT_URL` and `PLATFORM_TERMS_URL` in
  `apps/web/src/lib/legal.ts`. Locale-aware deep links therefore remain an
  external app dependency rather than a completed docs task.
- The app's `clc.locale` preference and the docs' `clc.docs.locale` preference
  remain independent; cross-origin storage sharing is not attempted.

Expected behavior:

| App locale and docs state | About | Terms |
| --- | --- | --- |
| English | `/` | `/governance/terms` |
| French, released | `/fr/` | `/fr/governance/terms` |
| Italian, before release | `/it/` | `/governance/terms` |
| Italian, after release | `/it/` | `/it/governance/terms` |
| Simplified Chinese, after release | `/zh/` | `/zh/governance/terms` |
| Traditional Chinese, after release | `/zh-Hant/` | `/zh-Hant/governance/terms` |
| Filipino, released | `/fil/` | `/fil/governance/terms` |
| Flemish, before release | `/` | `/governance/terms` |
| Flemish, after release | `/nl-BE/` | `/nl-BE/governance/terms` |

Release order for each language:

1. Deploy and verify the documentation language.
2. Add the language to the app's known full-documentation locale set.
3. Run `vp check`, `vp test`, and the app's focused documentation-link tests.
4. Verify About and Terms from the running app in that language.
5. Mark the app-link verification complete in the rollout table and checklist.

## Localized PDF phase

All sixteen currently wired localized v0.8 TeX sources and PDFs were generated,
technically validated, published, and linked from their localized landing pages
by 11 October 2026. The build uses reproducible timestamps,
embedded fonts, locale-specific PDF language metadata, Arabic RTL layout, and
dedicated Tibetan and Devanagari fonts. Build logs contain no missing-glyph
warnings. Each PDF was checked for extracted text, formulas, links, embedded
fonts, document language metadata, line wrapping, RTL behavior where
applicable, and missing glyphs. Every localized publication continues to
identify and link English as the source text. Simplified and Traditional
Chinese use separate PDFs with Simplified and Traditional Noto CJK fonts. The
Flemish PDF is linked in the review build and remains pending public deployment
together with the Flemish web routes.

