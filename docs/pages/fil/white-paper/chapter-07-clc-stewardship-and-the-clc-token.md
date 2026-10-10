## **7. Iminungkahing pangangasiwa at governance asset ng CLC**

Inilalahad ng kabanatang ito ang isang opsyonal na disenyo sa hinaharap para sa pamamahala at koordinasyon ng liquidity. Ang iminungkahing CLC governance token, stCLC, sCLC, governance vault, insurance fund, Waterfall, gauge, mandate, fee-credit window, at external-market program ay hindi bahagi ng kasalukuyang CLC App o Protocol v1.1.0. Mangangailangan ang bawat isa ng isang pagpapatupad, may pananagutang operator, inilathalang patakaran at mga tuntunin, security review, at naaangkop na legal na pag-apruba.

Hindi kailangan ng CPP ang modelong ito ng token. Maaaring gumamit ang mga katugmang deployment ng mga kooperatiba, pampublikong ahensya, pederasyon, multisig, serbisyo, o iba pang may pananagutang istruktura.

### **7.1 Layunin**

Kung maipasa, ang iminungkahi na layer ng pamamahala ay maaaring:

- koordinate ang mga pinagsasama na registry at serbisyo ng ruta;
- mag-alok ng mga naaprubahan na mandato sa likididad sa pagitan ng mga independiyenteng pinamamahalaan pool;
- pamahalaan ang isang optional, expressly scope, pinansiyal na programa ng coverage;
- pagpapanatili ng karaniwang imprastraktura at observability;
- makilala ang mga nag-aambag sa ilalim ng nai-publish na mga patakaran sa pagiging karapat-dapat at anti-gaming; at
- panatilihin ang review, appeal, transparency, at credible exit habang lumalaki ang partisipasyon.

### **7.2 Proposed governance-asset model**

Ang disenyo ay naglalaman ng tatlong iba't ibang iminungkahi assets:

1. **Proposed na CLC governance token:** ang isang transferable base governance asset sa ilalim ng mga itinatag na patakaran sa pag-issue, custody, voting, at compliance.
2. **stCLC:** isang hindi naililipat na vote-escrow receipt na mimi-mint kapag ni-lock ang iminungkahing CLC governance token. Kakatawan ito sa time-bounded governance power at maaaring magpahintulot ng hayag na delegation.
3. **sCLC:** isang epoch-scale authorization o incentive asset na nai-issue sa ilalim ng patakaran. Maaari itong suportahan ang capped fee-credit access o naaprubahan liquidity at routing incentives at maaaring matapos o masunog sa pagtatapos ng epoch.

Hindi magiging equity, dividend, residual claim, pangako ng return, o community voucher ang stCLC o sCLC. Maaaring itakda ng isang pinagtibay na patakaran sa zero ang pag-isyu ng sCLC at fee-credit access sa anumang epoch.

Ilalathala bago gamitin ang mga governance lockup, minimum na tagal, cooldown, delegation, concentration cap, at critical-action threshold. Hindi boboto ang mga naka-unlock na iminungkahing CLC governance token sa ilalim ng disenyong ito.

#### **7.2.1 Ipakita ang supply at allocation**

Ang illustrative total na iminungkahi CLC supply ng governance-token ay **500,000,000**. Ito ay isang disenyo parameter, hindi isang kasalukuyang emisyon, alok, pagpapahalaga, o pangako ng likididad.

Ang isang ilustrasyong alokasyon ay:

- **15% — Grassroots Economics Foundation:** permanenteng naka-staked, hindi mai-transfer, at nakatuon sa isang kinikilala na GEF multisig ayon sa nai-publish signer at rotation rules.
- **15% — pangunahing koponan at unang mga kasosyo:** sa panahon ng isang patakaran-set cliff at linear acquisition na panahon ng 24 buwan, na may mga panuntunan voting at transfer na ipinahayag nang maaga.
- **30%  private endowments:** pagkilala para sa mga early contributors na nagbibigay ng approved network liquidity, na may 24 buwan na policy-set vesting.
- **40% — Public liquidity reserve:** sa isang time-locked governance vault para sa optional external market at accessibility programs.

