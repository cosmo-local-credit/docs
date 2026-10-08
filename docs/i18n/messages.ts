import ar from './messages/ar.json'
import de from './messages/de.json'
import dz from './messages/dz.json'
import en from './messages/en.json'
import es from './messages/es.json'
import fr from './messages/fr.json'
import it from './messages/it.json'
import pt from './messages/pt.json'
import sr from './messages/sr.json'
import sw from './messages/sw.json'
import uk from './messages/uk.json'
import type { SupportedLocale } from './locales'

export type SplashMessages = typeof en

// This complete map is primarily a compile-time completeness check. Route modules import only
// their own catalog so visitors do not download every translation.
export const splashMessages = {
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
} satisfies Record<SupportedLocale, SplashMessages>
