import assert from 'node:assert/strict'
import test from 'node:test'
import { headingData, literalStrongMarkers } from './heading_data.mjs'

test('parsed formatting and literal formatting keep their distinct anchors', () => {
  assert.deepEqual(headingData('## **17.2 Pool disclosures**\n\n## ** 17.2 Pool disclosures **'), [
    { level: 2, slug: '172-pool-disclosures' },
    { level: 2, slug: '-172-pool-disclosures-' },
  ])
})

test('preserve Tibetan heading boundaries and ignore headings in code', () => {
  assert.deepEqual(headingData('## ** ཀ **\n\n```md\n# ignored\n```'), [
    { level: 2, slug: '-ཀ-' },
  ])
})

test('links, inline code, and duplicate headings use rendered text', () => {
  assert.deepEqual(headingData('## [Pool](/pool) `SwapPool`\n\n## [Pool](/pool) `SwapPool`'), [
    { level: 2, slug: 'pool-swappool' },
    { level: 2, slug: 'pool-swappool-1' },
  ])
})

test('legacy heading aliases preserve the visible heading text', () => {
  assert.deepEqual(headingData('### Liquidação da troca<span id="swap-settlement" />'), [
    { level: 3, slug: 'liquidação-da-troca' },
  ])
})

test('detect visible CJK emphasis delimiters without flagging literal code', () => {
  assert.equal(literalStrongMarkers('**市场（Market）**是目录。').length, 1)
  assert.deepEqual(literalStrongMarkers('**市场（Market）** 是目录。'), [])
  assert.deepEqual(literalStrongMarkers('`**literal**`\n\n```md\n**literal**\n```'), [])
})
