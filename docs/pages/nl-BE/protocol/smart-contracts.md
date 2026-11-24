# Slimme contracten

Contracten registreren tokensaldi en voeren Fondsuitwisselingen uit. De [CLC-softwaredocumentatie](https://software.cosmolocal.credit/contracts/) is de definitieve implementatiereferentie en is momenteel beschikbaar in het Engels. Deze pagina legt uit wat deelnemers moeten begrijpen voordat ze die contracten gebruiken.

Zie [Begrippen en woordenschat](/nl-BE/introduction/concepts) voor het verschil tussen een bestuurd Commitmentfonds en het bijbehorende `SwapPool`-contract, en tussen uitwisseling en nakoming door de Uitgever.

## Waardebon (`GiftableToken`)

Een Waardebon verbindt een digitaal saldo met een gepubliceerde toezegging van een Uitgever. De voorwaarden leggen uit waarvoor de bon kan worden gebruikt, waar en wanneer hij wordt aanvaard en wie verantwoordelijk is. Het maken van een token bewijst niet dat de Uitgever de beloofde goederen of diensten kan leveren.

Lees [Waardebonnen](https://software.cosmolocal.credit/contracts/vouchers) voor de werking van het maken, uitgeven, verbranden en vervallen van tokens.

## Commitmentfonds (`SwapPool`)

Een Commitmentfonds brengt geselecteerde Waardebonnen samen onder gepubliceerde regels. Het contract houdt voorraad aan en wisselt ondersteunde activa uit. Een storting geeft de storter niet automatisch Fondsaandelen of recht op terugbetaling, opname, beloning of bestuur. Dergelijke rechten vereisen afzonderlijk bekendgemaakte voorwaarden.

### Samenstelling en optionele afhankelijkheden

Controleer welke Waardebonnen een Fonds aanvaardt, hoe het wisselkoersen bepaalt, welke limieten en kosten gelden en wie deze kan wijzigen. De softwarereferentie beschrijft [Fondsinstellingen en verzegeling](https://software.cosmolocal.credit/contracts/pools).

### Swapafwikkeling

Een geslaagde swap verandert de betreffende saldi. Dit bewijst niet dat een Uitgever goederen of diensten heeft geleverd. Controleer vóór bevestiging de invoer, uitvoer, ontvanger, het minimaal te ontvangen bedrag en wanneer de offerte verloopt.

Lees [Swaps offreren en afwikkelen](https://software.cosmolocal.credit/contracts/swaps) voor uitvoeringsmethoden en afwikkelingsgegevens.

### Berekening van de additieve vergoeding

Een swap kan zowel Fondskosten als aanvullende protocolkosten omvatten. Controleer het totaal in de offerte; een route door meerdere Fondsen kan bij iedere stap kosten meebrengen. De [swapreferentie](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) houdt de berekening en het uitgewerkte voorbeeld actueel.

### Eigenaar- en upgradebevoegdheden

De Fondseigenaar kan beschikbare voorraad opnemen. Andere autoriteiten kunnen upgrades of instellingen beheren. Beoordeel deze bevoegdheden samen met de gepubliceerde regels van de Fondsbeheerder voordat je stort of op een Fonds vertrouwt. Verzegelde instellingen bewijzen op zichzelf niet dat de voorraad permanent is vergrendeld.

Zie [Fondsen](https://software.cosmolocal.credit/contracts/pools) en [Een instantie verifiëren](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) voor de technische controles.

## Waarderingsmodules

De wisselkoers van een Fonds staat los van de vermelde waarde van een Waardebon en de inwisselvoorwaarden van de Uitgever. Controleer de gekozen methode en wie de invoergegevens kan wijzigen. De softwarereferentie legt de beschikbare [Quoters](https://software.cosmolocal.credit/contracts/quoters) uit.

## Kostenbeleid en limieten

De **‘Kredietlimiet’** in de App is het maximale saldo van een bepaalde Waardebon dat een Fonds mag aanhouden. Dit beschrijft ruilcapaciteit en is geen persoonlijke lening of garantie van nakoming. Bekijk de [Fondsregels en configuratie](https://software.cosmolocal.credit/contracts/pools) om te zien hoe limieten en kosten worden toegepast.

## Controller voor protocolkosten

Protocolkosten hebben een ingestelde ontvanger. Het ontvangen van die kosten maakt de ontvanger niet automatisch tot Fondsbeheerder of garant. Zie de [kostenreferentie](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) voor de huidige werking en de [bestuursmechanismen](/nl-BE/governance/mechanics) voor verantwoordelijkheid en bekendmaking.
