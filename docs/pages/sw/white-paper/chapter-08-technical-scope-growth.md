## **8. Ufikiaji wa kiufundi na ukuaji**

Sura hii inafafanua kazi ya hiari au inayopendekezwa. Si orodha ya vipengele kuhakikisha kuwa iko katika sasa CLC App au Protocol v1.1.0.

Sehemu zinazowezekana za kazi ni:

- utekelezaji wa utaratibu wa kupelekwa kwenye Vikundi zinazofaa, na usajili, nukuu, kikomo, ada, na ugunduzi wa hesabu;
- wakati uliowekwa amana au HTLC adapters kwa ajili ya utekelezaji cross-domain ambapo settlement atomic ni haipatikani;
- interfaces na zana za sera kwa kikundi ndogo au binafsi;
- kumbukumbu za kufuatilia kwa vocha, Vikundi, njia za kiwango cha ubadilishaji, mipaka, wasimamizi, na ada;
- viunganisho vya mtoa huduma wa malipo maalum kwa utekelezaji, mtiririko wa malipo, na udhibiti wa uhalali;
- uhusiano wa mali ya fungible na vituo vya nje vya usawa wa fedha kwa ajili ya kusawazisha upya na usawa wa malipo; na
- kubadilishana fedha za kifedha zinazohusika na sera kwa ajili ya ulinzi wa kupitishwa, gharama za uendeshaji, au amri za upungufu wa fedha.

Bei za soko la nje haziwezi kuamua ni kiasi gani cha mkopo wa mtoaji chini ya masharti ya vocha. Hifadhi inaweza kutumia marejeleo ya nje ya ulinzi kwa mali ya fungible, lakini njia yake ya kiwango cha ubadilishaji iliyochapishwa, mipaka, ada, na hesabu itaongoza nukuu zake.

### **8.1 Vipimo vinavyopendekezwa vya huduma ya njia na SDK**

**Ugunduzi.** Huduma ya njia iliyopendekezwa ingeuliza kumbukumbu zilizochaguliwa kwa uandikishaji wa mali, njia za kiwango cha ubadilishaji, mipaka, ada, hesabu, matukio, na habari ya mtawala. Rekodi zilizohifadhiwa zingetia ndani mipaka ya utulivu na vitambulisho vya chanzo.

**Profaili za mtandao.** Mteja anaweza kusaidia zaidi ya moja registry mizizi au sera profile. Itasema mshiriki ambayo profile, washirika, adapters, vizuizi, na watendaji wa huduma responsible quote inatumia. Njia ya msalaba inapaswa kukidhi hali zote za hop zinazotumika.

**Sera ya njia.** Mendeshaji anayehusika anaweza kuondoa utegemezi usio salama au washirika na kutumia vizuizi vya kiwango cha njia, mahitaji ya usafi, na vigezo vya afya. Ishara hizo zingeunga mkono uamuzi; Hazingehakikisha utekelezaji au ulinzi dhidi ya hasara.

**Ada na mipaka.** Taarifa itaorodhesha ada za Kikundi, ada yoyote ya ziada ya Protokolo ya sasa, na ada yoyote ya njia au huduma iliyopendekezwa tofauti. Utekelezaji huo ungekataa ofa zilizokwisha kutimizwa au mipaka iliyovunjwa.

**Atomicity na kupona.** Kuuawa kwa watu wengi kungekuwa kiatomati iwezekanavyo. Ikiwa ilitumia HTLCs au escrow, huduma hiyo ingefunua timeouts, njia za kuvunja, wasimamizi wanaohusika, taratibu za tukio, na hatari zilizobaki.

**Tumependekeza mkusanyiko wa kundi na kusawazisha.** Huduma ya opt-in inaweza kukusanya nia ya kusawazisha tena na kutafuta mizunguko au minyororo inayolingana. Ingekuwa:

1. kuchapisha risiti inayoweza kusomwa kwa mashine inayoonyesha mizunguko iliyofanywa, mali, kiasi, vitambaa vya wakati wa kukadiria, na ada;
2. kutekeleza mipaka iliyopitishwa kwa kipindi na sera za mpinzani;
3. kukataa shughuli yoyote inayovunja idhini, mipaka, au hesabu inayopatikana ya Kikundi chochote cha washiriki; na
4. kuhifadhi vituo vya kuamua na mapato kwa ajili ya ukaguzi na utatuzi wa mizozo.

