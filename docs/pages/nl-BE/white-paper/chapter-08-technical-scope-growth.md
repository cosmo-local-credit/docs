# 8. Technische reikwijdte en groei

Dit hoofdstuk onderscheidt de huidige routedienst in productie van optionele of voorgestelde uitbreiding. Een huidige mogelijkheid die hier wordt beschreven, geldt specifiek voor de openbare implementatie van de CLC App en CLC Core. Zij is niet automatisch een functie van de Protocol v1.1.0-contracten of een andere implementatie.

De huidige openbare inzet omvat:

- op grafieken gebaseerde ontdekking van Waardebonnen die via compatibele Fondsen te bereiken zijn;
- gezaghebbende offertes op basis van één vastgezet blok voor geselecteerde routes binnen hetzelfde blockchainnetwerk;
- berekening van de Fonds- en protocolvergoedingen per hop, minimumoutputs en deadlines;
- simulatie van volledige batches, ondertekening door deelnemers en uitvoering van Calibur via relay;
- één transactie binnen hetzelfde blockchainnetwerk die alle routeaanroepen terugdraait als één aanroep mislukt; en
- gebundelde transactieoverzichten en afstemming van afwikkelingsgebeurtenissen per stap.

Mogelijke groeigebieden zijn:

- escrow- of HTLC-adapters met tijdslimieten voor cross-domain uitvoering wanneer atomaire afwikkeling niet beschikbaar is;
- aanvullende register- of beleidsprofielen en cross-profile routing;
- opt-in Fonds voorraadherbalancering en batch netting;
- interfaces en beleidsinstrumenten voor kleine of persoonlijke Fondsen;
- controleerbare registers voor Waardebonnen, Fondsen, wisselkoersmethoden, limieten, beheerders en kosten;
- de connectoren van de betalingsdienstaanbieder die specifiek zijn voor de implementatie, de kassaflossingen en de controles op de in aanmerking komendheid;
- verbindingen met fungieel vermogen tot externe liquiditeitsinstellingen voor herbalansering en betalingsliquiditeit; en
- de door het beleid gedekte schatkistconversie voor aangenomen dekking, operationele kosten of liquiditeitsmandaten.

Externe marktprijzen bepalen niet wat een Uitgever volgens de voorwaarden van een Waardebon verschuldigd is. Een Fonds kan een afgeschermde externe referentie voor een fungibel activum gebruiken, maar de gepubliceerde wisselkoersmethode, limieten, kosten en voorraad bepalen zijn offertes.

## **8.1 Huidige dienstverlening en algemene normen**

**Ontdekking.** CLC Core onderhoudt een afgestemde graaf van geconfigureerde catalogi, registerrelaties, Fondsparameters, kosten, limieten, saldi en blockchaingebeurtenissen. Het schat welke Waardebonnen een sessiewallet kan bereiken en markeert verouderde gegevens. De openbare configuratie zoekt routes van maximaal drie stappen. Ontdekking is geen uitvoerbare belofte.

**Gezaghebbende offerte.** Voor een geselecteerde route leest CLC Core de deelnemende Fondsen op één vastgezet blok en reproduceert het de ondersteunde `SwapPool`-berekeningen. Het specificeert de Fonds- en protocolkosten, stelt per stap een minimale uitvoer en een vervaltijd in, bereidt de walletaanroepen voor en simuleert de volledige batch. Niet-ondersteunde tokens, quoters, wallets of Fondsvoorwaarden worden geweigerd.

**Huidige uitvoering.** De deelnemer ondertekent een Calibur-batch die voor elke stap de bestaande toestemming op nul zet, een nieuwe toestemming verleent en een begrensde opname uitvoert. Een relayer dient één transactie binnen hetzelfde blockchainnetwerk in met `revertOnFailure` ingeschakeld. Dit geeft de huidige route op transactieniveau alles-of-nietsgedrag. Het is geen cross-chain atomiciteit, routering met HTLC's of escrow, automatische herbalancering of verrekening.

**Transactieoverzichten en beheer.** De App groepeert de route onder één tracking-ID en registreert de transactiestatus, volgorde van de stappen, Fondsen, tokenparen, geoffreerde en afgewikkelde bedragen, Fondskosten, protocolkosten en tussentijdse restanten. De dienst bewaakt de actualiteit van de graaf, resultaten van routezoekopdrachten en offertes, simulatiefouten, duur en correcties van afstemming en onopgeloste of onbekende geïndexeerde onderdelen. Operationele telemetrie bewijst geen nakoming door de Uitgever.

**Netwerkprofielen.** Een client kan meer dan één registerwortel of beleidsprofiel ondersteunen. De client moet de deelnemer vertellen welk profiel, welke tegenpartijen, adapters, beperkingen en verantwoordelijke dienstverleners een offerte gebruikt. Een route tussen profielen moet aan de voorwaarden van iedere stap voldoen.

**Routebeleid.** Een verantwoordelijke exploitant kan onveilige afhankelijkheden of tegenpartijen uitsluiten en limieten op routeniveau, actualiteitseisen en gezondheidscriteria toepassen. Deze signalen ondersteunen een beslissing, maar garanderen geen nakoming of bescherming tegen verlies.

