import GithubSlugger from 'github-slugger'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'

// Use Markdown's parsed text, as rehype-slug does. Stripping every marker by
// regex changes literal '** heading **' text and breaks its rendered anchor.
export function headingData(markdown) {
  const slugger = new GithubSlugger()
  return fromMarkdown(markdown).children
    .filter((node) => node.type === 'heading')
    .map((node) => ({ level: node.depth, slug: slugger.slug(toString(node, { includeHtml: false })) }))
}

// Unparsed strong delimiters appear as asterisks in the page, often when
// CJK text touches a punctuation-ending label. Literal code is excluded.
export function literalStrongMarkers(markdown) {
  const findings = []
  function visit(node) {
    if (node.type === 'text' && node.value.includes('**')) {
      findings.push({ line: node.position.start.line, text: node.value })
    }
    for (const child of node.children ?? []) visit(child)
  }
  visit(fromMarkdown(markdown))
  return findings
}
