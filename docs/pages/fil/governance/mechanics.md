# Mga mekanismo ng pamamahala

Hinahati ang pamamahala sa Cosmo-Local Credit (CLC) sa magkakaibang tungkulin sa halip na italaga sa iisang pangkalahatang awtoridad. Inilalarawan ng pahinang ito ang mga opsyon sa pamamahala para sa mga network na compatible sa CLC; hindi ito nagtatakda ng iisang legal na anyo, sistema ng pagboto, o organisasyon.

Pinapatakbo ng Grassroots Economics Foundation (GEF) ang pampublikong progressive web app sa `cosmolocal.credit` at mga sumusuportang serbisyo nito. Sa tungkuling iyon, maaaring panatilihin ng GEF ang mga interface at catalog, magpatupad ng pinakamababang pamantayan sa listing o kaligtasan, mag-moderate ng content, maglimita ng mga feature ng App, at mag-ugnay ng teknikal na operasyon. Maliban kung hayagang tumanggap ang GEF ng ibang tungkulin para sa isang partikular na kaayusan, hindi ito ang tagapag-isyu ng Voucher na ginawa ng user, Tagapangasiwa ng Pool na ginawa ng user, guarantor, insurer, custodian, lender, borrower, tagatubos, o partido sa transaksyon ng mga user.

Ang [Mga Tuntunin ng Serbisyo](/fil/governance/terms) ang namamahala sa paggamit ng pampublikong App at mas detalyadong nagpapaliwanag sa mga pananagutang ito.

Iniuugnay ng [Mga konsepto at bokabularyo](/fil/introduction/concepts) ang mga pampublikong tungkuling ito sa contract ownership, proxy administration, dependency control, catalog moderation, at pagtanggap ng bayad.

## Pananagutan ayon sa tungkulin

- **Mga tagapag-isyu ng Voucher** ang namamahala sa sarili nilang Offering. Naglalathala sila ng tumpak na impormasyon tungkol sa pagkakakilanlan, kakayahan, supply, valuation, expiry, paghaharap, pagtupad, lugar, oras, bayarin, paghihigpit, at remedyo, at nananatili silang responsable sa pagtupad sa mga pangakong iyon.
- **Mga Tagapangasiwa ng Pool** ang namamahala sa pagtanggap, curation ng asset, valuation, bayarin, limitasyon, inventory, reserba, kontribusyon, conflict, provenance, configuration, pause, upgrade, at anumang garantiya o mekanismo ng paglalaan ng pagkalugi para sa kanilang Pool.
- **Ang mga Registry at Service Stewards** ay maaaring magtakda kung aling mga Pool o asset ang lilitaw sa isang rehistro at ang mga patakaran sa pagpapatakbo para sa pagtuklas, routing, pagsubaybay, suporta sa likididad, o iba pang ibinahaging serbisyo. Ang kanilang awtoridad sa serbisyo ay hindi awtomatikong nagpapalawak sa mga ari-arian ng isang Pool o sa mga obligasyon ng isang tagapag-isyu.
- **Mga user** ang nagpapasya kung katanggap-tanggap at legal para sa kanila ang isang tagapag-isyu, Voucher, Pool, quote, at transaksyon. Ang registry entry o listing sa App ay hindi garantiya o pag-endorso.

Maaaring gampanan ng isang tao o organisasyon ang higit sa isang tungkulin, ngunit dapat nitong isiwalat ang bawat tungkulin at ang mga conflict at obligasyong kaakibat nito.

## Pamamahala sa antas ng Pool

Pananagutan ng Tagapangasiwa ng Pool ang inilathalang curation, valuation, limitasyon, bayarin, kondisyon ng palitan, tinanggap na pangako, patakaran sa inventory, lokal na pagtatalo, proseso ng pag-aayos, at awtorisadong pagbabago sa pamamahala. Maaaring hatiin ang teknikal na awtoridad sa may-ari ng `SwapPool`, proxy administrator, dependency controller, multisig signer, at tumatanggap ng bayarin. Dapat tukuyin ng pampublikong patakaran ang mga kapangyarihang iyon sa halip na ituring silang iisang tungkulin.

Ang pag-aayos sa loob ng Pool ay nananatili sa awtorisadong pamamahala at mga responsableng partido nito. Maaaring iwasto ng Tagapangasiwa ang configuration, ihinto ang admission, tugunan ang lokal na pagtatalo, o gumawa ng remedyo sa loob ng awtoridad nito. Hindi nito mabubura ang pampublikong transaction record o tahimik na mapapawi ang hiwalay na obligasyon sa Voucher ng tagapag-isyu.

## Mga operasyon sa antas ng network

Nagpapatakbo ang production CLC App at CLC Core ng shared discovery, route quote, paghahanda ng Wallet batch, relay coordination, indexing, reconciliation, at grouped routed-exchange receipt. Maaaring kabilang sa network-level incident ang stale o unavailable na route data, reconciliation failure, hindi suportadong dependency, relay failure, at problema sa interoperability ng mga Pool.

Maaaring i-pause o ayusin ng operator ang sarili nitong service, i-refresh ang indexed state, ibukod ang hindi suportadong path, ipaliwanag ang failure, at makipag-ugnayan sa apektadong Tagapangasiwa. Hindi nagbibigay ang operational role na ito ng awtoridad na baguhin ang patakaran ng hiwalay na Pool, ilipat ang inventory nito, talikuran ang pangako ng tagapag-isyu, o magpasya sa lokal na pagtatalo sa fulfillment.

