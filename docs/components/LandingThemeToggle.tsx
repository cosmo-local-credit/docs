import { useEffect, useState } from 'react'

import '../theme-toggle.css'

type Theme = 'light' | 'dark'

function activeTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function LandingThemeToggle() {
  const [theme, setTheme] = useState<Theme>()

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

  function selectTheme(nextTheme: Theme) {
    localStorage.setItem('vocs.theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setTheme(nextTheme)
  }

  return (
    <div className="landing-theme-control" aria-label="Color theme" role="group">
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
}
