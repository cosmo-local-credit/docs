import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import { MDXProvider } from 'vocs/mdx-react'

import registry from '../i18n/heading-aliases.json'
import type { HeadingAliasRegistry } from '../i18n/heading-aliases'

const aliasesByPath = registry as HeadingAliasRegistry
type HeadingProps = HTMLAttributes<HTMLHeadingElement>
type NativeHeading = ElementType<HeadingProps>

// Render compatibility anchors in both server HTML and client navigation.
// Vocs strips raw HTML from .md files, so source-level spans cannot do this.
export function HeadingAliases({ children, path }: { children: ReactNode; path: string }) {
  const aliases = aliasesByPath[path.replace(/\/+$/, '') || '/']
  if (!aliases) return children

  const wrap = (Native: NativeHeading) => function AliasedHeading({ id, children, ...props }: HeadingProps) {
    return (
      <Native {...props} id={id}>
        {(aliases[id ?? ''] ?? []).map((previous) =>
          <span aria-hidden="true" className="legacy-heading-anchor" id={previous} key={previous} />,
        )}
        {children}
      </Native>
    )
  }

  return (
    <MDXProvider components={(inherited) => ({
      ...inherited,
      h1: wrap((inherited.h1 ?? 'h1') as NativeHeading),
      h2: wrap((inherited.h2 ?? 'h2') as NativeHeading),
      h3: wrap((inherited.h3 ?? 'h3') as NativeHeading),
    })}>
      {children}
    </MDXProvider>
  )
}
