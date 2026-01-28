## **7. The CLC DAO and the CLC Token**


### **7.1 Purpose**

The CLC DAO exists to:



* Govern the CPP network,
* Allocate liquidity across pools,
* Underwrite settlement risk via an insurance fund,
* Maintain core infrastructure and registries,
* Appreciate the risk of liquidity providers,
* Preserve decentralization and auditability as the network scales.


### **7.2 CLC Token Overview**


CLC is the base governance asset. Locking (staking/escrowing) CLC mints stCLC (vote-escrow governance power) and qualifies the holder for epoch-scoped sCLC under policy.



1. stCLC - a non-transferable vote-escrow receipt that represents governance voting power (and can be delegated). 
2. 2. sCLC - an epoch-scoped authorization / incentives token minted each epoch under policy and allocated to (a) stCLC holders (fee-credit authorization after the Safety Waterfall) and/or (b) approved gauges (incentives to productive liquidity and routing operators). Either allocation may be set to zero in any epoch.

Neither stCLC nor sCLC is equity, a dividend instrument, or a guaranteed return. Policy may set sCLC issuance and/or fee-credit access to zero in any epoch.

CLC is not a community voucher and is not intended to be used as a general medium of exchange; it exists to coordinate governance and policy-gated access to network resources.

**Governance Lockups (Anti-Capture; vote-escrow).** Voting power is represented by stCLC, minted only when CLC is locked under a minimum lock period and exit cooldown (timelocked governance parameters). Spot-held CLC does not vote. This makes hostile takeovers slower, visible, and contestable. 

**sCLC Properties (Anti-Speculation).** sCLC is epoch-scoped (expires or is burned at epoch end) and functions as an authorization / incentives token under caps — not a tradable claim on profits. sCLC is minted according to an epoch policy (including emissions to approved gauges and/or voter incentives), and may be set to zero in any epoch.

**Total CLC Supply:** 500,000,000 - Minted to a CLC Vault (Multisig-wallet held by Grassroots Economics Foundation)

At launch, the CLC Vault is a multisig with published signers and rotation policy; over time it transitions to DAO-controlled timelocked contracts as governance hardening milestones are met (2 independent audits, monitoring, incident runbooks, and tested pause/fork procedures). Public trading venues are OPTIONAL and must be approved as a safety decision.

**CLC Allocations:**



* **15% Grassroots Economics Foundation (GEF):** Permanently staked; non-transferable; soul-bound to the GEF multisig. Receives governance voting & swap-window access per policy, but underlying CLC can not be unstaked. 
* **15% Core Team & Early Partners:** Staked during vesting; soul-bound until vesting ends. Cliff/linear vesting over 24 months (policy-set). Voting via CLC during vesting; transfers disabled until vesting completes.
* **30% Endowments (Private):** Recognition and governance for early LPs providing network liquidity. 24-month vesting (policy-set).
* **40% Public Liquidity (DEX venue):** Unvested, used for public endowment liquidity bootstrapping.
    * 40% Public Liquidity Reserve (venue-agnostic): Held in a timelocked vault and released in tranches.
    * Max Active Deployment: ≤ 10% of total supply at any time across all venues.
    * Each deployment expires (sunsets) after 90 days unless renewed by governance.
    * LP positions are DAO owned; LP tokens are timelocked; public venues are optional.
    * Any CLC used for liquidity does NOT vote unless staked under the same lockup rules as all other voters.

(All parameters timelocked and on-chain; edits require governance quorum.)

7.2.2 CLC Availability Stages

**Endowment Contribution Tiers (reference valuation):** Early endowments may be accepted in staged tiers using a published reference valuation for intake and budgeting purposes. This reference valuation is a governance parameter, timelocked and disclosed on-chain, and is not a promise of market price or future appreciation. Public liquidity, if provided on third-party venues, is for accessibility and discovery; the DAO does not target a price and may add/withdraw liquidity subject to inventory constraints and risk policy.

**Endowment Covenant (Seeder Responsibility):** Endowments are treated as a stewarded endowment to increase settlement capacity, not to extract yield. Large endowments may be capped in voting influence via conviction caps and/or delegated-community veto (policy-defined) to preserve non-dominance. All endowment deployments must publish: purpose, expected network benefit, risks, and exit conditions.


**7.2.3 Impact Seeding Program (CLC Eligibility for Seeding Commitment Pools)**

The DAO may allocate portions of the CLC Vault to recognize contributors who seed liquidity directly into designated Commitment Pools when that liquidity measurably increases network settlement (fulfilled redemptions), not speculative churn.

