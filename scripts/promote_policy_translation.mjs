#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import {
  policyRegistry,
  policyRegistryPath,
  policyRoutes,
  root,
} from './policy_registry.mjs'

const args = process.argv.slice(2)
const locale = args.find((value) => !value.startsWith('--'))
const candidateIndex = args.indexOf('--candidate')
const candidate = candidateIndex === -1 ? null : resolve(args[candidateIndex + 1] ?? '')
const reviewed = args.includes('--reviewed')
const replace = args.includes('--replace')

if (!locale || !candidate || !reviewed) {
  console.error(
    'Usage: node scripts/promote_policy_translation.mjs <locale> --candidate <directory> --reviewed [--replace]',
  )
  process.exit(2)
}
if (locale === 'en') throw new Error('English is the source policy locale')

const localeManifestPath = join(root, `docs/i18n/translation-manifest.${locale}.json`)
if (!existsSync(localeManifestPath)) throw new Error(`Unknown documentation locale: ${locale}`)
if (policyRegistry.locales[locale] && !replace) {
  throw new Error(`${locale} is already in the policy registry; use --replace to update it`)
}

execFileSync(
  process.execPath,
  [join(root, 'scripts/check_policy_translation.mjs'), locale, '--candidate', candidate],
  { stdio: 'inherit' },
)

const candidateManifest = JSON.parse(
  readFileSync(join(candidate, `translation-manifest.${locale}.json`), 'utf8'),
)
const candidateCatalog = JSON.parse(
  readFileSync(join(candidate, `policy-catalog.${locale}.json`), 'utf8'),
)
const manifest = JSON.parse(readFileSync(localeManifestPath, 'utf8'))

for (const route of policyRoutes) {
  const source = policyRegistry.source.routes[route].source
  const from = join(candidate, 'pages', locale, source)
  const to = join(root, 'docs/pages', locale, source)
  if (existsSync(to) && !replace) throw new Error(`${to} already exists`)
  copyFileSync(from, to)
  const page = structuredClone(candidateManifest.pages[route])
  page.locales[locale].review = {
    ...page.locales[locale].review,
    method: 'model draft, plain-language review, and independent back-translation',
    status: 'first-draft-review-complete',
  }
  manifest.pages[route] = page
}

manifest.policyTranslationDraftDate = candidateManifest.policyTranslationDraftDate
manifest.policySourceAppCommit = candidateManifest.policySourceAppCommit
manifest.policyReviewProcess = candidateManifest.policyReviewProcess
manifest.policyBackTranslationReview = candidateManifest.policyBackTranslationReview
writeFileSync(localeManifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

candidateCatalog.status = 'translation-review-ready'
policyRegistry.locales[locale] = candidateCatalog
writeFileSync(policyRegistryPath, `${JSON.stringify(policyRegistry, null, 2)}\n`)

execFileSync(process.execPath, [join(root, 'scripts/build_heading_map.mjs')], { stdio: 'inherit' })
execFileSync(
  process.execPath,
  [join(root, 'scripts/check_policy_translation.mjs'), locale],
  { stdio: 'inherit' },
)
console.log(`Promoted the reviewed ${locale} policy candidate into the documentation tree.`)
