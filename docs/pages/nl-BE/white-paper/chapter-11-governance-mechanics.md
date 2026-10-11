## **11. Bestuurmechanismen**

Dit hoofdstuk stelt een governance template voor. Het vertegenwoordigt niet dat de huidige CLC App gebruik maakt van governance-token voting, timelocks, gedeelde verzekering, een claimsproces of elke controle die hieronder wordt beschreven.

- **Grondwaarden:** zorg voor mensen, zorg voor het milieu, eerlijkheid, wederkerigheid, geen overheersing en veerkracht.
- **Soorten voorstellen:** Veranderingen van tarieven, limieten en indices; liquiditeitsmandaten; poollijsten en verwijderingen; optionele dekkingbesluiten; en parameterbewaking.
- **Verantwoordelijk proces:** het gebruik → evaluatie → risicobeoordeling → goedkeuring → tijdelijke afsluiting indien nodig → uitvoering. De goedkeuring kan komen van beheerders, coöperaties, overheidsinstanties, federaties, multisigs, stemmingen in de keten of een andere openbaar gemaakte en verantwoordbare structuur.
- **Goedkeuringsdrempels:** met hogere drempels voor wijzigingen in de waardeindex, noodkrachten en andere kritische acties.
- **Delegatie:** facultatieve delegatie met openbare opdrachten, openbaarmaking van conflicten en terugroeping.
- **Circuitbrekers:** noodpauzes met vastgestelde criteria, gemachtigde exploitanten, hervatingsvoorwaarden en vereiste post-mortems.
- **transparantie:** gepubliceerde wijzigingen en stromen, met afzonderlijk bewijs voor swap-afwikkeling, nakoming door de uitgever, reserves, gebruik van limiet, routing en garanties.

**Registry governance.** Een CPP--compatibele implementatie kan ontdekkingsregisters bijhouden voor waardebonnen, tokens en fondsen. Geautoriseerde controles kunnen registeringen toevoegen, updaten, opschorten of verwijderen via het openbaar gemaakte governanceproces van de implementatie.

Publiceerde registratievoorschriften moeten de status voorwaardelijk maken en kunnen herhaalde niet-nakoming, fraude of onjuiste voorstelling, onveilige contractgedrag of aanhoudende schending van gepubliceerde beginselen identificeren als redenen voor opschorting of verwijdering.

**Verbiedde vermeldingen.** Onder deze template zou een register niet toelaten:

1. instrumenten die rechtstreeks ecologische vernietiging buiten de overeengekomen grenzen financieren of stimuleren, geweld of wapenvorming, dwangwinning of systemisch misbruik; of
2. een voucherklasse die gebrek heeft aan duidelijke voorwaarden voor presentatie en nakoming, aansprakelijkheid en remedies.

De verbodlijst zou alleen worden verwerkt, openbaar kunnen worden gecontroleerd en kan worden gewijzigd door de vastgestelde kritische actie drempel en tijdslimiet, zoals hieronder wordt geïllustreerd:Q3 + T3in aanhangsel D.

### **11.1 Beurs- en limietbeheersing**

**Tijdvervangende veranderingen.** Een implementatie op basis van deze sjabloon zou de wisselkoersmethoden wijzigen en alleen na een publieke tijdslok afzonderlijk grensparameters implementeeren.

**Goedkeuringsdrempels.** De template stelt hogere goedkeuringsgrenzen voor veranderingen in de waardeindexbasis en wereldwijde wijzigingen van de grensniveaus, tussentijdse drempelwaarden voor Fonds-specifieke wijzigingen door derden en standaarddrempwaarden voor routinematige wijzigingen in vergoedingen.

**Gepubliceerde feeds.** Een deelnemende implementatie zou voor elke Fonds de indexvariabelen op de keten, oracle-bronnen of medianen, update cadentie, limietvensters en caps en storingsmodus of veilige constanten publiceren.

