# Splash-page localization guide

This directory owns the splash-page locale registry and translations. The synchronization baseline is `clc-app` develop commit `3e7bd5213560`.

## Locale registry

| Code | Native name | Formatting locale | Direction |
| --- | --- | --- | --- |
| `en` | English | `en` | LTR |
| `ar` | العربية | `ar-u-nu-arab` | RTL |
| `dz` | རྫོང་ཁ | `dz` | LTR |
| `de` | Deutsch | `de` | LTR |
| `es` | Español | `es` | LTR |
| `fr` | Français | `fr` | LTR |
| `it` | Italiano | `it` | LTR |
| `pt` | Português | `pt` | LTR |
| `sr` | Српски | `sr` | LTR |
| `uk` | Українська | `uk` | LTR |
| `sw` | Kiswahili | `sw` | LTR |

The order, codes, native names, number-formatting locales, and direction match the app snapshot. The docs are deliberately independent at runtime: they do not import from or request the sibling app repository.

`components/LocaleSelector.tsx` is the reusable presentation and keyboard-interaction component. It does not own routes, redirects, or browser storage; its caller supplies the current locale and handles changes. `LandingControls.tsx` provides the splash-specific navigation and preference behavior. This separation allows the same selector to be used later in documentation navigation with locale-specific routing rules.

The splash shell's search trigger and search prompt use `controls.search`. Search results and the documentation they open remain English until the documentation routes themselves are localized.

## Terminology

- Keep `Cosmo-Local Credit`, `CLC App`, `Sarafu Network`, organization names, media names, and partner names unchanged.
- Reuse established app terminology for Voucher, Pool, Issuer, Market, and action labels when it expresses the same meaning.
- A Voucher works much like a gift card for goods or services.
- A Commitment Pool works like a curated marketplace for exchanging selected Vouchers.
- A Pool Steward chooses supported Vouchers and publishes the Pool's rules.
- An Issuer creates a Voucher and is responsible for what it promises.
- “Marketplace” on the splash page is an analogy. The named app **Market** is a discovery catalog.

## Translation workflow

Each catalog in `messages/` must receive three passes before publication:

1. **Semantic:** translate every English unit faithfully and preserve roles, responsibilities, history, placeholders, and product names.
2. **Clarity:** use natural, plain language, complete short sentences, and avoid literal English phrasing.
3. **Verification:** compare the meaning back to English, check the glossary and placeholders, and inspect the rendered page for wrapping and direction.

URLs, anchors, asset paths, partner names, statistic quantities, and exact Pool-tag query values stay in `AboutPage.tsx`, outside the catalogs. English documentation links retain their English destinations and `hreflang="en"`.

Run these checks for every change:

```sh
npm run typecheck
npm run check:i18n
npm run build
git diff --check
```

## Adding an app language

1. Confirm the new app locale code, native name, formatting locale, direction, and product vocabulary at a recorded app commit.
2. Add the locale to `locales.ts`, the static locale bootstrap in `vocs.config.ts`, and the locale map in `scripts/finalize_localized_html.mjs`.
3. Copy `messages/en.json`, translate it through all three passes, and register it in `messages.ts`.
4. Add a static `docs/pages/<code>/index.tsx` route shell importing only that catalog.
5. Add the code to `scripts/check_locales.mjs` and run the full check sequence above.
6. Verify localized metadata, canonical and reciprocal `hreflang` links, browser matching, manual switching, query/hash preservation, number formatting, accessibility, and mobile/desktop layout.

Only the splash page is localized in this phase. Detailed documentation and search remain English until locale-specific documentation, sidebars, and search indexes are introduced.
