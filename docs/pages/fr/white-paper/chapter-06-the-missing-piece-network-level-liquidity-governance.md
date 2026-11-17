# 6. Liquidité et gouvernance proposées au niveau du réseau

L'expérience du projet historique Sarafu Network a motivé la recherche sur deux questions de conception plus larges:

1. comment les bassins indépendants pourraient coordonner les services de liquidité et d'acheminement ; et
2. comment les services partagés pourraient rester responsables à mesure que la participation augmente.

Une conception CLC proposée introduit un **Réservoir de réseau CLC proposé ** Il s'agit d'un accord de compensation et de coordination budgétaire au niveau du réseau et d'un ** le jeton de gouvernance CLC proposé** Il n'existe ni dans l'application actuelle ni dans Protocol v1.1.0. D'autres déploiements pourraient utiliser des coopératives, des agences publiques, des fédérations, des multisigs, des opérateurs de services ou d'autres structures responsables sans adopter aucune des deux propositions.

## **6.1 Contrôles à la baisse et faculté**

L'actuel Protocol v1.1.0 peut appliquer des plafonds de solde des jetons de bassin et des contrôles d'inventaire. Ces contrôles restreignent certaines actions contractuelles; ils n'empêchent pas la non-exécution de l'émetteur, la perte de valeur, la perte de clé, l'échec du contrat ou toute autre perte.

Un déploiement futur pourrait ajouter des disjoncteurs, des timelocks, des réserves, des garanties ou des assurances. Toute protection nécessiterait une partie responsable identifiée, l'événement couvert, le financement, le plafond, les exclusions, la durée, les preuves, le processus de réclamation et les conditions applicables.

La gouvernance proposée devrait maintenir les pouvoirs de registre et de service restreints et révisibles. Les actions ordinaires peuvent utiliser des procédures de préavis, de retard, de publication des motifs, d'appel et de correction. Les actions d'urgence devraient produire des enregistrements d'incidents et expirer ou faire l'objet d'un réexamen dans le cadre d'une politique adoptée.

La CLC App de production et CLC Core permettent désormais de découvrir des itinéraires compatibles et d'exécuter sur une même chaîne des itinéraires à plusieurs étapes autorisés par les participants, au moyen du profil public configuré. Les cotations appliquent à chaque étape les limites, les frais, l'inventaire et les bornes, puis le lot est simulé ; un seul lot signé par le portefeuille est entièrement annulé si un appel échoue.

Ce service n'autorise ni le rééquilibrage automatique des Bassins ni le contrôle de leur inventaire à l'échelle du réseau. Le rééquilibrage, la compensation par lots, l'exécution interdomaine par HTLC ou entiercement et la gouvernance partagée des liquidités nécessiteraient une autorité supplémentaire, des logiciels, des bornes, un traitement des défaillances et des règles adoptées. Un plus grand nombre d'échanges cotés ou exécutés ne prouve pas, à lui seul, que les bons ont été honorés ni qu'un impact social a été produit.
