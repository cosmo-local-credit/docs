## B. Fee Waterfall (executed monthly, on-chain)

Let F_in be all fees collected across pools/routers during the epoch.

Eligibility & conversion note. F_in may include both cash-eligible fee assets (E_cash) and in-kind fee assets (E_kind). The protocol may convert allowlisted fungible assets (E_cash) into stables/fiat when needed to meet insurance payouts, maintain off-ramp liquidity, and fund core operations—while prioritizing in-network settlement and using liquidity mandates/CLC Pool inventories to reduce settlement latency.



1. Insurance Reserve Target (IRT): top-up InsuranceFund to Target = Σ_p (RW_p · D_p), 
    1. where D_p is the pool’s outstanding obligations stock (valued in the network index),
    2. with RW_p (risk weight) = f(fulfillment_rate, issuer_concentration, limit_utilization, SLA latency).
    3. Allocation = min(IRT − InsuranceFund, MaxTopUp).
2. Core Operations: fixed budget B_core (timelocked; ±20% with quorum Q2).
3. Liquidity Mandates: allocate L to approved pools/routers per mandate schedule.
4. Pooled Fees — allocation of remaining F_in − (1 + 2 + 3):
    4.    • Protocol Operations/Insurance (non-distributive): α
    5.    • Liquidity Programs (incentives/rebates):           β
    6.    • Insurance Buffer (overflow reserve):               γ

    subject to α + β + γ = 1, policy bounds, and per-budget caps.


**Guardrail:** Waterfall allocations are for (i) insurance adequacy, (ii) operations, and (iii) liquidity needed for settlement. They MUST NOT be framed or executed as price-support operations.

Any CLC acquired via DEX Float Reduction is **retired** (burned) to avoid custody and governance-risk; it is not distributed to stakers.
