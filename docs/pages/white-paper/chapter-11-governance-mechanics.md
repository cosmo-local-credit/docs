## **11. Governance Mechanics**



* **Constitutional Values**: Care for People, Care for the Environment, Fairness, Reciprocity, Non-Dominance, Resilience.
* **Proposal Types**: Fee/limit/index edits; liquidity mandates; pool listings/delistings; insurance payouts; parameter guardrails.
* **Process**: Intake → Evaluation (template) → Risk review → On-chain vote (staked CLC) → Timelock → Execution.
* **Quorum & Thresholds**: Parameterized per class (e.g., higher for value-index edits and emergency pauses).
* **Delegation**: Optional delegate system with public mandates and recall.
* **Circuit Breakers**: Emergency pause with criteria; automatic resume conditions; post-mortems required.
* **Transparency**: All edits/flows logged; dashboards for fulfillment, reserves, utilization, routing, guarantors.

**Registry Governance (Listing / Suspension / Delisting).** The CLC DAO maintains the canonical discovery registries for vouchers, tokens, and pools. By on-chain vote (staked CLC) and timelocked execution (except for narrowly-scoped emergency actions) the DAO may add, update, suspend, or remove (“delist”) registry entries. Voucher, token, and pool issuers acknowledge that registry status is conditional: repeated non-fulfillment of published Redemption SLAs, fraud/misrepresentation, unsafe contract behavior, or persistent violation of CLC constitutional values/principles may result in suspension or delisting (and official routers may route-around delisted entries by default). Where feasible, delisting follows notice to cure (remedy) period to decision, with an appeal path; emergency delisting requires a public incident report and automatic review/sunset.

**Prohibited Listings (non-negotiable):**



1. Instruments that directly fund or incentivize ecological destruction beyond agreed boundaries, violence/weaponization, coercive extraction, or systemic abuse.
2. Any voucher class lacking clear redemption terms, accountability, and remedy pathways.

The prohibited list is versioned, publicly auditable, and requires Q3 + T3 to change.





### **11.1 Index & Limit Governance**

**Timelocked Edits.** All Value Index and Swap Limiter parameter edits execute after a public timelock. Emergency changes must meet stricter quorum and include automatic sunset or review.

**Quorum & Thresholds.** Higher quorum/threshold for (a) Value Index base changes and (b) global Limit Tier changes; medium for per-pool third party; standard for fee tweaks.

**Publish Feeds.** For each pool: publish on-chain index variables, oracle sources/medians, update cadence, limit windows/caps, and failure modes (safe constants).

**Emergency Pause Criteria.** Pre-declare conditions (eg, oracle outage, ≥80% limit utilization with redemption SLA breaches, invariant failure) and automated resume checks, with mandatory post-mortems.


**Ex. Public Index Feed (per pool, per voucher)**

• Symbol: e.g., Maize_50kg@IssuerY

• Reference Unit: “Index Unit” (IUX)

• Valuation: 30.000 IUX

• Source: Median(Oracles: local market survey, ministry bulletin, CLC baseline)

• Update Cadence: daily at 18:00 EAT; Timelock: 24h

• Failure Mode: freeze at last-good, widen limiter bands by +20%, pause at 72h outage

• Rationale: published notes + diff from prior update

• Signers: multisig addresses; quorum threshold





### **11.2 Insurance Fund Runbook**

**Triggers.** (i) Issuer default/non-fulfillment; (ii) Pool insolvency (reserve shortfall vs. bonds); (iii) Bridge/escrow loss impacting redeemability.

**Assessment.** Convene risk committee; reconcile receipts, vault balances, guarantor bonds, and redemption tickets; publish incident ledger.

**Loss Waterfall.** (1) Offending issuer bonds/guarantor stakes → (2) Pool-level reserves → (3) Network Insurance Fund → (4) Temporary haircuts on affected vouchers (policy-capped) → (5) Clawbacks in case of fraud/abuse.

