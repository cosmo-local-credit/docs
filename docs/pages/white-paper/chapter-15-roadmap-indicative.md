## **15. Roadmap (indicative)**

### **15.1 Current foundation**

GEF operates the CLC App at `cosmolocal.credit` on Gnosis Chain. The App provides supported account and wallet access, a public Market catalog, and interfaces for tokens, vouchers, Offerings, Wants, Commitment Pools, transfers, direct Pool swaps, and routed exchanges.

Protocol v1.1.0 provides the current contract foundation: `GiftableToken`, direct `SwapPool` execution, optional registries, valuation modules, Pool token-balance caps, Pool fees, an additional protocol fee, and a quote-only Solidity `SwapRouter`.

CLC Core now provides the public App's same-chain routing and observability foundation: reconciled graph discovery, routes of up to three Pool swaps, pinned-block quotes, per-hop bounds and fees, complete-batch simulation, signed atomic Calibur execution, relay tracking, settlement reconciliation, grouped receipts, and operational metrics. Availability still depends on the interface, supported wallet and token behavior, deployed contracts, inventory, configuration, service freshness, network state, eligibility, providers, jurisdiction, and published issuer or Pool terms.

### **15.2 Proposed milestones**

These named milestones are design directions, not release numbers, delivery dates, or commitments that a feature will launch.

- **Governance Foundation:** proposed CLC governance token; proposed CLC Network Pool; fee adapters; quorum, timelock, and governance foundations.
- **Routing & Observability:** extend the current route and receipt interfaces to additional profiles; publish health dashboards and service-level reporting; develop an insurance-policy framework; design opt-in rebalance intents; and prototype batch netting.
- **Cross-Domain Risk Tools:** HTLC or escrow routing; separately governed guarantor modules; rolling, account, and tiered limit presets.
- **Regulated Access:** deployment-specific third-party payment services; personal micro-pools; compliance-service discovery; third-party audits of voucher classes.

Any payment service would be provided by separately identified third parties under the applicable jurisdiction, eligibility, fees, limits, and terms. The CLC App and Protocol v1.1.0 contracts do not themselves operate fiat rails.

Cross-domain multi-hop execution, automatic Pool rebalancing, shared insurance, the proposed CLC governance token and proposed CLC Network Pool, batch netting, personal micro-pools, and regulated payment services remain proposed or deployment-dependent until an implementation and its governing terms identify them as active. Same-chain participant-initiated routing in the public CLC App is current.
