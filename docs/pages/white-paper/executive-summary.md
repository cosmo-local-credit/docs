# Executive summary

The **Commitment Pooling Protocol (CPP)** describes how independently governed Commitment Pools can curate redeemable commitments, publish exchange-rate methods and limits, hold inventory, and enable accountable exchange. Issuers remain responsible for their voucher commitments. Pool Stewards remain responsible for Pool rules and any guarantee they expressly assume. Neither the CLC App nor GEF is a universal guarantor.

Protocol v1.1.0 provides current direct-swap building blocks: `GiftableToken`, `SwapPool`, optional registries and valuation modules, Pool token-balance caps, Pool fees, an additional protocol fee, and a quote-only Solidity `SwapRouter`. The production CLC App and CLC Core now discover same-chain routes through as many as three Pools, produce pinned-block quotes, simulate and prepare signed atomic wallet batches, relay them, and group their settlement records. The contracts still do not record real-world fulfillment, create automatic liquidity-provider shares, perform cross-chain routing or batch netting, or provide universal reserves, guarantees, or insurance.

The historic **Sarafu Network** used commitment-pooling concepts across community currencies, savings groups, mutual-aid systems, and production commitments. Its service later transitioned to the CLC App. This was not a representation that every historic account, wallet, token, voucher, Pool, balance, report, participant, or obligation migrated.

**Historical Sarafu Network snapshot — Celo activity from 5 July 2023 through 20 July 2025**

**Source:** [Dune Analytics dashboard](https://dune.com/grassrootseconomics/sarafu-network)

- 26,367 users
- 285,197 peer-to-peer exchanges
- 188 unique active Commitment Pools
- 745 unique active vouchers
- $320,692 Pool swap volume
- 899 reports published ([historical reports archive](https://sarafu.network/reports))

These figures are historical evidence, not current CLC usage figures.

The figures reproduce the dashboard's published labels for one coherent measurement window. “User,” “active,” “exchange,” and the USD conversion for Pool swap volume depend on the underlying dashboard queries and valuation method; they should not be treated as universal CLC KPI definitions. This repository has not independently recomputed the dataset. Any reuse should preserve the dates, source link, labels, and historical qualification. The proposed measurement requirements in [Appendix C](/white-paper/appendix-c-kpi-definitions) are stricter for future reporting.

The wider CLC design combines current routing with proposals for how compatible networks could:

1. extend accountable route services across additional registry or policy profiles and domains;
2. coordinate accountable network services without overriding local responsibility;
3. support separately funded liquidity mandates, guarantees, reserves, or insurance policies;
4. measure Pool swaps separately from voucher presentment, fulfillment, and discharge; and
5. use a proposed network rake and separately adopted service fees to fund shared services.

The proposal includes a **proposed CLC governance token** and a **proposed CLC Network Pool**. Neither is part of the current App or Protocol v1.1.0.

Under the proposed model, liquidity and governance participants could act only through separately adopted programs with published eligibility, risks, controls, transfer rights, recovery terms, and fee rules. Ordinary Pool deposits create no automatic share, repayment, withdrawal, reward, or governance right.

The shared objective is:

> Increase accountable exchange and the fulfillment of real-world commitments while preserving care, fairness, local responsibility, and resilience.

Anti-capture and credible exit remain core design goals. Proposed controls include time-delayed governance, multiple approval thresholds, transparent delegation, conflict rules, incident review, and a documented fork-and-migrate process. These controls would reduce selected governance risks but could not eliminate loss or guarantee outcomes.
