# Mikataba mahiri

Ukurasa huu inaelezea mikataba kuu Kikundi na vocha katika itifaki v1.1.0. tabia ya mkataba hutoa settlement mitambo; haibadilishi taarifa za mtoaji, sheria za kikundi, au masharti mengine ya shughuli ambayo yanatumika kwa matumizi maalum.

Matumizi [Dhana na msamiati](/sw/introduction/concepts) kutofautisha Kikundi cha Ahadi inayodhibitiwa na `SwapPool`, na uhamisho wa swap kutoka kwa uwasilishaji wa ukombozi, utekelezaji, na ukomo.


## vocha (`GiftableToken`)

`GiftableToken` ni ishara ya ERC20 na mitambo ambayo mtoaji anaweza kutumia kwa vocha:

- **Kupanga kwa ruhusa** Mmiliki anaweza kuamua waandishi ambao wanaweza kutoa ishara na `mintTo`.
- **Kupitisha muda** Kuisha kwa `0` humaanisha hakuna mwisho wa kiwango cha mkataba. Vinginevyo, uhamisho, minting, na kuchoma kurudi wakati au baada ya muhuri wa wakati umewekwa. Mtu yeyote anaweza kuendelea terminal `expired` hali kwa kupiga `applyExpiry` moja kwa moja.
- **Uhasibu wa usambazaji** `totalMinted` na `totalBurned` huonyesha shughuli ya usambazaji ya pamoja. Wamiliki-tu kazi `burn` burns tokens uliofanyika na anwani ya mmiliki.

Mkataba wa ishara hufanya **si** kutambua bidhaa au huduma za mtoaji, kuweka thamani ya ukombozi, kuthibitisha uwezo, au ahadi ya uongofu wa fedha. `GiftableToken` inakuwa dhamana inayoweza kukombolewa tu kupitia masharti na mwenendo wa mtoaji uliochapishwa tofauti. Wasambazaji wanaendelea kuwajibika kwa kuelezea kwa usahihi na kuheshimu masharti hayo.


## Kikundi cha Ahadi (`SwapPool`)

`SwapPool` ni ishara hazina na swap-malipo injini. Ingawa ina wazi ERC20 metadata kwa Kikundi jina, ishara, na decimals, v1.1.0 mkataba haina minted Kikundi-share tokens. Kioevu hutolewa kwa kuhamisha tokens katika Hifadhi, na mmiliki wa mkataba anaweza kuondoa fedha zilizopo.

### Uundaji na utegemezi wa hiari

| Ufafanuzi | Wakati unset | Sehemu ya anwani ya kufungwa |
| --- | --- | --- |
| `tokenRegistry` | Kila ishara inaweza kupitisha hundi ya utunzaji wa Kikundi | Ndiyo |
| `tokenLimiter` | Amana hazina kiwango cha juu cha usawa wa mkataba | Ndiyo |
| `quoter` | Kiasi cha input ghafi ni kuchukuliwa kama kiasi cha output ghafi quoted | Ndiyo |
| `feePolicy` | Ada Kikundi ni sifuri | Ndiyo |
| `feeAddress` | Ada za mkusanyiko hazipatikani kama ada zinazoweza kuchukuliwa kwa mpokeaji aliyechaguliwa | Ndiyo |
| `protocolFeeController` | Hakuna ada ya utaratibu inatozwa | Hapana |

Bit tano seal lock kudumu sasa `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry`, na `tokenLimiter` anwani dhidi ya seti zao husika. `protocolFeeController` na `feesDecoupled` ni thamani initialization na si miongoni mwa bits hizo tano.

Kufunga nafasi ya anwani hakuwezi kufungia mkataba kwenye anwani hiyo. Usajili uliofungwa, kizuizi, quoter, au sera ya ada na mdhibiti wa itifaki ya ada bado inaweza kubadilika ikiwa utawala wake mwenyewe inaruhusu. Msimamizi proxy wa ERC-1967 pia anaweza kuboresha utekelezaji wa Kikundi. Kwa hiyo madai ya kutokuweza kubadilika yenye maana inategemea utawala wa mmiliki wa Hifadhi, msimamizi wa proxy, na kila utegemezi uliopangwa.

