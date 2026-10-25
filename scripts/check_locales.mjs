#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'
import {
  policyDocumentationLocales,
  policyRegistry,
  policyRouteSet,
  policyRoutes,
  policyTranslationLocales,
} from './policy_registry.mjs'

const root = resolve(import.meta.dirname, '..')
const pages = join(root, 'docs/pages')
const i18n = join(root, 'docs/i18n')
const publicPaper = join(root, 'docs/public/white-paper')
// Snapshot of the clc-app registry at the synchronization baseline below.
// Keeping it here makes CI independent of the sibling repository while still
// failing if the docs registry omits a known app language.
const appLocaleSnapshot = ['en', 'ar', 'zh', 'zh-Hant', 'dz', 'de', 'es', 'fil', 'fr', 'hi', 'it', 'nl', 'nl-BE', 'pt', 'sr', 'uk', 'sw']
const locales = [...appLocaleSnapshot]
const documentationLocales = [...appLocaleSnapshot]
const localizedLocales = locales.filter((locale) => locale !== 'en')
const translationDates = {
  fr: '9 October 2026',
  es: '9 October 2026',
  fil: '10 October 2026',
  pt: '10 October 2026',
  it: '10 October 2026',
  sw: '10 October 2026',
  de: '10 October 2026',
  uk: '10 October 2026',
  sr: '10 October 2026',
  ar: '10 October 2026',
  dz: '10 October 2026',
  hi: '10 October 2026',
  nl: '10 October 2026',
  'nl-BE': '11 October 2026',
  zh: '10 October 2026',
  'zh-Hant': '10 October 2026',
}
const splashLocalizedLocales = locales.slice(1)
const appBaseline = 'facf5e034dc668c2e5ded90b9dd5995690f0fb63'
const protectedNames = [
  'Cosmo-Local Credit', 'CLC App', 'Sarafu Network', 'Grassroots Economics Foundation',
  'Protocol v1.1.0', 'White Paper v0.8', 'William O. Ruddick', 'Mohamed Sohail',
  'SwapPool', 'SwapRouter', 'Limiter', 'Quoter', 'VoucherFactory', 'PoolFactory',
]
const protectedFormulas = [
  'τ_p = f_p · r_p', 'F ≈ τ · Q_swap', 'F_cash ≈ χ · F',
  'FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K',
  'limit_user_epoch = F_epoch × (stCLC_user / stCLC_total).',
]

const errors = []
const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))

if (policyDocumentationLocales[0] !== 'en') {
  errors.push('Policy locale registry must list English first')
}
if (policyRoutes.length !== 4) errors.push(`Policy registry must contain four routes, found ${policyRoutes.length}`)
for (const locale of policyDocumentationLocales) {
  if (!documentationLocales.includes(locale)) {
    errors.push(`Policy registry contains unsupported documentation locale ${locale}`)
  }
}

const localeRegistrySource = readFileSync(join(i18n, 'locales.ts'), 'utf8')
const localeOptionsSource = localeRegistrySource.slice(
  localeRegistrySource.indexOf('export const LOCALE_OPTIONS'),
  localeRegistrySource.indexOf('] as const') + 1,
)
const registryCodes = [...localeOptionsSource.matchAll(/\{\s*code:\s*'([^']+)'/g)]
  .map((match) => match[1])
if (registryCodes.join(',') !== appLocaleSnapshot.join(',')) {
  errors.push(
    `Docs locale registry (${registryCodes.join(', ')}) does not match the audited clc-app snapshot (${appLocaleSnapshot.join(', ')})`,
  )
}

function placeholders(value) {
  return [...value.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]).sort()
}

