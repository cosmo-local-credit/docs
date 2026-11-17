
# CODEX TASK: Update Cosmo-Local Credit Documentation to Current Production Routing State

## Objective

Bring the entire `cosmo-local-credit/docs` repository and the published `docs.cosmolocal.credit` documentation into alignment with the latest CLC App, Core, and Protocol implementations as of November 16, 2026.

Multi-hop routing has now been merged into the `master` branches of both `clc-core` and `clc-app`.

Reference merges:
- clc-core PR #46: https://github.com/cosmo-local-credit/clc-core/pull/46
- clc-app PR #446: https://github.com/cosmo-local-credit/clc-app/pull/446
- Backend routing PR #47: https://github.com/cosmo-local-credit/clc-core/pull/47
- App routing PR #449: https://github.com/cosmo-local-credit/clc-app/pull/449

The documentation currently contains outdated statements describing multi-hop routing as proposed, future, or unavailable.

Your task is to inspect, correct, reconcile, build, and validate the documentation.

Do not modify other repositories.

## 1. Inspect the Current State

Before editing:

1. Inspect the complete docs repository structure.
2. Read `README.md`, `PLAN.md`, site configuration, and documentation build instructions.
3. Read all existing routing, network, protocol, exchange, governance, and roadmap documentation.
4. Examine the merged routing pull requests and current `master` implementations in `clc-app` and `clc-core`, if accessible.
5. Verify the actual implementation before changing technical descriptions.
6. Search the entire repository for outdated terms and assertions, including:
   - "multi-hop"
   - "multi hop"
   - "routing"
   - "SwapRouter"
   - "quote-only"
   - "future work"
   - "not implemented"
   - "not available"
   - "proposed execution"
   - "direct swaps only"

Identify all affected source documents, translated pages, generated documentation, and white paper outputs.

Do not assume every search match requires modification. Distinguish historical statements from claims about the current implementation.

## 2. Update Getting Started

File:

`docs/pages/introduction/getting-started.mdx`

Required work:

- Describe multi-hop voucher exchange as a current CLC App capability.
- Explain how users discover vouchers reachable through multiple Commitment Pools.
- Explain quotation, route selection, signing, fees, execution, and receipts.
- Describe insufficient liquidity, unavailable routes, stale quotes, and failed transactions.
- Clarify that routes depend on pool configuration, inventory, permissions, and available liquidity.
- Remove descriptions suggesting that application-level multi-hop routing is only planned.
- Keep future network capabilities clearly separated.

Make this understandable to nontechnical users.

## 3. Update Network Architecture

File:

`docs/pages/protocol/network.mdx`

This is a critical correction.

Explain the actual relationship between:

- CLC App
- CLC Core routing backend
- Pool registries and discovery
- SwapPool contracts
- On-chain SwapRouter
- Wallet authorization and transaction execution
- Chain indexing and reconciliation
- Independently governed Commitment Pools

Important distinction:

The Solidity `SwapRouter` in Protocol v1.1.0 is quote-only. Multi-hop execution is coordinated at the application/backend layer through the applicable wallet and SwapPool transaction mechanisms.

Do not claim that the Solidity SwapRouter has become an atomic execution router.

Inspect and document the actual transaction batching and failure guarantees. Do not claim atomicity without verifying it.

Update diagrams and descriptions to reflect implemented routing.

Keep pool governance independent of network discovery and routing.

## 4. Update the White Paper

Update the source pages below:

`docs/pages/white-paper/index.mdx`

`docs/pages/white-paper/executive-summary.md`

`docs/pages/white-paper/chapter-05-from-isolated-pools-to-a-federated-network.md`

`docs/pages/white-paper/chapter-08-technical-scope-growth.md`

`docs/pages/white-paper/chapter-13-jargon-plain-language-glossary.md`

`docs/pages/white-paper/chapter-14-kpis-health-indicators.md`

`docs/pages/white-paper/appendix-c-kpi-definitions.md`

`docs/pages/white-paper/chapter-15-roadmap-indicative.md`

`docs/pages/white-paper/chapter-18-conclusion.md`

For each file:

