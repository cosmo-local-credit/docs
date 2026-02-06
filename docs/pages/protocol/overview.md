# Protocol

The CLC protocol is the on-chain implementation of the **Commitment Pooling Protocol (CPP)** described in [Chapter 1](/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) of the white paper. All contracts are EVM-compatible, open-source under **AGPL-3.0**, and deployed via upgradeable proxies (ERC-1967).

Source: [github.com/cosmo-local-credit/protocol](https://github.com/cosmo-local-credit/protocol)


## Deployment Pattern

All contracts use the **ERC-1967 proxy pattern** via Solady's `ERC1967Factory`. Each contract is deployed as a minimal proxy pointing to a shared implementation, then initialized with its specific parameters. This enables:

- **Gas-efficient deployment** of many pools and vouchers from the same implementation.
- **Upgradeability** where needed (with governance controls).
- **Deterministic addresses** for registry and discovery purposes.


## Contract Summary

- **GiftableToken** — Voucher (redeemable ERC20 commitment). *Many per network* (one per issuer).
- **SwapPool** — Vault and swap engine. *Many per network* (one per pool).
- **DecimalQuoter** — 1:1 valuation with decimal adjustment. *Shared or per-pool.*
- **RelativeQuoter** — Price-index valuation with exchange rates. *Per-pool.*
- **FeePolicy** — Swap fee schedule. *Per-pool.*
- **Limiter** — Per-token credit limits. *Shared or per-pool.*
- **ProtocolFeeController** — Network fee extraction. *One per network.*

All contracts implement **EIP-165** (`supportsInterface`) for on-chain discoverability and use **Solady** for gas-optimized ERC20, access control, and proxy patterns.
