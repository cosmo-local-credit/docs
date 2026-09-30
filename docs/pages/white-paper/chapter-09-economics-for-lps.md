## **9. Proposed economics for liquidity programs**

This chapter describes a future, separately adopted model. It is not a current App feature, an offer, a promised return, or a right created by depositing into `SwapPool`.

### **9.1 Proposed revenue sources**

A future network budget could receive:

1. a disclosed **network rake** taken as a share of participating Pools' collected fees;
2. separate routing or service fees from implemented shared services; and
3. other expressly adopted, received revenue.

Gross Pool fees retained by Pools are not network revenue. Current Protocol v1.1.0 uses a different model: an optional protocol fee is additional to the Pool fee and is sent directly to its configured recipient.

### **9.2 Illustrative rake math**

If a participating Pool charges a 2.00% Pool fee and an adopted network rake receives 20% of that Pool fee, the proposed effective network-rake rate on routed value is:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

If 25% of received rake and service-fee assets are eligible and convertible for a stated cash-denominated use after costs, the cash-usable share of the 40-bps rake is approximately 10 bps.

Proposed network revenue is:

`network_rake_received + routing_or_service_fees_received`

Do not add gross Pool fees to the network rake: the rake is a transfer from those fees and would otherwise be counted twice.

### **9.3 Liquidity-program rights**

A separately adopted program could fund Pool inventory, routing services, monitoring, or other mandates. Its terms would need to disclose:

- whether a transfer is a gift, endowment, loan, recoverable contribution, or purchase;
- custody and control;
- withdrawal, repayment, loss, and priority rules;
- fee and reward eligibility;
- governance rights;
- valuation and reporting methods; and
- suspension, termination, and remedies.

The current `SwapPool` creates no Pool-share token or automatic contributor entitlement. Any ex-post metric must be based on realized receipts and losses, must not be presented as promised yield, and may be zero or negative.
