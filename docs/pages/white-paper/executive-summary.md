## **Executive Summary**

Modern financial systems excel at trading volatile assets but struggle to finance real production, community resilience, and long-term commitments. The **Commitment Pooling Protocol (CPP)** offers an alternative: a simple, extensible protocol for issuing, routing, and settling redeemable commitments (claims on future goods, services, and labor) within and across communities. Issuers are responsible for their published Voucher commitments; Pools may add expressly disclosed guarantees; neither CLC nor GEF is a universal guarantor.

The historic **Sarafu Network** service used CPP concepts to coordinate community Vouchers, savings groups, mutual-aid systems, and production commitments. That service later transitioned to the Cosmo-Local Credit PWA. This was a service transition, not a representation that every historical account, Wallet, Token, Pool, balance, report, transaction, or obligation migrated.

**Historical Sarafu Network snapshot (Celo activity from 5 July 2023 through 20 July 2025):**

**Historical on-chain source:** [Dune Analytics dashboard](https://dune.com/grassrootseconomics/sarafu-network)



* 26,367 users
* 285,197 peer-to-peer exchanges
* 188 unique active commitment pools
* 745 unique active vouchers
* $320,692 pool swap volume
* 899 impact reports published ([historical reports archive](https://sarafu.network/reports))

These figures preserve the provenance of the earlier service. They are not current Cosmo-Local Credit usage figures and do not establish continuity of any particular user or asset.

The historical experience motivated research into optional liquidity and governance layers that could:



1. Inject liquidity across pools,
2. Coordinate accountable governance as the network scales,
3. Coordinate expressly scoped and funded shared insurance policies and incident runbooks,
4. Provide bounded, policy-gated fee-credit (ex-post swap access to a defined portion of pooled fees) for those who underwrite risk and coordination.

The broader **Cosmo-Local Credit (CLC)** design explores how to fulfill these roles. These proposed layers are distinct from the capabilities currently exposed by the public PWA.

CLC is designed as a win-win routing layer across curated commitment markets:



1. Pool Stewards curate Voucher listings and publish rules and any guarantees they choose to assume; their performance can become discoverable and comparable.
2. Where a separate credit facility is expressly documented, lenders and liquidity providers may finance real production while accepting redeemable Vouchers as collateral or a repayment instrument.
3. Under those transaction-specific credit terms, producers or borrowers may repay through agreed cash or in-kind performance.
4. Consumers can browse curated markets and redeem Vouchers under issuer terms. An ordinary Swap, its asset direction, or a Voucher redemption does not by itself create or discharge a loan.
5. Governance participants direct liquidity mandates to increase settlement velocity and may receive bounded, policy-gated access to eligible fee assets only as defined by published policy.

The proposed CLC design includes a **network governance and liquidity coordination layer (including a CLC token design)** intended to align liquidity providers, Pool creators, communities, and Stewards around one shared goal:


    **Increase the velocity of settlement of real-world commitments while preserving care, fairness, and resilience.**

**A worst-case governance scenario:** A hostile actor accumulates CLC voting power (e.g., via public markets) and attempts to redirect fee flows, weaken curation standards, or force liquidity mandates that harm communities.

This design therefore treats anti-capture and credible exit (forkability) as first-class safety properties: (i) time-locked and multi-threshold governance for critical parameters, (ii) voting power that requires lockups (no instant governance via spot purchases), (iii) transparent delegation and conflict-of-interest rules, and (iv) a documented fork-and-migrate process so pools and communities can exit if governance is captured (see §11.5).


---