**Haircuts & Make-Whole.** Define per-class haircut caps and time-boxed make-whole plans (from future fees/rakes) with transparent accounting.

**Clawbacks.** Mandatory for proven fraud/abuse; governance-ratified claims; legal follow-up as required.

**Reporting.** Publish public post-mortem, remediation timeline, and parameter changes (limits, fees, routes).

**Important:** Insurance coverage is **limited**. Some incidents receive no payout after caps are reached; see the Loss Waterfall and exclusions below.

**When the DAO Will *Not* Make You Whole.**
The Insurance Fund **does not** cover: (a) redemptions outside the published SLA/venues; (b) haircuts **beyond** policy caps; (c) losses from using delisted/denied routes; (d) fraudulent claims or missing evidence; (e) jurisdictions where payout is restricted. Payouts, if any, follow the waterfall and may be **zero** after caps are reached. 

**Make-Whole Schedule (policy-bound, published on-chain):**

1) Claims are paid in this order: (a) issuer/guarantor bonds → (b) pool reserves → (c) network insurance.

2) If residual shortfall remains: apply haircut ≤ H_cap per incident (see Appendix D).

3) Haircut recovery plan:



* - 25% of recovered value applied monthly until made whole OR
* - 12-month maximum make-whole horizon; remainder becomes a recorded loss with public postmortem.

4) Every claim produces a receipt: incident_id, affected vouchers, haircut %, recovery plan, and appeal window.


### **11.3 Guarantor Framework**

This section clarifies who guarantees what (issuer vs. pool vs. third-party guarantors), define the collateral/bonding instruments behind those guarantees, and standardize triggers + payout paths. This is the backbone of the curation market: pools compete on trust, terms, and guarantees - without implying that the network automatically guarantees every voucher.

**Baseline Guarantee: Issuer Responsibility (Gift-Card Analogy).**

• Each voucher is first and foremost guaranteed by its issuer: the issuer commits to deliver the specified good/service (or declared cash-equivalent) within the voucher’s Redemption SLA.

• Issuers must publish clear terms (who/what/where/when/proof) and disclose limits, venues, and dispute hooks in voucher metadata.

• If an issuer fails to fulfill, they are the primary party in default; pool or network protections (if any) are secondary layers.

**Pool-Level Guarantees (Optional, Competitive, Disclosed).**

A pool may choose to add extra guarantees to vouchers it lists. These are not automatic; they must be explicitly declared in pool metadata and surfaced in receipts.

**Common guarantee types:**

1) Cash-Back Guarantee (Make-Whole in Stable/Reserve Asset)

   • If the issuer defaults or breaches SLA, the pool pays out a defined amount in a designated reserve asset (e.g., stablecoin) up to a policy-capped limit.

   • Funding source: pool-level reserve buffers and/or posted guarantor bonds.

2) Swap-Back Guarantee (Reversal / Exit Window)

   • If a voucher cannot be redeemed under declared terms, the pool offers a time-boxed swap-back path (e.g., swap back into the prior asset, or into an approved reserve asset), subject to caps and inventory.

   • This is a liquidity protection, not a promise that every swap is always reversible: it is limited by published caps, windows, and reserve ratios.

3) Alternative-Fulfillment Guarantee (Multi-Venue / Substitute Delivery)

   • The pool guarantees fulfillment by routing redemption to an alternative approved provider (e.g., another vetted taxi operator) when the original issuer fails, within a capped quantity/value.

   • This is especially useful for essential services (food/transport) where continuity matters.

4) Price/Index Band Guarantee (Optional)

   • For selected voucher classes, the pool may commit to keep swap-out value within a published band vs. its Value Index. If the band is broken, predefined haircuts or swap-back rules apply.

**Guarantors & Bonds (Who can guarantee).**

• Issuer Bond: collateral posted by the issuer (or locked reserve) that can be drawn down upon verified default.

