import '../../about.css'
import messages from '../../i18n/messages/fr.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function FrenchSplashPage() {
  return <LocalizedSplashPage locale="fr" messages={messages} />
}
