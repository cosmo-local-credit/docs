## **5. Mula sa hiwalay na mga Pool tungo sa isang pederadong network**

Kasalukuyang Protocol v1.1.0 ay sumusuporta sa direktang pagpapatupad sa pamamagitan ng isang `SwapPool` at nagbibigay ng isang quote-only Solidity `SwapRouter`. Ang produksyon CLC App at CLC Core coordinate participant-initiated same-chain ruta sa pamamagitan ng maraming bilang ng tatlong mga Pool sa pamamagitan ang paghahanda ng isang pinirmahan Calibur wallet batch. Ang mga kontrata ay hindi mismo nagpapatupad ng isang multi-hop na ruta, at ang kasalukuyang daloy ng App/Core ay hindi nagbibigay ng cross-chain HTLCs, escrow routes, automatic Pool rebalancing, batch netting, o cross-network clearing.

Ipinaliliwanag sa kabanatang ito ang kasalukuyang ruta ng kalahok at pinaghihirapan ito mula sa iminungkahing koordinasyon na kakailanganin ng bagong awtoridad ng Pool. Sa parehong mga kaso, ang mga independiyenteng Pool ay nagpapanatili ng kanilang sariling mga patakaran sa pagpasok, pagpapahalaga, limitasyon, bayad, imbentaryo, pahintulot, at pamamahala.

### **5.1 Nag-iiba na mga hakbang sa paghahati at pagpapatupad**

Routing ay maaaring mapabuti ang access sa imbentaryo, ngunit ito ay hindi pagsamahin ang Voucher at palitan lifecycles. Ang pagsukat ay dapat panatilihing hiwalay ang mga pangyayaring ito:

1. ang isang ruta ay iniulat;
2. ang isa o higit pang mga pool swaps ay ipatupad at matugunan sa chain;
3. inihaharap ng may hawak ang mga unit ng voucher sa tagapag-isyu;
4. ang tagapag-isyu ay nagtutupad ng pangako; at
5. dini-discharge ang mga natupad na unit.

Ang mga ulat ay magpapakita ng cohort, period, assets, valuation method at timestamp, exclusions, corrections, and off-chain evidence na kinakailangan sa Appendix C.

**Illustrative na ruta:** Ang isang paaralan ay may mga voucher ng mais ngunit nangangailangan ng mga mga voucher sa transportasyon. Ang CLC Core ay maaaring makilala ang mga katugmang imbentaryo ng Pool, bigyang-diin ang napiling landas sa isang pin na bloke, at ihanda ang mga nakabatang tawag para sa pitaka ng paaralan. Ang pagpapatupad ay matagumpay lamang kung ang bawat pag-ikot ay mananatiling nasa loob ng mga hangganan, limitasyon, bayad, imbentaryo, sinusuportahan na pag-uugali, at patakaran. Ang mga nagresultang swap ay hindi nagpapatunay na ang alinman sa mga tagapag-isyu ay sumunod sa kanyang mga obligasyong Voucher.

### **5.2 Kasalukuyang routing ng kalahok at iminungkahing muling pagbabalanse**

Ang dalawang gawain ay nangangailangan ng iba't ibang awtoridad.

** Kasalukuyang pagsasakatuparan na sinimulan ng kalahok.** Dahil sa mga input at output voucher at isang halaga, tinataya ng CLC Core ang mga landas mula sa kwalipikadong holding ng kalahoka. Para sa isang napili ruta, ito ay nagbabasa ng mga Pool sa isa pinned block, gumagawa ng isang may awtoridad quote, simulates ang kumpletong batch, at naghahanda ng tatlong tawag sa bawat hop: allowance reset, `SwapPool.withdraw`. Ang mga kasapi sign, at ang relayer magsumite ng isang parehong-chain Calibur transaksyon na may `revertOnFailure` pinagana. Ang isang nabigo na tawag ay nagbabalik sa bawat pagtawag ng ruta. Pinagsasama ng App ang transaksyon at per-hop settlement sa isang resibo.

Ang bawat hop ay nagpapanatili ng sariling may pananagutan na Pool, quote input, pahintulot, bayad, limitasyon, imbentaryo, at kaganapan sa pag-areglo. Ang kasalukuyang App ay hindi nagdaragdag ng hiwalay na bayarin sa serbisyo sa ruta. Sinusuportahan ng kasalukuyang daloy ang mga wallet ng EOA/Calibur na katugma sa App, hindi ang mga Safes o iba pang mga wallets ng kontrata.