Sa ilalim ng ilustrasyon na mga kontrol sa pampublikong likido:

- hindi higit sa 10% ng kabuuang supply ay aktibo sa mga panlabas na lugar nang sabay-sabay;
- ang bawat paglalagay ay magtatapos pagkatapos ng 90 araw maliban kung ipagpabagong-anyo sa pamamagitan ng proseso na inamin;
- ang mga posisyon sa likididad at anumang mga token ng posisyon ay mananatili sa ilalim ng disclosed governance control; at
- ang iminungkahi na CLC governance tokens na ginagamit sa mga posisyon ng likido ay hindi bumoto maliban kung naka-lock sa ilalim ng parehong mga patakaran tulad ng iba pang voting tokens.

Ang isang hinaharap na paglunsad ay maaaring magsimula sa isang inihayag na multisig at paglipat lamang pagkatapos ng nag-iiba na naaprubahan ang mga landas ng pagpapahirap, tulad ng mga independiyenteng audit, pagsubaybay, runbooks ng insidente, at sinusubukan na pause at fork na pamamaraan.

#### **7.2.2 Mga yugto ng pagkakaroon at pagbibigay**

Ang isang future endowment program ay maaaring gumamit ng mga yugto na window ng kontribusyon at isang nai-publish na halaga ng referensiya para sa pagkuha at pagbuwis ng badyet.

Ang mga tuntunin ng kontribusyon ay magpapakita kung ang mga kabtangan ay ibinigay, binibigyan, mai-withdraw, o mabawi; sino ang kumokontrol sa kanila; ang kanilang pinahihintulutan na paggamit; pag-lock ups; alokasyon ng pagkawala; pagreport; at mga kondisyon ng exit.

Ang anumang likididad sa panlabas na merkado ay nangangailangan ng isang hiwalay na desisyon na nakikilala ang mga lugar, responsable operator, mga asset, caps, timing, labanan, kontrol sa panganib, pagreport, at termination.

#### **7.2.3 Proposed na programa ng impact seeding**

Ang isang hinaharap na programa ay maaaring mag-alok ng bahagi ng governance vault sa mga contributor na naglalagay ng mga asset sa tinukoy na mga Pool ng Pangako at masusukat na mapabuti ang pag-access sa exchange at nakumpirma na pagpapatupad ng tagapag-isyu.

Ang isang inaminang patakaran sa pagiging karapat-dapat ay:

1. Itakda ang mga naaprubahan na pool, assets, minimum na tagal, at mga termino ng pag-lock up;
2. Itakda ang produktibong kontribusyon gamit ang mga ebidensya ng executed swap at nag-iiba na ipinakikita ang paghahatid, pagpapatupad, at discharge;
3. suriin ang marginal na kontribusyon sa halip na ang kabuuang halaga na naka-lock lamang;
4. i-exclude ang self-dealing at circular wash activity;
5. mag-apply ng mga cap per entity at diminishing returns; at
6. magbigay ng isang window ng obserbasyon, pagtatalo at pag-aayos bago ang pangwakas na alokasyon.

Ang anumang tulong ay mananatili sa ilalim ng mga nai-publish na tuntunin ng programa, pagmamay-ari, pagiging karapat-dapat, pagsunod, at mga patakaran sa pagkawala.

### **7.3 Proposed na vote, mga insentibo, at access sa bayad**

Sa ilalim ng disenyong ito, maaaring bumoto ang mga may hawak ng stCLC tungkol sa mga karapat-dapat na Pool, route-service mandate, pinagsasaluhang badyet, o iba pang pinagtibay na panukala. Maaaring gawing limitadong sCLC incentive ng isang curated gauge system ang mga boto para sa karapat-dapat na liquidity o routing operator.

Pag-iibahin ng patakaran sa pagsukat ang mga naisagawang swap at pagtupad ng tagapag-isyu. Hindi nito gagantimpalaan ang mga na-quote ngunit hindi naisagawang ruta, hindi nalutas na presentment, self-dealing, o kabuuang value locked na walang ebidensiya ng kapaki-pakinabang na aktibidad.

