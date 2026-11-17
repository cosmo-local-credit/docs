# Bestuurmechanismen

Het bestuur van Cosmo-Local Credit (CLC) is verdeeld over verschillende rollen en ligt niet bij één universele autoriteit. Deze pagina beschrijft bestuursmogelijkheden voor netwerken die met CLC compatibel zijn. Ze schrijft geen enkele rechtsvorm, stemmethode of organisatie voor.

Grassroots Economics Foundation (GEF) beheert de openbare progressieve webapp op `cosmolocal.credit` en de ondersteunende diensten. In die rol kan GEF interfaces en catalogi onderhouden, minimale normen voor vermeldingen of veiligheid toepassen, inhoud modereren, functies van de App beperken en technische werkzaamheden coördineren. Tenzij GEF uitdrukkelijk een andere rol voor een specifieke regeling aanvaardt, is GEF niet de Uitgever van een door een gebruiker gemaakte waardebon, de Fondsbeheerder van een door een gebruiker gemaakt Fonds, een garant, verzekeraar, bewaarder, kredietgever, kredietnemer, partij die inwisselt of partij bij een transactie tussen gebruikers.

De [Gebruiksvoorwaarden](/nl-BE/governance/terms) regelen het gebruik van de openbare App en leggen deze verantwoordelijkheden nader uit.

[Begrippen en woordenschat](/nl-BE/introduction/concepts) koppelt deze publieke rollen aan contracteigendom, proxybeheer, beheer van afhankelijkheden, catalogusmoderatie en ontvangst van kosten.

## Verantwoordelijkheid per rol

- **Uitgevers van Waardebonnen** besturen hun eigen Aanbiedingen. Zij publiceren juiste informatie over identiteit, capaciteit, voorraad, waardering, vervaldatum, aanbieding ter inwisseling, nakoming, locatie, tijd, kosten, beperkingen en herstelmogelijkheden. Zij blijven verantwoordelijk voor het nakomen van die toezeggingen.
- **Fondsbeheerders** besturen toelating, samenstelling van activa, waardering, kosten, limieten, voorraad, reserves, bijdragen, conflicten, herkomst, configuratie, pauzes, upgrades en ieder garantie- of verliesverdelingsmechanisme van hun Fondsen.
- **Register- en servicebeheerders** kunnen bepalen welke Fondsen of activa in een register verschijnen en de bedrijfsvoorschriften voor opsporing, routing, monitoring, liquiditeitsondersteuning of andere gedeelde diensten. Hun dienstverleningsbevoegdheid strekt zich niet automatisch uit tot de activa van een Fonds of de verplichtingen van een uitgevende instelling.
- **Gebruikers** bepalen of een Uitgever, Waardebon, Fonds, offerte en transactie voor hen aanvaardbaar en rechtmatig zijn. Een registervermelding of App-vermelding is geen garantie of goedkeuring.

Een persoon of organisatie kan meer dan één rol vervullen, maar zij moet elke rol en de daaruit voortvloeiende conflicten en verplichtingen openbaar maken.

## Beheer op poolniveau

Een Fondsbeheerder is verantwoordelijk voor de gepubliceerde samenstelling, waardering, beperkingen, kosten, uitwisselingsvoorwaarden, aanvaarde toezeggingen, voorraadbeleid, lokale geschillen, herstelproces en toegestane bestuurswijzigingen van dat Fonds. Technische bevoegdheden kunnen verdeeld zijn over een `SwapPool`-eigenaar, proxybeheerder, beheerders van afhankelijkheden, multisig-ondertekenaars en kostenontvangers. De publieke regels moeten deze bevoegdheden afzonderlijk benoemen in plaats van ze als één rol te behandelen.

Herstel binnen een Fonds blijft bij het bevoegde bestuur en de verantwoordelijke partijen. Een Fondsbeheerder kan binnen zijn bevoegdheid een configuratie corrigeren, een toelating opschorten, een lokaal geschil behandelen of een herstelmaatregel aannemen. De beheerder kan de openbare transactiegeschiedenis niet wissen en de afzonderlijke verplichting van een Uitgever niet stilzwijgend afboeken.

## Operaties op netwerkniveau

De productieversies van de CLC App en CLC Core verzorgen gedeelde ontdekking, routeoffertes, voorbereiding van walletbatches, relaycoördinatie, indexering, afstemming en gebundelde transactieoverzichten van gerouteerde wissels. Incidenten op netwerkniveau kunnen bestaan uit verouderde of niet-beschikbare routegegevens, afstemmingsfouten, niet-ondersteunde afhankelijkheden, relayfouten en interoperabiliteitsproblemen tussen Fondsen.

Een beheerder kan zijn eigen dienst pauzeren of corrigeren, de geïndexeerde status vernieuwen, niet-ondersteunde paden uitsluiten, een storing toelichten en afstemmen met getroffen Fondsbeheerders. Deze operationele rol geeft geen bevoegdheid om de regels van een onafhankelijk Fonds te wijzigen, de voorraad ervan te verplaatsen, een toezegging van een Uitgever kwijt te schelden of een lokaal geschil over nakoming te beslissen.

