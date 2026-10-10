## **9. Uchumi unaopendekezwa wa mipango ya ukwasi**

Sura hii inaelezea mfano wa wakati ujao, uliochukuliwa kando. Si huduma ya sasa ya programu, ofa, ahadi ya kurudi, au haki iliyoundwa kwa kuweka katika `SwapPool`.

### **9.1 Chanzo cha mapato kilichopendekezwa**

Bajeti ya mitandao ya baadaye inaweza kupokea:

1. a kufunuliwa **Rake mtandao** kuchukuliwa kama sehemu ya ada zilizopokelewa na Vikundi kushiriki;
2. malipo tofauti ya njia au huduma kutoka kwa huduma za pamoja zilizotekelezwa; na
3. mapato mengine yaliyopitishwa kwa wazi.

Ada za jumla za Vikundi zinazobaki kwenye Vikundi si mapato ya mtandao. Protocol v1.1.0 ya sasa hutumia mfano tofauti: ada ya hiari ya itifaki huongezwa juu ya ada ya Kikundi na hutumwa moja kwa moja kwa mpokeaji aliyesanidiwa.

### **9.2 Mfano wa kihisabati wa sehemu ya mtandao**

Ikiwa Jumuiya inayoshiriki inatoza ada ya Jumuiya ya 2.00% na jumuiya iliyopitishwa ya mtandao hupokea 20% ya ada hiyo ya Jumuiya, kiwango cha kweli cha jumuiya ya mtandao kilichopendekezwa juu ya thamani iliyoelekezwa ni:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Ikiwa 25% ya rasilimali zilizopokelewa na rasilimali za ada ya huduma zinastahili na zinaweza kubadilishwa kwa matumizi yaliyoainishwa kwa pesa baada ya gharama, sehemu ya fedha inayoweza kutumiwa ya rasilimali ya 40 bps ni karibu 10 bps.

Mapendekezo ya mapato ya mtandao ni:

`network_rake_received + routing_or_service_fees_received`

Usiongeze ada ya Jumla ya Gross kwenye mtandao wa rake: rake ni uhamisho kutoka kwa ada hizo na vinginevyo ingehesabiwa mara mbili.

### **9.3 Haki za programu ya upungufu wa fedha**

Programu iliyopitishwa kwa njia tofauti inaweza kutegemeza rekodi za Hifadhi, huduma za kuelekeza, ufuatiliaji, au amri nyingine. Masharti yake yatahitaji kufunua:

- ikiwa uhamisho ni zawadi, zawadi, mkopo, mchango unaoweza kurudishwa, au ununuzi;
- utunzaji na udhibiti;
- sheria za kujiondoa, kurudisha, hasara, na vipaumbele;
- usawa wa ada na tuzo;
- haki za utawala;
- mbinu za kupima na kutoa ripoti; na
- kusimamishwa, kumalizika, na kurekebishwa.

Sasa `SwapPool` haina kuunda kikundi-shared ishara au moja kwa moja mchangiaji haki. Kiwango chochote cha ex-post kinapaswa kutegemea mapato na hasara zilizopatikana, haipaswi kuwasilishwa kama pato lililoahidiwa, na inaweza kuwa sifuri au hasi.
