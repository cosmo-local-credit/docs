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
    code: 'dz',
    label: 'Dzongkha',
    nativeLabel: 'རྫོང་ཁ',
    direction: 'ltr',
    intlLocale: 'dz',
  },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', direction: 'ltr', intlLocale: 'de' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', direction: 'ltr', intlLocale: 'es' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', direction: 'ltr', intlLocale: 'fr' },
  { code: 'it', label: 'Italian', nativeLabel: 'Italiano', direction: 'ltr', intlLocale: 'it' },
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
export const DOCUMENTATION_LOCALES = [DEFAULT_LOCALE, 'fr', 'es'] as const
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
    const primary = tag.trim().split(/[-_]/)[0]?.toLowerCase()
    if (isSupportedLocale(primary)) return primary
  }
  return DEFAULT_LOCALE
}
