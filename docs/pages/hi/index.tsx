import '../../about.css'
import messages from '../../i18n/messages/hi.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function HindiSplashPage() {
  return <LocalizedSplashPage locale="hi" messages={messages} />
}
