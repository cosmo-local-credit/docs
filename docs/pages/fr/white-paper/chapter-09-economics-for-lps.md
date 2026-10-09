## **9. Économie proposée pour les programmes de liquidité**

Ce chapitre décrit un futur modèle adopté séparément. Il ne s'agit pas d'une fonctionnalité actuelle de l'application, d'une offre, d'un retour promis ou d'un droit créé par un dépôt dans `SwapPool`.

### **9.1 Sources de recettes proposées**

Un futur budget du réseau pourrait recevoir:

1. un **prélèvement de réseau** correspondant à une part des frais perçus par les Bassins participants ;
2. des frais d'acheminement ou de service distincts des services partagés mis en œuvre ; et
3. autres recettes expressément adoptées et reçues.

Les frais bruts de bassin retenus par Bassins ne sont pas des recettes de réseau. L'actuel Protocol v1.1.0 utilise un modèle différent: une redevance de protocole optionnelle est supplémentaire à la redevance de bassin et est envoyée directement à son destinataire configuré.

### **9.2 Les mathématiques illustratives du prélèvement**

Si un bassin participant facture une redevance de bassin de 2.00% et qu'un prélèvement de réseau adopté reçoit 20% de cette redevance de bassin, le taux effectif proposé pour le prélèvement de réseau sur la valeur acheminée est le suivant:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Si 25% des actifs de prélèvement et de frais de service reçus sont éligibles et convertibles pour une utilisation déclarée libellée en espèces après frais, la part utilisable en espèces du prélèvement de 40 bps est d'environ 10 bps.

Les recettes du réseau proposées sont les suivantes:

`network_rake_received + routing_or_service_fees_received`

Ne pas ajouter les frais bruts de bassin au prélèvement du réseau: le prélèvement est un transfert de ces frais et serait autrement compté deux fois.

### **9.3 Droits de programme de liquidité**

Un programme adopté séparément pourrait financer l'inventaire du bassin, les services de routage, la surveillance ou d'autres mandats. Ses termes devraient indiquer:

- si un transfert est un don, une dotation, un prêt, une contribution récupérable ou un achat;
- la garde et le contrôle;
- les règles relatives au retrait, au remboursement, aux pertes et à la priorité;
- l'admissibilité à des honoraires et à des récompenses;
- les droits de gouvernance;
- les méthodes d'évaluation et de déclaration ; et
- la suspension, la résiliation et les recours.

L'actuel `SwapPool` ne crée aucun jeton de parts de Bassin ou droit de contributeur automatique. Toute mesure ex post doit être basée sur les recettes et les pertes réalisées, ne doit pas être présentée comme un rendement promis, et peut être nulle ou négative.
