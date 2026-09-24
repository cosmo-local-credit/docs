## **7. CLC Stewardship and the CLC Token**

**Design status:** This chapter is a proposed governance and liquidity-coordination design. Publication here does not mean that the CLC, stCLC, or sCLC tokens; an Insurance Fund; Waterfall contracts; gauges; mandates; fee-credit windows; or public-market programs are deployed or available in the current PWA. Each component requires a separate implementation and published policy before it applies.


### **7.1 Purpose**

The proposed CLC governance layer would:



* Coordinate governance for CPP networks,
* Allocate liquidity across pools,
* Coordinate an optional, expressly scoped and funded insurance program,
* Maintain core infrastructure and registries,
* Recognize the risk of liquidity providers,
* Preserve decentralization and auditability as the network scales.


### **7.2 CLC Token Overview**


In this design, CLC would be the base governance asset. Locking (staking/escrowing) CLC would mint stCLC (vote-escrow governance power) and could qualify the holder for epoch-scoped sCLC under policy.



1. stCLC - a non-transferable vote-escrow receipt that represents governance voting power (and can be delegated). 
2. sCLC - an epoch-scoped authorization / incentives token minted each epoch under policy and allocated to (a) stCLC holders (fee-credit authorization after the Safety Waterfall) and/or (b) approved gauges (incentives to productive liquidity and routing operators). Either allocation may be set to zero in any epoch.

Neither stCLC nor sCLC is equity, a dividend instrument, or a guaranteed return. Policy may set sCLC issuance and/or fee-credit access to zero in any epoch.

In this proposed design, CLC would not be a community Voucher or a general medium of exchange; it would coordinate governance and policy-gated access to network resources.

**Governance Lockups (Anti-Capture; vote-escrow).** If implemented, voting power would be represented by stCLC, minted only when CLC is locked under a minimum lock period and exit cooldown set by the adopted governance parameters. Spot-held CLC would not vote. This design is intended to make hostile takeovers slower, visible, and contestable.

**sCLC Properties (Anti-Speculation).** If implemented, sCLC would be epoch-scoped, expiring or being burned at epoch end, and would function as an authorization or incentive token under caps rather than a tradable claim on profits. An adopted epoch policy could provide for emissions to approved gauges or voter incentives and could set issuance to zero in any epoch.

**Proposed Total CLC Supply:** 500,000,000 - to be minted to a CLC Vault under the custody and governance arrangements adopted for a future deployment.

A future launch could place the CLC Vault under a multisig with published signers and a rotation policy, followed by a separately approved transition to governance-controlled timelocked contracts after stated hardening milestones are met, such as two independent audits, monitoring, incident runbooks, and tested pause and fork procedures. Any use of public trading venues would require a separate safety and governance decision.

**CLC Allocations:**



* **15% Grassroots Economics Foundation (GEF):** The illustrative allocation would be permanently staked, non-transferable, and bound to the GEF multisig. It could receive governance voting and Swap-window access under adopted policy, while the underlying CLC could not be unstaked.
* **15% Core Team & Early Partners:** The illustrative allocation would be staked during vesting and non-transferable until vesting ends, using a policy-set cliff and linear vesting over 24 months. Any voting during vesting and transfer restrictions would be defined in the adopted policy.
* **30% Endowments (Private):** The illustrative allocation would recognize early LPs providing network liquidity and use policy-set 24-month vesting.
* **40% Public Liquidity (DEX venue):** The illustrative allocation would be unvested and reserved for public endowment-liquidity bootstrapping.
    * The venue-agnostic reserve would be held in a timelocked vault and released in tranches.
    * Active deployment would be capped at 10% of total supply across all venues at a time.
    * Each deployment would sunset after 90 days unless renewed through the adopted governance process.
    * LP positions would be governance-controlled, LP tokens would be timelocked, and public venues would remain optional.
    * CLC used for liquidity would not vote unless staked under the same lockup rules as other voters.

(These are illustrative parameters. Any adopted parameters, controls, and change process would need to be implemented and published separately.)

7.2.2 CLC Availability Stages

**Endowment Contribution Tiers (reference valuation):** A future program could accept early endowments in staged tiers using a published reference valuation for intake and budgeting purposes. Any such reference valuation would be a disclosed governance parameter, not a promise of market price or future appreciation. Public liquidity, if separately approved on third-party venues, would be for accessibility and discovery; adopted policy should not target a price and should disclose when liquidity may be added or withdrawn.

