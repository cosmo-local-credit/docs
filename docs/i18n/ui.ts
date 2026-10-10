import en from './ui/en.json'
import ar from './ui/ar.json'
import de from './ui/de.json'
import dz from './ui/dz.json'
import es from './ui/es.json'
import fil from './ui/fil.json'
import fr from './ui/fr.json'
import hi from './ui/hi.json'
import it from './ui/it.json'
import nl from './ui/nl.json'
import pt from './ui/pt.json'
import sr from './ui/sr.json'
import sw from './ui/sw.json'
import uk from './ui/uk.json'
import zh from './ui/zh.json'
import zhHant from './ui/zh-Hant.json'
import { LOCALE_OPTIONS, type SupportedLocale } from './locales'

export type UiMessages = typeof en

const catalogs = {
  en,
  ar,
  de,
  dz,
  es,
  fil,
  fr,
  hi,
  it,
  nl,
  pt,
  sr,
  sw,
  uk,
  zh,
  'zh-Hant': zhHant,
} satisfies Record<SupportedLocale, UiMessages>

export const uiMessages = Object.fromEntries(
  LOCALE_OPTIONS.map(({ code }) => [code, catalogs[code]]),
) as Record<SupportedLocale, UiMessages>
