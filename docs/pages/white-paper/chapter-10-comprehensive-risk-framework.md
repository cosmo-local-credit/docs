## **10. Comprehensive risk framework**

This proposed framework separates ten risk categories. For each category it identifies possible indicators, controls, stress tests, and an indicative risk appetite. These are design recommendations, not claims that every control is deployed, effective, or sufficient. Limits, reserves, guarantees, monitoring, coverage, and governance cannot eliminate loss.

### **10.1 Protocol and smart-contract risk**

- **Threats:** contract bugs, upgrade errors, dependency failures, and misconfigured limits or fees.
- **Indicators:** audit findings, unexplained inventory movements, invariant failures, and unusual reverts.
- **Possible controls:** independent audits; minimal privileged roles; disclosed proxy and dependency controllers; timelocked upgrades; on-chain monitoring; incident pauses with published authority and criteria; and a tested migration path.
- **Stress tests:** unavailable quote or limit dependencies, inventory shortfalls, paused contracts, and burst traffic.
- **Risk appetite:** low before scaling outstanding obligations or swap volume.

### **10.2 Economic and market risk**

- **Threats:** thin inventory, one-sided flows, rapid withdrawals, and manipulated or stale price references.
- **Indicators:** high Pool token-balance-cap utilization, widening quote differences, frequent limit rejections, and concentrated inventory.
- **Possible controls:** current Pool token-balance caps; proposed rolling or account limits; separately adopted reserves; guarded price references; route exclusions; and time-limited incident fees or limits.
- **Stress tests:** large reference-price moves, presentment surges, withdrawal requests, and data-source outages.
- **Risk appetite:** moderate only within published parameters and funded loss-bearing capacity.

### **10.3 Issuer and voucher risk**

- **Threats:** issuance beyond fulfillment capacity, issuer default, misleading terms, and poorly specified availability or presentment windows.
- **Indicators:** declining confirmed-fulfillment rates, aging outstanding vouchers, unresolved complaints, and concentrated exposure to one issuer.
- **Possible controls:** issuer due diligence; clear voucher and Offering terms; issuance or admission limits; independently funded bonds or guarantees; cohort reporting; and accountable registry review.
- **Stress tests:** issuer insolvency, regional production shocks, counterfeit claims, and prolonged fulfillment delays.
- **Risk appetite:** lower as issuer or Offering concentration increases.

### **10.4 Redemption-presentment and fulfillment risk**

- **Threats:** invalid or duplicate presentment, insufficient issuer capacity, stockouts, logistics failures, and missing discharge records.
- **Indicators:** request-to-fulfillment latency, failed or disputed presentments, stockouts, ticket backlogs, and fulfilled units lacking discharge.
- **Possible controls:** published presentment and fulfillment procedures; capacity disclosures; multiple fulfillment venues where lawful; evidence standards; complaint and remedy paths; and records separating presentment, fulfillment, and discharge.
- **Stress tests:** two-to-four-times presentment volume, facility outages, supplier failures, and duplicate-use attempts.
- **Risk appetite:** low where essential goods, vulnerable participants, or long fulfillment windows are involved.

### **10.5 Governance risk**

- **Threats:** Steward or controller capture, rushed parameter changes, conflicts of interest, hidden technical powers, and weak appeals.
- **Indicators:** concentrated authority, frequent emergency actions, unexplained policy changes, and repeated overrides.
- **Possible controls:** role-and-power disclosures; proportional approval thresholds; timelocks; conflicts and recusal rules; public change records; appeals; automatic emergency-power sunsets; and forkability.
- **Stress tests:** adversarial proposals, signer loss, bribery attempts, and capture through accumulation or delegated control.
- **Risk appetite:** low for actions affecting value methods, withdrawals, registry roots, coverage, or emergency powers.

For a future deployment of the proposed CLC governance token, the capture test would include accumulation followed by attempts to redirect budgets, weaken registry standards, approve related-party mandates, or drain funded coverage. Possible safeguards include governance lockups, higher thresholds for critical actions, delayed execution, transparent delegation and concentration monitoring, an incident process, and a credible fork-and-exit procedure. None is represented as deployed merely by appearing here.

### **10.6 Legal and compliance risk**