**Eligibility (example policy, finalized by governance):**



1. Seed into an approved pool (or set of pools) for a minimum duration (rolling lockup).
2. Liquidity must be “productive” as measured by receipts: it supports routed swaps that culminate in redemption/settlement within published SLAs.
3. Rewards are based on marginal settlement contribution, not TVL alone (e.g., net increase in successful settlement volume attributable to the added inventory and routing capacity).

Approved pools for seeding may be expressed as gauges, so stCLC voters can transparently direct incentives toward productive settlement capacity rather than TVL.

**Anti-gaming rules:**
 • Exclude self-wash loops (same beneficial owner cycling value) and routes flagged by the router deny-list.
 • Apply per-entity caps and diminishing returns to reduce whale capture.
 • Use an observation window and delayed finalization (timelocked) to allow dispute/appeal of manipulated metrics.


### **7.3 Vote-Escrow (stCLC) + Epoch Incentives (sCLC) + Pooled Fees**

Locking CLC mints stCLC (voting power) and enables participation in epoch incentive decisions. Each epoch, stCLC holders vote on “gauges” (approved pools / mandates) that direct how any sCLC incentives are distributed to productive liquidity and routing operators.

Separately, after the Safety Waterfall funds Insurance, Core Ops, and Liquidity Mandates, the DAO may publish a fee-credit budget (F_epoch). When enabled, sCLC can be used to exercise capped swap access from designated fee-holding pools, under published windows and inventory constraints.

Design rationale (“vote with your feet”): sCLC makes post-waterfall fee budgets contestable. If stakers disagree with routing policy, treasury allocations, or perceive governance capture, they can directly reallocate a bounded portion of pooled fee assets by exercising their fee-credit (e.g., injecting liquidity into specific pools, supporting local voucher inventories, purchasing coverage collateral, or other self-directed deployments). This is an accountability and anti-capture mechanism, not a promise of yield.

**stCLC Gauge Voting (Directing sCLC Incentives)**

To avoid discretionary allocation and to keep incentives tied to real settlement, the DAO uses a gauge system (a curated list of eligible pools/mandates).

Each epoch:



1. stCLC holders vote on gauges (eligible pools / portfolios / routing mandates).
2. The protocol computes vote weights per gauge (with caps / anti-whale rules).

If enabled, the protocol mints a bounded amount of sCLC incentives and distributes them to productive liquidity providers and routing operators in proportion to the votes their gauge received — only when their activity leads to measurable settlement (redemptions) within SLA windows.

**Key difference from speculation-driven AMMs:** votes do not target token price or “APY.” They target settlement capacity (inventory availability, routing reliability, off-ramps), measured by receipts and fulfillment outcomes.

**Waterfall Usage of Fees (policy-bound).** Fees first fund Insurance Reserve Targets and Core Ops, then Liquidity Mandates. Only thereafter (and only if enabled for that epoch) the protocol publishes a fee-credit budget F_epoch that bounds sCLC budget-exit swap access. Values, caps, and windows are published in advance and may be tightened or set to zero during incidents. This ordering ensures essential safety and operations are funded before any optional budget-exit is enabled. (See Section 7.4 Waterfall.) 

**Why stake CLC?**

Staking/escrowing CLC is how participants direct network policy and enforce accountability. In addition to voting rights, staking/escrowing makes participants eligible to receive epoch-scoped sCLC, which can be used to exercise a capped, epoch-bound budget-exit from the post-waterfall fee budget. This lets stakers “vote with their feet” by directly reallocating a bounded portion of fee assets (e.g., injecting liquidity into specific pools or supporting inventories they believe improve settlement) rather than relying solely on proposals and committees. This is access to a governed resource under caps, not a claim on profits or dividends.


**Mandatory Fee Enforcement**

(a) **Factory Gating.** Official CPP pools are deployed via a **PoolFactory** that wires a **FeeHook** into the Vault/Fee Registry; fees auto-route to the **CLC Pool** via the Waterfall per policy. Pools missing the FeeHook cannot register.
(b) **Registry Gating.** Only pools in the **canonical Pool Registry** (timelocked governance edits) are discoverable by official routers and SDKs. Non-compliant forks fail discovery.
(c) **Router Policy.** Official routers **refuse routes** that touch unregistered pools or pools with invalid FeeHook. (SDK invariant checks enforce this.)
(d) **Programmatic Attestations.** Liquidity mandates and LP programs require FeeHook compliance; **non-compliant forks lose routing and liquidity support**.

