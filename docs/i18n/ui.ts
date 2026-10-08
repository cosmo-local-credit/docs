import ar from './ui/ar.json'
import de from './ui/de.json'
import dz from './ui/dz.json'
import en from './ui/en.json'
import es from './ui/es.json'
import fr from './ui/fr.json'
import it from './ui/it.json'
import pt from './ui/pt.json'
import sr from './ui/sr.json'
import sw from './ui/sw.json'
import uk from './ui/uk.json'
import type { SupportedLocale } from './locales'

export type UiMessages = typeof en

export const uiMessages = {
  ar,
  de,
  dz,
  en,
  es,
  fr,
  it,
  pt,
  sr,
  sw,
  uk,
} satisfies Record<SupportedLocale, UiMessages>
