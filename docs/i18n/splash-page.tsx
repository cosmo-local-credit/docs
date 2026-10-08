import { AboutPage } from '../components/AboutPage'
import type { SupportedLocale } from './locales'
import type { SplashMessages } from './messages'

export function createSplashFrontmatter(messages: SplashMessages) {
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    layout: 'landing' as const,
    searchable: false,
    content: {
      horizontalPadding: '0px',
      width: '100%',
      verticalPadding: '0px',
    },
  }
}

export function LocalizedSplashPage({
  locale,
  messages,
}: {
  locale: SupportedLocale
  messages: SplashMessages
}) {
  return <AboutPage locale={locale} messages={messages} />
}
