# Smart Contracts

## Voucher (GiftableToken)

A **voucher** is an ERC20 token that represents a **redeemable commitment** — a pre-paid claim on future delivery of goods or services (think gift cards, service credits, loyalty points). The `GiftableToken` contract extends a standard ERC20 with features tailored for community issuance:

- **Authorized minting** — The token owner designates **writers** (minters) who can issue new vouchers via `mintTo`. This allows multiple trusted parties (e.g. a cooperative's officers) to issue on behalf of the community.
- **Expiration** — Each voucher can carry an optional expiry timestamp. After expiry, all transfers are blocked and the token enters a terminal state. This enforces time-bounded commitments.
- **Burn tracking** — The owner can burn tokens, and cumulative `totalMinted` / `totalBurned` counters provide transparent supply accounting.

Vouchers are the **edges** of the network — every pool holds and exchanges them. A clinic might issue health-service vouchers; a farmers' cooperative might issue maize-delivery vouchers; a transport company might issue ride credits. Each is its own `GiftableToken` instance.


## Commitment Pool

A **commitment pool** is the on-chain clearinghouse described in the white paper. It is not a single contract but a **composed suite** of contracts that together implement the four CPP interfaces: **Curation, Valuation, Limitation, and Exchange**.

### SwapPool (Exchange + Vault)

The `SwapPool` is the **core contract** — the vault that custodies voucher liquidity and executes swaps. It integrates all other components through dependency injection:

- **Token Registry** (`have(address)`) — **Curation**: which vouchers are listed
- **Quoter** (`IQuoter`) — **Valuation**: how vouchers are priced relative to each other
- **Fee Policy** (`IFeePolicy`) — Fee schedule for swaps
- **Limiter** (`ILimiter`) — **Limitation**: per-token holding caps
- **Protocol Fee Controller** (`IProtocolFeeController`) — Network-level fees

**How a swap works:**

1. **Deposit** — The user transfers the input voucher into the pool. The pool verifies the token is listed (Token Registry) and within holding limits (Limiter).
2. **Quote** — The pool asks the Quoter: *"how much of the output voucher is this input worth?"* The quoter adjusts for decimal differences and/or exchange rates.
3. **Fee calculation** — The Fee Policy returns the applicable fee rate (in PPM). If a Protocol Fee Controller is active, the protocol's share is carved out of that fee.
4. **Transfer** — The pool sends the net output amount to the user, routes the protocol fee to the protocol recipient, and accumulates the pool owner's fee share internally.
5. **Receipt** — A `Swap` event is emitted with full details: initiator, tokens, amounts, and fee — providing the **immutable receipt** required by CPP.

**Seal mechanism** — Critical configuration (quoter, fee policy, fee address) can be progressively **sealed** using bitwise flags. Once sealed, a parameter becomes immutable — allowing pool stewards to credibly commit to their published terms.

**Fee collection** — The pool steward (owner) can withdraw accumulated fees to a designated `feeAddress` at any time. Fees are tracked per-token, so a pool earning fees in multiple voucher types can collect each independently.

### Quoter (Valuation)

The quoter implements the pool's **Value Index** — it answers: *"given X of token A, how much of token B should the user receive?"*

Two implementations are provided:

**DecimalQuoter** — The simplest quoter. It treats all vouchers as having equal value and only adjusts for decimal precision differences. If voucher A has 6 decimals and voucher B has 18 decimals, it scales accordingly. This is appropriate when vouchers within a pool are pegged 1:1 (e.g. multiple community vouchers all denominated in the same local currency unit).

**RelativeQuoter** — A richer quoter that maintains a **price index**: a mapping from each token address to an exchange rate expressed in **parts per million (PPM)**. The pool steward sets these rates (e.g. "voucher A = 1,000,000 PPM, voucher B = 500,000 PPM" means A is worth twice B). The quoter then computes:

```
output = (inputAmount * inRate) / outRate
```

…adjusted for decimal differences. This enables pools to host vouchers with different values (e.g. a transport credit worth 50 KES alongside a food voucher worth 100 KES) while quoting accurate exchange amounts.

### Fee Policy

The `FeePolicy` contract manages swap fees with a **two-tier structure**:

- **Default fee** — A pool-wide fee rate in PPM (e.g. 20,000 PPM = 2%).
- **Pair-specific overrides** — The steward can set custom fees for specific token pairs (e.g. a lower fee for stablecoin-to-voucher swaps, a higher fee for riskier pairs).

When the pool calculates fees, it checks for a pair-specific rate first and falls back to the default. All fees are expressed in **PPM** (parts per million), where 1,000,000 PPM = 100%.

### Limiter

The `Limiter` enforces **credit limits** — how much of any given voucher a pool is willing to accept. This is the on-chain expression of the **Commitment–Capacity Identity** described in [Chapter 2](/white-paper/chapter-02-the-accounting-shift-from-assets-to-trust): *Credit − Debt = Backing Capacity*.

The pool steward (or authorized writers) sets limits like: *"Pool X will accept at most 10,000 of Voucher A."* This bounds the pool's **credit exposure** to each voucher issuer — the pool is declaring how much of that issuer's outstanding debt it is willing to hold, based on its assessment of the issuer's capacity to deliver.

Limits are checked on every deposit. If accepting more of a token would push the pool's balance beyond the credit limit, the transaction reverts. This ensures pools only take on commitment debt they believe can be fulfilled.


## Protocol Fee Controller

The `ProtocolFeeController` is the **network-level** fee mechanism — the "rake on the pool's rake" described in [Getting Started](/introduction/getting-started). It is a single contract shared across all pools in the network.

- **Fee rate** — A percentage (in PPM) of each pool's swap fees that is redirected to the protocol. For example, if a pool charges 2% and the protocol fee is 10%, then 0.2% goes to the protocol and 1.8% stays with the pool.
- **Fee recipient** — The address that receives protocol fees (typically a DAO treasury or multi-sig).
- **Active toggle** — The controller can be activated or deactivated. When inactive, pools operate with zero protocol fee regardless of the stored rate.

This funds the shared safety and operational layer described in the white paper: insurance buffers, audits, monitoring, and liquidity mandates.