**Endowment Covenant (Seeder Responsibility):** Under a future program, contributions would be treated as stewarded endowments intended to increase settlement capacity rather than promises of yield. Adopted policy could cap the voting influence of large endowments through defined mechanisms. Every endowment deployment should publish its purpose, expected network benefit, risks, and exit conditions.


**7.2.3 Impact Seeding Program (CLC Eligibility for Seeding Commitment Pools)**

Published policy may allocate portions of the CLC Vault to recognize contributors who seed liquidity directly into designated Commitment Pools when that liquidity measurably increases network settlement (fulfilled redemptions), not speculative churn.

**Eligibility (example policy, finalized by governance):**



1. Seed into an approved Pool or set of Pools for a minimum duration under a rolling lockup.
2. Meet the adopted definition of “productive” liquidity, measured by transaction records showing support for routed Swaps that culminate in redemption or settlement within published service targets.
3. Use marginal settlement contribution, rather than TVL alone, as the basis for any reward calculation.

An adopted program could express approved Pools as gauges so stCLC voters could transparently direct incentives toward productive settlement capacity rather than TVL.

**Anti-gaming rules:**
 • Exclude self-wash loops (same beneficial owner cycling value) and routes flagged by the router deny-list.
 • Apply per-entity caps and diminishing returns to reduce whale capture.
 • Use an observation window and delayed finalization (timelocked) to allow dispute/appeal of manipulated metrics.


### **7.3 Vote-Escrow (stCLC) + Epoch Incentives (sCLC) + Pooled Fees**

Under this proposed model, locking CLC would mint stCLC voting power and enable participation in epoch incentive decisions. During each epoch, stCLC holders would vote on gauges for approved Pools or mandates that would direct any enabled sCLC incentives to eligible liquidity and routing operators.

Separately, an implemented Safety Waterfall could fund adopted Insurance, Core Operations, and Liquidity Mandate budgets before an applicable policy defines a fee-credit budget (F_epoch). When enabled, that policy could allow sCLC to provide capped Swap access from designated fee-holding Pools under published windows and inventory constraints.

Design rationale (“vote with your feet”): if implemented, sCLC would make post-Waterfall fee budgets contestable. Under the adopted policy, eligible stakers could reallocate a bounded portion of pooled fee assets by exercising fee-credit for allowlisted uses such as adding Pool liquidity, supporting local Voucher inventories, or purchasing coverage collateral. This would be an accountability mechanism, not a promise of yield.

**stCLC Gauge Voting (Directing sCLC Incentives)**

To reduce discretionary allocation and keep incentives tied to real settlement, the proposed design would use a gauge system containing a curated list of eligible Pools or mandates.

Each epoch:



1. stCLC holders would vote on gauges for eligible Pools, portfolios, or routing mandates.
2. The implemented protocol would compute vote weights per gauge using the adopted caps and concentration controls.

If enabled, the protocol could mint a bounded amount of sCLC incentives and distribute them to eligible liquidity providers and routing operators according to the adopted gauge and settlement-measurement policy.

**Key difference from speculation-driven AMMs:** votes do not target token price or “APY.” They target settlement capacity (inventory availability, routing reliability, off-ramps), measured by receipts and fulfillment outcomes.

**Waterfall Usage of Fees (policy-bound).** Under the proposed Waterfall, eligible fees would first fund any adopted Insurance Reserve Targets and Core Operations budget, followed by Liquidity Mandates. Only afterward, and only if enabled for that epoch, could the protocol publish a fee-credit budget F_epoch that bounds sCLC budget-exit Swap access. Values, caps, and windows would be published in advance and could be tightened or set to zero under the adopted incident policy. See Section 7.4.

**Why stake CLC?**

In this design, staking or escrowing CLC would let participants direct network policy. An adopted policy could also make participants eligible for epoch-scoped sCLC and capped, epoch-bound access to a post-Waterfall fee budget. This could let eligible stakers reallocate a bounded portion of fee assets to allowlisted uses rather than relying solely on proposals and committees. It would be access to a governed resource under disclosed caps, not a claim on profits or dividends.


**Service-Fee Enforcement Option**

(a) **Factory Gating.** A registry operator may deploy CPP pools via a **PoolFactory** that wires a **FeeHook** into the Vault/Fee Registry; fees can auto-route to a configured fee recipient via the Waterfall per policy. Pools missing the FeeHook may be ineligible for that registry.
(b) **Registry Gating.** A registry profile may make only registered pools discoverable by its routers and SDKs. Independent registries can define their own listing and fee rules.
(c) **Router Policy.** Routers may **refuse routes** that touch unregistered pools or pools with invalid FeeHooks for the selected profile. SDK invariant checks can enforce this.
(d) **Programmatic Attestations.** Liquidity mandates and LP programs may require FeeHook compliance; non-compliant pools may lose routing and liquidity support within that profile.

