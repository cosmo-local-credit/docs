import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'

import '../locale-selector.css'
import { LOCALE_BY_CODE, LOCALE_OPTIONS, type SupportedLocale } from '../i18n/locales'

export type LocaleSelectorProps = {
  locale: SupportedLocale
  label: string
  onLocaleChange: (locale: SupportedLocale) => void
}

export function LocaleSelector({ locale, label, onLocaleChange }: LocaleSelectorProps) {
  const currentIndex = LOCALE_OPTIONS.findIndex((option) => option.code === locale)
  const [activeIndex, setActiveIndex] = useState(currentIndex)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const id = useId()
  const listId = `${id}-locale-list`
  const activeOption = LOCALE_OPTIONS[activeIndex] ?? LOCALE_BY_CODE[locale]
  const selectedOption = LOCALE_BY_CODE[locale]

  useEffect(() => {
    if (!open) return

    const focusFrame = window.requestAnimationFrame(() => {
      listRef.current?.focus({ preventScroll: true })
    })
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsidePress)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('pointerdown', closeOnOutsidePress)
    }
  }, [open])

  useEffect(() => {
    if (!open) setActiveIndex(currentIndex)
  }, [currentIndex, open])

  useEffect(() => {
    if (!open) return
    document.getElementById(`${id}-locale-${activeOption.code}`)?.scrollIntoView({ block: 'nearest' })
  }, [activeOption.code, id, open])

  function openMenu(index = currentIndex) {
    setActiveIndex(index)
    setOpen(true)
  }

  function closeMenu({ restoreFocus = true } = {}) {
    setOpen(false)
    if (restoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus())
  }

  function chooseLocale(nextLocale: SupportedLocale) {
    closeMenu({ restoreFocus: nextLocale === locale })
    onLocaleChange(nextLocale)
  }

  function moveActive(offset: number) {
    setActiveIndex((index) => (index + offset + LOCALE_OPTIONS.length) % LOCALE_OPTIONS.length)
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      openMenu(currentIndex)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      openMenu(currentIndex)
    } else if (event.key === 'Home') {
      event.preventDefault()
      openMenu(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      openMenu(LOCALE_OPTIONS.length - 1)
    }
  }

  function handleListKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      moveActive(1)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      moveActive(-1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(LOCALE_OPTIONS.length - 1)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      chooseLocale(activeOption.code)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      closeMenu()
    } else if (event.key === 'Tab') {
      setOpen(false)
    } else if (event.key.length === 1 && !event.altKey && !event.ctrlKey && !event.metaKey) {
      const search = event.key.toLocaleLowerCase()
      const match = LOCALE_OPTIONS.findIndex(
        (option, index) =>
          index > activeIndex && option.nativeLabel.toLocaleLowerCase().startsWith(search),
      )
      const wrappedMatch = LOCALE_OPTIONS.findIndex((option) =>
        option.nativeLabel.toLocaleLowerCase().startsWith(search),
      )
      const nextIndex = match >= 0 ? match : wrappedMatch
      if (nextIndex >= 0) {
        event.preventDefault()
        setActiveIndex(nextIndex)
      }
    }
  }

  return (
    <div className="locale-selector" ref={rootRef}>
      <button
        aria-controls={listId}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="locale-selector__trigger"
        onClick={() => (open ? closeMenu({ restoreFocus: false }) : openMenu())}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span className="visually-hidden">{label}: </span>
        <span dir={selectedOption.direction} lang={selectedOption.code}>
          {selectedOption.nativeLabel}
        </span>
        <svg aria-hidden="true" className="locale-selector__chevron" viewBox="0 0 16 16">
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>

      {open ? (
        <div
          aria-activedescendant={`${id}-locale-${activeOption.code}`}
          aria-label={label}
          className="locale-selector__menu"
          id={listId}
          onKeyDown={handleListKeyDown}
          ref={listRef}
          role="listbox"
          tabIndex={0}
        >
          {LOCALE_OPTIONS.map((option, index) => (
            <div
              aria-selected={option.code === locale}
              className="locale-selector__option"
              data-active={index === activeIndex || undefined}
              dir={option.direction}
              id={`${id}-locale-${option.code}`}
              key={option.code}
              lang={option.code}
              onClick={() => chooseLocale(option.code)}
              onMouseMove={() => setActiveIndex(index)}
              role="option"
            >
              <span>{option.nativeLabel}</span>
              <svg aria-hidden="true" className="locale-selector__check" viewBox="0 0 16 16">
                <path d="m3.5 8 3 3 6-6" />
              </svg>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
