## **6. Proposed network-level liquidity and governance**

Experience from the historic Sarafu Network motivated research into two wider design questions:

1. how independently governed Pools could coordinate liquidity and routing services; and
2. how shared services could remain accountable as participation grows.

One proposed CLC design introduces a **proposed CLC Network Pool** as a network-level clearing and budget-coordination arrangement and a **proposed CLC governance token**. Neither exists in the current App or Protocol v1.1.0. Other deployments could use cooperatives, public agencies, federations, multisigs, service operators, or other accountable structures without adopting either proposal.

### **6.1 Downside controls and optionality**

Current Protocol v1.1.0 can apply Pool token-balance caps and inventory checks. These controls constrain selected contract actions; they do not prevent issuer non-performance, loss of value, key loss, contract failure, or every other loss.

A future deployment could add circuit breakers, timelocks, reserves, guarantees, or insurance. Any protection would need an identified responsible party, covered event, funding, cap, exclusions, duration, evidence, claims process, and applicable terms.

Proposed governance should keep registry and service powers narrow and reviewable. Ordinary actions can use notice, delay, reason publication, appeal, and correction processes. Emergency actions should produce incident records and expire or receive review under an adopted policy.

Compatible route discovery could make more exchanges possible across Pools. Multi-hop execution and netting would require additional software, authorization, bounds, failure handling, and governance. More quoted or executed swaps would not by itself prove voucher fulfillment or social impact.
