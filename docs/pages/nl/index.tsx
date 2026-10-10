import '../../about.css'
import messages from '../../i18n/messages/nl.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function DutchSplashPage() {
  return <LocalizedSplashPage locale="nl" messages={messages} />
}
