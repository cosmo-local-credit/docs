import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { policyRouteSet, policyTranslationLocales } from './policy_registry.mjs'

const root = resolve(import.meta.dirname, '..')
const locales = ['ar', 'zh', 'zh-Hant', 'dz', 'de', 'es', 'fil', 'fr', 'hi', 'it', 'nl', 'nl-BE', 'pt', 'sr', 'uk', 'sw']
const digest = (value) => createHash('sha256').update(value).digest('hex')
const directory = resolve(root, 'docs/i18n')
const availableManifestFiles = readdirSync(directory)
  .filter((name) => /^translation-manifest\.(?:all|group-[a-z]|ar|zh|zh-Hant|dz|de|es|fil|fr|hi|it|nl|nl-BE|pt|sr|uk|sw)\.json$/.test(name))
  .sort()
const manifestFiles = availableManifestFiles.includes('translation-manifest.all.json')
  ? ['translation-manifest.all.json']
  : availableManifestFiles
const manifests = manifestFiles.map((name) =>
  JSON.parse(readFileSync(resolve(directory, name), 'utf8')),
)
const [reference] = manifests
const merged = {
  sourceAppCommit: reference.sourceAppCommit,
  localeMetadata: {},
  pages: {},
}

for (const manifest of manifests) {
  if (manifest.sourceAppCommit !== merged.sourceAppCommit) {
    throw new Error('Translation manifests use different source baselines')
  }
  const manifestLocales = new Set(
    Object.values(manifest.pages).flatMap((page) => Object.keys(page.locales)),
  )
  if (manifestLocales.size !== 1) {
    throw new Error('Each source manifest must contain exactly one locale')
  }
  const [manifestLocale] = manifestLocales
  merged.localeMetadata[manifestLocale] = {
    translationPublicationDate: manifest.translationPublicationDate,
    reviewProcess: manifest.reviewProcess,
    status: manifest.status,
  }
  for (const [route, page] of Object.entries(manifest.pages)) {
    const current = (merged.pages[route] ??= {
      source: page.source,
      sourceSha256: page.sourceSha256,
      locales: {},
    })
    if (current.source !== page.source || current.sourceSha256 !== page.sourceSha256) {
      throw new Error(`Source mismatch while merging ${route}`)
    }
    Object.assign(current.locales, page.locales)
  }
}

for (const [route, page] of Object.entries(merged.pages)) {
  const present = Object.keys(page.locales).sort()
  const expected = policyRouteSet.has(route) ? policyTranslationLocales : locales
  if (present.join(',') !== [...expected].sort().join(',')) {
    throw new Error(`${route} is missing locale manifests: ${present.join(', ')}`)
  }
  for (const locale of expected) {
    const translated = readFileSync(resolve(root, 'docs/pages', locale, page.source), 'utf8')
    page.locales[locale].sha256 = digest(translated)
  }
}

if (Object.keys(merged.pages).length !== 40) {
  throw new Error(`Expected 40 documentation pages, got ${Object.keys(merged.pages).length}`)
}

writeFileSync(
  resolve(root, 'docs/i18n/translation-manifest.json'),
  `${JSON.stringify(merged, null, 2)}\n`,
)
console.log(`Merged ${locales.length} locale manifests for ${Object.keys(merged.pages).length} pages.`)
