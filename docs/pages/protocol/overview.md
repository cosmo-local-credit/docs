# Protocol

The **Commitment Pooling Protocol (CPP)** describes how independently governed Pools select Vouchers, publish exchange rules, and make exchanges possible. A Holder later uses a Voucher with its Issuer for the promised goods or services. These are separate steps, with separate responsibilities.

This site explains those concepts and how to use the CLC App. The [CLC software documentation](https://software.cosmolocal.credit/) is the definitive reference for software implementation, contracts, APIs, deployment, and operation. It is currently available in English.

Start with [Concepts and vocabulary](/introduction/concepts) for the shared terms, or the [White Paper](/white-paper) for the wider design and proposals.

## Deployment pattern

Different communities and organizations can run compatible software under their own rules. Grassroots Economics Foundation operates the [public CLC App](https://cosmolocal.credit). Each deployment should identify its operators, contracts, and responsible authorities.

For contract addresses, deployment instructions, and how to verify owners and upgrade powers, use [Deployments and verification](https://software.cosmolocal.credit/contracts/deployments). For running the supporting services, start with the [CLC Core API](https://software.cosmolocal.credit/core-api/).

## Component map

Use the software reference for:

| Topic | Definitive software documentation |
| --- | --- |
| Voucher creation, supply, and expiry | [Vouchers](https://software.cosmolocal.credit/contracts/vouchers) |
| Pool configuration, deposits, withdrawals, and control | [Pools](https://software.cosmolocal.credit/contracts/pools) |
| Exchange-rate calculations | [Quoters](https://software.cosmolocal.credit/contracts/quoters) |
| Swap execution, fees, and transaction records | [Quote and settle swaps](https://software.cosmolocal.credit/contracts/swaps) |
| Exchange through several Pools | [Routing](https://software.cosmolocal.credit/contracts/routing) |
| Discovery and supporting contracts | [Registries and utilities](https://software.cosmolocal.credit/contracts/registries) |
| API requests and responses | [OpenAPI reference](https://software.cosmolocal.credit/core-api/reference) |
| Backend and routing settings | [Configuration](https://software.cosmolocal.credit/core-api/configuration) |

## Application-level routed exchange

The App can help a participant exchange through several Pools when a suitable route is available. The participant reviews the quote and authorizes the exchange. Each Pool keeps its own rules and responsible parties.

See [Routes and responsibilities](/protocol/network) for what this means to participants, and [Routing implementation](https://software.cosmolocal.credit/contracts/routing) for how the software quotes and executes routes.

Software enables the exchange; Issuers remain responsible for their Voucher promises, and Pool Stewards remain responsible for their published rules. Use of the public App is governed by the [Terms of Service](/governance/terms).
