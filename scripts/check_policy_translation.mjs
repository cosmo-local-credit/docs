#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import {
  policyLocale,
  policyRegistry,
  policyRoutes,
  root,
} from './policy_registry.mjs'

const args = process.argv.slice(2)
const locale = args.find((value) => !value.startsWith('--'))
const candidateIndex = args.indexOf('--candidate')
const candidate = candidateIndex === -1 ? null : resolve(args[candidateIndex + 1] ?? '')

if (!locale) {
  console.error('Usage: node scripts/check_policy_translation.mjs <locale> [--candidate <directory>]')
  process.exit(2)
}

const digest = (value) => createHash('sha256').update(value).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))
const errors = []
const sourceRoot = join(root, 'docs/pages')
const translatedRoot = candidate ? join(candidate, 'pages') : sourceRoot
const manifestPath = candidate
  ? join(candidate, `translation-manifest.${locale}.json`)
  : join(root, `docs/i18n/translation-manifest.${locale}.json`)
const reportPath = candidate ? join(candidate, `policy-review.${locale}.json`) : null
const catalogPath = candidate ? join(candidate, `policy-catalog.${locale}.json`) : null

if (!existsSync(manifestPath)) errors.push(`Missing manifest: ${manifestPath}`)
if (candidate && !existsSync(reportPath)) errors.push(`Missing review report: ${reportPath}`)
if (candidate && !existsSync(catalogPath)) errors.push(`Missing policy catalog: ${catalogPath}`)

if (errors.length) finish()

const manifest = readJson(manifestPath)
const report = reportPath ? readJson(reportPath) : null
const catalog = candidate ? readJson(catalogPath) : policyLocale(locale)
if (!catalog) {
  errors.push(`${locale} is not present in the policy-locale registry`)
  finish()
}

for (const key of ['policies', 'privacy', 'dataProtection', 'childSafeguarding']) {
  if (!catalog?.navigation?.[key]?.trim()) errors.push(`${locale}: missing navigation.${key}`)
}
for (const key of ['title', 'body', 'englishSource']) {
  if (!catalog?.notice?.[key]?.trim()) errors.push(`${locale}: missing notice.${key}`)
}
for (const key of ['sourceVersion', 'englishDraftDate', 'translationDraftDate']) {
  if (!catalog?.metadata?.[key]?.trim()) errors.push(`${locale}: missing metadata.${key}`)
}
for (const key of ['sourceDraftDate', 'translationDraftDate', 'sourceAppCommit']) {
  if (!catalog?.[key]?.trim()) errors.push(`${locale}: missing ${key}`)
}

const protectedNames = [
  'Cosmo-Local Credit',
  'CLC App',
  'Grassroots Economics Foundation',
  'Data Protection Act, 2019',
  'Children Act, 2022',
  'Office of the Data Protection Commissioner',
  'ODPC',
]

for (const route of policyRoutes) {
  const sourceEntry = policyRegistry.source.routes[route]
  const englishPath = join(sourceRoot, sourceEntry.source)
  const translatedPath = join(translatedRoot, locale, sourceEntry.source)
  if (!existsSync(translatedPath)) {
    errors.push(`${route}: missing translated file ${translatedPath}`)
    continue
  }
  const english = readFileSync(englishPath, 'utf8')
  const translated = readFileSync(translatedPath, 'utf8')
  if (digest(english) !== sourceEntry.sha256) {
    errors.push(`${route}: English source hash differs from the policy registry`)
  }
  const entry = manifest.pages?.[route]
  if (!entry) {
    errors.push(`${route}: missing manifest entry`)
  } else {
    if (entry.sourceSha256 !== sourceEntry.sha256) errors.push(`${route}: stale source hash in manifest`)
    if (entry.locales?.[locale]?.sha256 !== digest(translated)) {
      errors.push(`${route}: stale translation hash in manifest`)
    }
  }
  if (/CLCTRANSLATE|XxOpaque/i.test(translated)) {
    errors.push(`${route}: unresolved translation marker`)
  }
  const englishHeadingLevels = [...english.matchAll(/^(#{1,6})\s+/gm)].map((match) => match[1].length)
  const translatedHeadingLevels = [...translated.matchAll(/^(#{1,6})\s+/gm)].map((match) => match[1].length)
  if (englishHeadingLevels.join(',') !== translatedHeadingLevels.join(',')) {
    errors.push(`${route}: heading hierarchy differs from English`)
  }
  if ((english.match(/^\|/gm) ?? []).length !== (translated.match(/^\|/gm) ?? []).length) {
    errors.push(`${route}: table row structure differs from English`)
  }
  for (const name of protectedNames) {
    if (english.includes(name) && !translated.includes(name)) {
      errors.push(`${route}: changed protected name ${name}`)
    }
  }
  for (const url of new Set(english.match(/https?:\/\/[^\s)>"']+/g) ?? [])) {
    if (!translated.includes(url)) errors.push(`${route}: changed external URL ${url}`)
  }
  for (const token of new Set([...english.matchAll(/`([^`\n]+)`/g)].map((match) => match[1]))) {
    if (!translated.includes(`\`${token}\``)) errors.push(`${route}: changed code token ${token}`)
  }
  for (const match of translated.matchAll(/\]\((\/(?!\/)[^)#?]+)([^)]*)\)/g)) {
    const target = match[1]
    const publicAsset = target.startsWith('/about/') || /^\/white-paper\/.+\.(?:pdf|svg|png|jpe?g)$/i.test(target)
    const englishSource = target === route
    if (!target.startsWith(`/${locale}/`) && !publicAsset && !englishSource) {
      errors.push(`${route}: unlocalized internal link ${target}`)
    }
  }
  for (const required of [
    `> **${catalog.notice.title}** ${catalog.notice.body} [${catalog.notice.englishSource}](${route})`,
    `**${catalog.metadata.sourceVersion}${catalog.metadataSeparator ?? ': '}${policyRegistry.source.version}**`,
    `**${catalog.metadata.englishDraftDate}${catalog.metadataSeparator ?? ': '}${catalog.sourceDraftDate}**`,
    `**${catalog.metadata.translationDraftDate}${catalog.metadataSeparator ?? ': '}${catalog.translationDraftDate}**`,
  ]) {
    if (!translated.includes(required)) errors.push(`${route}: missing policy notice or metadata: ${required}`)
  }
}

if (report) {
  if (report.locale !== locale) errors.push(`Review report locale is ${report.locale}, expected ${locale}`)
  if (report.sourceAppCommit !== catalog.sourceAppCommit) errors.push('Review report app commit differs from the catalog')
  if (report.summary?.units !== manifest.policyBackTranslationReview?.units) {
    errors.push('Review report and manifest unit totals differ')
  }
  if (report.lowConfidenceUnits?.length !== report.summary?.unitsBelow0_35) {
    errors.push('Low-confidence report count differs from its summary')
  }
  for (const unit of report.lowConfidenceUnits ?? []) {
    if (!policyRoutes.includes(unit.route) || typeof unit.source !== 'string' ||
        typeof unit.translation !== 'string' || typeof unit.backTranslation !== 'string') {
      errors.push('Low-confidence report contains an incomplete unit')
      break
    }
  }
}

finish()

function finish() {
  if (errors.length) {
    console.error(`Policy translation validation failed with ${errors.length} issue(s):`)
    for (const error of errors) console.error(`- ${error}`)
    process.exit(1)
  }
  console.log(
    `Validated ${policyRoutes.length} ${locale} policy pages${candidate ? ' in the candidate workspace' : ''}.`,
  )
  process.exit(0)
}
