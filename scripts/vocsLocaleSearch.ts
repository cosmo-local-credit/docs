import type { Plugin } from 'vite'

const virtualSearchId = '\0virtual:searchIndex'

/**
 * Vocs 1.4.1 exposes one virtual search-index loader. This compatibility
 * plugin keeps that public component intact while selecting the static index
 * for the locale in the current URL.
 */
export function vocsLocaleSearch(): Plugin {
  let production = false

  return {
    name: 'clc:locale-search',
    enforce: 'post',
    configResolved(config) {
      production = config.command === 'build'
    },
    transform(source, id) {
      if (id !== virtualSearchId) return

      if (production) {
        return `
const localeFromPath = () => {
  const locale = location.pathname.split('/')[1]
  return ${JSON.stringify(['fr', 'es', 'pt', 'it'])}.includes(locale) ? locale : 'en'
}
export const getSearchIndex = async () => {
  const locale = localeFromPath()
  const response = await fetch('/.vocs/search-index-' + locale + '.json')
  if (!response.ok) throw new Error('Could not load the ' + locale + ' search index')
  return JSON.stringify(await response.json())
}
`
      }

      const renamed = source.replace(
        'export const getSearchIndex',
        'const getCompleteSearchIndex',
      )
      return `
import MiniSearch from 'minisearch'
${renamed}
const localeFromPath = () => {
  const locale = location.pathname.split('/')[1]
  return ${JSON.stringify(['fr', 'es', 'pt', 'it'])}.includes(locale) ? locale : 'en'
}
const options = {
  fields: ['title', 'titles', 'text'],
  storeFields: ['href', 'html', 'isPage', 'text', 'title', 'titles'],
}
export const getSearchIndex = async () => {
  const complete = MiniSearch.loadJSON(await getCompleteSearchIndex(), options)
  const locale = localeFromPath()
  const prefix = locale === 'en' ? null : '/' + locale + '/'
  const records = complete.search(MiniSearch.wildcard, { combineWith: 'OR' })
    .filter(({ href }) => {
      const localized = /^\\/(?:ar|de|dz|es|fr|it|pt|sr|sw|uk)(?:\\/|#)/.test(href)
      return prefix ? href.startsWith(prefix) : !localized
    })
    .map(({ id, href, html, isPage, text, title, titles }) => ({
      id, href, html, isPage, text, title, titles,
    }))
  const index = new MiniSearch(options)
  index.addAll(records)
  return JSON.stringify(index.toJSON())
}
`
    },
  }
}
