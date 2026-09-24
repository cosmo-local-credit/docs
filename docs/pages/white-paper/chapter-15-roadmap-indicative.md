## **15. Roadmap (Indicative)**

### **15.1 Current Public Service**

As of 24 September 2026, GEF operates the progressive web app at `cosmolocal.credit` on Gnosis Chain. The App provides account and Wallet access, a public market, and interfaces for creating or using Tokens, Vouchers, Commitment Pools, and direct Swaps. Documentation is published at `docs.cosmolocal.credit`. Specific availability depends on the App, contracts, inventory, configured limits and fees, network state, and the terms published by issuers and Pool Stewards.

### **15.2 Future and Optional Work**

The following sequence is indicative. Its labels describe design phases, not the current protocol release number, delivery dates, or commitments that any feature will be launched:



* **v1**: CLC token launch; CLC Pool; fee adapters; governance MVP (quorum + timelocks).
* **v1.1: Router SDK & registry APIs; health dashboards; Insurance Fund policy v1; opt-in rebalance intents + batch netting (cycle-finding) MVP.**
* **v1.2**: Cross-domain routing via HTLC/escrow; guarantor module; tiered limit presets.
* **v2: Retail on/off-ramps (via regulated partners), personal micro-pools;** compliance plugin marketplace; third-party audits of voucher classes.
    * **- On-ramps:** convert fiat → approved stable cash-equivalents that can seed designated pools.
    * **Off-ramps:** convert approved cash-equivalent stables → fiat via an approved off-ramp list (bank transfer, e-money issuers, and card-issuing/payment processors on major card rails), with jurisdictional KYC/attestation and geofencing where required.
    * **Principle:** CLC operators and CPP pools do not operate fiat rails; ramps are provided by licensed third parties under local regulation.

Multi-hop routing, shared insurance, the proposed CLC/stCLC/sCLC governance system, batch netting, and fiat on/off-ramps remain future or deployment-specific unless the App and applicable published terms expressly state otherwise.


---
