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
import { LocaleSelector } from './LocaleSelector'

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

    const localizeSearch = () => {
      document
        .querySelectorAll<HTMLButtonElement>('button[class*="DesktopSearch_search"]')
        .forEach((button) => {
          button.lang = locale
          const labelNode = Array.from(button.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === 'Search...',
          )
          if (labelNode) labelNode.textContent = `${messages.search}...`
        })

      document
        .querySelectorAll<HTMLButtonElement>('button[class*="MobileSearch_searchButton"]')
        .forEach((button) => {
          button.lang = locale
          button.setAttribute('aria-label', messages.search)
        })

      document.querySelectorAll<HTMLElement>('[role="dialog"]').forEach((dialog) => {
        if (!dialog.querySelector('input[type="search"]')) return

        // Search results remain English. Only the search prompt is localized in this phase.
        dialog.lang = 'en'
        dialog.querySelectorAll<HTMLElement>('[aria-label="Search"]').forEach((element) => {
          element.lang = locale
          element.setAttribute('aria-label', messages.search)
        })
        dialog.querySelectorAll<HTMLInputElement>('input[type="search"]').forEach((input) => {
          input.lang = locale
          input.placeholder = messages.search
          input.setAttribute('aria-label', messages.search)
        })
        dialog.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6').forEach((title) => {
          if (title.textContent?.trim() !== 'Search') return
          title.lang = locale
          title.textContent = messages.search
        })
      })
    }
    const observer = new MutationObserver(localizeSearch)

    localizeSearch()
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [locale, messages.search])

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
        <LocaleSelector
          label={messages.language}
          locale={locale}
          onLocaleChange={selectLocale}
        />

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
