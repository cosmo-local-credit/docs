import '../../about.css'
import messages from '../../i18n/messages/ar.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function ArabicSplashPage() {
  return <LocalizedSplashPage locale="ar" messages={messages} />
}
