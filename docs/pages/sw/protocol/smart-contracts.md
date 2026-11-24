# Mikataba mahiri

Mikataba hurekodi salio la tokeni na kutekeleza ubadilishaji wa Vikundi. [Nyaraka za programu za CLC](https://software.cosmolocal.credit/contracts/) ndizo marejeo rasmi ya utekelezaji, kwa sasa zikiwa kwa Kiingereza. Ukurasa huu unaeleza mambo ambayo washiriki wanapaswa kuelewa kabla ya kutumia mikataba hiyo.

Soma [Dhana na msamiati](/sw/introduction/concepts) kwa tofauti kati ya Kikundi cha Ahadi kinachosimamiwa na mkataba wake wa `SwapPool`, na kati ya ubadilishaji na utekelezaji wa ahadi wa Mtoaji.

## vocha (`GiftableToken`)

Vocha huunganisha salio la kidijitali na ahadi iliyochapishwa na Mtoaji. Masharti yake yanaeleza inaweza kutumiwa kwa nini, mahali na wakati inapokubaliwa, na anayewajibika. Kuunda tokeni hakuthibitishi kwamba Mtoaji anaweza kutoa bidhaa au huduma zilizoahidiwa.

Kwa utendaji wa kuunda, kuzalisha, kuchoma na kuisha muda, soma [Vocha](https://software.cosmolocal.credit/contracts/vouchers).

## Kikundi cha Ahadi (`SwapPool`)

Kikundi cha Ahadi huleta pamoja Vocha zilizochaguliwa chini ya sheria zilizochapishwa. Mkataba wake hushikilia mali na kubadilisha mali zinazokubaliwa. Amana haimpi mweka amana moja kwa moja hisa za Kikundi au haki za kulipwa, kutoa mali, kupata zawadi au kushiriki katika utawala; haki kama hizo zinahitaji masharti yaliyoelezwa kando.

### Uundaji na utegemezi wa hiari

Kagua Vocha ambazo Kikundi kinakubali, jinsi kinavyoweka viwango vya ubadilishaji, mipaka na ada zake, na anayeweza kuvibadilisha. Marejeo ya programu yanaeleza [usanidi na kufunga mipangilio ya Kikundi](https://software.cosmolocal.credit/contracts/pools).

### Malipo ya kubadilishana

Ubadilishaji uliofanikiwa hubadilisha salio husika. Hauthibitishi kwamba Mtoaji ametoa bidhaa au huduma. Kabla ya kuthibitisha, kagua mali unayotoa, unayopokea, mpokeaji, kiasi cha chini utakachopokea na muda wa mwisho wa nukuu.

Kwa mbinu za utekelezaji na rekodi za malipo ya ubadilishaji, soma [Toa nukuu na kamilisha ubadilishaji](https://software.cosmolocal.credit/contracts/swaps).

### Hesabu ya ada ya ziada

Ubadilishaji unaweza kujumuisha ada ya Kikundi na ada ya ziada ya itifaki. Kagua jumla iliyo kwenye nukuu; njia kupitia Vikundi kadhaa inaweza kuwa na ada katika kila hatua. [Marejeo ya ubadilishaji](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) yana hesabu na mfano uliofanyiwa kazi.

### Mamlaka ya wamiliki na kuboresha

Mmiliki wa Kikundi anaweza kutoa mali zinazopatikana. Mamlaka nyingine zinaweza kudhibiti uboreshaji au mipangilio. Kagua mamlaka hizi pamoja na sheria zilizochapishwa na Msimamizi kabla ya kuweka mali au kutegemea Kikundi. Kufungwa kwa mipangilio pekee hakuthibitishi kwamba mali zimefungwa kabisa.

Soma [Vikundi](https://software.cosmolocal.credit/contracts/pools) na [Thibitisha mfumo uliowekwa](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) kwa ukaguzi wa kiufundi.

## Moduli za kutathmini

Kiwango cha ubadilishaji cha Kikundi ni tofauti na thamani iliyotajwa ya Vocha na masharti ya ukombozi ya Mtoaji. Kagua mbinu iliyochaguliwa na Kikundi na anayeweza kubadilisha taarifa zinazotumika katika hesabu zake. Marejeo ya programu yanaeleza [moduli za nukuu (Quoter)](https://software.cosmolocal.credit/contracts/quoters) zinazopatikana.

## Sera ya ada na mipaka

**“Kikomo cha mkopo”** cha Programu ni salio la juu zaidi la Vocha fulani ambalo Kikundi kinaweza kushikilia. Kinaeleza uwezo wa ubadilishaji, si mkopo wa mtu binafsi au dhamana ya utekelezaji wa ahadi. Kagua [sheria na usanidi wa Kikundi](https://software.cosmolocal.credit/contracts/pools) kwa jinsi mipaka na ada zinavyotumika.

## Mdhibitiji wa ada ya mkataba

Ada ya itifaki ina mpokeaji aliyesanidiwa. Kupokea ada hiyo hakumfanyi mpokeaji kuwa Msimamizi wa Kikundi au mdhamini moja kwa moja. Soma [marejeo ya ada](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) kwa utendaji wa sasa na [utendaji wa utawala](/sw/governance/mechanics) kwa wajibu na taarifa zinazopaswa kuwekwa wazi.
