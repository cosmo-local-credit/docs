import { createElement, Fragment } from 'react'
import { defineConfig } from 'vocs'

import {
  DEFAULT_LOCALE,
  getSplashPath,
  isSupportedLocale,
  LOCALE_BY_CODE,
  LOCALE_OPTIONS,
  type SupportedLocale,
} from './docs/i18n/locales'

const siteUrl = 'https://docs.cosmolocal.credit'

function splashLocale(path: string): SupportedLocale | null {
  if (path === '/' || path === '') return DEFAULT_LOCALE
  const match = path.match(/^\/([^/]+)\/?$/)
  return match && isSupportedLocale(match[1]) ? match[1] : null
}

const localeBootstrap = `(() => {
  const supported = ${JSON.stringify(LOCALE_OPTIONS.map((option) => option.code))};
  const directions = ${JSON.stringify(
    Object.fromEntries(LOCALE_OPTIONS.map((option) => [option.code, option.direction])),
  )};
  const rootMatch = location.pathname.match(/^\\/([^/]+)\\/?$/);
  const routeLocale = rootMatch && supported.includes(rootMatch[1]) ? rootMatch[1] : null;
  const setDocumentLocale = (locale) => {
    document.documentElement.lang = locale;
    document.documentElement.dir = directions[locale] || 'ltr';
  };
  const store = (locale) => {
    setDocumentLocale(locale);
    try { localStorage.setItem('clc.docs.locale', locale); } catch {}
  };
  if (routeLocale) {
    store(routeLocale);
    return;
  }
  if (location.pathname !== '/') {
    setDocumentLocale('en');
    return;
  }
  let preferred = null;
  try {
    const stored = localStorage.getItem('clc.docs.locale');
    if (supported.includes(stored)) preferred = stored;
  } catch {}
  if (!preferred) {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const tag of browserLanguages) {
      const primary = String(tag || '').trim().split(/[-_]/)[0].toLowerCase();
      if (supported.includes(primary)) { preferred = primary; break; }
    }
  }
  preferred ||= 'en';
  store(preferred);
  if (preferred !== 'en') location.replace('/' + preferred + '/' + location.search + location.hash);
})();`

