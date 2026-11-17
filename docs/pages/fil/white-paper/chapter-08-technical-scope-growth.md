## **8. Technical scope at paglago**

Ang kabanatang ito ay naghihiwalay sa kasalukuyang serbisyo ng pag-routing ng produksyon mula sa opsyonal o iminungkahing paglago. Isang kasalukuyang kakayahan na inilarawan dito ay nananatiling partikular sa pampublikong CLC App/Core deployment; ito ay hindi awtomatikong isang tampok ng mga kontrata ng Protocol v1.1.0 o ibang deployments.

Kasama sa kasalukuyang pampublikong paglalagay ang:

- graph-based na pagtuklas ng mga voucher na maaabot sa pamamagitan ng compatible mga Pool;
- awtoridad na pined-block quotes para sa napiling mga ruta ng parehong kadena;
- per-hop Pool at protocol bayad kalkulasyon, minimum na mga output, at deadlines;
- kumpleto-batch simulation, kalahok pag-sign, at relayed Calibur pagpapatupad;
- isang same-chain na transaksyon na nagbabalik sa bawat pagtawag ng ruta kung mabibigo ang isang tawag; at
- mga nakagrupo na resibo at pagkakatugma ng mga pangyayari sa pag-areglo sa bawat hop.

Kabilang sa posibleng mga lugar ng paglago ang:

- ang mga adaptor ng escrow o HTLC na naka-lock sa oras para sa cross-domain execution kung hindi magagamit ang atomic settlement;
- dagdag na mga profile ng rehistro o patakaran at cross-profile routing;
- opt-in na imbalanse ng inventory sa Pool at batch netting;
- mga interface at tool ng patakaran para sa maliliit o personal na pool;
- ang mga rehistro na maaaring ma-audit para sa mga voucher, pool, mga pamamaraan ng exchange rate, limitasyon, controller, at bayad;
- ang mga connector ng payment provider na partikular sa deployment, cash out flows, at mga kontrol sa pagiging karapat-dapat;
- ang mga koneksyon ng fungible-asset sa mga panlabas na lugar ng likididad para sa muling pagkakapareho at likido ng pagbabayad; at
- pag-converting ng treasury na sakop ng patakaran para sa mga adopted coverage, operating costs, o liquidity mandates.

Ang mga presyo sa panlabas na merkado ay hindi magtataguyod kung ano ang utang ng isang tagapag-isyu sa ilalim ng mga tuntunin ng voucher.

### **8.1 Kasalukuyang serbisyo sa ruta at mas malawak na mga pamantayan**

**Discovery.** Ang CLC Core ay nagpapanatili ng isang pinagsama-samang graph mula sa naka-configure na mga katalog, ugnayan ng rehistro, mga parameter ng Pool, bayad, limitasyon, balanse, at mga kaganapan sa kadena. Ito ay tinatayang kung ano ang isang session wallet ay maaaring maabot at markahan na data. Ang pampublikong pag-configure ay naghahanap ng mga ruta na hanggang sa tatlong hops. Ang pagtuklas ay hindi isang pangako na matutupad.

**Authoritative quote.** Para sa isang napili ruta, CLC Core ay nagbabasa ng mga kalahok Pool sa isang pined block at reproduces sinusuportahan `SwapPool` aritmetika. Ito itemizes Pool at protocol bayarin, set per-hop minimum output at isang deadline, naghahanda ng wallet tawag, at simulates ang kumpletong batch. Ang hindi sinusuportahan na mga token, quote, wallet, o kondisyon ng Pool ay tinanggihan.

** Kasalukuyang pagpapatupad.** Ang kalahok ay nag-sign ng Calibur batch na naglalaman ng allowance reset, allowances grant, at bounded withdrawal para sa bawat hop. Ang isang relayer magsumite ng isang parehong-chain transaksyon na may `revertOnFailure` pinagana. Nagbibigay ito ng all-or-nothing na pag-uugali sa antas ng transaksyon para sa kasalukuyang ruta. Ito ay hindi cross-chain atomicity, HTLC o escrow routing, awtomatikong rebalancing, o netting.

** Mga resibo at operasyon.** Ang App ay nagsasama ng ruta sa ilalim ng isang pagsubaybay ID at mga talaan transaksyon katayuan, hop order, mga Pool, token pares, binanggit at tinatag halaga, Pool bayad, protocol bayad, at intermediate remnants. Sinusubaybayan ng serbisyong ito ang graph freshness, route enumeration at quote outcomes, simulation failures, reconciliation duration at corrections, at unresolved or unknown indexed members. Operational telemetry ay hindi patunayan tagapag-isyu katuparan.

** Network profile.** Isang kliyente ay maaaring suportahan ang higit sa isang ugat ng rehistro o patakaran profile. Ito ay sasabihin sa kalahok kung aling profile, counterparties, adapters, constraints, at responsable na mga operator ng serbisyo ang ginagamit ng isang quote. Ang isang cross-profile na ruta ay kailangang matugunan ang lahat ng naaangkop na kondisyon sa hop.

**Politika ng ruta.** Ang isang responsableng operator ay maaaring i-exclude ang hindi ligtas na mga dependency o counterparties at mag-apply ng mga cap sa antas ng ruta, mga kinakailangan sa pagiging sariwa, at pamantayan sa kalusugan. Ang mga palatandaan na ito ay sumusuporta sa isang pasiya; hindi sila garantiya ng katuparan o proteksyon laban sa pagkawala.

