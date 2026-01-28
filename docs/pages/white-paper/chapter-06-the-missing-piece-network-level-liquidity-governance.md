## **6. The Missing Piece: Network-Level Liquidity & Governance**

CPP on Sarafu.Network today enables interoperability but lacks:



1. a mechanism for LPs to **inject liquidity across pools and access sCLC**, and
2. decentralized decision-making as the network scales.

CLC DAO addresses both by introducing a **network clearing house (the CLC Pool)** and a **governance token (CLC)**.


### 6.1 Participation Mechanics: Downside Protection vs. Upside Pull

**Downside protection** is built in at three levels: trade limits, inventory enforcement, and an explicit loss/insurance waterfall. CPP implemented via the CLC DAO makes risk explicit and bounded at the protocol level: swaps enforce per-voucher windows/caps and inventory checks (cannot swap what the vault does not hold) and emit immutable receipts for every action.

Network policy adds circuit breakers, timelocks, and an insurance runbook with a transparent loss waterfall (issuer/guarantor bonds → pool reserves → network insurance → policy-capped haircuts → clawbacks for fraud).

Governance enforcement is narrow and reviewable: registry actions (list/suspend/delist) are timelocked where possible, include notice-to-cure and appeal paths, and emergency actions require incident reporting and automatic review/sunset.

**Upside Pull (why participation is attractive):** CPP implemented via CLC DAO increases access and optionality by allowing real production and service vouchers to function as collateral and as repayment instruments, so settlement by end-users can accelerate debt payoff (“repayment via delivery”), while keeping limits, inventories, receipts, and recourse.

Confederation and routing multiply fulfillment paths across pools (more routes, more netting surfaces), implementing a better matching mechanism - raising settlement velocity and fee volume - so liquidity providers and operators benefit from real settlement activity rather than speculative churn.

Participation remains permissioned only by published limits and health policies (not discretionary gatekeepers), with human-readable failure codes and auditable logs to reduce friction and increase user agency.


---
