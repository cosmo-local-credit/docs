export type HeadingAliasRegistry = Record<string, Record<string, readonly string[]>>

export function canonicalHeadingId(
  registry: HeadingAliasRegistry,
  pathname: string,
  id: string,
): string {
  const path = pathname.replace(/\/+$/, '') || '/'
  return Object.entries(registry[path] ?? {})
    .find(([, previous]) => previous.includes(id))?.[0] ?? id
}
