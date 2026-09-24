## **1. Commitment Pooling Protocol (CPP): The Core Primitive**

**Mental model:** A Commitment Pool is like a small, governed **clearing house** for community “gift cards” (Vouchers). People deposit Vouchers or other accepted assets, exchange them under published rules, and redeem Vouchers for the goods or services described by their issuers. Configured contracts can enforce limits and record transactions. Any guarantee, remedy, or cross-Pool route exists only where it is expressly implemented and disclosed.


CPP is a protocol for coordinating value using **commitments**. Commitments are the economy; CLC makes them open and routable. CPP is described in the book, [Grassroots Economics: Reflection and Practice.](https://willruddick.substack.com/p/grassroots-economics-the-book-is)


### **1.1 What is a Commitment?**

A commitment is a clearly defined promise of future delivery - e.g., maize, transport services, labor hours, storage, or currency redemption. These commitments are represented as **vouchers**, which function economically like **pre-paid delivery claims** (similar to gift cards / service credits). (further defined in the section of voucher schemas).


### **1.2 What is a Commitment Pool?**

Roles:



* Pool steward: decides listings, values, fees, limits, guarantees, and pauses for a specific pool.
* CLC shared services: standards/registries, routing policies, monitoring, liquidity/off-ramps, and optional insurance.
* Router/operator: finds and executes paths across pools; can prefer safer profiles and degrade toxic routes.
* Guarantor (optional): backs specific vouchers/pools with an explicit remedy if commitments fail.

A Commitment Pool is a stewarded contract suite that implements four interfaces:



* **Curation**: Registers acceptable vouchers (Commitment (token) Registry),
* **Valuation**: Maintains a value index (Value Index Registry),
    * The Value Index is the Pool’s published valuation reference for quoting one accepted asset relative to another. A reference is not a guarantee of market price, redemption value, liquidity, or convertibility. Pools using different valuation methods may interoperate where each Pool and route can quote and enforce compatible rules.
* **Limitation**: Enforces swap limits and, only for an expressly designated credit facility, any configured credit limits (Swap Limiter),
* **Exchange (Vault/Fee Registry):** Configures fees and custodies assets; executes seed/swap only if listed, valued by the pool index, within limits, and in stock; emits receipts for every action. 

Each Pool can behave like a **locally governed clearing house**, stewarded by an individual, cooperative, community group, public agency, federation, multisig, service operator, or another accountable structure.

**Big idea:** We are already doing commitment pooling all the time: wages, rent, invoices, loans, warranties, memberships, and mutual aid are all promises that get trusted, netted, and settled. Today that pooling is mostly closed, opaque, and permissioned (inside institutions and platforms) so commitments can’t easily connect or route beyond their enclosures. **CLC proposes to make the underlying protocol open and interoperable**, so commitments can be published, pooled, and routed across communities and markets - by anyone.


**Why this matters:** pools can be compared and risk-rated because their listings, limits, fees, reserves, and guarantees are explicitly published.

Minimal Swap Logic (canonical)

This is reference logic for a compatible Pool. A particular deployment or user interface may expose only a subset, such as direct Swaps; multi-hop routing and alternative settlement mechanisms are optional capabilities rather than guaranteed paths.



1. Listed?: Input and output vouchers must be listed in the Commitment Registry.
2. Price?: Compute input→output via the Value Index (with fee preview).
3. Limits?: Enforce Swap Limiter windows/caps for each voucher (and account/global if configured).
4. Exchange: 
    1. (fees): Apply Vault/Fee Registry fee rules (pair-specific OK); preview and emit on receipt.
    2. (inventory): Verify Vault inventory for the outgoing voucher.
5. Transfer & Log: Move in/out, update registries, and emit an immutable receipt that links the quote to the receipt.
6. Multi-hop?: Repeat hop-by-hop; atomic if supported, else HTLC/escrow with explicit abort paths.

**In other words:** a pool only lets people exchange vouchers that are (a) approved, (b) priced by the pool’s published index, (c) within safety caps, and (d) actually in stock - then it issues a receipt.


### **1.3 Why CPP is Different from Traditional Crypto Decentralized Exchanges (DEXs)**

Most decentralized exchanges (automated trading pools) rely on bilateral token pairs, continuous curves, and volatility-driven fees. CPP supports those use cases *and* enables low-frequency, high-impact coordination:



* Community savings (VSLAs),
* Production financing,
* Mutual credit and mutual aid,
* Insurance and guarantees,
* Lending against real output,
* Settlement support for separately documented personal or institutional debts.
* Portfolio-directed liquidity (e.g. curated pools for ecosystem services, humanitarian support, and health & wellness)

*CPP is optimized for **fulfillment** and **auditable receipts**, not speculative churn.*


---
