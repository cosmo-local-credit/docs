## **15. Roadmap (indicative)**

### **15.1 Current foundation**

GEF operates the CLC App at `cosmolocal.credit` on Gnosis Chain. The App provides supported account and wallet access, a public Market catalog, and interfaces for tokens, vouchers, Offerings, Commitment Pools, transfers, and direct Pool swaps.

Protocol v1.1.0 provides the current contract foundation: `GiftableToken`, direct `SwapPool` execution, optional registries, valuation modules, Pool token-balance caps, Pool fees, an additional protocol fee, and a quote-only `SwapRouter`. Availability still depends on the interface, deployed contracts, inventory, configuration, network state, eligibility, providers, jurisdiction, and published issuer or Pool terms.

### **15.2 Proposed milestones**

These named milestones are design directions, not release numbers, delivery dates, or commitments that a feature will launch.

- **Governance Foundation:** proposed CLC governance token; proposed CLC Network Pool; fee adapters; quorum, timelock, and governance foundations.
- **Routing & Observability:** Router SDK and registry APIs; health dashboards; a proposed insurance-policy framework; opt-in rebalance intents; batch-netting prototype.
- **Cross-Domain Risk Tools:** HTLC or escrow routing; separately governed guarantor modules; rolling, account, and tiered limit presets.
- **Regulated Access:** deployment-specific third-party payment services; personal micro-pools; compliance-service discovery; third-party audits of voucher classes.

Any payment service would be provided by separately identified third parties under the applicable jurisdiction, eligibility, fees, limits, and terms. The CLC App and Protocol v1.1.0 contracts do not themselves operate fiat rails.

Multi-hop execution, shared insurance, the proposed CLC governance token and proposed CLC Network Pool, batch netting, personal micro-pools, and regulated payment services remain proposed or deployment-dependent until an implementation and its governing terms identify them as active.
