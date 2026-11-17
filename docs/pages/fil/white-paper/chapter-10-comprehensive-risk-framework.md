## **10. Comprehensive risk framework**

Hinahati ng proposed framework na ito ang panganib sa sampung kategorya. Para sa bawat isa, tinutukoy nito ang mga posibleng indicator, control, stress test, at indicative risk appetite. Mga rekomendasyon sa disenyo ang mga ito, hindi claim na naka-deploy, epektibo, o sapat ang bawat control. Hindi maaalis ng limit, reserve, garantiya, monitoring, coverage, o governance ang lahat ng pagkawala.

### **10.1 Protocol at smart-contract risk**

- **Mga banta:** bug sa kontrata, error sa upgrade, failure ng dependency, at maling configuration ng limit o fee.
- **Mga indicator:** audit finding, hindi maipaliwanag na galaw ng inventory, invariant failure, at hindi karaniwang revert.
- **Mga posibleng control:** independent audit; kakaunting privileged role; malinaw na proxy at dependency controller; timelocked upgrade; on-chain monitoring; incident pause na may inilathalang awtoridad at criteria; at nasubok na migration path.
- **Mga stress test:** hindi available na quote o limit dependency, kakulangan sa inventory, naka-pause na kontrata, at biglang pagdami ng traffic.
- **Risk appetite:** mababa bago palakihin ang outstanding obligation o swap volume.

### **10.2 Economic at market risk**

- **Mga banta:** manipis na inventory, one-sided flow, mabilis na withdrawal, at minanipula o stale na price reference.
- **Mga indicator:** mataas na paggamit ng Pool token-balance cap, lumalaking pagkakaiba ng quote, madalas na limit rejection, at concentrated inventory.
- **Mga posibleng control:** kasalukuyang Pool token-balance cap; proposed rolling o account limit; hiwalay na pinagtibay na reserve; protektadong price reference; route exclusion; at time-limited incident fee o limit.
- **Mga stress test:** malaking galaw ng reference price, biglang pagdami ng presentment, withdrawal request, at data-source outage.
- **Risk appetite:** katamtaman lamang sa loob ng inilathalang parameter at pinondohang loss-bearing capacity.

### **10.3 Issuer at Voucher risk**

- **Mga banta:** issuance na lampas sa fulfillment capacity, default ng issuer, mapanlinlang na terms, at hindi malinaw na availability o presentment window.
- **Mga indicator:** bumababang confirmed-fulfillment rate, tumatandang outstanding Voucher, hindi nalulutas na complaint, at concentrated exposure sa isang issuer.
- **Mga posibleng control:** due diligence sa issuer; malinaw na Voucher at Offering terms; issuance o admission limit; independently funded bond o garantiya; cohort reporting; at may-pananagutang registry review.
- **Mga stress test:** insolvency ng issuer, regional production shock, counterfeit claim, at matagal na fulfillment delay.
- **Risk appetite:** mas mababa habang lumalaki ang concentration sa issuer o Offering.

### **10.4 Redemption-presentment at fulfillment risk**

- **Mga banta:** invalid o duplicate na presentment, kulang na kapasidad ng issuer, stockout, logistics failure, at nawawalang discharge record.
- **Mga indicator:** tagal mula request hanggang fulfillment, failed o disputed presentment, stockout, ticket backlog, at fulfilled unit na walang discharge.
- **Mga posibleng control:** inilathalang presentment at fulfillment procedure; capacity disclosure; maraming fulfillment venue kung legal; evidence standard; complaint at remedy path; at mga record na naghihiwalay sa presentment, fulfillment, at discharge.
- **Mga stress test:** dalawa hanggang apat na beses na presentment volume, facility outage, supplier failure, at pagtatangkang gumamit nang dalawang beses.
- **Risk appetite:** mababa kapag sangkot ang essential goods, vulnerable participant, o mahabang fulfillment window.

### **10.5 Governance risk**

- **Mga banta:** pagkuha sa Steward o controller, minadaling pagbabago ng parameter, conflict of interest, nakatagong technical power, at mahinang appeal.
- **Mga indicator:** concentrated authority, madalas na emergency action, hindi maipaliwanag na pagbabago ng policy, at paulit-ulit na override.
- **Mga posibleng control:** disclosure ng role at power; proportional approval threshold; timelock; conflict at recusal rule; public change record; appeal; automatic sunset ng emergency power; at forkability.
- **Mga stress test:** adversarial proposal, pagkawala ng signer, bribery attempt, at capture sa pamamagitan ng accumulation o delegated control.
- **Risk appetite:** mababa para sa action na nakaaapekto sa valuation method, withdrawal, registry root, coverage, o emergency power.

Para sa deployment sa hinaharap ng proposed CLC governance token, isasama sa capture test ang accumulation na sinusundan ng pagtatangkang ilihis ang budget, pahinain ang registry standard, aprubahan ang related-party mandate, o ubusin ang funded coverage. Maaaring kabilang sa safeguard ang governance lockup, mas mataas na threshold para sa critical action, delayed execution, transparent delegation at concentration monitoring, incident process, at kapani-paniwalang fork-and-exit procedure. Hindi itinuturing na deployed ang alinman dahil lamang nakasulat ito rito.

### **10.6 Legal at compliance risk**

- **Mga banta:** hindi inaasahang regulatory treatment sa Voucher, service, promotion, o governance asset; consumer-protection failure; money-laundering o sanctions exposure; at cross-border restriction.
- **Mga indicator:** jurisdiction flag, regulator inquiry, complaint, restricted-party match, at pagkakaiba ng advertised at aktuwal na behavior.
- **Mga posibleng control:** review ayon sa class at jurisdiction; tumpak na disclosure; geofenced interface; proportional eligibility o attestation check; promotion control; record ng authority at acceptance; at malinaw na responsableng partido.
- **Mga stress test:** jurisdictional restriction, provider termination, mandatory reclassification, at utos na i-pause ang feature o asset class.
- **Risk appetite:** mababa; limitahan o i-pause ang hindi sinusuportahang activity.

