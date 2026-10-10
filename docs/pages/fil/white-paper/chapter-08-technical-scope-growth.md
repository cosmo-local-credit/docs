## **8. Technical scope at paglago**

Inilalarawan ng kabanatang ito ang opsyonal o iminungkahing gawain. Hindi ito listahan ng mga feature na garantisadong nasa kasalukuyang CLC App o Protocol v1.1.0.

Kabilang sa mga posibleng lugar ng trabaho ang:

- execution routing sa mga compatible Pools, na may registry, quote, limitation, fee at inventory discovery;
- ang mga adaptor ng escrow o HTLC na naka-lock sa oras para sa cross-domain execution kung hindi magagamit ang atomic settlement;
- mga interface at tool ng patakaran para sa maliliit o personal na pool;
- ang mga rehistro na maaaring ma-audit para sa mga voucher, pool, mga pamamaraan ng exchange rate, limitasyon, controller, at bayad;
- ang mga connector ng payment provider na partikular sa deployment, cash out flows, at mga kontrol sa pagiging karapat-dapat;
- ang mga koneksyon ng fungible-asset sa mga panlabas na lugar ng likididad para sa muling pagkakapareho at likido ng pagbabayad; at
- pag-converting ng treasury na sakop ng patakaran para sa mga adopted coverage, operating costs, o liquidity mandates.

Ang mga presyo sa panlabas na merkado ay hindi magtataguyod kung ano ang utang ng isang tagapag-isyu sa ilalim ng mga tuntunin ng voucher.

### **8.1 Proposed na mga pamantayan ng serbisyo sa ruta at SDK**

**Pagtuklas.** Ang isang iminungkahi na serbisyo ng ruta ay magtanong sa mga kinikilala na registry para sa pagpasok ng mga asset, mga pamamaraan ng rate ng palitan, limitasyon, bayad, inventory, insidente, at impormasyon ng controller.

**Mga profile ng network.** Ang isang kliyente ay maaaring suportahan ang higit sa isa na root ng registry o profile ng patakaran. Ito ay magsasabi sa kalahok kung aling profile, mga katumbas, mga adapter, constraints, at responsable na operator ng serbisyo ang gumagamit ng quote.

**Mga patakaran sa landas.** Ang isang responsable na operator ay maaaring i-exclude ang mga hindi ligtas na depende o counterparty at mag-apply ng mga cap sa antas ng ruta, mga kinakailangan ng freshness, at mga pamantayan sa kalusugan.

**Mga bayad at limitasyon.** Ang isang quote ay ipinapakita ang mga bayad ng Pool, anumang karagdagang kasalukuyang bayad sa Protokol, at anumang nag-iiba na iminungkahi na bayad sa routing o serbisyo.

**Atomicity at pagbawi.** Kung ito ay gumagamit ng HTLCs o escrow, ang serbisyong inihayag timeouts, abort paths, responsable controllers, insidente pamamaraan, at residual panganib.

**Proposed batch netting at rebalancing.** Ang isang serbisyo ng opt-in ay maaaring kumita ng mga layunin sa pagbabagong balanse at paghahanap para sa katumbas na mga siklo o kadena.

1. mag-publish ng isang machine-readable receipt na naglalaman ng executed cycles, assets, amounts, valuation timestamps, at fees;
2. ipatupad ang mga inaminang limitasyon sa bawat panahon at mga patakaran ng counterparty;
3. tumanggi ng aktibidad na sumisira sa anumang pahintulot, limitasyon, o magagamit na inventory ng nakikibahagi na Pool; at
4. panatilihin ang mga deterministic input at receipts para sa pagsusuri at dispute handling.

**Mga kinakailangan ng SDK.** Magbibigay ang isang SDK para sa mga naisagawang ruta ng deterministic quote-to-receipt mapping, per-hop invariant check, madaling maunawaang failure code, at audit-friendly log. Nagbibigay lamang ng mga quote ang kasalukuyang `SwapRouter` ng Protocol v1.1.0; hindi nito isinasagawa ang mga iminungkahing ruta.

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
