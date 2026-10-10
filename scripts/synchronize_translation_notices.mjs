#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { extname, join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const locale = process.argv[2]
if (!locale) throw new Error('Pass one locale code')

const ui = JSON.parse(readFileSync(join(root, `docs/i18n/ui/${locale}.json`), 'utf8'))

function replaceNotice(path, notice, required = true) {
  const source = readFileSync(path, 'utf8')
  const pattern = /^> \*\*[^\n]+<\/a>\.$/m
  if (!pattern.test(source)) {
    if (required) throw new Error(`${path}: translation notice was not found`)
    return
  }
  const updated = source.replace(pattern, notice)
  writeFileSync(path, updated)
}

const terms = join(root, `docs/pages/${locale}/governance/terms.md`)
replaceNotice(
  terms,
  `> **${ui.legal.translationTitle}.** ${ui.legal.translationNotice} ` +
    `<a data-english-source="true" href="/governance/terms" hrefLang="en">` +
    `${ui.legal.englishSource}</a>.`,
)

const paperDirectory = join(root, `docs/pages/${locale}/white-paper`)
for (const name of readdirSync(paperDirectory)) {
  if (!['.md', '.mdx'].includes(extname(name))) continue
  const slug = name.replace(/\.(?:md|mdx)$/, '')
  const route = slug === 'index' ? '/white-paper' : `/white-paper/${slug}`
  const path = join(paperDirectory, name)
  replaceNotice(
    path,
    `> **${ui.whitePaper.translationTitle}.** ${ui.whitePaper.translationNotice} ` +
      `<a data-english-source="true" href="${route}" hrefLang="en">` +
      `${ui.whitePaper.englishSource}</a>.`,
    false,
  )
}

console.log(`Synchronized Terms and White Paper notices for ${locale}.`)