Maaari ring maglathala ang isang pinagtibay na proseso ng pamamahala ng epoch fee-credit budget. Maaaring tumanggap ang mga karapat-dapat na may hawak ng stCLC ng sCLC na nagpapahintulot sa capped at time-limited na mga swap mula sa mga itinalagang fee-holding Pool patungo sa mga allowlisted asset o programa. Ito ay access sa magagamit na inventory na pinahihintulutan ng patakaran, hindi passive income o pagmamay-ari sa fee-holding Pool.

#### **7.3.1 Paglalapat ng bayad sa serbisyo at pagpili ng profile**

Ang isang hinaharap na profile ng registry ay maaaring humingi sa mga nakikibahagi na Pool o serbisyo ng ruta na gumamit ng isang katugma na adapter ng bayad o hook.

Ang mga pangalang tulad ng **PoolFactory** o **FeeHook** ay naglalarawan ng mga posibleng module sa hinaharap; hindi mga contract ng Protocol v1.1.0 ang mga ito. Ilalantad ng anumang pagpapatupad ang code, mga address, controller, tatanggap, rate, karapat-dapat na transaksyon, paghawak sa failure, at audit status.

Magiging profile-specific ang enforcement. Maaaring patuloy na gumana nang lokal ang isang Pool na hindi isinama ng isang profile o sumali sa ibang katugmang registry kung nananatiling gumagana ang mga contract at dependency nito. Dapat ipakita ng mga client ang available na profile at naaangkop na bayad bago humingi ng awtorisasyon.

#### **7.3.2 sCLC badyet at pagpipiliang panlabas na mga kontrol ng float**

Pagkatapos pondohan ang pinagtibay na mas mataas na prayoridad na badyet, maaaring maglathala ang isang proseso sa hinaharap ng epoch fee-credit budget na `F_epoch`, kabilang ang zero. Maaaring magtakda ang isang patakaran ng limitasyon sa kalahok na proporsyonal sa voting power ng stCLC:

limit_user_epoch = F_epoch × (stCLC_user / stCLC_total).

Ang bawat bintana ay mananatiling sakop ng mga allowlist, caps, inventory, pagiging karapat-dapat, mga patakaran sa insidente, at naaangkop na batas.

Ang isang hiwalay na patakaran ay maaaring magpahintulot sa isang capped, time-weighted acquisition ng iminungkahi CLC governance token lamang upang mabawasan ang isang sinusukat external governance attack surface.

- isang nai-publish na trigger batay sa panlabas na float sa loob ng isang nasabing panahon;
- ang maximum na bahagi ng mga nakamit, karapat-dapat na bayad at dami ng venue;
- oras-weighted pagpapatupad na walang eksaktong announcement ng timing;
- isang awtomatikong pagpigil kapag hindi nakakatugon ang inaminang coverage o operating thresholds;
- pag-retiro o paglalagay ng nakamit na mga token sa isang naipaliwanag na account na walang vote; at
- ang isang eksplisit na pahayag na ang programa ay hindi naglalayong o nag-garantiya ng isang presyo at hindi nakakaapekto sa pagpapatupad ng tagapag-isyu.

Ang patakaran ay maaaring manatili na hindi aktibo nang walang hangganan.

#### **7.3.3 Portfolio Pools at mga attestasyon**

Ang **portfolio Pool** ay magiging karaniwang Pool ng Pangako na inayos ayon sa isang misyon o larangan ng serbisyo. Maaaring maging indibidwal, kooperatiba, pangkat ng komunidad, pampublikong ahensya, pederasyon, multisig, operator ng serbisyo, o iba pang may pananagutang istruktura ang Tagapangasiwa ng Pool nito.

Ang suporta ay maaaring mangyari sa pamamagitan ng:

1. mga direktang kontribusyon sa ilalim ng nai-publish na mga tuntunin ng Pool;
2. ang mga time-bounded liquidity mandate na naaprubahan sa pamamagitan ng adopted governance process; o
3. sCLC-directed access sa isang limitadong badyet pagkatapos ng Waterfall kapag pinapayagan ang mekanismo na iyon.

Ang Portfolio Pools ay mananatiling independiyenteng pinamamahalaan at maaaring gumamit ng mga nakabahagi o independyentong registry.

