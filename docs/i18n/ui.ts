import en from './ui/en.json'
import de from './ui/de.json'
import es from './ui/es.json'
import fr from './ui/fr.json'
import it from './ui/it.json'
import pt from './ui/pt.json'
import sw from './ui/sw.json'
import uk from './ui/uk.json'
import { LOCALE_OPTIONS, type SupportedLocale } from './locales'
import { splashMessages } from './messages'

export type UiMessages = typeof en

function splashUi(locale: SupportedLocale): UiMessages {
  if (locale === 'de') return de
  if (locale === 'fr') return fr
  if (locale === 'es') return es
  if (locale === 'pt') return pt
  if (locale === 'it') return it
  if (locale === 'sw') return sw
  if (locale === 'uk') return uk
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
