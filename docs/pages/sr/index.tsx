import '../../about.css'
import messages from '../../i18n/messages/sr.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function SerbianSplashPage() {
  return <LocalizedSplashPage locale="sr" messages={messages} />
}
