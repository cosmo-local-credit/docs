# Governance mechanics

Governance in Cosmo-Local Credit (CLC) is divided among distinct roles rather than assigned to one universal authority. This page describes governance options for CLC-compatible networks; it does not prescribe a single legal form, voting system, or organization.

Grassroots Economics Foundation (GEF) operates the public progressive web app at `cosmolocal.credit` and its supporting services. In that role, GEF may maintain interfaces and catalogs, apply minimum listing or safety standards, moderate content, restrict App features, and coordinate technical operations. Unless it expressly accepts another role for a particular arrangement, GEF is not the Issuer of a user-created Voucher, the Steward of a user-created Pool, a guarantor, insurer, custodian, lender, borrower, redeemer, or party to a user-to-user transaction.

The [Terms of Service](/governance/terms) govern use of the public App and explain these responsibilities in detail.

[Concepts and vocabulary](/introduction/concepts) maps these public roles to contract ownership, proxy administration, dependency control, catalog moderation, and fee receipt.

## Responsibility by role

- **Voucher Issuers** govern their own Offerings. They publish accurate identity, capacity, supply, valuation, expiry, presentment, fulfillment, geographic, timing, fee, restriction, and remedy information, and they remain responsible for honoring those commitments.
- **Pool Stewards** govern admission, asset curation, valuation, fees, limits, inventory, reserves, contributions, conflicts, provenance, configuration, pauses, upgrades, and any guarantee or loss-allocation mechanism for their Pools.
- **Registry and service stewards** may govern which Pools or assets appear in a registry and the operating rules for discovery, routing, monitoring, liquidity support, or other shared services. Their service authority does not automatically extend to a Pool's assets or an issuer's obligations.
- **Users** decide whether an Issuer, Voucher, Pool, quote, and transaction are acceptable and lawful for them. A registry entry or App listing is not a guarantee or endorsement.

One person or organization can hold more than one role, but it should disclose each role and the conflicts and obligations that follow from it.

## Pool-level stewardship

A Pool Steward is accountable for that Pool's published curation, valuation, limitations, fees, exchange conditions, accepted commitments, inventory policy, local disputes, repair process, and authorized governance changes. Technical authority may be distributed among a `SwapPool` owner, proxy administrator, dependency controllers, multisig signers, and fee recipients; the public rules should identify those powers rather than treating them as one role.

Repair within a Pool remains with its authorized governance and responsible parties. A Steward may correct a configuration, suspend an admission, address a local dispute, or adopt a remedy within its authority. It cannot erase public transaction history or silently discharge an issuer's separate voucher obligation.

## Network-level operations

The production CLC App and CLC Core operate shared discovery, route quoting, wallet-batch preparation, relay coordination, indexing, reconciliation, and grouped routed-exchange receipts. Network-level incidents can include stale or unavailable route data, reconciliation failures, unsupported dependencies, relay failures, and cross-Pool interoperability problems.

An operator can pause or correct its own service, refresh indexed state, exclude unsupported paths, explain a failure, and coordinate with affected Stewards. That operational role does not grant authority to change an independent Pool's rules, move its inventory, waive an issuer's commitment, or decide a local fulfillment dispute.

Current participant-initiated routing also does not authorize automatic Pool rebalancing. Any rebalancing, netting, shared-liquidity, guarantee, or insurance service would require separate opt-in authority, controls, responsible parties, and published terms.

## Registry-level stewardship

A registry or catalog steward may address incorrect listings, identity and metadata integrity, registry permissions, publication status, service failures, and correction, suspension, or appeal procedures. A registry record helps discovery; it is not itself an issuer-capacity assessment, Pool guarantee, or fulfillment record.

Correcting or removing a listing does not reverse an on-chain settlement, remove a balance, change a Pool's independently governed configuration, or discharge an outstanding commitment. Those outcomes require the authority and process applicable to the relevant contract, Pool, issuer, or legal obligation.

## Route evidence and responsibility

A routed exchange preserves the boundaries between its hops. Each Pool applies its own admission, quote, balance cap, fees, inventory, and controller powers. CLC Core groups the technical result into one receipt, but that receipt does not merge Pool governance or transfer an issuer's responsibility to the route operator.

The receipt can evidence route selection, authorization, transaction status, per-hop settlement amounts, and fees. Real-world presentment, fulfillment, satisfaction, and discharge require separate evidence and remain with the identified issuer and applicable process.

## Accountable governance structures

A CLC-compatible Pool, registry, or service can be governed by a nonprofit foundation, cooperative, community group, federation, company, multisig, public agency, institutional board, on-chain voting system, or another accountable structure. Whatever structure is chosen, participants should be able to determine:

- who has authority to make and execute decisions;
- how assets, Issuers, and participants are admitted, reviewed, suspended, or removed;
- how valuations, fees, limits, reserves, guarantees, and other material settings are established and changed;
- which dependencies or contracts can be upgraded, replaced, paused, or permanently sealed;
- how conflicts of interest are disclosed and handled;
- what records, notices, approvals, and review periods apply;
- what emergency powers exist and how their use is reviewed; and
- how participants can complain, exit, migrate, or address unresolved obligations.

Published rules should match the powers available in the relevant contracts and services. Governance should keep material decisions transparent and auditable and should not describe convertibility, liquidity, returns, insurance, reserves, or guarantees more broadly than the responsible party can actually provide.

## Technical governance options

Where token voting is appropriate, a deployment may use [OpenZeppelin Governor](https://docs.openzeppelin.com/contracts/4.x/api/governance) contracts and an interface such as Tally. Other deployments may rely on multisig approvals, cooperative resolutions, board decisions, public-agency mandates, or hybrid processes.

These tools are optional. The public App currently provides participant-initiated same-chain routing through CLC Core, but that does not imply token voting, automatic rebalancing, netting, shared insurance, network liquidity programs, or central governance by GEF. Each deployment must identify its actual decision-makers, contracts, service providers, and policies.

## Interface action and on-chain state

An App operator or registry steward may hide, flag, suspend, or remove an item from an interface. That action does not necessarily pause a smart contract, reverse a completed transaction, remove a public-blockchain record, eliminate a balance, or discharge an obligation between users. Governance plans should distinguish interface controls from the authorities that exist on-chain and from legal duties that continue off-chain.

For the broader design, see the White Paper's [Governance Mechanics chapter](/white-paper/chapter-11-governance-mechanics).
