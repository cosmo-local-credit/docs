# Protocol

CLC protocol contracts provide the on-chain building blocks for the **Commitment Pooling Protocol (CPP)** described in [Chapter 1](/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) of the white paper. This reference follows the public [`v1.1.0` release](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Grassroots Economics Foundation (GEF) operates the Progressive Web App at [cosmolocal.credit](https://cosmolocal.credit), which offers one way to interact with these contracts. The App and the contracts are distinct. Operating the interface does not by itself make GEF a Voucher issuer, Pool Steward, custodian, guarantor, or counterparty to a user transaction. Those roles depend on the relevant deployment, controller addresses, and published issuer or Pool terms. See the [Terms of Service](/governance/terms).


## Deployment Pattern

Most stateful modules are initialized as **ERC-1967 proxy instances** through Solady's `ERC1967Factory`. Multiple instances can share an implementation while keeping separate owners, configuration, and storage. A deployment may also use deterministic salts so addresses can be predicted before deployment.

Not every contract is proxied. `DecimalQuoter` and `SwapRouter` are stateless direct deployments; `RescueVault` and `ERC1967Factory` are also deployed directly. The remaining stateful modules listed below are designed for proxy deployment.

Each proxy has an administrator that can replace its implementation. Proxy administration is separate from contract ownership and should be assigned to an appropriately governed address. An upgrade can change behavior even after a Pool has sealed configuration, so users should assess both the Pool owner and the proxy administrator.

EIP-165 support is also contract-specific, not universal. It is exposed by `GiftableToken`, the three quoters, `OracleRelay`, `Limiter`, several registries and indexes, `Splitter`, `EthFaucet`, `PeriodSimple`, and `RescueVault`. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController`, and `CAT` do not expose `supportsInterface` in v1.1.0.


## Component Map

- **GiftableToken** — ERC20 supply, minting, burning, and optional-expiry mechanics. An issuer can use an instance as a Voucher, but the contract alone does not define what can be redeemed, by whom, where, or on what terms.
- **SwapPool** — Token vault and swap-settlement engine. A deployment can attach curation, valuation, fee, limit, and protocol-fee components or leave supported dependencies unset.
- **DecimalQuoter, RelativeQuoter, and OracleQuoter** — Interchangeable valuation modules for decimal parity, owner-managed relative rates, or oracle-derived rates. `OracleRelay` can relay one external feed for use by an `OracleQuoter`.
- **FeePolicy and Limiter** — Optional pair-fee rules and per-token Pool-balance limits.
- **ProtocolFeeController** — Optional, mutable protocol-fee rate, recipient, and active state that a Pool can consult during settlement.
- **TokenUniqueSymbolIndex, AccountsIndex, and ContractRegistry** — Token, account, and address discovery components. `CAT` records an account's ordered settlement-token preferences.
- **SwapRouter** — Quote-only exact-input and exact-output calculations over a proposed multi-Pool path. It does not custody tokens or execute swaps.
- **Splitter, EthFaucet, PeriodSimple, and RescueVault** — Supporting distribution, gas-funding, rate-limit, and asset-recovery utilities.

The contracts can be combined in different ways. A registry listing, quote, or graph path is not a guarantee that a transaction will execute: current liquidity, token limits, fees, oracle state, authorization, deadlines, network conditions, and each Pool's configuration still apply.
