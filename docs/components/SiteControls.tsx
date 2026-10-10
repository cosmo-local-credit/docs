import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import '../theme-toggle.css'
import headingMap from '../i18n/heading-map.json'
import {
  DEFAULT_LOCALE,
  hasLocalizedDocumentation,
  LOCALE_BY_CODE,
  LOCALE_OPTIONS,
  matchSupportedLocale,
  type SupportedLocale,
} from '../i18n/locales'
import {
  englishPath,
  isKnownDocumentationPath,
  localizedPath,
  routeLocale,
} from '../i18n/routes'
import { uiMessages } from '../i18n/ui'
import { LocaleSelector } from './LocaleSelector'

type Theme = 'light' | 'dark'
type HeadingMap = Record<string, Partial<Record<SupportedLocale, string[]>>>

const headings = headingMap as HeadingMap
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
  const preferred = navigator.languages?.length
    ? navigator.languages
    : navigator.language
      ? [navigator.language]
      : []
  return matchSupportedLocale(preferred)
}

function setDocumentLocale(locale: SupportedLocale) {
  document.documentElement.lang = locale
  document.documentElement.dir = LOCALE_BY_CODE[locale].direction
}

function destinationHash(
  pathname: string,
  currentLocale: SupportedLocale,
  nextLocale: SupportedLocale,
) {
  const currentHash = decodeURIComponent(window.location.hash.slice(1))
  if (!currentHash) return ''
  const sourcePath = englishPath(pathname)
  if (sourcePath === '/') return `#${encodeURIComponent(currentHash)}`
  const pageHeadings = headings[sourcePath]
  const current = pageHeadings?.[currentLocale] ?? []
  const target = pageHeadings?.[nextLocale] ?? []
  const index = current.indexOf(currentHash)
  return index >= 0 && target[index] ? `#${encodeURIComponent(target[index])}` : ''
}

function localizeInternalLinks(locale: SupportedLocale) {
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    if (link.dataset.englishSource !== undefined || link.hasAttribute('download')) return
    const rawHref = link.getAttribute('href')
    if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('//')) return
    let url: URL
    try {
      url = new URL(rawHref, window.location.origin)
    } catch {
      return
    }
    if (url.origin !== window.location.origin || !isKnownDocumentationPath(url.pathname)) return
    const nextPath = localizedPath(url.pathname, locale)
    const nextHref = `${nextPath}${url.search}${url.hash}`
    if (rawHref !== nextHref) link.setAttribute('href', nextHref)
  })
}

function replaceExactText(root: ParentNode, source: string, target: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node = walker.nextNode()
  while (node) {
    const current = node.textContent
    if (current?.trim() === source) {
      const leading = current.match(/^\s*/)?.[0] ?? ''
      const trailing = current.match(/\s*$/)?.[0] ?? ''
      const next = `${leading}${target}${trailing}`
      if (current !== next) node.textContent = next
    }
    node = walker.nextNode()
  }
}

