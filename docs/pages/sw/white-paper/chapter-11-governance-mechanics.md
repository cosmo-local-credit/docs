## **11. Taratibu za utawala**

Sura hii inapendekeza template ya utawala. Haimaanishi kwamba CLC App ya sasa hutumia kupiga kura kwa ishara za utawala, nyakati za wakati, bima ya pamoja, mchakato wa madai, au udhibiti wowote ulioelezwa hapa chini. Kila utekelezaji utahitaji kutambua watunga maamuzi halisi, mamlaka, mikataba, michakato, na sera zake.

- **Maadili ya Katiba:** kuhangaikia watu, kuhangaikia mazingira, haki, upatanisho, kutokuwa na udhibiti, na uvumilivu.
- **Aina za mapendekezo:** mabadiliko ya ada, kikomo, na faharisi; amri za upungufu wa fedha; kuorodheshwa kwa makundi na kuondolewa; maamuzi ya ufungaji wa hiari; na parameter walinzi.
- **Utaratibu unaohusika:** utumiaji → tathmini → tathmini ya hatari → idhini → muda ambapo inafaa → utekelezaji. Kibali kinaweza kutoka kwa wasimamizi, ushirika, mashirika ya umma, shirikisho, mashirika mengi, kupiga kura kwenye mnyororo, au muundo mwingine uliofunuliwa na unaohusika.
- **Viwango vya idhini:** parameterized na darasa la hatua, na viwango vya juu kwa ajili ya mabadiliko ya faharisi ya thamani, nguvu za dharura, na hatua nyingine muhimu.
- **Ujumbe:** Ujumbe wa hiari na mamlaka ya umma, utangazaji wa migogoro, na kurejesha.
- **Kuvunja mizunguko:** mapumziko ya dharura na vigezo vilivyoainishwa, waendeshaji walioidhinishwa, hali za kuanza upya, na uchunguzi wa baada ya kifo unaohitajika.
- **Uwazi:** mabadiliko na mtiririko uliochapishwa, pamoja na ushahidi wa kipekee wa ufumbuzi wa swap, utekelezaji wa mtoaji, akiba, matumizi ya kikomo, njia, na wadhamini.

**Utawala wa rejista.** CPP- sambamba utekelezaji inaweza kudumisha kumbukumbu ugunduzi kwa vocha, tokens, na Vikundi. Udhibiti ulioruhusiwa unaweza kuongeza, kusasisha, kusimamisha, au kuondoa kuingia kwa rejista kupitia mchakato wa utawala wa utekelezaji uliofunuliwa. Kuondoa rejista huathiri ugunduzi na njia kupitia rejista hiyo; haina kufuta ishara yenyewe, kubadilisha akiba ya mmiliki, kutimiza wajibu wa mtoaji, au kulemaza mkataba mwingine wa kazi.

Kanuni za rejista zilizochapishwa zinapaswa kufanya hali iwe ya masharti na zinaweza kutambua kutotimiza mara kwa mara, udanganyifu au utoaji wa uwongo, tabia isiyo salama ya mkataba, au ukiukaji wa kudumu wa kanuni zilizochapishwa kama sababu za kusimamishwa au kuondolewa. Ikiwezekana, utaratibu huo unapaswa kutoa taarifa, fursa ya kurekebisha, na njia ya kukata rufaa. Uhamisho wa dharura unapaswa kuhitaji ripoti ya tukio la umma na ukaguzi wa moja kwa moja au kutua kwa jua.

**Maonyesho yaliyokatazwa.** Chini ya template hii, rejista haingekubali:

1. vyombo vinavyofadhiliwa moja kwa moja au kuhamasisha uharibifu wa mazingira zaidi ya mipaka iliyokubaliwa, vurugu au silaha, uchimbaji wa kulazimishwa, au unyanyasaji wa mfumo; au
2. darasa vocha ambayo haina wazi mawasilisho na utekelezaji masharti, uwajibikaji, na kurekebisha njia.

Orodha marufuku itakuwa versioned, umma auditable, na inaweza kubadilishwa tu kwa njia ya kupitishwa mgomo wa hatua muhimu na muda lock, iliyoonyeshwa kama Q3 + T3 katika nyongeza D.

### **11.1 Utawala wa kiwango cha ubadilishaji na kikomo**

**Mabadiliko yaliyofungwa kwa wakati.** Kuanzishwa kufuatia template hii kubadilisha mbinu za kiwango cha ubadilishaji na kutekeleza kipekee mipaka parameter tu baada ya muda wa umma lock. Njia ya dharura ingetumia utaratibu wa ruhusa uliofunuliwa tofauti na kuingiza jua au ukaguzi wa moja kwa moja.

