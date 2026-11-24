import assert from 'node:assert/strict'
import test from 'node:test'
import {
  keepsPreviousSoftwareSource,
  softwareDocsRollout,
  supersedesEnglishReviewSource,
  validateSoftwareReferenceRollout,
} from './software_reference_rollout.mjs'

const locales = Object.keys(softwareDocsRollout.locales)
const route = '/protocol/network'

test('the new review pins only its affected pending translations', () => {
  const reviewed = structuredClone(softwareDocsRollout)
  reviewed.locales.fr.status = 'pending'
  assert.equal(keepsPreviousSoftwareSource('fr', route, reviewed), true)
  assert.equal(keepsPreviousSoftwareSource('en', route, reviewed), false)
  assert.equal(keepsPreviousSoftwareSource('fr', '/governance/terms', reviewed), false)
  reviewed.locales.fr.status = 'current'
  assert.equal(keepsPreviousSoftwareSource('fr', route, reviewed), false)
})

test('a later revision supersedes only the exact recorded predecessor', () => {
  assert.equal(supersedesEnglishReviewSource(route, softwareDocsRollout.source.routes[route].previousSha256), true)
  assert.equal(supersedesEnglishReviewSource(route, '0'.repeat(64)), false)
  assert.equal(supersedesEnglishReviewSource('/governance/privacy', '0'.repeat(64)), false)
})

test('the recorded source and reviewed translation hashes match the files', () => {
  assert.deepEqual(validateSoftwareReferenceRollout(locales), [])
})

test('an English edit cannot bypass the new source-hash gate', () => {
  const stale = structuredClone(softwareDocsRollout)
  stale.source.routes[route].sha256 = '0'.repeat(64)
  assert.ok(validateSoftwareReferenceRollout(locales, stale).some((error) => error.includes('source hash is stale')))
})

test('a pending translation cannot silently adopt a new source hash', () => {
  const stale = structuredClone(softwareDocsRollout)
  stale.locales.fr.status = 'pending'
  stale.locales.fr.reviewedSources[route] = '0'.repeat(64)
  assert.ok(validateSoftwareReferenceRollout(locales, stale).some((error) => error.includes(`${route}: fr source hash differs`)))
})

test('a reviewed reading note cannot change without another review', () => {
  const changed = structuredClone(softwareDocsRollout)
  const locale = locales.find((locale) => locale !== 'en' && changed.locales[locale].status === 'current')
  if (!locale) return
  changed.locales[locale].readingNote.body += ' Changed.'
  assert.ok(validateSoftwareReferenceRollout(locales, changed).some((error) => error.includes(`${locale}: software-reference reading note changed`)))
})
