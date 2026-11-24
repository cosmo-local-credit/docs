import type { AnchorHTMLAttributes, ElementType, ReactNode } from 'react'
import { MDXProvider } from 'vocs/mdx-react'

import { englishPath, routeLocale } from '../i18n/routes'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

// A translated page's link to its own unprefixed route is the controlling
// English source. Mark it during SSR as well as client navigation, before the
// general link localizer can turn it into a link back to the translation.
export function EnglishSourceLinks({ children, path }: { children: ReactNode; path: string }) {
  if (routeLocale(path) === 'en') return children
  const sourcePath = englishPath(path)
  return (
    <MDXProvider components={(inherited) => {
      const Native = (inherited.a ?? 'a') as ElementType<LinkProps>
      return {
        ...inherited,
        a: ({ href, ...props }: LinkProps) => (
          <Native
            {...props}
            href={href}
            {...(href === sourcePath ? { 'data-english-source': 'true', hrefLang: 'en' } : {})}
          />
        ),
      }
    }}>
      {children}
    </MDXProvider>
  )
}
