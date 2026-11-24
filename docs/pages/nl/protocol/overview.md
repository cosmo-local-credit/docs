# Protocol

Het **Commitment Pooling Protocol (CPP)** beschrijft hoe onafhankelijk bestuurde Fondsen Waardebonnen selecteren, ruilregels publiceren en uitwisseling mogelijk maken. Een Houder gebruikt een Waardebon later bij de Uitgever voor de beloofde goederen of diensten. Dit zijn afzonderlijke stappen, met afzonderlijke verantwoordelijkheden.

Deze site legt deze begrippen uit en laat zien hoe je de CLC App gebruikt. De [CLC-softwaredocumentatie](https://software.cosmolocal.credit/) is de definitieve referentie voor software-implementatie, contracten, API's, uitrol en beheer. Deze is momenteel beschikbaar in het Engels.

Begin met [Begrippen en woordenschat](/nl/introduction/concepts) voor de gedeelde termen, of met de [White Paper](/nl/white-paper) voor het bredere ontwerp en de voorstellen.

## Implementatiepatroon

Verschillende gemeenschappen en organisaties kunnen compatibele software gebruiken onder hun eigen regels. Grassroots Economics Foundation beheert de [openbare CLC App](https://cosmolocal.credit). Iedere implementatie moet haar beheerders, contracten en verantwoordelijke autoriteiten benoemen.

Gebruik [Implementaties en verificatie](https://software.cosmolocal.credit/contracts/deployments) voor contractadressen, uitrolinstructies en het controleren van eigenaars en upgradebevoegdheden. Begin bij de [CLC Core API](https://software.cosmolocal.credit/core-api/) om de ondersteunende diensten te beheren.

## Overzicht van componenten

Gebruik de softwarereferentie voor:

| Onderwerp | Definitieve softwaredocumentatie |
| --- | --- |
| Waardebonnen maken, voorraad en verval | [Waardebonnen](https://software.cosmolocal.credit/contracts/vouchers) |
| Fondsinstellingen, stortingen, opnames en zeggenschap | [Fondsen](https://software.cosmolocal.credit/contracts/pools) |
| Wisselkoersen berekenen | [Quoters](https://software.cosmolocal.credit/contracts/quoters) |
| Swaps uitvoeren, kosten en transactiegegevens | [Swaps offreren en afwikkelen](https://software.cosmolocal.credit/contracts/swaps) |
| Uitwisseling via meerdere Fondsen | [Routing](https://software.cosmolocal.credit/contracts/routing) |
| Zoeken en ondersteunende contracten | [Registers en hulpmiddelen](https://software.cosmolocal.credit/contracts/registries) |
| API-verzoeken en antwoorden | [OpenAPI-referentie](https://software.cosmolocal.credit/core-api/reference) |
| Backend- en routinginstellingen | [Configuratie](https://software.cosmolocal.credit/core-api/configuration) |

## Gerouteerde uitwisseling op applicatieniveau

De App kan een deelnemer helpen via meerdere Fondsen te ruilen wanneer een geschikte route beschikbaar is. De deelnemer beoordeelt de offerte en geeft toestemming voor de uitwisseling. Ieder Fonds behoudt zijn eigen regels en verantwoordelijke partijen.

Zie [Routes en verantwoordelijkheden](/nl/protocol/network) voor de betekenis voor deelnemers, en [Routingimplementatie](https://software.cosmolocal.credit/contracts/routing) voor hoe de software routes offreert en uitvoert.

Software maakt de uitwisseling mogelijk. Uitgevers blijven verantwoordelijk voor de toezeggingen van hun Waardebonnen en Fondsbeheerders voor hun gepubliceerde regels. Voor gebruik van de openbare App gelden de [Gebruiksvoorwaarden](/nl/governance/terms).