**Result:**“Mandatory” equals **unroutable (on the CLC DAO network) if non-paying**- not a social norm.

**Fork/Exit Note.** This “mandatory” enforcement applies only to **official** discovery (canonical registries, SDK invariants, and official routers). Pools remain free to operate outside these registries, and independent routers/registries may exist. This preserves credible exit if governance is captured: a fork can deploy alternative registries/routers and pools can re-register there without changing the underlying CPP primitives.

Users/pools can always select alternative profiles/registries in compatible clients. Canonical enforcement must not “brick” local economies. Fee policies must be surfaced in UI before swap/seed

**sCLC Emission & Budget-Exit Windows**

Each epoch, after the Waterfall funds Insurance, Core Ops, and Liquidity Mandates, the protocol may publish a fee-credit budget F_epoch (USD value; may be zero). sCLC confers a pro-rata user limit based on stCLC voting power:

limit_user_epoch = F_epoch × (stCLC_user / stCLC_total).

Within published windows/caps (and subject to inventory), sCLC can be exercised to swap fee assets out of designated fee-holding pools and into listed assets/vouchers. This is a bounded budget-exit mechanism (accountability / anti-capture), not passive income; governance may set F_epoch = 0 and may tighten, pause, or geofence access per compliance and incident policy.

**DEX Float Reduction (optional, non-speculative):** If measured CLC DEX float exceeds a policy cap, the DAO MAY execute a capped, TWAP-limited repurchase solely to reduce external float and governance-attack surface. Acquired CLC is retired to avoid custody risk. This program has no price target, may be set to zero, and must halt automatically during incidents or when insurance buffers are below target.


**Guardrails (policy parameters; on-chain):**
• **Trigger-based:** only if DEX float > **X%** for **Y** days  
• **Cap:** max **Z%** of monthly fees and/or max **W%** of DEX daily volume  
• **Execution:****TWAP + random time delays**+ **no announcement of exact timing**
• **Emergency stop:** automatic stop if **insurance ratio &lt; threshold**
• **Disclosure:**“**Not intended to support price; settlement does not depend on DEX price**”

**Treasury Liquidity Cache (non-distributive):** A portion of fees MAY be used to maintain protocol-owned liquidity positions needed for network functioning (e.g., off-ramp buffers, rebalancing inventories), under policy caps and timelocks.

**7.3.1 Portfolio Pools:** Direct Seeding, Voted Allocations, and sCLC-Directed Liquidity (Examples)

Commitment Pools can be curated as “portfolio pools”: pools that list redeemable commitments aligned to a mission domain (e.g., ecosystem support services, humanitarian support, health & wellness). Portfolio pools make it easy for liquidity providers to target real-world outcomes without requiring a single central issuer.

**There are three complementary ways to support a specific portfolio pool:**

A) Seed directly into the pool: deposit accepted assets/vouchers into the pool’s Vault, increasing inventory and routing capacity (subject to listings, limits, and reserve policy).

B) Vote allocations into the pool: propose and approve Liquidity Mandates (Waterfall allocations) that seed or backstop designated portfolio pools with time-bounded mandates and sunset/review.

C) Stake CLC and direct sCLC swaps: when enabled for an epoch, stakers can exercise sCLC budget-exit swaps to reallocate a bounded portion of post-waterfall fee assets into specific portfolio pools (e.g., by swapping fee assets into the pool’s inventories or accepted liquidity assets), strengthening the pools they believe most improve settlement and mission outcomes. This is an accountability mechanism under caps/windows—not a claim on profits.

Note: Portfolio pools remain sovereign. They can be canonical (discoverable via official registries/routers) or independent (discoverable via independent registries/routers), without changing the underlying CPP primitives.

**7.3.2 Curating Portfolio Pools (Including Certifications)**

Any steward (individual, cooperative, multisig, or DAO) can curate a portfolio pool: define a listing policy, publish a Value Index method, configure limiters, and require clear redemption proofs and fallback remedies. Portfolio pools can be specialized (ecosystem, humanitarian, health) or mixed.

Certifications can be used to improve trust and reduce risk, but should be modeled as attestations that affect eligibility and risk treatment—not as profit tokens. Two safe patterns:

A) Attestation Certificates (non-transferable or registry-bound): a verifier issues an attestation that a voucher issuer/project meets stated criteria (methodology, safeguards, monitoring). The pool uses attestations to whitelist listings, adjust haircuts, widen/narrow limits, or qualify for insurance participation.

