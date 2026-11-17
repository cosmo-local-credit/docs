# 5. Kutoka Vikundi vilivyojitenga hadi mtandao uliounganishwa

Protocol v1.1.0 ya sasa inasaidia utekelezaji wa moja kwa moja kupitia `SwapPool` moja na hutoa `SwapRouter` ya Solidity inayotoa nukuu pekee. CLC App na CLC Core za uzalishaji huratibu njia kwenye mnyororo mmoja zinazoanzishwa na mshiriki kupitia hadi Vikundi vitatu kwa kutayarisha kundi moja la miamala ya Mkoba wa Calibur litakalotiwa sahihi. Mikataba yenyewe haitekelezi njia yenye hatua nyingi, na mtiririko wa sasa wa App/Core hautoi HTLC kati ya minyororo, njia za escrow, usawazishaji wa kiotomatiki wa Vikundi, ulinganishaji wa kundi wala ulinganishaji kati ya mitandao.

Sura hii inaeleza njia ya sasa ya mshiriki na kuitofautisha na uratibu unaopendekezwa ambao utahitaji mamlaka mapya ya Kikundi. Katika hali zote mbili, Vikundi huru huhifadhi kanuni zao za kukubaliwa kwa mali, uthamini, mipaka, ada, mali zilizopo, idhini na utawala.

## **5.1 Hatua tofauti za kubadilishana na kutimiza**

Uelekezaji unaweza kuboresha upatikanaji wa mali, lakini hauunganishi mizunguko ya maisha ya vocha na ubadilishaji. Vipimo vinapaswa kuweka matukio haya tofauti:

1. njia imeorodheshwa;
2. moja au zaidi ya kikundi swaps kutekeleza na kutatua juu ya mlolongo;
3. mmiliki huwasilisha vipande vya vocha kwa mtoaji;
4. mtoaji hutimiza ahadi; na
5. Vituo vilivyokamilika vinatupwa.

Njia nyingi zilizotajwa au zilizofanywa hazithibitishi kutimizwa zaidi. Ripoti itaonyesha kundi, kipindi, mali, mbinu ya thamani na muhuri wa muda, uondoaji, marekebisho, na ushahidi nje ya mlolongo required na nyongeza C.

**Njia ya kielelezo:** Shule ina vocha za mahindi lakini inahitaji vocha za usafiri. CLC Core inaweza kutambua mali zinazolingana katika Vikundi, kutoa nukuu ya njia iliyochaguliwa katika block moja iliyowekwa na kutayarisha simu zenye mipaka kwa Mkoba wa shule. Utekelezaji hufanikiwa tu ikiwa kila hatua inabaki ndani ya mipaka ya nukuu, ada, mali zilizopo, tabia zinazosaidiwa na sera. Ubadilishaji unaotokea hauthibitishi kuwa Mtoaji yeyote baadaye alitekeleza ahadi zake za vocha.

## **5.2 Uelekezaji wa sasa wa mshiriki na usawazishaji unaopendekezwa**

Shughuli mbili hutaka mamlaka tofauti.

**Utekelezaji wa sasa unaoanzishwa na mshiriki.** Kwa kutumia vocha za kuanzia na zinazotakiwa pamoja na kiasi, CLC Core hukadiria njia kutoka mali zinazofaa za mshiriki. Kwa njia iliyochaguliwa, husoma Vikundi katika block moja iliyowekwa, hutoa nukuu halali, huiga kundi lote na kutayarisha simu tatu kwa kila hatua: kuweka upya idhini, kutoa idhini na `SwapPool.withdraw` yenye mipaka. Mshiriki hutia sahihi, kisha relayer huwasilisha muamala mmoja wa Calibur kwenye mnyororo huo huku `revertOnFailure` ikiwa imewashwa. Simu yoyote ikishindwa, simu zote za njia hurejeshwa. App huweka pamoja muamala na ukamilishaji wa kila hatua katika risiti moja.

Kila hatua huhifadhi Kikundi chake kinachowajibika, taarifa za nukuu, idhini, ada, mipaka, mali zilizopo na tukio la ukamilishaji. App ya sasa haiongezi ada tofauti ya huduma ya njia. Mtiririko wa sasa unasaidia Mikoba ya EOA/Calibur inayoendana na App, si Safe au Mikoba mingine ya mkataba.

