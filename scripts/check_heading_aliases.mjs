import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import { headingData } from './heading_data.mjs'

const root = resolve(import.meta.dirname, '..')
const registry = JSON.parse(readFileSync(resolve(root, 'docs/i18n/heading-aliases.json')))
const rollout = JSON.parse(readFileSync(resolve(root, 'docs/i18n/software-docs-rollout.json')))
const clarityReview = JSON.parse(readFileSync(resolve(root, 'docs/i18n/clarity-review.zh.json')))
const built = process.argv.includes('--built')
let count = 0
for (const [path, aliases] of Object.entries(registry)) {
  const [, locale, ...segments] = path.split('/')
  const route = '/' + segments.join('/')
  assert.ok(rollout.locales[locale], `${path}: unknown locale`)
  const reviewed = locale === 'zh' && clarityReview.status === 'review-complete' && clarityReview.pages[route]
  const source = rollout.source.routes[route]?.source ?? reviewed?.source
  assert.ok(source, `${path}: aliases require a controlled, completed review`)
  if (reviewed) {
    const sha256 = (file) => createHash('sha256').update(readFileSync(file)).digest('hex')
    assert.equal(sha256(resolve(root, 'docs/pages', source)), reviewed.sourceSha256, `${path}: reviewed source changed`)
    assert.equal(sha256(resolve(root, 'docs/pages', locale, source)), reviewed.sha256, `${path}: reviewed translation changed`)
  }
  const ids = new Set(headingData(readFileSync(resolve(root, 'docs/pages', locale, source), 'utf8')).map(h => h.slug))
  const previousIds = new Set()
  const html = built ? readFileSync(resolve(root, 'docs/dist', path.slice(1), 'index.html'), 'utf8') : ''
  for (const [canonical, previous] of Object.entries(aliases)) {
    assert.ok(ids.has(canonical), `${path}: unknown current heading ${canonical}`)
    assert.ok(Array.isArray(previous) && previous.length, `${path}: no previous heading`)
    for (const id of previous) {
      assert.ok(typeof id === 'string' && id && !ids.has(id) && !previousIds.has(id), `${path}: conflicting old heading ${id}`)
      previousIds.add(id)
      if (built) assert.ok(html.includes(`id="${id}"`), `${path}: old heading absent from HTML ${id}`)
      count++
    }
  }
}
console.log(`Verified ${count} legacy heading aliases${built ? ' in emitted HTML' : ''}.`)
