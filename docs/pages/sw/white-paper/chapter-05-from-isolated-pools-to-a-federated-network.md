## **5. Kutoka Vikundi vilivyojitenga hadi mtandao uliounganishwa**

Sasa Protocol v1.1.0 inasaidia utekelezaji wa moja kwa moja kupitia `SwapPool` na hutoa quote tu `SwapRouter`. Haitekelezi njia nyingi, HTLCs, njia za usimamizi, kuunganisha makundi, au kuunganisha mtandao.

Sura hii inapendekeza jinsi kujitegemea kutawala Vikundi inaweza kuhariri bila kutoa yao wenyewe uandikishaji, tathmini, kikomo, ada, hesabu, idhini, na utawala sheria.

### **5.1 Hatua tofauti za kubadilishana na kutimiza**

Shirikisho inaweza kuboresha upatikanaji wa hisa, lakini itakuwa si kuunganisha vocha na kubadilishana mizunguko ya maisha. Utekelezaji wowote ungepima matukio haya tofauti:

1. njia imeorodheshwa;
2. moja au zaidi ya kikundi swaps kutekeleza na kutatua juu ya mlolongo;
3. mmiliki huwasilisha vipande vya vocha kwa mtoaji;
4. mtoaji hutimiza ahadi; na
5. Vituo vilivyokamilika vinatupwa.

Njia nyingi zilizotajwa au zilizofanywa hazithibitishi kutimizwa zaidi. Ripoti itaonyesha kundi, kipindi, mali, mbinu ya thamani na muhuri wa muda, uondoaji, marekebisho, na ushahidi nje ya mlolongo required na nyongeza C.

**Njia ya kielelezo:** Shule ina vocha za mahindi lakini inahitaji vocha za usafirishaji. Huduma ya njia huamua hesabu zinazofaa za Kikundi. Utekelezaji ungekuwa na mafanikio tu kama kila hop iliyoidhinishwa tofauti ingebaki ndani ya mipaka yake ya nukuu, mipaka, ada, hesabu, na sera. Swaps zilizosababishwa hazingethibitisha kwamba yeyote kati ya watangazaji baadaye alitimiza ahadi zake za vocha.

### **5.2 Huduma zinazopendekezwa za kuelekeza na kusawazisha upya**

Huduma ya njia ya wakati ujao inaweza kusaidia shughuli mbili tofauti.

**Utekelezaji ulioanzishwa na mshiriki.** Kwa kuzingatia mali za kuingia na kutoka, kiasi, na vizuizi vya watumiaji, huduma inaweza kutambua njia na kuandaa utekelezaji. Kila hop ingekuwa na Kikundi chake mwenyewe kuwajibika, quote, idhini, ada, mipaka, hesabu, na risiti. Atomic batches, HTLCs, na escrow ni uwezekano wa uchaguzi ujao utekelezaji, si tabia ya sasa itifaki.

**Kuchagua Kikundi kusawazisha tena.** Wasimamizi wa Vikundi inaweza kuchapisha malengo ya hesabu, idhini za wapinzani, madarasa ya mali, mipaka ya kupotoka kwa quotes, na mipaka ya kila kipindi. Huduma inayohusika inaweza kutafuta mizunguko au minyororo inayolingana na kutekeleza tu makusudi yaliyoidhinishwa.

Kuwa na usawaziko kungekuwa sawa. Kikundi inaweza kuruhusu njia washiriki wakati kukataa outbound rebalancing, au inaweza kuruhusu tu mali zilizochaguliwa, wapinzani, na kiasi. Kila hop kutekelezwa kuzalisha risiti, na ada yoyote ya huduma itakuwa kufunuliwa tofauti na Jumla na itifaki ada.

#### **5.2.1 Shirikisho na ushirikiano wa mifumo**

Utekelezaji wa kujitegemea unaweza kuendesha rejista zao wenyewe, viungo, huduma za njia, na maelezo ya sera wakati wa kuchagua data zinazofaa na viwango vya kupokea. Utekelezaji mbalimbali ungeendelea kutegemea utekelezaji.

Profaili inayolingana ingekuwa:

- kutambua mizizi yake ya rejista, watendaji wa huduma, wasimamizi, na maneno yanayotumika;
- kufichua idhini na kukataliwa kwa wapinzani, mali, adapters, na njia;
- hutumia ruhusa, mipaka, ada, na vizuizi vya hesabu ya kila Kikundi kinachoshiriki;
- kuhifadhi uthibitisho wa quote-to-receipt per-hop; na
- kuruhusu Vikundi vinginevyo kazi kuondoka au kuchagua rejista nyingine bila kufuta mikopo au wajibu wa mtoaji.

Upatano unaweza kuongeza njia za kubadilishana zinazopatikana na kupunguza utegemezi kwa rejista moja au operator. Haitafanya mtandao, CLC App, GEF, au Kikundi nyingine kuwajibika kwa utekelezaji wa mtoaji.

### **5.3 Mfano uliopendekezwa wa upungufu wa mtandao na ada ya huduma**

Sasa Protocol v1.1.0 inachukua ada ya Kikundi na, wakati imewekwa, ada ya itifaki ya ziada kwenye kubadilishana moja kwa moja kwa Kikundi. Mshahara huo unaendelea kutofautiana.

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

#### **5.3.1 Malipo yanayoweza kulipwa kwa fedha na mapato ya aina**

Malipo yanaweza kufika katika mali zinazoweza kulipwa kwa fedha au katika vocha na mali nyingine za asili. Malipo ya asili hayawezi kulipia gharama za fedha au madai ya bima. Kila kubadilishana au kubadilishana kungehitaji mamlaka, hesabu inayopatikana, maeneo yaliyofunuliwa, mipaka, na utekelezaji halisi.

Hebu `χ` kuwa sehemu iliyotekelezwa ya mapato ya ada ambayo ni cash-eligible baada ya mapungufu ya sera, conversions kushindwa, na slippage. Malipo yanayoweza kutumiwa kwa fedha ni:

F_cash ≈ χ · F

Uchambuzi wa bajeti na kusawazisha utatumia realized `F_cash`, si jumla ya ada zilizoorodheshwa au nywila ya hesabu ya asili. Programu ya siku zijazo ingeripoti mapato ya mkusanyiko wa jumla, mapato ya mitandao, mapato ya huduma, muundo wa mali, matokeo ya uongofu, na mapato ya matumizi ya fedha tofauti.

### **5.4 Mipango ya upungufu wa fedha iliyopendekezwa**

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