**Mahitaji ya SDK.** SDK kwa njia kutekelezwa itatoa deterministic quote-to-receipt ramani, per-hop checks invariant, inaeleweka kasoro codes, na audit-kirafiki rekodi. Protocol v1.1.0 ya sasa `SwapRouter` hutoa nukuu tu; haina kutekeleza njia hizi zilizopendekezwa.

#### **8.1.1 Maelezo ya chini ya utangamano wa muungano**

Ecosystem ya kikundi ambayo inatafuta njia ya kuelekeza juu ya wasifu itachapisha habari inayoweza kusomwa na mashine kwa:

1. **Mizizi ya rejista:** identifiers kwa mali, Vikundi, mbinu za kiwango cha ubadilishaji, mipaka, na sera ya ada, au mizizi moja ambayo deterministically kutatua yao.
2. **Mapokezi:** profile, mali ndani na nje, kiasi, quote chanzo na muda stempu, kikomo snapshot, ada, matokeo ya hisa, na matokeo ya utekelezaji kwa kila hop.
3. **Ishara za kazi:** habari ya upya kuhusu hesabu, matumizi ya kikomo, matukio, na utekelezaji wowote ulioonyeshwa tofauti au ulinzi wa kifedha.
4. **Vikwazo vya sera:** walioruhusiwa au walikataa wapinzani, madarasa ya mali, adapters, na mahitaji yoyote ya usimamizi.
5. **Nambari za kutofaulu:** ufafanuzi deterministic kwa kukataliwa, kumalizika, kikomo, hesabu, sera, utegemezi, au matukio ya kutofaulu.

Profaili inaweza kuongeza ufikiaji, kufuata, usuluhishi, au huduma nyingine bila kuwa mahitaji ya msingi CPP utangamano. Kila huduma ya hiari ingeonyesha mtu anayehusika, mamlaka yake, wigo wake, na masharti yake.

### **8.2 Utoaji ruhusa, uthibitisho, na kuondoka**

Protocol v1.1.0 mikataba ni EVM- sambamba. Mikataba katika rekodi ya `src` ya hifadhidata ya Mkataba huchapishwa chini ya AGPL-3.0 isipokuwa kwa vipengele vya tatu vilivyotambuliwa bila kubadilishwa ambavyo vinahifadhi masharti yao wenyewe. Chanzo kilichochapishwa, ABIs, na maelekezo ya utekelezaji huunga mkono ukaguzi wa kujitegemea lakini hazionyeshi wenyewe ukaguzi, utekelezaji salama, au kufuata kisheria.

Kila utekelezaji utafunua tofauti toleo lake la msimbo, kujenga asili, anwani, mtawala na uwezo wa kuboresha, hali ya ukaguzi, vioo vya rejista, na ulinzi wowote wa timelock au pause.

A iliyopendekezwa **Fork kit** inaweza kutia ndani:

1. maandishi ya utekelezaji wa deterministic;
2. picha ya haraka ya rejista na zana za kuuza nje;
3. mchakato uliothibitishwa wa kurudisha huduma za njia, SDKs, na viungo kwa mizizi mpya ya rejista;
4. orodha ya kuangalia ya Msimamizi wa Kikundi kwa kuondoka rejista ya pamoja kwa usalama; na
5. orodha ya kuangalia uhamiaji kwa vocha bado, ikiwa ni pamoja na matangazo ya mtoaji, tarehe za kuwasilisha na kutimiza, ufikiaji wa kuendelea kwa rekodi, na kurekebisha.

Vifurushi vinavyolingana vinaweza kuboresha uvumilivu wakati jamii, ushirika, mashirika ya umma, shirikisho, mashirika mengi, au waendeshaji wa huduma wanahitaji utawala tofauti. Utaratibu halisi bado unategemea umiliki wa mkataba, funguo, utegemezi, viungo, miundombinu, majukumu ya kisheria, na huduma za mtu wa tatu.
