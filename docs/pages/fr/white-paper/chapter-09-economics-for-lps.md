## **9°. Économie proposée pour les programmes de liquidité**

Ce chapitre décrit un modèle futur, adopté séparément. Il ne s'agit pas d'une fonctionnalité actuelle de l'application, d'une offre, d'un retour promis ou d'un droit créé en déposant dans `SwapPool`.

### **9.1 Les sources de revenus proposées**

Un futur budget du réseau pourrait recevoir:

1. un "rack" de réseau divulgué pris en proportion des frais recueillis par les Pools participants;
2. les frais de routage ou de service séparés des services partagés mis en œuvre; et
3. autres recettes reçues qui ont été expressément adoptées.

Les redevances brutes du Pool retenues par les Pools ne sont pas des recettes du réseau. Le Protocol v1.1.0 actuel utilise un modèle différent: une redevance de protocole facultative est ajoutée à la redevance de pool et est envoyée directement à son destinataire configuré.

### **9.2 mathématiques illustratives**

Si un groupe participant facture une redevance de groupe de 2,00% et qu'un groupe de réseau adopté reçoit 20% de cette redevance de groupe, le taux de réseau effectif proposé sur la valeur routée est le suivant:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Si 25% des actifs reçus de rake et de frais de service sont éligibles et convertibles pour une utilisation déclarée en espèces après les coûts, la part utilisable en espèces du rake de 40 bps est d'environ 10 bps.

Les recettes du réseau proposées sont:

`network_rake_received + routing_or_service_fees_received`

N'ajoutez pas les frais bruts de pool au rake du réseau: le rake est un transfert à partir de ces frais et serait autrement compté deux fois.

### **9.3 Droits du programme de liquidité**

Un programme adopté séparément pourrait financer l'inventaire du Pool, les services de routage, la surveillance ou d'autres mandats. Ses conditions devront révéler:

- s'il s'agit d'un don, d'une dotation, d'un prêt, d'une contribution récupérable ou d'un achat;
- la garde et le contrôle;
- les règles de retrait, de remboursement, de perte et de priorité;
- l'éligibilité des honoraires et des récompenses;
- les droits de gouvernance;
- les méthodes d'évaluation et de déclaration; et
- la suspension, la résiliation et les recours.

Le `SwapPool` actuel ne crée pas de jeton Pool-share ou de droit de contributeur automatique. Tout indicateur ex post doit être basé sur les recettes et les pertes réalisées, ne doit pas être présenté comme un rendement promis et peut être nul ou négatif.
