## E. Worked example — proposed network rake

This example illustrates the proposed rake model. It is not the additional protocol-fee calculation used by Protocol v1.1.0.

Assume:

- a participating Pool charges a 2.00% Pool fee;
- the proposed network rake receives 20% of that Pool fee; and
- 25% of the received rake is eligible and convertible for a stated cash-denominated use after costs.

The effective proposed network-rake rate on routed value is:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

The cash-usable portion under the assumed 25% eligibility factor is:

`cash_usable_rate = 40 bps × 25% = 10 bps`

If a proposed network budget has a monthly cash-denominated requirement of $150,000 and no other revenue, the illustrative routed value required at a 10-bps cash-usable rate is:

`required_routed_value = $150,000 / 0.001 = $150,000,000 per month`

This calculation does not include gross Pool fees retained by Pools. Adding those fees to the network rake would double-count the rake source.

A real budget analysis would also need to publish:

- actual rake and service-fee receipts;
- asset eligibility and conversion costs;
- Pool participation and route scope;
- adopted reserve and operating targets;
- losses, disputes, corrections, and unavailable assets; and
- sensitivity scenarios rather than promised growth or returns.

Any proposed fee-access or liquidity-program budget would remain downstream of its adopted priorities and could be zero.
