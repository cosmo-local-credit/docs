## **15. Routekaart (indicatief)**

### **15.1 Tegenwoordige basis**

GEF exploiteert de CLC-app op `cosmolocal.credit` op Gnosis Chain. De app biedt ondersteuning voor account- en wallettoegang, een openbare marktcatalogus en interfaces voor tokens, Waardebonnen, aanbiedingen, wensen, commitmentpools, overschrijvingen, directe poolswaps en gerouteerde uitwisselingen.

Protocol v1.1.0 biedt de huidige contractbasis: `GiftableToken`, directe uitvoering via `SwapPool`, optionele registers, waarderingsmodules, bovengrenzen voor tokensaldi in Fondsen, Fondskosten, een aanvullende protocolvergoeding en een Solidity-`SwapRouter` die alleen offertes berekent.

CLC Core vormt nu de basis voor routering en waarneembaarheid binnen één blockchainnetwerk in de openbare App: een afgestemde graaf voor ontdekking, routes van maximaal drie Fondsswaps, offertes op basis van één vastgezet blok, grenzen en kosten per stap, simulatie van de volledige batch, ondertekende atomaire uitvoering via Calibur, relaytracking, afstemming van de afwikkeling, gebundelde transactieoverzichten en operationele statistieken. Beschikbaarheid blijft afhankelijk van de interface, ondersteund wallet- en tokengedrag, geïmplementeerde contracten, voorraad, configuratie, actualiteit van de dienst, netwerkstatus, toelatingscriteria, aanbieders, rechtsgebied en gepubliceerde voorwaarden van de Uitgever of het Fonds.

### **15.2 Voorgestelde mijlpalen**

Deze benoemde mijlpalen zijn ontwerprichtingen, geen releasenummers, opleverdatums of toezeggingen dat een functie wordt gelanceerd.

- **Governancebasis:** voorgestelde CLC-governancetoken; voorgesteld CLC Network Pool; kostenadapters; quorum-, tijdslot- en governancefundamenten.
- **Routing & Observability:** uitbreiden van de huidige route- en ontvangstinterfaces naar extra profielen; publiceren van gezondheidsdashboards en rapportage op serviceniveau; ontwikkelen van een kader voor verzekeringsbeleid; ontwerpen van opt-in herbalanseringsintenties; en prototype batch netting.
- **Cross-Domain Risk Tools:** HTLC of escrow routing; afzonderlijk gereglementeerde garantiemodules; rolling, account en tiered limit presets.
- **Gereguleerde toegang:** de implementatie-specifieke betalingsdiensten van derden; persoonlijke micro-fondsen; het ontdekken van nalevingsdiensten; audits van voucherklassen door derden.

Betalingsdiensten worden geleverd door afzonderlijk geïdentificeerde derden onder toepasselijke regels voor rechtsgebied, toelating, kosten, limieten en voorwaarden. De CLC App en de contracten van Protocol v1.1.0 beheren zelf geen fiat-betaalinfrastructuur.

Uitvoering met meerdere stappen tussen verschillende domeinen, automatische herbalancering van Fondsen, gedeelde verzekering, de voorgestelde CLC-governancetoken, het voorgestelde CLC Network Pool, batchverrekening, persoonlijke microfondsen en gereguleerde betalingsdiensten blijven voorgesteld of implementatieafhankelijk totdat een implementatie en haar toepasselijke voorwaarden ze als actief identificeren. Door deelnemers gestarte routering binnen één blockchainnetwerk in de openbare CLC App is huidig.
