# Itifaki

Mikataba ya Protocol v1.1.0 hutoa vipengele vya kwenye blockchain vya **Itifaki ya Kuunganisha Ahadi (CPP)** inayoelezwa katika [Sura ya 1](/sw/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) ya Waraka Mweupe. Marejeleo haya yanafuata [toleo la umma la `v1.1.0`](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Tumia [Dhana na msamiati](/sw/introduction/concepts) kuelewa vipengele vya bidhaa, majukumu yenye uwajibikaji, mzunguko wa vitendo, thamani, mipaka, ada na maneno ya hali yanayotumiwa hapa.

Grassroots Economics Foundation (GEF) huendesha programu ya wavuti inayoendelea kwenye [cosmolocal.credit](https://cosmolocal.credit), ambayo ni njia mojawapo ya kutumia mikataba hii. Programu na mikataba ni vitu tofauti. Kuendesha kiolesura pekee hakufanyi GEF kuwa Mtoaji wa vocha, Msimamizi wa Kikundi, mtunza mali, mdhamini au upande wa muamala wa mtumiaji. Majukumu hayo hutegemea utekelezaji unaohusika, anwani za wadhibiti na masharti yaliyochapishwa ya Mtoaji au Kikundi. Angalia [Masharti ya Huduma](/sw/governance/terms).

## Mfumo wa utekelezaji

Moduli nyingi zenye hali huanzishwa kama **proksi za ERC-1967** kupitia `ERC1967Factory` ya Solady. Matukio mengi yanaweza kutumia utekelezaji mmoja huku yakihifadhi wamiliki, usanidi na data tofauti. Utekelezaji unaweza pia kutumia chumvi bainifu ili anwani ziweze kutabirika kabla ya utekelezaji.

Si kila mkataba hutumia proksi. `DecimalQuoter` na `SwapRouter` ni mikataba isiyo na hali inayotekelezwa moja kwa moja; `RescueVault` na `ERC1967Factory` pia hutekelezwa moja kwa moja. Moduli nyingine zenye hali zilizoorodheshwa hapa zimeundwa kutekelezwa kupitia proksi.

Kila proksi ina msimamizi anayeweza kubadilisha utekelezaji wake. Usimamizi wa proksi ni tofauti na umiliki wa mkataba na unapaswa kukabidhiwa anwani inayosimamiwa ipasavyo. Uboreshaji unaweza kubadilisha tabia hata baada ya Kikundi kufunga sehemu za usanidi, kwa hiyo watumiaji wanapaswa kutathmini mmiliki wa Kikundi na msimamizi wa proksi.

Usaidizi wa EIP-165 pia hutegemea mkataba; haupatikani kila mahali. Unapatikana katika `GiftableToken`, quoter zote tatu, `OracleRelay`, `Limiter`, rejesta na faharasa kadhaa, `Splitter`, `EthFaucet`, `PeriodSimple` na `RescueVault`. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` na `CAT` hazitoi `supportsInterface` katika v1.1.0.

## Ramani ya vipengele

- **GiftableToken** — usambazaji wa ERC20, uzalishaji, uchomaji na utendaji wa hiari wa muda wa matumizi. Mtoaji anaweza kutumia tukio lake kama Vocha, lakini mkataba pekee hauelezi kinachoweza kukombolewa, na nani, wapi au chini ya masharti gani.
- **SwapPool** — hifadhi ya tokeni na injini ya kukamilisha ubadilishaji. Utekelezaji unaweza kuunganisha vipengele vya uratibu, uthamini, ada, mipaka na ada ya itifaki, au kuacha vitegemezi vinavyokubaliwa bila kuwekwa.
- **DecimalQuoter, RelativeQuoter na OracleQuoter** — moduli za uthamini zinazoweza kubadilishwa kwa usawa wa desimali, viwango vinavyosimamiwa na mmiliki au viwango vinavyotokana na oracle. `OracleRelay` inaweza kuwasilisha chanzo kimoja cha data cha nje kwa `OracleQuoter`.
- **FeePolicy na Limiter** — kanuni za hiari za ada kwa jozi na mipaka ya salio la tokeni kwa kila Kikundi.
- **ProtocolFeeController** — kiwango cha hiari na kinachoweza kubadilishwa cha ada ya itifaki, mpokeaji na hali ya kuwashwa ambavyo Kikundi kinaweza kutumia wakati wa kukamilisha ubadilishaji.
- **TokenUniqueSymbolIndex, AccountsIndex na ContractRegistry** — vipengele vya kugundua tokeni, akaunti na anwani. `CAT` hurekodi mpangilio wa tokeni za ukamilishaji unaopendelewa na akaunti.
- **SwapRouter** — hukokotoa tu makadirio ya ingizo au matokeo kamili kwenye njia inayopendekezwa ya Vikundi vingi. Haihifadhi tokeni wala kutekeleza ubadilishaji.
- **Splitter, EthFaucet, PeriodSimple na RescueVault** — zana saidizi za usambazaji, ufadhili wa gesi, udhibiti wa kiwango na urejeshaji wa mali.

Mikataba inaweza kuunganishwa kwa njia mbalimbali. Kuorodheshwa kwenye rejesta, makadirio au njia kwenye grafu si dhamana kwamba muamala utatekelezwa: ukwasi wa sasa, mipaka ya tokeni, ada, hali ya oracle, idhini, muda wa mwisho, hali ya mtandao na usanidi wa kila Kikundi bado hutumika.