**Usawazishaji wa Kikundi unaofanywa kwa hiari.** Wasimamizi wa Vikundi wanaweza kuchapisha malengo ya mali zilizopo, washirika wanaoruhusiwa, aina za mali, mipaka ya kupotoka kwa nukuu na mipaka ya kila kipindi. Huduma inayowajibika inaweza kutafuta mizunguko au minyororo inayolingana na kutekeleza tu nia zilizoidhinishwa.

Usawazishaji utafanywa kwa hiari. Kikundi kinaweza kuruhusu njia za kawaida za washiriki bila kuidhinisha huduma kuhamisha mali kwa ajili ya usawazishaji. Mamlaka ya baadaye yanaweza kuruhusu mali, washirika na kiasi vilivyochaguliwa pekee. Kila hatua iliyotekelezwa itatoa risiti, na ada yoyote ya huduma itawekwa wazi kando na ada za Kikundi na itifaki.

Utekelezaji wa HTLC au escrow kati ya minyororo pia ni tofauti na kundi atomiki la sasa kwenye mnyororo mmoja. Utahitaji kanuni zilizopitishwa za muda, kusitisha, udhibiti, urejeshaji na hatari iliyobaki.

### **5.2.1 Shirikisho na ushirikiano wa mifumo**

Utekelezaji huru unaweza kuendesha rejesta, violeshura, huduma za njia na wasifu wake wa sera huku ukichagua viwango vinavyolingana vya data na risiti. App ya sasa ya umma hutumia rejesta na wasifu wake wa huduma uliosanidiwa. Utekelezaji kati ya wasifu bado hutegemea utekelezaji.

Profaili inayolingana ingekuwa:

- kutambua mizizi yake ya rejista, watendaji wa huduma, wasimamizi, na maneno yanayotumika;
- kufichua idhini na kukataliwa kwa wapinzani, mali, adapters, na njia;
- hutumia ruhusa, mipaka, ada, na vizuizi vya hesabu ya kila Kikundi kinachoshiriki;
- kuhifadhi uthibitisho wa quote-to-receipt per-hop; na
- kuruhusu Vikundi vinginevyo kazi kuondoka au kuchagua rejista nyingine bila kufuta mikopo au wajibu wa mtoaji.

Upatano unaweza kuongeza njia za kubadilishana zinazopatikana na kupunguza utegemezi kwa rejista moja au operator. Haitafanya mtandao, CLC App, GEF, au Kikundi nyingine kuwajibika kwa utekelezaji wa mtoaji.

## **5.3 Mfano uliopendekezwa wa upungufu wa mtandao na ada ya huduma**

Sasa Protocol v1.1.0 inachukua ada ya Kikundi na, wakati imewekwa, ada ya itifaki ya ziada kwenye kubadilishana moja kwa moja kwa Kikundi. Mshahara huo unaendelea kutofautiana.

Ubadilishaji wa njia katika uzalishaji hutumia ada hizi za sasa kwa kujitegemea katika kila hatua na kuziainisha katika nukuu na risiti. Kwa sasa hauongezi ada tofauti ya huduma ya uelekezaji.

Programu ya wakati ujao inaweza kupokea tofauti:

1. A **Rake mtandao**, iliyofafanuliwa kama sehemu iliyoainishwa ya ada za Kikundi zilizokusanywa za Kikundi cha Washiriki; na
2. A **ada ya usafirishaji au huduma**, kulipwa kwa ajili ya huduma ya baadaye kujulikana.

Rake ya mtandao iliyopendekezwa sio asilimia ya ziada inayotumika kwa kiasi kamili cha swap baada ya tayari kuhesabu ada ya Kikundi. Kwa Kikundi `p`:

τ_p = f_p · r_p

ambapo `f_p` ni kiwango cha ada ya Kikundi na `r_p` ni sehemu iliyopendekezwa ya ada hiyo ya Kikundi iliyogawanywa kwa mpango wa mtandao.

Kwa kipindi kilichopimwa:

- **Malipo ya Jumla** ni jumla ya ada halisi zilizopokelewa za kila Kikundi;
- **mapato kwa ajili ya mitandao** ni sehemu zilizotajwa za ada hizo zilizopokelewa;
- **risiti za ada ya huduma** ni malipo ya njia au huduma zilizopangwa kwa njia tofauti; na
- **mapato ya ada ya programu** mapato ya usawa wa mtandao pamoja na mapato ya ada ya huduma.

