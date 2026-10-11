import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import '../mobile-navigation.css'
import { LOCALE_BY_CODE, type SupportedLocale } from '../i18n/locales'
import { englishPath } from '../i18n/routes'

type OutlineItem = {
  element: HTMLElement
  id: string
  level: number
  text: string
}

type MobilePageOutlineProps = {
  label: string
  locale: SupportedLocale
  pathname: string
}

function sameItems(current: OutlineItem[], next: OutlineItem[]) {
  return (
    current.length === next.length &&
    current.every(
      (item, index) =>
        item.element === next[index]?.element &&
        item.id === next[index]?.id &&
        item.level === next[index]?.level &&
        item.text === next[index]?.text,
    )
  )
}

function headingItems(content: HTMLElement): OutlineItem[] {
  return Array.from(content.querySelectorAll<HTMLElement>('h2, h3')).flatMap((heading) => {
    const target = heading.id ? heading : heading.querySelector<HTMLElement>('[id]')
    const text = heading.textContent?.trim()
    if (!target?.id || !text) return []
    return [{ element: target, id: target.id, level: Number(heading.tagName.slice(1)), text }]
  })
}

export function MobilePageOutline({ label, locale, pathname }: MobilePageOutlineProps) {
  const [mount, setMount] = useState<HTMLElement | null>(null)
  const [items, setItems] = useState<OutlineItem[]>([])
  const [activeId, setActiveId] = useState('')
  const [open, setOpen] = useState(false)
  const [origin, setOrigin] = useState('')
  const itemsRef = useRef<OutlineItem[]>([])
  const mountRef = useRef<HTMLElement | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  useEffect(() => {
    let frame: number | null = null

    const scan = () => {
      frame = null
      if (englishPath(window.location.pathname) === '/') {
        mountRef.current?.parentElement?.classList.remove('mobile-page-outline-header')
        mountRef.current?.remove()
        mountRef.current = null
        setMount(null)
        itemsRef.current = []
        setItems([])
        return
      }

      const content = document.querySelector<HTMLElement>('.vocs_Content')
      const title = content?.querySelector<HTMLElement>('h1')
      const nextItems = content ? headingItems(content) : []
      if (!content || !title || nextItems.length === 0) {
        mountRef.current?.parentElement?.classList.remove('mobile-page-outline-header')
        mountRef.current?.remove()
        mountRef.current = null
        setMount(null)
        if (itemsRef.current.length > 0) {
          itemsRef.current = []
          setItems([])
        }
        return
      }

      let nextMount = mountRef.current
      if (!nextMount?.isConnected) {
        nextMount = document.createElement('div')
        nextMount.className = 'mobile-page-outline-mount'
        mountRef.current = nextMount
        setMount(nextMount)
      }
      if (nextMount.parentElement !== title.parentElement) {
        nextMount.parentElement?.classList.remove('mobile-page-outline-header')
      }
      title.parentElement?.classList.add('mobile-page-outline-header')
      if (nextMount.nextElementSibling !== title) title.before(nextMount)

      if (!sameItems(itemsRef.current, nextItems)) {
        itemsRef.current = nextItems
        setItems(nextItems)
      }
    }

    const scheduleScan = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(scan)
    }
    const observer = new MutationObserver(scheduleScan)
    observer.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('popstate', scheduleScan)
    scheduleScan()

    return () => {
      observer.disconnect()
      window.removeEventListener('popstate', scheduleScan)
      if (frame !== null) window.cancelAnimationFrame(frame)
      mountRef.current?.parentElement?.classList.remove('mobile-page-outline-header')
      mountRef.current?.remove()
      mountRef.current = null
    }
  }, [pathname])

  useEffect(() => {
    if (items.length === 0) return

    let frame: number | null = null
    const updateActive = () => {
      frame = null
      const threshold = Math.min(window.innerHeight * 0.22, 180)
      let next = items[0]?.id ?? ''
      for (const item of items) {
        if (item.element.getBoundingClientRect().top > threshold) break
        next = item.id
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        next = items[items.length - 1]?.id ?? next
      }
      setActiveId((current) => (current === next ? current : next))
    }
    const scheduleUpdate = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(updateActive)
    }

    const hashId = decodeURIComponent(window.location.hash.slice(1))
    setActiveId(items.some((item) => item.id === hashId) ? hashId : items[0].id)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)
    scheduleUpdate()
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [items])

  useEffect(() => {
    if (!open) return

    const focusFrame = window.requestAnimationFrame(() => {
      rootRef.current?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true })
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

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  if (!mount || items.length === 0) return null

  return createPortal(
    <div
      className="mobile-page-outline"
      dir={LOCALE_BY_CODE[locale].direction}
      lang={locale}
      ref={rootRef}
    >
      <button
        aria-expanded={open}
        className="mobile-page-outline__trigger"
        onClick={() => setOpen((value) => !value)}
        ref={triggerRef}
        type="button"
      >
        <span>{label}</span>
        <svg aria-hidden="true" viewBox="0 0 16 16">
          <path d="m6 4 4 4-4 4" />
        </svg>
      </button>
      {open ? (
        <nav aria-label={label} className="mobile-page-outline__panel">
          {items.map((item) => (
            <a
              aria-current={item.id === activeId ? 'location' : undefined}
              data-level={item.level}
              href={`${origin}${pathname}#${item.id}`}
              key={item.id}
              onClick={(event) => {
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
                const oldURL = window.location.href
                const nextURL = `${window.location.origin}${window.location.pathname}${window.location.search}#${encodeURIComponent(item.id)}`
                window.history.pushState(null, '', nextURL)
                item.element.scrollIntoView()
                window.dispatchEvent(
                  new HashChangeEvent('hashchange', {
                    newURL: window.location.href,
                    oldURL,
                  }),
                )
                setActiveId(item.id)
                setOpen(false)
              }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      ) : null}
    </div>,
    mount,
  )
}
