# Protocole

Les contrats Protocol v1.1.0 fournissent les éléments constitutifs de la chaîne pour **Protocole de mise en commun des engagements (CPP)** décrits dans [Le chapitre 1](/fr/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) du livre blanc. Cette référence suit le public [Relâchement `v1.1.0`](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Utilisation [Concepts et vocabulaire](/fr/introduction/concepts) pour les couches de produits, les rôles responsables, le cycle de vie de l'action, les valeurs, les limites, les frais et les termes de statut utilisés ici.

Grassroots Economics Foundation (GEF) exploite l'application Web Progressive à l'adresse suivante:[cosmolocal.credit](https://cosmolocal.credit), ce qui offre une façon d'interagir avec ces contrats. L'application et les contrats sont distincts. L'exploitation de l'interface ne fait pas par elle-même de GEF un émetteur de bon d’échange, de Gestionnaire de Bassin, un dépositaire, un garant ou une contrepartie d'une transaction d'utilisateur. Ces rôles dépendent du déploiement pertinent, des adresses des contrôleurs et des conditions publiées de l'émetteur ou du bassin. Voir le [Conditions d'utilisation](/fr/governance/terms).


## Modèle de déploiement

La plupart des modules statiques sont initialisés comme **Des instances de proxy ERC-1967** à travers le `ERC1967Factory` de Solady. Plusieurs instances peuvent partager une mise en œuvre tout en conservant des propriétaires, une configuration et un stockage distincts. Un déploiement peut également utiliser des sels déterministes afin que les adresses puissent être prédites avant le déploiement.

Tous les contrats ne sont pas par procuration. `DecimalQuoter` et `SwapRouter` sont des déploiements directs sans état; `RescueVault` et `ERC1967Factory` sont également déployés directement. Les modules statiques restants énumérés ci-dessous sont conçus pour le déploiement de proxy.

Chaque proxy a un administrateur qui peut remplacer sa mise en œuvre. L'administration par procuration est distincte de la propriété du contrat et devrait être attribuée à une adresse régie de manière appropriée. Une mise à niveau peut modifier le comportement même après qu'un bassin ait scellé la configuration, de sorte que les utilisateurs devraient évaluer à la fois le propriétaire du bassin et l'administrateur du proxy.

Le support EIP-165 est également spécifique au contrat, pas universel. Il est exposé par `GiftableToken`, les trois cotants, `OracleRelay`, `Limiter`, plusieurs registres et indices, `Splitter`, `EthFaucet`, `PeriodSimple` et `RescueVault`. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` et `CAT` n'exposent pas `supportsInterface` dans la v1.1.0.


## Carte des composants

- **Le jeton cadeau**— ERC20 mécanique d'alimentation, de fraisage, de combustion et d'expiration facultative. Un émetteur peut utiliser une instance comme un bon d’échange, mais le contrat seul ne définit pas ce qui peut être racheté, par qui, où ou à quelles conditions.
- **SwapPool**— Un coffre à jetons et un moteur de règlement des échanges. Un déploiement peut joindre des composants de curation, d'évaluation, de redevance, de limite et de redevance de protocole ou laisser les dépendances prises en charge non définies.
- **Quoter décimal, Quoter relatif et OracleQuoter** — Modules d'évaluation interchangeables pour la parité décimale, les taux relatifs gérés par les propriétaires ou les taux dérivés de l'oracle. `OracleRelay` peut transmettre un flux externe pour une utilisation par un `OracleQuoter`.
- **FeePolicy et Limiter**— Règles facultatives sur les frais de paire et limites de solde de bassin par jeton.
- **Contrôleur des frais de protocole**— Tarif de protocole facultatif et variable, bénéficiaire et état actif qu'un bassin peut consulter pendant le règlement.
- **TokenUniqueSymbolIndex, AccountsIndex et ContractRegistry** — Composants servant à découvrir les jetons, les comptes et les adresses. `CAT` enregistre les préférences ordonnées d’un compte pour les jetons de règlement.
- **SwapRouter**— Calculs d'entrée et de sortie exacts sur un parcours multipools proposé. Il ne conserve pas de jetons ni n'exécute d'échanges.
- **Splitter, EthFaucet, PeriodSimple, et le coffre-fort de sauvetage**— Soutenir les services de distribution, de financement du gaz, de limitation des taux et de récupération des actifs.

Les contrats peuvent être combinés de différentes manières. Une liste de registre, un devis ou un parcours graphique ne garantit pas qu'une transaction sera exécutée: la liquidité actuelle, les limites des jetons, les frais, l'état de l'oracle, l'autorisation, les délais, les conditions du réseau et la configuration de chaque bassin s'appliquent toujours.
