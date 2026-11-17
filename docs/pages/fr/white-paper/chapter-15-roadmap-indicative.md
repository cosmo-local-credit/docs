# 15. Feuille de route (indicative)

## **15.1 Fondation actuelle**

GEF exploite l'application CLC à l'adresse `cosmolocal.credit` sur Gnosis Chain. L'application fournit un accès aux comptes et portefeuilles pris en charge, un catalogue public du Marché et des interfaces pour les jetons, les bons, les Offres, les Demandes, les Bassins d'engagement, les transferts, les échanges directs de Bassin et les échanges routés.

Le protocole v1.1.0 fournit la base contractuelle actuelle : `GiftableToken`, l'exécution directe par `SwapPool`, les registres facultatifs, les modules d'évaluation, les plafonds de solde des jetons du Bassin, les frais du Bassin, des frais de protocole supplémentaires et un `SwapRouter` Solidity qui calcule uniquement des cotations.

CLC Core fournit désormais la base de routage sur une même chaîne et d'observabilité de l'application publique : découverte au moyen d'un graphe rapproché, itinéraires comportant jusqu'à trois échanges de Bassin, cotations établies à un bloc déterminé, bornes et frais à chaque étape, simulation du lot complet, exécution atomique signée par Calibur, suivi du relais, rapprochement des règlements, reçus regroupés et mesures opérationnelles. La disponibilité dépend toujours de l'interface, du comportement des portefeuilles et des jetons pris en charge, des contrats déployés, de l'inventaire, de la configuration, de la fraîcheur du service, de l'état du réseau, de l'admissibilité, des prestataires, de la juridiction et des conditions publiées par l'émetteur ou le Bassin.

## **15.2 Les jalons proposés**

Ces jalons nommés sont des directions de conception, pas des numéros de sortie, des dates de livraison ou des engagements qu'une fonctionnalité lancera.

- **Fondation pour la gouvernance:** le jeton de gouvernance CLC proposé; le projet de bassin réseau CLC; adaptateurs de tarification; le quorum, le délai et les fondements de la gouvernance.
- **Routage et observabilité :** étendre les interfaces actuelles d'itinéraire et de reçu à d'autres profils ; publier des tableaux de bord de santé et des rapports au niveau du service ; élaborer un cadre de politique d'assurance ; concevoir des intentions de rééquilibrage facultatives ; et créer un prototype de compensation par lots.
- **Outils de risque interdomaine:** HTLC ou le routage de dépôt en caution; les modules de garant régis séparément; les préréglages des limites déroulantes, des comptes et des niveaux.
- **Accès réglementé:** les services de paiement de tiers spécifiques au déploiement; les micro-bassins personnels; détection du service de conformité; des audits effectués par des tiers sur les catégories de bons.

Tout service de paiement serait fourni par des tiers identifiés séparément selon la juridiction, l'admissibilité, les frais, les limites et les conditions applicables. Les contrats CLC App et Protocol v1.1.0 ne fonctionnent pas eux-mêmes sur des rails fiduciaires.

L'exécution interdomaine à plusieurs étapes, le rééquilibrage automatique des Bassins, l'assurance partagée, le jeton de gouvernance CLC proposé, le Bassin de réseau CLC proposé, la compensation par lots, les micro-Bassins personnels et les services de paiement réglementés restent proposés ou dépendants du déploiement jusqu'à ce qu'une mise en œuvre et ses conditions les déclarent actifs. Le routage sur une même chaîne, initié par les participants dans l'application CLC publique, est une capacité actuelle.
