## **3. Velocity of Settlement: Why Liquidity Providers Should Care**

We reframe “velocity of money” as velocity of settlement: how quickly outstanding promises move from owed to fulfilled.

For a given voucher type j across a network of CPs, define:



1. D_j = total outstanding debt (unsettled vouchers) valued in a common index
2. S_j​ = total value of settlements (redemptions routed through CPs) per period

Then the network settlement velocity of voucher j is:

V_j (network) = S_j/D_j

This is a flow/stock ratio: how many units of settlement flow pass through the network per unit of outstanding debt. We will expand this below to a federation of CPs.

**Key insight:** swaps do **not** change total value in a pool or the network; only settlement (redemption) reduces debt of the voucher issuer. Liquidity that increases routing capacity **increases settlement velocity**, which drives economically grounded fee volume. 

**Plain language:** If vouchers get redeemed quickly, more real trade flows through the network. More flow → more fee events → more sustainable fee pooling.

What This Is / Isn’t



* Not an AMM for speculative pairs. CPP values and limits are policyful and capacity-aware.
* Not a bank deposit scheme. Vouchers are redeemable claims with explicit SLAs and fallback guarantors.
* Not uncollateralized credit expansion. Limits and inventory checks bound issuance and routing.
* Is a clearing network for redeemable commitments with auditable receipts and recourse.
* Is a producer-credit & clearing rail: vouchers can function as exchangeable collateral, enabling working capital that can be repaid through in-kind fulfillment as vouchers are purchased and redeemed.


---
