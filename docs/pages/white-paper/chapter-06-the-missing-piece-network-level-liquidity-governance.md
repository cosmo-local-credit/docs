# 6. Proposed network-level liquidity and governance

Experience from the historic Sarafu Network motivated research into two wider design questions:

1. how independently governed Pools could coordinate liquidity and routing services; and
2. how shared services could remain accountable as participation grows.

One proposed CLC design introduces a **proposed CLC Network Pool** as a network-level clearing and budget-coordination arrangement and a **proposed CLC governance token**. Neither exists in the current App or Protocol v1.1.0. Other deployments could use cooperatives, public agencies, federations, multisigs, service operators, or other accountable structures without adopting either proposal.

## **6.1 Downside controls and optionality**

Current Protocol v1.1.0 can apply Pool token-balance caps and inventory checks. These controls constrain selected contract actions; they do not prevent issuer non-performance, loss of value, key loss, contract failure, or every other loss.

A future deployment could add circuit breakers, timelocks, reserves, guarantees, or insurance. Any protection would need an identified responsible party, covered event, funding, cap, exclusions, duration, evidence, claims process, and applicable terms.

Proposed governance should keep registry and service powers narrow and reviewable. Ordinary actions can use notice, delay, reason publication, appeal, and correction processes. Emergency actions should produce incident records and expire or receive review under an adopted policy.

The production CLC App and CLC Core now provide compatible route discovery and same-chain multi-hop execution for participant-authorized routes through the configured public profile. Quotes apply per-hop limits, fees, inventory, bounds, and simulation, while one signed wallet batch reverts as a whole if a call fails.

That service does not authorize automatic Pool rebalancing or network-level control of Pool inventory. Rebalancing, batch netting, cross-domain HTLC or escrow execution, and shared liquidity governance would require additional authority, software, bounds, failure handling, and adopted rules. More quoted or executed swaps do not by themselves prove voucher fulfillment or social impact.
