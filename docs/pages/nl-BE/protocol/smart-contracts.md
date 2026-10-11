# Smart contracts

Deze pagina beschrijft de belangrijkste Fonds- en waardeboncontracten in Protocol v1.1.0. De contracten verzorgen de technische afwikkeling. Ze vervangen niet de informatie van de uitgever, de regels van een Fonds of andere voorwaarden die voor een bepaalde transactie gelden.

Lees [Begrippen en woordenschat](/nl-BE/introduction/concepts) om het verschil te begrijpen tussen een beheerd Commitmentfonds en `SwapPool`, en tussen swapafwikkeling, aanbieding ter inwisseling, nakoming en afboeking.


## Waardebon (`GiftableToken`)

`GiftableToken` is een ERC20-token met functies die een uitgever voor een waardebon kan gebruiken:

- **Geautoriseerde uitgifte** — De eigenaar kan schrijvers aanduiden die met `mintTo` tokens mogen uitgeven.
- **Optionele vervaldatum** — Een vervaldatum van `0` betekent dat er op contractniveau geen vervaldatum is. Anders mislukken overdrachten, uitgiftes en verbrandingen op of na het ingestelde tijdstip. Iedereen kan de definitieve status `expired` vastleggen door rechtstreeks `applyExpiry` aan te roepen.
- **Boekhouding van de voorraad** — `totalMinted` en `totalBurned` tonen de cumulatieve uitgifte en verbranding. Alleen de eigenaar kan met `burn` tokens verbranden die op het adres van de eigenaar staan.

Het tokencontract vermeldt **niet** welke goederen of diensten de uitgever aanbiedt, bepaalt geen inwisselwaarde, bewijst geen leveringscapaciteit en belooft geen omzetting in geld. Een `GiftableToken` wordt alleen een inwisselbare verbintenis door de afzonderlijk gepubliceerde voorwaarden en het handelen van de uitgever. Uitgevers blijven verantwoordelijk voor een juiste beschrijving en de naleving van die voorwaarden.


## Commitmentfonds (`SwapPool`)

`SwapPool` is een kluis voor tokens en een mechanisme voor swapafwikkeling. Het contract gebruikt ERC20-metadata voor de naam, het symbool en het aantal decimalen van het Fonds, maar Protocol v1.1.0 geeft geen deelnemingsbewijzen of Fondsaandelen uit. Liquiditeit wordt toegevoegd door tokens naar het Fonds over te dragen. De contracteigenaar kan beschikbare liquiditeit opnemen.

### Samenstelling en optionele afhankelijkheden

| Configuratie | Als deze niet is ingesteld | Adresslot kan worden verzegeld |
| --- | --- | --- |
| `tokenRegistry` | Elk token kan de selectiecontrole van het Fonds doorstaan | Ja |
| `tokenLimiter` | Stortingen hebben geen saldolimiet op contractniveau | Ja |
| `quoter` | Het ruwe invoerbedrag geldt als het ruwe geoffreerde uitvoerbedrag | Ja |
| `feePolicy` | De Fondsvergoeding is nul | Ja |
| `feeAddress` | Fondsvergoedingen worden niet opgebouwd als opneembare vergoedingen voor een aangeduide ontvanger | Ja |
| `protocolFeeController` | Er wordt geen protocolvergoeding aangerekend | Nee |

De vijf verzegelbits blokkeren blijvend wijzigingen via de overeenkomstige instelfuncties aan de huidige adressen voor `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry` en `tokenLimiter`. `protocolFeeController` en `feesDecoupled` zijn initialisatiewaarden en vallen niet onder die vijf bits.

Een adresslot verzegelen bevriest het contract op dat adres niet. Een verzegeld register, limiter, quoter of kostenbeleid — en een ingestelde beheerder voor protocolvergoedingen — kan nog veranderen als het eigen bestuur dat toelaat. De ERC-1967-proxybeheerder kan ook de implementatie van het Fonds upgraden. Een zinvolle bewering over onveranderlijkheid hangt daarom af van het bestuur van de Fondseigenaar, de proxybeheerder en elke ingestelde afhankelijkheid.

