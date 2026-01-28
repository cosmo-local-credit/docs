## **5. From Isolated Pools to a Federated Network**

CPs interoperate when they list the same vouchers. Routers move value across pools, respecting each hop’s **value index, limits, fees, and inventory**. As pools proliferate:



* Routing paths multiply,
* Settlement velocity increases,
* Fee volume grows,
* The network becomes more valuable than any single pool.

**Routing story:** A school accepts “maize vouchers” but needs “transport vouchers.” A router finds a path across pools that accept both. The swap clears only if each hop is within limits and inventory … so the voucher reaches someone who can actually redeem it.

**5.1 Velocity Multiplier**

When pools operate in isolation, each voucher can only settle within the small local circle that recognizes it. As pools are federated via a common protocol:



1. More routes appear: a voucher can cross several pools to reach someone who can redeem it.
2. Credit is aggregated: multiple pools’ acceptance capacity can support the same voucher type.
3. Netting surfaces: multi-lateral swaps reduce the need for bilateral matching.

The result is a higher Sj​ for a given Dˉj​: the same stock of obligations can find fulfillment faster.
Formally, if we index pools by k:





![alt_text](images/image1.png "image_tooltip")


Connectivity increases the {Sj(k)​} terms without necessarily increasing {Dj(k)}.

Thus The Velocity for (j) across the network rises as routing improves.

**5.2 Routing as a Service: Pathfinding + Rebalancing (Liquidity-Saving)**

In CLC Network, “routing” is not only a user-facing convenience (“swap voucher A for voucher B”). It is also a network liquidity service that increases settlement velocity by improving how inventory is distributed across pools and by surfacing multilateral netting opportunities.

Two routing modes:

1) End-user routing (on-demand)

Given (token_in, token_out, amount, constraints), the router discovers a multi-hop path across CPs. A route is valid only if each hop clears: (i) listing/registry checks, (ii) value index pricing, (iii) swap limiter windows/caps, (iv) fee rules, and (v) outgoing inventory availability. Execution is atomic where possible; otherwise HTLC/escrow is used with explicit abort paths.

2) Pool rebalancing / batch netting (scheduled or threshold-triggered)

Pools may opt-in to publish “rebalance intents” (or standing constraints): target inventory bands by voucher class, maximum deviation vs. the pool’s value index, per-epoch caps, and allow/deny routing preferences. Routers/clearing agents then search for multilateral cycles and chains that:

(i) satisfy every hop’s limits and inventories,

(ii) reduce inventory imbalance across pools, and

(iii) maximize total off-set value subject to policy constraints.

These cycles are executed as batch routes, producing receipts per hop (quote → receipt mapping).

**Why this works**

Obligation networks contain cycles. When cycles are processed simultaneously, obligations can be discharged faster and, in some cases, with less external liquidity than sequential bilateral processing. This “cycle surfacing” effect is what CPP routing unlocks across Commitment Pools—subject to each pool’s published value, limit, fee, and inventory constraints.

**Opt-in & sovereignty note**

Rebalancing is never forced. A pool can be routable for end-users while disabling outbound rebalancing, or can enable only specific voucher classes, caps, and counterparties.

As routing and netting improve, the network can produce more fee events from real settlement activity; this can expand (policy-permitting) the fee-credit budget that defines sCLC swap-access capacity - without turning sCLC into an equity or profit instrument.

**5.2a Confederation & Interoperability**

CLC is designed as a confederation protocol: many independent networks can run their own registries, routers, and policy layers, while still routing to one another when they share compatible vouchers and standards. This is not a hub-and-spoke monopoly; it is a mesh of overlapping curations.

**Interoperability incentive (why open source + forks help everyone):**

• Any fork/network that remains CPP-compatible can route to CLC pools (and CLC routers can route to theirs), increasing settlement paths, inventory reach, and real-world fulfillment velocity for all parties.

• More interoperable networks → more routable paths → higher throughput and fee volume from real settlement activity (not speculation), benefiting LP programs and routing services across the confederation.

• Open-source “forkability” reduces systemic risk: if any canonical registry/router becomes captured or degraded, communities can re-point or fork without bricking local economies.

**Confederation mechanics (how it works):**

1) Multi-profile discovery and explicit user/pool choice of registry roots (“network profiles”) (see §8.1).

2) Reciprocal routing: confederated networks can publish mutual allowlists (registry roots / bridge adapters) with risk parameters (caps, escrow requirements, health-score thresholds).

3) Policy separation: each profile defines its own fee norms, insurance scope, and compliance hooks; routing across profiles must satisfy each hop’s stated constraints and inventory.

**5.3. From Settlement Velocity to Fee Volume**

Every routed swap or settlement can carry a small fee, analogous to an interchange fee in card networks.

Let:



1. τ = average fee rate (e.g. 0.2% per routed value unit)
2. D_tot = “how many promises exist” (total outstanding redeemable obligations across vouchers, valued in the common index)
3. V(settlement) = aggregate settlement velocity across all vouchers

Then approximate total fee revenue per period as:

F ≈ τ · V_settle · D_tot



1. D(tot) = “how many promises exist,” (Total Value locked via swaps)
2. V(settlement) = “how fast they move,”
3. τ = “how much the network skims per unit of routed value.” Note that this is a percentage of the fees that pool stewards charge.

