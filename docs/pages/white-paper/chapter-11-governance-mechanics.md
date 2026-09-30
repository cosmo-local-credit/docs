## **11. Governance mechanics**

This chapter proposes a governance template. It does not represent that the current CLC App uses governance-token voting, timelocks, shared insurance, a claims process, or every control described below. Each deployment would need to identify its actual decision-makers, authorities, contracts, processes, and policies.

- **Constitutional values:** care for people, care for the environment, fairness, reciprocity, non-dominance, and resilience.
- **Proposal types:** fee, limit, and index changes; liquidity mandates; Pool listings and removals; optional coverage decisions; and parameter guardrails.
- **Accountable process:** intake → evaluation → risk review → approval → timelock where appropriate → execution. Approval may come from stewards, cooperatives, public agencies, federations, multisigs, on-chain voting, or another disclosed and accountable structure.
- **Approval thresholds:** parameterized by action class, with higher thresholds for value-index changes, emergency powers, and other critical actions.
- **Delegation:** optional delegation with public mandates, conflicts disclosures, and recall.
- **Circuit breakers:** emergency pauses with stated criteria, authorized operators, resume conditions, and required post-mortems.
- **Transparency:** published changes and flows, with separate evidence for swap settlement, issuer fulfillment, reserves, limit utilization, routing, and guarantors.

**Registry governance.** A CPP-compatible deployment may maintain discovery registries for vouchers, tokens, and Pools. Authorized controls may add, update, suspend, or remove registry entries through the deployment's disclosed governance process. Registry removal affects discovery and routing through that registry; it does not by itself erase a token, alter a holder's balance, discharge an issuer's obligation, or disable an otherwise functional contract.

Published registry rules should make status conditional and may identify repeated non-fulfillment, fraud or misrepresentation, unsafe contract behavior, or persistent violation of published principles as grounds for suspension or removal. Where feasible, the process should provide notice, an opportunity to remedy, and an appeal path. Emergency removal should require a public incident report and automatic review or sunset.

**Prohibited listings.** Under this template, a registry would not admit:

1. instruments that directly fund or incentivize ecological destruction beyond agreed boundaries, violence or weaponization, coercive extraction, or systemic abuse; or
2. a voucher class that lacks clear presentment and fulfillment terms, accountability, and remedy paths.

The prohibited list would be versioned, publicly auditable, and changeable only through the adopted critical-action threshold and timelock, illustrated as Q3 + T3 in Appendix D.

### **11.1 Exchange-rate and limit governance**

**Timelocked changes.** A deployment following this template would change exchange-rate methods and separately implemented limit parameters only after a public timelock. An emergency path would use a separately disclosed authorization process and include an automatic sunset or review.

**Approval thresholds.** The template proposes higher approval thresholds for value-index base changes and global limit-tier changes, intermediate thresholds for Pool-specific third-party changes, and standard thresholds for routine fee changes.

**Published feeds.** A participating deployment would publish, for each Pool, the on-chain index variables, oracle sources or medians, update cadence, limit windows and caps, and failure modes or safe constants.

**Emergency-pause criteria.** A participating deployment would predeclare conditions such as an oracle outage, high limit utilization combined with fulfillment failures, or an invariant failure, together with resume checks and post-incident review requirements.

**Example public index feed for one Pool and voucher**

- **Symbol:** for example, `Maize_50kg@IssuerY`.
- **Reference unit:** Index Unit (IUX).
- **Published value:** 30.000 IUX.
- **Source:** median of identified sources, such as a local market survey, ministry bulletin, and deployment baseline.
- **Update cadence:** daily at 18:00 EAT, with a 24-hour timelock.
- **Failure mode:** freeze at the last valid value, apply a disclosed limit policy, and pause after a 72-hour outage.
- **Rationale:** published notes and a change record from the prior update.
- **Signers:** disclosed multisig addresses and approval threshold.

### **11.2 Proposed insurance-fund runbook**

**Optional design only.** This runbook applies only to a deployment that has expressly adopted and funded an insurance fund and published the covered events, eligible claimants, responsible entity, assets, limits, exclusions, evidence requirements, process, and governing terms. Neither the current CLC App nor GEF provides coverage merely because this design appears in the White Paper.

**Possible triggers.** An adopted policy could cover defined issuer non-fulfillment, a Pool reserve shortfall, or a bridge or escrow loss. A technical incident does not qualify automatically; the applicable policy would control.

**Assessment.** The responsible body would reconcile transaction receipts, inventory balances, guarantor bonds, redemption-presentment records, issuer responses, and other required evidence, then publish an incident record consistent with privacy and law.

**Illustrative loss waterfall.** Where each layer exists and lawfully applies, a policy could use: (1) responsible issuer bonds or guarantor stakes → (2) Pool-level reserves → (3) a proposed network insurance fund → (4) a temporary reduction to an optional coverage claim, only where pre-existing terms and applicable law expressly authorize it → (5) lawful recovery for proven fraud or abuse.

A coverage adjustment does not reduce an issuer's underlying voucher commitment or alter an on-chain balance unless valid pre-existing terms and applicable law expressly permit that result and any required holder consent is obtained.

**Limits and exclusions.** Published coverage would define caps, eligible presentments, evidence, claim windows, excluded routes or events, geographic restrictions, and the treatment of exhausted reserves. A payout could be zero after applicable limits are reached.

