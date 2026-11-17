# 14. KPIs and health indicators

A deployment should publish a KPI only when it can define the event, source, cohort or period, unit, valuation method and timestamp, exclusions, correction policy, off-chain evidence, and data-quality limitations.

Current route services can measure discovery, quote, execution, settlement, and reconciliation events. Voucher fulfillment and social outcomes still require separate evidence. Recommended measures include:

- valid redemption presentments;
- cohort-based fulfillment rate;
- discharge completeness;
- presentment-to-fulfillment latency;
- acquisition-to-presentment holding duration;
- outstanding eligible commitments under a stated methodology;
- completed direct Pool swap volume;
- route discovery attempts and the number of available candidate routes;
- authoritative route-quote attempts, outcomes, depth, expiry, and quoted fees;
- routed-exchange attempts, confirmed and reverted routes, and failure reasons;
- whole-route input and output volume, counted once per route rather than once per hop;
- per-hop settlement amounts, Pool fees, protocol fees, and intermediate remainders;
- route constraints, including insufficient liquidity, Pool token-balance caps, unsupported dependencies, and wallet limitations;
- graph freshness, reconciliation duration, corrections, and failures;
- measured Pool inventory;
- Pool token-balance-cap utilization;
- discovery success and quote pass rates, kept separate from route execution and settlement rates;
- eligible reserves divided by expressly covered exposure;
- guarantor claims and recoveries under an identified policy;
- current per-hop Pool and protocol fees, kept separate from any proposed network rake or future service fees;
- governance detection, decision, pause, repair, and closure times;
- complaints, disputes, corrections, and remedies; and
- separately evidenced social or ecological outcomes.

On-chain transaction data does not by itself prove identity, issuer performance, satisfaction, causality, community health, or social impact. Those claims require their own methodology and evidence.

See [Appendix C](/white-paper/appendix-c-kpi-definitions) for the proposed measurement specification.
