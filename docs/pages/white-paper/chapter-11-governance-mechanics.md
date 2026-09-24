## **11. Governance Mechanics**

**Design status:** This chapter is a governance template, not a representation that the current App uses a CLC token vote, timelocks, shared insurance, a claims process, or every control described below. A deployment must identify its actual decision-makers, authorities, contracts, processes, and policies.



* **Constitutional Values**: Care for People, Care for the Environment, Fairness, Reciprocity, Non-Dominance, Resilience.
* **Proposal Types**: Fee/limit/index edits; liquidity mandates; pool listings/delistings; insurance payouts; parameter guardrails.
* **Process**: Intake → Evaluation (template) → Risk review → On-chain vote (staked CLC) → Timelock → Execution.
* **Quorum & Thresholds**: Parameterized per class (e.g., higher for value-index edits and emergency pauses).
* **Delegation**: Optional delegate system with public mandates and recall.
* **Circuit Breakers**: Emergency pause with criteria; automatic resume conditions; post-mortems required.
* **Transparency**: All edits/flows logged; dashboards for fulfillment, reserves, utilization, routing, guarantors.

**Registry Governance (Listing / Suspension / Delisting).** A CLC-compatible deployment may maintain discovery registries for Vouchers, Tokens, and Pools. Depending on the governance model, authorized controls may add, update, suspend, or remove (“delist”) registry entries through on-chain voting, multisig approvals, board decisions, cooperative resolutions, public mandates, or other accountable processes. Published registry rules should make status conditional and may identify repeated non-fulfillment, fraud or misrepresentation, unsafe contract behavior, or persistent violation of published principles as grounds for suspension or delisting. Routers may route around entries that the selected registry has delisted. Where feasible, the adopted process should provide notice, an opportunity to remedy, and an appeal path; emergency delisting should require a public incident report and automatic review or sunset.

**Prohibited Listings (non-negotiable):**



1. Instruments that directly fund or incentivize ecological destruction beyond agreed boundaries, violence/weaponization, coercive extraction, or systemic abuse.
2. Any voucher class lacking clear redemption terms, accountability, and remedy pathways.

Under this governance template, the prohibited list would be versioned, publicly auditable, and changeable only through the adopted critical-action threshold and timelock, illustrated as Q3 + T3 in Appendix D.





### **11.1 Index & Limit Governance**

**Timelocked Edits.** A deployment following this template should execute Value Index and Swap Limiter parameter edits after a public timelock. Any emergency path should use a separately disclosed authorization process and include automatic sunset or review.

**Quorum & Thresholds.** The template proposes higher quorum or approval thresholds for (a) Value Index base changes and (b) global Limit Tier changes, intermediate thresholds for Pool-specific third-party changes, and standard thresholds for routine fee changes.

**Publish Feeds.** A participating deployment should publish, for each Pool, the on-chain index variables, oracle sources or medians, update cadence, limit windows and caps, and failure modes or safe constants.

**Emergency Pause Criteria.** A participating deployment should pre-declare conditions such as an oracle outage, high limit utilization combined with redemption failures, or an invariant failure, together with resume checks and post-incident review requirements.


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

**Optional design only.** This runbook applies only to a deployment that has expressly adopted and funded an Insurance Fund and published the covered events, eligible claimants, responsible entity, assets, limits, exclusions, evidence, process, and governing terms. Neither the current App nor GEF provides coverage merely because this design appears in the White Paper.

**Triggers.** (i) Issuer default/non-fulfillment; (ii) Pool insolvency (reserve shortfall vs. bonds); (iii) Bridge/escrow loss impacting redeemability.

**Assessment.** Convene risk committee; reconcile receipts, vault balances, guarantor bonds, and redemption tickets; publish incident ledger.

**Illustrative Loss Waterfall.** Where each layer exists and lawfully applies: (1) responsible issuer bonds or guarantor stakes → (2) Pool-level reserves → (3) Network Insurance Fund → (4) a temporary reduction to an optional insurance payout or Pool settlement claim, but only where pre-existing applicable terms expressly authorize it, law permits it, and every required consent and process is satisfied → (5) lawful recovery for proven fraud or abuse. A coverage or settlement haircut does not reduce an Issuer's underlying Voucher commitment or alter an on-chain balance unless valid pre-existing terms and applicable law expressly permit that result and any required Holder consent is obtained.

**Coverage Reductions & Make-Whole.** Define caps on any authorized reduction to optional coverage or Pool settlement claims and time-boxed make-whole plans from future fees or rakes, with transparent accounting. Do not describe these reductions as changes to a Holder's underlying Voucher rights.

**Recoveries.** Any clawback or recovery must be authorized by applicable terms and law, supported by the required process and evidence, and subject to mandatory rights.

**Reporting.** Publish public post-mortem, remediation timeline, and parameter changes (limits, fees, routes).

**Important:** Insurance coverage is **limited**. Some incidents receive no payout after caps are reached; see the Loss Waterfall and exclusions below.