**Rake-on-rake clarification (pool fees → DAO rake).** Pool stewards set a per-pool usage fee f_p (as % of value routed through that pool). The CLC DAO sets a rake share r_p (as % of that pool’s collected fees). The effective network fee rate contributed by that pool is:

τ_p = f_p · r_p

The network-wide τ is the routed-value-weighted average across pools and routes (plus any router fees when applicable).

Convertibility constraint (cash-eligible vs. in-kind fees). Fees are collected in the same asset that moves through pools. If fees arrive as clinic credits or service vouchers, they can’t directly pay for auditors, incident response, or insurance unless they are settled in-network or converted under policy.
Some fee assets are cash-equivalent/convertible (stables, major liquid tokens), while others are not (non-fiat-redeemable vouchers). Let χ be the share of total fee inflows that are cash-eligible/convertible after slippage and policy constraints. Define cash-usable fee revenue as:

F_cash ≈ χ · F

Eligibility & conversion note: Fee inflows may include both cash-eligible assets (stables / major liquid tokens) and in-kind voucher assets. The protocol may convert allowlisted cash-eligible assets into stables/fiat when needed to meet insurance payouts, maintain off-ramp liquidity, and fund core operations - while prioritizing in-network settlement and using liquidity mandates/CLC Pool inventories to reduce settlement latency.

Break-even and any non-zero sCLC fee-access budgets must be evaluated on F_cash, not gross F.

**Break-even & Self-Sustaining Scenarios (illustrative, update quarterly):**

Publish a 3-row table each quarter:



* Conservative: D_tot, V_settle, τ → F; compare to Core Ops budget B_core.
* Base: same.
* Expansion: same.

“Operational break-even” is when F_cash (cash-usable fee revenue) covers (Insurance top-ups + B_core + required liquidity mandates) for 3 consecutive months under conservative assumptions. If χ is low (many fees arrive as non-convertible vouchers), break-even requires proportionally higher routed value and/or explicit conversion/subsidy policies. Therefore sCLC fee-access budgets (F_epoch) may remain zero for extended periods until safety and operating targets are sustainably met.

As pools federate:



* D(tot) tends to grow (more participants, more commitments), and
* V(settlement) tends to rise (better routing, more netting, faster fulfillment).

Both forces push fee volume F upward.

Downstream of fees: Waterfall → policy budgets → (optional) sCLC access

Higher F increases the resources available to the Waterfall (insurance targets, core ops, liquidity mandates). 

Downstream of fees: Waterfall → policy budgets → (optional) sCLC budget-exit

Only after safety and operations priorities are satisfied (insurance targets, core ops, liquidity mandates), the protocol may publish an epoch fee-credit budget F_epoch that bounds sCLC budget-exit windows/caps into designated fee-holding pools. This makes the post-waterfall budget contestable: stakers can directly reallocate a bounded portion of pooled fee assets by exercising sCLC (e.g., injecting liquidity into specific pools), providing a “vote with your feet” accountability mechanism. sCLC is downstream of real settlement throughput (fulfilled commitments), not speculation, and F_epoch may be set to zero.

Fee Flow (summary): Gross fees (in many assets) 

→ Waterfall (1) Insurance targets → (2) Core ops → (3) Liquidity/off-ramp mandates

→ Optional: publish capped fee-credit budget F_epoch (may be zero)

→ sCLC “budget-exit” lets stakers direct a bounded portion of fee assets

**5.4. Fee Pooling**

Liquidity providers (LPs) stake assets/vouchers into pools so that swaps and settlements can clear smoothly. They take on inventory and routing risk; service fees are the natural way to pay them.

**LP risks & protections (plain language)**



1. Risks:
    1. Inventory risk: you may hold assets/vouchers that are slower to redeem or rebalance.
    2. Convertibility risk: some fees arrive as non-cash vouchers; cash-usable revenue depends on χ.
    3. Incident risk: in extreme failures, remedies follow the disclosed loss waterfall (issuer/guarantor → reserves → optional insurance → capped haircuts).
    4. Governance/lock risk: participation may require lockups; changes are timelocked.
2. Protections:
    5. Limits + reserves cap the speed and size of drains/runs.
    6. Receipts + dashboards make issuer performance and incidents visible.
    7. Policy-gated fee-access is downstream of safety/ops and may be zero—preventing “promised yield” dynamics.
    8. Credible exit/forkability: communities can re-point/fork if governance is captured (see §11.5).

Let:



1. ϕ = fraction of total fees allocated to LPs (the rest can fund software, governance, guarantees, etc.)
2. K = total value of liquidity staked by LPs into the network

LP fee-access ex-post metrics (FeeFlow)… (measured from realized settlement fees; not promised returns) per period is roughly:





![alt_text](images/image2.png "image_tooltip")


This formula makes the incentive structure explicit:



1. Higher settlement velocity V(settle) → more routed value → more fees → higher fee pooling.
2. More productive debt D(tot) (claims on real output, not speculation) → larger base on which fees are pooled.
3. Reasonable fee rate τ and LP share ϕ sustain both the infrastructure and the risk-takers.

As the network scales, LPs are effectively distributed sCLC (access to the fee pool) based on how well the system coordinates and settles real obligations, not on how much it speculates.


---
