# Slimme contracten

Deze pagina beschrijft de belangrijkste Fonds- en Vouchercontracten in protocol v1.1.0. Het contractgedrag biedt afwikkelingsmechanismen; het vervangt niet de emittenteninformatie, Poolregels of andere transactievoorwaarden die van toepassing zijn op een bepaald gebruik.

Gebruik [Begrippen en woordenschat](/nl/introduction/concepts) om onderscheid te maken tussen de gereglementeerdeCommitmentfondsvan `SwapPool`, en swap afwikkeling van terugbetaling presentatie, nakoming, en afboeking.


## waardebon (`GiftableToken`)

`GiftableToken` is eenERC20token met mechanische instrumenten die een uitgever kan gebruiken voor een waardebon:

- **Geautoriseerde minting** De eigenaar kan schrijvers aanwijzen die tokens met `mintTo` kunnen uitgeven.
- **Optieve vervaldatum** Verval van de `0` De terminale is niet langer in gebruik, maar de terminale wordt op een andere manier gebruikt.`expired` staat door te bellen`applyExpiry`- Ik ben direct.
- **Boekhouding van het aanbod** — `totalMinted` en`totalBurned` De eigenaar alleen`burn` function verbrandt tokens die door het adres van de eigenaar worden gehouden.

Het token contract doet **Het is niet** het identificeren van de goederen of diensten van de uitgever, een terugbetalingswaarde vaststellen, capaciteit bewijzen of geldomrekening beloven. een `GiftableToken` wordt alleen door de afzonderlijk gepubliceerde voorwaarden en gedragingen van de uitgever terugbetaalbaar.


## Commitmentfonds (`SwapPool`)

`SwapPool` Het is een token vault en swap-settlement engine.ERC20metadata voor de Poolnaam, symbool en decimalen, de v1.1.0De liquiditeit wordt geleverd door het overbrengen van tokens in de fonds en de contracthouder kan beschikbare liquiditeit terugtrekken.

### Samenstelling en optionele afhankelijkheden

| Configuratie | Wanneer niet ingesteld | Verzegelbaar adres slot |
| --- | --- | --- |
| `tokenRegistry` | Elk token kan de curatiecontrole van het Fonds doorstaan. | - Ja . |
| `tokenLimiter` | Deposito's hebben geen limiet voor het saldo op contractniveau | - Ja . |
| `quoter` | De hoeveelheid ruwe input wordt behandeld als de aangegeven ruwe outputhoeveelheid. | - Ja . |
| `feePolicy` | De Poolvergoeding is nul | - Ja . |
| `feeAddress` | Poolvergoedingen worden niet als terugtrekbare vergoedingen voor een aangewezen ontvanger aangerekend. | - Ja . |
| `protocolFeeController` | Er wordt geen protocolvergoeding geheven. | - Nee, dat is niet zo. |

De vijf zegel bits blokkeren de stroom permanent `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry`, en`tokenLimiter`de adressen tegen hun overeenkomstige setters.`protocolFeeController`en`feesDecoupled`zijn initialisatiewaarden en behoren niet tot die vijf bits.

Het verzegelen van een adresslot bevriezt het contract op dat adres niet. Een verzegeld register, limiter, quoter of feebeleid en een geconfigureerde protocol-fee controller kunnen nog steeds veranderen als de eigen governance dit toestaat. De ERC-1967 proxy administrator kan ook de Fonds implementatie upgraden.

### Swap afwikkeling

Voor een swap `SwapPool`:

1. Controleert of input- en outputtokens het optionele register doorlopen en test de gevraagde input tegen de optionele poolbalanslimiet.
2. Trekt de input-token van de beller en meet het daadwerkelijk ontvangen bedrag.
3. Verzamelt een bruto quote van de geconfigureerde quotator, of gebruikt het bruto ontvangen bedrag wanneer geen quotator is ingesteld.
4. Bereken de Poolvergoeding en eventuele aanvullende protocolvergoedingen en controleer vervolgens de beschikbare liquiditeit van de output-token.
5. Stuurt de protocolvergoeding rechtstreeks naar de geconfigureerde ontvanger van het protocol, overdraagt de nominale netto-uitgang aan de ontvanger en registreert de poolvergoeden wanneer een kostenadres wordt ingesteld.
6. Verzendt de erfenis `Swap` De gebeurtenis en de meer gedetailleerde `SwapSettlement`- Het is een gebeurtenis.

`SwapSettlement` De initiatiefnemer, beide tokens, gemeten input, bruto gecoteerde output, verzonden nominale output, daadwerkelijk waargenomen output bij de ontvanger, Fonds fee en protocol fee.`fee` veld in het erfgoed`Swap` Event is alleen de Fonds fee.

