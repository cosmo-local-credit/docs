#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { join, relative, resolve, sep } from 'node:path'
import { runInNewContext } from 'node:vm'
import MiniSearch from 'minisearch'

const root = resolve(import.meta.dirname, '..')
const dist = join(root, 'docs/dist')
const pages = join(root, 'docs/pages')
const i18n = join(root, 'docs/i18n')
const siteUrl = 'https://docs.cosmolocal.credit'
const locales = ['en', 'ar', 'zh', 'zh-Hant', 'dz', 'de', 'es', 'fil', 'fr', 'hi', 'it', 'nl', 'pt', 'sr', 'uk', 'sw']
const documentationLocales = [...locales]
const localized = new Set(locales.filter((locale) => locale !== 'en'))
const directions = { en: 'ltr', ar: 'rtl', zh: 'ltr', 'zh-Hant': 'ltr', dz: 'ltr', de: 'ltr', es: 'ltr', fil: 'ltr', fr: 'ltr', hi: 'ltr', it: 'ltr', nl: 'ltr', pt: 'ltr', sr: 'ltr', uk: 'ltr', sw: 'ltr' }
const documentationPaths = [
  '/introduction/getting-started', '/introduction/concepts', '/introduction/example', '/introduction/history',
  '/protocol/overview', '/protocol/smart-contracts', '/protocol/network',
  '/governance/mechanics', '/governance/terms', '/white-paper', '/white-paper/executive-summary',
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
  '/white-paper/appendix-e-worked-example', '/white-paper/appendix-f-dataroom-checklist',
  '/white-paper/archive',
]
const allPaths = ['/', ...documentationPaths]
const searchOptions = {
  fields: ['title', 'titles', 'text'],
  storeFields: ['href', 'html', 'isPage', 'text', 'title', 'titles'],
}
const chineseSegmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })

function tokenizeChinese(value) {
  const words = [...chineseSegmenter.segment(String(value))]
    .filter(({ isWordLike }) => isWordLike)
    .map(({ segment }) => segment.toLocaleLowerCase('zh-CN'))
  const tokens = [...words]
  for (let start = 0; start < words.length; start += 1) {
    for (let length = 2; length <= 4 && start + length <= words.length; length += 1) {
      tokens.push(words.slice(start, start + length).join(''))
    }
  }
  return tokens
}

function pathForLocale(path, locale) {
  if (locale === 'en') return path
  return path === '/' ? `/${locale}/` : `/${locale}${path}`
}

function localeAndSourcePath(pathname) {
  const first = pathname.split('/')[1]
  if (localized.has(first)) {
    const source = '/' + pathname.split('/').slice(2).join('/')
    return { locale: first, sourcePath: source === '/' ? '/' : source.replace(/\/$/, '') }
  }
  return { locale: 'en', sourcePath: pathname === '/' ? '/' : pathname.replace(/\/$/, '') }
}

function htmlFiles(directory) {
  const output = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) output.push(...htmlFiles(path))
    else if (entry.name === 'index.html') output.push(path)
  }
  return output
}

