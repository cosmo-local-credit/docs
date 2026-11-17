## C. Proposed KPI mga kahulugan

Ang mga KPI na ito ay bumubuo ng isang iminungkahi na pagtutukoy sa pagsukat, hindi isang pahayag na ang kasalukuyang App o Protokol ay nagrekord ng bawat kinakailangang kaganapan.

Ang bawat nai-publish na KPI ay dapat maglalaman ng:

- responsable na publisher at mapagkukunan ng data;
- kahulugan ng kaganapan o estado;
- panahon ng cohort o pagsukat;
- unit at paraan ng valuation;
- timestamp ng valuation;
- mga patakaran sa pagsasama at pag-iwas;
- paggamot ng bahagyang mga talaan, pinagtatalo, natatapos na, hindi mai-access, at itinakda;
- ang kinakailangang katibayan o patotoo sa labas ng kadena;
- ang kasaysayan ng pagsusuri at mga limitasyon sa kalidad ng data; at
- kung ang resulta ay on-chain, naiulat, napatunayan, independiyenteng nasuri, o tinatayang.

| KPI | Proposed na kahulugan | Kinakailangan na katibayan at pag-iwas |
| --- | --- | --- |
| **Katumbas na mga presentasyon** | Ang bilang o mga unit na tinanggap sa proseso ng pagbabayad ng tagapag-isyu sa loob ng isang panahon | Pagpapakita ng pagkakakilanlan, tagapag-isyu, pahintulot sa may-ari, halaga, oras, katayuan; hindi kasama ang mga duplikat at di-nakatuwiran na kahilingan |
| **Ang rate ng pagpapatupad** | Pinapagtagumpayan na may-katumbas na mga presentasyon na binago ng may-akatumbas para sa parehong mature cohort | Ikalawang katibayan sa pagganap ng tagapag-isyu; ulat ng mga open, rejected, disputed, partial, at corrected case |
| **Katumpakan ng discharge** | Pinapayagan na mga presentasyon na may rekord ng diskarte na binago sa pinapayagan na presentasyon | Pagsusunog, pagtanggal, pag-aalis ng rekord, o iba pang katibayan sa hindi muling paggamit na nauugnay sa pagsusumpungan |
| **Katagal ng pagpapatupad** | Median at 90th percentile ng oras ng paghahatid hanggang pagpapatupad | Huwag palitan ang panahon ng pagmamay-ari mula sa pagpapahayag hanggang sa paghahatid o pagkuha hanggang sa pagpuhayag |
| **Panahon ng pagpapanatili** | Median at pamamahagi ng oras mula sa pagkuha hanggang sa paghahatid | I-identify ang kaganapan ng pagkuha at i-exclude ang hindi kilalang mga oras ng pagkuha |
| **Mga outstanding eligible commitments** | Mga karapat-dapat na pangako ng mga third party na nananatiling matapos ang mga tinukoy na exclusions | Identidad at mga termino ng tagapag-isyu; hindi kasama ang magagamit na inventory ng emitent, expiration, burn, discharge, tests, at non-commitment tokens |
| **Direct Pool Palitan na dami** | Value of completed swaps initiated as one-Pool exchanges sa ilalim ng isang disclosed valuation method | Mga kaganapan sa pag-areglo sa kadena, mga yunit ng token, pinagmulan ng rate, oras; huwag i-classify bilang pagsasakatuparan ng tagapag-isyu |
| ** Mga pagtatangka sa pagtuklas ng ruta** | Valid na mga kahilingan upang mahanap ang naaabot na mga voucher o mga kandidato na landas sa loob ng isang panahon | Graph version, indexed block, freshness, wallet scope, hinihiling na lalim, bilang ng mga kandidato, pag-iwas o estado ng search-budget; hindi isang may awtoridad na quote |
| **Makapagkakaroon na mga ruta ng kandidato** | Mga path ng kandidato na ibinalik sa pamamagitan ng pagtuklas para sa tinukoy na kohort ng kahilingan | Bilangin ang bawat natatanging inorder na Pool/token path; sabihin ang lalim ng ruta at mga pagbubukod; huwag i-classify bilang executable o settled |
| **Route quote pass rate** | Authoritative route quotes na ibinalik divided sa valid quote attempts | Pinned block, path, amount mode, expiry, result o dahilan ng pagtanggi; panatilihin na hiwalay sa tagumpay at pagpapatupad ng pagtuklas |
| **Rate ng pagpapatupad ng ruta** | Nakumpirmahan na naka-routed na mga transaksyon na hinati sa may bisa at nilagdaan na mga pagtatangka sa pagpapatupad para sa parehong mature na cohort | Tracking ID, transaction hash, dispatch status, confirmation o reversal, route depth, at dahilan ng pagkabigo; iwasan ang mga hindi pinirmahang quote |
| **Ang dami ng buong ruta** | Input at output na halaga ng kumpirmadong routed exchanges, binibilang nang isang beses sa bawat ruta | Gamitin ang tinatagong input ng unang hop at tinatagang output ng huling hop sa ilalim ng isang pamamaraan ng pagpapahalaga; huwag isumite ang lahat ng mga halaga ng hop bilang independiyenteng economic volume |
| ** Per-hop na pag-areglo** | Nakatay na input, gross output, Pool fee, protocol fee, at net output para sa bawat hop ng isang nakumpirma na ruta | Ordered Pool at token identifiers, settlement events, transaction hash, block, log index, at anumang intermediate na nalabi |
| **Mga bayarin sa ruta** | Kasalukuyang mga bayarin sa Pool at protocol na aktwal na nakaayos sa buong ruta | Ireport ang bawat hop at aggregate ayon sa uri ng bayarin; huwag ilagay ang mga ito bilang isang iminungkahing network rake o hindi naipatupad na bayad sa serbisyo |
| ** Mga paghihigpit sa ruta** | Bilang at bahagi ng mga pagtanggi sa ruta o quote ayon sa nakikilalang dahilan | Admission, deposit cap, liquidity, fee domain, hindi sinusuportahan na token o quoter, balanse ng wallet o uri, gas, search budget, expiry, mismatch, o katibayan sa simulation |
| ** Kalusugan sa pag-aayos ng ruta** | Freshness at pagiging maaasahan ng indexed graph at pinagsama-samang settlement records | Graph bersyon at edad, maruming-queue lalim, reconciliation tagal, pagwawasto, mga kabiguan, hindi kilalang mga miyembro, at unresolved resibo |
| **Inventory ng pool** | Ang kinukunan na suportadong mga kabtangan na itinatag ng isang pool sa isang tinukoy na oras | Mga saldo sa kontrata, mga reserbasyon sa bayad, hindi mai-access na mga asset, pamamaraan ng valuation, at mga kapangyarihan sa pag-withdraw ng mga may-ari |
| **Katumbas ng mga reserba** | Eligible, available reserve assets na binago sa expressly covered exposure | Pulitika ng pagkopya, pagiging karapat-dapat ng mga asset, custody/control, liabilities, exclusions, at valuation; hindi total token supply sa default |
| **Limitasyon sa paggamit** | Ang kinukunan na balanse ng token ng pool na binago sa kasalukuyang naka-configure cap nito | Limiter address, token, pool, timestamp, pagbabago, at mga panahon na walang limiter |
| **Pagbawi mula sa guarantor** | Natanggap na karapat-dapat na pagbawi na hinati sa mga natatanging claim | Kinilalang guarantor, patakaran sa claim, oras, gastos, litigasyon, at mga exclusion |
| **Proposed na kita sa network** | Pinaplano na network rake natanggap kasama ang nag-iiba na routing/service fees na natatanggap | I-exclude ang gross fees ng pool na pinananatili ng pool at iwasan ang pagbilang ng rake dalawang beses |
| **Katapusan ng pamamahala** | Panahon upang makita, magdesisyon, magpahinga, ayusin, at tapusin ang isang insidente | Ang mga tinukoy na oras, responsable na katawan, emergency powers, appeals, at missing events |

Ang mga ari-arian ng epekto sa lipunan ay nangangailangan ng isang hiwalay na pamamaraan. Ang aktibidad ng blockchain lamang ay hindi nagtataguyod ng pagkakakilanlan, pagganap ng tagapag-isyu, katatagan, kalusugan ng komunidad, sanhi, o epekto.
