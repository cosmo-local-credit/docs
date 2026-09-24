## **3. Velocity of Settlement: Why Liquidity Providers Should Care**

We reframe “velocity of money” as velocity of settlement: how quickly outstanding promises move from owed to fulfilled.

For a given voucher type j across a network of CPs, define:



1. D_j = total outstanding Voucher commitments valued in a common index
2. S_j = total value of settlements (redemptions routed through CPs) per period

Then the network settlement velocity of voucher j is:

V_j (network) = S_j/D_j

This is a flow/stock ratio: how many units of fulfillment flow pass through the network per unit of outstanding Voucher commitments. We will expand this below to a federation of CPs.

**Key insight:** an ordinary Swap changes who holds assets; its direction does not create or repay a loan. Redemption can fulfill an issuer's Voucher commitment. It reduces a separate debt only when express, transaction-specific credit terms say that redemption constitutes repayment and provide evidence of discharge. Liquidity that increases routing capacity may increase fulfillment velocity and fee volume.

**Plain language:** If vouchers get redeemed quickly, more real trade flows through the network. More flow → more fee events → more sustainable fee pooling.

What This Is / Isn’t



* Not an AMM for speculative pairs. CPP values and limits are policyful and capacity-aware.
* Not necessarily a bank deposit, payment instrument, security, or other regulated product; classification depends on the asset, terms, activities, and jurisdiction.
* Does not make unbounded issuance safe. Pool limits and inventory checks can constrain eligible Swaps, but do not constrain an issuer's total supply unless expressly configured to do so.
* Is a clearing-network design for redeemable commitments with transaction records and any recourse that the responsible parties expressly publish.
* Can support a separately documented producer-credit facility in which Vouchers serve as collateral or a repayment instrument. No ordinary Swap or redemption is a loan or repayment merely because of asset direction.


---
