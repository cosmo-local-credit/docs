import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fromMarkdown } from 'mdast-util-from-markdown'

const root = resolve(import.meta.dirname, '..')
const registry = JSON.parse(readFileSync(resolve(root, 'docs/i18n/software-docs-rollout.json')))
const headings = JSON.parse(readFileSync(resolve(root, 'docs/i18n/heading-map.json')))
const aliases = JSON.parse(readFileSync(resolve(root, 'docs/i18n/heading-aliases.json')))
const built = process.argv.includes('--built')
let count = 0

for (const [locale, state] of Object.entries(registry.locales)) {
  if (state.status !== 'current') continue
  const prefix = locale === 'en' ? '' : `/${locale}`
  for (const [route, entry] of Object.entries(registry.source.routes)) {
    const source = readFileSync(resolve(root, `docs/pages${prefix}`, entry.source), 'utf8')
    function visit(node) {
      if (node.type === 'link' && /^(?:\/(?!\/)|#)/.test(node.url)) {
        const url = new URL(node.url, `https://docs.cosmolocal.credit${prefix}${route}`)
        if (url.hash) {
          const parts = url.pathname.split('/').filter(Boolean)
          const targetLocale = registry.locales[parts[0]] ? parts.shift() : 'en'
          const targetRoute = `/${parts.join('/')}`
          const id = decodeURIComponent(url.hash.slice(1))
          const previous = Object.values(aliases[url.pathname] ?? {}).flat()
          assert.ok(headings[targetRoute]?.[targetLocale]?.includes(id) || previous.includes(id),
            `${prefix}${route}: unknown heading destination ${node.url}`)
          if (built) {
            const path = url.pathname.replace(/^\/+|\/+$/g, '')
            const html = readFileSync(resolve(root, 'docs/dist', path, 'index.html'), 'utf8')
            assert.ok(html.includes(`id="${id}"`), `${prefix}${route}: heading absent from emitted destination ${node.url}`)
          }
          count++
        }
      }
      for (const child of node.children ?? []) visit(child)
    }
    visit(fromMarkdown(source))
  }
}
console.log(`Verified ${count} internal heading links in current software guides${built ? ' against emitted destination HTML' : ''}.`)
