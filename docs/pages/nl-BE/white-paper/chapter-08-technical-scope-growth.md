## **8. Technische reikwijdte en groei**

Dit hoofdstuk beschrijft optie- of voorgestelde werkzaamheden.CLC App of Protocol v1.1.0.

Mogelijke werkgebieden zijn:

- executie routing tussen compatibele fondsen, met registry, quote, limiet, vergoeding en inventaris ontdekking;
- tijelocked escrow- of HTLC-adapters voor cross-domain uitvoering wanneer geen atoomverzekering beschikbaar is;
- interfaces en beleidsinstrumenten voor kleine of persoonlijke Fondsen;
- controleerbare registers voor bonen, fondsen, wisselkoersmethoden, limieten, beheerders en vergoedingen;
- de connectoren van de betalingsdienstaanbieder die specifiek zijn voor de implementatie, de kassaflossingen en de controles op de in aanmerking komendheid;
- verbindingen met fungieel vermogen tot externe liquiditeitsinstellingen voor herbalansering en betalingsliquiditeit; en
- de door het beleid gedekte schatkistconversie voor aangenomen dekking, operationele kosten of liquiditeitsmandaten.

Een fonds zou een beschermde externe referentie voor een fungieel actief kunnen gebruiken, maar de gepubliceerde wisselkoersmethode, limieten, vergoedingen en inventaris zouden zijn quotaties bepalen.

### **8.1 Voorgestelde routenservice- en SDK normen**

**Ontdek.** Een voorgestelde routedienst zou geïdentificeerde registers vragen voor de toelating van activa, wisselkoersmethoden, limieten, kosten, inventaris, incidenten en controllerinformatie.

**Netwerkprofielen.** Een klant kan meer dan één registerroot of beleidsprofiel ondersteunen. Het zou de deelnemer vertellen welk profiel, tegenpartijen, adapters, beperkingen en verantwoordelijke dienstverleners een offerte gebruikt.

**Het padbeleid.** Een verantwoordelijke exploitant zou onveilige afhankelijkheden of tegenpartijen kunnen uitsluiten en grenswaarden op het niveau van de route, vereisten voor versheid en gezondheidscriteria kunnen toepassen.

**Vergoedingen en beperkingen.** Een offerte zou de Fonds-kosten, eventuele aanvullende lopende Protocolkosten en alle afzonderlijk voorgestelde routing- of servicekosten uiteenzetten.

**Atomiciteit en herstel.** Als het gebruik maakt van HTLC's of escrow, zou de dienst timeouts, abortuspaden, verantwoordelijke controllers, incidentprocedures en residuele risico's onthullen.

**Voorstel voor een netting en een herbalansering van de partijen.** Een opt-in dienst kan de intenties van herbalans verzamelen en op zoek gaan naar compatibele cycli of ketens.

1. een machineleesbaar ontvangstbewijs publiceren waarin uitgevoerde cycli, activa, bedragen, waarderingstijden en vergoedingen worden geïdentificeerd;
2. het handhaven van de vastgestelde maximumpercentages en het beleid van de tegenpartij;
3. een activiteit verwerpen die in strijd is met de toestemming, beperkingen of beschikbare inventaris van de deelnemende Fonds; en
4. het behoud van deterministische gegevens en ontvangsten voor beoordeling en geschillenbeslechting.

**SDK-vereisten.** Een SDK voor uitgevoerde routes zou een deterministische koppeling tussen offerte en ontvangstbewijs, invariante controles per stap, begrijpelijke foutcodes en auditvriendelijke logboeken bieden. De huidige `SwapRouter` van Protocol v1.1.0 geeft alleen offertes en voert deze voorgestelde routes niet uit.

#### **8.1.1 Minimaal vereenvoudigingscompatibiliteitsspecificatie**

Een Fonds-ecosysteem dat cross-profiel routing zoekt, zou machineleesbare informatie publiceren voor:

1. **Registerwortels:** Identificatoren voor activa, fondsen, wisselkoersmethoden, limieten en tariefbeleid of een wortel die deze deterministisch oplost.
2. **Beroep:** het profiel, de activa binnen en buiten, de bedragen, de bron van aanbiedingen en het tijdstempel, de limiet-opname, de vergoedingen, het inventarisresultaat en het uitvoeringsresultat voor elke sprong.
3. **Bewerkingssignalen:** versheidsgegrensde informatie over inventaris, beperkte benutting, incidenten en eventuele afzonderlijk bewezen nakoming of gefinancierde bescherming.
4. **Beleidsbeperkingen:** toegestane of afgewezen tegenpartijen, activaclassen, adapters en eventuele escrowvereisten.
5. **Codes voor storingen:** deterministische verklaringen voor afwijzing, verstrijking, beperking, inventarisatie, beleid, afhankelijkheid of incidenten.

Een profiel kan dekking, naleving, arbitrage of andere diensten toevoegen zonder dat ze vereisten maken voor de basis CPP-compatibiliteit.

### **8.2 Vergunning, verificatie en exit**

De contracten van Protocol v1.1.0 zijn EVM-compatibel. Contracten in de map `src` van de Protocolrepository zijn gepubliceerd onder AGPL-3.0, behalve geïdentificeerde ongewijzigde onderdelen van derden die hun eigen voorwaarden behouden. Gepubliceerde broncode, ABI’s en implementatie-instructies ondersteunen onafhankelijke beoordeling, maar bewijzen op zichzelf geen audit, veilige implementatie of naleving van de wet.

Elke implementatie zou haar codeversie, de bouw afkomst, adressen, controller- en upgradebevoegdheden, auditstatus, registerspiegels en eventuele tijdslok- of pauzebeschermingen afzonderlijk bekendmaken.

Een voorgestelde **gavenpakket** zou kunnen omvatten:

1. deterministische deployment scripts;
2. instantiebeslag van het register en exportinstrumenten;
3. een gedocumenteerd proces om routediensten, SDK's en interfaces terug te wijzen naar een nieuwe registerwortel;
4. een Fondsbeheerder checklist voor het veilig verlaten van een gedeeld register; en
5. een migratiecontrolelijst voor uitstaande waardebonnen, met inbegrip van kennisgevingen van de uitgever, presentatie- en nakomingstermijnen, voortgezette toegang tot gegevens en rechtsmiddelen.

Compatibele gaven kunnen de veerkracht verbeteren wanneer gemeenschappen, coöperaties, overheidsinstanties, federaties, multinationals of dienstverleners een ander bestuur nodig hebben.
