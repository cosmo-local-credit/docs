# 8. Technical scope at paglago

Inihihiwalay ng kabanatang ito ang kasalukuyang production route service sa opsyonal o iminungkahing paglago. Ang kasalukuyang kakayahang inilalarawan dito ay partikular sa pampublikong CLC App/Core deployment; hindi ito awtomatikong feature ng mga contract ng Protocol v1.1.0 o ibang deployment.

Kasama sa kasalukuyang pampublikong paglalagay ang:

- graph-based discovery ng Voucher na maaabot sa pamamagitan ng katugmang Pool;
- may-awtoridad na pinned-block quote para sa napiling same-chain route;
- pagkukuwenta ng bayarin sa Pool at protocol, minimum na output, at deadline sa bawat hop;
- full-batch simulation, pagpirma ng kalahok, at relayed Calibur execution;
- isang same-chain transaction na nagbabalik sa bawat route call kapag may call na nabigo; at
- grouped receipt at reconciliation ng settlement event sa bawat hop.

Kabilang sa posibleng mga lugar ng paglago ang:

- ang mga adaptor ng escrow o HTLC na naka-lock sa oras para sa cross-domain execution kung hindi magagamit ang atomic settlement;
- dagdag na mga profile ng rehistro o patakaran at cross-profile routing;
- opt-in na Pool-inventory rebalancing at batch netting;
- mga interface at tool ng patakaran para sa maliliit o personal na pool;
- ang mga rehistro na maaaring ma-audit para sa mga voucher, pool, mga pamamaraan ng exchange rate, limitasyon, controller, at bayad;
- ang mga connector ng payment provider na partikular sa deployment, cash out flows, at mga kontrol sa pagiging karapat-dapat;
- ang mga koneksyon ng fungible-asset sa mga panlabas na lugar ng likididad para sa muling pagkakapareho at likido ng pagbabayad; at
- pag-converting ng treasury na sakop ng patakaran para sa mga adopted coverage, operating costs, o liquidity mandates.

Ang mga presyo sa panlabas na merkado ay hindi magtataguyod kung ano ang utang ng isang tagapag-isyu sa ilalim ng mga tuntunin ng voucher.

## **8.1 Kasalukuyang serbisyo sa ruta at mas malawak na mga pamantayan**

**Discovery.** Pinananatili ng CLC Core ang reconciled graph mula sa naka-configure na catalog, ugnayan sa registry, parameter ng Pool, bayarin, limitasyon, balanse, at on-chain event. Tinatantiya nito kung ano ang maaabot ng session Wallet at minamarkahan ang stale na data. Hanggang tatlong hop ang hinahanap ng pampublikong configuration. Hindi executable commitment ang discovery.

**May-awtoridad na quote.** Para sa napiling ruta, binabasa ng CLC Core ang mga kasaling Pool sa iisang pinned block at inuulit ang suportadong `SwapPool` calculation. Inililista nito ang bayarin sa Pool at protocol, nagtatakda ng minimum na output at deadline sa bawat hop, naghahanda ng Wallet call, at sini-simulate ang buong batch. Tinatanggihan ang hindi suportadong token, quoter, Wallet, o kondisyon ng Pool.

**Kasalukuyang execution.** Pinipirmahan ng kalahok ang Calibur batch na naglalaman ng allowance reset, allowance grant, at bounded withdrawal sa bawat hop. Nagsusumite ang relayer ng isang same-chain transaction na may `revertOnFailure`. Nagbibigay ito ng all-or-nothing behavior sa antas ng transaction para sa kasalukuyang ruta. Hindi ito cross-chain atomicity, HTLC o escrow routing, awtomatikong rebalancing, o netting.

**Mga resibo at operasyon.** Pinagsasama ng App ang ruta sa iisang tracking ID at itinatala ang transaction status, ayos ng mga hop, mga Pool, token pair, quoted at settled na halaga, bayarin sa Pool, bayarin sa protocol, at intermediate remainder. Sinusubaybayan ng service ang graph freshness, route enumeration at quote result, simulation failure, tagal at correction ng reconciliation, at unresolved o unknown indexed member. Hindi pinatutunayan ng operational telemetry ang fulfillment ng tagapag-isyu.

**Network profile.** Maaaring suportahan ng client ang higit sa isang registry root o policy profile. Dapat nitong sabihin sa kalahok kung aling profile, counterparty, adapter, constraint, at responsableng service operator ang ginagamit ng quote. Kailangang matugunan ng cross-profile route ang lahat ng naaangkop na condition sa bawat hop.

**Route policy.** Maaaring ibukod ng responsableng operator ang unsafe na dependency o counterparty at magtakda ng route-level cap, freshness requirement, at health criterion. Tinutulungan ng mga signal na ito ang isang desisyon; hindi garantiya ang mga ito ng fulfillment o proteksiyon laban sa pagkawala.

