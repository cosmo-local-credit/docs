## A. Proposed measurement and fee model

This appendix defines a proposed measurement framework. Protocol v1.1.0 does not record issuer fulfillment, real-world discharge, or every data field required below.

### Event and stock definitions

For voucher class *j*, cohort or period *t*, and a disclosed valuation method *m*:

- `O_{j,t,m}`: value of outstanding eligible commitments at the measurement boundary.
- `X_{j,t,m}`: value of completed Pool swaps during the period.
- `P_{j,t}`: units validly presented to the issuer for redemption.
- `F_{j,t}`: presented units with separately evidenced issuer fulfillment.
- `G_{j,t}`: fulfilled units with a discharge record preventing reuse.

`O` cannot be inferred from token supply alone. A measurement policy must identify the responsible issuer and exclude, as applicable, issuer-held inventory, burned units, expired units, discharged units, test balances, inaccessible balances, and tokens whose terms do not create an outstanding third-party commitment.

Each valued measure must publish the unit, source, valuation method, timestamp, and treatment of divergent Pool exchange rates. An on-chain transfer can support `X` or presentment evidence; it does not by itself establish `F` or `G`.

### Cohort-based fulfillment measures

For a cohort of valid redemption presentments:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Use the same closed or mature cohort in each numerator and denominator. Report rejected, withdrawn, expired, disputed, partially fulfilled, corrected, and still-open presentments separately.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

Fulfillment latency measures issuer service after presentment. Holding duration is a separate measure and must not be labelled redemption latency.

### Distinct velocity measures

A proposed commitment-discharge velocity may be calculated only where `O` and fulfilled value use the same valuation method:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

A Pool swap-activity measure is separate:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Neither value proves social impact, issuer capacity, profitability, or cash convertibility.

### Proposed network revenue

Let:

- `PF_t` be gross Pool fees generated during the period;
- `NR_t` be the proposed network rake actually received as a disclosed share of those Pool fees;
- `RF_t` be separate proposed routing or service fees actually received; and
- `χ_t` be the measured share of received revenue that is eligible and convertible for a stated cash-denominated use after costs and policy constraints.

From the proposed network-budget perspective:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Do not add `PF_t` to `NR_t`: the rake is a transfer from gross Pool fees and would otherwise be counted twice. Current Protocol v1.1.0 instead supports an additional protocol fee; its receipts must be reported separately from this proposed rake model.