### Swapafwikkeling

Voor een swap voert `SwapPool` de volgende stappen uit:

1. Het controleert of de invoer- en uitvoertokens door het optionele register zijn toegelaten en toetst de gevraagde invoer aan de optionele saldolimiet van het Fonds.
2. Het haalt het invoertoken bij de aanroeper op en meet het werkelijk ontvangen bedrag. De prijsberekening gebruikt dit gemeten bedrag, ook voor tokens die bij overdracht kosten aanrekenen.
3. Het vraagt een bruto offerte aan de ingestelde quoter, of gebruikt het ruwe ontvangen bedrag als er geen quoter is ingesteld.
4. Het berekent de Fondsvergoeding en een eventuele bijkomende protocolvergoeding en controleert daarna de beschikbare liquiditeit van het uitvoertoken.
5. Het stuurt de protocolvergoeding rechtstreeks naar de ingestelde protocolontvanger, draagt de nominale netto-uitvoer over aan de ontvanger en registreert de Fondsvergoeding als er een kostenadres is ingesteld.
6. Het registreert zowel het oudere `Swap`-event als het uitgebreidere `SwapSettlement`-event.

`SwapSettlement` vermeldt de initiatiefnemer, beide tokens, de gemeten invoer, de bruto geoffreerde uitvoer, de verzonden nominale uitvoer, de werkelijk waargenomen uitvoer bij de ontvanger, de Fondsvergoeding en de protocolvergoeding. De nominale en waargenomen uitvoer kunnen verschillen als het uitvoertoken zelf overdrachtskosten aanrekent. Het veld `fee` in het oudere `Swap`-event bevat alleen de Fondsvergoeding.

De variant met zes argumenten, `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)`, is het begrensde uitvoeringspad. De transactie mislukt na de deadline of als de waargenomen saldostijging van de ontvanger lager is dan `minAmountOut`. Integratoren gebruiken bij voorkeur dit pad, omdat een getoonde offerte tijdelijk is: de toestand van de quoter, het kostenbeleid, de liquiditeit, de limieten en de orakelgegevens kunnen vóór de uitvoering veranderen. De oudere varianten met drie en vier argumenten bieden die grenzen op Fondsniveau niet.

### Additieve kostenberekening

Zowel de Fondsvergoeding als de protocolvergoeding wordt afgetrokken van de bruto geoffreerde uitvoer. De protocolvergoeding wordt **niet uit de Fondsvergoeding genomen**; het Fonds behoudt zijn volledig berekende vergoeding.

Bijvoorbeeld, bij een bruto offerte van 100 eenheden:

- een Fondsvergoeding van 2% levert 2 eenheden voor het Fonds op;
- een protocoltarief van 10% dat op die Fondsvergoeding wordt toegepast, stuurt nog eens 0,2 eenheid rechtstreeks naar de protocolontvanger; en
- de gebruiker ontvangt 97,8 eenheden.

De protocolberekening gebruikt de hoogste waarde van de berekende Fondsvergoeding en een veronderstelde kostenbasis van 1%. Zo kan een zeer kleine Fondsvergoeding de protocolberekening niet tot bijna nul herleiden. Ongeldige gecombineerde tarieven mislukken met `FeeTooHigh`; een offerte die op nul zou uitkomen, mislukt met `InsufficientOutput`.

### Bevoegdheden van eigenaar en proxybeheerder

De contracteigenaar kan opgebouwde Fondsvergoedingen innen en kan met `withdrawLiquidity` elk beschikbaar Fondstoken naar een gekozen adres sturen dat niet nul is. Als vergoedingen zijn losgekoppeld, blijven opgebouwde vergoedingen gereserveerd voor dit liquiditeitsopnamepad. Anders blijven ze deel van het Fondssaldo. Deelnemers mogen gestorte liquiditeit niet als blijvend vergrendeld beschouwen, tenzij bijkomende en controleerbare bestuursmaatregelen dat resultaat vastleggen.

