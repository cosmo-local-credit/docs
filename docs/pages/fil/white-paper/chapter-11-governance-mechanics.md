## **11. Mga mekanismo ng pamamahala**

Ang kabanata na ito ay nagmumungkahi ng isang template sa pamamahala. Hindi ito kumakatawan na ang kasalukuyang CLC App ay gumagamit ng vote ng pamamahala-token, timelocks, nakabahagi insurance, isang proseso ng mga kahilingan, o anumang kontrol na inilarawan sa ibaba.

- **Mga halaga ng konstitusyon:** pag-aalaga sa mga tao, pangangalaga sa kapaligiran, katarungan, pagkakapantay-pantay, kawalan ng dominasyon, at kakayahang umangkop.
- **Mga uri ng proposal:** Pagbabago ng bayad, limitasyon, at index; mga mandato sa likididad; mga listahan ng pool at pag-alis; pagpipiliang mga desisyon sa coverage; at mga parameter guardrails.
- **Ang responsable na proseso:** ang paggamit → pagtatasa → pagsusuri sa panganib → pag-apruba → timelock kung kinakailangan → pagpapatupad. Ang pag-aapruba ay maaaring dumating mula sa mga steward, kooperatiba, pampublikong ahensya, federasyon, multisigs, voting on-chain, o iba pang naipaliwanag at responsable na istraktura.
- **Mga threshold ng pag-apruba:** parametrised sa pamamagitan ng class of action, na may mas mataas na threshold para sa mga pagbabago sa value index, emergency powers, at iba pang kritikal na aksyon.
- **Delegasyon:** mga optional delegation na may mga pampublikong mandate, disclosure ng mga labanan, at recall.
- **Mga circuit breaker:** emergency pauses na may mga nabanggit na pamantayan, awtorisadong operator, resume conditions, at kinakailangang post-mortem.
- **Transparency:** ilantad ang mga pagbabago at daloy, na may hiwalay na ebidensiya para sa swap settlement, pagtupad ng tagapag-isyu, mga reserba, paggamit ng limitasyon, routing, at mga guarantor.

**Pamamahala ng registry.** Ang isang CPP-compatible deployment ay maaaring mapanatili ng mga registry ng pagtuklas para sa mga voucher, tokens, at Pools. Ang awtorisadong control ay maaaring magdagdag, i-update, suspende, o tanggalin ang mga entry ng registry sa pamamagitan ng disclosed na proseso ng pamamahala ng deployments.

Ang nai-publish na mga patakaran ng registry ay dapat gumawa ng kondisyonal na katayuan at maaaring makilala ang paulit-ulit na hindi pagtupad, panloloko o maling paglalarawan, hindi ligtas na pag-uugali sa kontrata, o patuloy na paglabag sa nai-publikadong mga prinsipyo bilang dahilan para sa pagsasangkot o pagtanggal. Kung posible, ang proseso ay dapat magbigay ng pahibalo, isang pagkakataon upang matugunan, at isang landas ng appeal. Ang pag-aalis ng emerhensiya ay dapat nangangailangan ng isang pampublikong ulat ng insidente at awtomatikong pagsusuri o sunset.

**Pinapabayagan ang mga listahan.** Sa ilalim ng template na ito, ang isang rehistro ay hindi tumatanggap:

1. ang mga instrumento na direktang nag-iimbak o nagpapatunay sa pagwasak ng ekolohiya sa kabila ng nakakatugon na hangganan, karahasan o pagpapahinga ng armas, pagsisikap na pagkuha, o sistemang pang-aabuso; o
2. isang klase ng voucher na walang malinaw na mga tuntunin sa pagtatanghal at pagpapatupad, pananagutan, at mga landas ng remedyo.

Ang ipinagbabawal na listahan ay magiging versioned, publicly auditable at maibabago lamang sa pamamagitan ng tinanggap kritikal na aksyon threshold at timelock, inilalarawan bilangQ3 + T3sa apendise D.

### **11.1 Pagmamay-ari ng rate at limitasyong pamamahala**

**Ang mga pagbabago ay naka-lock sa oras.** Ang isang paglalapat na sumusunod sa template na ito ay magbabago ng mga pamamaraan ng rate ng palitan at nag-iiba ang mga parameter ng limitasyon pagkatapos lamang ng isang pampublikong timelock.

