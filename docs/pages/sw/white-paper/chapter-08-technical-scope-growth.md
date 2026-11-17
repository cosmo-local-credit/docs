## **8. Ufikiaji wa kiufundi na ukuaji**

Sura hii hutenganisha huduma ya sasa ya uelekezaji katika uzalishaji na ukuaji wa hiari au unaopendekezwa. Uwezo wa sasa unaoelezwa hapa ni mahususi kwa utekelezaji wa umma wa CLC App/Core; si kipengele cha moja kwa moja cha mikataba ya Protocol v1.1.0 wala utekelezaji mwingine.

Utekelezaji wa sasa wa umma unajumuisha:

- ugunduzi unaotumia grafu wa vocha zinazoweza kufikiwa kupitia Vikundi vinavyolingana;
- nukuu halali za block iliyowekwa kwa njia zilizochaguliwa kwenye mnyororo mmoja;
- hesabu ya ada za Kikundi na itifaki, kiwango cha chini cha matokeo na muda wa mwisho kwa kila hatua;
- uigaji wa kundi lote, utiaji sahihi wa mshiriki na utekelezaji wa Calibur kupitia relayer;
- muamala mmoja kwenye mnyororo huo unaorejesha simu zote za njia ikiwa simu moja itashindwa; na
- risiti zilizojumuishwa na upatanisho wa matukio ya ukamilishaji kwa kila hatua.

Maeneo ya uwezekano wa ukuaji ni pamoja na:

- adapter za escrow zenye muda au HTLC kwa utekelezaji kati ya vikoa ambapo ukamilishaji atomiki haupatikani;
- rejesta au wasifu wa ziada wa sera na uelekezaji kati ya wasifu;
- usawazishaji wa mali za Kikundi unaofanywa kwa hiari na ulinganishaji wa kundi;
- interfaces na zana za sera kwa kikundi ndogo au binafsi;
- kumbukumbu za kufuatilia kwa vocha, Vikundi, njia za kiwango cha ubadilishaji, mipaka, wasimamizi, na ada;
- viunganisho vya mtoa huduma wa malipo maalum kwa utekelezaji, mtiririko wa malipo, na udhibiti wa uhalali;
- uhusiano wa mali ya fungible na vituo vya nje vya usawa wa fedha kwa ajili ya kusawazisha upya na usawa wa malipo; na
- kubadilishana fedha za kifedha zinazohusika na sera kwa ajili ya ulinzi wa kupitishwa, gharama za uendeshaji, au amri za upungufu wa fedha.

Bei za soko la nje haziwezi kuamua ni kiasi gani cha mkopo wa mtoaji chini ya masharti ya vocha. Hifadhi inaweza kutumia marejeleo ya nje ya ulinzi kwa mali ya fungible, lakini njia yake ya kiwango cha ubadilishaji iliyochapishwa, mipaka, ada, na hesabu itaongoza nukuu zake.

### **8.1 Huduma ya sasa ya njia na kanuni pana zaidi**

**Ugunduzi.** CLC Core hudumisha grafu iliyopatanishwa kutokana na katalogi zilizosanidiwa, mahusiano ya rejesta, vigezo vya Vikundi, ada, mipaka, salio na matukio ya mnyororo. Hukadiria kile ambacho Mkoba wa kipindi unaweza kufikia na kutia alama taarifa zilizopitwa na wakati. Usanidi wa umma hutafuta njia zenye hadi hatua tatu. Ugunduzi si ahadi inayoweza kutekelezwa.

**Nukuu halali.** Kwa njia iliyochaguliwa, CLC Core husoma Vikundi vinavyoshiriki katika block moja iliyowekwa na kurudia hesabu zinazosaidiwa za `SwapPool`. Huainisha ada za Kikundi na itifaki, huweka kiwango cha chini cha matokeo kwa kila hatua na muda wa mwisho, hutayarisha simu za Mkoba na kuiga kundi lote. Tokeni, quoter, Mikoba au hali za Kikundi zisizosaidiwa hukataliwa.

