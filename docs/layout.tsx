import type { ReactNode } from 'react'
import { MDXProvider } from 'vocs/mdx-react'

import { SiteControls } from './components/SiteControls'
import { HeadingAliases } from './components/HeadingAliases'
import { EnglishSourceLinks } from './components/EnglishSourceLinks'
import { WhitePaperReadingContext, type SoftwareReadingNote } from './components/WhitePaperReadingContext'
import { englishPath, routeLocale } from './i18n/routes'
import softwareDocsRollout from './i18n/software-docs-rollout.json'

// MDX's wrapper adds web context inside the article without changing the paper
// source used for publication, search/LLM text, or PDF generation.
function WhitePaperWrapper({ children }: { children: ReactNode }) {
  return <WhitePaperReadingContext note={softwareDocsRollout.locales.en.readingNote}>{children}</WhitePaperReadingContext>
}

const englishComponents = { wrapper: WhitePaperWrapper }

export default function Layout({ children, path }: { children: ReactNode; path: string }) {
  const locale = routeLocale(path)
  const state = softwareDocsRollout.locales[locale]
  const note: SoftwareReadingNote | null = state.status === 'current' ? state.readingNote : null
  const components = englishPath(path) === '/white-paper' && note
    ? locale === 'en' ? englishComponents : {
      wrapper: ({ children }: { children: ReactNode }) =>
        <WhitePaperReadingContext note={note}>{children}</WhitePaperReadingContext>,
    }
    : {}
  return (
    <>
      <SiteControls initialPath={path} />
      <MDXProvider components={components}>
        <EnglishSourceLinks path={path}>
          <HeadingAliases path={path}>{children}</HeadingAliases>
        </EnglishSourceLinks>
      </MDXProvider>
    </>
  )
}