**Criteria voor noodpauze.** Een deelnemende implementatie zou vooraf voorwaarden zoals een oracle-uitbreking, hoge gebruiksgrenzen in combinatie met niet-nakoming of een invariantfalen, samen met hervatingscontroles en eisen voor beoordeling na het incident verklaren.

**Voorbeeld van een openbare index feed voor één fonds en waardebon**

- **Symbool:** bijvoorbeeld `Maize_50kg@IssuerY`.
- **Referentienheid:** Indice-eenheid (IUX).
- **Publiceerde waarde:** 30.000 IUX.
- **Bron:** de mediaan van geïdentificeerde bronnen, zoals een lokale marktonderzoek, het ministeriële bulletin en de basislijn voor inzet.
- **Update cadentie:** dagelijks om 18:00 uur EAT, met een 24-uurs tijdslok.
- **Verwijderingsmodus:** bevriezen bij de laatste geldige waarde, een aangegeven limietbeleid toepassen en pauzeren na een uitbreking van 72 uur.
- **Rationale:** gepubliceerde notities en een verslag van wijzigingen uit de eerdere update.
- **Ondertekenaars:** openbaar gemaakte multisig-adressen en goedkeuringsgrenzen.

### **11.2 Aanbevolen verzekeringsfonds runbook**

**Alleen optionele ontwerp.** Dit runbook is alleen van toepassing op een inzet die uitdrukkelijk een verzekeringsfonds heeft aangenomen en gefinancierd en de gedekte gebeurtenissen, in aanmerking komende eisers, verantwoordelijke entiteit, activa, limieten, uitsluitingen, bewijsvereisten, proces en regelgeving heeft gepubliceerd.CLC App noch GEF Het is de bedoeling van het Parlement dat deze richtlijn een nieuwe en doeltreffende oplossing voor de problemen van de landbouw vormt.

**Mogelijke triggers.** Een aangenomen beleid kan betrekking hebben op een niet-nakoming van de gedefinieerde emittenten, een tekort aan poolreserven of een brug- of escrowverlies.

**Beoordeling.** Het verantwoordelijke orgaan zou transactiekosten, inventarisbalansen, garantieobligaties, inzendingsrecords, de antwoorden van de uitgever en andere vereiste bewijsstukken samenstellen en vervolgens een incidentrecord publiceren dat in overeenstemming is met privacy en recht.

**Illustratieve verlies waterval.** Wanneer elke laag bestaat en rechtmatig van toepassing is, kan een beleid: (1) aansprakelijke obligaties van uitgevende instellingen of garantiepartijen → (2) reserves op poolniveau → (3) een voorgestelde netwerkverzekeringsfonds → (4) een tijdelijke verlaging tot een optionele dekkingsaanvraag, alleen indien de reeds bestaande voorwaarden en het toepasselijk recht dit uitdrukkelijk toestaan → (5) rechtmatige terugvordering voor bewezen fraude of misbruik.

Een dekkingsaanpassing vermindert de onderliggende voucherverbintenis van een uitgever niet of verandert een saldo in de keten, tenzij geldige reeds bestaande voorwaarden en toepasselijke wetgeving dat uitdrukkelijk toestaan en de vereiste toestemming van de houder wordt verkregen.

**Beperkingen en uitsluitingen.** De gepubliceerde dekking zou caps, in aanmerking komende presentaties, bewijsmateriaal, claims-vensters, uitgesloten routes of gebeurtenissen, geografische beperkingen en de behandeling van uitgeputte reserves definiëren.

**Illustratief herstel schema.** Indien vastgesteld en gepubliceerd:

1. de aanspraken zouden eerst afkomstig zijn van de verantwoordelijke uitgever of garantieobligatie, dan uit de toepasselijke poolreserves en vervolgens uit het voorgestelde netwerkverzekeringsfonds;
2. een verlaging van de aansprakelijkheid op optionele dekking zou beperkt zijn tot wat reeds bestaande dekkingvoorwaarden en toepasselijk recht toestaan, tot het gepubliceerde incident cap;
3. een herstelplan zou voor een bepaalde periode een aangegeven aandeel van de teruggevonden waarde kunnen toepassen, waarna elk overgebleven gedekte tekort een geregistreerd verlies bij een openbare post-mortem zou worden; en
4. bij elke beslissing een ontvangstbewijs met het incident ID, de aangetaste vorderingen en bonen, de beslissing, het herstelplan en het klachtvenster.

### **11.3 Garantie-kader**

In dit artikel worden onderscheid gemaakt tussen de verantwoordelijkheid van de uitgever, de optionele bescherming van het Fonds en garanties van derden.CLC App, CPP, GEF, of een breeder netwerk dat automatisch een waardebon garandeert.

**Baseline-verantwoordelijkheid van de uitgever**

- Elke waardebon is in de eerste plaats de verantwoordelijkheid van zijn uitgever.De uitgever verbindt zich ertoe het aangegeven goed, dienst of legaal contant-equivalent te leveren volgens zijn gepubliceerde voorwaarden.
- De uitgevers zouden bekendmaken wie de waardebon mag indienen, wat de nakoming betekent, waar en wanneer het beschikbaar is, welke bewijsstukken nodig zijn en welke rechtsmiddelen van toepassing zijn.
- Als een uitgever niet voldoet, is de uitgever de belangrijkste verantwoordelijke partij. Fonds- of netwerkbescherming geldt alleen wanneer deze afzonderlijk wordt aangenomen, gefinancierd en bekendgemaakt.

**Optioneel Poolbescherming**

Een Fondsbeheerder kan ervoor kiezen een beperkt gedefinieerde bescherming toe te voegen aan toegelaten waardebonnen. Het is niet automatisch en zou de verantwoordelijke partij, financiering, in aanmerking komende evenementen, caps, vensters, bewijsmateriaal, uitsluitingen en rechtsmiddelen moeten identificeren in Fonds metadata en toepasselijke voorwaarden.

Illustratieve beschermingssoorten zijn:

1. **Bescherming van reserve-activa:** na niet-nakoming door de geverifieerde uitgever betaalt de verantwoordelijke Poolentiteit een vast bedrag in een aangewezen reserveactief, afhankelijk van zijn gepubliceerde maximum en beschikbare gefinancierde reserves.
2. **Swap-back venster:** na een in aanmerking komende gebeurtenis biedt de fonds een tijdelijk beperkt swappad naar het voorafgaande of andere goedgekeurde actief, onder voorbehoud van caps en inventaris. Dit is een liquiditeitsbescherming die afhankelijk is van inventaris, niet een belofte dat elke swap omkeerbaar is.
3. **Alternatieve nakoming:** de verantwoordelijke partij organiseert een goedgekeurde vervangende leverancier binnen een gepubliceerde hoeveelheid- of waardeheffing.
4. **Beveiliging van de wisselkoersband:** voor geselecteerde voucherklassen biedt een Fonds alleen de in zijn reeds bestaande voorwaarden vermelde dekkingsaanpassing of swap-back remedy aan.

**Mogelijke financieringsbronnen**

- **Bond van de uitgever:** zekerheid die door de uitgever is geplaatst of in een openbaar gemaakte reserve wordt gehouden en beschikbaar is na een geverifieerd gedekte gebeurtenis.
- **Poolreservaat:** activa die worden gecontroleerd door de verantwoordelijke Fonds-entiteit en toegewezen zijn aan de beschermingen die zij adverteert.
- **Bonds van een derde waarnemer:** zekerheid die door een geïdentificeerde externe borg wordt geplaatst voor vermelde emittenten, voucherklassen of evenementen.

De garantieparticipatie zou voldoen aan gepubliceerde in aanmerking komingscriteria, obligatiesomvang, concentratielimieten, besluitnemingsverantwoordelijkheid en wettig handhavingsregels.