- Identify outdated statements.
- Correct current implementation status.
- Explain completed routing capabilities accurately.
- Separate implemented features from proposed architecture.
- Preserve relevant research, design rationale, and architectural concepts.
- Avoid unnecessary rewriting.

In Chapter 5, distinguish participant-initiated routing from opt-in steward-authorized rebalancing.

In Chapter 8, move implemented application-level route discovery and execution out of the proposed-only category.

In Chapter 15, update the roadmap to reflect the completed routing milestone.

Keep these distinct developments in the proposed or deployment-dependent category unless verified otherwise:

- Automatic pool liquidity rebalancing
- Multilateral obligation clearing and batch netting
- Cross-domain HTLC or escrow routing
- Shared insurance or liquidity facilities
- Network-wide guarantees
- Additional network governance mechanisms

Preserve the historical integrity of White Paper v0.8 dated September 30, 2026.

Prefer a clearly dated implementation addendum or properly versioned revision rather than silently changing historical claims.

## 5. Update Concepts and User Examples

Files:

`docs/pages/introduction/concepts.mdx`

`docs/pages/introduction/example.mdx`

Add explanations of:

- Route discovery
- Route quotations
- Available liquidity
- Route depth
- Route execution
- Route fees
- Routed transaction receipts
- Failed routes
- Settlement versus fulfillment

Extend an existing example to illustrate exchange across two or more independent pools.

Show the difference between:

1. Issuing a voucher representing an Offer.
2. Expressing a Want.
3. Curating a voucher into a pool.
4. Discovering a feasible exchange route.
5. Executing the exchange.
6. Obtaining the resulting claim.
7. Actually receiving the promised goods or services.

A Want is an expression of demand, not automatically an accepted commitment.

A completed voucher transfer is not necessarily fulfillment of the underlying promise.

## 6. Clarify Stewardship and Repair

Review relevant files under:

`docs/pages/governance/`

Preserve the existing distinction between:

### Pool-level stewardship

Pool stewards govern their pool's:

- Curation
- Valuation
- Limitations
- Exchange conditions
- Accepted commitments
- Local disputes and repair
- Authorized governance changes

Repair of commitments within an individual pool remains the responsibility of its authorized stewards.

### Network-level operations

Network-level issues concern:

- Routing failures
- Interoperability
- Network availability
- Shared infrastructure
- Discovery reliability
- Cross-pool coordination

These do not automatically grant a network operator authority over individual pool obligations.

### Registry-level stewardship

Registry-level issues concern:

- Incorrect listings
- Identity and metadata integrity
- Registry permissions
- Published status and information
- Registry service failures
- Correction, suspension, and appeal procedures

Registry corrections must not be described as discharging or rewriting obligations within an independently governed pool.

Do not invent a central repair authority or impose new governance rules.

## 7. Update Technical Glossary

File:

`docs/pages/white-paper/chapter-13-jargon-plain-language-glossary.md`

Ensure precise and consistent definitions for:

- Commitment
- Voucher
- Offering
- Want
- Commitment Pool
- Pool Steward
- Registry
- Route
- Route Quote
- Routed Exchange
- Settlement
- Fulfillment
- Limiter
- Value Index
- Liquidity
- Rebalancing
- Clearing
- Repair

Explicitly distinguish the on-chain quote-only SwapRouter from the application/backend routing workflow.

Avoid treating technical transfer, accepted commitment, practical fulfillment, and legal discharge as synonyms.

## 8. Update Measurement and KPI Definitions

Files:

`docs/pages/white-paper/chapter-14-kpis-health-indicators.md`

`docs/pages/white-paper/appendix-c-kpi-definitions.md`

Add or refine definitions for:

- Route discovery attempts
- Available routes
- Quoted routes
- Route execution attempts
- Confirmed routed exchanges
- Failed routed transactions
- Route depth
- Route fees
- Per-hop settlement amounts
- Liquidity utilization
- Unavailable routes
- Reconciliation errors
- Registry and routing service availability

Distinguish whole-route volume from the sum of hop volumes.

Keep underlying commitment fulfillment separate from token settlement.

Do not invent current production KPI values, dashboards, or measured performance.

Mark proposed measurements as proposed.

## 9. Review Internationalization

Inspect:

