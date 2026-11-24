## Docs

Public explanations, App guidance, governance, policies, and the versioned
White Paper for Cosmo-Local Credit.

The definitive software reference is [CLC Developer Docs](https://software.cosmolocal.credit/),
maintained in [software-docs](https://github.com/cosmo-local-credit/software-docs).
Link there for contract mechanics, APIs, deployment, configuration, and service
operation instead of duplicating those instructions here.

## Prerequisites

- Node.js (use [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating): `nvm install node && nvm use node`)
- To generate every White Paper PDF on Debian or Ubuntu: `latexmk`,
  `texlive-latex-base`, `texlive-latex-recommended`, `texlive-luatex`,
  and `fonts-noto-core`.

## Installation

```bash
npm install
```

## Running

```bash
npm run dev
```

## Production build

```bash
npm run build
```

Vocs 1.4.1 prerenders the complete multilingual site in one process. The
repository's build launcher gives that process a 6144 MB V8 heap so it can use
the 8 GB available in the Cloudflare build environment without hitting Node's
default heap limit. To test with a different limit, set `CLC_VOCS_HEAP_MB`, for
example:

```bash
CLC_VOCS_HEAP_MB=5120 npm run build
```

## License

[CC-BY-SA-4.0](LICENSE).