**Vorderingenprocedure**

Een aangenomen beleid zou auditierbare triggers definiëren, zoals een na de geldige terugbetalingsvoorlegging overschreden vervullingstermijn, geverifieerde insolventie van de uitgever, een gedekte brug of niet-verzekering of een formeel aangekondigde incidentstatus.

- de wijze waarop een deelnemer een vordering opent en het vereiste bewijsmateriaal voor indiening en nakoming verstrekt;
- die de voorwaarden van de waardebon, de antwoorden van de uitgever en de technische gegevens controleert;
- de beslissings- en beroepvensters; en
- het geautoriseerde betaalpad, activa, caps en ontvangstbewijs.

De opbrengst van uitgiften, arbitrage of wettig handhaving zou de toepasselijke obligaties of reserves volgens het gepubliceerde beleid opnieuw invullen voordat deze worden gebruikt voor de voorgestelde toegang tot CLC Network Fonds swap.

**Vereiste openbaarmakingen**

Voor elke gedekte fonds- en voucherklasse zou de verantwoordelijke partij:

- of een borg afwezig is, opsioneel of verplicht;
- de obligatie- of reservegrens en concentratiekappen;
- de beschermingssoorten, activa, caps, ramen en uitsluitingen;
- de deadlines voor indiening, nakoming, aanspraak en beroep; en
- Een duidelijke verklaring van wie waarborgt wat en wat niet.

**Curatiebeginsel.** FondsbeheerdersDe verantwoordelijke juridische of bestuursstructuren zijn aansprakelijk voor de bescherming die zij adverteren.CPP-compatibele implementatie kan standaarden, registers of optionele gedeelde beleidslijnen bieden, maar geen van beideCLCnoch GEF automatisch garandeert waardebonnen of fondsen.

### **11.4 Beveiliging tegen vangst**

In het kader van dit model zijn de volgende kritieke acties die een vastgestelde hoogste goedkeuringsniveau en een lange termijn vereisen:

1. het veranderen van de voorgestelde kostenwaterval, met inbegrip van de dekking en de prioriteiten van de kernoperaties;
2. het wijzigen van de wortels van het canonische register;
3. veranderende dekkingskader, claims caps of besluitnemingsinstantie;
4. het uitbreiden van de bevoegdheden voor noodpauzes; of
5. het verzwakken van de in dit document vermelde verbintenissen inzake forkability, transparantie of poolsoevereiniteit.

### **11.5 Procedure voor vork en uitgang**

Als de governance wordt vastgelegd of de waarden aanzienlijk afdrijven, kunnen gemeenschappen, Fondsbeheerders en exploitanten proberen te vertrekken door de netwerkgovernance-laag af te sluiten.

Een exitproces kan:

1. **Publiceer een snapshot:** het exporteren van de geselecteerde registers, waardebonnen, waarden, limieten en tarievenbeleid en vervolgens een ondertekende snapshot-hash publiceren.
2. **Herinzetten van governance-diensten:** nieuwe registerroots, routediensten en geaccepteerde vergoedings- of dekkingmodules inzetten onder een nieuwe verantwoordingsplichtige structuur.
3. **Herregistratie:** laat Fondsbeheerders zich inschrijven door hun Fonds-adressen te registreren onder de nieuwe root zonder dat houders anderszins functionele waardebonnen moeten migreren.
4. **Herstellen van cliënten:** het toevoegen van de nieuwe root als een selectioneel netwerkprofiel in SDK's en interfaces, met eventuele standaardwijzigingen door middel van het openbaar gemaakte governance-proces.
5. **Beheer van een brugperiode:** compatibele routes waar ze veilig zijn te handhaven en routes die in strijd zijn met de regels van het nieuwe profiel te ontkennen.

De ontwerpdoelstelling is dat het verlaten van een canoniek register niet anders functionele lokale fondsen uitschakelt.