Ang mga sertipikasyon ay maaaring magbigay ng impormasyon sa pagpasok o paggamot sa panganib ngunit hindi magtatag ng karapatan sa mga bayad, kita, o residual assets.

- **mga sertipikasyon na naka-register** mula sa isang nakikilala na verifier na gumagamit ng isang nai-publish na pamamaraan; o
- **mga voucher ng serbisyo sa pag-verify** kumakatawan sa isang redeemable commitment na magsagawa ng nasabing audit o pagsusuri.

Ipinapayag ng Pool kung paano nakakaapekto ang isang patnubay sa pagpasok, mga pamamaraan ng rate ng palitan, limitasyon, o pagiging karapat-dapat at kung paano itinataguyod ang mga error, expiration, conflicts, at appeals.

### **7.4 Proposed Waterfall at mga badyet**

Ang iminungkahi na Waterfall ay mag-alok lamang ng realisadong, karapat-dapat na kita sa ilalim ng isang inaminang proseso ng pamamahala.

- **cash eligible assets (`E_cash`):** ang mga binuksan na fungible assets na maaaring magamit o mabago sa ilalim ng patakaran para sa mga obligasyon na may cash-denominated; at
- **mga assets sa naturalidad (`E_kind`):** mga voucher o iba pang assets na maaaring sumusuporta sa network exchange ngunit hindi nakikitungo sa cash-denominated coverage o operating obligations maliban kung talagang binabago.

Ang isang patakaran sa pag-convert ay makikilala ang mga awtorisadong operator, mga asset, lugar, mapagkukunan ng presyo, window ng oras, slippage limits, caps, labanan, rekord, at mga pamamaraan ng insidente.

Ang isang ilustrasyong pagkakasunud-sunod ng mga prayoridad ay:

1. **Target ng pinansiyal na coverage:** pagbuo ng anumang inaminang reserba o iminungkahi na pondo sa seguro ayon sa inilarawan na layunin nito para sa mga tinukoy na nasa ilalim na kaganapan.
2. **Mga pangunahing operasyon:** pag-iimbak ng isang limitadong, nailathalaang badyet para sa legal na gawain, edukasyon, komunikasyon, imprastraktura, mga audit, at obserbahan.
3. **Mga tungkulin sa likido:** i-allocate ang mga naaprubahan na assets sa ipinahayag na layunin ng pool o ruta-serbisyo sa ilalim ng caps at sunset review.
4. **Optional external-float control:** ang pondo lamang kapag natupad ang nai-publish na trigger at mas mataas na priyoridad threshold nito; kung hindi, i-allocate ang zero.
5. **Proposed na badyet ng bayad-kredyto:** mag-alok ng anumang naaprubahan na natitira sa mga itinalagaang pool na may bayad at ipahayag ang `F_epoch`, na maaaring maging zero.

Ang mga desisyon sa badyet ay maaaring isaalang-alang ang nakumpirma na pagpapatupad, nasa ilalim ng exposure, kwalipikadong mga reserba, limitang paggamit, executed routes, concentration, incidents, at performance ng guarantor.

Ang isang posibleng daloy ng kontribusyon ay:

1. ang mga nagbibigay ng kontribusyon ay maglilipat ng karapat-dapat na mga kabtangan sa ilalim ng nag-iiba na inaminang mga kondisyon ng donasyon o programa;
2. tumatanggap ang mga karapat-dapat na kalahok at, kung pinahihintulutan, nagla-lock ng mga iminungkahing CLC governance token upang makakuha ng stCLC;
3. ang mga nakamit na karapat-dapat na receipt ng rake o service fee ay sumusuporta sa Waterfall;
4. ang mga pondo ng Waterfall ay tumanggap ng mga prayoridad ayon sa pagkakasunud-sunod; at
5. lamang ang isang pinapayagan na patakaran pagkatapos ng Waterfall ay nag-issue ng sCLC o nagbubukas ng isang nakumpit na bintana ng bayad-kredito.

Walang hakbang ang lumilikha ng mga karapatan sa pagmamay-ari, pagbabalik, pagtanggal, saklaw, gantimpala, o pamamahala na higit pa sa eksplisit na ipinapakita sa naaangkop na tuntunin.
