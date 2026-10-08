import '../../about.css'
import messages from '../../i18n/messages/de.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function GermanSplashPage() {
  return <LocalizedSplashPage locale="de" messages={messages} />
}
