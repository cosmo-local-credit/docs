## D. Proposed launch parameters

Every value below is illustrative. It is not a current App default, Protocol v1.1.0 setting, guarantee, offer, or delivery commitment. A future deployment would need to adopt, enforce, monitor, and publish its actual parameters.

- **Quorum tiers for the proposed CLC governance token:**
  - Q1 routine: at least 4% quorum and more than 50% approval.
  - Q2 sensitive: at least 10% quorum and at least 60% approval.
  - Q3 critical: at least 20% quorum and at least 66.7% approval.
- **Proposed timelocks:**
  - T1: 48 hours for Q1 actions.
  - T2: 7 days for Q2 actions.
  - T3: 30 days for Q3 actions.
- **Epoch cadence:** 7 days, including any adopted voting, budget publication, and proposed sCLC windows.
- **Emergency pause:** immediate through an identified emergency authority, expiring after 72 hours unless ratified under the adopted process.
- **Proposed network rake:** 20% of participating Pool fees by default, bounded by policy.
- **Illustrative Pool fee range:** 0%–20%, published by each participating Pool.
- **Proposed routing or service fee cap:** 20 bps per route.
- **Proposed network-rake rate:** `rake_rate_p = pool_fee_p × rake_share_p`.
- **Revenue eligibility:** classify received assets as cash-eligible `E_cash` or in-kind `E_kind` under a published method.
- **Conversion controls:** asset and venue allowlists, responsible authorities, price sources, time windows, slippage limits, caps, and reporting.
- **Budget enablement:** publish a proposed fee-access budget only after adopted covered-reserve and operating targets are satisfied; the budget may be zero.
- **Risk lanes:** do not expose one asset class to another class's risk without explicit, informed opt-in under applicable law.
- **Proposed rolling and account limits:** deny unapproved cross-class activity and apply adopted caps.
- **Optional coverage reduction:** only where pre-existing coverage terms, required consent, and applicable law authorize it; it does not by itself reduce an issuer's voucher commitment or an on-chain balance.
- **External-liquidity controls, if separately enabled:** publish venue scope, measurement method, triggers, spend and volume caps, execution controls, emergency stops, and receipts. Do not present the program as token-price support.

Current Protocol v1.1.0 Pool fees, additional protocol fees, and Pool token-balance caps remain governed by the deployed contracts and configuration, not these proposed values.
