# Smart Contracts

This page describes the main Pool and Voucher contracts in protocol v1.1.0. Contract behavior provides settlement mechanics; it does not replace the issuer disclosures, Pool rules, or other transaction terms that apply to a particular use.


## Voucher (`GiftableToken`)

`GiftableToken` is an ERC20 token with mechanics that an issuer can use for a Voucher:

- **Authorized minting** — The owner can designate writers that may issue tokens with `mintTo`.
- **Optional expiry** — An expiry of `0` means no contract-level expiry. Otherwise, transfers, minting, and burning revert at or after the configured timestamp. Anyone can persist the terminal `expired` state by calling `applyExpiry` directly.
- **Supply accounting** — `totalMinted` and `totalBurned` expose cumulative supply activity. The owner-only `burn` function burns tokens held by the owner address.

The token contract does **not** identify the issuer's goods or services, set a redemption value, prove capacity, or promise cash conversion. A `GiftableToken` becomes a redeemable commitment only through the issuer's separately published terms and conduct. Issuers remain responsible for accurately describing and honoring those terms.


## Commitment Pool (`SwapPool`)

`SwapPool` is a token vault and swap-settlement engine. Although it exposes ERC20 metadata for the Pool name, symbol, and decimals, the v1.1.0 contract does not mint Pool-share tokens. Liquidity is supplied by transferring tokens into the Pool, and the contract owner can withdraw available liquidity.

### Composition and optional dependencies

| Configuration | When unset | Sealable address slot |
| --- | --- | --- |
| `tokenRegistry` | Any token can pass the Pool's curation check | Yes |
| `tokenLimiter` | Deposits have no contract-level balance cap | Yes |
| `quoter` | The raw input amount is treated as the raw quoted output amount | Yes |
| `feePolicy` | The Pool fee is zero | Yes |
| `feeAddress` | Pool fees are not accrued as withdrawable fees for a designated recipient | Yes |
| `protocolFeeController` | No protocol fee is charged | No |

The five seal bits permanently lock the current `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry`, and `tokenLimiter` addresses against their corresponding setters. `protocolFeeController` and `feesDecoupled` are initialization values and are not among those five bits.

Sealing an address slot does not freeze the contract at that address. A sealed registry, limiter, quoter, or fee policy—and a configured protocol-fee controller—can still change if its own governance permits it. The ERC-1967 proxy administrator can also upgrade the Pool implementation. A meaningful immutability claim therefore depends on the governance of the Pool owner, proxy administrator, and every configured dependency.

### Swap settlement

For a swap, `SwapPool`:

1. Checks that input and output tokens pass the optional registry and tests the requested input against the optional Pool-balance limit.
2. Pulls the input token from the caller and measures the amount actually received. Pricing uses this measured amount, including for fee-on-transfer tokens.
3. Obtains a gross quote from the configured quoter, or uses the raw received amount when no quoter is set.
4. Calculates the Pool fee and any additional protocol fee, then checks available output-token liquidity.
5. Sends the protocol fee directly to the configured protocol recipient, transfers the nominal net output to the recipient, and records the Pool fee when a fee address is configured.
6. Emits the legacy `Swap` event and the more detailed `SwapSettlement` event.

`SwapSettlement` records the initiator, both tokens, measured input, gross quoted output, nominal output sent, output actually observed at the recipient, Pool fee, and protocol fee. The nominal and observed outputs can differ when the output token itself charges a transfer fee. The `fee` field in the legacy `Swap` event is only the Pool fee.

The six-argument `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` overload is the bounded execution path. It reverts after the deadline or when the recipient's observed balance increase is below `minAmountOut`. Integrators should prefer it because a displayed quote is temporary: quoter state, fee policy, liquidity, limits, and oracle data may change before execution. The older three- and four-argument overloads do not provide those Pool-level bounds.

### Additive fee calculation

Pool and protocol fees are both deducted from the gross quoted output. The protocol fee is **not carved out of the Pool fee**, and the Pool retains its full calculated fee.

For example, on a gross quote of 100 units:

- a 2% Pool fee accrues 2 units to the Pool;
- a 10% protocol rate applied to that Pool fee sends another 0.2 units directly to the protocol recipient; and
- the user receives 97.8 units.

The protocol calculation uses the greater of the calculated Pool fee and an assumed 1% fee base. This prevents a very small Pool fee from reducing the protocol calculation to nearly zero. Invalid combined rates revert with `FeeTooHigh`, and a quote that would settle at zero reverts with `InsufficientOutput`.

### Owner and upgrade powers

The contract owner can collect accrued Pool fees and can call `withdrawLiquidity` to transfer any available Pool token to a chosen non-zero address. When fees are decoupled, accrued fees are reserved from this liquidity-withdrawal path; otherwise they remain part of the Pool balance. Pool participants should not interpret deposited liquidity as permanently locked unless additional, verifiable governance controls establish that result.

Configuration sealing does not remove this liquidity-withdrawal power. It also does not remove the separate ERC-1967 proxy administrator's upgrade power.


## Valuation Modules

All three quoters implement forward and reverse quote functions used by `SwapPool` and `SwapRouter`:

- **`DecimalQuoter`** — Stateless decimal normalization under a 1:1 value-parity assumption.
- **`RelativeQuoter`** — Decimal normalization plus owner-managed relative price indexes. An unset token index defaults to parity.
- **`OracleQuoter`** — Rates each token through a configured oracle, with a global or per-token staleness limit and an optional 0.9-to-1.0 output multiplier.

An `OracleQuoter` is only as reliable as its feed selection and administration. Feed denomination and direction must be consistent, decimals must be correct, updates must be positive and fresh, and governance can replace feeds or change freshness settings. Source manipulation, delayed updates, network outages, incorrect pair configuration, or loss of the oracle-owner key can cause bad quotes or make swaps revert.

`OracleRelay` is an optional single-feed, latest-round relay compatible with the oracle interface. A designated writer republishes source values; there is no cross-chain proof and no stored round history. The relay accepts the writer's values with only a future-timestamp check. `OracleQuoter` independently rejects non-positive or stale answers, while the relay owner can rotate the writer or invalidate the current round. Users must therefore assess the source feed, relay writer, relay owner, and monitoring process.


## Fee Policy and Limits

`FeePolicy` stores a default fee in parts per million and optional directional pair overrides. Its owner can change those rates unless governance outside the contract restricts that power.

`Limiter` stores a maximum balance for a token at a particular Pool address. The owner or an authorized writer can change that limit. A zero limit blocks deposits when the limiter is active; an unset limiter leaves deposits uncapped.

These limits describe configured **token exposure** at a Pool. They do not, by themselves, classify a token balance as a loan or legal debt, prove an issuer's capacity, or guarantee redemption. Those questions depend on issuer terms, Pool rules, the transaction presented to the user, and applicable law.


## Protocol Fee Controller

`ProtocolFeeController` is an optional deployment-level fee component. Its owner can change the protocol rate and recipient or deactivate the fee. A single controller can be shared by multiple Pools, but the protocol does not require one controller per network.

When active and configured, the recipient is paid directly in the output token during each successful swap. How that recipient uses the funds—for example for operations, monitoring, liquidity support, or another published purpose—is a governance matter, not a guarantee made by the contract.
