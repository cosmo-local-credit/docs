## **11. Mécanismes de gouvernance**

Ce chapitre propose un modèle de gouvernance. Il ne représente pas que l'actuel CLC App utilise le vote par jeton de gouvernance, les timelocks, l'assurance partagée, un processus de réclamation ou tous les contrôles décrits ci-dessous. Chaque déploiement devrait identifier ses véritables décideurs, autorités, contrats, processus et politiques.

- **Les valeurs constitutionnelles:** le souci des personnes, le souci de l'environnement, l'équité, la réciprocité, la non-dominance et la résilience.
- **Types de propositions** les modifications des redevances, des limites et des indices; les mandats de liquidité; Liste des groupes et suppressions; les décisions de couverture facultatives; et des garde-corps de paramètres.
- **Procédure responsable:** prise → évaluation → évaluation des risques → approbation → délai d'exécution le cas échéant → exécution. L'approbation peut provenir d'administrateurs, de coopératives, d'agences publiques, de fédérations, de plusieurs instances, d'un vote en chaîne ou d'une autre structure dévoilée et responsable.
- **seuils d'homologation:** paramétrisé par classe d'action, avec des seuils plus élevés pour les changements d'indice de valeur, les pouvoirs d'urgence et d'autres actions critiques.
- **La délégation:** la délégation facultative avec des mandats publics, la divulgation des conflits et le rappel.
- **Détecteurs de circuits:** des pauses d'urgence avec des critères établis, des opérateurs autorisés, des conditions de reprise et des autopsies requises.
- **La transparence:** les modifications et les flux publiés, avec des éléments de preuve distincts pour le règlement des swaps, l'exécution par l'émetteur, les réserves, l'utilisation des limites, le routage et les garants.

**Gouvernance du registre.** Un déploiement CPP-compatible peut maintenir des registres de découverte pour les bons d’échange, les jetons et les Bassins. Les contrôles autorisés peuvent ajouter, mettre à jour, suspendre ou supprimer des entrées de registre via le processus de gouvernance divulgué du déploiement. La suppression du registre affecte la découverte et l'acheminement à travers ce registre; il n'efface pas par lui-même un jeton, ne modifie pas le solde d'un détenteur, n'exécute pas l'obligation d'un émetteur ni ne désactive un contrat fonctionnel.

Les règles du registre publiées devraient rendre le statut conditionnel et peuvent identifier des manquements répétés, des fraudes ou des fausses déclarations, un comportement contractuel non sûr ou une violation persistante des principes publiés comme motifs de suspension ou de suppression. Dans la mesure du possible, la procédure devrait prévoir un préavis, une possibilité de recours et une voie d'appel. L'évacuation d'urgence devrait nécessiter un rapport d'incident public et un examen automatique ou un coucher du soleil.

**Des annonces interdites.** Dans le cadre de ce modèle, un registre n'admettrait pas:

1. les instruments qui financent ou incitent directement à la destruction écologique au-delà des limites convenues, à la violence ou à l'armement, à l'extraction forcée ou à l'abus systémique; ou à
2. une catégorie de bons qui manque de conditions claires de présentation et d'exécution, de responsabilité et de voies de recours.

La liste interdite serait modifiée, vérifiable publiquement et modifiable uniquement au moyen du seuil et du délai d'action critique adoptés, illustrés par Q3 + T3 à l'appendice D.

### **11.1 Gouvernance des taux de change et des limites**

**Les changements sont temporaires.** Un déploiement suivant ce modèle ne modifierait les méthodes de taux de change et ne mettrait en œuvre séparément les paramètres limites qu'après un délai public. Une voie d'urgence utiliserait un processus d'autorisation divulgué séparément et inclurait un coucher du soleil ou un examen automatique.

