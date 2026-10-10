## A. Mfano uliopendekezwa wa kipimo na ada

Kiambatisho hiki kinafafanua mfumo wa kupima uliopendekezwa. Protocol v1.1.0 haina kurekodi utekelezaji wa mtoaji, ukomo kwa ulimwengu halisi, au kila uwanja wa data unaohitajika hapa chini.

### Maelezo ya tukio na hisa

Kwa ajili ya kitambulisho darasa *j*, cohort au kipindi *t*, na kueleza utaratibu wa thamani *m*:

- `O_{j,t,m}`: thamani ya mikopo inayostahiki iliyobaki kwenye kikomo cha kipimo.
- `X_{j,t,m}`: thamani ya swaps za mkusanyiko zilizokamilishwa katika kipindi hicho.
- `P_{j,t}`: Pointi zilizotolewa kwa halali kwa mtoaji kwa ajili ya fidia.
- `F_{j,t}`: vifurushi vilivyowasilishwa na utekelezaji wa mtoaji uliothibitishwa tofauti.
- `G_{j,t}`: vifaa vilivyokamilika na rekodi ya ukomo kuzuia matumizi tena.

`O` haiwezi kuhitimishwa kutoka tokeni ugavi peke yake. Sera ya upimaji lazima itambue mtoaji anayewajibika na itoe, kama inavyotumika, hesabu inayomilikiwa na mtoaji, vitengo vilivyochomwa, vitengo vilivyoisha, vitengo vilivyoondolewa, mizani ya majaribio, mizani isiyoweza kupatikana, na ishara ambazo masharti yake hayafanyi ahadi ya mtu wa tatu.

Kila kipimo thamani lazima kuchapisha kitengo, chanzo, mbinu ya thamani, timestamp, na matibabu ya viwango vya kubadilishana kikundi tofauti. Uhamisho kwenye mnyororo unaweza kusaidia `X` au ushahidi wa uwasilishaji; haina mwenyewe kuanzisha `F` au `G`.

### Hatua za utekelezaji kwa msingi wa vikundi

Kwa kundi la maonyesho ya ukombozi halali:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Matumizi sawa kufungwa au kukomaa cohort katika kila numerator na denominator. Ripoti kukataliwa, kuondolewa, kumalizika, kujadiliwa, sehemu kukamilika, kurekebishwa, na bado wazi mawasilisho tofauti.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

utekelezaji latency vipimo huduma issuer baada ya uwasilishaji. Muda wa kuhifadhi ni kipimo tofauti na haipaswi kutambuliwa kama latency ya ukombozi.

### Vipimo tofauti vya kasi

Kasi iliyopendekezwa ya ukomo kwa ahadi inaweza kuhesabiwa tu wakati `O` na thamani iliyokamilika hutumia njia ile ile ya kutathmini:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Hatua ya shughuli za kubadilishana kikundi ni tofauti:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Hakuna thamani yoyote kuthibitisha athari ya kijamii, uwezo wa mtoaji, faida, au cash convertibility.

### Mapendekezo ya mapato ya mtandao

Hebu:

- `PF_t` ni jumla ya ada za mkusanyiko zinazozalishwa wakati wa kipindi;
- `NR_t` ni mapendekezo ya mtandao rake kweli kupokea kama sehemu kufunuliwa ya hizo Kikundi ada;
- `RF_t` separate mapendekezo ya njia au huduma ada kweli kulipwa; na
- `χ_t` ni sehemu ya kipimo cha mapato yaliyopokelewa ambayo ni halali na inaweza kubadilishwa kwa matumizi yaliyotajwa ya fedha baada ya gharama na vizuizi vya sera.

Kutokana na mapendekezo ya bajeti ya mtandao:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Usiongeze `PF_t` kwa `NR_t`: rake ni uhamisho kutoka ada ya kikundi ya jumla na vinginevyo ingehesabiwa mara mbili. Sasa Protocol v1.1.0 badala yake inasaidia ada ya mkataba wa ziada; mapato yake lazima yatangazwe tofauti na mtindo huu uliopendekezwa wa rake.
