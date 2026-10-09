#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const locale = process.argv[2] ?? 'fr'
const manifestPath = join(root, `docs/i18n/translation-manifest.${locale}.json`)
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
const sha256 = (value) => createHash('sha256').update(value).digest('hex')

for (const entry of Object.values(manifest.pages)) {
  const english = readFileSync(join(root, 'docs/pages', entry.source), 'utf8')
  const translated = readFileSync(join(root, 'docs/pages', locale, entry.source), 'utf8')
  entry.sourceSha256 = sha256(english)
  entry.locales[locale].sha256 = sha256(translated)
}

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Refreshed source and ${locale} hashes for ${Object.keys(manifest.pages).length} pages.`)