**Mga threshold ng pag-apruba.** Ang template ay nagpapahiwatig ng mas mataas na mga hangganan sa pag-aapruba para sa mga pagbabago sa base ng index ng halaga at global limit level changes, intermediate thresholds para sa pool-specific third party changes, at standard thresholles para sa routine fee changes.

**Nag-publish na feed.** Ang isang nakikibahagi na paglalapat ay mag-publish, para sa bawat Pool, ang mga variable ng index sa chain, mga pinagmumulan o median ng oracle, update cadence, limit window at caps, at default mode o safe constants.

**Mga pamantayan para sa emergency pause.** Ang isang nakikibahagi na paglalapat ay magpapahayag nang maaga ng mga kondisyon tulad ng isang breakdown ng oracle, mataas na limitasyon ng paggamit na kasabay ng mga pagkabigo sa pagsasagawa, o isang invariant failure, kasama ang mga pagsusuri sa resume at mga kinakailangan ng pagsusuri pagkatapos ng insidente.

**Halimbawa ng pampublikong index feed para sa isang pool at voucher**

- **Simbolo:** halimbawa, `Maize_50kg@IssuerY`.
- **Unidad ng referensiya:** Unit ng index (IUX).
- **Nag-publish na halaga:** 30.000 IUX.
- **Pinagmumulan:** average ng kinikilala na mga mapagkukunan, tulad ng isang lokal na survey sa merkado, bulletin ng ministeryo, at base line ng deployment.
- **Pag-update ng kadensyong:** araw-araw sa 18:00 EAT, na may 24-oras na timelock.
- **Ang mode ng pagkabigo:** mag-freeze sa huling bakunahang halaga, magpatupad ng isang patakaran ng limitasyon na ipinahayag, at huminto pagkatapos ng 72 oras na pagputol.
- **Reason:** nag-publish ng mga talaan at isang rekord ng pagbabago mula sa nakaraang update.
- **Mga tagapagpahiwatig:** ang ipinahayag na multisig address at threshold ng pag-apruba.

### **11.2 Proposed insurance fund runbook**

**Opsyonal na disenyo lamang.** Nauugnay lamang ang runbook na ito sa deployment na hayagang nagpatibay at nagpondo ng insurance fund at naglathala ng mga sakop na pangyayari, karapat-dapat na claimant, responsableng entity, asset, limitasyon, exclusion, kinakailangang ebidensiya, proseso, at namamahalang mga tuntunin. Hindi nagbibigay ng coverage ang CLC App o GEF dahil lamang lumitaw ang disenyong ito sa White Paper.

**Posible na mga trigger.** Ang isang patakaran na inampon ay maaaring sakupin ang hindi pagkumpleto ng tinukoy na tagapag-isyu, isang kakulangan sa reserba ng pool, o isang sasakyan o pagkawala sa escrow.

**Ang pagtatasa.** Ang responsable na katawan ay mag-aayos ng mga receipt ng transaksyon, inventory balances, guarantor bonds, records of redemption presentation, responses ng tagapag-isyu, at iba pang kinakailangang ebidensya, at pagkatapos ay magpublikar ng isang record ng insidente na kasuwato sa privacy at batas.

**Malinaw na pagkawala ng waterfall.** Kung ang bawat layer ay umiiral at legal na naaangkop, ang isang patakaran ay maaaring gumamit ng: (1) responsable bond tagapag-isyu o guarantor stakes → (2) pool-level reserves → (3) isang iminungkahing network insurance fund → (4) isang pansamantalang pagbawas sa isang optional coverage claim, lamang kung eksplisit na pinapayagan ito ng umiiral na mga tuntunin at applicable na batas → (5) legal recovery for proven fraud or abuse.

Ang isang pag-aayos sa coverage ay hindi binabawasan ang underlying voucher commitment ng isang tagapag-isyu o nagbabago ng balanse sa chain maliban kung malinaw na pinapayagan ng mga kasalukuyang termino at naaangkop na batas ang resulta at nakuha ang anumang kinakailangang pahintulot ng may-ari.

**Limits at exclusions.** Ang nai-publish na coverage ay tatakda ng mga cap, karapat-dapat na mga presentasyon, katibayan, window ng claim, hindi nakukuha ang mga ruta o kaganapan, mga paghihigpit sa heograpiya, at paggamot ng nabuo na mga reserba.

**Makikita ang kalendaryo ng pagbawi.** Kung itinatag at nai-publish:

