import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const defaultHeapMb = 6144
const configuredHeap = process.env.CLC_VOCS_HEAP_MB ?? String(defaultHeapMb)
const heapMb = Number.parseInt(configuredHeap, 10)

if (!Number.isSafeInteger(heapMb) || heapMb < 1024) {
  console.error(
    `CLC_VOCS_HEAP_MB must be an integer of at least 1024; received ${JSON.stringify(configuredHeap)}.`,
  )
  process.exit(1)
}

// Vocs 1.4.1 keeps every imported MDX route in one process while it
// prerenders the site. The default V8 heap is about 4 GB, which is too small
// for the complete multilingual build. Resolve the pinned package's CLI so
// only that child receives the larger heap; the finalizer remains lightweight.
const vocsEntry = fileURLToPath(import.meta.resolve('vocs'))
const vocsCli = resolve(dirname(vocsEntry), 'cli/index.js')

console.log(`Building Vocs with a ${heapMb} MB maximum heap.`)

const result = spawnSync(
  process.execPath,
  [`--max-old-space-size=${heapMb}`, vocsCli, 'build'],
  {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
  },
)

if (result.error) throw result.error
if (result.signal) {
  console.error(`Vocs build stopped by signal ${result.signal}.`)
  process.exit(1)
}

process.exit(result.status ?? 1)