**Les seuils d'approbation.** Le modèle propose des seuils d'approbation plus élevés pour les modifications de la base de l'indice de valeur et les modifications des niveaux limites globaux, des seuils intermédiaires pour les modifications de tiers spécifiques à la bassin et des seuils standard pour les modifications de frais de routine.

**Des informations publiées.** Un déploiement participant publierait, pour chaque bassin, les variables d'index en chaîne, les sources ou médians oracles, la cadence de mise à jour, les fenêtres de limite et les plafonds, ainsi que les modes de défaillance ou les constantes de sécurité.

**Critères de pause d'urgence.** Un déploiement participatif prédéclarait des conditions telles qu'une panne d'oracle, une utilisation à haute limite combinée à des défaillances de réalisation ou une défaillance invariante, ainsi que des vérifications de CV et des exigences d'examen post-incident.

**Exemple de flux public d'indexation pour une réserve et un bon d’échange**

- **Le symbole:** par exemple `Maize_50kg@IssuerY`.
- **Unité de référence:** Unité d'indice (IUX).
- **Valeur publiée:** 30.000 IUX.
- **Nom de l'entreprise:** médiane des sources identifiées, telles qu'une enquête sur le marché local, le bulletin du ministère et la base de déploiement.
- **Cadence de mise à jour:** Tous les jours à 18h00 EAT, avec un délai de 24 heures.
- **Mode de défaillance:** congeler à la dernière valeur valide, appliquer une politique de limite divulguée et faire une pause après une interruption de 72 heures.
- **Le raisonnement:** des notes publiées et un enregistrement des modifications par rapport à la mise à jour précédente.
- **Les signataires:** les adresses multi-signales et le seuil d'approbation communiqués.

### **11.2 Compte-rendu proposé des fonds d'assurance**

**Design facultatif uniquement.** Ce répertoire s'applique uniquement à un déploiement qui a expressément adopté et financé un fonds d'assurance et publié les événements couverts, les demandeurs admissibles, l'entité responsable, les actifs, les limites, les exclusions, les exigences de preuve, le processus et les modalités. Ni l'actuel CLC App ni l'actuel GEF ne fournissent une couverture simplement parce que ce dessin apparaît dans le livre blanc.

**Des déclencheurs possibles.** Une politique adoptée pourrait couvrir un défaut d'exécution d'un émetteur défini, un déficit de réserves de bassin ou une perte de pont ou d'entiercement. Un incident technique n'est pas automatiquement admissible; la politique appliquée contrôlerait.

**Une évaluation.** L'organisme responsable réconcilierait les reçus de transaction, les soldes d'inventaire, les obligations de garantie, les enregistrements de remboursement et de présentation, les réponses de l'émetteur et d'autres preuves requises, puis publierait un enregistrement des incidents conforme à la vie privée et à la loi.

**Illustre cascade de perte.** Lorsque chaque couche existe et s'applique légalement, une police pourrait utiliser: (1) des obligations d'émetteur responsable ou des participations de garant → (2) des réserves au niveau du bassin → (3) un fonds d'assurance réseau proposé → (4) une réduction temporaire à une demande de couverture facultative, uniquement lorsque des conditions préexistantes et la loi applicable l'autorisent expressément → (5) une récupération légale pour fraude ou abus avérés.

Un ajustement de couverture ne réduit pas l'engagement de bon d’échange sous-jacent d'un émetteur ni ne modifie un solde sur la chaîne, à moins que des conditions préalablement valides et la législation applicable n'autorisent expressément ce résultat et que le consentement du titulaire requis soit obtenu.

**Limites et exclusions.** La couverture publiée définirait les plafonds, les présentations éligibles, les éléments de preuve, les fenêtres de réclamation, les itinéraires ou événements exclus, les restrictions géographiques et le traitement des réserves épuisées. Un paiement pourrait être de zéro une fois les limites applicables atteintes.

**Calendrier de récupération illustratif.** Si elle est adoptée et publiée:

