## C. Mga proposed KPI definition

Ang mga KPI na ito ay isang proposed measurement specification, hindi pahayag na itinatala ng kasalukuyang App o Protocol ang bawat kinakailangang event.

Dapat isama sa bawat inilathalang KPI ang:

- responsableng publisher at data source;
- definition ng event o state;
- cohort o measurement period;
- unit at valuation method;
- valuation timestamp;
- mga tuntunin sa inclusion at exclusion;
- pagtrato sa partial, disputed, expired, inaccessible, at corrected record;
- kinakailangang off-chain evidence o attestation;
- revision history at mga limitasyon sa kalidad ng data; at
- kung on-chain, iniulat, in-attest, independently verified, o estimated ang resulta.

| KPI | Proposed definition | Kinakailangang ebidensiya at mga exclusion |
| --- | --- | --- |
| **Valid presentments** | Bilang o mga unit na tinanggap sa redemption process ng issuer sa loob ng isang panahon | Presentment identifier, issuer, pahintulot ng holder, amount, oras, status; huwag isama ang duplicate at invalid request |
| **Fulfillment rate** | Fulfilled valid presentments na hinati sa valid presentments para sa parehong mature cohort | Hiwalay na ebidensiya ng performance ng issuer; iulat ang open, rejected, disputed, partial, at corrected case |
| **Discharge completeness** | Fulfilled presentments na may discharge record na hinati sa fulfilled presentments | Burn, cancellation, disabling record, o ibang ebidensiya ng hindi muling paggamit na nakaugnay sa fulfillment |
| **Fulfillment latency** | Median at 90th percentile ng oras mula presentment hanggang fulfillment | Huwag ipalit ang issue-to-presentment o acquisition-to-presentment holding time |
| **Holding duration** | Median at distribution ng oras mula acquisition hanggang presentment | Tukuyin ang acquisition event at huwag isama ang hindi alam na acquisition time |
| **Outstanding eligible commitments** | Kwalipikadong third-party commitment na natitira pagkatapos ng mga tinukoy na exclusion | Identity at terms ng issuer; huwag isama, kung naaangkop, ang inventory ng issuer, expiry, burn, discharge, test, at non-commitment token |
| **Direct Pool swap volume** | Value ng nakumpletong swap na sinimulan bilang one-Pool exchange sa ilalim ng iisang inilathalang valuation method | On-chain settlement event, token unit, rate source, oras; huwag uriin bilang fulfillment ng issuer |
| **Route discovery attempts** | Valid request upang maghanap ng reachable Voucher o candidate path sa loob ng isang panahon | Graph version, indexed block, freshness, wallet scope, requested depth, candidate count, omission o search-budget state; hindi ito may-awtoridad na quote |
| **Available candidate routes** | Mga candidate path na ibinalik ng discovery para sa tinukoy na request cohort | Bilangin ang bawat natatanging nakaayos na Pool/token path; isaad ang route depth at exclusion; huwag uriin bilang executable o settled |
| **Route quote pass rate** | May-awtoridad na route quote na ibinalik na hinati sa valid quote attempt | Pinned block, path, amount mode, expiry, resulta o dahilan ng refusal; panatilihing hiwalay sa discovery success at execution |
| **Route execution rate** | Confirmed routed transaction na hinati sa valid signed execution attempt para sa parehong mature cohort | Tracking ID, transaction hash, dispatch status, confirmation o reversion, route depth, at dahilan ng failure; huwag isama ang unsigned quote |
| **Whole-route volume** | Input at output value ng confirmed routed exchange, na minsan lamang binibilang sa bawat route | Gamitin ang settled input ng unang hop at settled output ng huling hop sa ilalim ng iisang valuation method; huwag pagsamahin ang lahat ng hop value bilang magkakahiwalay na economic volume |
| **Per-hop settlement** | Settled input, gross output, Pool fee, protocol fee, at net output sa bawat hop ng confirmed route | Nakaayos na Pool at token identifier, settlement event, transaction hash, block, log index, at anumang intermediate remainder |
| **Route fees** | Kasalukuyang Pool at protocol fee na aktuwal na na-settle sa buong route | Iulat ang bawat hop at aggregate ayon sa uri ng fee; huwag tawagin ang mga ito na proposed network rake o hindi pa ipinapatupad na service fee |
| **Route constraints** | Bilang at bahagi ng route o quote refusal ayon sa tinukoy na dahilan | Admission, deposit cap, liquidity, fee domain, hindi sinusuportahang token o quoter, wallet balance o type, gas, search budget, expiry, mismatch, o simulation evidence |
| **Route reconciliation health** | Freshness at reliability ng indexed graph at pinagsamang settlement record | Graph version at edad, dirty-queue depth, tagal ng reconciliation, correction, failure, unknown member, at unresolved receipt |
| **Pool inventory** | Nasukat na sinusuportahang asset na hawak ng Pool sa tinukoy na oras | Contract balance, fee reservation, inaccessible asset, valuation method, at kapangyarihan ng owner sa withdrawal |
| **Reserve adequacy** | Kwalipikado at available na reserve asset na hinati sa tahasang sakop na exposure | Coverage policy, asset eligibility, custody/control, liability, exclusion, at valuation; hindi default na total token supply |
| **Limit utilization** | Nasukat na token balance ng Pool na hinati sa kasalukuyang naka-configure na cap | Limiter address, token, Pool, timestamp, pagbabago, at mga panahong walang limiter |
| **Guarantor recovery** | Natanggap na kwalipikadong recovery na hinati sa mga covered claim na nabayaran | Tinukoy na guarantor, claim policy, timing, cost, dispute, at write-off |
| **Proposed network revenue** | Natanggap na proposed network rake at hiwalay na routing/service fee | Huwag isama ang gross Pool fee na pinanatili ng Pool at iwasang bilangin nang dalawang beses ang rake |
| **Governance timeliness** | Oras upang matukoy, pagpasiyahan, i-pause, ayusin, at isara ang isang incident | Tinukoy na clock, responsableng body, emergency power, appeal, at missing event |

Kailangan ng hiwalay na methodology ang mga social-impact claim. Hindi sapat ang blockchain activity lamang upang patunayan ang identity, performance ng issuer, satisfaction, kalusugan ng komunidad, causality, o impact.