B) Audit/Verification Service Vouchers (redeemable commitments): a token represents a redeemable verification service (who will verify what, by when, under what standard). Pools/projects can purchase these vouchers to fund monitoring and strengthen integrity.

In both cases, the economic claim remains the underlying redeemable commitment; certifications modify risk and eligibility rather than creating entitlement to fees, profits, or residual assets.


### **7.4 Waterfall Policy & Budgets**

Fee inflows (pool usage fees, routing fees, network rake) are allocated by a deterministic waterfall and adjustable by DAO vote. 

**Fee Asset Eligibility & Conversion (cash vs. in-kind).** Fee inflows arrive in mixed assets because fees are collected in the same asset that moves through pools. The Waterfall distinguishes:

(i) Cash-eligible fee assets (E_cash): allowlisted stablecoins/cash-equivalents and (optionally) major liquid tokens that may be converted to fund fiat-denominated insurance payouts and core operating costs; and

(ii) In-kind fee assets (E_kind): non-fiat-redeemable vouchers and other non-convertible assets that may be redeployed for in-network settlement support, local mandates, or in-kind operating needs, but do not count toward fiat-denominated insurance/ops obligations.

The DAO maintains a Conversion Policy (allowlists, caps, slippage limits, TWAP windows, and reporting) for fungible assets only. Voucher pricing remains governed by pool Value Indices and Swap Limiters; conversion is for treasury/operations reliability, not voucher valuation.

**Waterfall Priorities:**



1. **Insurance Reserve Target**– Fund to a policy target (risk-weighted by pool class, fulfillment rate, issuer concentration, and limit utilization).
2. **Core Operations**– Legal, advocacy, IEC, infra, audits, observability.
3. **Liquidity Mandates**– Endowments into target pools/routers to improve settlement velocity, including (optionally) interoperability mandates: bridge/adaptor maintenance, confederation routing pilots, and cross-network liquidity backstops under published caps and sunset reviews.
4. **DEX Float Reduction (optional, non-speculative):** If measured CLC DEX float exceeds a policy cap, the DAO MAY execute a capped, TWAP-limited repurchase solely to reduce external float and governance-attack surface. Acquired CLC is retired (or placed in a non-voting sink) to avoid custody risk. This program has no price target, may be set to zero, and must halt automatically during incidents or when insurance buffers are below target.
5. **CLC Pool Fee-Access Budget:** Allocate remaining eligible fee assets to the CLC Pool (cash-eligible E_cash by default; E_kind only if explicitly allowlisted per program) and publish the epoch fee-access budget F_epoch (may be zero), which bounds sCLC swap-access windows/caps as defined in §7.4.

**KPI-Linked Budgets.** Advisory data to adjust the waterfall parameters via on-chain policy keyed to pool-health KPIs: fulfillment rate, reserve adequacy, limit utilization, routing pass/fail, guarantor performance, and redemption latency. All edits are timelocked and logged on-chain.





![CLC DAO template](/white-paper/CLC-DAO-template.svg)


The Contributor Flow diagram above shows:




1. Liquidity Providers supporting endowments - stable coins going to CLC Vault and receiving CLC tokens (as DAO Members).
2. CLC holders can stake them to receive stCLC DAO voting rights (and sCLC … step 4)
3. Pools in the CLC Registry send (automatically) a % of their fees to the Waterfall Contract. The waterfall contract pushes these fees into:
    1. Insurance & Ops Vault: funded primarily by cash-eligible fee assets (E_cash) and/or conversions under policy; in-kind fees (E_kind) do not count toward fiat-denominated obligations.
    2. Back into the CPs based on voting
    3. Used for DEX Float Reduction (capped repurchase + retirement / non-voting sink) only when trigger conditions are met; otherwise set to zero.
    4. Into the CLC Pool (Fee Budget Vault): holds post-waterfall eligible fee assets; sCLC provides capped, epoch-bound swap access only to allowlisted assets/programs and may be zero.
4. After the Safety Waterfall, the protocol may mint sCLC under epoch policy and allocate it to: (a) stCLC holders as fee-credit authorization (pro-rata; may be zero) and/or (b) approved gauges as incentives to productive liquidity providers and routing operators (may be zero).
5. CLC Fee Budget Vault (CLC Pool) - Holds post-waterfall pooled fee assets. When enabled, sCLC provides capped, epoch-bound fee-credit spend authority (pro-rata to staked/escrowed CLC) to execute allowlisted deployments (e.g., seed specified CP inventories, purchase coverage collateral) by swapping from designated fee-holding vaults within published windows/caps. This is not a claim on vault ownership.


---