`docs/i18n/README.md`

`docs/i18n/glossary.json`

`docs/i18n/policy-locales.json`

All relevant translated documentation and localization manifests.

Tasks:

- Identify translated pages affected by routing status changes.
- Update translation terminology consistently.
- Preserve locale-specific meaning and legal wording.
- Validate links, headings, routes, and generated translation manifests.
- Do not automatically declare a translation human-reviewed.
- Record incomplete or unreviewed translations explicitly.
- Update policy localization hashes only when the corresponding source content legitimately changes.

Use the repository's established translation workflow.

## 10. Update Generated Documentation

Inspect the existing generation pipeline, including:

`scripts/build_white_paper_tex.py`

`scripts/build_white_paper_pdfs.py`

`vocs.config.ts`

And any corresponding build scripts.

Regenerate, where applicable:

- HTML documentation
- White Paper LaTeX
- White Paper PDFs
- Localized documentation outputs
- Search indexes
- `llms.txt`
- `llms-full.txt`

Generated content must reflect corrected source documentation.

Do not hand-edit generated files when they can be regenerated from their authoritative source.

Preserve version history and established publication conventions.

## 11. Update Documentation Audit Records

File:

`PLAN.md`

Update the recorded audit baseline to reflect the November 15 production-branch merges.

Include:

- Verified App revision
- Verified Core revision
- Protocol revision or release referenced
- Date of documentation audit
- Completed source corrections
- Build and validation results
- Outstanding verification items
- Translation status
- Any unresolved contradictions

Do not mark tests, translations, deployment checks, or security reviews complete unless they have actually passed.

## 12. Validate the Entire Documentation Repository

Run the repository's existing validation commands.

At minimum:

- Markdown and MDX validation
- Documentation site build
- Internal link validation
- Navigation and page resolution checks
- Localization validation
- White Paper generation
- Generated-output consistency checks
- Search for remaining stale routing claims
- `git diff --check`

Where available, also run the repository's existing tests and documentation CI checks.

Verify that the documentation accurately distinguishes:

1. Implemented and merged code.
2. Verified deployed capabilities.
3. Configuration-dependent capabilities.
4. Proposed features.
5. Simulation-only features.

A merge into `master` establishes the code-branch status. Do not invent deployment evidence, transaction confirmations, or security validation.

## 13. Preserve Conceptual Consistency

Throughout the documentation:

- Commitment Pools remain independently governed.
- Pool stewards retain authority over local curation, valuation, limitations, exchange, and authorized repair.
- Routing connects compatible pools without transferring their governance authority.
- Offers, Wants, and vouchers are distinct.
- A recorded proposal does not imply acceptance.
- Transfer does not necessarily imply fulfillment.
- Settlement does not automatically establish delivery.
- Registry information does not guarantee performance.
- Technical interoperability does not establish institutional or legal equivalence.
- Social and ecological outcomes require evidence beyond transaction volume.

Do not introduce new token economics, regulatory claims, centralized governance powers, or guarantees.

Preserve the existing architectural and institutional intent.

## 14. Deliverables

Make the appropriate changes directly in this repository.

At completion, provide:

1. A summary of all changed files.
2. The corrections made in each file.
3. Any files intentionally left unchanged and why.
4. Documentation build and validation results.
5. Remaining outdated statements, if any.
6. Unresolved technical or deployment claims needing external confirmation.
7. Any localization work still requiring human review.
8. A proposed commit message.

Use an appropriate feature branch if possible.

Do not modify other repositories or create unrelated features.

## Definition of Done

The task is complete when:

- The documentation correctly describes merged multi-hop routing.
- Current application routing is no longer described as merely proposed.
- The Solidity SwapRouter remains correctly described as quote-only.
- User and developer explanations match verified implementation behavior.
- Pool, network, and registry governance remain clearly distinguished.
- White Paper, roadmap, glossary, examples, and KPI definitions agree.
- Translated and generated documents are updated or explicitly flagged for review.
- Relevant documentation validation passes.
- `PLAN.md` accurately records the completed work and outstanding issues.

Proceed with inspection, implementation, and validation. Do not stop at a plan or recommendations. Make the edits, run the available checks, and report the actual results.