function compareShape(reference, candidate, path) {
  if (typeof reference === 'string') {
    if (typeof candidate !== 'string' || candidate.trim() === '') {
      errors.push(`${path}: expected a non-empty string`)
      return
    }
    if (candidate !== candidate.trim()) errors.push(`${path}: has surrounding whitespace`)
    if (placeholders(reference).join(',') !== placeholders(candidate).join(',')) {
      errors.push(`${path}: placeholders differ from English`)
    }
    return
  }
  if (Array.isArray(reference)) {
    if (!Array.isArray(candidate) || candidate.length !== reference.length) {
      errors.push(`${path}: array shape differs from English`)
      return
    }
    reference.forEach((item, index) => compareShape(item, candidate[index], `${path}[${index}]`))
    return
  }
  if (!reference || typeof reference !== 'object') return
  if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) {
    errors.push(`${path}: object shape differs from English`)
    return
  }
  const expected = Object.keys(reference).sort()
  const actual = Object.keys(candidate).sort()
  if (expected.join(',') !== actual.join(',')) {
    errors.push(`${path}: keys differ from English`)
    return
  }
  for (const key of expected) compareShape(reference[key], candidate[key], `${path}.${key}`)
}

function englishSources() {
  const output = []
  for (const section of ['introduction', 'protocol', 'governance', 'white-paper']) {
    for (const name of readdirSync(join(pages, section)).sort()) {
      if (['.md', '.mdx'].includes(extname(name))) output.push(join(pages, section, name))
    }
  }
  return output
}

function routeFor(path) {
  let value = relative(pages, path).replace(/\\/g, '/').replace(/\.(md|mdx)$/, '')
  value = value.replace(/\/index$/, '')
  return `/${value}`.replace(/\/$/, '') || '/'
}

function localeSource(locale, source) {
  return join(pages, locale, relative(pages, source))
}

const splashCatalogs = join(i18n, 'messages')
const englishSplash = readJson(join(splashCatalogs, 'en.json'))
const englishUi = readJson(join(i18n, 'ui/en.json'))
const englishNavigation = readJson(join(i18n, 'navigation/en.json'))
for (const locale of locales) {
  const candidatePath = join(i18n, 'messages', `${locale}.json`)
  if (!existsSync(candidatePath)) errors.push(`messages/${locale}.json: missing catalog`)
  else compareShape(englishSplash, readJson(candidatePath), `messages.${locale}`)
  const splashRoute = locale === 'en' ? join(pages, 'index.mdx') : join(pages, locale, 'index.tsx')
  if (!existsSync(splashRoute) || !statSync(splashRoute).isFile()) errors.push(`${locale}: missing splash route`)
}
for (const locale of documentationLocales) {
  for (const [folder, reference] of [
    ['ui', englishUi],
    ['navigation', englishNavigation],
  ]) {
    const candidatePath = join(i18n, folder, `${locale}.json`)
    if (!existsSync(candidatePath)) errors.push(`${folder}/${locale}.json: missing catalog`)
    else compareShape(reference, readJson(candidatePath), `${folder}.${locale}`)
  }
}

const glossary = readJson(join(i18n, 'glossary.json'))
if (glossary.sourceAppCommit !== appBaseline) errors.push('Glossary app baseline is stale')
for (const [term, translations] of Object.entries(glossary.terms)) {
  for (const locale of splashLocalizedLocales) {
    if (typeof translations[locale] !== 'string' || !translations[locale].trim()) {
      errors.push(`glossary.${term}.${locale}: missing translation`)
    }
  }
}

const manifests = Object.fromEntries(
  localizedLocales.map((locale) => [
    locale,
    readJson(join(i18n, `translation-manifest.${locale}.json`)),
  ]),
)
for (const [locale, manifest] of Object.entries(manifests)) {
  if (manifest.sourceAppCommit !== appBaseline) {
    errors.push(`${locale}: translation manifest app baseline is stale`)
  }
  if (manifest.translationPublicationDate !== translationDates[locale]) {
    errors.push(`${locale}: translation publication date is incorrect`)
  }
  if (manifest.status !== 'first-draft-review') {
    errors.push(`${locale}: translation manifest must identify the review status`)
  }
}

const sources = englishSources()
const localizedSources = sources.filter((source) => !policyRouteSet.has(routeFor(source)))
if (sources.length !== 40) errors.push(`Expected 40 English documentation pages, found ${sources.length}`)
if (localizedSources.length !== 36) {
  errors.push(`Expected 36 localized documentation source pages, found ${localizedSources.length}`)
}
for (const source of localizedSources) {
  const route = routeFor(source)
  const english = readFileSync(source, 'utf8')
  for (const locale of localizedLocales) validateTranslation(source, route, english, locale)
}
for (const source of sources.filter((candidate) => policyRouteSet.has(routeFor(candidate)))) {
  const route = routeFor(source)
  const english = readFileSync(source, 'utf8')
  for (const locale of policyTranslationLocales) validateTranslation(source, route, english, locale)
}

