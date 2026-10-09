## **15. Feuille de route (indicative)**

### **15.1 Fondation actuelle**

GEF exploite le CLC App à `cosmolocal.credit` sur Gnosis Chain. L'application fournit un accès aux comptes et aux portefeuilles pris en charge, un catalogue public du marché et des interfaces pour les jetons, les bons d’échange, les offres, Bassins d’engagements, les transferts et les échanges directs de bassin.

Protocol v1.1.0 fournit le fondement du contrat actuel: `GiftableToken`, exécution directe de `SwapPool`, registres optionnels, modules d'évaluation, plafonds de solde des jetons de bassin, frais de bassin, frais de protocole supplémentaires et un `SwapRouter` à cotation uniquement. La disponibilité dépend toujours de l'interface, des contrats déployés, de l'inventaire, de la configuration, de l'état du réseau, de l'éligibilité, des fournisseurs, de la juridiction et des conditions publiées de l'émetteur ou du bassin.

### **15.2 Les jalons proposés**

Ces jalons nommés sont des directions de conception, pas des numéros de sortie, des dates de livraison ou des engagements qu'une fonctionnalité lancera.

- **Fondation pour la gouvernance:** le jeton de gouvernance CLC proposé; le projet de bassin réseau CLC; adaptateurs de tarification; le quorum, le délai et les fondements de la gouvernance.
- **Routage et observabilité:** les API du routeur SDK et du registre; les tableaux de bord de santé; un cadre proposé pour la politique d'assurance; les intentions de rééquilibrage opt-in; prototype de mise en réseau par lots.
- **Outils de risque interdomaine:** HTLC ou le routage de dépôt en caution; les modules de garant régis séparément; les préréglages des limites déroulantes, des comptes et des niveaux.
- **Accès réglementé:** les services de paiement de tiers spécifiques au déploiement; les micro-bassins personnels; détection du service de conformité; des audits effectués par des tiers sur les catégories de bons.

Tout service de paiement serait fourni par des tiers identifiés séparément selon la juridiction, l'admissibilité, les frais, les limites et les conditions applicables. Les contrats CLC App et Protocol v1.1.0 ne fonctionnent pas eux-mêmes sur des rails fiduciaires.

L'exécution multi-hop, l'assurance partagée, le jeton de gouvernance CLC proposé et le bassin de réseau CLC proposé, la compensation par lots, les micro-bassins personnels et les services de paiement réglementés restent proposés ou dépendants du déploiement jusqu'à ce qu'une mise en œuvre et ses conditions réglementaires les identifient comme actifs.
