## **8. Technical scope and growth**

This chapter separates the current production routing service from optional or proposed growth. A current capability described here remains specific to the public CLC App/Core deployment; it is not automatically a feature of the Protocol v1.1.0 contracts or another deployment.

The current public deployment includes:

- graph-based discovery of vouchers reachable through compatible Pools;
- authoritative pinned-block quotes for selected same-chain routes;
- per-hop Pool and protocol fee calculation, minimum outputs, and deadlines;
- complete-batch simulation, participant signing, and relayed Calibur execution;
- one same-chain transaction that reverts every route call if a call fails; and
- grouped receipts and reconciliation of per-hop settlement events.

Possible growth areas include:

- timelocked escrow or HTLC adapters for cross-domain execution where atomic settlement is unavailable;
- additional registry or policy profiles and cross-profile routing;
- opt-in Pool inventory rebalancing and batch netting;
- interfaces and policy tools for small or personal Pools;
- auditable registries for vouchers, Pools, exchange-rate methods, limits, controllers, and fees;
- deployment-specific payment-provider connectors, checkout flows, and eligibility controls;
- fungible-asset connections to external liquidity venues for rebalancing and payment liquidity; and
- policy-capped treasury conversion for adopted coverage, operating costs, or liquidity mandates.

External-market prices would not determine what an issuer owes under voucher terms. A Pool could use a guarded external reference for a fungible asset, but its published exchange-rate method, limits, fees, and inventory would govern its quotes.

### **8.1 Current route service and wider norms**

**Discovery.** CLC Core maintains a reconciled graph from configured catalogs, registry relationships, Pool parameters, fees, limits, balances, and chain events. It estimates what a session wallet can reach and marks stale data. The public configuration searches routes of up to three hops. Discovery is not an executable promise.

**Authoritative quote.** For a selected route, CLC Core reads the participating Pools at one pinned block and reproduces supported `SwapPool` arithmetic. It itemizes Pool and protocol fees, sets per-hop minimum outputs and a deadline, prepares the wallet calls, and simulates the complete batch. Unsupported tokens, quoters, wallets, or Pool conditions are refused.

**Current execution.** The participant signs a Calibur batch containing allowance reset, allowance grant, and bounded withdrawal for every hop. A relayer submits one same-chain transaction with `revertOnFailure` enabled. This provides transaction-level all-or-nothing behavior for the current route. It is not cross-chain atomicity, HTLC or escrow routing, automatic rebalancing, or netting.

**Receipts and operations.** The App groups the route under one tracking ID and records transaction status, hop order, Pools, token pairs, quoted and settled amounts, Pool fees, protocol fees, and intermediate remainders. The service monitors graph freshness, route enumeration and quote outcomes, simulation failures, reconciliation duration and corrections, and unresolved or unknown indexed members. Operational telemetry does not prove issuer fulfillment.

**Network profiles.** A client could support more than one registry root or policy profile. It would tell the participant which profile, counterparties, adapters, constraints, and responsible service operators a quote uses. A cross-profile route would need to satisfy every applicable hop's conditions.

**Path policy.** An accountable operator could exclude unsafe dependencies or counterparties and apply route-level caps, freshness requirements, and health criteria. These signals would support a decision; they would not guarantee fulfillment or protection from loss.

**Fees and limits.** The current quote itemizes Pool fees and any additional Protocol fee for every hop. The public App currently adds no separate routing-service fee. Any future service fee would be separately disclosed. Execution rejects expired quotes or breached bounds.

**Cross-domain atomicity and recovery.** Where a future route cannot use the current same-chain atomic batch and instead uses HTLCs or escrow, the service would disclose timeouts, abort paths, responsible controllers, incident procedures, and residual risks.

**Proposed batch netting and rebalancing.** An opt-in service might collect rebalance intents and search for compatible cycles or chains. It would:

1. publish a machine-readable receipt identifying executed cycles, assets, amounts, valuation timestamps, and fees;
2. enforce adopted per-period caps and counterparty policies;
3. reject activity that breaches any participating Pool's authorization, limits, or available inventory; and
4. preserve deterministic inputs and receipts for review and dispute handling.

**SDK and interface requirements.** A reusable route integration should provide deterministic quote-to-receipt mapping, per-hop invariant checks, understandable failure codes, and audit-friendly logs. The current production App/Core implementation provides these functions for its own profile. The Protocol v1.1.0 Solidity `SwapRouter` remains quote-only and does not execute the route.

#### **8.1.1 Minimum confederation compatibility specification**

A Pool ecosystem seeking cross-profile routing would publish machine-readable information for:

1. **Registry roots:** identifiers for assets, Pools, exchange-rate methods, limits, and fee policies, or one root that deterministically resolves them.
2. **Receipts:** the profile, assets in and out, amounts, quote source and timestamp, limit snapshot, fees, inventory result, and execution outcome for every hop.
3. **Operational signals:** freshness-bounded information about inventory, limit utilization, incidents, and any separately evidenced fulfillment or funded protection.
4. **Policy constraints:** allowed or denied counterparties, asset classes, adapters, and any escrow requirements.
5. **Failure codes:** deterministic explanations for rejection, expiry, limit, inventory, policy, dependency, or incident failures.

A profile could add coverage, compliance, arbitration, or other services without making them requirements for basic CPP compatibility. Each optional service would identify its responsible party, authority, scope, and terms.

### **8.2 Licensing, verification, and exit**

Protocol v1.1.0 contracts are EVM-compatible. Contracts in the Protocol repository's `src` directory are published under AGPL-3.0 except for identified unmodified third-party components that retain their own terms. Published source, ABIs, and deployment instructions support independent review but do not by themselves prove an audit, safe deployment, or legal compliance.

Each deployment would separately disclose its code version, build provenance, addresses, controller and upgrade powers, audit status, registry mirrors, and any timelock or pause protections.

A proposed **fork kit** could include:

1. deterministic deployment scripts;
2. registry snapshot and export tools;
3. a documented process for repointing route services, SDKs, and interfaces to a new registry root;
4. a Pool Steward checklist for leaving a shared registry safely; and
5. a migration checklist for outstanding vouchers, including issuer notices, presentment and fulfillment deadlines, continued access to records, and remedies.

Compatible forks can improve resilience when communities, cooperatives, public agencies, federations, multisigs, or service operators need different governance. Actual continuity still depends on contract ownership, keys, dependencies, interfaces, infrastructure, legal obligations, and third-party services.