1. les créances tireraient d'abord de l'émetteur ou du garant responsable, puis des réserves de bassin applicables, puis du fonds d'assurance réseau proposé;
2. toute réduction à une demande de couverture facultative serait limitée à ce que permettent les conditions de couverture préexistantes et la législation applicable, jusqu'au plafond de l'incident publié;
3. un plan de redressement pourrait appliquer une part déterminée de la valeur récupérée pour une période déterminée, après laquelle tout déficit restant couvert deviendrait une perte enregistrée avec un post-mortem public ; et
4. Chaque décision produirait un reçu avec l'incident ID, les réclamations et les bons d’échange affectés, la décision, le plan de redressement et la fenêtre d'appel.

### **11.3 Cadre du garant**

Cette section distingue la responsabilité de l'émetteur, les protections optionnelles de bassin et les garanties de tiers. Les bassins peuvent rivaliser sur la conservation, les conditions et les protections expressément offertes sans impliquer que le CLC App, CPP, GEF, ou tout autre réseau plus large garantit automatiquement un bon d’échange.

**Responsabilité initiale de l'émetteur**

- Chaque bon d’échange est avant tout la responsabilité de son émetteur. L'émetteur s'engage à fournir le bien, le service ou l'équivalent en espèces déclaré conformément aux conditions publiées.
- Les émetteurs publieraient qui peut présenter le bon d’échange, ce que signifie l'exécution, où et quand il est disponible, quelles preuves sont requises et quels recours sont applicables.
- Si un émetteur ne remplit pas ses obligations, il est le principal responsable. Les protections de bassin ou de réseau ne s'appliquent que lorsqu'elles sont adoptées, financées et communiquées séparément.

**Protection optionnelle du bassin**

Un Gestionnaire de Bassin peut choisir d'ajouter une protection étroitement définie aux bons d’échange admis. Il n'est pas automatique et il faudrait identifier la partie responsable, le financement, les événements éligibles, les plafonds, les fenêtres, les éléments de preuve, les exclusions et les recours dans les métadonnées du bassin et les conditions applicables.

Les types de protection illustratifs comprennent:

1. **Couverture des actifs de réserve:** après non-respect par l'émetteur vérifié, l'entité responsable du bassin paie un montant défini dans un actif de réserve désigné, sous réserve de son plafond publié et des réserves financées disponibles.
2. **Fenêtre de remplacement:** après un événement de qualification, le bassin offre une voie de swap limitée dans le temps vers l'actif antérieur ou un autre actif approuvé, sous réserve de plafonds et d'inventaire. Il s'agit d'une protection de liquidité dépendante des stocks, pas d'une promesse selon laquelle chaque swap est réversible.
3. **Exécution alternative:** la partie responsable organise un fournisseur de remplacement agréé dans le cadre d'un plafond de quantité ou de valeur publié.
4. **Protection par bande de taux de change:** pour les catégories de bons sélectionnés, un bassin n'offre que l'ajustement de couverture ou le recours au swap-back indiqué dans ses conditions préexistantes. Cela ne réduit pas l'obligation sous-jacente de l'émetteur en matière de bons.

**Sources de financement possibles**

- **Obligation de l'émetteur** garantie placée par l'émetteur ou détenue dans une réserve divulguée et disponible après un événement couvert vérifié.
- **Réserve de Bassin:** les actifs contrôlés par l'entité responsable du bassin et affectés aux protections qu'elle annonce.
- **Obligation de tiers garant:** garantie déposée par un garant externe identifié pour des émetteurs, des catégories de bons ou des événements indiqués.

La participation du garant respecterait les critères d'éligibilité publiés, la taille des obligations, les limites de concentration, l'autorité de décision et les règles d'exécution légales.

**Procédure de réclamation**

Une politique adoptée définirait les déclencheurs auditables, tels qu'un délai d'exécution manqué après la présentation d'un remboursement valide, une insolvabilité vérifiée de l'émetteur, une défaillance d'un pont couvert ou d'une caution ou un état d'incident déclaré officiellement. Elle définirait également:

- la manière dont un participant ouvre une réclamation et fournit les preuves de présentation et d'exécution requises;
- qui vérifie les conditions du bon d’échange, les réponses de l'émetteur et les dossiers techniques;
- les fenêtres de décision et de recours ; et
- la voie de paiement autorisée, les actifs, les plafonds et le reçu.

Les recouvrements provenant d'émetteurs, d'arbitrage ou d'exécution légale permettraient de reconstituer les obligations ou réserves applicables conformément à la politique publiée avant d'être utilisés pour l'accès proposé aux swaps du réseau CLC.

**Divulgation obligatoire**

Pour chaque catégorie de bassin et de bon d’échange couvert couverte, la partie responsable publierait:

- si un garant est absent, facultatif ou requis;
- la taille des obligations ou des réserves et les plafonds de concentration;
- les types de protection, les actifs, les plafonds, les fenêtres et les exclusions;
- les délais de présentation, d'exécution, de réclamation et d'appel ; et
- une déclaration claire de qui garantit quoi et de ce qui n'est pas garanti.

**Principe de conservation.** Gestionnaires de Bassins et les structures juridiques ou de gouvernance responsables sont responsables des protections qu'ils annoncent. Un déploiement CPP-compatible peut fournir des normes, des registres ou des politiques partagées optionnelles, mais ni CLC ni GEF ne garantissent automatiquement des bons d’échange ou des Bassins.

### **11.4 Garnitures anti-capture**

Dans le cadre de ce modèle, les actions critiques suivantes nécessiteraient le niveau d'approbation le plus élevé adopté et un délai plus long:

1. modifier la cascade de redevances proposée, y compris sa couverture et les priorités des opérations de base;
2. modifier les racines du registre canonique;
3. modifier la portée de la couverture, les plafonds de revendications ou l'autorité de décision;
4. l'élargissement des pouvoirs de pause d'urgence; ou à
5. L'objectif est d'améliorer l'efficacité et la transparence de la politique de l'Union en ce qui concerne la protection des consommateurs.

### **11.5 Procédure de fourche et de sortie**

Si la gouvernance était capturée ou si les valeurs dérivaient de manière significative, les communautés, Gestionnaires de Bassins et les opérateurs pourraient chercher à sortir en bifurquant la couche de gouvernance du réseau. La continuité des bassins et des bons d’échange sous-jacents dépendrait des contrats déployés, des clés, des interfaces, de l'infrastructure, des services fournis par des tiers et des obligations applicables.

Un processus de sortie pourrait:

1. **Publiez un instantané:** Exporter les registres, les bons d’échange, les valeurs, les limites et les politiques de redevance sélectionnés, puis publier un hachage d'instantané signé.
2. **Redéploiement des services de gouvernance:** déployer de nouvelles racines de registre, de nouveaux services d'itinéraire et tout module de redevance ou de couverture adopté dans le cadre d'une nouvelle structure responsable.
3. **Réenregistrer:** permettre à Gestionnaires de Bassins de choisir de s'inscrire en enregistrant leurs adresses de bassin sous la nouvelle racine sans que les titulaires soient tenus de migrer des bons d’échange fonctionnels.
4. **Renvoyer les clients:** ajouter la nouvelle racine en tant que profil de réseau sélectionnable dans les SDK et les interfaces, avec toute modification par défaut effectuée dans le cadre du processus de gouvernance divulgué.
5. **Gérer une période de pont:** maintenir des itinéraires compatibles là où ils sont sûrs et refuser les itinéraires qui violent les règles du nouveau profil.

L'objectif de conception est que la sortie d'un registre canonique ne désactive pas les bassins locaux fonctionnels. La continuité réelle reste dépendante du déploiement; La fédération est une couche de découverte et de coordination opt-in.
