# Governancemechanismen

Governance binnen Cosmo-Local Credit (CLC) is verdeeld over verschillende rollen en niet toegewezen aan één universele autoriteit. Deze pagina beschrijft governanceopties voor CLC-compatibele netwerken. Ze schrijft geen enkele rechtsvorm, stemmethode of organisatie voor.

Grassroots Economics Foundation (GEF) beheert de openbare progressieve webapp op `cosmolocal.credit` en de ondersteunende diensten. In die rol kan GEF interfaces en catalogi onderhouden, minimumnormen voor vermeldingen of veiligheid toepassen, inhoud modereren, App-functies beperken en technische werkzaamheden coördineren. Tenzij GEF uitdrukkelijk een andere rol voor een specifieke regeling aanvaardt, is GEF niet de Uitgever van een door een gebruiker gemaakte waardebon, de Fondsbeheerder van een door een gebruiker gemaakt Fonds, een garant, verzekeraar, bewaarder, kredietgever, kredietnemer, partij die inwisselt of partij bij een transactie tussen gebruikers.

De [Gebruiksvoorwaarden](/nl-BE/governance/terms) regelen het gebruik van de openbare App en leggen deze verantwoordelijkheden uitvoerig uit.

[Begrippen en woordenschat](/nl-BE/introduction/concepts) koppelt deze publieke rollen aan contracteigendom, proxybeheer, beheer van afhankelijkheden, catalogusmoderatie en ontvangst van kosten.

## Verantwoordelijkheid per rol

- **Uitgevers van waardebonnen** beheren hun eigen Aanbiedingen. Zij publiceren juiste informatie over identiteit, capaciteit, aanbod, waardering, vervaldatum, aanbieding ter inwisseling, nakoming, locatie, timing, kosten, beperkingen en verhaalmogelijkheden. Zij blijven verantwoordelijk voor het nakomen van die toezeggingen.
- **Fondsbeheerders** beheren toelating, samenstelling van activa, waardering, kosten, limieten, voorraad, reserves, bijdragen, belangenconflicten, herkomst, configuratie, pauzes, upgrades en eventuele mechanismen voor garanties of verliesverdeling voor hun Fondsen.
- **Beheerders van registers en diensten** kunnen bepalen welke Fondsen of activa in een register verschijnen en welke regels en kosten gelden voor routing, monitoring, liquiditeitsondersteuning of andere gedeelde diensten.
- **Gebruikers** beslissen zelf of een Uitgever, waardebon, Fonds, offerte en transactie voor hen aanvaardbaar en wettig zijn. Een registervermelding of App-vermelding is geen garantie of goedkeuring.

Eén persoon of organisatie kan meer dan één rol vervullen, maar moet elke rol en de daaruit voortvloeiende belangenconflicten en verplichtingen bekendmaken.

## Verantwoordelijke governancestructuren

Een CLC-compatibel Fonds, register of dienst kan worden bestuurd door een stichting zonder winstoogmerk, coöperatie, gemeenschapsgroep, federatie, onderneming, multisig, overheidsinstantie, institutioneel bestuur, stemsysteem op de blockchain of een andere verantwoordelijke structuur. Welke structuur ook wordt gekozen, deelnemers moeten kunnen bepalen:

- wie bevoegd is om beslissingen te nemen en uit te voeren;
- hoe activa, Uitgevers en deelnemers worden toegelaten, beoordeeld, geschorst of verwijderd;
- hoe waarderingen, kosten, limieten, reserves, garanties en andere belangrijke instellingen worden vastgesteld en gewijzigd;
- welke afhankelijkheden of contracten kunnen worden geüpgraded, vervangen, gepauzeerd of permanent verzegeld;
- hoe belangenconflicten worden bekendgemaakt en behandeld;
- welke registraties, kennisgevingen, goedkeuringen en beoordelingstermijnen gelden;
- welke noodbevoegdheden bestaan en hoe het gebruik ervan wordt beoordeeld; en
- hoe deelnemers een klacht kunnen indienen, vertrekken, migreren of onopgeloste verplichtingen kunnen aanpakken.

Gepubliceerde regels moeten overeenkomen met de bevoegdheden in de relevante contracten en diensten. Governance moet belangrijke beslissingen transparant en controleerbaar houden en mag omzetbaarheid, liquiditeit, rendement, verzekering, reserves of garanties niet ruimer voorstellen dan de verantwoordelijke partij daadwerkelijk kan bieden.

## Technische governanceopties

Wanneer stemmen met tokens passend is, kan een implementatie gebruikmaken van [OpenZeppelin Governor](https://docs.openzeppelin.com/contracts/4.x/api/governance)-contracten en een interface zoals Tally. Andere implementaties kunnen steunen op multisiggoedkeuringen, besluiten van coöperaties of besturen, mandaten van overheidsinstanties of hybride processen.

Deze hulpmiddelen zijn optioneel. Een bespreking van stemmen met tokens, gedeelde verzekering, routing over het hele netwerk, verrekening of liquiditeitsprogramma’s betekent niet dat elke mogelijkheid actief is in de openbare App of door GEF wordt bestuurd. Elke implementatie moet haar werkelijke besluitvormers, contracten, dienstverleners en beleidsregels benoemen.

## Interfacehandeling en toestand op de blockchain

Een App-beheerder of registerbeheerder kan een item in een interface verbergen, markeren, schorsen of verwijderen. Die handeling pauzeert niet noodzakelijk een smart contract, draait geen voltooide transactie terug, verwijdert geen openbaar blockchainrecord, wist geen saldo en boekt geen verplichting tussen gebruikers af. Governanceplannen moeten interfacebediening onderscheiden van bevoegdheden op de blockchain en van juridische verplichtingen die buiten de blockchain blijven bestaan.

Voor het bredere ontwerp zie het hoofdstuk [Governancemechanismen](/nl-BE/white-paper/chapter-11-governance-mechanics) in de White Paper.
