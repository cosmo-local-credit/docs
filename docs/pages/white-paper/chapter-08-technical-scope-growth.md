## **8. Technical Scope & Growth**

Priorities:



* **Routing protocols across** Sarafu.Network pools; SDKs and index/limit discovery APIs.
* **Bridges to external DEX** registries; Time-locked contract/escrow for cross-domain settlement.
* Support for the long tail of **micro-pools** (including personal pools UX).
* **Auditable registries** for vouchers, pools, limits, values, and fee policies.
* **Fiat/stable on/off-ramp connectors**: a partner/rail registry (by jurisdiction), checkout/invoice flows, and UI “network profiles” that can geofence features and require attestations for cash-equivalent redemptions.
* **Bridges to external liquidity venues** (DEXs and other registries) for fungible assets (e.g., stable cash-equivalents and major liquid tokens), using time-locked escrow/HTLC where cross-domain atomicity is unavailable. Purpose: rebalancing, on/off-ramp liquidity, and risk-managed settlement support - not pricing of redeemable vouchers by speculative curves.
* **Treasury conversion & settlement acceleration**: policy-capped conversion of cash-eligible fee assets (E_cash) held in the CLC Pool into stables/fiat when needed for insurance/ops and to maintain off-ramp liquidity—while prioritizing in-network settlement and using liquidity mandates/rebalancing to reduce settlement latency.

**DEX Interop Boundary:** DEX adapters are for fungible liquidity management (stables, rebalancing, exit ramps), not for defining the value index of redeemable commitments. Voucher pricing remains governed by each pool’s Value Index + limits + inventories; DEX prices may be used only as an auxiliary reference for fungible assets and must be guarded against manipulation (caps, TWAP/medianization, deny-lists, and incident pauses).


### **8.1 Router & SDK Norms**

**Public Discovery.** Routers must query public registries of voucher listings, value indices, limits, fees, and inventories; cache with freshness bounds.

**Multi-Profile Discovery (Confederation).** Routers/SDKs MAY support multiple registry roots (“network profiles”) and must surface to users/pools which profile a route uses (registry root, policy constraints, bridge adapters). Cross-profile routes must satisfy the strictest applicable caps/escrow requirements and must be auditable hop-by-hop (quote → receipt mapping).

**Path Policies.** Deny-list toxic routes (known bad bridges/pools) and enforce per-route caps and minimum health scores (reserve adequacy, SLA adherence).

**Fees & Caps.** Routing fees expressed per-hop; routers may add a small discoverability fee within policy bounds; hard caps apply under stress (utilization spikes).

**Atomicity & Escrow.** Prefer atomic multi-hop where possible; otherwise use HTLC/escrow with conservative timeouts and explicit abort paths.

**Batch Netting & Rebalancing.** Routers may also perform batch netting runs across opted-in pools by collecting rebalance intents and searching for multilateral cycles/chains that satisfy each pool’s constraints. Norms:

(i) publish a machine-readable “rebalance receipt” summary (cycles executed, total off-set value, fees charged),

(ii) enforce conservative per-epoch caps and health-score gating,

(iii) reject any route that violates a pool’s allow/deny policies or exceeds limiter windows/caps,

(iv) keep batch execution auditable (deterministic inputs → receipts) to support dispute resolution.

**SDK Guarantees.** Provide (i) deterministic quote → receipt mapping, (ii) invariant checks per hop, (iii) human-readable failure codes, (iv) audit-friendly logs.

**8.1.1 Minimum Confederation Compatibility Contract (MCC)**

To be routable across profiles (and thus across confederated networks), a pool ecosystem MUST publish the following in a machine-readable way:

1) Registry roots: canonical addresses for voucher registry, pool registry, value index registry, limiter registry, and fee policy registry (or a single root that deterministically resolves these).

2) Receipt standard: every hop MUST emit/return a receipt that references (a) registry root/profile used, (b) voucher/token in/out, (c) value index version or timestamp, (d) limiter window/cap snapshot, (e) fees charged, and (f) inventory check result.

3) Health endpoints: per-pool signals required for routing policies—reserve adequacy, SLA adherence, limiter utilization, and incident state—plus freshness bounds.

4) Policy constraints: explicit allow/deny policies (bridges, counterparties, voucher classes) and required escrow/HTLC requirements for non-atomic hops.

5) Failure codes: human-readable, deterministic failure codes so clients can explain why a route was refused (limits, inventory, policy, escrow, incident pause).

Networks MAY implement additional features (insurance overlays, compliance hooks, arbitration modules), but these MUST remain profile-scoped and MUST NOT be required for basic CPP compatibility.


### **8.2 Licensing & Transparency**

All contracts are **EVM-compatible**, open-source under **AGPL-3.0**, with reproducible builds, published ABIs, and audit reports. Canonical addresses and registries are timelocked and mirrored for independent verification. Community contributions are welcomed under the same license.

**Fork Kit (Required Deliverable).** The project will maintain a “fork kit” that includes:
 (i) deterministic deployment scripts; (ii) registry snapshot/export tooling; (iii) a documented procedure to re-point routers/SDKs to a new registry root; and (iv) a pool steward checklist for exiting canonical registries safely (including fee-hook redirection options where supported).

**Example: Minimum Exit Checklist (publish + test annually):**



1. How to export registry snapshots + receipts.
2. How to repoint routers/SDKs to a new root.
3. How to migrate insurance scope (or explicitly terminate it).
4. How to honor outstanding vouchers during migration (notice-to-redeem + remedy options).

**Why AGPL + Fork Kit:** Confederation rewards compatibility. Networks that fork and improve routers, registry tooling, bridge adapters, or observability can still route with CLC if they remain CPP-compatible - expanding settlement paths and strengthening the whole mesh. AGPL ensures improvements to the shared plumbing remain shareable across the confederation, reducing systemic risk and duplication.


---