Hakuna jamii inayohesabiwa mara mbili. Malipo ya sasa ya mkataba hayajumuishiwi isipokuwa sera iliyopitishwa kwa kipekee ielekeze kisheria mapato halisi ya mapato ya mkataba kwenye mpango wa baadaye.

Kwa makadirio ya jumla, hebu:

- `Q_swap` ni thamani ya kukamilika Kikundi swaps kwa ajili ya cohort na kipindi maalum; na
- `τ` ni kiwango cha ufanisi cha kuongezeka kwa mtandao uliopendekezwa na ada za huduma zilizoainishwa tofauti juu ya thamani ya swap iliyofanywa.

Kisha:

F ≈ τ · Q_swap

Hii ni makadirio ya uchambuzi, si ahadi ya mapato. Kila input inahitaji cohort iliyotangazwa, kipindi, kitengo, thamani muda stempu, uondoaji, na marekebisho sera.

### **5.3.1 Malipo yanayoweza kulipwa kwa fedha na mapato ya aina**

Malipo yanaweza kufika katika mali zinazoweza kulipwa kwa fedha au katika vocha na mali nyingine za asili. Malipo ya asili hayawezi kulipia gharama za fedha au madai ya bima. Kila kubadilishana au kubadilishana kungehitaji mamlaka, hesabu inayopatikana, maeneo yaliyofunuliwa, mipaka, na utekelezaji halisi.

Hebu `χ` kuwa sehemu iliyotekelezwa ya mapato ya ada ambayo ni cash-eligible baada ya mapungufu ya sera, conversions kushindwa, na slippage. Malipo yanayoweza kutumiwa kwa fedha ni:

F_cash ≈ χ · F

Uchambuzi wa bajeti na kusawazisha utatumia realized `F_cash`, si jumla ya ada zilizoorodheshwa au nywila ya hesabu ya asili. Programu ya siku zijazo ingeripoti mapato ya mkusanyiko wa jumla, mapato ya mitandao, mapato ya huduma, muundo wa mali, matokeo ya uongofu, na mapato ya matumizi ya fedha tofauti.

## **5.4 Mipango ya upungufu wa fedha iliyopendekezwa**

Programu ya baadaye ya upungufu wa fedha, iliyoandikwa tofauti, inaweza kugawa mali kwa Vikundi zilizoainishwa au huduma za kuelekeza. Mikataba ya sasa ya `SwapPool` haitoi hisa za Kikundi au kuunda haki za kurudisha, kujiondoa, thawabu, utawala, au faida.

Programu yoyote ingechapisha:

- taasisi inayowajibika na kushirikiana Wasimamizi wa Vikundi;
- mali zilizochangia na ikiwa uhamisho huo ni wa kurudishwa, unaweza kufutwa, umetolewa, au umetolewa;
- mipangilio ya ulinzi na udhibiti wa kiufundi;
- matumizi yanayoruhusiwa, mipaka, kufuli, milango ya kujiondoa, na usambazaji wa hasara;
- usawa wa ada au motisha na ikiwa kiasi kinaweza kuwa sifuri;
- kuripoti, migogoro, malalamiko, na suluhisho; na
- uhamiaji, kumalizika, na matibabu ya mali zilizobaki na wajibu.

Hatari za kimsingi ni pamoja na hesabu ambayo ni vigumu kubadilishana au kutimiza, upendeleo mdogo wa fedha, kutotimiza kwa mtoaji, kutofaulu kwa mkataba au mtoaji, mabadiliko ya utawala, na vizuizi vya kuondoka. Mipaka, hifadhi, risiti, na dashibodi zinaweza kupunguza au kufunua hatari fulani; hawaondoi hasara.

Kwa kipimo cha uchambuzi ex-post, hebu:

- `ϕ` ni sehemu iliyotekelezwa ya mapato ya ada ya programu iliyogawanywa chini ya masharti yaliyopitishwa ya programu; na
- `K` ni thamani ya kipimo cha mali zinazohusika na mpango chini ya njia moja iliyothibitishwa.

Kisha:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Metric hii inaelezea realized ada mtiririko kwa kipimo programu mali. Si APY, utabiri, dividend, au kurudi uhakika. Ripoti itaweka tofauti kiasi cha kubadilishana, uwasilishaji wa fidia, utekelezaji wa mtoaji, ukomo, muda wa uhifadhi, hasara, uondoaji, na mapato ya ada.
