#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const pages = join(root, 'docs/pages')
const locales = ['ar', 'de', 'dz', 'es', 'fr', 'it', 'pt', 'sr', 'sw', 'uk']
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
  for (const path of documentationFiles(join(pages, locale))) {
    let value = readFileSync(path, 'utf8')
    value = value.replace(/(\*\*[^*\n]+\*\*)(?=\S)/g, '$1 ')
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
