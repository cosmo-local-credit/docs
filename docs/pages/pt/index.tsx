import '../../about.css'
import messages from '../../i18n/messages/pt.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function PortugueseSplashPage() {
  return <LocalizedSplashPage locale="pt" messages={messages} />
}
