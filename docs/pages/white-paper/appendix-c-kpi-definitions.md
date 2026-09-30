## C. Proposed KPI definitions

These KPIs form a proposed measurement specification, not a statement that the current App or Protocol records every required event.

Every published KPI must include:

- responsible publisher and data source;
- event or state definition;
- cohort or measurement period;
- unit and valuation method;
- valuation timestamp;
- inclusion and exclusion rules;
- treatment of partial, disputed, expired, inaccessible, and corrected records;
- required off-chain evidence or attestation;
- revision history and data-quality limitations; and
- whether the result is on-chain, reported, attested, independently verified, or estimated.

| KPI | Proposed definition | Required evidence and exclusions |
| --- | --- | --- |
| **Valid presentments** | Count or units accepted into the issuer's redemption process during a period | Presentment identifier, issuer, holder authorization, amount, time, status; exclude duplicates and invalid requests |
| **Fulfillment rate** | Fulfilled valid presentments divided by valid presentments for the same mature cohort | Separate issuer-performance evidence; report open, rejected, disputed, partial, and corrected cases |
| **Discharge completeness** | Fulfilled presentments with a discharge record divided by fulfilled presentments | Burn, cancellation, disabling record, or other non-reuse evidence tied to the fulfillment |
| **Fulfillment latency** | Median and 90th percentile of presentment-to-fulfillment time | Do not substitute issue-to-presentment or acquisition-to-presentment holding time |
| **Holding duration** | Median and distribution of acquisition-to-presentment time | Identify the acquisition event and exclude unknown acquisition times |
| **Outstanding eligible commitments** | Eligible third-party commitments remaining after defined exclusions | Issuer identity and terms; exclude applicable issuer inventory, expiry, burn, discharge, tests, and non-commitment tokens |
| **Pool swap volume** | Value of completed direct Pool swaps under one disclosed valuation method | On-chain settlement events, token units, rate source, time; do not classify as issuer fulfillment |
| **Pool inventory** | Measured supported assets held by a Pool at a stated time | Contract balances, fee reservations, inaccessible assets, valuation method, and owner-withdrawal powers |
| **Reserve adequacy** | Eligible, available reserve assets divided by expressly covered exposure | Coverage policy, asset eligibility, custody/control, liabilities, exclusions, and valuation; not total token supply by default |
| **Limit utilization** | Measured Pool token balance divided by its current configured cap | Limiter address, token, Pool, timestamp, changes, and periods without a limiter |
| **Quote pass rate** | Successful quote responses divided by valid quote attempts | Quote-only result; not route execution |
| **Route execution rate** | Completed multi-hop executions divided by valid execution attempts | Applicable only to an implemented execution system; report per-hop and atomicity rules |
| **Guarantor recovery** | Eligible recovery received divided by covered claims paid | Identified guarantor, claim policy, timing, costs, disputes, and write-offs |
| **Proposed network revenue** | Proposed network rake received plus separate routing/service fees received | Exclude gross Pool fees retained by Pools and avoid counting the rake twice |
| **Governance timeliness** | Time to detect, decide, pause, repair, and close an incident | Defined clocks, responsible bodies, emergency powers, appeals, and missing events |

Social-impact claims require a separate methodology. Blockchain activity alone does not establish identity, issuer performance, satisfaction, community health, causality, or impact.
