#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const pages = join(root, 'docs/pages')
const allLocales = ['ar', 'zh', 'zh-Hant', 'dz', 'de', 'es', 'fil', 'fr', 'hi', 'it', 'nl', 'pt', 'sr', 'uk', 'sw']
const requestedLocales = process.argv.slice(2)
const locales = requestedLocales.length ? requestedLocales : allLocales
for (const locale of locales) {
  if (!allLocales.includes(locale)) throw new Error(`Unsupported locale: ${locale}`)
}
const formulas = {
  'white-paper/chapter-05-from-isolated-pools-to-a-federated-network.md': [
    'τ_p = f_p · r_p',
    'F ≈ τ · Q_swap',
    'F_cash ≈ χ · F',
    'FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K',
  ],
  'white-paper/chapter-07-clc-stewardship-and-the-clc-token.md': [
    'limit_user_epoch = F_epoch × (stCLC_user / stCLC_total).',
  ],
}

const protectedNames = [
  'Cosmo-Local Credit',
  'Sarafu Network',
  'Grassroots Economics Foundation',
  'Protocol v1.1.0',
  'CLC App',
  'GEF',
]

function documentationFiles(directory) {
  const output = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) output.push(...documentationFiles(path))
    else if (/\.(?:md|mdx)$/.test(entry.name)) output.push(path)
  }
  return output
}

for (const locale of locales) {
  const localeRoot = join(pages, locale)
  for (const path of documentationFiles(localeRoot)) {
    let value = readFileSync(path, 'utf8')
    const sourcePath = join(pages, relative(localeRoot, path))
    const sourceCode = [...readFileSync(sourcePath, 'utf8').matchAll(/`([^`\n]+)`/g)]
      .map((match) => match[1])
    const translatedCode = [...value.matchAll(/`([^`\n]+)`/g)]
    if (sourceCode.length === translatedCode.length) {
      let codeIndex = 0
      value = value.replace(/`[^`\n]+`/g, () => `\`${sourceCode[codeIndex++]}\``)
    } else {
      value = value.replace(/`([^`\n]+)`/g, (_, token) => `\`${token.trim()}\``)
    }
    value = value
      .replace(/\*\*\s*([^*\n]*?\S)\s*\*\*/gu, '**$1**')
      .replace(/(?<=[\p{L}\p{N})\]])(\*\*[^*\n]+\*\*)/gu, ' $1')
      .replace(/(\*\*[^*\n]+\*\*)(?=[\p{L}\p{N}])/gu, '$1 ')
      .replace(/(?<=[\p{L}\p{N})\]])(!?\[[^\]\n]+\]\([^)\n]+\))/gu, ' $1')
      .replace(/(!?\[[^\]\n]+\]\([^)\n]+\))(?=[\p{L}\p{N}])/gu, '$1 ')
      .replace(/(?<=[\p{L}\p{N})\]])(<a\b[^>]*>[^<]+<\/a>)/gu, ' $1')
      .replace(/(<a\b[^>]*>[^<]+<\/a>)(?=[\p{L}\p{N}])/gu, '$1 ')
      .replace(/(?<=[\p{L}\p{N})\]])(`[^`\n]+`)/gu, ' $1')
      .replace(/(`[^`\n]+`)(?=[\p{L}\p{N}])/gu, '$1 ')
    for (const name of protectedNames) {
      value = value
        .replace(new RegExp(`(?<=[\\p{L}\\p{N})\\]])(${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gu'), ' $1')
        .replace(new RegExp(`(${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?=[\\p{L}\\p{N}])`, 'gu'), '$1 ')
    }
    const finalCode = [...value.matchAll(/`([^`\n]+)`/g)]
    if (sourceCode.length === finalCode.length) {
      let codeIndex = 0
      value = value.replace(/`[^`\n]+`/g, () => `\`${sourceCode[codeIndex++]}\``)
    } else {
      value = value.replace(/`([^`\n]+)`/g, (_, token) => `\`${token.trim()}\``)
    }
    value = value.replace(/[ \t]+$/gm, '')
    writeFileSync(path, value)
  }
  for (const [relativePath, protectedLines] of Object.entries(formulas)) {
    const destination = join(pages, locale, relativePath)
    const lines = readFileSync(destination, 'utf8').split('\n')
    for (const protectedLine of protectedLines) {
      const identifier = protectedLine.split(/[ =≈]/, 1)[0]
      const index = lines.findIndex((line) => line.trimStart().startsWith(identifier))
      if (index < 0) throw new Error(`${locale}/${relativePath}: missing formula ${identifier}`)
      lines[index] = protectedLine
    }
    writeFileSync(destination, lines.join('\n'))
  }
}

console.log(`Normalized typography and synchronized ${Object.values(formulas).flat().length} formulas in ${locales.length} translations.`)
