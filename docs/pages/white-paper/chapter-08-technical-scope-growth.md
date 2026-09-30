## **8. Technical scope and growth**

This chapter describes optional or proposed work. It is not a list of features guaranteed to be present in the current CLC App or Protocol v1.1.0.

Possible work areas include:

- execution routing across compatible Pools, with registry, quote, limit, fee, and inventory discovery;
- timelocked escrow or HTLC adapters for cross-domain execution where atomic settlement is unavailable;
- interfaces and policy tools for small or personal Pools;
- auditable registries for vouchers, Pools, exchange-rate methods, limits, controllers, and fees;
- deployment-specific payment-provider connectors, checkout flows, and eligibility controls;
- fungible-asset connections to external liquidity venues for rebalancing and payment liquidity; and
- policy-capped treasury conversion for adopted coverage, operating costs, or liquidity mandates.

External-market prices would not determine what an issuer owes under voucher terms. A Pool could use a guarded external reference for a fungible asset, but its published exchange-rate method, limits, fees, and inventory would govern its quotes.

### **8.1 Proposed route-service and SDK norms**

**Discovery.** A proposed route service would query identified registries for asset admission, exchange-rate methods, limits, fees, inventory, incidents, and controller information. Cached records would include freshness bounds and source identifiers.

**Network profiles.** A client could support more than one registry root or policy profile. It would tell the participant which profile, counterparties, adapters, constraints, and responsible service operators a quote uses. A cross-profile route would need to satisfy every applicable hop's conditions.

**Path policy.** An accountable operator could exclude unsafe dependencies or counterparties and apply route-level caps, freshness requirements, and health criteria. These signals would support a decision; they would not guarantee fulfillment or protection from loss.

**Fees and limits.** A quote would itemize Pool fees, any additional current Protocol fee, and any separately proposed routing or service fee. Execution would reject expired quotes or breached bounds.

**Atomicity and recovery.** Multi-hop execution would be atomic where possible. Where it used HTLCs or escrow, the service would disclose timeouts, abort paths, responsible controllers, incident procedures, and residual risks.

**Proposed batch netting and rebalancing.** An opt-in service might collect rebalance intents and search for compatible cycles or chains. It would:

1. publish a machine-readable receipt identifying executed cycles, assets, amounts, valuation timestamps, and fees;
2. enforce adopted per-period caps and counterparty policies;
3. reject activity that breaches any participating Pool's authorization, limits, or available inventory; and
4. preserve deterministic inputs and receipts for review and dispute handling.

**SDK requirements.** An SDK for executed routes would provide deterministic quote-to-receipt mapping, per-hop invariant checks, understandable failure codes, and audit-friendly logs. The current Protocol v1.1.0 `SwapRouter` provides quotes only; it does not execute these proposed routes.

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