**Kosten en limieten.** De huidige offerte specificeert de Fondskosten en iedere aanvullende protocolvergoeding voor elke stap. De openbare App voegt momenteel geen afzonderlijke routeringsvergoeding toe. Eventuele toekomstige servicekosten worden afzonderlijk vermeld. De uitvoering weigert verlopen offertes en overschreden grenzen.

**Cross-domain atomiciteit en herstel.** Wanneer een toekomstige route de huidige atomaire batch binnen één blockchainnetwerk niet kan gebruiken en in plaats daarvan HTLC's of escrow gebruikt, moet de dienst time-outs, afbreekpaden, verantwoordelijke beheerders, incidentprocedures en resterende risico's bekendmaken.

**Voorgestelde batch netting en herbalansering.** Een opt-in service kan de intenties van herbalansen verzamelen en zoeken naar compatibele cycli of ketens. Het zou:

1. een machineleesbaar ontvangstbewijs met vermelding van uitgevoerde cycli, activa, bedragen, waarderingstijdstempels en vergoedingen te publiceren;
2. de vastgestelde limieten per periode en het beleid van de tegenpartij handhaven;
3. activiteiten afwijzen die in strijd zijn met de vergunning, beperkingen of beschikbare voorraden van een deelnemende Fonds; en
4. het bewaren van deterministische inputs en ontvangsten voor herziening en geschillenbeslechting.

**SDK- en interfacevereisten.** Een herbruikbare route-integratie moet een deterministische koppeling tussen offerte en transactieoverzicht, invariantcontroles per stap, begrijpelijke foutcodes en controleerbare logboeken bieden. De huidige App/Core-implementatie biedt deze functies voor haar eigen profiel. De Solidity-`SwapRouter` van Protocol v1.1.0 berekent alleen offertes en voert de route niet uit.

### **8.1.1 Minimale compatibiliteitsspecificatie voor federatie**

Een Fonds-ecosysteem dat cross-profiel routing zoekt, zou machineleesbare informatie publiceren voor:

1. **Registerwortels:** Identificatoren voor activa, fondsen, wisselkoersmethoden, limieten en tariefbeleid of een wortel die deze deterministisch oplost.
2. **Transactieoverzichten:** het profiel, de ingaande en uitgaande activa, bedragen, bron en tijdstip van de offerte, momentopname van limieten, kosten, voorraadresultaat en uitvoeringsresultaat voor elke stap.
3. **Operationele signalen:** informatie met een vastgestelde actualiteitsgrens over voorraad, gebruik van limieten, incidenten en afzonderlijk bewezen nakoming of gefinancierde bescherming.
4. **Beleidsbeperkingen:** toegestane of afgewezen tegenpartijen, activaclassen, adapters en eventuele escrowvereisten.
5. **Codes voor storingen:** deterministische verklaringen voor afwijzing, verstrijking, beperking, inventarisatie, beleid, afhankelijkheid of incidenten.

Een profiel kan dekking, compliance, arbitrage of andere diensten toevoegen zonder die tot vereisten voor basale CPP-compatibiliteit te maken. Iedere optionele dienst identificeert haar verantwoordelijke partij, bevoegdheid, reikwijdte en voorwaarden.

## **8.2 Vergunning, verificatie en exit**

De contracten van Protocol v1.1.0 zijn EVM-compatibel. Contracten in de map `src` van de Protocolrepository zijn gepubliceerd onder AGPL-3.0, behalve geïdentificeerde ongewijzigde onderdelen van derden die hun eigen voorwaarden behouden. Gepubliceerde broncode, ABI’s en implementatie-instructies ondersteunen onafhankelijke beoordeling, maar bewijzen op zichzelf geen audit, veilige implementatie of naleving van de wet.

Elke implementatie zou haar codeversie, de bouw afkomst, adressen, controller- en upgradebevoegdheden, auditstatus, registerspiegels en eventuele tijdslok- of pauzebeschermingen afzonderlijk bekendmaken.

Een voorgestelde **forkkit** kan het volgende omvatten:

1. deterministische deployment scripts;
2. instantiebeslag van het register en exportinstrumenten;
3. een gedocumenteerd proces om routediensten, SDK's en interfaces terug te wijzen naar een nieuwe registerwortel;
4. een Fondsbeheerder checklist voor het veilig verlaten van een gedeeld register; en
5. een migratiecontrolelijst voor uitstaande waardebonnen, met inbegrip van kennisgevingen van de uitgever, presentatie- en nakomingstermijnen, voortgezette toegang tot gegevens en rechtsmiddelen.

Compatibele forks kunnen de veerkracht vergroten wanneer gemeenschappen, coöperaties, overheidsinstanties, federaties, multisigs of dienstverleners een andere governance nodig hebben. Werkelijke continuïteit blijft afhankelijk van contracteigendom, sleutels, afhankelijkheden, interfaces, infrastructuur, wettelijke verplichtingen en diensten van derden.
