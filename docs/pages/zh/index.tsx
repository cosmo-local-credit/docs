import '../../about.css'
import messages from '../../i18n/messages/zh.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function SimplifiedChineseSplashPage() {
  return <LocalizedSplashPage locale="zh" messages={messages} />
}
