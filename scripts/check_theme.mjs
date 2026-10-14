#!/usr/bin/env node

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const css = readFileSync(resolve(root, 'docs/brand-theme.css'), 'utf8')
const splashCss = readFileSync(resolve(root, 'docs/about.css'), 'utf8')
const config = readFileSync(resolve(root, 'vocs.config.ts'), 'utf8')
const mermaid = readFileSync(resolve(root, 'docs/components/MermaidDiagram.tsx'), 'utf8')
const errors = []

function declarations(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const match = css.match(new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\}`))
  if (!match) return new Map()
  return new Map(
    [...match[1].matchAll(/--clc-([a-z0-9-]+):\s*([^;]+);/gi)].map((entry) => [
      entry[1],
      entry[2].trim().toLowerCase(),
    ]),
  )
}

const light = declarations(':root')
const dark = declarations(':root.dark')
const expected = {
  page: ['#f7f7f5', '#0b1210'],
  nav: ['#fefffc', '#0e1713'],
  surface: ['#ffffff', '#111a17'],
  'surface-raised': ['#fafaf8', '#17231e'],
  'green-soft': ['#f0f9f3', '#12301e'],
  'teal-soft': ['#eff9f8', '#102e2b'],
  'gold-soft': ['#fff8ed', '#302510'],
  'blue-soft': ['#eef4fc', '#12243a'],
  text: ['#111827', '#f4f7f5'],
  'text-muted': ['#4b5563', '#b7c2bc'],
  border: ['#e5e7eb', '#2b3b33'],
  'accent-fill': ['#146b34', '#70e39a'],
  'accent-text': ['#146b34', '#70e39a'],
  focus: ['#1762b8', '#70b7ff'],
}
const vocsTokens = new Set(Object.keys(expected).filter((name) => name !== 'nav'))

for (const [name, [lightValue, darkValue]] of Object.entries(expected)) {
  if (light.get(name) !== lightValue) {
    errors.push(`--clc-${name} light value must be ${lightValue}`)
  }
  if (dark.get(name) !== darkValue) {
    errors.push(`--clc-${name} dark value must be ${darkValue}`)
  }
  if (vocsTokens.has(name) && !config.includes(`themeToken('${name}')`)) {
    errors.push(`Vocs does not reference --clc-${name}`)
  }
}

if (!css.includes('var(--clc-nav)')) errors.push('navigation surfaces do not use --clc-nav')

for (const selector of [
  '.about-overview',
  '.about-hero',
  '.about-how',
  '#stewards',
  '#service-providers',
  '#voucher-users',
  '#supporters',
  '.about-impact',
  '.about-features',
  '.about-partners',
  '.about-cta',
]) {
  if (!splashCss.includes(selector)) errors.push(`missing splash theme selector ${selector}`)
}

for (const className of ['mermaid-diagram', 'mermaid-diagram__caption', 'mermaid-diagram__viewport']) {
  if (!css.includes(`.${className}`) || !mermaid.includes(`className="${className}"`)) {
    errors.push(`Mermaid theme class ${className} is not connected`)
  }
}

function luminance(hex) {
  const channels = hex
    .slice(1)
    .match(/../g)
    .map((value) => Number.parseInt(value, 16) / 255)
    .map((value) => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4))
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

function contrast(foreground, background) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
  return (values[0] + 0.05) / (values[1] + 0.05)
}

const contrastPairs = [
  ['light main text', '#111827', '#f7f7f5', 4.5],
  ['light muted text', '#4b5563', '#ffffff', 4.5],
  ['light subtle text', '#6b7280', '#ffffff', 4.5],
  ['light link', '#146b34', '#f0f9f3', 4.5],
  ['light filled control', '#ffffff', '#146b34', 4.5],
  ['light focus', '#1762b8', '#ffffff', 3],
  ['dark main text', '#f4f7f5', '#0b1210', 4.5],
  ['dark muted text', '#b7c2bc', '#111a17', 4.5],
  ['dark subtle text', '#9eaca4', '#111a17', 4.5],
  ['dark link', '#70e39a', '#12301e', 4.5],
  ['dark filled control', '#0b1210', '#70e39a', 4.5],
  ['dark focus', '#70b7ff', '#111a17', 3],
]

for (const [name, foreground, background, minimum] of contrastPairs) {
  const ratio = contrast(foreground, background)
  if (ratio < minimum) {
    errors.push(`${name} contrast is ${ratio.toFixed(2)}:1; expected at least ${minimum}:1`)
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log('Validated shared theme tokens, Vocs mappings, splash surfaces, Mermaid panels, and core contrast pairs.')