### Malipo ya kubadilishana

Kwa kubadilishana, `SwapPool`:

1. Inagundua kuwa ishara za kuingia na kutoka hupita rejista ya hiari na inajaribu kuingia iliyoombwa dhidi ya kikomo cha hiari cha kikundi.
2. Huondoa ishara ya kuingia kutoka kwa simu na kupima kiasi kweli kupokea. Bei hutumia kiasi hiki kilichopimwa, ikiwa ni pamoja na kwa ishara za malipo ya uhamisho.
3. Kupata quotation ya jumla kutoka quoter iliyowekwa, au kutumia kiasi ghafi kupokea wakati hakuna quoter imewekwa.
4. Hesabu ya Jumla ya ada na nyingine yoyote ya mkataba ada, kisha kuangalia upatikanaji wa tokeni ya pato liquidity.
5. Inatuma ada ya itifaki moja kwa moja kwa mpokeaji wa itifaki iliyowekwa, huhamisha pato halisi la jina kwa mpokeaji, na kurekodi ada ya Kikundi wakati anwani ya ada imewekwa.
6. Hutoa urithi `Swap` tukio na kina zaidi `SwapSettlement` tukio.

`SwapSettlement` inarekodi mwanzilishi, tokeni zote mbili, input kupimwa, pato jumla quoted, pato jina kutumwa, pato kweli kuchukuliwa katika mpokeaji, Kikundi ada, na ada ya itifaki. Matokeo ya jina na uchunguzi inaweza kutofautiana wakati tokeni ya pato yenyewe inadai ada ya uhamisho. uwanja `fee` katika urithi `Swap` tukio ni tu Kikundi ada.

Sababu sita `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` overload ni barabara ya utekelezaji bounded. Inarudi nyuma baada ya tarehe ya kumalizika au wakati ongezeko la usawa uliotambuliwa wa mpokeaji ni chini ya `minAmountOut`. Integrators inapaswa kupendelea kwa sababu quote kuonyeshwa ni ya muda: quoter hali, sera ya ada, umaarufu, mipaka, na Oracle data inaweza kubadilika kabla ya utekelezaji. Mipaka ya awali ya hoja tatu na nne haitoi mipaka hiyo ya kiwango cha kikundi.

### Hesabu ya ada ya ziada

Gharama za mkusanyiko na taratibu zote mbili huondolewa kutoka kwa pato la orodha ya jumla. Ada ya utaratibu ni **si kuchongwa nje ya ada ya kikundi**, na kikundi kuhifadhi ada yake kamili mahesabu.

Kwa mfano, kwa nukuu ya jumla ya vitengo 100:

- Ada ya Jumla ya 2% huja kwa vitengo 2 kwa Jumla;
- kiwango cha 10% cha itifaki inayotumika kwa ada hiyo ya Kikundi hutumia vitengo vingine vya 0.2 moja kwa moja kwa mpokeaji wa itifaki; na
- mtumiaji anapokea 97.8 vitengo.

Muhtasari wa mkataba hutumia kiwango cha juu cha ada ya Kikundi kilichohesabiwa na msingi wa ada ya 1% inayodhaniwa. Hii inazuia ada ndogo sana kikundi kutoka kupunguza utaratibu wa mahesabu karibu sifuri. Malipo yasiyo ya halali kuchanganywa kurudi na `FeeTooHigh`, na nukuu ambayo ingekuwa settled katika sifuri kurudi na `InsufficientOutput`.

### Mamlaka ya wamiliki na kuboresha

Mmiliki wa mkataba anaweza kukusanya ada zilizopatikana za kikundi na anaweza kupiga `withdrawLiquidity` kuhamisha ishara yoyote ya kikundi inayopatikana kwa anwani iliyochaguliwa isiyo ya sifuri. Wakati ada huondolewa, ada zilizopatikana zinahifadhiwa kutoka kwa njia hii ya uondoaji wa umaarufu; vinginevyo wanabaki sehemu ya usawa wa kikundi. Washiriki wa kundi hawapaswi kutafsiri fedha zilizohifadhiwa kuwa zimefungwa kwa kudumu isipokuwa ukaguzi wa utawala wa ziada unaoweza kuthibitishwa utathibitisha matokeo hayo.

