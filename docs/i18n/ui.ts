import en from './ui/en.json'
import es from './ui/es.json'
import fr from './ui/fr.json'
import pt from './ui/pt.json'
import { LOCALE_OPTIONS, type SupportedLocale } from './locales'
import { splashMessages } from './messages'

export type UiMessages = typeof en

function splashUi(locale: SupportedLocale): UiMessages {
  if (locale === 'fr') return fr
  if (locale === 'es') return es
  if (locale === 'pt') return pt
  if (locale === 'en') return en
  const controls = splashMessages[locale].controls
  return {
    ...en,
    controls: {
      language: controls.language,
      colorTheme: controls.colorTheme,
      lightMode: controls.lightMode,
      darkMode: controls.darkMode,
    },
    chrome: { ...en.chrome, search: controls.search },
  }
}

export const uiMessages = Object.fromEntries(
  LOCALE_OPTIONS.map(({ code }) => [code, splashUi(code)]),
) as Record<SupportedLocale, UiMessages>
