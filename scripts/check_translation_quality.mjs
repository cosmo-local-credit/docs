#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const pages = join(root, 'docs/pages')
const requested = process.argv.slice(2)
const locales = requested.length ? requested : ['ar', 'de', 'dz', 'es', 'fr', 'hi', 'it', 'nl', 'pt', 'sr', 'sw', 'uk']
const errors = []

function filesBelow(directory) {
  if (!existsSync(directory)) return []
  const files = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...filesBelow(path))
    else if (['.md', '.mdx', '.json'].includes(extname(entry.name))) files.push(path)
  }
  return files
}

function readablePath(path) {
  return relative(root, path).replaceAll('\\', '/')
}

function inspect(locale, path) {
  const value = readFileSync(path, 'utf8')
  const display = readablePath(path)

  value.split('\n').forEach((line, index) => {
    if (line.length > 2400) {
      errors.push(`${display}:${index + 1}: implausibly long translated line (${line.length} characters)`)
    }
    const adjacentWord = line.match(/(?:^|\s)([^\s]{2,})(?:\s+\1){7,}(?:\s|$)/iu)
    if (adjacentWord) {
      errors.push(`${display}:${index + 1}: repeated token ${JSON.stringify(adjacentWord[1])}`)
    }
    const repeatedPhrase = line.match(/(.{8,80}?)(?:\s*\1){4,}/u)
    if (repeatedPhrase) {
      errors.push(`${display}:${index + 1}: repeated phrase ${JSON.stringify(repeatedPhrase[1].slice(0, 50))}`)
    }
    const repeatedCharacter = line.match(/([^\s\-_=*])\1{11,}/u)
    if (repeatedCharacter) {
      errors.push(`${display}:${index + 1}: repeated character ${JSON.stringify(repeatedCharacter[1])}`)
    }
  })

  if (locale === 'dz') {
    const unexpectedScripts = [
      ['Malayalam', /\p{Script=Malayalam}/u],
      ['Myanmar', /\p{Script=Myanmar}/u],
      ['Han', /\p{Script=Han}/u],
      ['Arabic', /\p{Script=Arabic}/u],
      ['Devanagari', /\p{Script=Devanagari}/u],
    ]
    for (const [name, pattern] of unexpectedScripts) {
      if (pattern.test(value)) errors.push(`${display}: contains unexpected ${name} text`)
    }
    if (/ཆུ་རྫིང/u.test(value)) errors.push(`${display}: contains the literal swimming-pool translation`)
  }
  if (locale === 'nl' && /\bzwemb(?:ad|aden)\p{L}*/iu.test(value)) {
    errors.push(`${display}: contains the literal swimming-pool translation`)
  }
  if (locale === 'nl' && /\b(?:de commissie|europese unie|raad van ministers|verordening \((?:eg|eeg)\))/iu.test(value)) {
    errors.push(`${display}: contains an unrelated institutional translation hallucination`)
  }
  if (locale === 'hi') {
    const unexpectedScripts = [
      ['Malayalam', /\p{Script=Malayalam}/u],
      ['Myanmar', /\p{Script=Myanmar}/u],
      ['Han', /\p{Script=Han}/u],
      ['Arabic', /\p{Script=Arabic}/u],
      ['Tibetan', /\p{Script=Tibetan}/u],
    ]
    for (const [name, pattern] of unexpectedScripts) {
      if (pattern.test(value)) errors.push(`${display}: contains unexpected ${name} text`)
    }
  }
}

for (const locale of locales) {
  const paths = [
    ...filesBelow(join(pages, locale)),
    join(root, `docs/i18n/messages/${locale}.json`),
    join(root, `docs/i18n/navigation/${locale}.json`),
    join(root, `docs/i18n/ui/${locale}.json`),
  ].filter(existsSync)
  for (const path of paths) inspect(locale, path)
}

if (errors.length) {
  console.error(`Translation quality check failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Checked generated-text failure patterns for ${locales.length} locale(s).`)
