#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  policyLocale,
  policyRegistry,
  policyRoutes,
  root,
} from './policy_registry.mjs'

const locale = process.argv[2]
if (!locale || locale === 'en') {
  console.error('Usage: node scripts/refresh_policy_manifest.mjs <locale>')
  process.exit(2)
}

const catalog = policyLocale(locale)
if (!catalog) throw new Error(`${locale} is not in the policy-locale registry`)

const manifestPath = join(root, `docs/i18n/translation-manifest.${locale}.json`)
if (!existsSync(manifestPath)) throw new Error(`Missing manifest: ${manifestPath}`)
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
const digest = (value) => createHash('sha256').update(value).digest('hex')

manifest.sourceAppCommit = policyRegistry.source.auditedAppCommit
manifest.status = 'first-draft-review'
manifest.policyStatus = 'release-ready'
manifest.policySourceAppCommit = policyRegistry.source.auditedAppCommit
manifest.policyTranslationPublicationDate = catalog.translationPublicationDate
delete manifest.policyTranslationDraftDate
manifest.policyReviewProcess = [
  'reviewed translation memory retained for unchanged units',
  'semantic translation of changed units',
  'complete plain-language and legal-meaning review of the four policy pages',
  'protected-token, structure, link, and source-hash verification',
]

for (const route of policyRoutes) {
  const source = policyRegistry.source.routes[route].source
  const path = join(root, 'docs/pages', locale, source)
  if (!existsSync(path)) throw new Error(`Missing translated policy page: ${path}`)
  const value = readFileSync(path, 'utf8')
  const page = manifest.pages[route] ?? { source, locales: {} }
  page.source = source
  page.sourceSha256 = policyRegistry.source.routes[route].sha256
  page.locales ??= {}
  page.locales[locale] = {
    sha256: digest(value),
    review: {
      method: 'semantic translation, complete clarity and legal-meaning review, and structural verification',
      status: 'release-review-complete',
    },
  }
  manifest.pages[route] = page
}

manifest.policyBackTranslationReview = {
  status: 'completed-before-final-human-review',
  scope: 'changed policy units',
  note: 'Automated back-translation was used as a review aid; final file hashes identify the manually reviewed text.',
}

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Refreshed final policy hashes in ${manifestPath}`)
