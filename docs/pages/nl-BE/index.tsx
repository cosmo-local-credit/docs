import '../../about.css'
import messages from '../../i18n/messages/nl-BE.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function FlemishSplashPage() {
  return <LocalizedSplashPage locale="nl-BE" messages={messages} />
}
