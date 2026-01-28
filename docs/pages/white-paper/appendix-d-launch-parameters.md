## D. Launch Parameters 

All values set on-chain by DAO vote at deployment and enforced by DAO-owned contracts



* Quorum Tiers (of staked voting power):
    * Q1 (Routine): ≥ 4% quorum, >50% approval.
    * Q2 (Sensitive): ≥ 10% quorum, ≥60% approval.
    * Q3 (Critical): ≥ 20% quorum, ≥66.7% approval.
* Timelocks (minimum delay before execution):
    * T1: 48 hours (Q1 actions)
    * T2: 7 days (Q2 actions)
    * T3: 30 days (Q3 actions)
* Epoch Cadence: default 7 days (policy-set). Each epoch includes: 
    * (i) gauge voting window, 
    * (ii) emissions calculation, 
    * (iii) publication of F_epoch (may be zero), 
    * (iv) sCLC swap windows (if enabled).
* Gauges: canonical list of eligible pools/mandates for incentive direction; edits are timelocked and require Q2 quorum or higher.
* Emissions Budget (sCLC): a bounded, policy-set maximum per epoch; may be zero; cannot override Waterfall priorities.
* Anti-gaming: wash-loop exclusion, beneficial-owner clustering, per-entity caps, delayed finalization, and dispute/appeal windows for manipulated metrics.
* Emergency Pause: immediate (multisig/DAO emergency role), auto-sunsets in 72 hours unless ratified by Q2.
* Network Fee τ: 20–60 bps (default 30 bps) on routed value
* Pool Fee Range (steward-set): 0%–20% depending on voucher class and risk tier (disclosed on-chain per pool).
* Network Rake Share r: DAO takes r% of each pool’s collected fees (default 20%; policy-bounded per pool class).
*   Effective network fee rate per pool: τ_p = f_p · r_p (rake-on-rake).
* Fee Asset Eligibility Sets:
*   	E_cash (cash-eligible): allowlisted stables/cash-equivalents and (optionally) major liquid tokens.
    * E_kind (in-kind): non-fiat-redeemable vouchers and other non-convertible fee assets.
* Conversion Policy (fungible assets only): venue allowlists, TWAP windows, max slippage, and monthly caps; quarterly reporting of χ (cash-eligible share).
* F_epoch enablement rule: publish F_epoch only if (i) InsuranceFund ≥ Target and (ii) B_core is fully funded for the epoch; otherwise F_epoch = 0.
* Router Fee Cap: ≤ 20 bps per route
* Reserve Floors by Class: Cash-Equivalent Stable ≥ 100% off-ramp attestations
* Segregated Risk Lanes:
    * Cash-Equivalent lanes do not cross-subsidize goods/services voucher losses.
    * No routing from Cash-Equivalent to higher-risk classes unless explicitly opted-in per account/pool.
* Default router policy: “safe-by-default” (deny cross-class risk unless allowlisted).
* Insurance Haircut Cap (per incident): ≤ 10% of affected voucher balance, with make-whole schedule
* **DEX Float Reduction Parameters (if enabled):**
    * **DEX float definition:** sum of CLC balances in **allowlisted** external liquidity venues (list on-chain), measured by oracle/indexer method M.
    * **Trigger:** activate only if DEX float > **X%** for **Y** consecutive days.
    * **Spend/volume caps:**≤**Z%** of trailing-month fee inflows **and/or**≤**W%** of trailing-day DEX volume (use the stricter cap).
    * **Execution controls:** TWAP window **T**; max slippage **S**; randomized delay range **R**; **no publication of exact timing** beyond the standing policy.
    * **Emergency stop:** auto-disable if **InsuranceFund / Target &lt; I_min** or if any **Reserve Floor** is breached.
    * **Disclosure requirement:**“Not intended to support price; settlement does not depend on DEX price.”
    * **Receipt transparency:** all executions emit on-chain receipts and are summarized in the epoch report.
