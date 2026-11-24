# Protocole

Le **Protocole de mise en commun des engagements (CPP)** décrit comment des Bassins gouvernés de façon indépendante sélectionnent des Bons d’échange, publient leurs règles et permettent les échanges. Le Détenteur utilise ensuite son Bon auprès de l’Émetteur pour obtenir les biens ou services promis. Ces étapes sont distinctes, tout comme les responsabilités qui les accompagnent.

Ce site explique ces concepts et l’utilisation de la CLC App. La [documentation des logiciels CLC](https://software.cosmolocal.credit/) est la référence pour leur fonctionnement technique, les contrats, les API, le déploiement et l’exploitation. Elle est actuellement disponible en anglais.

Consultez [Concepts et vocabulaire](/fr/introduction/concepts) pour les termes communs, ou le [Livre blanc](/fr/white-paper) pour la conception générale et les propositions.

## Modèle de déploiement

Différentes communautés et organisations peuvent exploiter des logiciels compatibles selon leurs propres règles. Grassroots Economics Foundation exploite la [CLC App publique](https://cosmolocal.credit). Chaque déploiement doit identifier ses opérateurs, ses contrats et les autorités responsables.

Pour les adresses des contrats, les instructions de déploiement et la vérification des propriétaires et des pouvoirs de mise à niveau, consultez [Déploiements et vérification](https://software.cosmolocal.credit/contracts/deployments). Pour exploiter les services associés, commencez par l’[API CLC Core](https://software.cosmolocal.credit/core-api/).

## Carte des composants

La documentation des logiciels couvre les sujets suivants :

| Sujet | Référence technique |
| --- | --- |
| Création, quantité émise et expiration des Bons d’échange | [Bons d’échange](https://software.cosmolocal.credit/contracts/vouchers) |
| Configuration, dépôts, retraits et contrôle des Bassins | [Bassins](https://software.cosmolocal.credit/contracts/pools) |
| Calcul des taux de change | [Modules de cotation (Quoter)](https://software.cosmolocal.credit/contracts/quoters) |
| Exécution des échanges, frais et enregistrements des transactions | [Cotation et règlement des échanges](https://software.cosmolocal.credit/contracts/swaps) |
| Échange passant par plusieurs Bassins | [Routage](https://software.cosmolocal.credit/contracts/routing) |
| Découverte et contrats complémentaires | [Registres et utilitaires](https://software.cosmolocal.credit/contracts/registries) |
| Requêtes et réponses de l’API | [Référence OpenAPI](https://software.cosmolocal.credit/core-api/reference) |
| Paramètres du service et du routage | [Configuration](https://software.cosmolocal.credit/core-api/configuration) |

## Échanges routés au niveau de l’application

Lorsqu’un itinéraire adapté est disponible, l’Application peut aider un participant à échanger au moyen de plusieurs Bassins. Le participant vérifie la cotation et autorise l’échange. Chaque Bassin conserve ses propres règles et ses parties responsables.

Consultez [Itinéraires et responsabilités](/fr/protocol/network) pour comprendre les conséquences pour les participants, et [Fonctionnement technique du routage](https://software.cosmolocal.credit/contracts/routing) pour savoir comment le logiciel calcule et exécute les échanges.

Le logiciel permet l’échange ; les Émetteurs restent responsables des promesses de leurs Bons d’échange, et les Gestionnaires de Bassins de leurs règles publiées. L’utilisation de l’Application publique est régie par les [Conditions d’utilisation](/fr/governance/terms).
