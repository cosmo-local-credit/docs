# Le protocole

Les contrats Protocol v1.1.0 fournissent les éléments de construction de la chaîne pour le protocole de regroupement d'engagements (CPP) décrit dans [chapitre 1](/fr/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) du livre blanc. Cette référence fait suite à la publication publique [`v1.1.0`](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Utilisez [Concepts et vocabulaire](/fr/introduction/concepts) pour les couches de produit, les rôles responsables, le cycle de vie de l'action, les valeurs, les limites, les frais et les termes de statut utilisés ici.

Grassroots Economics Foundation (GEF) exploite l'application Web Progressive à [cosmolocal.credit](https://cosmolocal.credit), qui offre une façon d'interagir avec ces contrats. L'application et les contrats sont différents. L'exploitation de l'interface ne fait pas par elle-même de GEF un émetteur de bon, un gestionnaire de pool, un gardien, un garant ou une contrepartie d'une transaction utilisateur. Ces rôles dépendent du déploiement pertinent, des adresses du responsable du traitement et des termes de l'émetteur ou du pool publiés. Voir [Conditions d'utilisation](/fr/governance/terms).


## Modèle de déploiement

La plupart des modules à état sont initialisés en tant qu'instances proxy **ERC-1967** via le `ERC1967Factory` de Solady. Plusieurs instances peuvent partager une mise en œuvre tout en gardant des propriétaires, la configuration et le stockage séparés. Un déploiement peut également utiliser des sels déterministes afin que les adresses puissent être prédites avant le déploiement.

Tous les contrats ne sont pas procurés. `DecimalQuoter` et `SwapRouter` sont des déploiements directs sans État; `RescueVault` et `ERC1967Factory` sont également déployés directement. Les modules d'état restants énumérés ci-dessous sont conçus pour le déploiement par procuration.

Chaque proxy a un administrateur qui peut remplacer sa mise en œuvre. L'administration par procuration est distincte de la propriété contractuelle et doit être attribuée à une adresse régie de manière appropriée. Une mise à niveau peut modifier le comportement même après qu'un Pool ait scellé la configuration, de sorte que les utilisateurs doivent évaluer à la fois le propriétaire du Pool et l'administrateur proxy.

Le support EIP-165 est également spécifique au contrat et non universel. Il est exposé par `GiftableToken`, les trois cotants, `OracleRelay`, `Limiter`, plusieurs registres et indices, `Splitter`, `EthFaucet`, `PeriodSimple` et `RescueVault`. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` et `CAT` n'exposent pas `supportsInterface` dans la version 1.1.0.


## Carte des composants

- **GiftableToken**ERC20 mécanique d'approvisionnement, de coulée, de combustion et d'expiration facultative. Un émetteur peut utiliser une instance comme bon, mais le contrat seul ne définit pas ce qui peut être racheté, par qui, où ou à quelles conditions.
- **SwapPool**Moteur de réserve de jetons et de réglementation de swap. Un déploiement peut joindre des composants de conservation, d'évaluation, de redevance, de limite et de redevance de protocole ou laisser les dépendances prises en charge non réglées.
- **DécimalQuoter, RelativeQuoter et OracleQuoter**Modules d'évaluation interchangeables pour la parité décimale, les taux relatifs gérés par les propriétaires ou les taux dérivés de l'oracle. `OracleRelay` peut transmettre une alimentation externe pour une utilisation par un `OracleQuoter`.
- **Politique des frais et limites**Règles optionnelles sur les frais par paire et les limites par jeton sur le solde du pool.
- **ProtocolFeeController**Taux de frais de protocole, destinataire et état actif facultatif et changeable qu'un Pool peut consulter lors du règlement.
- **TokenUniqueSymbolIndex, Index des comptes et Registre des contrats**Components de détection des jetons, des comptes et des adresses. `CAT` enregistre les préférences des jetons de règlement commandés d'un compte.
- **SwapRouter**Calculs d'entrée et de sortie exactes sur un chemin multi-pools proposé. Il ne détient pas de jetons ou n'exécute pas de swaps.
- **Splitter, EthFaucet, PeriodSimple et RescueVault**Soutenir les services publics de distribution, de financement du gaz, de limite de taux et de récupération d'actifs.

Les contrats peuvent être combinés de différentes manières. Une liste de registre, un devis ou un tracé graphique ne garantissent pas l'exécution d'une transaction: la liquidité actuelle, les limites des jetons, les frais, l'état de l'oracle, l'autorisation, les délais, les conditions du réseau et la configuration de chaque Pool sont toujours applicables.