**Utekelezaji wa sasa.** Mshiriki hutia sahihi kundi la Calibur lenye kuweka upya idhini, kutoa idhini na utoaji wenye mipaka kwa kila hatua. Relayer huwasilisha muamala mmoja kwenye mnyororo huo huku `revertOnFailure` ikiwa imewashwa. Hii huleta tabia ya yote-au-hakuna katika kiwango cha muamala kwa njia ya sasa. Si uatomiki kati ya minyororo, uelekezaji wa HTLC au escrow, usawazishaji wa kiotomatiki wala ulinganishaji.

**Risiti na uendeshaji.** App huweka njia chini ya kitambulisho kimoja cha ufuatiliaji na kurekodi hali ya muamala, mpangilio wa hatua, Vikundi, jozi za tokeni, kiasi kilichonukuliwa na kilichokamilishwa, ada za Kikundi, ada za itifaki na salio la kati. Huduma hufuatilia ubora wa sasa wa grafu, matokeo ya kuorodhesha njia na nukuu, kushindwa kwa uigaji, muda na marekebisho ya upatanisho, pamoja na wanachama wa faharasa ambao hawajatatuliwa au hawajulikani. Taarifa za uendeshaji hazithibitishi utekelezaji wa Mtoaji.

**Wasifu wa mtandao.** Mteja anaweza kusaidia zaidi ya mzizi mmoja wa rejesta au wasifu wa sera. Utamweleza mshiriki wasifu, washirika, adapter, vizuizi na waendeshaji wa huduma wanaowajibika ambao nukuu inatumia. Njia kati ya wasifu itahitaji kutimiza masharti yote ya kila hatua inayohusika.

**Sera ya njia.** Mwendeshaji anayewajibika anaweza kuondoa vitegemezi au washirika wasio salama na kutumia vikomo katika kiwango cha njia, masharti ya taarifa kuwa za sasa na vigezo vya afya. Ishara hizi zitasaidia uamuzi; hazitahakikisha utekelezaji wala ulinzi dhidi ya hasara.

**Ada na mipaka.** Nukuu ya sasa huainisha ada za Kikundi na ada yoyote ya ziada ya Protocol kwa kila hatua. App ya umma kwa sasa haiongezi ada tofauti ya huduma ya uelekezaji. Ada yoyote ya huduma ya baadaye itawekwa wazi kando. Utekelezaji hukataa nukuu zilizokwisha muda au zinazokiuka mipaka.

**Uatomiki na urejeshaji kati ya vikoa.** Pale njia ya baadaye haiwezi kutumia kundi atomiki la sasa kwenye mnyororo mmoja na badala yake ikatumia HTLC au escrow, huduma itaweka wazi muda wa mwisho, njia za kusitisha, wadhibiti wanaowajibika, taratibu za matukio na hatari zilizobaki.

**Ulinganishaji wa kundi na usawazishaji unaopendekezwa.** Huduma ya hiari inaweza kukusanya nia za usawazishaji na kutafuta mizunguko au minyororo inayolingana. Itafanya yafuatayo:

1. kuchapisha risiti inayoweza kusomwa na mashine inayotambua mizunguko iliyotekelezwa, mali, kiasi, stempu za wakati wa tathmini, na ada;
2. kutekeleza mipaka iliyopitishwa kwa kila kipindi na sera za mpatanishi;
3. kukataa shughuli ambayo inakiuka ruhusa yoyote ya kushiriki, mipaka, au hesabu inayopatikana; na
4. kuhifadhi taarifa na risiti bainifu kwa ukaguzi na kushughulikia migogoro.

**Masharti ya SDK na kiolesura.** Muunganisho wa njia unaoweza kutumiwa tena lazima utoe ulinganishaji bainifu kutoka nukuu hadi risiti, ukaguzi wa kanuni zisizobadilika kwa kila hatua, misimbo ya makosa inayoeleweka na rekodi zinazofaa kwa ukaguzi. Utekelezaji wa sasa wa App/Core katika uzalishaji hutoa kazi hizi kwa wasifu wake. `SwapRouter` ya Solidity ya Protocol v1.1.0 hubaki ya nukuu pekee na haitekelezi njia.

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