**Result:** “Mandatory” is profile-specific: a non-paying pool may be unroutable in one registry or service profile while remaining free to operate locally or join another registry.

**Fork/Exit Note.** This enforcement applies only to the selected discovery profile. Pools remain free to operate outside a given registry, and independent routers/registries may exist. This preserves credible exit if governance is captured: a fork can deploy alternative registries/routers and pools can re-register there without changing the underlying CPP primitives.

Compatible clients should permit Users and Pools to select available alternative profiles or registries. Registry enforcement should not disable otherwise functional local Pools, and applicable fee policies should be displayed before a Swap or contribution.

**sCLC Emission & Budget-Exit Windows**

For an implemented epoch, after the Waterfall funds the adopted Insurance, Core Operations, and Liquidity Mandate budgets, the protocol could publish a fee-credit budget F_epoch whose value may be zero. Under the proposed policy, sCLC would confer a pro-rata User limit based on stCLC voting power:

limit_user_epoch = F_epoch × (stCLC_user / stCLC_total).

Within published windows and caps, and subject to inventory, an implemented policy could permit sCLC to be exercised to Swap fee assets out of designated fee-holding Pools and into listed assets or Vouchers. This would be a bounded budget-exit mechanism rather than passive income; governance could set F_epoch to zero or tighten, pause, or geofence access under the adopted compliance and incident policy.

**DEX Float Reduction (optional, non-speculative):** If measured CLC DEX float exceeded an adopted policy cap, published policy could authorize a capped, TWAP-limited repurchase solely to reduce external float and governance-attack surface. Acquired CLC would be retired or placed in a disclosed non-voting sink. Such a program should have no price target, could be set to zero, and should halt under its published incident and reserve rules.


**Guardrails (policy parameters; on-chain):**
• **Trigger-based:** only if DEX float > **X%** for **Y** days  
• **Cap:** max **Z%** of monthly fees and/or max **W%** of DEX daily volume  
• **Execution:****TWAP + random time delays**+ **no announcement of exact timing**
• **Emergency stop:** automatic stop if **insurance ratio &lt; threshold**
• **Disclosure:**“**Not intended to support price; settlement does not depend on DEX price**”

**Treasury Liquidity Cache (non-distributive):** An adopted policy could use a disclosed portion of eligible fees to maintain protocol-controlled liquidity positions for stated network functions, such as off-ramp buffers or rebalancing inventory, under published caps and controls.

**7.3.1 Portfolio Pools:** Direct Seeding, Voted Allocations, and sCLC-Directed Liquidity (Examples)

Commitment Pools can be curated as “portfolio pools”: pools that list redeemable commitments aligned to a mission domain (e.g., ecosystem support services, humanitarian support, health & wellness). Portfolio pools make it easy for liquidity providers to target real-world outcomes without requiring a single central issuer.

**There are three complementary ways to support a specific portfolio pool:**

A) Seed directly into the pool: deposit accepted assets/vouchers into the pool’s Vault, increasing inventory and routing capacity (subject to listings, limits, and reserve policy).

B) Vote allocations into the pool: propose and approve Liquidity Mandates (Waterfall allocations) that seed or backstop designated portfolio pools with time-bounded mandates and sunset/review.

C) Stake CLC and direct sCLC swaps: when enabled for an epoch, stakers can exercise sCLC budget-exit swaps to reallocate a bounded portion of post-waterfall fee assets into specific portfolio pools (e.g., by swapping fee assets into the pool’s inventories or accepted liquidity assets), strengthening the pools they believe most improve settlement and mission outcomes. This is an accountability mechanism under caps/windows—not a claim on profits.

Note: Portfolio pools remain sovereign. They can be canonical (discoverable via official registries/routers) or independent (discoverable via independent registries/routers), without changing the underlying CPP primitives.

**7.3.2 Curating Portfolio Pools (Including Certifications)**

Any lawful Steward, such as an individual, cooperative, community group, multisig, service operator, or public agency, could curate a portfolio Pool by defining a listing policy, publishing a Value Index method, configuring limiters, and requiring clear redemption evidence and fallback remedies. Portfolio Pools could be specialized or mixed.

Certifications could be used to support trust and risk assessment, but should be modeled as attestations that affect eligibility and risk treatment rather than as profit tokens. Two possible patterns are:

A) Attestation Certificates (non-transferable or registry-bound): a verifier issues an attestation that a Voucher issuer or project meets stated criteria (methodology, safeguards, monitoring). A Pool could use attestations to whitelist listings, apply disclosed valuation discounts, widen or narrow limits, or qualify for an optional insurance program.

B) Audit/Verification Service Vouchers (redeemable commitments): a token represents a redeemable verification service (who will verify what, by when, under what standard). Pools/projects can purchase these vouchers to fund monitoring and strengthen integrity.

In both cases, the economic claim remains the underlying redeemable commitment; certifications modify risk and eligibility rather than creating entitlement to fees, profits, or residual assets.


### **7.4 Waterfall Policy & Budgets**

In the proposed model, eligible fee inflows from Pool usage, routing, or a network rake would be allocated by an implemented Waterfall under the adopted governance process.

**Fee Asset Eligibility & Conversion (cash vs. in-kind).** A future deployment could receive fees in mixed assets. Its Waterfall would distinguish:

(i) Cash-eligible fee assets (E_cash): allowlisted stablecoins/cash-equivalents and (optionally) major liquid tokens that may be converted to fund fiat-denominated insurance payouts and core operating costs; and

(ii) In-kind fee assets (E_kind): non-fiat-redeemable vouchers and other non-convertible assets that may be redeployed for in-network settlement support, local mandates, or in-kind operating needs, but do not count toward fiat-denominated insurance/ops obligations.

A deployment using this model should publish a Conversion Policy for fungible assets covering allowlists, caps, slippage limits, TWAP windows, and reporting. Voucher pricing would remain governed by Pool Value Indices and Swap Limiters; treasury conversion would not determine Voucher valuation.

**Waterfall Priorities:**



1. **Insurance Reserve Target**– Fund to a policy target (risk-weighted by pool class, fulfillment rate, issuer concentration, and limit utilization).
2. **Core Operations**– Legal, advocacy, IEC, infra, audits, observability.
3. **Liquidity Mandates**– Endowments into target pools/routers to improve settlement velocity, including (optionally) interoperability mandates: bridge/adaptor maintenance, confederation routing pilots, and cross-network liquidity backstops under published caps and sunset reviews.
4. **DEX Float Reduction (optional, non-speculative):** If measured CLC DEX float exceeded an adopted policy cap, published policy could authorize a capped, TWAP-limited repurchase solely to reduce external float and governance-attack surface. Acquired CLC would be retired or placed in a disclosed non-voting sink. Such a program should have no price target, could be set to zero, and should halt under its published incident and reserve rules.
5. **CLC Pool Fee-Access Budget:** Allocate remaining eligible fee assets to the CLC Pool (cash-eligible E_cash by default; E_kind only if explicitly allowlisted per program) and publish the epoch fee-access budget F_epoch (may be zero), which bounds sCLC swap-access windows/caps as defined in §7.4.

**KPI-Linked Budgets.** A deployment could use advisory Pool-health data to inform Waterfall parameters, including fulfillment rate, reserve adequacy, limit utilization, routing results, guarantor performance, and redemption latency. Any adopted edit process should disclose its authorization, delay, and recordkeeping rules.


A possible contributor flow under this proposal would be:
1. Liquidity Providers would contribute eligible assets to the CLC Vault under separately adopted endowment terms and could receive CLC tokens as governance participants.
2. CLC holders could stake under the adopted rules to receive stCLC voting rights and, where enabled, sCLC under step 4.
3. Participating Pools could send a disclosed percentage of their fees to an implemented Waterfall contract, which would allocate eligible fees to:
    1. an Insurance and Operations Vault funded primarily by cash-eligible fee assets or policy-authorized conversions, with in-kind fees excluded from fiat-denominated obligations;
    2. participating CPs according to adopted voting rules;
    3. an optional DEX Float Reduction program only when its trigger conditions are met, otherwise zero; and
    4. a CLC Fee Budget Vault holding post-Waterfall eligible fee assets, where an enabled sCLC policy could provide capped, epoch-bound Swap access to allowlisted assets or programs.
4. After the Safety Waterfall, an adopted epoch policy could mint sCLC and allocate it to eligible stCLC holders as fee-credit authorization, approved gauges as incentives, or both; either allocation could be zero.
5. A CLC Fee Budget Vault would hold post-Waterfall pooled fee assets. When enabled, an adopted sCLC policy could provide capped, epoch-bound authority to execute allowlisted deployments from designated fee-holding vaults within published windows and caps. This would not be a claim on Vault ownership.


---
