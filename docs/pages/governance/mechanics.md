# Governance Mechanics

Governance in Cosmo-Local Credit (CLC) is divided among distinct roles rather than assigned to one universal authority. This page describes governance options for CLC-compatible networks; it does not prescribe a single legal form, voting system, or organization.

Grassroots Economics Foundation (GEF) operates the public progressive web app at `cosmolocal.credit` and its supporting services. In that role, GEF may maintain interfaces and catalogs, apply minimum listing or safety standards, moderate content, restrict App features, and coordinate technical operations. Unless it expressly accepts another role for a particular arrangement, GEF is not the Issuer of a user-created Voucher, the Steward of a user-created Pool, a guarantor, insurer, custodian, lender, borrower, redeemer, or party to a user-to-user transaction.

The [Terms of Service](/governance/terms) govern use of the public App and explain these responsibilities in detail.

## Responsibility by role

- **Voucher Issuers** govern their own offerings. They publish accurate identity, capacity, supply, valuation, expiry, redemption, geographic, timing, fee, restriction, and remedy information, and they remain responsible for honoring those commitments.
- **Pool Stewards** govern admission, asset curation, valuation, fees, limits, inventory, reserves, contributions, conflicts, provenance, configuration, pauses, upgrades, and any guarantee or loss-allocation mechanism for their Pools.
- **Registry and service stewards** may govern which Pools or assets appear in a registry and the rules and fees for routing, monitoring, liquidity support, or other shared services.
- **Users** decide whether an Issuer, Voucher, Pool, quote, and transaction are acceptable and lawful for them. A registry entry or App listing is not a guarantee or endorsement.

One person or organization can hold more than one role, but it should disclose each role and the conflicts and obligations that follow from it.

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

These tools are optional. Discussion of token voting, shared insurance, network-wide routing, netting, or liquidity programs does not mean that every capability is active in the public App or governed by GEF. Each deployment must identify its actual decision-makers, contracts, service providers, and policies.

## Interface action and on-chain state

An App operator or registry steward may hide, flag, suspend, or remove an item from an interface. That action does not necessarily pause a smart contract, reverse a completed transaction, remove a public-blockchain record, eliminate a balance, or discharge an obligation between users. Governance plans should distinguish interface controls from the authorities that exist on-chain and from legal duties that continue off-chain.

For the broader design, see the White Paper's [Governance Mechanics chapter](/white-paper/chapter-11-governance-mechanics).
