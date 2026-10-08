import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import '../theme-toggle.css'
import {
  DEFAULT_LOCALE,
  getSplashPath,
  LOCALE_BY_CODE,
  LOCALE_OPTIONS,
  matchSupportedLocale,
  type SupportedLocale,
} from '../i18n/locales'
import type { SplashMessages } from '../i18n/messages'

type Theme = 'light' | 'dark'

const LOCALE_STORAGE_KEY = 'clc.docs.locale'

function activeTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function readStoredLocale(): SupportedLocale | null {
  try {
    const locale = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return LOCALE_OPTIONS.some((option) => option.code === locale)
      ? (locale as SupportedLocale)
      : null
  } catch {
    return null
  }
}

function readBrowserLocale(): SupportedLocale {
  const preferred =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : navigator.language
        ? [navigator.language]
        : []
  return matchSupportedLocale(preferred)
}

function persistLocale(locale: SupportedLocale) {
  const option = LOCALE_BY_CODE[locale]
  document.documentElement.lang = locale
  document.documentElement.dir = option.direction
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // The selected route still works when storage is unavailable.
  }
}

function localeDestination(locale: SupportedLocale) {
  return `${getSplashPath(locale)}${window.location.search}${window.location.hash}`
}

type LandingControlsProps = {
  locale: SupportedLocale
  messages: SplashMessages['controls']
}

export function LandingControls({ locale, messages }: LandingControlsProps) {
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
    setPortalTarget(document.querySelector('.vocs_DesktopTopNav'))

    const markEnglishSearch = () => {
      document
        .querySelectorAll('[class*="vocs_"][class*="Search"]')
        .forEach((element) => element.setAttribute('lang', 'en'))
    }
    const observer = new MutationObserver(markEnglishSearch)

    markEnglishSearch()
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onRoot = window.location.pathname === '/'
    if (!onRoot) {
      persistLocale(locale)
      return
    }

    const preferredLocale = readStoredLocale() ?? readBrowserLocale()
    persistLocale(preferredLocale)
    if (preferredLocale !== DEFAULT_LOCALE) {
      window.location.replace(localeDestination(preferredLocale))
    }
  }, [locale])

  function selectTheme(nextTheme: Theme) {
    try {
      window.localStorage.setItem('vocs.theme', nextTheme)
    } catch {
      // The theme still applies for this page when storage is unavailable.
    }
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setTheme(nextTheme)
  }

  function selectLocale(nextLocale: SupportedLocale) {
    if (nextLocale === locale) return
    persistLocale(nextLocale)
    window.location.replace(localeDestination(nextLocale))
  }

  function control(className: string) {
    return (
      <div className={className}>
        <label className="landing-language-control">
          <span className="visually-hidden">{messages.language}</span>
          <select
            aria-label={messages.language}
            onChange={(event) => selectLocale(event.target.value as SupportedLocale)}
            value={locale}
          >
            {LOCALE_OPTIONS.map((option) => (
              <option dir={option.direction} key={option.code} lang={option.code} value={option.code}>
                {option.nativeLabel}
              </option>
            ))}
          </select>
        </label>

        <div aria-label={messages.colorTheme} className="landing-theme-control" role="group">
          <button
            aria-label={messages.lightMode}
            aria-pressed={theme === 'light'}
            className="landing-theme-control__button"
            onClick={() => selectTheme('light')}
            type="button"
          >
            <span aria-hidden="true">☀</span>
          </button>
          <button
            aria-label={messages.darkMode}
            aria-pressed={theme === 'dark'}
            className="landing-theme-control__button"
            onClick={() => selectTheme('dark')}
            type="button"
          >
            <span aria-hidden="true">☾</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {control('landing-controls landing-controls--mobile')}
      {portalTarget
        ? createPortal(control('landing-controls landing-controls--portal'), portalTarget)
        : null}
    </>
  )
}
