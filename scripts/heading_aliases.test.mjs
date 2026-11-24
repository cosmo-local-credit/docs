import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { canonicalHeadingId } from '../docs/i18n/heading-aliases.ts'

const registry = { '/dz/protocol/overview': { components: ['vehicle-map', 'previous-components'] } }

test('an existing bookmarked heading maps to its corrected translation', () => {
  assert.equal(canonicalHeadingId(registry, '/dz/protocol/overview', 'vehicle-map'), 'components')
  assert.equal(canonicalHeadingId(registry, '/dz/protocol/overview/', 'previous-components'), 'components')
})

test('current headings and unknown hashes retain their original values', () => {
  assert.equal(canonicalHeadingId(registry, '/dz/protocol/overview', 'components'), 'components')
  assert.equal(canonicalHeadingId(registry, '/dz/protocol/overview', 'unlisted'), 'unlisted')
})

test('aliases never cross a page or locale boundary', () => {
  assert.equal(canonicalHeadingId(registry, '/fr/protocol/overview', 'vehicle-map'), 'vehicle-map')
  assert.equal(canonicalHeadingId(registry, '/dz/protocol/network', 'vehicle-map'), 'vehicle-map')
})

test('published Chinese sections retain their meaning after the guide expands', () => {
  const aliases = JSON.parse(readFileSync(new URL('../docs/i18n/heading-aliases.json', import.meta.url)))
  assert.equal(canonicalHeadingId(aliases, '/zh/introduction/getting-started', '4-创建或评估承诺资金池'), '5-查找或创建承诺资金池')
  assert.equal(canonicalHeadingId(aliases, '/zh/introduction/getting-started', '6-使用正确的行动'), '当前-app-操作')
  assert.equal(canonicalHeadingId(aliases, '/zh/introduction/concepts', '产品层和协议层'), '产品和协议层面')
})
