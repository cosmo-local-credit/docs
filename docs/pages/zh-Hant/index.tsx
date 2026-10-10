import '../../about.css'
import messages from '../../i18n/messages/zh-Hant.json'
import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'

export const frontmatter = createSplashFrontmatter(messages)

export default function TraditionalChineseSplashPage() {
  return <LocalizedSplashPage locale="zh-Hant" messages={messages} />
}
