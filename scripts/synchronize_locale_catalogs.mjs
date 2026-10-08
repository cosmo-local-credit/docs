#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const i18n = resolve(root, 'docs/i18n')
const locales = ['en', 'ar', 'de', 'dz', 'es', 'fr', 'it', 'pt', 'sr', 'sw', 'uk']

for (const locale of locales) {
  const splash = JSON.parse(readFileSync(resolve(i18n, `messages/${locale}.json`), 'utf8'))
  const path = resolve(i18n, `ui/${locale}.json`)
  const ui = JSON.parse(readFileSync(path, 'utf8'))
  ui.controls = {
    language: splash.controls.language,
    colorTheme: splash.controls.colorTheme,
    lightMode: splash.controls.lightMode,
    darkMode: splash.controls.darkMode,
  }
  ui.chrome.search = splash.controls.search
  writeFileSync(path, `${JSON.stringify(ui, null, 2)}\n`)
}

console.log(`Synchronized shared controls and search labels for ${locales.length} locales.`)