** Mga bayad at mga limitasyon.** Ang kasalukuyang quote ay naglalarawan ng mga bayad sa Pool at anumang karagdagang bayarin sa Protocol para sa bawat hop. Ang pampublikong App ay kasalukuyang hindi nagdaragdag ng hiwalay na bayarin sa serbisyo sa pag-routing. Ang anumang bayad sa paglilingkod sa hinaharap ay hiwalay na isisiwalat. Ang pagpapatupad ay tumatanggi sa mga expired quote o nasira ang mga hangganan.

**Cross-domain atomicity at recovery.** Kung saan ang isang hinaharap na ruta ay hindi maaaring gamitin ang kasalukuyang parehong-chain atomic batch at sa halip ay gumagamit ng HTLCs o escrow, isisiwalat ng serbisyo ang mga timeout, abort path, responsable controllers, pamamaraan ng insidente, at natitirang panganib.

**Proposed batch netting at rebalancing.** Ang isang opt-in na serbisyo ay maaaring mangolekta ng mga intensyon sa rebalance at maghanap para sa mga katugmang siklo o kadena. Ito ay:

1. mag-publish ng isang machine-readable na resibo na nagpapakilala sa mga eksakto na siklo, mga ari-arian, halaga, timestamps ng pagpapahalaga, at bayad;
2. ipapatupad ang pinagtibay na per-period caps at mga patakaran ng counterparty;
3. tanggihan ang aktibidad na lumalabag sa anumang pahintulot, mga limitasyon, o magagamit na imbentaryo ng nakikibahagi na Pool; at
4. panatilihing deterministic inputs at mga resibo para sa pagsusuri at dispute paghawak.

**SDK at interface na mga kinakailangan.** Ang isang reusable ruta integration ay dapat magbigay ng deterministic quote-to-receipt mapping, per-hop invariant checks, naiintindihan failure code, at audit-friendly logs. Ang kasalukuyang produksyon App / Core pagpapatupad ay nagbibigay ng mga pag-andar para sa kanyang sariling profile. Ang Protocol v1.1.0 Katatagan `SwapRouter` nananatiling quote-only at hindi ipinatupad ang ruta.

#### **8.1.1 Minimum confederation compatibility specification**

Ang isang ecosystem ng Pool na naghahanap ng cross-profile routing ay magpupublikar ng impormasyon na maaaring basahin ng makina para sa:

1. **Mga ugat ng rehistro:** mga identifier para sa mga asset, pool, mga pamamaraan ng rate ng palitan, limitasyon, at patakaran sa bayad, o isang root na deterministically resolves ang mga ito.
2. **Mga reseta:** ang profile, mga asset sa loob at labas, halaga, pinagmulan ng quote at timestamp, limit snapshot, bayad, resulta ng inventory, at resulta ng pagpapatupad para sa bawat hop.
3. **Mga signal sa operasyon:** ang mga impormasyon na may limitasyong kalungkutan tungkol sa inventory, limitasyon ng paggamit, insidente, at anumang partikular na napatunayan na pagpapatupad o pinansiyal na proteksyon.
4. **Mga paghihigpit sa patakaran:** Pinapayagan o hindi pinapayagan ang mga counterparty, asset classes, adapters, at anumang mga kinakailangan sa escrow.
5. **Mga code ng pagkakamali:** deterministic explanations for rejection, expiration, limit, inventory, policy, dependency, or incident failures.

Ang isang profile ay maaaring magdagdag ng coverage, compliance, arbitration, o iba pang mga serbisyo nang hindi ito gumagawa ng mga kinakailangan para sa pangunahing pagkakapantay-pantay ng CPP.

### **8.2 Pagbibigay ng lisensya, pag-verify, at paglabas**

EVM-compatible ang mga contract ng Protocol v1.1.0. Inilathala sa ilalim ng AGPL-3.0 ang mga contract sa `src` directory ng Protocol repository, maliban sa mga natukoy na hindi binagong third-party component na nagpapanatili ng sarili nilang mga tuntunin. Sinusuportahan ng inilathalang source, ABI, at deployment instruction ang independiyenteng pagsusuri, ngunit hindi pinatutunayan ng mga ito lamang na may audit, ligtas ang deployment, o sumusunod ito sa batas.

Ang bawat deployment ay nag-iiba na ipahayag ang bersyon ng code nito, build provenance, address, controller at upgrade powers, status ng audit, registry mirrors, at anumang timelock o pause protection.

Isang iminungkahi **forklift kit** maaaring isama ang:

1. mga deterministic deployment scripts;
2. mga snapshot ng registry at mga tool sa pag-export;
3. isang dokumentadong proseso para sa pagbabalik ng mga serbisyo sa ruta, SDKs, at interface sa isang bagong root ng registry;
4. isang listahan ng pag-check ng Tagapangasiwa ng Pool para sa ligtas na pagpapalabas ng isang nakabahagi na talaan; at
5. isang listahan ng pag-check sa migration para sa mga outstanding voucher, kabilang ang mga pahibalo ng tagapag-isyu, mga deadline para sa paghahatid at pagpapatupad, patuloy na access sa mga talaan, at remedies.

Ang mga compatible fork ay maaaring mapabuti ang kakayahang umangkop kapag ang mga komunidad, kooperatiba, pampublikong ahensya, federasyon, multisigs, o operator ng serbisyo ay nangangailangan ng iba't ibang pamamahala.
