export const DEFAULT_LOCALE = 'en'

export const LOCALE_OPTIONS = [
  { code: 'en', label: 'English', nativeLabel: 'English', direction: 'ltr', intlLocale: 'en' },
  {
    code: 'ar',
    label: 'Arabic',
    nativeLabel: 'العربية',
    direction: 'rtl',
    intlLocale: 'ar-u-nu-arab',
  },
  {
    code: 'zh',
    label: 'Chinese (Simplified)',
    nativeLabel: '中文（简体）',
    direction: 'ltr',
    intlLocale: 'zh-CN',
  },
  {
    code: 'zh-Hant',
    label: 'Chinese (Traditional)',
    nativeLabel: '中文（繁體）',
    direction: 'ltr',
    intlLocale: 'zh-Hant',
  },
  {
    code: 'dz',
    label: 'Dzongkha',
    nativeLabel: 'རྫོང་ཁ',
    direction: 'ltr',
    intlLocale: 'dz',
  },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', direction: 'ltr', intlLocale: 'de' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', direction: 'ltr', intlLocale: 'es' },
  {
    code: 'fil',
    label: 'Filipino',
    nativeLabel: 'Filipino',
    direction: 'ltr',
    intlLocale: 'fil-PH',
  },
  { code: 'fr', label: 'French', nativeLabel: 'Français', direction: 'ltr', intlLocale: 'fr' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', direction: 'ltr', intlLocale: 'hi' },
  { code: 'it', label: 'Italian', nativeLabel: 'Italiano', direction: 'ltr', intlLocale: 'it' },
  { code: 'nl', label: 'Dutch', nativeLabel: 'Nederlands', direction: 'ltr', intlLocale: 'nl' },
  {
    code: 'pt',
    label: 'Portuguese',
    nativeLabel: 'Português',
    direction: 'ltr',
    intlLocale: 'pt',
  },
  { code: 'sr', label: 'Serbian', nativeLabel: 'Српски', direction: 'ltr', intlLocale: 'sr' },
  {
    code: 'uk',
    label: 'Ukrainian',
    nativeLabel: 'Українська',
    direction: 'ltr',
    intlLocale: 'uk',
  },
  {
    code: 'sw',
    label: 'Kiswahili',
    nativeLabel: 'Kiswahili',
    direction: 'ltr',
    intlLocale: 'sw',
  },
] as const

export type SupportedLocale = (typeof LOCALE_OPTIONS)[number]['code']
export type LocaleDirection = (typeof LOCALE_OPTIONS)[number]['direction']

// Splash pages support every app language. Detailed documentation is released
// one reviewed language at a time.
export const DOCUMENTATION_LOCALES = LOCALE_OPTIONS.map(({ code }) => code)
export type DocumentationLocale = (typeof DOCUMENTATION_LOCALES)[number]

export function hasLocalizedDocumentation(
  locale: SupportedLocale,
): locale is DocumentationLocale {
  return DOCUMENTATION_LOCALES.some((candidate) => candidate === locale)
}

export const LOCALIZED_LOCALES = LOCALE_OPTIONS.filter(
  (option): option is Exclude<(typeof LOCALE_OPTIONS)[number], { code: 'en' }> =>
    option.code !== DEFAULT_LOCALE,
)

export const LOCALE_BY_CODE = Object.fromEntries(
  LOCALE_OPTIONS.map((option) => [option.code, option]),
) as Record<SupportedLocale, (typeof LOCALE_OPTIONS)[number]>

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return LOCALE_OPTIONS.some((option) => option.code === value)
}

export function matchSupportedLocale(preferred: readonly string[]): SupportedLocale {
  for (const tag of preferred) {
    const normalized = tag.trim().replace(/_/g, '-').toLowerCase()
    const parts = normalized.split('-').filter(Boolean)
    if (parts[0] === 'zh') {
      if (parts.length === 1) return 'zh'
      const script = parts.slice(1).find((part) => part === 'hans' || part === 'hant')
      if (script === 'hans') return 'zh'
      if (script === 'hant') return 'zh-Hant'
      if (parts.some((part) => ['tw', 'hk', 'mo'].includes(part))) return 'zh-Hant'
      if (parts.some((part) => ['cn', 'sg', 'my'].includes(part))) return 'zh'
      continue
    }
    const primary = parts[0]
    if (primary === 'tl') return 'fil'
    if (isSupportedLocale(primary)) return primary
  }
  return DEFAULT_LOCALE
}
