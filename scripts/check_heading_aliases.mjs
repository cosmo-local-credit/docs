import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { headingData } from './heading_data.mjs'

const root = resolve(import.meta.dirname, '..')
const registry = JSON.parse(readFileSync(resolve(root, 'docs/i18n/heading-aliases.json')))
const rollout = JSON.parse(readFileSync(resolve(root, 'docs/i18n/software-docs-rollout.json')))
const built = process.argv.includes('--built')
let count = 0
for (const [path, aliases] of Object.entries(registry)) {
  const [, locale, ...segments] = path.split('/')
  const route = '/' + segments.join('/')
  assert.ok(rollout.locales[locale], `${path}: unknown locale`)
  const source = rollout.source.routes[route]?.source
  assert.ok(source, `${path}: aliases must stay within the controlled software guides`)
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
