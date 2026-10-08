import '../../about.css'
import messages from '../../i18n/messages/sw.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function KiswahiliSplashPage() {
  return <LocalizedSplashPage locale="sw" messages={messages} />
}
