import { createSplashFrontmatter, LocalizedSplashPage } from '../../i18n/splash-page'
import messages from '../../i18n/messages/fil.json'

export const frontmatter = createSplashFrontmatter(messages)

export default function FilipinoSplashPage() {
  return <LocalizedSplashPage locale="fil" messages={messages} />
}
