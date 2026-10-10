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
  iconUrl: '/icons/favicon.ico',
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
    accentColor: '#10b981',
    colorScheme: 'system',
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
