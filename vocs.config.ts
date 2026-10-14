import { createElement, Fragment } from 'react'
import { defineConfig } from 'vocs'

import {
  DOCUMENTATION_LOCALES,
  hasLocalizedDocumentation,
  LOCALE_BY_CODE,
  LOCALE_OPTIONS,
} from './docs/i18n/locales'
import { splashMessages } from './docs/i18n/messages'
import { localizedSidebars } from './docs/i18n/navigation'
import {
  DOCUMENTATION_PATHS,
  englishPath,
  isKnownDocumentationPath,
  localizedPath,
  routeLocale,
} from './docs/i18n/routes'
import { vocsLocaleSearch } from './scripts/vocsLocaleSearch'

const siteUrl = 'https://docs.cosmolocal.credit'
const localeCodes = LOCALE_OPTIONS.map(({ code }) => code)
const documentationLocaleCodes = [...DOCUMENTATION_LOCALES]
const localeDirections = Object.fromEntries(
  LOCALE_OPTIONS.map(({ code, direction }) => [code, direction]),
)
const knownPaths = ['/', ...DOCUMENTATION_PATHS]
const themeToken = (name: string) => ({
  dark: `var(--clc-${name})`,
  light: `var(--clc-${name})`,
})

const localeBootstrap = `(() => {
  const supported = ${JSON.stringify(localeCodes)};
  const documentationLocales = ${JSON.stringify(documentationLocaleCodes)};
  const directions = ${JSON.stringify(localeDirections)};
  const knownPaths = new Set(${JSON.stringify(knownPaths)});
  const parts = location.pathname.split('/');
  const routeLocale = supported.includes(parts[1]) && parts[1] !== 'en' ? parts[1] : 'en';
  const sourcePath = routeLocale === 'en' ? location.pathname : '/' + parts.slice(2).join('/');
  const normalizedPath = sourcePath === '/' ? '/' : sourcePath.replace(/\\/+$/, '');
  const setDocumentLocale = (locale) => {
    document.documentElement.lang = locale;
    document.documentElement.dir = directions[locale] || 'ltr';
  };
  setDocumentLocale(routeLocale);
  if (routeLocale !== 'en') {
    if (normalizedPath !== '/' && !documentationLocales.includes(routeLocale)) {
      location.replace(normalizedPath + location.search + location.hash);
    }
    return;
  }
  if (!knownPaths.has(normalizedPath)) return;
  try {
    if (sessionStorage.getItem('clc.docs.englishSource') === normalizedPath) return;
  } catch {}
  let preferred = null;
  try {
    const stored = localStorage.getItem('clc.docs.locale');
    if (supported.includes(stored)) preferred = stored;
  } catch {}
  if (!preferred) {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    const simplifiedChineseRegions = new Set(['cn', 'sg', 'my']);
    const traditionalChineseRegions = new Set(['tw', 'hk', 'mo']);
    for (const tag of browserLanguages) {
      const parts = String(tag || '')
        .trim()
        .replace(/_/g, '-')
        .toLowerCase()
        .split('-')
        .filter(Boolean);
      const primary = parts[0];
      if (primary === 'zh') {
        if (parts.length === 1) { preferred = 'zh'; break; }
        const script = parts.slice(1).find((part) => part === 'hans' || part === 'hant');
        if (script === 'hans') { preferred = 'zh'; break; }
        if (script === 'hant') { preferred = 'zh-Hant'; break; }
        if (parts.some((part) => traditionalChineseRegions.has(part))) {
          preferred = 'zh-Hant';
          break;
        }
        if (parts.some((part) => simplifiedChineseRegions.has(part))) {
          preferred = 'zh';
          break;
        }
        continue;
      }
      if (primary === 'nl') {
        preferred = parts.slice(1, 3).includes('be') ? 'nl-BE' : 'nl';
        break;
      }
      if (primary === 'tl') { preferred = 'fil'; break; }
      if (supported.includes(primary)) { preferred = primary; break; }
    }
  }
  preferred ||= 'en';
  if (preferred === 'en') return;
  if (normalizedPath !== '/' && !documentationLocales.includes(preferred)) return;
  const destination = '/' + preferred + (normalizedPath === '/' ? '/' : normalizedPath);
  location.replace(destination + location.search + location.hash);
})();`

