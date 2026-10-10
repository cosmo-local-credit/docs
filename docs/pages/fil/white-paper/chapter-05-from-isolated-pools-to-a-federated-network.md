## **5. Mula sa hiwalay na mga Pool tungo sa isang pederadong network**

Sinusuportahan ng kasalukuyang Protocol v1.1.0 ang direktang pagpapatupad sa pamamagitan ng isang `SwapPool` at nagbibigay ng quote-only na `SwapRouter`. Hindi ito nagsasagawa ng multi-hop route, HTLC, escrow route, batch netting, o cross-network clearing.

Ipinapahiwatig ng kabanata na ito kung paano ang mga independentong pinamamahalaan na pool ay maaaring kumonekta nang hindi sumuko sa kanilang sariling pagpasok, pagpapahalaga, limitasyon, bayad, inventory, pahintulot, at mga patakaran sa pamamahala.

### **5.1 Nag-iiba na mga hakbang sa paghahati at pagpapatupad**

Ang Federasyon ay maaaring mapabuti ang pag-access sa inventory, ngunit hindi ito magsasama ng voucher at magbabago ng mga siklo ng buhay.

1. ang isang ruta ay iniulat;
2. ang isa o higit pang mga pool swaps ay ipatupad at matugunan sa chain;
3. inihaharap ng may hawak ang mga unit ng voucher sa tagapag-isyu;
4. ang tagapag-isyu ay nagtutupad ng pangako; at
5. dini-discharge ang mga natupad na unit.

Ang mga ulat ay magpapakita ng cohort, period, assets, valuation method at timestamp, exclusions, corrections, and off-chain evidence na kinakailangan sa Appendix C.

**Ilarawan na ruta:** Ang isang paaralan ay may mga kupon ng mais ngunit nangangailangan ng mga kupon sa transportasyon.

### **5.2 Proposed na mga serbisyo sa routing at rebalancing**

Ang isang future route service ay maaaring suportahan ang dalawang magkakaibang aktibidad.

**Pagpapapatay na iniimbitahan ng kalahok.** Dahil sa input at output assets, isang halaga, at mga paghihigpit ng gumagamit, ang serbisyo ay maaaring makilala ang isang landas at maghanda ng pagpapatupad. bawat hop ay magkakaroon ng kanyang sariling responsable Pool, quote, pag-authorization, bayad, limitasyon, inventory, at resibo. Atomic batches, HTLCs, at escrow ay posibleng mga pagpipilian sa pagtatapos sa hinaharap, hindi kasalukuyang pag-uugali ng Protokol.

**Opt-in Pool rebalancing.** Ang Mga Tagapangasiwa ng Pool ay maaaring mag-publish ng mga target ng inventory, pinapayagan na mga kasosyo, mga klase ng asset, mga limitasyon sa pagsalungat ng quote, at mga limitasyong per-period.

Ang rebalancing ay isang opt-in. Ang isang pool ay maaaring magbigay ng mga ruta sa mga kalahok habang tumanggi sa outbound rebalance, o maaari lamang itong magbigay ng pinili na mga asset, counterparties, at halaga.

#### **5.2.1 Konfederasyon at interoperability**

Ang mga independiyenteng deployment ay maaaring gumana ng kanilang sariling mga registry, interface, serbisyo sa ruta, at mga profile ng patakaran habang pumili ng katumbas na mga pamantayan ng data at pagtanggap.

Ang isang katumbas na profile ay:

- ipakilala ang mga pinagmulan ng rehistro nito, operator ng serbisyo, controller, at naaangkop na termino;
- Ihayag ang pinapayagan at hindi pinapayanan na mga kontrahenso, mga asset, adapter, at mga ruta;
- i-apply ang mga otorisasyon, limitasyon, bayad, at paghihigpit sa inventory ng bawat nakikibahagi na pool;
- magtipig ng mga katibayan sa quote-to-receipt per-hop; at
- pahintulutan ang iba pang functional na mga pool na umalis o pumili ng ibang registry nang hindi tinanggal ang mga saldo o obligasyon ng tagapag-isyu.

Maaaring paramihin ng compatibility ang mga available na landas ng palitan at bawasan ang pagdepende sa iisang registry o operator. Hindi nito ginagawang responsable ang network, CLC App, GEF, o ibang Pool para sa pagtupad ng isang tagapag-isyu.

### **5.3 Proposed model ng network rake at service fee**

Ang kasalukuyang Protocol v1.1.0 ay nagbabayad ng isang bayad sa Pool at, kapag naka-configure, ng karagdagang bayad sa Protokol sa isang diretso na swap ng Pool.

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
