import '../../about.css'
import messages from '../../i18n/messages/es.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function SpanishSplashPage() {
  return <LocalizedSplashPage locale="es" messages={messages} />
}
