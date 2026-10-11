import {
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'

import '../mobile-navigation.css'
import { LOCALE_BY_CODE, type SupportedLocale } from '../i18n/locales'
import { navigationMessages, sidebarForLocale, type SidebarItem } from '../i18n/navigation'
import { englishPath, localizedPath } from '../i18n/routes'

type MobileSiteNavigationProps = {
  label: string
  locale: SupportedLocale
  pathname: string
}

function normalizePath(path: string) {
  return path === '/' ? path : path.replace(/\/+$/, '')
}

function itemContainsPath(item: SidebarItem, pathname: string): boolean {
  if (item.link && normalizePath(item.link) === normalizePath(pathname)) return true
  return item.items?.some((child) => itemContainsPath(child, pathname)) ?? false
}

export function MobileSiteNavigation({ label, locale, pathname }: MobileSiteNavigationProps) {
  const groups = useMemo(() => sidebarForLocale(locale), [locale])
  const activeGroup = groups.findIndex((group) => itemContainsPath(group, pathname))
  const defaultGroup = activeGroup >= 0 ? activeGroup : 0
  const [expandedGroup, setExpandedGroup] = useState<number | null>(defaultGroup)
  const [open, setOpen] = useState(false)
  const [origin, setOrigin] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const id = useId()
  const panelId = `${id}-site-navigation`
  const direction = LOCALE_BY_CODE[locale].direction
  const overviewLabel = navigationMessages[locale].items.overview
  const homePath = localizedPath('/', locale)
  const homeIsActive = englishPath(pathname) === '/'

  function followLink(event: ReactMouseEvent<HTMLAnchorElement>, path: string) {
    setOpen(false)
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    event.preventDefault()
    event.stopPropagation()
    window.location.assign(`${window.location.origin}${path}`)
  }

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  useEffect(() => {
    setExpandedGroup(defaultGroup)
    setOpen(false)
  }, [defaultGroup, pathname])

  useEffect(() => {
    if (!open) return

    const focusFrame = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true })
    })
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      setOpen(false)
      window.requestAnimationFrame(() => triggerRef.current?.focus())
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('pointerdown', closeOnOutsidePress)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <div className="mobile-site-navigation" ref={rootRef}>
      <button
        aria-controls={panelId}
        aria-expanded={open}
        aria-label={label}
        className="site-controls__icon-button"
        onClick={() => setOpen((value) => !value)}
        ref={triggerRef}
        type="button"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open ? (
        <nav
          aria-label={label}
          className="mobile-site-navigation__panel"
          dir={direction}
          id={panelId}
          lang={locale}
          ref={panelRef}
        >
          <a
            aria-current={homeIsActive ? 'page' : undefined}
            className="mobile-site-navigation__home"
            dir="ltr"
            href={origin ? `${origin}${homePath}` : homePath}
            onClick={(event) => followLink(event, homePath)}
          >
            Cosmo-Local Credit
          </a>

          <div className="mobile-site-navigation__groups">
            {groups.map((group, index) => {
              const expanded = expandedGroup === index
              const groupId = `${id}-site-navigation-group-${index}`
              const items = group.link
                ? [{ text: overviewLabel, link: group.link }, ...(group.items ?? [])]
                : (group.items ?? [])

              return (
                <section className="mobile-site-navigation__group" key={group.text}>
                  <button
                    aria-controls={groupId}
                    aria-expanded={expanded}
                    className="mobile-site-navigation__group-trigger"
                    onClick={() => setExpandedGroup(expanded ? null : index)}
                    type="button"
                  >
                    <span>{group.text}</span>
                    <svg aria-hidden="true" viewBox="0 0 16 16">
                      <path d="m4 6 4 4 4-4" />
                    </svg>
                  </button>
                  {expanded ? (
                    <div className="mobile-site-navigation__items" id={groupId}>
                      {items.map((item) => {
                        if (!item.link) return null
                        const active = normalizePath(item.link) === normalizePath(pathname)
                        return (
                          <a
                            aria-current={active ? 'page' : undefined}
                            href={origin ? `${origin}${item.link}` : item.link}
                            key={item.link}
                            onClick={(event) => followLink(event, item.link!)}
                          >
                            {item.text}
                          </a>
                        )
                      })}
                    </div>
                  ) : null}
                </section>
              )
            })}
          </div>
        </nav>
      ) : null}
    </div>
  )
}