**Mga bayarin at limitasyon.** Inililista ng kasalukuyang quote ang bayarin sa Pool at anumang karagdagang bayarin sa protocol sa bawat hop. Walang hiwalay na route-service fee ang pampublikong App sa kasalukuyan. Hiwalay na isisiwalat ang anumang service fee sa hinaharap. Tinatanggihan ng execution ang expired quote o paglabag sa boundary.

**Cross-domain atomicity at recovery.** Kung saan ang isang hinaharap na ruta ay hindi maaaring gamitin ang kasalukuyang parehong-chain atomic batch at sa halip ay gumagamit ng HTLCs o escrow, isisiwalat ng serbisyo ang mga timeout, abort path, responsable controllers, pamamaraan ng insidente, at natitirang panganib.

**Proposed batch netting at rebalancing.** Ang isang opt-in na serbisyo ay maaaring mangolekta ng mga intensyon sa rebalance at maghanap para sa mga katugmang siklo o kadena. Ito ay:

1. maglathala ng machine-readable receipt na tumutukoy sa eksaktong cycle, asset, amount, valuation timestamp, at fee;
2. ipatupad ang pinagtibay na per-period cap at counterparty policy;
3. tanggihan ang activity na lumalabag sa authorization, limit, o available inventory ng kasaling Pool; at
4. magpanatili ng deterministic input at receipt para sa review at dispute handling.

**Mga kinakailangan sa SDK at interface.** Dapat magbigay ang reusable route integration ng deterministic quote-to-receipt mapping, per-hop invariant check, madaling maunawaang failure code, at audit-friendly log. Ibinibigay ng kasalukuyang production App/Core implementation ang mga function na ito para sa sarili nitong profile. Nananatiling quote-only ang Solidity `SwapRouter` ng Protocol v1.1.0 at hindi ito nagpapatupad ng ruta.

### **8.1.1 Minimum confederation compatibility specification**

Ang isang ecosystem ng Pool na naghahanap ng cross-profile routing ay magpupublikar ng impormasyon na maaaring basahin ng makina para sa:

1. **Registry roots:** identifier para sa asset, Pool, exchange-rate method, limit, at fee policy, o isang root na deterministic na tumutukoy sa mga ito.
2. **Receipts:** profile, input at output asset, amount, quote source at timestamp, limit snapshot, fee, inventory result, at execution result para sa bawat hop.
3. **Operational signals:** impormasyong may limitadong saklaw tungkol sa inventory, paggamit ng limit, incident, at anumang partikular na napatunayang fulfillment o financial protection.
4. **Policy constraints:** pinapayagan o hindi pinapayagang counterparty, asset class, adapter, at anumang escrow requirement.
5. **Error codes:** deterministic na paliwanag para sa rejection, expiration, limit, inventory, policy, dependency, o incident failure.

Ang isang profile ay maaaring magdagdag ng coverage, compliance, arbitration, o iba pang mga serbisyo nang hindi ito gumagawa ng mga kinakailangan para sa pangunahing pagkakapantay-pantay ng CPP.

## **8.2 Pagbibigay ng lisensya, pag-verify, at paglabas**

EVM-compatible ang mga contract ng Protocol v1.1.0. Inilathala sa ilalim ng AGPL-3.0 ang mga contract sa `src` directory ng Protocol repository, maliban sa mga natukoy na hindi binagong third-party component na nagpapanatili ng sarili nilang mga tuntunin. Sinusuportahan ng inilathalang source, ABI, at deployment instruction ang independiyenteng pagsusuri, ngunit hindi pinatutunayan ng mga ito lamang na may audit, ligtas ang deployment, o sumusunod ito sa batas.

Dapat hiwalay na ilathala ng bawat deployment ang code version, build provenance, address, controller at upgrade power, audit status, registry mirror, at anumang timelock o pause protection.

Maaaring kabilang sa proposed **forklift kit** ang:

1. mga deterministic deployment scripts;
2. mga snapshot ng registry at mga tool sa pag-export;
3. dokumentadong proseso para ituro muli ang route service, SDK, at interface sa bagong registry root;
4. checklist ng Pool Steward para sa ligtas na pag-alis sa shared registry; at
5. migration checklist para sa outstanding Voucher, kabilang ang notice ng issuer, deadline sa presentment at fulfillment, patuloy na access sa record, at remedy.

Ang mga compatible fork ay maaaring mapabuti ang kakayahang umangkop kapag ang mga komunidad, kooperatiba, pampublikong ahensya, federasyon, multisigs, o operator ng serbisyo ay nangangailangan ng iba't ibang pamamahala.
