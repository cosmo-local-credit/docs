#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import GithubSlugger from 'github-slugger'

const root = resolve(import.meta.dirname, '..')
const pages = resolve(root, 'docs/pages')
const output = resolve(root, 'docs/i18n/heading-map.json')
const locales = ['en', 'fr', 'es', 'pt']
const routes = [
  '/introduction/getting-started', '/introduction/concepts', '/introduction/example', '/introduction/history',
  '/protocol/overview', '/protocol/smart-contracts', '/protocol/network', '/governance/mechanics',
  '/governance/terms', '/white-paper', '/white-paper/executive-summary',
  '/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive',
  '/white-paper/chapter-02-the-accounting-shift-from-assets-to-trust',
  '/white-paper/chapter-03-velocity-of-settlement-why-liquidity-providers-should-care',
  '/white-paper/chapter-04-reusable-forward-style-collateral',
  '/white-paper/chapter-05-from-isolated-pools-to-a-federated-network',
  '/white-paper/chapter-06-the-missing-piece-network-level-liquidity-governance',
  '/white-paper/chapter-07-clc-stewardship-and-the-clc-token',
  '/white-paper/chapter-08-technical-scope-growth', '/white-paper/chapter-09-economics-for-lps',
  '/white-paper/chapter-10-comprehensive-risk-framework', '/white-paper/chapter-11-governance-mechanics',
  '/white-paper/chapter-12-lp-term-sheet-non-binding-outline',
  '/white-paper/chapter-13-jargon-plain-language-glossary', '/white-paper/chapter-14-kpis-health-indicators',
  '/white-paper/chapter-15-roadmap-indicative',
  '/white-paper/chapter-16-values-evaluation-template-for-listings-liquidity-mandates',
  '/white-paper/chapter-17-legal-compliance-note', '/white-paper/chapter-18-conclusion',
  '/white-paper/appendix-a-math-box', '/white-paper/appendix-b-fee-waterfall',
  '/white-paper/appendix-c-kpi-definitions', '/white-paper/appendix-d-launch-parameters',
  '/white-paper/appendix-e-worked-example', '/white-paper/appendix-f-dataroom-checklist', '/white-paper/archive',
]

function sourceFor(locale, route) {
  const prefix = locale === 'en' ? '' : `${locale}/`
  const stem = route === '/white-paper' ? 'white-paper/index' : route.slice(1)
  for (const extension of ['md', 'mdx']) {
    const path = resolve(pages, `${prefix}${stem}.${extension}`)
    try {
      readFileSync(path)
      return path
    } catch {}
  }
  throw new Error(`Missing ${locale} source for ${route}`)
}

function headingData(markdown) {
  const slugger = new GithubSlugger()
  const headings = []
  let inCode = false
  for (const line of markdown.split('\n')) {
    if (line.trimStart().startsWith('```')) {
      inCode = !inCode
      continue
    }
    if (inCode) continue
    const match = line.match(/^(#{1,6})\s+(.+?)\s*#*$/)
    if (!match) continue
    const title = match[2]
      .replace(/<[^>]*>/g, '')
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_~`]/g, '')
      .trim()
    headings.push({ level: match[1].length, slug: slugger.slug(title) })
  }
  return headings
}

const mapping = {}
for (const route of routes) {
  const localeHeadings = Object.fromEntries(
    locales.map((locale) => [locale, headingData(readFileSync(sourceFor(locale, route), 'utf8'))]),
  )
  const englishLevels = localeHeadings.en.map(({ level }) => level).join(',')
  for (const locale of locales.slice(1)) {
    const levels = localeHeadings[locale].map(({ level }) => level).join(',')
    if (levels !== englishLevels) {
      throw new Error(`${route}: ${locale} heading hierarchy differs from English`)
    }
  }
  mapping[route] = Object.fromEntries(
    locales.map((locale) => [locale, localeHeadings[locale].map(({ slug }) => slug)]),
  )
}

const serialized = `${JSON.stringify(mapping, null, 2)}\n`
if (process.argv.includes('--check')) {
  if (readFileSync(output, 'utf8') !== serialized) throw new Error('Heading map is stale')
  console.log(`Verified heading mappings for ${routes.length * locales.length} pages.`)
} else {
  writeFileSync(output, serialized)
  console.log(`Wrote heading mappings for ${routes.length * locales.length} pages.`)
}