export default defineConfig({
  baseUrl: siteUrl,
  title: 'Cosmo-Local Credit',
  description:
    'Documentation for the Cosmo-Local Credit progressive web app and protocol for redeemable commitments and curated Pools.',
  iconUrl: '/icons/favicon.svg',
  head: ({ path }) => {
    const locale = routeLocale(path)
    const sourcePath = englishPath(path)
    const isPublicRoute = isKnownDocumentationPath(path)
    const metadataLocale = sourcePath === '/' || hasLocalizedDocumentation(locale) ? locale : 'en'
    const alternateLocales = sourcePath === '/' ? localeCodes : documentationLocaleCodes
    const metadata = splashMessages[metadataLocale].metadata

    return createElement(
      Fragment,
      null,
      createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      }),
      createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/icons/favicon-96x96.png',
      }),
      createElement('link', {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icons/favicon.ico',
      }),
      createElement('link', { rel: 'manifest', href: '/icons/site.webmanifest' }),
      isPublicRoute
        ? createElement('link', {
            key: 'canonical',
            rel: 'canonical',
            href: `${siteUrl}${localizedPath(sourcePath, metadataLocale)}`,
          })
        : null,
      ...(isPublicRoute
        ? alternateLocales.map((code) =>
            createElement('link', {
              key: `alternate-${code}`,
              rel: 'alternate',
              hrefLang: code,
              href: `${siteUrl}${localizedPath(sourcePath, code)}`,
            }),
          )
        : []),
      isPublicRoute
        ? createElement('link', {
            key: 'alternate-default',
            rel: 'alternate',
            hrefLang: 'x-default',
            href: `${siteUrl}${sourcePath}`,
          })
        : null,
      createElement('meta', {
        key: 'localized-description',
        name: 'description',
        content: metadata.description,
      }),
      createElement('meta', {
        key: 'og-locale',
        property: 'og:locale',
        content: LOCALE_BY_CODE[locale].intlLocale,
      }),
      createElement('script', {
        key: 'locale-bootstrap',
        dangerouslySetInnerHTML: { __html: localeBootstrap },
      }),
    )
  },
  theme: {
    accentColor: {
      backgroundAccent: themeToken('accent-fill'),
      backgroundAccentHover: themeToken('accent-fill-hover'),
      backgroundAccentText: themeToken('accent-on-fill'),
      borderAccent: themeToken('focus'),
      textAccent: themeToken('accent-text'),
      textAccentHover: themeToken('accent-text-hover'),
    },
    colorScheme: 'system',
    variables: {
      color: {
        background: themeToken('surface'),
        background2: themeToken('surface-raised'),
        background3: themeToken('green-soft'),
        background4: themeToken('teal-soft'),
        background5: themeToken('gold-soft'),
        backgroundBlueTint: themeToken('blue-soft'),
        backgroundDark: themeToken('page'),
        backgroundDarkTint: themeToken('code-highlight'),
        backgroundGreenTint: themeToken('green-soft'),
        backgroundGreenTint2: themeToken('green-soft'),
        backgroundIrisTint: themeToken('teal-soft'),
        backgroundRedTint: themeToken('red-soft'),
        backgroundRedTint2: themeToken('red-soft'),
        backgroundYellowTint: themeToken('gold-soft'),
        blockquoteBorder: themeToken('border-strong'),
        blockquoteText: themeToken('text-muted'),
        border: themeToken('border'),
        border2: themeToken('border-strong'),
        borderBlue: themeToken('blue-border'),
        borderGreen: themeToken('green-border'),
        borderIris: themeToken('teal-border'),
        borderRed: themeToken('red-border'),
        borderYellow: themeToken('gold-border'),
        codeBlockBackground: themeToken('code-surface'),
        codeCharacterHighlightBackground: themeToken('code-highlight'),
        codeCharacterHighlightBorder: themeToken('border-strong'),
        codeHighlightBackground: themeToken('code-highlight'),
        codeHighlightBorder: themeToken('border-strong'),
        codeInlineBackground: themeToken('surface-raised'),
        codeInlineBorder: themeToken('border'),
        codeInlineText: themeToken('accent-text'),
        codeTitleBackground: themeToken('surface'),
        dangerBackground: themeToken('red-soft'),
        dangerBorder: themeToken('red-border'),
        dangerText: themeToken('red-text'),
        dangerTextHover: themeToken('red-text'),
        heading: themeToken('text'),
        hr: themeToken('border'),
        infoBackground: themeToken('blue-soft'),
        infoBorder: themeToken('blue-border'),
        infoText: themeToken('blue-text'),
        infoTextHover: themeToken('blue-text'),
        inverted: themeToken('text'),
        lineNumber: themeToken('text-faint'),
        link: themeToken('accent-text'),
        linkHover: themeToken('accent-text-hover'),
        noteBackground: themeToken('surface-raised'),
        noteBorder: themeToken('border'),
        noteText: themeToken('text-muted'),
        searchHighlightBackground: themeToken('accent-fill'),
        searchHighlightText: themeToken('accent-on-fill'),
        shadow: themeToken('shadow'),
        shadow2: themeToken('shadow-soft'),
        successBackground: themeToken('green-soft'),
        successBorder: themeToken('green-border'),
        successText: themeToken('accent-text'),
        successTextHover: themeToken('accent-text-hover'),
        tableBorder: themeToken('border'),
        tableHeaderBackground: themeToken('green-soft'),
        tableHeaderText: themeToken('text-muted'),
        text: themeToken('text'),
        text2: themeToken('text-muted'),
        text3: themeToken('text-subtle'),
        text4: themeToken('text-faint'),
        textBlue: themeToken('blue-text'),
        textBlueHover: themeToken('blue-text'),
        textGreen: themeToken('accent-text'),
        textGreenHover: themeToken('accent-text-hover'),
        textHover: themeToken('text'),
        textIris: themeToken('teal-text'),
        textIrisHover: themeToken('teal-text'),
        textRed: themeToken('red-text'),
        textRedHover: themeToken('red-text'),
        textYellow: themeToken('gold-text'),
        textYellowHover: themeToken('gold-text'),
        tipBackground: themeToken('teal-soft'),
        tipBorder: themeToken('teal-border'),
        tipText: themeToken('teal-text'),
        tipTextHover: themeToken('teal-text'),
        title: themeToken('text'),
        warningBackground: themeToken('gold-soft'),
        warningBorder: themeToken('gold-border'),
        warningText: themeToken('gold-text'),
        warningTextHover: themeToken('gold-text'),
      },
    },
  },
  socials: [
    { icon: 'github', link: 'https://github.com/cosmo-local-credit' },
    { icon: 'x', link: 'https://x.com/grassEcon' },
    { icon: 'discord', link: 'https://discord.gg/xayVsrkHPQ' },
  ],
  sidebar: localizedSidebars,
  vite: {
    plugins: [vocsLocaleSearch()],
  },
})