export default defineConfig({
  baseUrl: siteUrl,
  title: 'Cosmo-Local Credit',
  description:
    'Documentation for the Cosmo-Local Credit progressive web app and protocol for redeemable commitments and curated Pools.',
  iconUrl: '/icons/favicon.ico',
  head: ({ path }) => {
    const locale = splashLocale(path)
    const localeHead = locale
      ? [
          createElement('link', {
            key: 'canonical',
            rel: 'canonical',
            href: `${siteUrl}${getSplashPath(locale)}`,
          }),
          ...LOCALE_OPTIONS.map((option) =>
            createElement('link', {
              key: `alternate-${option.code}`,
              rel: 'alternate',
              hrefLang: option.code,
              href: `${siteUrl}${getSplashPath(option.code)}`,
            }),
          ),
          createElement('link', {
            key: 'alternate-default',
            rel: 'alternate',
            hrefLang: 'x-default',
            href: `${siteUrl}/`,
          }),
          createElement('meta', {
            key: 'og-locale',
            property: 'og:locale',
            content: LOCALE_BY_CODE[locale].code,
          }),
        ]
      : []

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
        rel: 'manifest',
        href: '/icons/site.webmanifest',
      }),
      ...localeHead,
      createElement('script', {
        key: 'locale-bootstrap',
        dangerouslySetInnerHTML: { __html: localeBootstrap },
      }),
    )
  },
  theme: {
    accentColor: '#10b981',
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/cosmo-local-credit',
    },
    {
      icon: 'x',
      link: 'https://x.com/grassEcon',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/xayVsrkHPQ',
    },
  ],
  sidebar: [
    {
      text: 'Introduction',
      items: [
        {
          text: 'Getting started',
          link: '/introduction/getting-started',
        },
        {
          text: 'Concepts and vocabulary',
          link: '/introduction/concepts',
        },
        {
          text: 'Example',
          link: '/introduction/example',
        },
        {
          text: 'History',
          link: '/introduction/history',
        },
      ],
    },
    {
      text: 'Protocol',
      items: [
        {
          text: 'Overview',
          link: '/protocol/overview',
        },
        {
          text: 'Smart contracts',
          link: '/protocol/smart-contracts',
        },
        {
          text: 'Network architecture',
          link: '/protocol/network',
        },
      ],
    },
    {
      text: 'Governance',
      items: [
        {
          text: 'Governance mechanics',
          link: '/governance/mechanics',
        },
        {
          text: 'Terms of Service',
          link: '/governance/terms',
        },
      ],
    },
    {
      text: 'White Paper',
      link: '/white-paper',
      items: [
        {
          text: 'Executive summary',
          link: '/white-paper/executive-summary',
        },
        {
          text: '1. Commitment Pooling Protocol (CPP)',
          link: '/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive',
        },
        {
          text: '2. The accounting shift',
          link: '/white-paper/chapter-02-the-accounting-shift-from-assets-to-trust',
        },
        {
          text: '3. Fulfillment, discharge & exchange',
          link: '/white-paper/chapter-03-velocity-of-settlement-why-liquidity-providers-should-care',
        },
        {
          text: '4. Reusable forward-style collateral',
          link: '/white-paper/chapter-04-reusable-forward-style-collateral',
        },
        {
          text: '5. From isolated Pools to a federated network',
          link: '/white-paper/chapter-05-from-isolated-pools-to-a-federated-network',
        },
        {
          text: '6. Proposed network liquidity & governance',
          link: '/white-paper/chapter-06-the-missing-piece-network-level-liquidity-governance',
        },
        {
          text: '7. Proposed governance assets',
          link: '/white-paper/chapter-07-clc-stewardship-and-the-clc-token',
        },
        {
          text: '8. Technical scope & growth',
          link: '/white-paper/chapter-08-technical-scope-growth',
        },
        {
          text: '9. Proposed liquidity-program economics',
          link: '/white-paper/chapter-09-economics-for-lps',
        },
        {
          text: '10. Comprehensive risk framework',
          link: '/white-paper/chapter-10-comprehensive-risk-framework',
        },
        {
          text: '11. Governance mechanics',
          link: '/white-paper/chapter-11-governance-mechanics',
        },
        {
          text: '12. Proposed liquidity-program term sheet',
          link: '/white-paper/chapter-12-lp-term-sheet-non-binding-outline',
        },
        {
          text: '13. Glossary',
          link: '/white-paper/chapter-13-jargon-plain-language-glossary',
        },
        {
          text: '14. Proposed KPI specification',
          link: '/white-paper/chapter-14-kpis-health-indicators',
        },
        {
          text: '15. Roadmap',
          link: '/white-paper/chapter-15-roadmap-indicative',
        },
        {
          text: '16. Values & evaluation template',
          link: '/white-paper/chapter-16-values-evaluation-template-for-listings-liquidity-mandates',
        },
        {
          text: '17. Legal & compliance note',
          link: '/white-paper/chapter-17-legal-compliance-note',
        },
        {
          text: '18. Conclusion',
          link: '/white-paper/chapter-18-conclusion',
        },
        {
          text: 'Appendix A. Math box',
          link: '/white-paper/appendix-a-math-box',
        },
        {
          text: 'Appendix B. Fee waterfall',
          link: '/white-paper/appendix-b-fee-waterfall',
        },
        {
          text: 'Appendix C. KPI definitions',
          link: '/white-paper/appendix-c-kpi-definitions',
        },
        {
          text: 'Appendix D. Launch parameters',
          link: '/white-paper/appendix-d-launch-parameters',
        },
        {
          text: 'Appendix E. Worked example',
          link: '/white-paper/appendix-e-worked-example',
        },
        {
          text: 'Appendix F. Dataroom checklist',
          link: '/white-paper/appendix-f-dataroom-checklist',
        },
      ],
    },
  ],
})
