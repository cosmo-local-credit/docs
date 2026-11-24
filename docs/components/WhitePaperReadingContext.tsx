import type { ReactNode } from 'react'

export type SoftwareReadingNote = {
  label: string
  body: string
  link: string
}

export function WhitePaperReadingContext({
  children,
  note,
}: {
  children: ReactNode
  note: SoftwareReadingNote
}) {
  return (
    <>
      <aside className="software-reference-note" aria-label={note.label}>
        <p>{note.body}</p>
        <a href="https://software.cosmolocal.credit/" hrefLang="en">{note.link}</a>
      </aside>
      {children}
    </>
  )
}
