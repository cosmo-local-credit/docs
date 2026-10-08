import { readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const outputDirectory = join(root, 'docs/dist')
const localeDirections = {
  en: 'ltr',
  ar: 'rtl',
  dz: 'ltr',
  de: 'ltr',
  es: 'ltr',
  fr: 'ltr',
  it: 'ltr',
  pt: 'ltr',
  sr: 'ltr',
  uk: 'ltr',
  sw: 'ltr',
}

for (const [locale, direction] of Object.entries(localeDirections)) {
  const file = locale === 'en' ? join(outputDirectory, 'index.html') : join(outputDirectory, locale, 'index.html')
  const html = readFileSync(file, 'utf8')
  const updated = html
    .replace(/<html\s+lang="[^"]*"(?:\s+dir="[^"]*")?/, `<html lang="${locale}" dir="${direction}"`)
    .replaceAll('hrefLang=', 'hreflang=')
  if (updated === html) {
    throw new Error(`Could not assign static language metadata in ${file}`)
  }
  const expectedCanonical = `rel="canonical" href="https://docs.cosmolocal.credit/${locale === 'en' ? '' : `${locale}/`}"`
  const alternateCount = (updated.match(/rel="alternate"/g) ?? []).length
  if (!updated.includes(expectedCanonical) || alternateCount !== 12) {
    throw new Error(`Missing canonical or reciprocal language metadata in ${file}`)
  }
  writeFileSync(file, updated)
}

console.log('Assigned static lang and dir attributes to all splash-page HTML files.')
