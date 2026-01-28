## **10. Comprehensive Risk Framework**

We classify risk into **ten** categories. For each we list *Threats*, *Indicators*, and *Controls* (Preventive/Detective/Corrective), plus *Stress Tests* and a *Risk Appetite* statement.


### **10.1 Protocol & Smart Contract Risk**



* **Threats**: Contract bugs, upgrade errors, misconfigured limits/fees.
* **Indicators**: Audit findings, unexplained vault movements, reverts/spikes.
* **Controls**:
    * *Preventive*: Independent audits, formal verification where critical, minimal privileged roles, least-privilege vaults.
    * *Detective*: On-chain monitors, invariant checks, receipt reconciliation.
    * *Corrective*: Timelocked upgrades, emergency pause with public criteria, fork/migration path.
* **Stress Tests**: Simulate paused oracles, inventory shortfalls, routed burst traffic.
* **Risk Appetite:** Low; require audits before scaling network exposure (outstanding obligations and routed volume).


### **10.2 Economic/Market Risk (Liquidity, Runs, Oracle)**



* **Threats**: Thin inventory, bank-run dynamics, oracle manipulation/latency.
* **Indicators**: Limit utilization >80%, widening spreads, frequent limit rejections.
* **Controls**:
    * *Preventive*: Swap Limiter windows/caps; tiered limits; minimum reserve ratios; medianized oracles with failover constants.
    * *Detective*: Utilization & spread dashboards; variance alarms on value index updates.
    * *Corrective*: Widen margins; tighten caps; route-around policies; temporary fee surcharges to dampen flow.
* **Stress Tests**: Price shocks (±50%), redemption surges (5–10× baseline), oracle outages.
* **Risk Appetite**: Moderate, bounded by policy thresholds.


### **10.3 Credit/Voucher Issuance Risk**



* **Threats**: Over-issuance vs. capacity; issuer default; mis-specified redemption windows.
* **Indicators**: Fulfillment rate ↓, aging vouchers ↑, guarantor exposures ↑.
* **Controls**:
    * *Preventive*: Issuer due diligence; pool operator guarantor/bond requirements; issuance quotas; clarity-first voucher terms.
    * *Detective*: Cohort aging reports; fulfillment SLA tracking; guarantor performance logs.
    * *Corrective*: Tighten issuance, require top-ups, delist/route-around, trigger insurance.
* **Stress Tests**: Issuer insolvency; regional shock to production.
* **Risk Appetite**: Moderate for diversified issuers; low for concentrated exposure.


### **10.4 Redemption/Operations Risk**



* **Threats**: Inability to honor redemptions due to logistics, supply chain, or custody failures.
* **Indicators**: Redemption latency > SLA; stockouts; ticket backlogs.
* **Controls**: Redemption buffers; emergency backstops; off-chain attestation flows; multi-venue redemption options.
* **Stress Tests**: 2–4× redemption spikes; facility outages.
* **Risk Appetite**: Low; protect end-users.


### **10.5 Governance Risk**



* **Threats**: Steward capture; rushed parameter edits; conflicts of interest.
* **Indicators**: Concentrated voting power; frequent emergency actions; policy churn.
* **Controls**: Quorums; timelocks; delegated voting with transparency; conflict disclosures; veto/appeal mechanisms; forkability.
* **Risk Appetite**: Low; emphasize transparency and recourse.
* **Stress Tests**: Adversarial proposals; bribery attempts.
    * **Additional Stress Test: Hostile Voting Capture (Public Market Accumulation).**
Scenario: An external actor accumulates a large fraction of CLC, delegates votes to a small set of accounts, and proposes to (i) redirect Waterfall allocations, (ii) weaken listing/delisting standards, (iii) drain insurance via permissive claims, or (iv) force liquidity mandates into self-serving pools.
    * **Controls (must all be true):**
        * **Governance requires lockups** (no instant voting power from spot purchases).
        * **Timelocks** on all critical actions, with public alerts and a defined response window.
        * **Supermajority + higher quorum tiers** for Waterfall, registry root, insurance policy, and emergency powers.
        * **Transparent delegation**+ concentration monitoring triggers (automatic escalation to higher thresholds).
        * **Appeal + incident process** and an explicit **fork-and-migrate** procedure if values drift or capture occurs.



### **10.6 Legal & Compliance Risk**



* **Threats**: Vouchers deemed regulated instruments; KYC/AML obligations; cross-border restrictions.
* **Indicators**: Jurisdictional flags; regulator inquiries.
* **Controls**: Modular compliance hooks (allow/deny lists, attestations); geofenced UIs; legal reviews per class; disclosures.
* **Stress Tests**: Jurisdictional bans; counterparty de-listings.
* **Risk Appetite**: Low; comply or geofence.


#### 10.6.1 Legal Positioning & Token Treatment (Summary)



1. **Open-source infra.** All smart contracts are EVM, open-source **AGPL-3.0**, and auditable.
2. **Token posture.** CLC is a governance and access token. Staking may mint sCLC tokens that confers policy-gated swap rights into fee-holding pools under published caps/windows. No dividends. No profit-share. No residual rights.
3. **Representations.** The DAO and contributors do **not** market CLC/sCLC with profit expectations; materials avoid financial return language.
4. **Jurisdiction strategy.** (i) Geofenced UIs and RPCs; (ii) attestation gates for restricted classes; (iii) no promotions in restricted jurisdictions; (iv) per-voucher class legal reviews; (v) programmatic kill-switches to disable sCLC swap windows under policy.
5. **Endowment notice.** Based on DAO vote - access based on staked CLC may be disabled or reduced for compliance, operational, or risk reasons with no compensation. See §17.3 for plain-language instrument definitions. 


### **10.7 Routing & Cross-Domain Risk**



* **Threats**: Partial fills, stuck hops, bridge exploits, MEV (router perspective): artificially inflate route hops, front-running value index (if timelocked).
* **Indicators**: HTLC expiries; escrow backlogs.
* **Controls**: Atomicity where possible; escrow/HTLC with conservative timeouts; deny risky bridges; per-route fees and caps slash router stake; implement path efficiency score (including retroactively, see OP style challenge games), capping fees.
* **Stress Tests**: Bridge halt; chain reorgs.
* **Risk Appetite**: Low to moderate; whitelist bridges.


### **10.8 Custody & Key Management Risk**



* **Threats**: Key loss/compromise; signer collusion.
* **Indicators**: Anomalous signer behavior; threshold changes.
* **Controls**: Multisig/threshold schemes; hardware security; signer rotation; monitoring; withdrawal rate limits.
* **Risk Appetite**: Low.


### **10.9 Reputation & Social Risk**



* **Threats**: Misaligned incentives harming communities; poor redemption experiences, insurance gamification.
* **Indicators**: Community feedback; complaint ratios; social sentiment.
* **Controls**: NVC-aligned evaluation; grievance redressal; transparent reporting.
* **Risk Appetite**: Low; prioritize care and fairness.
* **Mis-selling controls:** standardized consumer disclosures in-UI; mis-selling incident log; sanctions ladder for violators (warnings → suspensions → delistings).


### **10.10 Concentration & Fragmentation Risk**



* **Threats**: Dependence on a few issuers/pools; incompatible forks.
* **Indicators**: HHI by issuer/pool; routing failures across clusters.
* **Controls**: Diversification targets; publish registries/indices/limits; maintain routing bridges; encourage standard adherence.


---