**When Shared Insurance Will *Not* Make You Whole.**
The Insurance Fund **does not** cover: (a) redemptions outside the published SLA or venues; (b) losses or coverage reductions beyond policy caps; (c) losses from using delisted or denied routes; (d) fraudulent claims or missing evidence; or (e) jurisdictions where payout is restricted. Payouts, if any, follow the applicable coverage terms and may be **zero** after caps are reached.

**Illustrative Make-Whole Schedule (only if adopted and published):**

1) Claims are paid in this order: (a) issuer/guarantor bonds → (b) pool reserves → (c) network insurance.

2) If a covered shortfall remains, apply only the reduction to the optional insurance payout or Pool settlement claim that the pre-existing coverage terms and applicable law authorize, up to H_cap per incident (see Appendix D).

3) Haircut recovery plan:



* - 25% of recovered value applied monthly to the covered shortfall until made whole OR
* - 12-month maximum make-whole horizon; any remaining covered shortfall becomes a recorded loss with a public post-mortem.

4) Every claim produces a receipt: incident ID, affected claim and related Vouchers, coverage-reduction percentage, recovery plan, and appeal window.


### **11.3 Guarantor Framework**

This section clarifies who may guarantee what (issuer, Pool, or third-party guarantor), defines the collateral or bonding instruments behind those guarantees, and proposes standard triggers and payout paths. Pools can compete on trust, terms, and expressly offered guarantees without implying that the network automatically guarantees every Voucher.

**Baseline Issuer Responsibility (Gift-Card Analogy).**

• Each Voucher is first and foremost the issuer's responsibility: the issuer commits to deliver the specified good or service, or declared cash-equivalent where lawful, under the published redemption terms.

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

   • For selected Voucher classes, a Pool may commit to keep Swap-out value within a published band relative to its Value Index. If the band is broken, only the coverage adjustment or Swap-back remedy authorized by the pre-existing guarantee terms and applicable law would apply; the guarantee does not itself reduce the Issuer's underlying Voucher obligation.

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

(1) Responsible issuer bond or guarantor stakes → (2) Pool-level reserves → (3) Network Insurance Fund, if covered by published policy → (4) a policy-capped temporary reduction to an optional insurance payout or Pool settlement claim, only if authorized as described in Section 11.2 → (5) lawful recoveries for proven fraud or abuse.

Recovery proceeds (from issuer settlement, arbitration awards, or legal enforcement) refill bonds/reserves per policy before CLC Pool swap access.

**Parameterization (What must be declared).**

For every pool and voucher class, publish:

• Guarantor Requirement: None / Recommended / Required.

• Bond sizing: minimum bond, scaling rule (e.g., % of issuance or exposure), concentration caps.

• Guarantee catalog: which guarantee types apply, caps, windows, eligible assets (cash-back asset; swap-back asset).

• SLA: target/max and claim windows.

• Disclosures: plain-language “who is guaranteeing what”, and what is explicitly not guaranteed.

**Curation Market Principle.**

Pools are responsible for the guarantees they advertise. A CLC deployment may provide standards, registries, or optional shared insurance policies, but neither CLC nor GEF automatically guarantees Vouchers or Pools. Any coverage must identify the responsible party and be stated in the applicable published policy and Pool terms.

**11.4 Anti-Capture Guardrails**
Under this template, the following actions would be classified as **Critical** and would require the adopted highest quorum or approval tier plus a long timelock:



1. Waterfall structure changes (adding/removing destinations; changing insurance/core ops priority),
2. Registry root changes (canonical voucher/pool registries),
3. Insurance policy scope, coverage-reduction caps, and claims authority changes,
4. Emergency pause scope expansions,
5. Any change that weakens forkability, transparency, or pool sovereignty guarantees stated in this paper.

**11.5 Fork & Exit Procedure (Credible Exit for Communities and Operators)**
If governance were captured or values drifted materially, communities, Pool Stewards, and operators could seek to exit by forking the network governance layer. Preservation of underlying Pools and Vouchers would depend on the deployed contracts, keys, interfaces, infrastructure, and applicable obligations.

**Procedure:**



1. **Snapshot:** Export canonical registries (pools, vouchers, indices, limits, fee policies) and publish a signed snapshot hash.

2. **Redeploy:** Deploy new registry roots, router endpoints, and (if needed) a new Waterfall + Insurance policy contract set under a new governance arrangement.

3. **Re-register:** Pool stewards opt-in by registering their pool addresses under the new registry root (no need to migrate user-held vouchers).

4. **Client Re-point:** SDKs/UIs add the new registry root as a selectable network profile; default routing can shift via published governance decisions.

5. **Bridge Period:** Maintain routing bridges where safe to reduce fragmentation; deny-list toxic routes.


**Design objective:** Exiting canonical registries should not disable otherwise functional local Pools. Actual continuity depends on the relevant contracts, keys, infrastructure, interfaces, and third-party services; federation remains an opt-in discovery layer.


---