**Viwango vya idhini.** Template inapendekeza viwango vya juu vya idhini kwa mabadiliko ya msingi wa faharisi ya thamani na mabadiliko ya kiwango cha kikomo cha kimataifa, viwango vya kati kwa mabadiliko ya mtu wa tatu maalum kwa Kikundi, na viwango vya kawaida kwa mabadiliko ya kawaida ya ada.

**Matangazo yaliyochapishwa.** Utekelezaji wa ushiriki unapaswa kuchapisha, kwa kila Kikundi, tofauti za faharisi kwenye mlolongo, vyanzo au wastani wa oracle, updates cadence, kikomo windows na caps, na mode kasoro au salama constants.

**Kanuni za mapumziko ya dharura.** Utekelezaji wa ushiriki ungetangaza kabla ya hali kama vile kukatika kwa oracle, matumizi ya kikomo cha juu pamoja na kutofaulu kutimiza, au kutofaulu kwa kutokuwa na mabadiliko, pamoja na ukaguzi wa resume na mahitaji ya ukaguzi wa baada ya tukio.

**Mfano wa kulisha index ya umma kwa kikundi moja na vocha**

- **Ishara:** kwa mfano, `Maize_50kg@IssuerY`.
- **Kitengo cha kumbukumbu:** Index Unit (IUX).
- **Thamani iliyochapishwa:** 30.000 IUX.
- **Chanzo:** wastani wa vyanzo vilivyochaguliwa, kama vile utafiti wa soko la ndani, jarida la wizara, na msingi wa utekelezaji.
- **Updates mzunguko:** kila siku saa 18:00 EAT, kwa muda wa saa 24.
- **Hali ya kutofaulu:** kufungia kwenye thamani ya mwisho halali, kutumia sera ya kikomo iliyofunuliwa, na kupumzika baada ya kukatika kwa masaa 72.
- **Sababu:** maelezo yaliyochapishwa na rekodi ya mabadiliko kutoka kwa sasisho la awali.
- **Waandishi:** anwani za multisig zilizofunuliwa na kizingiti cha idhini.

### **11.2 Kusudi la mfuko wa fedha za bima**

**Ubunifu wa hiari tu.** Kitabu hiki kinatumika tu kwa utekelezaji ambao kwa wazi imechukua na kufadhili mfuko wa bima na kuchapisha matukio yaliyofunikwa, waombaji wanaostahiki, taasisi inayowajibika, mali, mipaka, uondoaji, mahitaji ya ushahidi, mchakato, na masharti ya utawala. Wala sasa CLC App wala GEF hutoa chanjo kwa sababu tu muundo huu ni katika kitabu nyeupe.

**Vitu vinavyoweza kuchochea.** Sera iliyopitishwa inaweza kufunika kutotimiza kwa mtoaji aliyefafanuliwa, upungufu wa akiba ya Kikundi, au kupoteza daraja au amana. Matukio ya kiufundi hayafai kiotomatiki; sera husika ingekuwa na udhibiti.

**Tathmini.** Mamlaka inayowajibika ingepatanisha risiti za shughuli, mikopo ya hisa, hati za mdhamini, rekodi za uwasilishaji wa fidia, majibu ya mtoaji, na ushahidi mwingine unaohitajika, na kisha kuchapisha rekodi ya tukio sambamba na faragha na sheria.

**Mlipuko wa maji unaonyesha hasara.** Ambapo kila safu ipo na inatumika kisheria, sera inaweza kutumia: (1) dhamana za mtoaji anayehusika au hisa za mdhamini → (2) Hifadhi za kiwango cha kikundi → (3) mfuko wa bima ya mtandao iliyopendekezwa → (4) upungufu wa muda wa madai ya bima ya hiari, tu wakati masharti yaliyopo na sheria inayotumika inaruhusu kwa wazi → (5) upatikanaji wa kisheria kwa udanganyifu uliothibitishwa au unyanyasaji.

Marekebisho ya chanjo hayapunguzi dhamana ya dhamana ya msingi ya mtoaji au kubadilisha akiba kwenye mnyororo isipokuwa masharti ya halali na sheria inayotumika inaruhusu wazi matokeo hayo na idhini yoyote inayohitajika ya mmiliki hupatikana.

**Mipaka na uondoaji.** Ufikiaji uliochapishwa ungefafanua mipaka, mawasilisho yanayostahiki, ushahidi, madirisha ya madai, njia au matukio yaliyoondolewa, vizuizi vya kijiografia, na matibabu ya hifadhi zilizopunguzwa. Malipo yanaweza kuwa sifuri baada ya mipaka husika kufikiwa.

**Muda wa kupona unaonyesha waziwazi.** Ikiwa imepitishwa na kuchapishwa:

1. madai yatatolewa kwanza kutoka kwa mtoaji anayehusika au dhamana ya dhamana, kisha kutoka kwa akiba inayofaa ya Kikundi, kisha kutoka kwa mfuko wa bima ya mtandao uliopendekezwa;
2. Kupunguza yoyote kwa madai ya chanjo ya hiari itakuwa mdogo kwa yale ambayo masharti ya chanjo iliyopo tayari na sheria inayotumika inaruhusu, hadi kiwango cha juu cha tukio kilichochapishwa;
3. Mpango wa kupona unaweza kutumia sehemu iliyoainishwa ya thamani iliyorudishwa kwa kipindi kilichoainishwa, baada ya hapo upungufu wowote uliobaki uliofunikwa utakuwa hasara iliyoorodheshwa na uchunguzi wa umma baada ya kufa; na
4. kila uamuzi utazalisha risiti na tukio ID, madai na vocha walioathiriwa, uamuzi, mpango wa kupona, na windo la rufaa.

### **11.3 Mfumo wa udhamini**

Sehemu hii inatofautisha jukumu la mtoaji, ulinzi wa Hifadhi ya hiari, na dhamana za mtu wa tatu. Vikundi wanaweza kushindana juu ya utunzaji, masharti, na ulinzi zinazotolewa wazi bila maana kwamba CLC App, CPP, GEF, au mtandao wowote pana moja kwa moja kuhakikisha vocha.

**Wajibu wa mtoaji wa msingi**

- Kila vocha ni wajibu wa kwanza na wa kwanza wa mtoaji wake. Mtoaji anajitolea kutoa bidhaa, huduma, au fedha ya kisheria kulingana na masharti yake yaliyochapishwa.
- Watangazaji wangechapisha ni nani anayeweza kuwasilisha vocha hiyo, ni nini maana ya kutimizwa, inapatikana wapi na wakati gani, ni uthibitisho gani unaohitajika, na ni njia gani za kurekebisha zinazotumika.
- Ikiwa mtoaji anashindwa kutimiza, mtoaji ndiye anayewajibika zaidi. Ulinzi wa kikundi au mtandao hutumika tu wakati unapokubaliwa, kufadhiliwa, na kufunuliwa tofauti.

**Ulinzi wa Hifadhi ya Hifadhi**

Msimamizi wa Kikundi anaweza kuchagua kuongeza ulinzi uliofafanuliwa kwa ufupi kwa vocha zilizoidhinishwa. Si moja kwa moja na ingehitaji kutambua mshiriki anayehusika, fedha, hafla zinazofaa, mipaka, madirisha, ushahidi, uondoaji, na njia za kurekebisha katika metadata ya Kikundi na masharti yanayotumika.

Aina za ulinzi zinazoelezea ni:

1. **Ufunikaji wa mali ya hifadhi:** baada ya kukosa kukamilika kwa mtoaji kuthibitishwa, taasisi inayowajibika ya Kikundi hulipa kiasi maalum katika mali ya hifadhi iliyoainishwa, chini ya kiwango chake cha juu kilichochapishwa na hifadhi zilizopo.
2. **Swap-back dirisha:** Baada ya tukio la kuhitimu, Kikundi hutoa njia ya muda mdogo ya kubadilishana katika mali iliyopitishwa hapo awali au nyingine, chini ya mipaka na hesabu. Hii ni ulinzi wa upatikanaji wa fedha kulingana na hesabu, si ahadi kwamba kila swap ni reversible.
3. **utekelezaji wa mbadala:** mshiriki anayehusika huandaa mtoaji wa badala aliyeidhinishwa ndani ya kikomo cha idadi au thamani iliyochapishwa.
4. **Ulinzi wa kiwango cha kiwango cha ubadilishaji:** kwa ajili ya vikundi vya vocha zilizochaguliwa, Kikundi hutoa tu marekebisho ya chanjo au suluhisho la swap-back iliyoonyeshwa katika masharti yake yaliyopo awali. Hii haina kupunguza dhamana ya msingi ya vocha ya mtoaji.

**Chanzo kinachowezekana cha fedha**

- **Bonasi ya mtoaji:** dhamana zilizowekwa na mtoaji au zilizohifadhiwa katika hifadhi iliyofunuliwa na zinapatikana baada ya tukio lililopangwa lililothibitishwa.
- **Hifadhi ya Kikundi:** mali zinazodhibitiwa na taasisi inayowajibika ya Kikundi na zilizotengwa kwa ulinzi unaotangaza.
- **Bodi ya mdhamini wa tatu:** dhamana zilizowekwa na mdhamini wa nje aliyejulikana kwa wachapishaji waliotajwa, vikundi vya vocha, au hafla.

Ushirikiano wa mdhamini utafuata vigezo vya uhalali vilivyochapishwa, saizi ya dhamana, mipaka ya mkusanyiko, mamlaka ya uamuzi, na sheria za utekelezaji wa sheria.

