## **1. Commitment Pooling Protocol (CPP): the core primitive**

**Mental model:** A Commitment Pool is a governed arrangement for admitting vouchers or other assets, publishing exchange rules, holding inventory, and enabling swaps. Holders later present vouchers to their issuers for real-world fulfillment. Pool exchange and issuer fulfillment are separate lifecycles.

CPP coordinates value through clearly described commitments. The model is discussed in [Grassroots Economics: Reflection and Practice](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 What is a commitment?**

A commitment is an identified party's promise of future delivery—for example food, transport, labor, storage, or another lawful good, service, benefit, or performance. A **voucher** is a token or record represented as that commitment under published terms.

The token contract records digital mechanics. Voucher terms identify the issuer, Offering, capacity, place, timing, restrictions, presentment, fulfillment, complaints, and discharge process.

### **1.2 What is a Commitment Pool?**

A Commitment Pool is the governed arrangement. It can be stewarded by an individual, cooperative, community group, public agency, federation, multisig, service operator, or another accountable structure.

Relevant roles and authorities include:

- **Pool Steward:** publishes and administers Pool rules and any expressly assumed guarantee;
- **Pool owner:** holds current `SwapPool` owner powers;
- **proxy administrator:** can upgrade a proxied implementation;
- **dependency controllers:** govern configured registries, quoters, limiters, or fee components;
- **route finder or operator:** may discover quotes or, in a future implementation, execute a separately authorized route; and
- **guarantor:** assumes a defined obligation only through published, funded terms.

CPP groups Pool functions into four concepts:

- **Curation:** admit supported tokens or vouchers.
- **Valuation:** publish the method used for an exchange rate or quote.
- **Limitation:** apply current Pool token-balance caps or other separately implemented controls.
- **Exchange:** hold inventory, execute swaps, account for fees, and emit transaction records.

Protocol v1.1.0 implements these functions through `SwapPool` and optional dependencies. Its current `Limiter` caps a token balance at a Pool; it does not provide rolling, per-account, or network-wide swap limits. Its current `SwapRouter` calculates multi-Pool quotes; it does not execute swaps.

The wider proposed CPP design may add rolling limits, account controls, execution routers, HTLC or escrow paths, and batch netting. Those are proposed components, not descriptions of the current limiter or router.

### **1.3 Current direct-swap logic**

A current direct Pool swap:

1. checks the optional registry for the input and output tokens;
2. measures the input received;
3. obtains a quote from the configured quoter or applies raw-unit parity;
4. checks the resulting Pool token balance against the optional limiter;
5. calculates the Pool fee and any additional protocol fee;
6. checks available output inventory;
7. transfers the protocol fee and output and accounts for the Pool fee; and
8. emits swap events.

The quote is a transaction parameter, not proof of issuer capacity, redemption value, fair value, cash convertibility, or a guarantee.

### **1.4 Wider use**

Commitment Pools can support community exchange, production, mutual aid, public programs, and other accountable structures. A separately documented credit product could use a voucher as collateral or a repayment instrument, but it would require supplemental and transaction-specific terms. An ordinary send, Pool deposit, Pool swap, redemption presentment, fulfillment, or discharge is not automatically a loan or repayment.

CPP is intended for accountable exchange and auditable transaction records, not speculative churn. On-chain records still do not prove real-world fulfillment or social impact.