#### 10.6.1 Legal positioning at pagtrato sa proposed token

1. **Verifiable infrastructure:** EVM-compatible ang mga kontrata ng Protocol v1.1.0 at inilathala ang source sa ilalim ng mga licence at third-party exception na tinukoy sa Protocol repository. Pinahihintulutan ng publication ang review ngunit hindi nito pinatutunayan ang audit, ligtas na deployment, o legal compliance. Dapat ilathala ng bawat deployment ang code version, build provenance, address, controller power, at audit status nito.
2. **Proposed-token posture:** sa disenyong ito, iko-coordinate ng proposed CLC governance token ang governance at policy-gated access. Hindi ito lilikha ng dividend, profit sharing, residual right, o garantiya ng value o liquidity.
3. **Kaugnay na proposed asset:** maaaring payagan ng hiwalay na implemented policy ang pag-lock ng proposed CLC governance token upang mag-mint ng stCLC at maaaring pahintulutan ang epoch-scoped sCLC. Kailangang tukuyin ng pinagtibay na terms ang eksaktong right, limit, expiry, transferability, at treatment ng mga ito.
4. **Communications:** hindi dapat mangako ng profit, appreciation, passive income, o guaranteed access ang material para sa anumang proposed CLC governance-token, stCLC, o sCLC deployment.
5. **Jurisdiction controls:** maaaring mangailangan ang deployment ng interface geofencing, attestation para sa restricted class, promotion limit, asset-specific review, o control na nagpa-pause ng proposed feature.
6. **Participant notice:** ipaliliwanag ng pinagtibay na terms kung kailan maaaring bawasan o ihinto ang access para sa legal, operational, o risk reason at kung may naaangkop na compensation o remedy.

### **10.7 Routing at cross-domain risk**

- **Kasalukuyang same-chain threat:** stale discovery data, kulang na inventory, pagbabago sa limit o admission, quote expiry, hindi sinusuportahang wallet o dependency, simulation failure, relay failure, chain reorganization, at path inflation.
- **Kasalukuyang control at ebidensiya:** pinned-block authoritative quote, simulation ng buong batch, per-hop minimum output at deadline, nilagdaang Calibur batch na may `revertOnFailure`, deterministic grouped receipt, reconciliation, at malinaw na failure code. Binabawasan ng mga control na ito ang ilang execution risk ngunit hindi ginagarantiya ang availability o fulfillment ng issuer.
- **Proposed cross-domain threat:** partial execution sa iba't ibang domain, stuck hop, bridge, HTLC o escrow exploit, timeout mismatch, at recovery dispute.
- **Mga indicator:** resulta ng route discovery at quote, pagkakaiba ng quote at execution, route depth, simulation failure, reversion, reconciliation failure, paulit-ulit na hindi kailangang hop, at—para sa future cross-domain system—escrow backlog at bridge incident.
- **Mga posibleng karagdagang control:** path at counterparty policy; route-level cap; may-pananagutang service operator; at maingat na HTLC o escrow timeout, abort, at recovery rule.
- **Mga stress test:** stale graph state, dependency outage, isang nabigong hop sa kasalukuyang atomic batch, chain reorganization, at—para sa future cross-domain route—bridge halt o expired escrow.
- **Risk appetite:** mababa hanggang katamtaman lamang para sa tinukoy at mino-monitor na dependency.

### **10.8 Custody at key-management risk**

- **Mga banta:** nawala o nakompromisong key, sabwatan ng signer, at hindi malinaw na recovery o administrator authority.
- **Mga indicator:** anomalous signature, pagbabago ng controller, failed rotation, at hindi karaniwang withdrawal.
- **Mga posibleng control:** multisig o threshold authorization; hardware-backed key; paghihiwalay ng role; signer rotation; public controller inventory; mino-monitor na withdrawal limit; at nasubok na recovery procedure.
- **Risk appetite:** mababa.

### **10.9 Reputation at social risk**

- **Mga banta:** mapanlinlang na claim, nakapipinsalang incentive, hindi accessible na complaint, mahinang fulfillment experience, privacy failure, at proteksiyong pumapabor sa insider.
- **Mga indicator:** complaint ayon sa cohort, hindi nalulutas na dispute, trend sa performance ng issuer, concentration ng benefit o loss, at feedback ng komunidad.
- **Mga posibleng control:** plain-language disclosure; grievance at correction path; accessible evidence; transparent reporting; incident review; at proportional sanction para sa misrepresentation.
- **Risk appetite:** mababa, na may espesyal na pag-iingat para sa apektadong komunidad at vulnerable participant.

### **10.10 Concentration at fragmentation risk**

- **Mga banta:** pagdepende sa kakaunting issuer, Pool, controller, provider, network, o incompatible fork.
- **Mga indicator:** concentration measure ayon sa issuer, Pool, inventory, controller, o service provider; route failure sa pagitan ng cluster; at critical single dependency.
- **Mga posibleng control:** inilathalang concentration threshold; maraming may-pananagutang operator; compatible standard; independent registry; nasubok na exit procedure; at ligtas na interoperability.
- **Mga stress test:** pagkawala ng pinakamalaking issuer, Pool, operator, provider, o registry root.
- **Risk appetite:** depende sa deployment at inilalathala, na may mas mahigpit na limit para sa essential service o hindi mapapalitang dependency.
