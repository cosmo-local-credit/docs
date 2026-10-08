import type { ReactNode } from 'react'

import { SiteControls } from './components/SiteControls'

export default function Layout({ children, path }: { children: ReactNode; path: string }) {
  return (
    <>
      <SiteControls initialPath={path} />
      {children}
    </>
  )
}