function validateTranslation(source, route, english, locale) {
  const entry = manifests[locale].pages?.[route]
  if (!entry) {
    errors.push(`${route}: missing ${locale} manifest entry`)
    return
  }
  if (entry.sourceSha256 !== sha256(english)) {
    errors.push(`${route}: ${locale} English source hash is stale`)
  }
  const translatedPath = localeSource(locale, source)
  if (!existsSync(translatedPath)) {
    errors.push(`${route}: missing ${locale} source`)
    return
  }
  const translated = readFileSync(translatedPath, 'utf8')
  if (/CLCTRANSLATE|XxOpaque/i.test(translated)) {
    errors.push(`${route}: ${locale} contains an unresolved translation marker`)
  }
  if (entry.locales?.[locale]?.sha256 !== sha256(translated)) {
    errors.push(`${route}: ${locale} translation hash is stale`)
  }
  for (const name of protectedNames) {
    if (english.includes(name) && !translated.includes(name)) {
      errors.push(`${route}: ${locale} changed protected name ${name}`)
    }
  }
  for (const formula of protectedFormulas) {
    if (english.includes(formula) && !translated.includes(formula)) {
      errors.push(`${route}: ${locale} changed protected formula ${formula}`)
    }
  }
  for (const url of new Set(english.match(/https?:\/\/[^\s)>"']+/g) ?? [])) {
    if (!translated.includes(url)) errors.push(`${route}: ${locale} changed external URL ${url}`)
  }
  const englishCode = [...english.matchAll(/`([^`\n]+)`/g)].map((match) => match[1]).sort()
  const translatedCode = [...translated.matchAll(/`([^`\n]+)`/g)].map((match) => match[1]).sort()
  for (const token of new Set(englishCode)) {
    if (!translatedCode.includes(token)) errors.push(`${route}: ${locale} changed code token ${token}`)
  }
  for (const match of translated.matchAll(/\]\((\/(?!\/)[^)#?]+)([^)]*)\)/g)) {
    const target = match[1]
    const publicAsset = target.startsWith('/about/') ||
      (/^\/white-paper\/.+\.(?:pdf|svg|png|jpe?g)$/i.test(target))
    const controllingEnglishPolicy = policyRouteSet.has(route) && target === route
    if (!target.startsWith(`/${locale}/`) && !publicAsset && !controllingEnglishPolicy) {
      errors.push(`${route}: ${locale} has an unlocalized internal link ${target}`)
    }
  }
  if (route === '/governance/terms') {
    if (!translated.includes('data-english-source="true"') || !translated.includes('hrefLang="en"')) {
      errors.push(`${route}: ${locale} is missing the controlling-English notice`)
    }
  }
  if (policyRouteSet.has(route)) {
    const localePolicy = policyRegistry.locales[locale]
    const separator = localePolicy.metadataSeparator ?? ': '
    if (!translated.includes(`](${route})`)) {
      errors.push(`${route}: ${locale} is missing the controlling-English policy notice`)
    }
    for (const required of [
      `> **${localePolicy.notice.title}** ${localePolicy.notice.body} [${localePolicy.notice.englishSource}](${route})`,
      `**${localePolicy.metadata.sourceVersion}${separator}${policyRegistry.source.version}**`,
      `**${localePolicy.metadata.englishDraftDate}${separator}${localePolicy.sourceDraftDate}**`,
      `**${localePolicy.metadata.translationDraftDate}${separator}${localePolicy.translationDraftDate}**`,
    ]) {
      if (!translated.includes(required)) errors.push(`${route}: ${locale} is missing ${required}`)
    }
  }
  if ((route === '/white-paper' || route === '/white-paper/archive') && !translated.includes('data-english-source="true"')) {
    errors.push(`${route}: ${locale} is missing the White Paper translation notice`)
  }
  if (route === '/white-paper') {
    const localizedPdf = `/white-paper/Cosmo-Local-Credit-CLC-White-Paper-v8-${locale}.pdf`
    if (!translated.includes(`href="${localizedPdf}"`)) {
      errors.push(`${route}: ${locale} is missing its localized White Paper PDF link`)
    }
  }
}

if (existsSync(join(pages, 'governance/terms-v1-1.md'))) errors.push('Temporary Terms v1.1 route still exists')
const terms = readFileSync(join(pages, 'governance/terms.md'), 'utf8')
for (const required of [
  '**Version 1.1**', '**Publication date: 1 October 2026**', '**Effective date: 1 October 2026**',
  'initial Terms for public use of the App',
]) {
  if (!terms.includes(required)) errors.push(`Canonical Terms are missing: ${required}`)
}
if (/Version 1\.0|31 October 2026|terms-v1-1/.test(terms)) errors.push('Canonical Terms retain transition-era text')

for (const route of policyRoutes) {
  const sourceEntry = policyRegistry.source.routes[route]
  const policy = route.split('/').at(-1)
  const policySource = readFileSync(join(pages, sourceEntry.source), 'utf8')
  if (sha256(policySource) !== sourceEntry.sha256) {
    errors.push(`${policy}: English policy source changed without updating the policy registry`)
  }
  for (const required of [
    '> **Review draft — not yet effective.**',
    '**Draft version: 1.0**',
    '**Draft date: 24 October 2026**',
  ]) {
    if (!policySource.includes(required)) errors.push(`${policy}: missing ${required}`)
  }
  if (/\*\*(?:Publication|Effective) date:/.test(policySource)) {
    errors.push(`${policy}: review draft must not claim a publication or effective date`)
  }
  for (const locale of localizedLocales.filter((candidate) => !policyTranslationLocales.includes(candidate))) {
    const localizedPolicy = join(pages, locale, `governance/${policy}.md`)
    if (existsSync(localizedPolicy)) {
      errors.push(`${policy}: ${locale} translation exists before the English review gate is complete`)
    }
  }
}

const privacy = readFileSync(join(pages, 'governance/privacy.md'), 'utf8')
for (const forbidden of [
  /Social Soil/i,
  /USSD/i,
  /NFC/i,
  /private key stored/i,
  /humanitarian exception/i,
  /never shared/i,
  /never transferred/i,
  /retained? for 10 years/i,
]) {
  if (forbidden.test(privacy)) errors.push(`Privacy Notice contains obsolete or unsupported wording: ${forbidden}`)
}

const headingMap = readJson(join(i18n, 'heading-map.json'))
if (Object.keys(headingMap).length !== 40) errors.push('Heading map must cover all 40 English documentation pages')
for (const [route, mapping] of Object.entries(headingMap)) {
  const count = mapping.en?.length
  const routeLocales = policyRouteSet.has(route) ? policyDocumentationLocales : documentationLocales
  for (const locale of routeLocales) {
    if (!Array.isArray(mapping[locale]) || mapping[locale].length !== count) {
      errors.push(`${route}: ${locale} heading mapping differs from English`)
    }
  }
}

for (const locale of documentationLocales) {
  const suffix = locale === 'en' ? '' : `-${locale}`
  const pdf = join(publicPaper, `Cosmo-Local-Credit-CLC-White-Paper-v8${suffix}.pdf`)
  if (!existsSync(pdf)) errors.push(`${locale}: missing current White Paper PDF`)
  const tex = locale === 'en'
    ? join(root, 'white-paper/clc_white_paper.tex')
    : join(root, `white-paper/clc_white_paper_${locale}.tex`)
  if (!existsSync(tex)) errors.push(`${locale}: missing tracked generated TeX`)
}

if (errors.length) {
  console.error(`Multilingual validation failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

const routeCount = sources.length + (localizedSources.length * localizedLocales.length) + (policyRouteSet.size * policyTranslationLocales.length)
console.log(`Validated ${locales.length} splash routes, ${routeCount} documentation routes, catalogs, hashes, links, Terms, policy drafts, TeX, and PDFs.`)