De huidige door deelnemers gestarte routing staat ook geen automatische herbalancering van Fondsen toe. Iedere dienst voor herbalancering, netting, gedeelde liquiditeit, garanties of verzekering vereist afzonderlijke opt-inbevoegdheid, controles, verantwoordelijke partijen en gepubliceerde voorwaarden.

## Beheer op registerniveau

Een register- of catalogusbeheerder kan onjuiste vermeldingen, de integriteit van identiteit en metadata, registerrechten, publicatiestatus, servicefouten en procedures voor correctie, opschorting of beroep behandelen. Een registerrecord ondersteunt ontdekking; het is geen beoordeling van de capaciteit van de Uitgever, Fonds-garantie of bewijs van nakoming.

Het corrigeren of verwijderen van een vermelding draait geen afwikkeling op de blockchain terug, verwijdert geen saldo, verandert de onafhankelijk bestuurde configuratie van een Fonds niet en boekt geen openstaande toezegging af. Voor zulke uitkomsten zijn de bevoegdheid en het proces nodig die gelden voor het betreffende contract, Fonds, de Uitgever of wettelijke verplichting.

## Routebewijs en verantwoordelijkheid

Een gerouteerde uitwisseling bewaart de grenzen tussen haar hops. Ieder Fonds past zijn eigen toelating, quote, tokensaldoplafond, kosten, voorraad en beheerdersbevoegdheden toe. CLC Core groepeert het technische resultaat in één ontvangstbewijs, maar dat ontvangstbewijs voegt het bestuur van de Fondsen niet samen en draagt de verantwoordelijkheid van een Uitgever niet over aan de routebeheerder.

Het ontvangstbewijs kan de routekeuze, autorisatie, transactiestatus en afwikkelingsbedragen en kosten per hop aantonen. Aanbieding ter inwisseling, nakoming, tevredenheid en afboeking in de echte wereld vereisen afzonderlijk bewijs en blijven de verantwoordelijkheid van de geïdentificeerde Uitgever en het toepasselijke proces.

## Verantwoordelijke governance-structuren

Een CLC-compatibel Fonds, register of dienst kan worden beheerd door een non-profit stichting, coöperatie, gemeenschapsgroep, federatie, bedrijf, multisig, publieke instantie, institutionele raad, stemmingssysteem op ketting of een andere verantwoordelijke structuur. Welke structuur ook wordt gekozen, de deelnemers moeten in staat zijn om te bepalen:

- die bevoegd is om beslissingen te nemen en uit te voeren;
- hoe activa, emittenten en deelnemers worden toegelaten, beoordeeld, opgeschort of verwijderd;
- de wijze waarop waarderingen, vergoedingen, limieten, reserves, garanties en andere materiële instellingen worden vastgesteld en gewijzigd;
- welke afhankelijkheden of contracten kunnen worden opgebouwd, vervangen, onderbroken of permanent gesloten;
- hoe belangenconflicten worden bekendgemaakt en behandeld;
- welke registraties, kennisgevingen, goedkeuringen en herzieningstermijnen van toepassing zijn;
- welke noodbevoegdheden bestaan en hoe het gebruik ervan wordt beoordeeld; en
- Hoe deelnemers kunnen klagen, vertrekken, migreren of onopgeloste verplichtingen aanpakken.

De gepubliceerde regels moeten overeenstemmen met de bevoegdheden die beschikbaar zijn in de relevante opdrachten en diensten. Het bestuur moet belangrijke beslissingen transparant en controleerbaar houden en moet niet convertibiliteit, liquiditeit, rendementen, verzekeringen, reserves of garanties breder beschrijven dan de verantwoordelijke partij daadwerkelijk kan bieden.

## Opties voor technisch bestuur

Wanneer stemmen met tokens passend is, kan een implementatie gebruikmaken van contracten van [OpenZeppelin Governor](https://docs.openzeppelin.com/contracts/4.x/api/governance) en een interface zoals Tally. Andere implementaties kunnen werken met multisig-goedkeuringen, coöperatieve besluiten, bestuursbesluiten, mandaten van publieke instanties of hybride processen.

Deze instrumenten zijn optioneel. De openbare App biedt momenteel via CLC Core routing op dezelfde blockchain die door deelnemers wordt gestart. Dat betekent niet dat er stemmen met tokens, automatische herbalancering, netting, gedeelde verzekering, liquiditeitsprogramma's op netwerkniveau of centraal bestuur door GEF bestaan. Iedere implementatie moet haar werkelijke besluitvormers, contracten, dienstverleners en beleid benoemen.

## Interface-actie en staat op de keten

Een beheerder van een App of register kan een item in een interface verbergen, markeren, opschorten of verwijderen. Die handeling pauzeert niet noodzakelijk een smart contract, draait geen voltooide transactie terug, verwijdert geen openbaar blockchainrecord of saldo en boekt geen verplichting tussen gebruikers af. Bestuursplannen moeten onderscheid maken tussen interfacebediening, bevoegdheden op de blockchain en juridische plichten die buiten de blockchain blijven bestaan.

Voor het bredere ontwerp, zie het hoofdstuk [Governance Mechanics](/nl-BE/white-paper/chapter-11-governance-mechanics) in de White Paper.