**Illustrative recovery schedule.** If adopted and published:

1. claims would draw first from the responsible issuer or guarantor bond, then from applicable Pool reserves, then from the proposed network insurance fund;
2. any reduction to an optional coverage claim would be limited to what pre-existing coverage terms and applicable law authorize, up to the published incident cap;
3. a recovery plan could apply a stated share of recovered value for a stated period, after which any remaining covered shortfall would become a recorded loss with a public post-mortem; and
4. each decision would produce a receipt with the incident ID, affected claim and vouchers, decision, recovery plan, and appeal window.

### **11.3 Guarantor framework**

This section distinguishes issuer responsibility, optional Pool protections, and third-party guarantees. Pools can compete on curation, terms, and expressly offered protections without implying that the CLC App, CPP, GEF, or any wider network automatically guarantees a voucher.

**Baseline issuer responsibility**

- Each voucher is first and foremost its issuer's responsibility. The issuer commits to provide the stated good, service, or lawful cash-equivalent under its published terms.
- Issuers would publish who may present the voucher, what fulfillment means, where and when it is available, what evidence is required, and what remedies apply.
- If an issuer fails to fulfill, the issuer is the primary responsible party. Pool or network protections apply only when separately adopted, funded, and disclosed.

**Optional Pool protections**

A Pool Steward may choose to add a narrowly defined protection to admitted vouchers. It is not automatic and would need to identify the responsible party, funding, eligible events, caps, windows, evidence, exclusions, and remedies in Pool metadata and applicable terms.

Illustrative protection types include:

1. **Reserve-asset coverage:** after verified issuer non-fulfillment, the responsible Pool entity pays a defined amount in a designated reserve asset, subject to its published cap and available funded reserves.
2. **Swap-back window:** after a qualifying event, the Pool offers a time-limited swap path into the prior or another approved asset, subject to caps and inventory. This is an inventory-dependent liquidity protection, not a promise that every swap is reversible.
3. **Alternative fulfillment:** the responsible party arranges an approved substitute provider within a published quantity or value cap.
4. **Exchange-rate-band protection:** for selected voucher classes, a Pool offers only the coverage adjustment or swap-back remedy stated in its pre-existing terms. This does not reduce the issuer's underlying voucher obligation.

**Possible funding sources**

- **Issuer bond:** collateral posted by the issuer or held in a disclosed reserve and available after a verified covered event.
- **Pool reserve:** assets controlled by the responsible Pool entity and allocated to the protections it advertises.
- **Third-party guarantor bond:** collateral posted by an identified external guarantor for stated issuers, voucher classes, or events.

Guarantor participation would follow published eligibility criteria, bond sizing, concentration limits, decision authority, and lawful enforcement rules.

**Claims process**

An adopted policy would define auditable triggers, such as a fulfillment deadline missed after valid redemption presentment, verified issuer insolvency, a covered bridge or escrow failure, or a formally declared incident state. It would also define:

- how a participant opens a claim and supplies the required presentment and fulfillment evidence;
- who verifies voucher terms, issuer responses, and technical records;
- the decision and appeal windows; and
- the authorized payout path, assets, caps, and receipt.

Recovery proceeds from issuers, arbitration, or lawful enforcement would refill the applicable bonds or reserves according to the published policy before being used for proposed CLC Network Pool swap access.

**Required disclosures**

For every covered Pool and voucher class, the responsible party would publish:

- whether a guarantor is absent, optional, or required;
- bond or reserve sizing and concentration caps;
- the protection types, assets, caps, windows, and exclusions;
- presentment, fulfillment, claim, and appeal deadlines; and
- a plain-language statement of who guarantees what and what is not guaranteed.

**Curation principle.** Pool Stewards and the responsible legal or governance structures are accountable for the protections they advertise. A CPP-compatible deployment may provide standards, registries, or optional shared policies, but neither CLC nor GEF automatically guarantees vouchers or Pools.

### **11.4 Anti-capture guardrails**

Under this template, the following would be critical actions requiring the adopted highest approval tier and a long timelock:

1. changing the proposed fee waterfall, including its coverage and core-operations priorities;
2. changing canonical registry roots;
3. changing coverage scope, claim caps, or decision authority;
4. expanding emergency-pause powers; or
5. weakening forkability, transparency, or Pool sovereignty commitments stated in this paper.

### **11.5 Fork and exit procedure**

If governance were captured or values drifted materially, communities, Pool Stewards, and operators could seek to exit by forking the network governance layer. Continuity of underlying Pools and vouchers would depend on the deployed contracts, keys, interfaces, infrastructure, third-party services, and applicable obligations.

An exit process could:

1. **Publish a snapshot:** export the selected registries, vouchers, values, limits, and fee policies, then publish a signed snapshot hash.
2. **Redeploy governance services:** deploy new registry roots, route services, and any adopted fee or coverage modules under a new accountable structure.
3. **Re-register:** allow Pool Stewards to opt in by registering their Pool addresses under the new root without requiring holders to migrate otherwise functional vouchers.
4. **Repoint clients:** add the new root as a selectable network profile in SDKs and interfaces, with any default change made through the disclosed governance process.
5. **Manage a bridge period:** maintain compatible routes where safe and deny routes that violate the new profile's rules.

The design objective is that leaving a canonical registry does not disable otherwise functional local Pools. Actual continuity remains deployment-dependent; federation is an opt-in discovery and coordination layer.
