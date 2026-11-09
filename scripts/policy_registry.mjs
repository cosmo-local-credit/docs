import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export const root = resolve(import.meta.dirname, '..')
export const policyRegistryPath = resolve(root, 'docs/i18n/policy-locales.json')
export const policyRegistry = JSON.parse(readFileSync(policyRegistryPath, 'utf8'))
export const policyRoutes = Object.keys(policyRegistry.source.routes)
export const policyRouteSet = new Set(policyRoutes)
export const policyDocumentationLocales = Object.entries(policyRegistry.locales)
  .filter(([locale, catalog]) => locale === 'en' || catalog.status === 'release-ready')
  .map(([locale]) => locale)
export const policyTranslationLocales = policyDocumentationLocales.filter(
  (locale) => locale !== 'en',
)

export function policyLocale(locale) {
  return policyRegistry.locales[locale]
}
