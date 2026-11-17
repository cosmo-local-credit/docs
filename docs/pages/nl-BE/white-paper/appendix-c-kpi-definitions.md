## C. Voorgestelde definities KPI

Deze KPI's vormen een voorgestelde meetspecificatie, niet een verklaring dat de huidige App of protocol elke vereiste gebeurtenis registreert.

Elke gepubliceerde KPI moet bevatten:

- verantwoordelijke uitgever en gegevensbron;
- gebeurtenis- of staatdefinitie;
- cohorten- of meetperiode;
- eenheid en waarderingsmethode;
- tijdstempel van de waardering;
- de regels inzake opneming en uitsluiting;
- de behandeling van gedeeltelijke, betwiste, vervallen, ontoegankelijke en gecorrigeerde gegevens;
- vereiste bewijs of attestatie buiten de keten;
- de geschiedenis van herziening en beperkingen op het gebied van gegevenskwaliteit;
- of het resultaat on-chain, gerapporteerd, geattesteerd, onafhankelijk gecontroleerd of geschat is.

| KPI | Voorgestelde definitie | Vereiste bewijsstukken en uitsluitingen |
| --- | --- | --- |
| **Gebruikelijke presentaties** | Het bedrag of de eenheden die zijn aanvaard in het terugbetalingsproces van de uitgever gedurende een periode | Identificatie van de presentatie, uitgever, houdersautoriteit, bedrag, tijdstip, status; uitsluiting van duplicaten en ongeldige verzoeken |
| **Vervullingspercentage** | Voltooide geldige presentaties gedeeld door geldige présentaties voor dezelfde rijpe cohorte | Afzonderlijke bewijsmateriaal voor de prestaties van de uitgever; melding van open, afgewezen, betwiste, gedeeltelijke en gecorrigeerde gevallen |
| **Voltooiing van de afboeking** | Voltooide presentaties met een ontlastingsregister verdeeld door voltooide présentaties | Branden, annuleren, uitschakelen of ander bewijs van niet-hergebruik in verband met de nakoming |
| **Vervullingslatentie** | Median en 90e percentiel van presentatie tot nakoming | Geen vervanging van de houdingstijd uitgifte tot aanbieding of verwerving tot aanbieding |
| **Behoudstermijn** | Median en verdeling van de tijd tussen verwerving en aanbieding | Identificatie van de overname en uitsluiting van onbekende overnametijden |
| **Uitgetrokken in aanmerking komende verplichtingen** | In aanmerking komende verplichtingen van derden die na gedefinieerde uitsluitingen blijven bestaan | Identiteit en voorwaarden van de uitgever; geldende inventarie, vervaldatum, verbranding, afboeking, tests en niet-verbintenis tokens van de uitgever worden uitgesloten |
| **Direct Fonds-swapvolume** | Waarde van voltooide swaps die zijn ingeleid als one-Fonds exchanges onder één openbaar gemaakte waarderingsmethode | On-chain afwikkelingsgebeurtenissen, token-eenheden, rentebron, tijdstip; niet classificeren als vervulling door de uitgevende instelling |
| **Pogingen tot routeontdekking** | Geldige verzoeken om gedurende een periode bereikbare Waardebonnen of mogelijke paden te vinden | Graafversie, geïndexeerd blok, actualiteit, walletbereik, gevraagde diepte, aantal kandidaten, weglatingen of status van het zoekbudget; geen gezaghebbende offerte |
| **Beschikbare kandidaatroutes** | Mogelijke paden die routeontdekking voor het gedefinieerde verzoekcohort oplevert | Tel ieder afzonderlijk geordend Fonds/tokenpad; vermeld routediepte en uitsluitingen; classificeer het niet als uitvoerbaar of afgewikkeld |
| **Slagingspercentage van routeoffertes** | Aantal gezaghebbende routeoffertes gedeeld door geldige pogingen om een offerte te krijgen | Vastgezet blok, pad, bedragmodus, vervaltijd, resultaat of reden van weigering; houd dit gescheiden van geslaagde ontdekking en uitvoering |
| **Uitvoeringspercentage van routes** | Bevestigde gerouteerde transacties gedeeld door geldige ondertekende uitvoeringspogingen voor hetzelfde volgroeide cohort | Tracking-ID, transactiehash, verzendstatus, bevestiging of terugdraaiing, routediepte en reden van mislukking; sluit niet-ondertekende offertes uit |
| **Volume van de volledige route** | Invoer- en uitvoerwaarde van bevestigde gerouteerde wissels, eenmaal per route geteld | Gebruik de afgewikkelde invoer van de eerste stap en de afgewikkelde uitvoer van de laatste stap onder één waarderingsmethode; tel niet alle stapwaarden op als onafhankelijk economisch volume |
| **Afwikkeling per stap** | Afgewikkelde invoer, bruto-uitvoer, Fondskosten, protocolkosten en netto-uitvoer voor iedere stap van een bevestigde route | Geordende Fonds- en tokenidentificatoren, afwikkelingsgebeurtenissen, transactiehash, blok, logindex en eventuele tussentijdse restanten |
| **Routekosten** | Huidige Fonds- en protocolkosten die daadwerkelijk over de route zijn afgewikkeld | Rapporteer iedere stap en het totaal per kostentype; noem ze geen voorgestelde netwerkafdracht of niet-geïmplementeerde servicevergoeding |
| **Routebeperkingen** | Aantal en aandeel geweigerde routes of offertes per vastgestelde oorzaak | Toelating, stortingslimiet, liquiditeit, kostendomein, niet-ondersteunde token of quoter, walletsaldo of -type, gas, zoekbudget, vervaltijd, afwijking of simulatiebewijs |
| **Gezondheid van routeafstemming** | Actualiteit en betrouwbaarheid van de geïndexeerde graaf en gebundelde afwikkelingsgegevens | Graafversie en -leeftijd, omvang van de wachtrij met wijzigingen, duur van afstemming, correcties, fouten, onbekende onderdelen en onopgeloste transactieoverzichten |
| **Inventaris van Fondsen** | Gemeten ondersteunde activa die op een bepaald tijdstip in handen zijn van een Fonds | Contractsaldo's, reserveringen voor tarieven, ontoegankelijke activa, waarderingsmethode en terugtrekkingsbevoegdheden van eigenaars |
| **Voldoende reserve** | In aanmerking komende, beschikbare reservesvermogens gedeeld naar uitdrukkelijk gedekte blootstellingen | Beleid inzake dekking, in aanmerking komend vermogen, bewaring/controle, passiva, uitsluitingen en waardering; niet totale toekeningsvoorziening op standaardbasis |
| **Beperkte gebruik** | Gemeten Fonds-tokenbalans gedeeld door zijn huidige geconfigureerde maximum | Limiter adres, token, fonds, tijdstempel, wijzigingen en perioden zonder limieter |
| **Terugtrekking van de waarnemer** | In aanmerking komende terugbetaling gedeeld door betaalde gedekte vorderingen | Geïdentificeerde borg, claimbeleid, tijdschema, kosten, geschillen en afschrijvingen |
| **Voorgestelde netwerkinkomsten** | Ontvangen voorgestelde netwerkafdracht plus ontvangen afzonderlijke routerings- of servicevergoedingen | Sluit bruto Fondskosten uit die de Fondsen behouden en voorkom dat de netwerkafdracht dubbel wordt geteld |
| **Tijdmatigheid van het bestuur** | Tijd om een incident te detecteren, beslissen, pauzeren, repareren en sluiten | Bepaalde klokken, verantwoordelijke instanties, noodbevoegdheden, beroep en ontbrekende gebeurtenissen |

Bevordering van sociale impact vereist een aparte methodologie. Blockchain-activiteit alleen niet vast te stellen identiteit, uitgevende prestaties, tevredenheid, gemeenschapsgezondheid, causaliteit of impact.
