## **5. Mula sa hiwalay na mga Pool tungo sa isang pederadong network**

Sinusuportahan ng kasalukuyang Protocol v1.1.0 ang direktang execution sa pamamagitan ng isang `SwapPool` at nagbibigay ng quote-only na Solidity `SwapRouter`. Inuugnay ng production CLC App at CLC Core ang participant-initiated same-chain route sa hanggang tatlong Pool sa pamamagitan ng paghahanda ng isang pinirmahang Calibur Wallet batch. Hindi mismo ipinapatupad ng mga contract ang multi-hop route, at hindi nagbibigay ang kasalukuyang App/Core flow ng cross-chain HTLC, escrow route, awtomatikong Pool rebalancing, batch netting, o cross-network clearing.

Ipinapaliwanag ng kabanatang ito ang kasalukuyang participant route at ibinubukod ito sa iminungkahing koordinasyon na mangangailangan ng bagong awtoridad ng Pool. Sa parehong kaso, pinananatili ng bawat hiwalay na Pool ang sarili nitong admission, valuation, limitasyon, bayarin, inventory, awtorisasyon, at governance rule.

### **5.1 Hiwalay na sukat para sa palitan at fulfillment**

Maaaring mapabuti ng routing ang access sa inventory, ngunit hindi nito pinagsasama ang lifecycle ng Voucher at palitan. Dapat panatilihing hiwalay sa pagsukat ang mga pangyayaring ito:

1. ang isang ruta ay nabigyan ng quote;
2. isa o higit pang palitan sa Pool ang naisagawa at na-settle on-chain;
3. inihaharap ng may hawak ang mga unit ng voucher sa tagapag-isyu;
4. ang tagapag-isyu ay nagtutupad ng pangako; at
5. dini-discharge ang mga natupad na unit.

Hindi pinatutunayan ng mas maraming quoted o executed route na mas maraming fulfillment ang naganap. Dapat ilahad sa report ang cohort, period, asset, valuation method at timestamp, exclusion, correction, at off-chain evidence na hinihingi ng Appendix C.

**Halimbawang ruta:** May Voucher sa mais ang isang paaralan ngunit kailangan nito ng Voucher sa transportasyon. Maaaring tukuyin ng CLC Core ang katugmang inventory ng Pool, i-quote ang napiling path sa iisang pinned block, at ihanda ang bounded call para sa Wallet ng paaralan. Magtatagumpay lamang ang execution kung ang bawat hop ay pasok sa quote boundary, limitasyon, bayarin, inventory, suportadong behavior, at policy. Hindi pinatutunayan ng mga swap na tumupad na ang alinmang tagapag-isyu sa Voucher commitment nito.

### **5.2 Kasalukuyang routing ng kalahok at iminungkahing muling pagbabalanse**

Ang dalawang gawain ay nangangailangan ng iba't ibang awtoridad.

**Kasalukuyang participant-initiated execution.** Mula sa input at output Voucher at halaga, tinatantiya ng CLC Core ang path mula sa kwalipikadong holdings ng kalahok. Para sa napiling ruta, binabasa nito ang mga Pool sa iisang pinned block, gumagawa ng may-awtoridad na quote, sini-simulate ang buong batch, at naghahanda ng tatlong call sa bawat hop: allowance reset, allowance grant, at bounded `SwapPool.withdraw`. Pumipirma ang kalahok, at nagsusumite ang relayer ng isang same-chain Calibur transaction na may `revertOnFailure`. Kapag nabigo ang isang call, babalik ang lahat ng route call. Pinagsasama ng App ang transaction at per-hop settlement sa isang resibo.

Pinananatili ng bawat hop ang sarili nitong responsableng Pool, quote input, awtorisasyon, bayarin, limitasyon, inventory, at settlement event. Walang hiwalay na route-service fee ang kasalukuyang App. Sinusuportahan ng kasalukuyang flow ang mga EOA/Calibur Wallet na katugma sa App, hindi ang Safe o ibang contract Wallet.

**Opt-in Pool rebalancing.** Maaaring ilathala ng mga Tagapangasiwa ng Pool ang target na inventory, pinapayagang counterparty, asset class, quote-deviation boundary, at per-period limit. Maaaring maghanap ang isang responsableng service ng katugmang cycle o chain at ipatupad lamang ang awtorisadong intent.

Ang muling pagbabalanse ay magiging opt-in. Ang isang Pool ay maaaring payagan ang mga ordinaryong ruta ng kalahok nang hindi nagpapahintulot sa isang serbisyo na ilipat ang imbentaryo para sa muling pagbabalanse. Ang isang hinaharap na mandate ay maaaring magbigay ng kakayahan lamang sa mga napiling assets, counterparties, at halaga. Ang bawat ginanap na hop ay magbibigay ng isang resibo, at ang anumang bayad sa serbisyo ay ilalabas nang hiwalay mula sa mga bayarin sa Pool at Protocol.

Ang cross-chain HTLC o escrow execution ay hiwalay din sa kasalukuyang same-chain atomic batch. Kakailanganin nito ang pinagtibay na mga patakaran sa timeout, abort, controller, recovery, at residual-risk.

#### **5.2.1 Konfederasyon at interoperability**

Ang mga independiyenteng deployments ay maaaring magpatakbo ng kanilang sariling mga rehistro, interface, serbisyo sa ruta, at mga profile ng patakaran habang pinipili ang mga katugmang data at mga pamantayan sa pagtanggap. Ang kasalukuyang pampublikong App ay gumagamit ng naka-configure na rehistro at profile ng serbisyo. Cross-profile pagpapatupad ay nananatiling deployment-dependent.

