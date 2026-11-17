import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const outputDirectory = resolve('docs/dist')
const cloudflarePagesLimit = 25 * 1024 * 1024

const files = []
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) visit(path)
    else if (entry.isFile()) files.push({ path, size: statSync(path).size })
  }
}

visit(outputDirectory)

const oversized = files.filter(({ size }) => size > cloudflarePagesLimit)
if (oversized.length > 0) {
  for (const { path, size } of oversized) {
    console.error(
      `${path.slice(outputDirectory.length + 1)} is ${(size / 1024 / 1024).toFixed(1)} MiB; ` +
        'Cloudflare Pages permits at most 25 MiB per file.',
    )
  }
  process.exit(1)
}

const largest = files.reduce((current, candidate) =>
  candidate.size > current.size ? candidate : current,
)
console.log(
  `Verified ${files.length} build files against the Cloudflare Pages 25 MiB limit; ` +
    `largest is ${largest.path.slice(outputDirectory.length + 1)} at ${(largest.size / 1024 / 1024).toFixed(1)} MiB.`,
)
