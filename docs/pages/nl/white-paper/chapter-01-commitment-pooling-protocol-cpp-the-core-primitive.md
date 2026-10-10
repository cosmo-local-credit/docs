## **1. protocol voor het bundelen van verbintenissen (CPP): de primitieve kern**

**Geestesmodel:** Een Commitmentfonds is een gereglementeerde regeling voor de toelating van waardebonnen of andere activa, het publiceren van ruilregels, het houden van inventaris en het mogelijk maken van swaps.

CPP coördineert de waarde door middel van duidelijk beschreven verplichtingen. [Grassroots Economie: Reflectie en praktijk](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 Wat is een verbintenis?**

Een verbintenis is de belofte van een geïdentificeerde partij van toekomstige levering, bijvoorbeeld voedsel, vervoer, arbeid, opslag of een ander wettelijk goed, dienstverlening, voordeel of prestatie. **waardebon** is een symbool of een record dat in gepubliceerde termen wordt weergegeven als die verbintenis.

Het token contract registreert digitale mechanismen. De vouchervoorwaarden identificeren de uitgever, aanbod, capaciteit, plaats, tijdstip, beperkingen, presentatie, nakoming, klachten en ontlastingsproces.

### **1.2 Wat is een Commitmentfonds?**

Een Commitmentfonds is de gereglementeerde regeling. Het kan worden beheerd door een individu, coöperatie, gemeenschapsgroep, overheidsinstantie, federatie, multisig, dienstverlener of een andere verantwoordelijke structuur.

Betreffende taken en bevoegdheden zijn onder meer:

- **Fondsbeheerder:** publiceert en beheert de Poolregels en elke uitdrukkelijk aangenomen garantie;
- **Bezitter van Fonds:** heeft de huidige bevoegdheden als eigenaar van `SwapPool`;
- **proxy-administrator:** kan een proxy-implementatie upgraden;
- **afhankelijkheidsbeheerders:** het regelen van geconfigureerde registers, quota's, limiters of tariefcomponenten;
- **routefinder of -operator:** kan aanbiedingen ontdekken of, in een toekomstige uitvoering, een afzonderlijk goedgekeurde route uitvoeren; en
- **waarnemer:** neemt alleen een gedefinieerde verplichting op zich door middel van gepubliceerde, gefinancierde voorwaarden.

CPP groepen Poolfuncties in vier concepten:

- **Verzorging:** toelaten ondersteunde tokens of waardebonnen.
- **Evaluatie:** de voor een wisselkoers of quotatie gebruikte methode publiceren.
- **Beperking:** het toepassen van huidige tokenbalansgrens of andere afzonderlijk ingevoerd controles.
- **Uitwisseling:** het houden van inventaris, uitvoeren van swaps, rekening houden met vergoedingen en transactiegegegevens opstellen.

Protocol v1.1.0 Deze functies worden door middel van `SwapPool` De huidige `Limiter` De marktdeelnemer heeft een rekening met de markten van een andere bank, maar is niet verplicht om de markte te vergroten.`SwapRouter` berekent quotes voor meerpools; het voert geen swaps uit.

Het bredere voorgestelde CPP-ontwerp kan voortschrijdende limieten, accountcontroles, uitvoeringsrouters, paden via HTLC of escrow en batchverrekening toevoegen. Dit zijn voorgestelde onderdelen en geen beschrijvingen van de huidige limiter of router.

### **1.3 Logiek van de huidige directe swap**

Een huidige directe Fonds swap:

1. controleert het optionele register voor de input- en outputtokens;
2. meet de ontvangen input;
3. een offerte verkrijgt van de geconfigureerde quotator of gebruikmaakt van grond-eenheidspariteit;
4. controleert het resulterende saldo van de Fonds-token tegen de optionele limiter;
5. berekent de Poolvergoeding en eventuele aanvullende protocollen;
6. controleert de beschikbare productievoorraad;
7. overdraagt de protocolvergoeding en -uitgang, alsmede de rekeningen voor het Poolvergoed; en
8. uitzendt swap-evenementen.

Het aanbod is een transactieparameter, geen bewijs van de emittentcapaciteit, terugbetalingskosten, reële waarde, cash convertibiliteit of garantie.

### **1.4 Breder gebruik**

Commitmentfondsen kan gemeenschapsruil, productie, wederzijdse hulp, openbare programma's en andere verantwoordingsplichtige structuren ondersteunen. Een afzonderlijk gedocumenteerd kredietproduct zou een waardebon als zekerheid of terugbetalingsinstrument kunnen gebruiken, maar het zou aanvullende en transactie-specifieke voorwaarden vereisen.

CPP is bedoeld voor verantwoord uitwisselings- en controleerbare transactiegegegevens, niet speculatieve churn.
