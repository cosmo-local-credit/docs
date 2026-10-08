import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const catalogDirectory = join(root, 'docs/i18n/messages')
const pageDirectory = join(root, 'docs/pages')
const locales = ['en', 'ar', 'dz', 'de', 'es', 'fr', 'it', 'pt', 'sr', 'uk', 'sw']
const localizedLocales = locales.filter((locale) => locale !== 'en')

function loadCatalog(locale) {
  return JSON.parse(readFileSync(join(catalogDirectory, `${locale}.json`), 'utf8'))
}

function placeholders(value) {
  return [...value.matchAll(/\{([^}]+)\}/g)].map((match) => match[1]).sort()
}

function compareShape(reference, candidate, path, errors) {
  if (typeof reference === 'string') {
    if (typeof candidate !== 'string' || candidate.trim() === '') {
      errors.push(`${path}: expected a non-empty string`)
      return
    }
    if (candidate !== candidate.trim()) {
      errors.push(`${path}: translation has leading or trailing whitespace`)
    }
    const expectedPlaceholders = placeholders(reference).join(',')
    const actualPlaceholders = placeholders(candidate).join(',')
    if (expectedPlaceholders !== actualPlaceholders) {
      errors.push(
        `${path}: placeholders differ (expected ${expectedPlaceholders || 'none'}, got ${actualPlaceholders || 'none'})`,
      )
    }
    if (/https?:\/\//.test(candidate)) {
      errors.push(`${path}: URLs belong in the page structure, not a translation catalog`)
    }
    return
  }

  if (Array.isArray(reference)) {
    if (!Array.isArray(candidate)) {
      errors.push(`${path}: expected an array`)
      return
    }
    if (candidate.length !== reference.length) {
      errors.push(`${path}: expected ${reference.length} entries, got ${candidate.length}`)
      return
    }
    reference.forEach((value, index) =>
      compareShape(value, candidate[index], `${path}[${index}]`, errors),
    )
    return
  }

  if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) {
    errors.push(`${path}: expected an object`)
    return
  }

  const expectedKeys = Object.keys(reference).sort()
  const actualKeys = Object.keys(candidate).sort()
  if (expectedKeys.join(',') !== actualKeys.join(',')) {
    errors.push(
      `${path}: keys differ (expected ${expectedKeys.join(', ')}, got ${actualKeys.join(', ')})`,
    )
    return
  }
  for (const key of expectedKeys) {
    compareShape(reference[key], candidate[key], `${path}.${key}`, errors)
  }
}

const files = readdirSync(catalogDirectory)
  .filter((name) => name.endsWith('.json'))
  .map((name) => name.replace(/\.json$/, ''))
  .sort()
if (files.join(',') !== [...locales].sort().join(',')) {
  throw new Error(`Catalog files differ from the locale registry: ${files.join(', ')}`)
}

const english = loadCatalog('en')
const errors = []
for (const locale of locales) {
  const catalog = loadCatalog(locale)
  compareShape(english, catalog, locale, errors)
  if (catalog.metadata.title !== 'Cosmo-Local Credit') {
    errors.push(`${locale}.metadata.title: product name must remain unchanged`)
  }
  if (catalog.metadata.description !== catalog.overview.paragraphs[0]) {
    errors.push(`${locale}.metadata.description: must match the opening summary`)
  }
  if (catalog.features.organization !== 'Grassroots Economics Foundation') {
    errors.push(`${locale}.features.organization: organization name must remain unchanged`)
  }
  if (catalog.testimonial.name !== 'Joseph Kimani') {
    errors.push(`${locale}.testimonial.name: testimonial name must remain unchanged`)
  }
  const serialized = JSON.stringify(catalog)
  for (const productName of ['CLC App', 'Sarafu Network']) {
    if (!serialized.includes(productName)) {
      errors.push(`${locale}: required product name ${productName} is missing or translated`)
    }
  }
}

for (const locale of localizedLocales) {
  const route = join(pageDirectory, locale, 'index.tsx')
  try {
    if (!statSync(route).isFile()) errors.push(`${locale}: missing static route shell`)
  } catch {
    errors.push(`${locale}: missing static route shell`)
  }
}

if (errors.length > 0) {
  console.error(`Locale validation failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Validated ${locales.length} complete splash-page catalogs and ${localizedLocales.length} localized route shells.`)
