import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import '../theme-toggle.css'

type Theme = 'light' | 'dark'

function activeTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

type LandingThemeToggleProps = {
  portalToDesktopNav?: boolean
}

export function LandingThemeToggle({ portalToDesktopNav = false }: LandingThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>()
  const [portalTarget, setPortalTarget] = useState<Element | null>(null)

  useEffect(() => {
    const updateTheme = () => setTheme(activeTheme())
    const observer = new MutationObserver(updateTheme)

    updateTheme()
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!portalToDesktopNav) return

    setPortalTarget(document.querySelector('.vocs_DesktopTopNav'))
  }, [portalToDesktopNav])

  function selectTheme(nextTheme: Theme) {
    localStorage.setItem('vocs.theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setTheme(nextTheme)
  }

  const control = (
    <div
      className={`landing-theme-control${portalToDesktopNav ? ' landing-theme-control--portal' : ''}`}
      aria-label="Color theme"
      role="group"
    >
      <button
        aria-label="Use light mode"
        aria-pressed={theme === 'light'}
        className="landing-theme-control__button"
        onClick={() => selectTheme('light')}
        type="button"
      >
        <span aria-hidden="true">☀</span>
      </button>
      <button
        aria-label="Use dark mode"
        aria-pressed={theme === 'dark'}
        className="landing-theme-control__button"
        onClick={() => selectTheme('dark')}
        type="button"
      >
        <span aria-hidden="true">☾</span>
      </button>
    </div>
  )

  if (portalToDesktopNav) {
    return portalTarget ? createPortal(control, portalTarget) : null
  }

  return control
}