Ufungaji wa usanidi hauondoi uwezo huu wa kuondoa fedha. Pia haina kuondoa tofauti ERC-1967 proxy msimamizi ya kuboresha nguvu.


## Moduli za kutathmini

Wote watatu quoters kutekeleza mbele na kurudi quotation kazi kutumika na `SwapPool` na `SwapRouter`:

- **`DecimalQuoter`** — Utaratibu decimal stateless chini ya 1:1 thamani-parity dhana.
- **`RelativeQuoter`** Normalization decimal plus wamiliki-kusimamiwa uwiano wa bei faharisi. Kiashiria unset ishara default kwa parity.
- **`OracleQuoter`** Hesabu kila ishara kupitia Oracle iliyowekwa, na kikomo cha utulivu wa jumla au kwa kila ishara na multiplier ya pato la 0.9-to-1.0 ya hiari.

`OracleQuoter` ni ya kuaminika tu kama uteuzi wake wa malisho na utawala. Jina na mwelekeo wa malisho lazima uwe sawa, decimals lazima kuwa sahihi, updates lazima kuwa chanya na safi, na utawala unaweza kuchukua nafasi ya malisho au kubadilisha mipangilio ya freshness. Uboreshaji wa chanzo, updates kucheleweshwa, mapumziko ya mtandao, mpangilio sahihi wa jozi, au kupoteza ufunguo Oracle-mmiliki inaweza kusababisha quotes mbaya au kufanya swaps kurejea.

`OracleRelay` ni chaguo moja ya kulisha, reli ya mzunguko wa mwisho sambamba na interface Oracle. Mwandishi aliyechaguliwa huchapisha tena thamani za chanzo; hakuna uthibitisho wa msalaba na hakuna kumbukumbu zilizohifadhiwa. Kituo hicho kinakubali maadili ya mwandishi kwa kuangalia tu wakati ujao. `OracleQuoter` huru kukataa majibu yasiyo ya chanya au ya zamani, wakati mmiliki wa relay anaweza kugeuza mwandishi au kufuta raundi ya sasa. Kwa hiyo watumiaji wanapaswa kutathmini chanzo cha chakula, mwandishi wa relay, mmiliki wa relay, na mchakato wa ufuatiliaji.


## Sera ya ada na mipaka

`FeePolicy` kuhifadhi ada default katika sehemu kwa milioni na optional directional pair overrides. Mmiliki wake anaweza kubadilisha viwango hivyo isipokuwa utawala nje ya mkataba kupunguza mamlaka hiyo.

`Limiter` kuhifadhi kiasi cha juu cha pesa kwa ishara katika anwani maalum Kikundi. Mmiliki au mwandishi aliyeidhinishwa anaweza kubadili kikomo hicho. Kizuizi cha sifuri huzuia amana wakati limiter iko hai; unset limiter huacha amana bila kikomo.

Mipaka hii kuelezea configured **mfiduo wa ishara** katika Kikundi. Wao wenyewe hawawezi kuorodhesha usawa wa ishara kuwa mkopo au deni la kisheria, kuthibitisha uwezo wa mtoaji, au kuhakikisha utekelezaji. Maswali hayo yanategemea masharti ya mtoaji, sheria za kundi, shughuli iliyowasilishwa kwa mtumiaji, na sheria inayotumika.


## Mdhibitiji wa ada ya mkataba

`ProtocolFeeController` ni sehemu ya ada ya kiwango cha utekelezaji ya hiari. Mmiliki wake anaweza kubadilisha kiwango cha itifaki na mpokeaji au kulemaza ada. Mdhibiti mmoja unaweza kugawanywa na Vikundi nyingi, lakini itifaki hauhitaji mdhibiti mmoja kwa mtandao.

Wakati kazi na configured, mpokeaji ni kulipwa moja kwa moja katika tokeni pato wakati wa kila mafanikio swap. Jinsi mpokeaji huyo anatumia fedha—kwa mfano kwa shughuli, ufuatiliaji, msaada wa upungufu wa fedha, au kusudi jingine lililochapishwa—ni suala la utawala, si dhamana inayotolewa na mkataba.