• Pool Reserve: pool-owned buffers funded by a portion of pool fees, used for payouts under the pool’s advertised guarantees.

• Third-Party Guarantor Bond: collateral posted by external guarantors (individuals, institutions, insurers, community orgs) that back specific issuers, voucher classes, or the pool as a whole.

• Note: Guarantor participation is governed by published eligibility criteria, bond sizing, concentration limits, and slashing rules.

**Triggers (When a guarantee can be claimed).**

Claims must be based on explicit, auditable triggers, such as:

• Redemption SLA breach (target/max exceeded) with proof of attempted redemption;

• Verified issuer non-fulfillment or insolvency (as defined by pool policy);

• Bridge/escrow failure impacting redeemability (when applicable);

• Governance-declared incident state (emergency pause / run conditions).

**Claim Process (Human-readable and auditable)**.

• Ticket: user opens a redemption/claim ticket referencing the voucher + proof (QR receipt, ticket #, required ID type).

• Verification: pool (or delegated claims module) checks voucher terms, redemption attempt evidence, and issuer response window.

• Decision: approve/deny within a published dispute window; all outcomes logged.

• Payout: execute per the published payout path (below), with receipts referencing guarantee type and cap.

**Payout Path & Recovery (Aligned to the loss (insurance) waterfall).**

Guarantee payouts follow a transparent waterfall:

(1) Offending issuer bond / guarantor stakes → (2) Pool-level reserves → (3) Network Insurance Fund (if covered by DAO policy) → (4) Policy-capped temporary haircuts → (5) Clawbacks for proven fraud/abuse.

Recovery proceeds (from issuer settlement, arbitration awards, or legal enforcement) refill bonds/reserves per policy before CLC Pool swap access.

**Parameterization (What must be declared).**

For every pool and voucher class, publish:

• Guarantor Requirement: None / Recommended / Required.

• Bond sizing: minimum bond, scaling rule (e.g., % of issuance or exposure), concentration caps.

• Guarantee catalog: which guarantee types apply, caps, windows, eligible assets (cash-back asset; swap-back asset).

• SLA: target/max and claim windows.

• Disclosures: plain-language “who is guaranteeing what”, and what is explicitly not guaranteed.

**Curation Market Principle.**

Pools are responsible for the guarantees they advertise. The CLC DAO provides standards, registries, and optional shared insurance policies—but does not automatically guarantee vouchers or pools unless explicitly stated in DAO policy and the pool’s published terms.

**11.4 Anti-Capture Guardrails**
The following actions are classified as **Critical** and require the highest quorum/threshold tiers plus a long timelock:



1. Waterfall structure changes (adding/removing destinations; changing insurance/core ops priority),
2. Registry root changes (canonical voucher/pool registries),
3. Insurance policy scope, haircut caps, and claims authority changes,
4. Emergency pause scope expansions,
5. Any change that weakens forkability, transparency, or pool sovereignty guarantees stated in this paper.

**11.5 Fork & Exit Procedure (Credible Exit for Communities and Operators)**
If governance is captured or values drift materially, communities, pool stewards, and operators can exit by forking the network governance layer while preserving underlying Commitment Pools and vouchers.

**Procedure:**



1. **Snapshot:** Export canonical registries (pools, vouchers, indices, limits, fee policies) and publish a signed snapshot hash.

2. **Redeploy:** Deploy new registry roots, router endpoints, and (if needed) a new Waterfall + Insurance policy contract set under a new governance process.

3. **Re-register:** Pool stewards opt-in by registering their pool addresses under the new registry root (no need to migrate user-held vouchers).

4. **Client Re-point:** SDKs/UIs add the new registry root as a selectable network profile; default routing can shift via published governance decisions.

5. **Bridge Period:** Maintain routing bridges where safe to reduce fragmentation; deny-list toxic routes.


**Key guarantee:** Exiting canonical registries must not brick local economies. Pools continue operating locally; federation is an opt-in discovery layer.


---