function finalizeHtml() {
  for (const locale of locales) {
    const route = pathForLocale('/', locale)
    const file = route === '/' ? join(dist, 'index.html') : join(dist, locale, 'index.html')
    if (!existsSync(file)) throw new Error(`Missing prerendered splash route: ${route}`)
  }
  for (const sourcePath of documentationPaths) {
    for (const locale of documentationLocales) {
      const route = pathForLocale(sourcePath, locale)
      const file = join(dist, route.replace(/^\//, ''), 'index.html')
      if (!existsSync(file)) throw new Error(`Missing prerendered route: ${route}`)
    }
  }
  for (const locale of locales.filter((candidate) => !documentationLocales.includes(candidate))) {
    for (const section of ['introduction', 'protocol', 'governance', 'white-paper']) {
      rmSync(join(dist, locale, section), { force: true, recursive: true })
    }
  }
  for (const file of htmlFiles(dist)) {
    const relativeFile = relative(dist, file).split(sep).join('/')
    const pathname = relativeFile === 'index.html' ? '/' : `/${relativeFile.replace(/\/index\.html$/, '')}`
    const { locale, sourcePath } = localeAndSourcePath(pathname)
    if (!allPaths.includes(sourcePath)) continue

    let html = readFileSync(file, 'utf8')
    html = html.replace(/<html\b([^>]*)>/i, (_match, attributes) => {
      const clean = attributes.replace(/\s(?:lang|dir)=(?:"[^"]*"|'[^']*')/gi, '')
      return `<html${clean} lang="${locale}" dir="${directions[locale]}">`
    })
    html = html.replace(/<link\b(?=[^>]*\brel=(?:"(?:canonical|alternate)"|'(?:canonical|alternate)'))[^>]*>\s*/gi, '')
    const alternateLocales = sourcePath === '/' ? locales : documentationLocales
    const links = [
      `<link rel="canonical" href="${siteUrl}${pathForLocale(sourcePath, locale)}">`,
      ...alternateLocales.map((candidate) => `<link rel="alternate" hreflang="${candidate}" href="${siteUrl}${pathForLocale(sourcePath, candidate)}">`),
      `<link rel="alternate" hreflang="x-default" href="${siteUrl}${sourcePath}">`,
    ].join('')
    html = html.replace('</head>', `${links}</head>`)
    writeFileSync(file, html)
  }
}

function validateLocaleBootstrap() {
  const html = readFileSync(join(dist, 'index.html'), 'utf8')
  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(
    (match) => match[1],
  )
  const bootstrap = scripts.find((script) => script.includes('clc.docs.locale'))
  if (!bootstrap) throw new Error('Built root page is missing the locale bootstrap script')

  const cases = [
    { languages: ['zh-TW'], expected: '/zh-Hant/' },
    { languages: ['zh-Hant'], expected: '/zh-Hant/' },
    { languages: ['zh-Hans-TW'], expected: '/zh/' },
    { languages: ['zh-Hant-CN'], expected: '/zh-Hant/' },
    { languages: ['zh-CN'], expected: '/zh/' },
    { languages: ['tl-PH'], expected: '/fil/' },
    { languages: ['sw-KE'], expected: '/sw/' },
    { languages: ['ja-JP', 'zh-HK'], expected: '/zh-Hant/' },
    { languages: ['ja-JP'], expected: null },
    { languages: ['ar-EG'], stored: 'fr', expected: '/fr/' },
  ]

  for (const testCase of cases) {
    let destination = null
    const location = {
      hash: '',
      pathname: '/',
      search: '',
      replace(value) {
        destination = value
      },
    }
    runInNewContext(bootstrap, {
      document: { documentElement: { dir: '', lang: '' } },
      localStorage: {
        getItem(key) {
          return key === 'clc.docs.locale' ? (testCase.stored ?? null) : null
        },
      },
      location,
      navigator: {
        language: testCase.languages[0] ?? '',
        languages: testCase.languages,
      },
      sessionStorage: { getItem: () => null },
    })
    if (destination !== testCase.expected) {
      throw new Error(
        `Locale bootstrap routed ${testCase.languages.join(', ')} to ${destination ?? 'English'}; expected ${testCase.expected ?? 'English'}`,
      )
    }
  }

  console.log(`Verified locale bootstrap routing for ${cases.length} browser-language cases.`)
}

function buildSearchIndexes() {
  const searchDir = join(dist, '.vocs')
  const sourceName = readdirSync(searchDir).find((name) => /^search-index-[a-f0-9]{8}\.json$/.test(name))
  if (!sourceName) throw new Error('Vocs did not emit a complete search index')
  const sourceFile = join(searchDir, sourceName)
  const complete = MiniSearch.loadJSON(readFileSync(sourceFile, 'utf8'), searchOptions)
  const records = complete.search(MiniSearch.wildcard, { combineWith: 'OR' })

  for (const locale of documentationLocales) {
    const prefix = locale === 'en' ? null : `/${locale}/`
    const selected = records
      .filter(({ href }) => {
        const isLocalized = /^\/(?:ar|zh|zh-Hant|dz|de|es|fil|fr|hi|it|nl|pt|sr|uk|sw)(?:\/|#)/.test(href)
        return prefix ? href.startsWith(prefix) : !isLocalized
      })
      .map(({ id, href, html, isPage, text, title, titles }) => ({ id, href, html, isPage, text, title, titles }))
    if (!selected.length) throw new Error(`Search index for ${locale} is empty`)
    if (selected.some(({ href }) => locale === 'en'
      ? /^\/(?:ar|zh|zh-Hant|dz|de|es|fil|fr|hi|it|nl|pt|sr|uk|sw)(?:\/|#)/.test(href)
      : !href.startsWith(`/${locale}/`))) {
      throw new Error(`Search index for ${locale} contains another locale`)
    }
    const options = locale.startsWith('zh')
      ? { ...searchOptions, tokenize: tokenizeChinese }
      : searchOptions
    const index = new MiniSearch(options)
    index.addAll(selected)
    writeFileSync(join(searchDir, `search-index-${locale}.json`), JSON.stringify(index.toJSON()))
  }

  if (!/^search-index-(?:en|ar|zh|zh-Hant|dz|de|es|fil|fr|hi|it|nl|pt|sr|uk|sw)\.json$/.test(sourceName)) {
    rmSync(sourceFile)
  }
}

function validateHeadingAnchors() {
  const mapping = JSON.parse(readFileSync(join(i18n, 'heading-map.json'), 'utf8'))
  for (const [route, localeMappings] of Object.entries(mapping)) {
    for (const locale of documentationLocales) {
      const pathname = pathForLocale(route, locale)
      const file = join(dist, pathname.replace(/^\//, ''), 'index.html')
      const html = readFileSync(file, 'utf8')
      for (const anchor of localeMappings[locale]) {
        if (!html.includes(`id="${anchor}"`)) {
          throw new Error(`${pathname}: built page is missing mapped heading #${anchor}`)
        }
      }
    }
  }
}

function sourceFileForRoute(locale, route) {
  const base = locale === 'en' ? pages : join(pages, locale)
  const stem = route === '/white-paper' ? 'white-paper/index' : route.slice(1)
  for (const extension of ['.md', '.mdx']) {
    const candidate = join(base, `${stem}${extension}`)
    if (existsSync(candidate)) return candidate
  }
  throw new Error(`Missing ${locale} source for ${route}`)
}

function titleAndSummary(markdown) {
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.replace(/[*_`]/g, '') ?? 'Cosmo-Local Credit'
  const withoutFrontmatter = markdown.replace(/^---[\s\S]*?---\s*/, '')
  const summary = withoutFrontmatter
    .split(/\n\s*\n/)
    .map((part) => part.replace(/^#+\s+.*$/gm, '').replace(/<[^>]+>/g, '').trim())
    .find((part) => part && !part.startsWith('import ') && !part.startsWith('>')) ?? ''
  return { title, summary: summary.replace(/\s+/g, ' ') }
}

async function buildLlmsFiles() {
  for (const locale of documentationLocales) {
    const messages = JSON.parse(readFileSync(join(i18n, `messages/${locale}.json`), 'utf8'))
    const outputDir = locale === 'en' ? dist : join(dist, locale)
    await mkdir(outputDir, { recursive: true })
    const listing = [
      `# ${messages.metadata.title}`,
      '',
      `> ${messages.metadata.description}`,
      '',
      '## Docs',
      '',
      `- [${messages.metadata.title}](${pathForLocale('/', locale)}): ${messages.metadata.description}`,
    ]
    const full = [`# ${messages.metadata.title}`, '', `> ${messages.metadata.description}`, '']
    for (const route of documentationPaths) {
      const source = readFileSync(sourceFileForRoute(locale, route), 'utf8')
      const { title, summary } = titleAndSummary(source)
      listing.push(`- [${title}](${pathForLocale(route, locale)}): ${summary}`)
      full.push(source.trim(), '')
    }
    writeFileSync(join(outputDir, 'llms.txt'), `${listing.join('\n')}\n`)
    writeFileSync(join(outputDir, 'llms-full.txt'), `${full.join('\n')}\n`)
  }
}

finalizeHtml()
validateLocaleBootstrap()
buildSearchIndexes()
validateHeadingAnchors()
await buildLlmsFiles()

const fingerprint = createHash('sha256')
  .update(documentationLocales.map((locale) => readFileSync(join(dist, '.vocs', `search-index-${locale}.json`))).join(''))
  .digest('hex')
console.log(`Finalized ${locales.length} splash routes and ${documentationPaths.length * documentationLocales.length} documentation routes; search fingerprint ${fingerprint.slice(0, 12)}.`)