Hindi rin pinapahintulutan ng kasalukuyang participant-initiated routing ang awtomatikong Pool rebalancing. Ang anumang rebalancing, netting, shared-liquidity, guarantee, o insurance service ay nangangailangan ng hiwalay na opt-in authority, control, responsableng partido, at inilathalang tuntunin.

## Pamamahala sa antas ng rehistro

Ang isang registrar o katalogo steward ay maaaring harapin ang mga maling listahan, pagkakakilanlan at integridad ng metadata, mga pahintulot sa rehistro, estado ng paglalathala, mga pagkabigo sa serbisyo, at mga pamamaraan sa pagwawasto, suspensyon, o apela. Ang isang talaan ng rehistro ay tumutulong sa pagtuklas; ito mismo ay hindi isang pagtatasa ng kapasidad ng naglalabas, garantiya ng Pool, o talaan sa katuparan.

Ang pag-correct o pagtanggal ng isang paglilista ay hindi nagbabago sa isang on-chain settlement, aalisin ang isang balanse, baguhin ang independiyenteng pinamamahalaan na pagkakakilanlan ng isang Pool, o i-discharge ang isang natitirang pangako. Ang mga resulta na iyon ay nangangailangan ng awtoridad at proseso na naaangkop sa kaugnay na kontrata, Pool, tagapag-isyu, o legal na obligasyon.

## Katibayan sa ruta at pananagutan

Pinananatili ng routed exchange ang mga boundary sa pagitan ng mga hop. Inilalapat ng bawat Pool ang sarili nitong admission, quote, balance cap, bayarin, inventory, at controller power. Pinagsasama ng CLC Core ang teknikal na resulta sa isang resibo, ngunit hindi nito pinagsasama ang pamamahala ng mga Pool o inililipat ang pananagutan ng tagapag-isyu sa route operator.

Maaaring patunayan ng resibo ang pagpili ng ruta, awtorisasyon, transaction status, settled amount sa bawat hop, at bayarin. Nangangailangan ng hiwalay na ebidensiya ang real-world redemption presentment, fulfillment, satisfaction, at discharge, at nananatili ang pananagutan sa tinukoy na tagapag-isyu at naaangkop na proseso.

## Mga istrukturang may pananagutan

Maaaring pamahalaan ang isang CLC-compatible na Pool, registry, o serbisyo ng nonprofit foundation, cooperative, community group, federation, company, multisig, public agency, institutional board, on-chain voting system, o ibang istrukturang may pananagutan. Anuman ang piliing istruktura, dapat matukoy ng mga kalahok:

- sino ang may awtoridad na magpasya at magsagawa ng desisyon;
- paano tinatanggap, sinusuri, sinuspinde, o inaalis ang mga asset, tagapag-isyu, at kalahok;
- paano itinatakda at binabago ang valuation, bayarin, limitasyon, reserba, garantiya, at ibang mahalagang setting;
- aling dependency o contract ang maaaring i-upgrade, palitan, i-pause, o permanenteng i-seal;
- paano isinisiwalat at hinahawakan ang mga conflict of interest;
- anong record, notice, approval, at review period ang naaangkop;
- anong emergency power ang mayroon at paano sinusuri ang paggamit nito; at
- paano maaaring magreklamo, umalis, lumipat, o tugunan ng mga kalahok ang hindi nalutas na obligasyon.

Dapat tumugma ang inilathalang mga tuntunin sa mga kapangyarihang available sa kaugnay na contract at serbisyo. Dapat panatilihing malinaw at naa-audit ng pamamahala ang mahahalagang desisyon at hindi nito dapat ilarawan ang convertibility, liquidity, return, insurance, reserba, o garantiya nang mas malawak kaysa sa aktuwal na kayang ibigay ng responsableng partido.

## Mga opsyon sa teknikal na pamamahala

Kung naaangkop ang token voting, maaaring gumamit ang isang deployment ng mga contract ng [OpenZeppelin Governor](https://docs.openzeppelin.com/contracts/4.x/api/governance) at interface gaya ng Tally. Maaaring umasa ang ibang deployment sa multisig approval, cooperative resolution, pasya ng board, mandato ng public agency, o hybrid na proseso.

Ang mga kasangkapan na ito ay opsyonal. Ang pampublikong App ay kasalukuyang nagbibigay ng same-chain routing na sinimulan ng kalahok sa pamamagitan ng CLC Core, ngunit hindi ito nagpapahiwatig ng token voting, awtomatikong muling pagbabalanse, netting, ibinahaging seguro, mga programa sa likididad ng network, o sentral na pamamahala ng GEF. Ang bawat deployment ay dapat na makilala ang mga aktwal na gumagawa ng desisyon, kontrata, service provider, at patakaran.

## Kilos sa interface at on-chain state

Maaaring magtago, mag-flag, magsuspinde, o mag-alis ng item sa interface ang operator ng App o tagapangasiwa ng registry. Hindi nangangahulugan ang kilos na iyon na naka-pause ang smart contract, nabaligtad ang tapos nang transaksyon, nabura ang record sa pampublikong blockchain, nawala ang balanse, o na-discharge ang obligasyon sa pagitan ng mga user. Dapat pag-ibahin sa governance plan ang mga kontrol sa interface, mga awtoridad na umiiral on-chain, at mga legal na tungkuling nagpapatuloy off-chain.

Para sa mas malawak na disenyo, tingnan ang [kabanata tungkol sa mga mekanismo ng pamamahala](/fil/white-paper/chapter-11-governance-mechanics) sa White Paper.