**Opt-in Pool rebalancing.** Maaaring i-publish ng mga Mga Tagapangasiwa ng Pool ang mga target sa imbentaryo, pinahihintulutang counterparties, asset classes, quote-deviation bounds, at per-period limits. Ang isang responsable na serbisyo ay maaaring maghanap para sa mga katugmang siklo o kadena at ipatupad lamang ang awtorisadong mga layunin.

Ang muling pagbabalanse ay magiging opt-in. Ang isang Pool ay maaaring payagan ang mga ordinaryong ruta ng kalahok nang hindi nagpapahintulot sa isang serbisyo na ilipat ang imbentaryo para sa muling pagbabalanse. Ang isang hinaharap na mandate ay maaaring magbigay ng kakayahan lamang sa mga napiling assets, counterparties, at halaga. Ang bawat ginanap na hop ay magbibigay ng isang resibo, at ang anumang bayad sa serbisyo ay ilalabas nang hiwalay mula sa mga bayarin sa Pool at Protocol.

Ang cross-chain HTLC o escrow execution ay hiwalay din sa kasalukuyang same-chain atomic batch. Kakailanganin nito ang pinagtibay na mga patakaran sa timeout, abort, controller, recovery, at residual-risk.

#### **5.2.1 Konfederasyon at interoperability**

Ang mga independiyenteng deployments ay maaaring magpatakbo ng kanilang sariling mga rehistro, interface, serbisyo sa ruta, at mga profile ng patakaran habang pinipili ang mga katugmang data at mga pamantayan sa pagtanggap. Ang kasalukuyang pampublikong App ay gumagamit ng naka-configure na rehistro at profile ng serbisyo. Cross-profile pagpapatupad ay nananatiling deployment-dependent.

Ang isang katumbas na profile ay:

- ipakilala ang mga pinagmulan ng rehistro nito, operator ng serbisyo, controller, at naaangkop na termino;
- Ihayag ang pinapayagan at hindi pinapayanan na mga kontrahenso, mga asset, adapter, at mga ruta;
- i-apply ang mga otorisasyon, limitasyon, bayad, at paghihigpit sa inventory ng bawat nakikibahagi na pool;
- magtipig ng mga katibayan sa quote-to-receipt per-hop; at
- pahintulutan ang iba pang functional na mga pool na umalis o pumili ng ibang registry nang hindi tinanggal ang mga saldo o obligasyon ng tagapag-isyu.

Maaaring paramihin ng compatibility ang mga available na landas ng palitan at bawasan ang pagdepende sa iisang registry o operator. Hindi nito ginagawang responsable ang network, CLC App, GEF, o ibang Pool para sa pagtupad ng isang tagapag-isyu.

### **5.3 Proposed model ng network rake at service fee**

Ang kasalukuyang Protocol v1.1.0 ay nagbabayad ng isang bayad sa Pool at, kapag naka-configure, ng karagdagang bayad sa Protokol sa isang diretso na swap ng Pool.

Ang produksyon naka-routed exchange ay naglalapat ng mga kasalukuyang bayarin nang independiyenteng sa bawat hop at itemizes ang mga ito sa quote at pagtanggap. Sa kasalukuyan ay hindi ito nagdaragdag ng hiwalay na bayarin sa serbisyo sa pag-routing.

Ang isang hinaharap na programa ay maaaring tumanggap nang hiwalay:

1. isang **network rake**, na tinukoy bilang isang ipinahayag na bahagi ng mga bayad sa pool na nakukuha ng mga kalahok na pool; at
2. isang **bayad sa pag-route o serbisyo**, na binayaran para sa isang natukoy na hinaharap na serbisyo.

Ang iminungkahi na network rake ay hindi isang karagdagang porsyento na inilapat sa buong halaga ng swap pagkatapos na i-count ang bayad ng pool. Para sa pool `p`:

τ_p = f_p · r_p

kung saan ang `f_p` ay rate ng bayad sa Pool at ang `r_p` ay ang iminungkahing bahagi ng bayad na iyon na ilalaan sa network program.

