## **5. From isolated Pools to a federated network**

Current Protocol v1.1.0 supports direct execution through one `SwapPool` and provides a quote-only Solidity `SwapRouter`. The production CLC App and CLC Core coordinate participant-initiated same-chain routes through as many as three Pools by preparing one signed Calibur wallet batch. The contracts do not themselves execute a multi-hop route, and the current App/Core flow does not provide cross-chain HTLCs, escrow routes, automatic Pool rebalancing, batch netting, or cross-network clearing.

This chapter explains the current participant route and distinguishes it from proposed coordination that would require new Pool authority. In both cases, independent Pools retain their own admission, valuation, limit, fee, inventory, authorization, and governance rules.

### **5.1 Separate exchange and fulfillment measures**

Routing can improve access to inventory, but it does not merge the voucher and exchange lifecycles. Measurement should keep these events separate:

1. a route is quoted;
2. one or more Pool swaps execute and settle on-chain;
3. a holder presents voucher units to the issuer;
4. the issuer fulfills the commitment; and
5. fulfilled units are discharged.

More quoted or executed routes do not prove more fulfillment. Reports would state the cohort, period, assets, valuation method and timestamp, exclusions, corrections, and off-chain evidence required by Appendix C.

**Illustrative route:** A school holds maize vouchers but needs transport vouchers. CLC Core can identify compatible Pool inventories, quote the selected path at one pinned block, and prepare the bounded calls for the school's wallet. Execution succeeds only if every hop remains within its quote bounds, limits, fees, inventory, supported behavior, and policy. The resulting swaps do not prove that either issuer later fulfilled its voucher commitments.

### **5.2 Current participant routing and proposed rebalancing**

Two activities require different authority.

**Current participant-initiated execution.** Given input and output vouchers and an amount, CLC Core estimates paths from the participant's eligible holdings. For a selected route, it reads the Pools at one pinned block, produces an authoritative quote, simulates the complete batch, and prepares three calls per hop: allowance reset, allowance grant, and bounded `SwapPool.withdraw`. The participant signs, and the relayer submits one same-chain Calibur transaction with `revertOnFailure` enabled. A failed call reverts every route call. The App groups the transaction and per-hop settlement into one receipt.

Each hop retains its own responsible Pool, quote inputs, authorization, fees, limits, inventory, and settlement event. The current App adds no separate route-service fee. The current flow supports App-compatible EOA/Calibur wallets, not Safes or other contract wallets.

**Opt-in Pool rebalancing.** Pool Stewards could publish inventory targets, allowed counterparties, asset classes, quote-deviation bounds, and per-period limits. An accountable service could search for compatible cycles or chains and execute only the authorized intents.

Rebalancing would be opt-in. A Pool can allow ordinary participant routes without authorizing a service to move inventory for rebalancing. A future mandate could enable only selected assets, counterparties, and amounts. Every executed hop would produce a receipt, and any service fee would be disclosed separately from Pool and Protocol fees.

Cross-chain HTLC or escrow execution is also separate from the current same-chain atomic batch. It would require adopted timeout, abort, controller, recovery, and residual-risk rules.

#### **5.2.1 Confederation and interoperability**

Independent deployments can operate their own registries, interfaces, route services, and policy profiles while choosing compatible data and receipt standards. The current public App uses its configured registry and service profile. Cross-profile execution remains deployment-dependent.

A compatible profile would:

- identify its registry roots, service operators, controllers, and applicable terms;
- disclose allowed and denied counterparties, assets, adapters, and routes;
- apply every participating Pool's authorization, limits, fees, and inventory constraints;
- preserve per-hop quote-to-receipt evidence; and
- allow otherwise functional Pools to leave or select another registry without erasing balances or issuer obligations.

Compatibility can increase available exchange paths and reduce dependency on one registry or operator. It does not make the network, CLC App, GEF, or another Pool responsible for an issuer's fulfillment.

### **5.3 Proposed network-rake and service-fee model**

Current Protocol v1.1.0 charges a Pool fee and, when configured, an additional Protocol fee on a direct Pool swap. Those current fees remain distinct.

The production routed exchange applies those current fees independently at every hop and itemizes them in the quote and receipt. It does not currently add a separate routing-service fee.

A future program could separately receive:

1. a **network rake**, defined as a stated share of participating Pools' collected Pool fees; and
2. a **routing or service fee**, charged for an identified future service.

The proposed network rake is not an additional percentage applied to the full swap amount after already counting the Pool fee. For Pool `p`:

τ_p = f_p · r_p

where `f_p` is the Pool-fee rate and `r_p` is the proposed share of that Pool fee allocated to the network program.

For a measured period:

- **gross Pool fees** are the sum of each Pool's actual collected Pool fees;
- **network-rake receipts** are the stated shares of those collected fees;
- **service-fee receipts** are separately collected routing or service fees; and
- **program fee receipts** equal network-rake receipts plus service-fee receipts.

No category is counted twice. Current Protocol fees are not included unless a separately adopted policy lawfully redirects actual Protocol-fee receipts into the future program.

For an aggregate approximation, let:

- `Q_swap` be the value of executed Pool swaps for the defined cohort and period; and
- `τ` be the effective rate of the proposed network rake and separately identified service fees over that executed swap value.

Then:

F ≈ τ · Q_swap

This is an analytical approximation, not a promise of revenue. Every input requires a stated cohort, period, unit, valuation timestamp, exclusions, and correction policy.

#### **5.3.1 Cash-eligible and in-kind receipts**

Fees may arrive in cash-eligible fungible assets or in vouchers and other in-kind assets. In-kind receipts cannot automatically pay cash expenses or coverage claims. Any exchange or conversion would require authority, available inventory, disclosed venues, bounds, and actual execution.

Let `χ` be the realized share of fee receipts that is cash-eligible after policy restrictions, failed conversions, and slippage. Cash-usable receipts are:

F_cash ≈ χ · F

Budget and break-even analysis would use realized `F_cash`, not gross quoted fees or the face value of in-kind inventory. A future program would report gross Pool fees, network-rake receipts, service fees, asset composition, conversion results, and cash-usable receipts separately.

### **5.4 Proposed liquidity programs**

A future, separately documented liquidity program could allocate assets to designated Pools or routing services. Current `SwapPool` contracts do not mint Pool shares or automatically create repayment, withdrawal, reward, governance, or profit rights.

Any program would publish:

- the responsible entity and participating Pool Stewards;
- contributed assets and whether the transfer is repayable, withdrawable, donated, or endowed;
- custody and technical-control arrangements;
- permitted uses, limits, lockups, withdrawal gates, and loss allocation;
- fee or incentive eligibility and whether the amount may be zero;
- reporting, conflicts, complaints, and remedies; and
- migration, termination, and treatment of remaining assets and obligations.

Material risks include inventory that is difficult to exchange or fulfill, low cash eligibility, issuer non-performance, contract or provider failures, governance changes, and restrictions on exit. Limits, reserves, receipts, and dashboards may reduce or reveal some risks; they do not eliminate loss.

For an ex-post analytical metric, let:

- `ϕ` be the realized fraction of program fee receipts allocated under the program's adopted terms; and
- `K` be the measured value of assets covered by the program under one stated method.

Then:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

This metric describes realized fee flow per measured program asset. It is not APY, a forecast, a dividend, or a guaranteed return. Reports would keep swap volume, redemption presentment, issuer fulfillment, discharge, holding duration, losses, withdrawals, and fee receipts separate.
