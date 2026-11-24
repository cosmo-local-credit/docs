# Agent Defaults

- This repository is the public Cosmo-Local Credit documentation site.
- Treat https://software.cosmolocal.credit/ (the sibling software-docs repository) as the definitive software implementation reference. Keep participant explanations here and link there for contracts, APIs, deployment, configuration, and operations instead of maintaining duplicate specifications.
- Preserve published White Paper editions and approved legal texts when simplifying software explanations. Add current-reference links outside the versioned publication rather than silently revising its source or PDFs.
- Remove old single-structure-first framing when editing public content.
- Use broad governance and agentic language: stewards, cooperatives, public agencies, federations, multisigs, services, and other accountable structures.
- Do not introduce Regenerative Bonds branding into the docs site unless explicitly requested.
- Maintain a docs-owned LaTeX white paper source and derive the public PDF from that source.
- Keep protocol implementation claims aligned with the public contracts, but do not edit the `protocol` repository from here.
- Prefer concise, public-facing explanations with clear settlement, curation, valuation, limitation, routing, repair, and governance language.

## Release validation

- Before reporting a change ready to commit, push, or deploy, run `npm run build` and `git diff --check` against the complete proposed release tree. The normal build includes release preflight, multilingual finalization, emitted-heading checks, and the Cloudflare asset-size guard.
- A passing isolated checkout is not release evidence if the user's working tree still has failing public files. Do not substitute older files, exclude known failures, or leave an invalid published tree with an instruction for the user to remember exclusions at commit time.
- Keep unfinished translations under `docs/i18n/drafts/`, outside `docs/pages/`. Preserve user work and resolve any failing public files within the authorized scope before a release handoff.
- Never refresh hashes, promote review statuses, regenerate mappings, or disable a validator merely to hide unfinished review. Legal translations must follow the approved English source and retain their controlling-English notices; published translation corrections must keep web text and their localized TeX/PDF consistent.
- Validate the actual candidate files, use the production Node/npm versions when reproducing deployment failures, and report any remaining failed gate prominently. Do not claim the repository is release-ready while a gate fails.
