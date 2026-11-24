import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
export const softwareDocsRollout = JSON.parse(
  readFileSync(join(root, 'docs/i18n/software-docs-rollout.json'), 'utf8'),
)

export function keepsPreviousSoftwareSource(locale, route, registry = softwareDocsRollout) {
  return locale !== 'en' && Boolean(registry.source.routes[route]) &&
    registry.locales[locale]?.status === 'pending'
}

// A later review supersedes only the exact predecessor recorded at review time.
// Its new hash is independently checked against the current English file below.
export function supersedesEnglishReviewSource(route, hash, registry = softwareDocsRollout) {
  return registry.source.routes[route]?.previousSha256 === hash
}

export function validateSoftwareReferenceRollout(locales, registry = softwareDocsRollout) {
  const errors = []
  const digest = (value) => createHash('sha256').update(value).digest('hex')
  if (Object.keys(registry.locales).sort().join(',') !== [...locales].sort().join(',')) {
    errors.push('Software-reference rollout locale set differs from the documentation locale set')
  }
  for (const [route, entry] of Object.entries(registry.source.routes)) {
    if (`/${entry.source.replace(/\.mdx?$/, '')}` !== route) {
      errors.push(`${route}: software-reference source path does not match its route`)
      continue
    }
    if (!/^[a-f0-9]{64}$/.test(entry.previousSha256)) {
      errors.push(`${route}: missing prior reviewed source hash`)
    }
    const source = readFileSync(join(root, 'docs/pages', entry.source), 'utf8')
    if (digest(source) !== entry.sha256) errors.push(`${route}: software-reference source hash is stale`)
  }
  for (const locale of locales) {
    const state = registry.locales[locale]
    if (!state) continue
    if (!['current', 'pending'].includes(state.status) || (locale === 'en' && state.status !== 'current')) {
      errors.push(`${locale}: invalid software-reference review status`)
    }
    if (state.status === 'current' &&
        !['label', 'body', 'link'].every((key) => state.readingNote?.[key]?.trim())) {
      errors.push(`${locale}: software-reference reading note is missing`)
    }
    if (locale === 'en') continue
    const manifest = JSON.parse(readFileSync(join(root, `docs/i18n/translation-manifest.${locale}.json`), 'utf8'))
    for (const [route, source] of Object.entries(registry.source.routes)) {
      const expected = state.status === 'current' ? source.sha256 : state.reviewedSources[route]
      if (!expected || manifest.pages[route]?.sourceSha256 !== expected) {
        errors.push(`${route}: ${locale} source hash differs from its software-reference review state`)
      }
    }
    if (state.status !== 'current') continue
    const reportPath = join(root, `docs/i18n/software-review.${locale}.json`)
    if (!existsSync(reportPath)) {
      errors.push(`${locale}: missing reviewed software-reference translation report`)
      continue
    }
    const report = JSON.parse(readFileSync(reportPath, 'utf8'))
    if (report.locale !== locale || report.status !== 'review-complete') {
      errors.push(`${locale}: software-reference translation review is incomplete`)
    }
    if (report.readingNoteSha256 !== digest(JSON.stringify(state.readingNote)) ||
        report.englishReadingNoteSha256 !== digest(JSON.stringify(registry.locales.en.readingNote))) {
      errors.push(`${locale}: software-reference reading note changed after review`)
    }
    for (const [route, source] of Object.entries(registry.source.routes)) {
      const reviewed = report.pages?.[route]
      const translation = manifest.pages[route]?.locales?.[locale]
      if (reviewed?.sourceSha256 !== source.sha256 || reviewed?.sha256 !== translation?.sha256 ||
          translation?.review?.status !== 'review-complete') {
        errors.push(`${route}: ${locale} software-reference review hashes are stale or incomplete`)
      }
    }
  }
  return errors
}
