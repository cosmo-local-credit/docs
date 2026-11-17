## **Uitvoerende samenvatting**

Het **Commitment Pooling Protocol (CPP)** beschrijft hoe onafhankelijk bestuurde Commitmentfondsen inwisselbare toezeggingen kunnen samenstellen, methoden en limieten voor wisselkoersen kunnen publiceren, voorraad kunnen aanhouden en verantwoorde uitwisseling mogelijk kunnen maken. Uitgevers blijven verantwoordelijk voor de toezeggingen van hun waardebonnen. Fondsbeheerders blijven verantwoordelijk voor de Fondsregels en iedere garantie die zij uitdrukkelijk aanvaarden. Noch de CLC App, noch GEF is een universele garant.

Protocol v1.1.0 biedt de huidige bouwstenen voor directe Fondsswaps: `GiftableToken`, `SwapPool`, optionele registers en waarderingsmodules, bovengrenzen voor tokensaldi in een Fonds, Fondskosten, een aanvullende protocolvergoeding en een Solidity-`SwapRouter` die alleen offertes berekent. De productieversies van de CLC App en CLC Core zoeken routes binnen één blockchainnetwerk via maximaal drie Fondsen. Ze maken offertes op basis van één vastgezet blok, simuleren en bereiden ondertekende atomaire wallet-batches voor, sturen die door en bundelen de afwikkelingsgegevens. De contracten registreren geen levering in de echte wereld, creëren geen automatische aandelen voor liquiditeitsverschaffers, voeren geen cross-chain routering of batchverrekening uit en bieden geen universele reserves, garanties of verzekering.

Het historische **Sarafu Network** gebruikte commitment-poolingconcepten in gemeenschapsmunten, spaargroepen, wederzijdse-hulpsystemen en productietoezeggingen. De dienst ging later over naar de CLC App. Dat betekende niet dat elk historisch account, elke wallet, token, Waardebon, Fonds, elk saldo, verslag, elke deelnemer of verplichting werd overgedragen.

**Historische Sarafu Network snapshot — Celo-activiteit van 5 juli 2023 tot en met 20 juli 2025**

**Bron:** [Dune Analytics dashboard](https://dune.com/grassrootseconomics/sarafu-network)

- 26.367 gebruikers
- 285.197 peer-to-peer uitwisselingen
- 188 unieke actieve Commitmentfondsen
- 745 unieke actieve waardebonnen
- $320,692 Fonds swap volume
- 899 gepubliceerde verslagen ([archief van historische verslagen](https://sarafu.network/reports))

Deze cijfers zijn historisch bewijs, niet actuele CLC-gebruikscijfers.

Het bredere CLC-ontwerp combineert de huidige routing met voorstellen voor hoe compatibele netwerken:

1. verantwoordelijke routediensten uitbreiden naar aanvullende register- of beleidsprofielen en domeinen;
2. verantwoordelijke netwerkdiensten coördineren zonder lokale verantwoordelijkheid opzij te zetten;
3. afzonderlijk gefinancierde liquiditeitsmandaten, garanties, reserves of verzekeringen ondersteunen;
4. Fondsswaps afzonderlijk meten van de aanbieding ter inwisseling, levering en afhandeling van Waardebonnen; en
5. een voorgestelde netwerkafdracht en afzonderlijk vastgestelde servicekosten gebruiken om gedeelde diensten te financieren.

Het voorstel omvat een **voorgestelde CLC-governancetoken** en een **voorgesteld CLC Network Pool**. Geen van beide maakt deel uit van de huidige App of Protocol v1.1.0.

Volgens het voorgestelde model kunnen deelnemers aan liquiditeit en governance alleen handelen via afzonderlijk vastgestelde programma's met gepubliceerde toelatingscriteria, risico's, controles, overdrachtsrechten, terugbetalingsvoorwaarden en kostenregels. Gewone stortingen in een Fonds creëren geen automatisch aandeel en geen automatisch recht op terugbetaling, opname, beloning of governance.

De gemeenschappelijke doelstelling is:

> Verhoog verantwoordelijke uitwisseling en de nakoming van realistische verplichtingen met behoud van zorg, eerlijkheid, lokale verantwoordelijkheid en veerkracht.

Bescherming tegen machtsconcentratie en een geloofwaardige mogelijkheid om uit te stappen blijven centrale ontwerpdoelen. Voorgestelde controles omvatten vertraagde governance, meerdere goedkeuringsdrempels, transparante delegatie, regels voor belangenconflicten, incidentbeoordeling en een gedocumenteerd proces om te splitsen en te migreren. Deze controles kunnen bepaalde governancerisico's verminderen, maar kunnen verlies niet uitsluiten en resultaten niet garanderen.
