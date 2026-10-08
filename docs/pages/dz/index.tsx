import '../../about.css'
import messages from '../../i18n/messages/dz.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function DzongkhaSplashPage() {
  return <LocalizedSplashPage locale="dz" messages={messages} />
}
