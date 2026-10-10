# Protocol

De contracten van Protocol v1.1.0 leveren de bouwstenen op de blockchain voor het **Commitment Pooling Protocol (CPP)** dat in [hoofdstuk 1](/nl/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) van de White Paper wordt beschreven. Deze referentie volgt de openbare [`v1.1.0`-release](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Bekijk [Begrippen en woordenschat](/nl/introduction/concepts) voor de productlagen, verantwoordelijke rollen, levenscyclus van handelingen, waarden, limieten, kosten en statusbegrippen die hier worden gebruikt.

Grassroots Economics Foundation (GEF) beheert de progressieve webapp op [cosmolocal.credit](https://cosmolocal.credit). Die App is één manier om met deze contracten te werken. De App en de contracten zijn afzonderlijke onderdelen. Het beheren van de interface maakt GEF op zichzelf niet tot Uitgever van een waardebon, Fondsbeheerder, bewaarder, garant of tegenpartij bij een gebruikerstransactie. Deze rollen hangen af van de betreffende implementatie, de adressen van beheerders en de gepubliceerde voorwaarden van de Uitgever of het Fonds. Bekijk de [Gebruiksvoorwaarden](/nl/governance/terms).

## Implementatiepatroon

De meeste modules met status worden via Solady’s `ERC1967Factory` geïnitialiseerd als **ERC-1967-proxy-instanties**. Meerdere instanties kunnen dezelfde implementatie delen en toch afzonderlijke eigenaars, configuraties en opslag behouden. Een implementatie kan ook deterministische salts gebruiken, zodat adressen vóór de implementatie kunnen worden voorspeld.

Niet ieder contract gebruikt een proxy. `DecimalQuoter` en `SwapRouter` zijn statusloze, rechtstreekse implementaties. `RescueVault` en `ERC1967Factory` worden eveneens rechtstreeks geïmplementeerd. De overige hieronder genoemde modules met status zijn ontworpen voor proxy-implementatie.

Elke proxy heeft een beheerder die de implementatie kan vervangen. Proxybeheer staat los van contracteigendom en moet aan een passend bestuurd adres worden toegewezen. Een upgrade kan het gedrag veranderen, zelfs nadat een Fonds zijn configuratie heeft verzegeld. Gebruikers moeten daarom zowel de Fondseigenaar als de proxybeheerder beoordelen.

Ondersteuning van EIP-165 is eveneens contractgebonden en niet universeel. `GiftableToken`, de drie quoters, `OracleRelay`, `Limiter`, verschillende registers en indexen, `Splitter`, `EthFaucet`, `PeriodSimple` en `RescueVault` bieden deze ondersteuning. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` en `CAT` bieden in v1.1.0 geen `supportsInterface`.

## Overzicht van componenten

- **GiftableToken** — ERC20-mechanismen voor voorraad, aanmaken, verbranden en optioneel verval. Een Uitgever kan een instantie als waardebon gebruiken, maar alleen het contract bepaalt niet wat kan worden ingewisseld, door wie, waar of onder welke voorwaarden.
- **SwapPool** — Tokenkluis en motor voor swapafwikkeling. Een implementatie kan componenten voor samenstelling, waardering, kosten, limieten en protocolkosten koppelen, of ondersteunde afhankelijkheden ongeconfigureerd laten.
- **DecimalQuoter, RelativeQuoter en OracleQuoter** — Uitwisselbare waarderingsmodules voor decimale pariteit, door de eigenaar beheerde relatieve koersen of uit een oracle afgeleide koersen. `OracleRelay` kan één externe feed doorgeven aan een `OracleQuoter`.
- **FeePolicy en Limiter** — Optionele regels voor kosten per paar en saldolimieten per token in een Fonds.
- **ProtocolFeeController** — Een optionele en wijzigbare instelling voor het protocolkostentarief, de ontvanger en de actieve status die een Fonds tijdens de afwikkeling kan raadplegen.
- **TokenUniqueSymbolIndex, AccountsIndex en ContractRegistry** — Componenten voor het vinden van tokens, accounts en adressen. `CAT` registreert de gerangschikte voorkeuren van een account voor afwikkelingstokens.
- **SwapRouter** — Berekeningen voor exacte invoer en exacte uitvoer over een voorgesteld pad met meerdere Fondsen. Deze component geeft alleen offertes, bewaart geen tokens en voert geen swaps uit.
- **Splitter, EthFaucet, PeriodSimple en RescueVault** — Ondersteunende hulpmiddelen voor distributie, gasfinanciering, snelheidslimieten en herstel van activa.

De contracten kunnen op verschillende manieren worden gecombineerd. Een registervermelding, offerte of pad in een graaf garandeert niet dat een transactie wordt uitgevoerd. De actuele liquiditeit, tokenlimieten, kosten, oraclestatus, autorisatie, deadlines, netwerkomstandigheden en configuratie van ieder Fonds blijven van toepassing.
