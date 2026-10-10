#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const pages = join(root, 'docs/pages')
const i18n = join(root, 'docs/i18n')
const publicPaper = join(root, 'docs/public/white-paper')
// Snapshot of the clc-app registry at the synchronization baseline below.
// Keeping it here makes CI independent of the sibling repository while still
// failing if the docs registry omits a known app language.
const appLocaleSnapshot = ['en', 'ar', 'dz', 'de', 'es', 'fr', 'hi', 'it', 'nl', 'pt', 'sr', 'uk', 'sw']
const locales = [...appLocaleSnapshot]
const documentationLocales = [...appLocaleSnapshot]
const localizedLocales = locales.filter((locale) => locale !== 'en')
const translationDates = {
  fr: '9 October 2026',
  es: '9 October 2026',
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
}
const splashLocalizedLocales = locales.slice(1)
const appBaseline = '0ce5b4e808bf0d28da5c6925fa8dbf2459c200cd'
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
  for (const [folder, reference] of [['ui', englishUi], ['navigation', englishNavigation]]) {
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
if (sources.length !== 36) errors.push(`Expected 36 English documentation pages, found ${sources.length}`)
for (const source of sources) {
  const route = routeFor(source)
  const english = readFileSync(source, 'utf8')
  for (const locale of localizedLocales) {
    const entry = manifests[locale].pages?.[route]
    if (!entry) {
      errors.push(`${route}: missing ${locale} manifest entry`)
      continue
    }
    if (entry.sourceSha256 !== sha256(english)) {
      errors.push(`${route}: ${locale} English source hash is stale`)
    }
    const translatedPath = localeSource(locale, source)
    if (!existsSync(translatedPath)) {
      errors.push(`${route}: missing ${locale} source`)
      continue
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
      if (!target.startsWith(`/${locale}/`) && !publicAsset) {
        errors.push(`${route}: ${locale} has an unlocalized internal link ${target}`)
      }
    }
    if (route === '/governance/terms') {
      if (!translated.includes('data-english-source="true"') || !translated.includes('hrefLang="en"')) {
        errors.push(`${route}: ${locale} is missing the controlling-English notice`)
      }
    }
    if ((route === '/white-paper' || route === '/white-paper/archive') && !translated.includes('data-english-source="true"')) {
      errors.push(`${route}: ${locale} is missing the White Paper translation notice`)
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

const headingMap = readJson(join(i18n, 'heading-map.json'))
if (Object.keys(headingMap).length !== 36) errors.push('Heading map must cover all 36 documentation pages')
for (const [route, mapping] of Object.entries(headingMap)) {
  const count = mapping.en?.length
  for (const locale of documentationLocales) {
    if (!Array.isArray(mapping[locale]) || mapping[locale].length !== count) {
      errors.push(`${route}: ${locale} heading mapping differs from English`)
    }
  }
}

for (const locale of ['en']) {
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

console.log(`Validated ${locales.length} splash routes, ${sources.length * documentationLocales.length} released documentation routes, catalogs, hashes, links, Terms, TeX, and PDFs.`)
