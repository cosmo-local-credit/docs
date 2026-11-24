# Smart contracts

Contracts record token balances and carry out Pool exchanges. The [CLC software documentation](https://software.cosmolocal.credit/contracts/) is the definitive implementation reference, currently in English. This page explains what participants should understand before using those contracts.

See [Concepts and vocabulary](/introduction/concepts) for the difference between a governed Commitment Pool and its `SwapPool` contract, and between exchange and Issuer fulfillment.

## Voucher (`GiftableToken`)

A Voucher combines a digital balance with an Issuer's published promise. Its terms explain what it can be used for, where and when it is accepted, and who is responsible. Creating a token does not prove that the Issuer can provide the promised goods or services.

For creation, minting, burning, and expiry mechanics, read [Vouchers](https://software.cosmolocal.credit/contracts/vouchers).

## Commitment Pool (`SwapPool`)

A Commitment Pool brings selected Vouchers together under published rules. Its contract holds inventory and exchanges supported assets. A deposit does not automatically give the depositor Pool shares, repayment, withdrawal, reward, or governance rights; any such rights need separately disclosed terms.

### Composition and optional dependencies

Check which Vouchers a Pool accepts, how it sets exchange rates, its limits and fees, and who can change them. The software reference documents [Pool configuration and sealing](https://software.cosmolocal.credit/contracts/pools).

### Swap settlement

A successful swap changes the relevant balances. It does not prove that an Issuer has delivered goods or services. Before confirming, review the input, output, recipient, minimum received, and quote expiry.

For execution methods and settlement records, read [Quote and settle swaps](https://software.cosmolocal.credit/contracts/swaps).

### Additive fee calculation

A swap may include both a Pool fee and an additional protocol fee. Review the total shown in the quote; a route through several Pools can incur fees at each step. The [swap reference](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) maintains the calculation and worked example.

### Owner and upgrade powers

The Pool owner can withdraw available inventory. Other authorities may control upgrades or settings. Review these powers alongside the Steward's published rules before depositing or relying on a Pool. Sealed settings alone do not establish that inventory is permanently locked.

See [Pools](https://software.cosmolocal.credit/contracts/pools) and [Verify an instance](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) for the technical checks.

## Valuation modules

A Pool's exchange rate is separate from a Voucher's stated value and the Issuer's redemption terms. Review the Pool's chosen method and who can change its inputs. The software reference explains the available [Quoters](https://software.cosmolocal.credit/contracts/quoters).

## Fee policy and limits

The App's **“Credit limit”** is the maximum balance of a particular Voucher that a Pool may hold. It describes exchange capacity rather than personal borrowing or a guarantee of fulfillment. Review the [Pool rules and configuration](https://software.cosmolocal.credit/contracts/pools) for how limits and fees are applied.

## Protocol fee controller

A protocol fee has a configured recipient. Receiving that fee does not automatically make the recipient the Pool Steward or a guarantor. See the [fee reference](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) for current mechanics and [governance mechanics](/governance/mechanics) for responsibility and disclosure.