**Mchakato wa madai**

Sera iliyopitishwa ingefafanua vichocheo vinavyoweza kudhibitiwa, kama vile tarehe ya kukamilika ya utekelezaji iliyofutwa baada ya kuwasilisha fidia halali, ulipuaji wa mtoaji uliothibitishwa, daraja lililofunikwa au kutofaulu kwa amana, au hali ya tukio iliyotangazwa rasmi. Pia itafafanua:

- jinsi mshiriki anavyofungua madai na kutoa ushahidi unaohitajika wa uwasilishaji na utekelezaji;
- anayethibitisha masharti ya vocha, majibu ya mtoaji, na rekodi za kiufundi;
- nafasi ya uamuzi na rufaa; na
- njia ya malipo ya ruhusa, mali, caps, na risiti.

Mapato ya upatikanaji kutoka kwa wachapishaji, usuluhishi, au utekelezaji wa kisheria wangejaza tena bonds au hifadhi zinazotumika kulingana na sera iliyochapishwa kabla ya kutumika kwa upatikanaji uliopendekezwa wa CLC Network Kikundi swap.

**Maelezo yanayohitajika**

Kwa kila kundi la kikundi na vocha zilizofunikwa, chama kinachohusika kitatangaza:

- ikiwa mdhamini hayupo, ni lazima au inahitajika;
- ukubwa wa dhamana au akiba na mipaka ya mkusanyiko;
- aina za ulinzi, mali, vizuizi, madirisha, na uondoaji;
- miadi ya kuwasilisha, kutimiza, madai, na rufaa; na
- taarifa ya lugha rahisi ya nani anathibitisha nini na nini si uhakika.

**Kanuni ya utunzaji.** Wasimamizi wa Vikundi na taasisi zinazohusika za kisheria au utawala ni wajibu kwa ajili ya ulinzi wao matangazo. CPP- sambamba utekelezaji inaweza kutoa viwango, kumbukumbu, au optional kushiriki sera, lakini wala CLC wala GEF moja kwa moja kuhakikisha vocha au Vikundi.

### **11.4 Vituo vya kulinda dhidi ya kukamata**

Chini ya template hii, zifuatazo zitakuwa hatua muhimu zinazohitaji kiwango cha juu zaidi cha kupitishwa na muda mrefu:

1. kubadilisha majivu ya ada iliyopendekezwa, pamoja na chanjo yake na vipaumbele vya shughuli za msingi;
2. kubadilisha mizizi ya kumbukumbu ya Kanoni;
3. kubadilisha wigo wa wigo, mipaka ya madai, au mamlaka ya uamuzi;
4. kupanua uwezo wa mapumziko ya dharura; au
5. kudhoofisha uhalali, uwazi, au wajibu wa enzi kuu Kikundi zilizotajwa katika karatasi hii.

### **11.5 Utaratibu wa Fork na Kutoka**

Kama utawala ulifanyika au maadili drifted kwa kiasi kikubwa, jamii, Wasimamizi wa Vikundi, na watendaji wangeweza kutafuta kuondoka kwa forking safu ya utawala wa mtandao. Utaratibu wa Vikundi na vocha msingi itategemea mikataba kutekelezwa, funguo, viungo, miundombinu, huduma za mtu wa tatu, na wajibu husika.

Mchakato wa kuondoka unaweza:

1. **Chapisha picha ya haraka:** kuhamisha kumbukumbu zilizochaguliwa, vocha, thamani, mipaka, na sera ya ada, kisha kuchapisha saini snapshot hash.
2. **Kuweka upya huduma za utawala:** kupeleka mizizi mpya ya rejista, huduma za njia, na ada yoyote ya kupitishwa au moduli za ufungaji chini ya muundo mpya wa uwajibikaji.
3. **Kujiandikisha tena:** kuruhusu Wasimamizi wa Vikundi kujiunga kwa kusajili anwani zao za Kikundi chini ya mizizi mpya bila kuhitaji wamiliki kuhamia vocha vinginevyo kazi.
4. **Wateja wa kurudisha:** Ongeza mizizi mpya kama wasifu wa mtandao unaoweza kuchaguliwa katika SDKs na viungo, na mabadiliko yoyote ya default yaliyofanywa kupitia mchakato wa utawala uliofunuliwa.
5. **Usimamizi wa kipindi cha daraja:** kudumisha njia zinazofaa mahali salama na kukataa njia ambazo zinakiuka sheria za wasifu mpya.

Lengo la kubuni ni kwamba kuondoka registry canonical haina kulemaza vinginevyo kazi Vikundi ndani. Utaratibu halisi bado unategemea utekelezaji; shirikisho ni opt-in ugunduzi na ushirikiano safu.
