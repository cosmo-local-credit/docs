import '../../about.css'
import messages from '../../i18n/messages/it.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function ItalianSplashPage() {
  return <LocalizedSplashPage locale="it" messages={messages} />
}