Het verzegelen van de configuratie verwijdert deze bevoegdheid om liquiditeit op te nemen niet. Het verwijdert evenmin de afzonderlijke upgradebevoegdheid van de ERC-1967-proxybeheerder.


## Waarderingsmodules

Alle drie de quoters bieden voorwaartse en omgekeerde offertefuncties die `SwapPool` en `SwapRouter` gebruiken:

- **`DecimalQuoter`** — Toestandsloze normalisatie van decimalen op basis van de veronderstelling dat waarden 1:1 gelijk zijn.
- **`RelativeQuoter`** — Normalisatie van decimalen met relatieve prijsindexen die door de eigenaar worden beheerd. Een token zonder ingestelde index krijgt standaard pariteit.
- **`OracleQuoter`** — Waardeert elk token via een ingesteld orakel, met een algemene of tokenspecifieke verouderingslimiet en een optionele uitvoermultiplicator van 0,9 tot 1,0.

Een `OracleQuoter` is slechts zo betrouwbaar als de gekozen gegevensbron en het beheer ervan. De munteenheid en richting van de bronnen moeten consistent zijn, decimalen moeten kloppen, updates moeten positief en actueel zijn, en het bestuur kan bronnen vervangen of actualiteitsinstellingen wijzigen. Manipulatie van de bron, vertraagde updates, netwerkstoringen, een verkeerd ingesteld paar of verlies van de sleutel van de orakeleigenaar kan slechte offertes veroorzaken of swaps doen mislukken.

`OracleRelay` is een optioneel doorgeefcontract voor de recentste ronde van één gegevensbron en is compatibel met de orakelinterface. Een aangeduide schrijver publiceert bronwaarden opnieuw; er is geen bewijs tussen blockchains en er wordt geen geschiedenis van rondes bewaard. Het doorgeefcontract aanvaardt de waarden van de schrijver en controleert alleen of het tijdstip niet in de toekomst ligt. `OracleQuoter` weigert zelfstandig niet-positieve of verouderde antwoorden. De eigenaar van het doorgeefcontract kan de schrijver vervangen of de huidige ronde ongeldig maken. Gebruikers moeten daarom de bron, de schrijver, de eigenaar en het controleproces beoordelen.


## Kostenbeleid en limieten

`FeePolicy` bewaart een standaardvergoeding in delen per miljoen en optionele uitzonderingen per richting en tokenpaar. De eigenaar kan die tarieven wijzigen, tenzij bestuur buiten het contract die bevoegdheid beperkt.

`Limiter` bewaart een maximaal saldo voor een token op het adres van een bepaald Fonds. De eigenaar of een geautoriseerde schrijver kan die limiet wijzigen. Een limiet van nul blokkeert stortingen wanneer de limiter actief is. Zonder ingestelde limiter zijn stortingen niet begrensd.

Deze limieten beschrijven de ingestelde **tokenblootstelling** van een Fonds. Ze maken van een tokensaldo op zichzelf geen lening of juridische schuld, bewijzen niet dat een uitgever kan nakomen en garanderen geen levering. Die vragen hangen af van de voorwaarden van de uitgever, de regels van het Fonds, de transactie die aan de gebruiker wordt getoond en het toepasselijke recht.


## Beheerder van protocolvergoedingen

`ProtocolFeeController` is een optionele kostencomponent op implementatieniveau. De eigenaar kan het protocoltarief en de ontvanger wijzigen of de vergoeding uitschakelen. Eén controller kan door meerdere Fondsen worden gedeeld, maar het protocol vereist niet één controller per netwerk.

Als de controller actief en ingesteld is, wordt de ontvanger bij elke geslaagde swap rechtstreeks in het uitvoertoken betaald. Hoe die ontvanger het geld gebruikt — bijvoorbeeld voor werking, toezicht, liquiditeitsondersteuning of een ander gepubliceerd doel — is een bestuursbeslissing en geen garantie van het contract.
