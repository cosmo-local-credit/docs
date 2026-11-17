import type { Plugin } from 'vite'

const virtualRoutesId = '\0virtual:routes'

/**
 * Vocs 1.4.1 embeds every page's percent-encoded source in its shared route
 * manifest, once for the normal route and again for its `.html` alias. With
 * hundreds of translated pages, that optional payload can exceed static-host
 * per-file limits even though every rendered page is already lazy-loaded.
 *
 * This site does not expose Vocs' AI-copy helper, which is the only remaining
 * consumer of that source after the docs-owned mobile navigation replaced the
 * native title fallback. Remove the duplicate source from production route
 * metadata while preserving paths, lazy imports, file names, and timestamps.
 */
export function vocsLeanRoutes(): Plugin {
  let production = false

  return {
    name: 'clc:lean-vocs-routes',
    enforce: 'post',
    configResolved(config) {
      production = config.command === 'build'
    },
    transform(source, id) {
      if (!production || id !== virtualRoutesId) return

      const contentFields = source.match(/, content: "[^"]*"/g) ?? []
      if (contentFields.length === 0) {
        this.error('Vocs route manifest did not contain the expected content fields.')
      }

      return source.replace(/, content: "[^"]*"/g, '')
    },
  }
}