Het zes argument `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` Overbelasting is het beperkte uitvoeringspad. Het keert terug na de deadline of wanneer de waargenomen saldoverhoging van de ontvanger lager is dan `minAmountOut` De integratoren zouden deze voorkeur moeten geven omdat een weergegeven offerte tijdelijk is: de quoteraandrag, het tariefbeleid, de liquiditeit, de limieten en de oracle-gegevens kunnen vóór uitvoering veranderen.

### Berekening van de additieve vergoeding

De fonds- en protocolvergoedingen worden allebei afgetrokken van de bruto genoteerde output. **niet afgetrokken van de Poolvergoeding**, en de Fonds behoudt zijn volledige berekende vergoeding.

Bijvoorbeeld bij een bruto quote van 100 eenheden:

- een poolvergoeding van 2% wordt toegekend aan de fonds voor 2 eenheden;
- een protocoltarief van 10% dat wordt toegepast op die Poolvergoeding, stuurt een andere 0.2-eenheid rechtstreeks naar de ontvanger van het protocol; en
- de gebruiker ontvangt 97.8-eenheden.

De protocolberekeningen maken gebruik van de grotere berekende Poolvergoeding en een veronderstelde 1%-gebruiksbasis.`FeeTooHigh`, en een citaat dat zou afstemmen op nul revers met`InsufficientOutput`.

### Eigenaar- en upgradebevoegdheden

De contracthouder kan opgelopen Poolvergoedingen innen en kan `withdrawLiquidity` bellen om elke beschikbare Pooltoken over te dragen naar een gekozen niet-nul adres. Wanneer de kosten worden ontkoppeld, worden opgeloste vergoedingen gereserveerd van dit liquiditeitsonttrekkingspad; anders blijven ze onderdeel van het Poolbalans. Pooldeelnemers mogen de opgeslagen liquiditeit niet interpreteren als permanent gesloten tenzij aanvullende, verifieerbare governancecontroles dat resultaat vaststellen.

De configuratieverzegeling verwijdert deze liquiditeitsonttrekkingsmogelijkheid niet, noch de upgraderingsmogen van de aparte ERC-1967 proxy-administrator.


## Evaluatiemodules

Alle drie de quoters implementeren voor- en omgekeerde quotatiefuncties die worden gebruikt door `SwapPool` en `SwapRouter`:

- **`DecimalQuoter`** Stateloze decimale normalisatie onder een veronderstelling van 1:1-waardepariteit.
- **`RelativeQuoter`** Decimale normalisatie plus eigenaar beheerde relatieve prijsindices.
- **`OracleQuoter`** Rateert elke token via een geconfigureerd oracle, met een globale of per-token stilstandslimiet en een optionele0.9-to-1.0uitgangsmultiplicator.

Een `OracleQuoter` is slechts zo betrouwbaar als zijn feed selectie en administratie. Feed denominatie en richting moeten consistent zijn, decimalen moeten correct zijn, updates moeten positief en fris zijn, en governance kan feeds vervangen of versheid instellingen te wijzigen. Bron manipulatie, vertraagde updates, netwerk uitvallen, verkeerde paart configuratie, of het verlies van de oracle-eigenaar sleutel kunnen leiden tot slechte quotes of swaps omkeren.

`OracleRelay` De relais accepteert de waarden van de schrijver met slechts een toekomstige tijdstempelcontrole.`OracleQuoter` De gebruiker kan de bron feed, de relais schrijver, de Relais eigenaar en het monitoringproces beoordelen.


## Belastingbeleid en limieten

`FeePolicy` bewaart een standaardvergoeding in delen per miljoen en optionele richtingpar overschrijdt. De eigenaar kan deze tarieven wijzigen tenzij de governance buiten het contract die macht beperkt.

`Limiter` bewaart een maximaal saldo voor een token op een bepaald Fonds-adres. De eigenaar of een gemachtigde schrijver kan die limiet wijzigen.

Deze limieten beschrijven geconfigureerde **blootstelling aan token** Deze vragen zijn afhankelijk van de voorwaarden van de uitgever, de Poolregels, de aan de gebruiker gepresenteerde transactie en het toepasselijke recht.


## Controleur van de protocollen

`ProtocolFeeController` is een optionele invoerrechtcomponent. De eigenaar kan het protocoltarief en ontvanger veranderen of de kosten deactiveren. Een enkele controller kan worden gedeeld door meerdere fondsen, maar het protocol vereist niet één controller per netwerk.

Wanneer de ontvanger actief en geconfigureerd is, wordt hij tijdens elke succesvolle swap rechtstreeks in de output token betaald.
