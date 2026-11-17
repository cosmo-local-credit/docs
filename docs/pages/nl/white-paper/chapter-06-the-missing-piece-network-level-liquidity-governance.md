## **6. Voorgestelde liquiditeit en governance op netwerkniveau**

De ervaring van de historische Sarafu Network motiveerde onderzoek naar twee bredere ontwerpvragen:

1. hoe onafhankelijk beheerde fondsen liquiditeits- en routingdiensten konden coördineren; en
2. Hoe gedeelde diensten aansprakelijk kunnen blijven als de participatie toeneemt.

Eén voorgesteld CLC-ontwerp introduceert een **voorgesteld CLC Network Pool** als regeling voor netwerkbrede clearing en begrotingscoördinatie, en een **voorgestelde CLC-governancetoken**. Geen van beide bestaat in de huidige App of Protocol v1.1.0. Andere implementaties kunnen coöperaties, overheidsinstanties, federaties, multisigs, dienstverleners of andere verantwoordelijke structuren gebruiken zonder een van beide voorstellen over te nemen.

### **6.1 Downside-controles en optionaliteit**

De huidige Protocol v1.1.0 kan Fonds token-balans caps en voorraadcontroles toepassen. Deze controles beperken geselecteerde contractuele acties; ze voorkomen niet dat de uitgever niet presteert, waardeverlies, sleutelverlies of elk ander verlies.

Een toekomstige implementatie zou circuitsonderbrekers, timelocks, reserves, garanties of verzekeringen kunnen toevoegen. Elke bescherming zou een geïdentificeerde verantwoordelijke partij nodig hebben, gedekte gebeurtenis, financiering, maximum, uitsluitingen, duur, bewijs, claimsproces en toepasselijke voorwaarden.

De voorgestelde governance moet de register- en dienstbevoegdheden beperkt en herzienbaar houden. Normale acties kunnen gebruik maken van kennisgeving, vertraging, reden publicatie, beroep en correctieprocessen.

De productieversies van de CLC App en CLC Core bieden nu compatibele routeontdekking en uitvoering in meerdere stappen binnen één blockchainnetwerk voor routes die deelnemers via het geconfigureerde openbare profiel goedkeuren. Offertes passen per stap limieten, kosten, voorraad, grenzen en simulatie toe, terwijl een ondertekende walletbatch als geheel wordt teruggedraaid als één aanroep mislukt.

Deze dienst geeft geen toestemming voor automatische herbalancering van Fondsen of netwerkbrede controle over Fondsvoorraad. Herbalancering, batchverrekening, cross-domain uitvoering met HTLC's of escrow en gedeelde liquiditeitsgovernance vereisen aanvullende bevoegdheden, software, grenzen, foutafhandeling en vastgestelde regels. Meer geoffreerde of uitgevoerde swaps bewijzen op zichzelf geen nakoming van Waardebonnen of maatschappelijke impact.
