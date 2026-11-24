import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { literalStrongMarkers } from './heading_data.mjs'

const root = resolve(import.meta.dirname, '..')
const read = (path) => readFileSync(resolve(root, path), 'utf8')
const json = (path) => JSON.parse(read(path))
const hash = (text) => createHash('sha256').update(text).digest('hex')
const report = json('docs/i18n/clarity-review.zh.json')
const rollout = json('docs/i18n/english-review-rollout.json')
const manifest = json('docs/i18n/translation-manifest.zh.json')
const softwareReview = json('docs/i18n/software-review.zh.json')
const expected = [
  '/governance/terms', '/governance/privacy', '/white-paper',
  '/white-paper/executive-summary', '/white-paper/chapter-17-legal-compliance-note',
]
const built = process.argv.includes('--built')

assert.equal(report.status, 'review-complete', 'Chinese clarity review is unfinished')
assert.equal(rollout.locales.zh.status, 'current', 'Chinese clarity rollout is not current')
assert.deepEqual(Object.keys(report.pages).sort(), expected.sort(), 'Incomplete five-page review')
assert.equal(report.units.length, report.manualReview.unitCount, 'Review unit count differs')
const lowConfidence = report.units.filter((unit) => unit.similarity < report.manualReview.lowConfidenceThreshold)
assert.equal(lowConfidence.length, report.manualReview.lowConfidenceUnitsReviewed, 'Unreviewed low-confidence units')
for (const unit of report.units) {
  assert.ok(report.pages[unit.route] && unit.source && unit.translation && unit.backTranslation, 'Incomplete review unit')
}
for (const [route, entry] of Object.entries(report.pages)) {
  const source = read(`docs/pages/${entry.source}`)
  const translated = read(`docs/pages/zh/${entry.source}`)
  assert.equal(hash(source), entry.sourceSha256, `${route}: reviewed English source changed`)
  assert.equal(hash(translated), entry.sha256, `${route}: reviewed Chinese text changed`)
  assert.equal(entry.sourceSha256, rollout.source.routes[route].sha256, `${route}: approved source differs`)
  assert.equal(manifest.pages[route].locales.zh.review.report, 'clarity-review.zh.json', `${route}: missing manifest review`)
  assert.equal(literalStrongMarkers(translated).length, 0, `${route}: unrendered emphasis`)
  assert.ok(report.units.some((unit) => unit.route === route), `${route}: no back-translation evidence`)
  if (built && ['/governance/terms', '/governance/privacy', '/white-paper'].includes(route)) {
    const html = read(`docs/dist/zh${route}/index.html`)
    const anchors = html.match(/<a\b[^>]*>/g) ?? []
    assert.ok(anchors.some((anchor) =>
      anchor.includes(`href="${route}"`) &&
      anchor.includes('data-english-source="true"') &&
      /hreflang="en"/i.test(anchor),
    ), `${route}: emitted controlling-English source link is missing`)
  }
}
const covered = new Set(Object.keys(report.pages))
for (const [route, entry] of Object.entries(report.precedingReview.routes)) {
  assert.deepEqual(entry, softwareReview.pages[route], `${route}: preceding review changed`)
  const source = manifest.pages[route].source
  assert.equal(hash(read(`docs/pages/${source}`)), entry.sourceSha256, `${route}: preceding English source changed`)
  assert.equal(hash(read(`docs/pages/zh/${source}`)), entry.sha256, `${route}: preceding Chinese text changed`)
  covered.add(route)
}
assert.deepEqual([...covered].sort(), Object.keys(rollout.source.routes).sort(), 'Nine-route review coverage is incomplete')
console.log(`Verified Chinese clarity review: ${covered.size} routes, ${report.units.length} independently back-translated units${built ? ', emitted English-source links' : ''}.`)
