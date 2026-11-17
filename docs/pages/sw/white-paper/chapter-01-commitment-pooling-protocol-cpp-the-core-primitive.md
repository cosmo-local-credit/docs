## **1. Itifaki ya Kuunganisha Ahadi (CPP): msingi mkuu**

**Mfano wa akili:** Kikundi cha Ahadi ni mpangilio wa kudhibitiwa kwa kukubali vocha au mali nyingine, kuchapisha sheria za kubadilishana, kuhifadhi hisa, na kuwezesha swaps. Baada ya muda, wamiliki huwasilisha vocha kwa watangazaji wao kwa ajili ya kutimiza mahitaji yao katika ulimwengu halisi. Kubadilishana fedha na kukamilika kwa wachapishaji ni mizunguko tofauti ya maisha.

CPP huunganisha thamani kupitia ahadi zilizoelezwa wazi. Mfano huu ni kujadiliwa katika [Uchumi wa Msingi: Kutafakari na Mazoezi](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 Ahadi ni nini?**

Ushirikiano ni ahadi ya chama kinachojulikana ya utoaji wa baadaye—kwa mfano chakula, usafirishaji, kazi, uhifadhi, au bidhaa nyingine halali, huduma, faida, au utendaji. A **vocha** ni ishara au rekodi iliyowakilishwa kama ahadi hiyo kwa masharti yaliyochapishwa.

Mikataba ya ishara kurekodi mitambo digital. Masharti ya vocha huamua mtoaji, Utoaji, uwezo, mahali, wakati, vizuizi, uwasilishaji, utekelezaji, malalamiko, na mchakato wa ukomo.

### **1.2 Kikundi cha Ahadi ni nini?**

Kikundi cha Ahadi ni mpangilio uliowekwa. Inaweza kusimamiwa na mtu binafsi, ushirika, kikundi cha jamii, shirika la umma, shirikisho, multisig, operator wa huduma, au muundo mwingine unaohusika.

Majukumu na mamlaka husika ni:

- **Msimamizi wa Kikundi:** kuchapisha na kusimamia sheria za Kikundi na dhamana yoyote iliyochukuliwa wazi;
- **Mmiliki wa Kikundi:** ana mamlaka ya sasa ya mmiliki wa `SwapPool`;
- **Msimamizi wa proxy:** inaweza kuboresha utekelezaji wa proxied;
- **Wasimamizi wa utegemezi:** kudhibiti kumbukumbu zilizopangwa, quoters, limiters, au vipengele vya ada;
- **Mwendeshaji wa huduma ya njia:** anaweza kugundua njia, kutoa nukuu, kuiga, kutayarisha, kuwasilisha na kurekodi njia zilizoidhinishwa tofauti ndani ya wigo wake uliochapishwa; na
- **mdhamini:** inachukua wajibu uliofafanuliwa tu kupitia masharti yaliyochapishwa, yaliyofadhiliwa.

CPP makundi Kikundi kazi katika dhana nne:

- **Msaidizi:** kukubali ishara au vocha mkono.
- **Tathmini:** kuchapisha njia inayotumiwa kwa kiwango cha ubadilishaji au nukuu.
- **Mipaka:** kutumia mipaka ya sasa ya usawa wa tokeni za Kikundi au udhibiti mwingine uliowekwa tofauti.
- **Kubadilishana:** kuweka hisa, kutekeleza swaps, akaunti kwa ajili ya ada, na kutoa rekodi za shughuli.

Protocol v1.1.0 hutekeleza kazi hizi kupitia `SwapPool` na vitegemezi vya hiari. `Limiter` yake ya sasa huweka kikomo cha salio la tokeni katika Kikundi; haitoi mipaka inayobadilika kwa muda, ya kila akaunti au ya ubadilishaji katika mtandao mzima. `SwapRouter` yake ya sasa ya Solidity hukokotoa nukuu za Vikundi vingi; haitekelezi ubadilishaji.

CLC App na CLC Core za uzalishaji hutekeleza uelekezaji katika kiwango cha programu kwenye mnyororo mmoja juu ya mikataba hiyo. CLC Core hugundua njia, husoma Vikundi vilivyochaguliwa katika block iliyowekwa, hutayarisha na kuiga kundi la miamala ya Mkoba wa Calibur litakalotiwa sahihi, huratibu uwasilishaji na kuweka pamoja rekodi za matokeo ya ukamilishaji. Usanidi wa sasa wa umma hutafuta hadi ubadilishaji tatu wa Kikundi. Kila Kikundi hubaki kikisimamiwa kwa kujitegemea, na kila hatua bado hutekelezwa moja kwa moja kupitia `SwapPool` yake.

Muundo mpana unaopendekezwa wa CPP unaweza kuongeza mipaka inayobadilika kwa muda, vidhibiti vya akaunti, njia za HTLC au escrow kati ya vikoa, usawazishaji wa kiotomatiki wa Vikundi na ulinganishaji wa kundi. Hivi ni vipengele vinavyopendekezwa, si maelezo ya `Limiter` ya sasa, router ya Solidity au mtiririko wa njia wa App/Core.

### **1.3 Utendaji wa sasa wa ubadilishaji wa moja kwa moja**

Sasa moja kwa moja Kikundi swap:

1. inachunguza rejista ya hiari ya ishara za kuingia na kutoka;
2. kipimo cha mapato yaliyopokea;
3. hupata nukuu kutoka kwa quoter iliyowekwa au hutumia parity ya kitengo cha ghafi;
4. inachunguza usawa wa ishara ya kikundi inayotokea dhidi ya limiter ya hiari;
5. Hesabu ada ya Kikundi na ada yoyote ya ziada ya itifaki;
6. inachunguza hesabu ya pato inayopatikana;
7. kuhamisha ada ya mkataba na pato na akaunti za ada ya Kikundi; na
8. hutoa matukio swap.

Taarifa ni kipimo cha shughuli, si uthibitisho wa uwezo wa mtoaji, thamani ya ukombozi, thamani ya haki, cash convertibility, au dhamana.

### **1.4 Matumizi makubwa zaidi**

Vikundi vya Ahadi inaweza kusaidia kubadilishana kwa jamii, uzalishaji, misaada ya pamoja, mipango ya umma, na miundo mingine ya uwajibikaji. Bidhaa ya mkopo iliyosajiliwa tofauti inaweza kutumia vocha kama dhamana au chombo cha malipo, lakini itahitaji masharti ya ziada na maalum ya shughuli. Kutuma kwa kawaida, amana ya Jumla, kubadilishana Jumla, uwasilishaji wa fidia, kutimiza, au malipo sio mkopo au malipo ya moja kwa moja.

CPP ni lengo la kubadilishana akaunti na rekodi za shughuli auditable, si speculative churn. Rekodi za mfululizo bado hazithibitishi utekelezaji wa ulimwengu halisi au athari za kijamii.