Para sa isang sinusukat na panahon:

- **gross fees ng pool** ang halaga ng mga tunay na hinihingi sa bawat pool;
- **mga resibo ng network-rake** ang ipinahayag na bahagi ng mga hinihingi na bayad;
- **mga resibo ng bayad sa serbisyo** nag-iiba ang mga bayad sa routing o serbisyo; at
- **mga resibo ng bayad sa programa** katumbas ng network rake plus service fee receipts.

Walang kategorya ang binilang nang dalawang beses. Ang kasalukuyang mga bayad sa Protokol ay hindi kasama maliban kung ang isang nag-iiba na panuntunan ng patakaran ay makatuwirang magbabago ng tunay na mga resibo sa mga bayad ng Protokol sa hinaharap na programa.

Para sa isang aggregate approximation, ipaalam:

- `Q_swap` ay ang halaga ng executed Pool swaps para sa tinukoy na cohort at panahon; at
- Ang `τ` ay ang epektibong rate ng iminungkahi na network rake at nag-iiba na natukoy na mga bayad sa serbisyo sa halaga ng executed swap.

Pagkatapos:

F ≈ τ · Q_swap

Ito ay isang analytical approximation, hindi isang pangako ng kita. bawat input ay nangangailangan ng tinukoy na cohort, panahon, yunit, valuation timestamp, exclusions, at correction policy.

#### **5.3.1 Ang mga nakatanggap ng cash eligible at in-kind receipts**

Ang mga bayad ay maaaring dumating sa cash-eligible fungible assets o sa mga voucher at iba pang in-kind assets. In-kind receipts ay hindi awtomatikong magbayad ng cash expenses o coverage claims.

Ang `χ` ay ang nai-realize na bahagi ng mga resibo sa bayad na karapat-dapat sa cash pagkatapos ng mga paghihigpit sa patakaran, nabigo na mga pag-convert, at slippage.

F_cash ≈ χ · F

Ang pagsusuri sa badyet at break-even ay gagamitin ang realized `F_cash`, hindi ang gross quoted fees o ang nominal na halaga ng in-kind inventory.

### **5.4 Proposed na mga programa ng likididad**

Maaaring maglaan ang isang hiwalay na dokumentadong liquidity program sa hinaharap ng mga asset sa mga itinalagang Pool o routing service. Hindi nagmi-mint ng Pool share o awtomatikong lumilikha ng karapatan sa pagbabayad, withdrawal, reward, pamamahala, o kita ang kasalukuyang mga `SwapPool` contract.

Ang anumang programa ay mag-publish:

- ang responsable na entidad at nakikibahagi sa Mga Tagapangasiwa ng Pool;
- ang kontribusyon sa mga assets at kung ang transfer ay maibabalik, mai-withdrawable, donated, o endowed;
- mga kaayusan ng custody at technical-control;
- ang pinapayagan na paggamit, mga limitasyon, pag-lock ups, mga gate ng pag-withdraw, at allocation ng pagkawala;
- ang pagiging karapat-dapat sa bayad o insentibo at kung ang halaga ay maaaring maging zero;
- pag-uulat, labanan, reklamo, at mga paraan ng paglilinis; at
- ang paglipat, pagtatapos, at paggamot ng natitirang mga kabtangan at obligasyon.

Ang mga materyal na panganib ay kinabibilangan ng inventory na mahirap i-exchange o matupad, mababang kwalipikasyon sa pera, hindi pagganap ng tagapag-isyu, pagkakamali ng kontrata o provider, pagbabago sa pamamahala, at mga paghihigpit sa paglabas.

Para sa isang ex-post analytical metric, hayaan:

- Ang `ϕ` ay ang napapatupad na bahagi ng mga resibo sa bayad sa programa na inilalagay sa ilalim ng mga panuntunan ng programa; at
- `K` ay ang kinukunan na halaga ng mga asset na sakop ng programa sa ilalim ng isang nabanggit na pamamaraan.

Pagkatapos:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Ang metric na ito ay naglalarawan ng naiisip na daloy ng bayad sa bawat kinukunan na asset ng programa. Hindi ito APY, isang pag-uulat, dividend, o isang ginagarantiyaang pagbabalik.
