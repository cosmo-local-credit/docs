## F. Worked Example - Rake-on-Rake, Convertibility (χ), and Break-Even Runway

Fees are collected in the asset that moves through pools. Some fee assets are cash-eligible/convertible (E_cash), others are in-kind (E_kind). Define χ as the trailing-month share of fee inflows that are cash-eligible/convertible after slippage and policy constraints.

Example A.

Assume:

- Average pool usage fee f = 2.00%

- Network rake share r = 20% of pool fees

- Effective network fee rate τ = f · r = 0.40% = 40 bps

- Monthly cash-denominated requirement B_cash = Core Ops + required Insurance Top-ups (USD)

- Cash-eligible share χ (0 to 1)

Then required monthly routed value (in USD-indexed terms) to reach cash break-even is approximately:

R_required ≈ B_cash / (τ · χ)

Illustration (τ = 40 bps):

- If B_cash = $150,000/month and χ = 25% → R_required ≈ $150,000 / (0.004 · 0.25) ≈ $150,000,000 / month

- If B_cash = $150,000/month and χ = 50% → R_required ≈ $75,000,000 / month

- If B_cash = $150,000/month and χ = 100% → R_required ≈ $37,500,000 / month

Runway to non-zero sCLC budgets.

Because sCLC fee-access budgets (F_epoch) are downstream of: (1) Insurance targets, (2) Core Ops, and (3) Liquidity Mandates, F_epoch may remain zero until R_monthly consistently exceeds R_required under conservative χ. This is a long time-frame commitment.

Time-to-target worksheet (update quarterly).

Let R_0 be current monthly routed value and g be monthly growth rate (e.g., 5% or 10%).

Time (months) to reach R_required is approximately:

t ≈ log(R_required / R_0) / log(1 + g)

The DAO will publish quarterly updates of: R_0, χ, B_cash, τ (effective), and the implied t under conservative/base scenarios.