function localizeChrome(locale: SupportedLocale) {
  const { chrome } = uiMessages[locale]
  const replacements: Array<[string, string]> = [
    ['Search', chrome.search],
    ['Search...', `${chrome.search}...`],
    ['Close search dialog', chrome.closeSearchDialog],
    ['Toggle detail view', chrome.toggleDetailView],
    ['Reset search', chrome.resetSearch],
    ['Navigate', chrome.navigate],
    ['Select', chrome.select],
    ['Close', chrome.close],
    ['Reset', chrome.reset],
    ['Menu', chrome.menu],
    ['On this page', chrome.onThisPage],
    ['Previous', chrome.previous],
    ['Next', chrome.next],
    ['Copy', chrome.copy],
    ['Copied', chrome.copied],
    ['Skip to content', chrome.skipToContent],
    ['Ask in ChatGPT', chrome.askInChatGPT],
    ['Copy page for LLMs', chrome.copyPageForLlms],
    ['Last updated:', chrome.lastUpdated],
    ['Code group', chrome.codeGroup],
    ['Terminal', chrome.terminal],
    ['File', chrome.file],
    ['Top', chrome.top],
    ['Scroll to top', chrome.scrollToTop],
    ['Page Not Found', chrome.pageNotFound],
    ['The page you were looking for could not be found.', chrome.notFoundDescription],
    ['Go to Home Page', chrome.goHome],
  ]

  const chromeSelector = [
    '[class*="TopNav"]',
    '[class*="Sidebar"]',
    '[class*="Outline"]',
    '[class*="Footer"]',
    '[class*="AiCta"]',
    '[class*="CopyButton"]',
    '[class*="CodeTitle"]',
    '[class*="NotFound"]',
    '[class*="SkipLink"]',
    '[role="dialog"]',
    '[role="tablist"]',
  ].join(',')
  const chromeRoots = document.querySelectorAll<HTMLElement>(chromeSelector)
  for (const root of chromeRoots) {
    for (const [source, target] of replacements) replaceExactText(root, source, target)
  }

  document
    .querySelectorAll<HTMLElement>(`:is(${chromeSelector}) [aria-label], :is(${chromeSelector})[aria-label]`)
    .forEach((element) => {
    const value = element.getAttribute('aria-label')
    const replacement = replacements.find(([source]) => source === value)?.[1]
    if (replacement && replacement !== value) element.setAttribute('aria-label', replacement)
    })
  document.querySelectorAll<HTMLInputElement>('input[type="search"]').forEach((input) => {
    if (input.lang !== locale) input.lang = locale
    if (input.placeholder !== chrome.search) input.placeholder = chrome.search
    if (input.getAttribute('aria-label') !== chrome.search) {
      input.setAttribute('aria-label', chrome.search)
    }
  })
  document.querySelectorAll<HTMLButtonElement>('button[class*="DesktopSearch_search"]').forEach(
    (button) => {
      if (button.lang !== locale) button.lang = locale
      replaceExactText(button, 'Search...', `${chrome.search}...`)
    },
  )
  document.querySelectorAll<HTMLElement>('[role="dialog"]').forEach((dialog) => {
    if (dialog.querySelector('input[type="search"]') && dialog.lang !== locale) {
      dialog.lang = locale
    }
  })

  const noResultsPattern = /^No results for\s+[“\"]?(.*?)[”\"]?$/
  document.querySelectorAll<HTMLElement>('[role="dialog"] li').forEach((item) => {
    const value = item.textContent?.trim() ?? ''
    const match = value.match(noResultsPattern)
    if (match) {
      const next = `${chrome.noResultsFor} “${match[1]}”`
      if (item.textContent !== next) item.textContent = next
    }
  })

  localizeInternalLinks(locale)
}

export function SiteControls({ initialPath }: { initialPath: string }) {
  const initialLocale = routeLocale(initialPath)
  const [locale, setLocale] = useState(initialLocale)
  const [theme, setTheme] = useState<Theme>()
  const [desktopTarget, setDesktopTarget] = useState<Element | null>(null)
  const messages = uiMessages[locale]

  useEffect(() => {
    const pathname = window.location.pathname
    const explicitLocale = routeLocale(pathname)
    let englishSourceVisit = false
    try {
      englishSourceVisit =
        explicitLocale === DEFAULT_LOCALE &&
        window.sessionStorage.getItem('clc.docs.englishSource') === englishPath(pathname)
      if (englishSourceVisit) window.sessionStorage.removeItem('clc.docs.englishSource')
    } catch {
      // Saved-language routing remains available without session storage.
    }
    setLocale(explicitLocale)
    setDocumentLocale(explicitLocale)

    if (
      !englishSourceVisit &&
      explicitLocale === DEFAULT_LOCALE &&
      isKnownDocumentationPath(pathname)
    ) {
      const preferred = readStoredLocale() ?? readBrowserLocale()
      const sourcePath = englishPath(pathname)
      if (
        preferred !== DEFAULT_LOCALE &&
        (sourcePath === '/' || hasLocalizedDocumentation(preferred))
      ) {
        window.location.replace(
          `${localizedPath(pathname, preferred)}${window.location.search}${window.location.hash}`,
        )
        return
      }
    }

    setDesktopTarget(document.querySelector('.vocs_DesktopTopNav'))
  }, [])

  useEffect(() => {
    const preserveEnglishSource = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a') : null
      if (!target || target.dataset.englishSource === undefined) return
      try {
        const url = new URL(target.href, window.location.origin)
        if (url.origin === window.location.origin) {
          window.sessionStorage.setItem('clc.docs.englishSource', englishPath(url.pathname))
          if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
            event.preventDefault()
            window.location.assign(url.href)
          }
        }
      } catch {
        // The link still works when session storage is unavailable.
      }
    }
    document.addEventListener('click', preserveEnglishSource, true)
    return () => document.removeEventListener('click', preserveEnglishSource, true)
  }, [])

  useEffect(() => {
    const updateTheme = () => setTheme(activeTheme())
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const preserveManualTheme = () => {
      try {
        const stored = window.localStorage.getItem('vocs.theme')
        if (stored === 'light' || stored === 'dark') {
          document.documentElement.classList.toggle('dark', stored === 'dark')
        }
      } catch {
        // System preference continues to apply when storage is unavailable.
      }
    }
    const observer = new MutationObserver(updateTheme)
    updateTheme()
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    media.addEventListener('change', preserveManualTheme)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', preserveManualTheme)
    }
  }, [])

  useEffect(() => {
    let frame: number | null = null
    const update = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(() => {
        frame = null
        localizeChrome(locale)
      })
    }
    const observer = new MutationObserver(update)
    localizeChrome(locale)
    observer.observe(document.body, {
      attributeFilter: ['aria-label', 'placeholder'],
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    })
    return () => {
      observer.disconnect()
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [locale])

  function selectTheme(nextTheme: Theme) {
    try {
      window.localStorage.setItem('vocs.theme', nextTheme)
    } catch {
      // The selected theme still applies to the current page.
    }
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setTheme(nextTheme)
  }

  function selectLocale(nextLocale: SupportedLocale) {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    } catch {
      // A full route change still applies the manual choice for this visit.
    }
    if (nextLocale === locale) return
    const pathname = window.location.pathname
    const sourcePath = englishPath(pathname)
    const hasEquivalentPage = sourcePath === '/' || hasLocalizedDocumentation(nextLocale)
    const destination = hasEquivalentPage
      ? localizedPath(pathname, nextLocale)
      : localizedPath('/', nextLocale)
    const hash = hasEquivalentPage ? destinationHash(pathname, locale, nextLocale) : ''
    window.location.replace(
      `${destination}${window.location.search}${hash}`,
    )
  }

  function control(className: string) {
    return (
      <div className={className}>
        <LocaleSelector
          label={messages.controls.language}
          locale={locale}
          onLocaleChange={selectLocale}
        />
        <div
          aria-label={messages.controls.colorTheme}
          className="landing-theme-control"
          role="group"
        >
          <button
            aria-label={messages.controls.lightMode}
            aria-pressed={theme === 'light'}
            className="landing-theme-control__button"
            onClick={() => selectTheme('light')}
            type="button"
          >
            <span aria-hidden="true">☀</span>
          </button>
          <button
            aria-label={messages.controls.darkMode}
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
      {desktopTarget
        ? createPortal(control('site-controls site-controls--desktop'), desktopTarget)
        : null}
      {control('site-controls site-controls--mobile')}
    </>
  )
}
