## A. Math Box - Settlement, Fees, Fee Pooling

Definitions (per voucher j, per period):

D_j  := outstanding debt (unsettled vouchers) valued in the network index

S_j  := value of redemptions (settlements) routed through pools

V_j  := settlement velocity for voucher j

Pool- and Network-Level:

D_j = ∑_k D_{j, k}

S_j = ∑_k S_{j, k}

V_j = S_j / D_j           (if D_j = 0, define V_j = 0)

Aggregate across all vouchers:

D_tot = ∑_j D_j

V_settle = (∑_j S_j) / D_tot  =  (settlement flow) / (outstanding stock)

Fee volume per period:

F ≈ τ · V_settle · D_tot

Cash-usable fee revenue (convertibility constraint). Let χ ∈ [0,1] be the fraction of fee inflows that are cash-eligible/convertible (E_cash) after slippage and policy constraints. Define:

F_cash ≈ χ · F

Operational break-even and any non-zero sCLC fee-access budget must be evaluated on F_cash.

LP fee ex-post metrics (per period, rough):

Ex-Post-Metrics_LP ≈ (ϕ · F) / K

where τ = average network fee rate; ϕ = fee share to LPs; K = LP capital staked.