1. ang mga pag-iimbestiga ay una sa responsable na tagapag-isyu o guarantor bond, pagkatapos ay mula sa naaangkop na reserbas ng pool, at pagkatapos ay sa iminungkahing network insurance fund;
2. ang anumang pagbawas sa isang optional coverage claim ay limitado sa kung ano ang pinapayagan ng umiiral na mga tuntunin ng coverage at ang naaangkop na batas, hanggang sa nai-publish incident cap;
3. ang isang plano ng pagbawi ay maaaring mag-apply ng isang idetereklarar na bahagi ng nakuha na halaga para sa isang iditerekordahang panahon, pagkatapos nito ang anumang natitirang nasa ilalim na kakulangan ay magiging isang nakarekord na pagkawala sa isang pampublikong post mortem; at
4. ang bawat desisyon ay magbibigay ng isang resibo na naglalaman ng insidente ID, naapektuhan na mga claim at voucher, desisyon, plano sa pagbawi, at window ng appeal.

### **11.3 Katayuan ng Garantiya**

Pinag-iiba ng seksyong ito ang responsibilidad ng tagapag-isyu, opsyonal na proteksiyon ng Pool, at garantiya ng third party. Hindi awtomatikong ginagarantiyahan ng CLC App, CPP, GEF, o anumang mas malawak na network ang isang voucher.

**Responsabilidad ng tagapag-isyu base**

- Ang bawat voucher ay una at higit sa lahat ang responsibilidad ng tagapag-isyu nito.
- Ipinapalabas ng mga tagapag-isyu kung sino ang maaaring magsagawa ng voucher, kung ano ang ibig sabihin ng pagpapatupad, kung saan at kailan ito magagamit, kung anong katibayan ang kinakailangan, at kung aling mga paraan ang gagamitin.
- Kung ang isang tagapag-isyu ay hindi kumpleto, ang tagapag-isyu ang pangunahing responsable na partido.

**Optional na mga proteksyon sa pool**

Ang Tagapangasiwa ng Pool ay maaaring pumili na magdagdag ng isang mahigpit na tinukoy na proteksyon sa mga admitted voucher. Ito ay hindi awtomatikong at kakailanganin upang makilala ang responsable na partido, pondo, karapat-dapat na mga kaganapan, caps, bintana, katibayan, exclusions, at remedies sa pool metadata at naaangkop na mga tuntunin.

Ang mga uri ng proteksyon sa ilustrasyon ay:

1. **Pagpapalibot ng mga reserve asset:** pagkatapos ng napatunayang hindi pagkumpleto ng tagapag-isyu, ang responsable na entidad sa pool ay magbabayad ng isang tinukoy na halaga sa isang designated reserve asset, subject to its published cap and available funded reserves.
2. **Bintana ng pag-swap-back:** pagkatapos ng isang qualifying event, ang pool ay nag-aalok ng isang time-limited swap path sa dating o iba pang naaprubahan asset, subject to caps at inventory. Ito ay isang dependient inventory liquidity protection, hindi isang pangako na ang bawat swap ay reversible.
3. **Alternatibong pagpapatupad:** ang responsable na partido ay nag-aayos ng isang awtorisadong tagapag-isyu ng kahalili sa loob ng isang naipahayag na limitasyon sa dami o halaga.
4. **Proteksyon sa rate band:** para sa pinili na mga klase ng voucher, ang isang pool ay nag-aalok lamang ng pag-aayos sa coverage o remedy ng swap-back na ipinapakita sa kanyang umiiral na mga termino.

**Posible na mga mapagkukunan ng pondo**

- **Mga obligasyon ng tagapag-isyu:** collateral na inilalagay ng tagapag-isyu o inaalagaan sa isang disclosed reserve at magagamit pagkatapos ng isang napatunayang nasa ilalim na kaganapan.
- **Reserba ng pool:** ang mga assets na kontrolado ng responsable na entity ng pool at inilaan sa mga proteksyon na ipinahayag nito.
- **Mga obligasyon ng third-party guarantor:** collateral na inilalagay ng isang kinilalang panlabas na guarantor para sa mga tinukoy na tagapag-isyu, klase ng voucher, o pangyayari.

Ang paglahok ng guarantor ay sumusunod sa mga inilathalang pamantayan sa eligibility, laki ng obligasyon, mga limitasyon sa concentration, awtoridad sa pagpapasya, at mga patakaran sa enforcement.

**Proseso ng mga reklamo**

