import {
  DEFAULT_LOCALE,
  hasLocalizedDocumentation,
  isSupportedLocale,
  type SupportedLocale,
} from './locales'

export const DOCUMENTATION_PATHS = [
  '/introduction/getting-started',
  '/introduction/concepts',
  '/introduction/example',
  '/introduction/history',
  '/protocol/overview',
  '/protocol/smart-contracts',
  '/protocol/network',
  '/governance/mechanics',
  '/governance/terms',
  '/white-paper',
  '/white-paper/executive-summary',
  '/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive',
  '/white-paper/chapter-02-the-accounting-shift-from-assets-to-trust',
  '/white-paper/chapter-03-velocity-of-settlement-why-liquidity-providers-should-care',
  '/white-paper/chapter-04-reusable-forward-style-collateral',
  '/white-paper/chapter-05-from-isolated-pools-to-a-federated-network',
  '/white-paper/chapter-06-the-missing-piece-network-level-liquidity-governance',
  '/white-paper/chapter-07-clc-stewardship-and-the-clc-token',
  '/white-paper/chapter-08-technical-scope-growth',
  '/white-paper/chapter-09-economics-for-lps',
  '/white-paper/chapter-10-comprehensive-risk-framework',
  '/white-paper/chapter-11-governance-mechanics',
  '/white-paper/chapter-12-lp-term-sheet-non-binding-outline',
  '/white-paper/chapter-13-jargon-plain-language-glossary',
  '/white-paper/chapter-14-kpis-health-indicators',
  '/white-paper/chapter-15-roadmap-indicative',
  '/white-paper/chapter-16-values-evaluation-template-for-listings-liquidity-mandates',
  '/white-paper/chapter-17-legal-compliance-note',
  '/white-paper/chapter-18-conclusion',
  '/white-paper/appendix-a-math-box',
  '/white-paper/appendix-b-fee-waterfall',
  '/white-paper/appendix-c-kpi-definitions',
  '/white-paper/appendix-d-launch-parameters',
  '/white-paper/appendix-e-worked-example',
  '/white-paper/appendix-f-dataroom-checklist',
  '/white-paper/archive',
] as const

export type DocumentationPath = (typeof DOCUMENTATION_PATHS)[number]

const DOCUMENTATION_PATH_SET = new Set<string>(['/', ...DOCUMENTATION_PATHS])

export function routeLocale(pathname: string): SupportedLocale {
  const segment = pathname.split('/')[1]
  return isSupportedLocale(segment) ? segment : DEFAULT_LOCALE
}

export function englishPath(pathname: string): string {
  const segment = pathname.split('/')[1]
  if (!isSupportedLocale(segment) || segment === DEFAULT_LOCALE) return normalizePath(pathname)
  return normalizePath(pathname.slice(segment.length + 1) || '/')
}

export function isKnownDocumentationPath(pathname: string): boolean {
  return DOCUMENTATION_PATH_SET.has(englishPath(pathname))
}

export function localizedPath(pathname: string, locale: SupportedLocale): string {
  const source = englishPath(pathname)
  if (locale === DEFAULT_LOCALE) return source
  if (source === '/') return `/${locale}/`
  if (!hasLocalizedDocumentation(locale)) return source
  return `/${locale}${source}`
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}
