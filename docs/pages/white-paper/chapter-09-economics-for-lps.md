## **9. Economics for LPs**


### **9.1 Revenue Streams**



1. **Network Fee Rake → Policy Pools.** A portion of per-pool fees is routed to the **CLC Pool** via the Waterfall contract which starts with Insurance, Core Ops, Liquidity Mandates, and (if, when, and to the extent enabled) **sCLC swap windows**.
2. **Policy-gated fee-credit (ex-post)**
3. **Routing Fees**: Fees from multi-hop routes discovered by routers.
    1. Rebalancing / Netting Fees (optional): Fees earned for executing batch netting cycles and inventory rebalancing routes that reduce imbalance and increase successful settlement throughput (ex-post, policy-bound).
4. **Curation & Validation Fees:** pools may allocate a disclosed portion of fees to listing/verification/monitoring roles (curators, auditors, claims modules) under published mandates.


### **9.2 Illustrative Fee Math (Example Only)**



* Per-pool usage fee: 30–500 bps depending on voucher class and risk tier.
* Network rake: 10–30% of per-pool fees -> Waterfall -> CLC Pool.
    * **Worked example** ( “2% fee” case). If a pool charges f_p = 2.00% and the DAO rake share is r_p = 20% of that pool’s fees, then the effective network fee rate on routed value is:
    * τ_p = f_p · r_p = 2.00% · 20% = 0.40% = 40 bps.
    * Convertibility matters. If only χ = 25% of fee inflows are cash-eligible/convertible (E_cash), then cash-usable effective revenue is ~10 bps (40 bps × 0.25). Therefore, meaningful sCLC fee-access budgets (F_epoch) require both high settlement throughput and sufficient χ; otherwise F_epoch may remain zero for long periods.
* Routing fee: 5–20 bps across hops.
* Distribution to Waterfall (policy-bound)
* **Net LP Credit Access** drivers: local swap usage, routing volume, DAO-deployed liquidity credit access, less losses/insurance haircuts.

***Accounting only: Any annualized figures are ex-post metrics of policy-gated swap access to pooled fees (not promised returns) and may be zero or negative after losses/haircuts.***

**Downside Examples (ex-post):**



* Inventory Loss Case: losses from defaults/redemption delays reduce fee-credit access by X (haircut).
* Run-Protection Case: limiter-triggered throttling reduces settlement flow, lowering F temporarily.
* Policy Case: governance sets fee-credit budget F_epoch = 0 (no sCLC exit) during incidents or rebuild phases.

*Numerical schedules are governance parameters and will be finalized via on-chain proposals and timelocks.*


---