Ang isang inaminang patakaran ay tatakda ang mga trigger na maaaring ma-audit, tulad ng isang deadline sa pagtuman na hindi natupad pagkatapos ng valid redemption presentation, napatunayang insolvensyon ng tagapag-isyu, isang nasabing sasakyan o pagkabigo ng escrow, o isang pormal na ideklaradong estado ng insidente.

- kung paano buksan ng isang kalahok ang isang ari-arian at ibinibigay ang kinakailangang paghahatid at katibayan sa pagtupad;
- ang nagpapatunay ng mga termino ng voucher, mga tugon ng tagapag-isyu, at mga teknikal na talaan;
- ang desisyon at mga window ng appeal; at
- ang awtorisadong landas ng pagbabayad, mga assets, caps, at resibo.

Ang mga kita ng pagbawi mula sa mga tagapag-isyu, arbitration, o legal enforcement ay muling punan ang mga kapaki-pakinabang na obligasyon o reserbasyon ayon sa naipahayag na patakaran bago magamit para sa iminungkahi na CLC Network Pool swap access.

**Kinakailangan na pagpapahayag**

Para sa bawat sakop na klase ng pool at voucher, ang responsable na partido ay mag-publish:

- kung wala, opsyonal, o kinakailangan ang isang guarantor;
- mga caps sa bond or reserve size at concentration;
- ang mga uri ng proteksyon, assets, caps, windows at exclusions;
- ang mga deadline para sa paghahatid, pagtupad, pag-aangkin, at pag-apela; at
- isang malinaw na pahayag ng kung sino ang nag-iimbak ng ano at kung ano ang hindi ginagarantiya.

**Prinsipyo ng curation.** May pananagutan ang mga Tagapangasiwa ng Pool at ang mga responsableng legal o governance structure para sa mga proteksiyong inilalathala nila. Maaaring magbigay ang isang CPP-compatible deployment ng mga pamantayan, registry, o opsyonal na shared policy, ngunit hindi awtomatikong ginagarantiyahan ng CLC o GEF ang mga voucher o Pool.

### **11.4 Mga guardrail laban sa pagkabihag**

Sa ilalim ng template na ito, ang mga sumusunod ay magiging kritikal na aksyon na nangangailangan ng pinakamataas na antas ng pag-apruba at isang mahabang panahon:

1. ang pagbabago ng iminungkahi na bayad waterfall, kabilang ang coverage nito at mga pangunahing operasyong prayoridad;
2. pagbabago ng mga ugat ng canonical registry;
3. pagbabago ng saklaw ng coverage, caps ng mga claim, o awtoridad sa pagpapasya;
4. pagpapalawak ng mga kapangyarihan sa emergency pause; o
5. pagpapahirap ng mga pananagutan sa pagiging forkable, transparency, o pagkasoberano ng pool na ipinahayag sa papel na ito.

### **11.5 Prosedura ng fork at exit**

Kung ang pamamahala ay kinuha o ang mga halaga ay nag-drift na malaki, ang mga komunidad, Mga Tagapangasiwa ng Pool, at operator ay maaaring maghanap upang lumabas sa pamamagitan ng pag-forking ng layer ng pamamahala ng network.

Ang isang proseso ng pag-alis ay maaaring:

1. **I-post ang isang snapshot:** mag-export ng mga pinili na registry, voucher, halaga, limitasyon, at patakaran sa bayad, pagkatapos ay mag-publish ng isang sinimulang snapshot hash.
2. **I-deploy muli ang mga serbisyo sa pamamahala:** i-deploy ang mga bagong root ng registry, mga serbisyo sa ruta, at anumang inaminang module ng bayad o coverage sa ilalim ng isang bagong responsable na istraktura.
3. **Pag-rehistro:** pahintulutan ang Mga Tagapangasiwa ng Pool na mag-opt-in sa pamamagitan ng pagpaparehistro ng kanilang mga address ng pool sa ilalim ng bagong root nang hindi kinakailangan ng mga may-ari na lumipat ng iba pang functional na mga voucher.
4. **I-resign ang mga kliyente:** magdagdag ng bagong root bilang isang selektibong profile ng network sa mga SDK at interface, na may anumang default na pagbabago na ginawa sa pamamagitan ng disclosed governance process.
5. **Magmaneho ng isang panahon sa bridge:** panatilihin ang mga katumbas na ruta kung saan ligtas at tanggihan ang mga ruta na sumisira sa mga patakaran ng bagong profile.

Ang layunin ng disenyo ay na ang pag-iwan ng isang canonical registry ay hindi nagpapahirapan sa ibang functional local Pools.