Ang isang compatible na profile ay:

- tukuyin ang mga registry source, service operator, controller, at naaangkop na terms nito;
- ilathala ang pinapayagan at hindi pinapayagang counterparty, asset, adapter, at route;
- ilapat ang authorization, limit, fee, at inventory constraint ng bawat kasaling Pool;
- magpanatili ng per-hop quote-to-receipt evidence; at
- payagan ang ibang gumaganang Pool na umalis o pumili ng ibang registry nang hindi binubura ang balance o obligasyon ng issuer.

Maaaring paramihin ng compatibility ang mga available na landas ng palitan at bawasan ang pagdepende sa iisang registry o operator. Hindi nito ginagawang responsable ang network, CLC App, GEF, o ibang Pool para sa pagtupad ng isang tagapag-isyu.

### **5.3 Proposed model ng network rake at service fee**

Sinisingil ng kasalukuyang Protocol v1.1.0 ang Pool fee at, kapag naka-configure, karagdagang protocol fee sa isang direct Pool swap.

Hiwalay na inilalapat ng production routed exchange ang kasalukuyang bayarin sa bawat hop at inililista ang mga ito sa quote at resibo. Hindi ito kasalukuyang nagdaragdag ng hiwalay na route-service fee.

Ang isang hinaharap na programa ay maaaring tumanggap nang hiwalay:

1. isang **network rake**, na tinukoy bilang inilathalang bahagi ng Pool fee na kinita ng mga kasaling Pool; at
2. isang **routing o service fee**, na binabayaran para sa tinukoy na service sa hinaharap.

Ang iminungkahi na network rake ay hindi isang karagdagang porsyento na inilapat sa buong halaga ng swap pagkatapos na i-count ang bayad ng pool. Para sa pool `p`:

τ_p = f_p · r_p

kung saan ang `f_p` ay rate ng bayad sa Pool at ang `r_p` ay ang iminungkahing bahagi ng bayad na iyon na ilalaan sa network program.

Para sa isang sinusukat na panahon:

- **gross Pool fees** ang kabuuan ng mga fee na aktuwal na siningil ng bawat Pool;
- **network-rake receipts** ang inilathalang bahagi ng mga siningil na fee;
- **service-fee receipts** ang hiwalay na routing o service fee; at
- **program fee receipts** ang network rake at service-fee receipts na pinagsama.

Walang kategoryang binibilang nang dalawang beses. Hindi kasama ang kasalukuyang protocol fee maliban kung tahasang ililipat ng ibang policy rule ang aktuwal na protocol-fee receipts sa programa sa hinaharap.

Para sa isang aggregate approximation, ipaalam:

- `Q_swap` ay ang halaga ng executed Pool swaps para sa tinukoy na cohort at panahon; at
- ang `τ` ay ang effective rate ng proposed network rake at hiwalay na tinukoy na service fee sa value ng executed swap.

Pagkatapos:

F ≈ τ · Q_swap

Analytical approximation ito, hindi pangako ng revenue. Kailangan ng bawat input ang tinukoy na cohort, period, unit, valuation timestamp, exclusion, at correction policy.

#### **5.3.1 Ang mga nakatanggap ng cash eligible at in-kind receipts**

Maaaring matanggap ang fee bilang cash-eligible fungible asset o bilang Voucher at ibang in-kind asset. Hindi awtomatikong pambayad sa cash expense o coverage claim ang in-kind receipt.

Ang `χ` ay ang realized share ng fee receipt na cash-eligible matapos ang policy restriction, failed conversion, at slippage.

F_cash ≈ χ · F

Realized `F_cash` ang gagamitin sa budget at break-even analysis, hindi gross quoted fee o nominal value ng in-kind inventory.

### **5.4 Proposed na mga programa ng likididad**

Maaaring maglaan ang isang hiwalay na dokumentadong liquidity program sa hinaharap ng mga asset sa mga itinalagang Pool o routing service. Hindi nagmi-mint ng Pool share o awtomatikong lumilikha ng karapatan sa pagbabayad, withdrawal, reward, pamamahala, o kita ang kasalukuyang mga `SwapPool` contract.

Ang anumang programa ay mag-publish:

- ang responsableng entity at mga kasaling Pool Steward;
- ang contributed asset at kung refundable, withdrawable, donated, o endowed ang transfer;
- mga kaayusan sa custody at technical control;
- ang pinapayagang paggamit, limit, lockup, withdrawal gate, at allocation ng loss;
- eligibility para sa fee o incentive at kung maaaring zero ang halaga;
- reporting, dispute, complaint, at remedy path; at
- transition, termination, at pagtrato sa natitirang asset at obligasyon.

Kabilang sa material risk ang inventory na mahirap i-exchange o i-fulfill, mababang cash eligibility, non-performance ng issuer, contract o provider failure, pagbabago sa governance, at exit restriction.

Para sa isang ex-post analytical metric, hayaan:

- ang `ϕ` ay ang realized share ng program fee receipt na inilaan sa ilalim ng mga tuntunin ng programa; at
- ang `K` ay ang nasukat na value ng asset na sakop ng programa sa ilalim ng nakasaad na methodology.

Pagkatapos:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Inilalarawan ng metric na ito ang observed fee flow sa bawat nasukat na program asset. Hindi ito APY, redemption quote, dividend, o guaranteed return.