- **Threats:** a voucher, service, promotion, or governance asset receiving unexpected regulatory treatment; consumer-protection failures; money-laundering or sanctions exposure; and cross-border restrictions.
- **Indicators:** jurisdiction flags, regulator inquiries, complaints, restricted-party matches, and divergence between advertised and actual behavior.
- **Possible controls:** review by class and jurisdiction; accurate disclosures; geofenced interfaces; proportionate eligibility or attestation checks; promotion controls; records of authority and acceptance; and clear responsible parties.
- **Stress tests:** a jurisdictional restriction, provider termination, mandatory reclassification, and an order to pause a feature or asset class.
- **Risk appetite:** low; restrict or pause unsupported activity.

#### 10.6.1 Legal positioning and proposed-token treatment

1. **Verifiable infrastructure:** Protocol v1.1.0 contracts are EVM-compatible and their source is published under the licences and third-party exceptions identified in the Protocol repository. Publication enables review but does not itself prove an audit, safe deployment, or legal compliance. Each deployment should disclose its code version, build provenance, addresses, controller powers, and audit status.
2. **Proposed-token posture:** in this design, the proposed CLC governance token would coordinate governance and policy-gated access. It would not create dividends, profit sharing, residual rights, or a guarantee of value or liquidity.
3. **Related proposed assets:** a separately implemented policy might allow locking the proposed CLC governance token to mint stCLC and might authorize epoch-scoped sCLC. The adopted terms would need to define their exact rights, limits, expiry, transferability, and treatment.
4. **Communications:** materials for any proposed CLC governance-token, stCLC, or sCLC deployment should not promise profit, appreciation, passive income, or guaranteed access.
5. **Jurisdiction controls:** a deployment might require interface geofencing, attestations for restricted classes, promotion limits, asset-specific review, or controls that pause a proposed feature.
6. **Participant notice:** adopted terms would explain when access can be reduced or disabled for legal, operational, or risk reasons and whether any compensation or remedy applies.

### **10.7 Routing and cross-domain risk**

- **Threats:** partial execution, stuck hops, bridge or escrow exploits, stale quotes, path inflation, and front-running of announced value changes.
- **Indicators:** route-expiry rates, escrow backlogs, quote-to-execution differences, repeated unnecessary hops, and bridge incidents.
- **Possible controls:** atomic execution where available; conservative HTLC or escrow timeouts; path and counterparty policies; route-level caps; deterministic quote-to-receipt mapping; and accountable service operators.
- **Stress tests:** a bridge halt, chain reorganization, dependency outage, and one failed hop in a proposed multi-hop route.
- **Risk appetite:** low to moderate only for identified and monitored dependencies.

### **10.8 Custody and key-management risk**

- **Threats:** lost or compromised keys, signer collusion, and unclear recovery or administrator authority.
- **Indicators:** anomalous signatures, controller changes, failed rotations, and unusual withdrawals.
- **Possible controls:** multisig or threshold authorization; hardware-backed keys; role separation; signer rotation; public controller inventories; monitored withdrawal limits; and tested recovery procedures.
- **Risk appetite:** low.

### **10.9 Reputation and social risk**

- **Threats:** misleading claims, harmful incentives, inaccessible complaints, poor fulfillment experiences, privacy failures, and protections that favor insiders.
- **Indicators:** complaints by cohort, unresolved disputes, issuer-performance trends, concentration of benefits or losses, and community feedback.
- **Possible controls:** plain-language disclosures; grievance and correction paths; accessible evidence; transparent reporting; incident review; and proportionate sanctions for misrepresentation.
- **Risk appetite:** low, with particular care for affected communities and vulnerable participants.

### **10.10 Concentration and fragmentation risk**

- **Threats:** dependence on a small number of issuers, Pools, controllers, providers, networks, or incompatible forks.
- **Indicators:** concentration measures by issuer, Pool, inventory, controller, or service provider; route failures between clusters; and critical single dependencies.
- **Possible controls:** published concentration thresholds; multiple accountable operators; compatible standards; independent registries; tested exit procedures; and safe interoperability.
- **Stress tests:** loss of the largest issuer, Pool, operator, provider, or registry root.
- **Risk appetite:** deployment-specific and disclosed, with stricter limits for essential services or irreplaceable dependencies.
