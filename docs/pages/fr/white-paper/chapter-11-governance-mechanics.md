## **- Il y en a 11. Mécanique de gouvernance**

Ce chapitre propose un modèle de gouvernance. Il ne représente pas que le CLC App actuel utilise le vote par jeton de gouvernance, les délais, l'assurance partagée, un processus de réclamation ou tout contrôle décrit ci-dessous. Chaque déploiement devrait identifier ses décideurs, ses autorités, ses contrats, ses processus et ses politiques.

- **Les valeurs constitutionnelles:**En ce qui concerne les personnes, le soin de l'environnement, l'équité, la réciprocité, la non-dominance et la résilience.
- **Types de propositions:**les changements de frais, de limites et d'indices; les mandats de liquidité; les cotisations et les suppressions du pool; les décisions de couverture facultatives; et les barrières de protection des paramètres.
- **Processus responsable:**prise → évaluation → révision des risques → approbation → délais, le cas échéant → exécution. L'approbation peut provenir de gestionnaires, de coopératives, d'agences publiques, de fédérations, de multinationales, de votes en chaîne ou d'une autre structure divulguée et responsable.
- **Les seuils d'approbation:**paramétrisés par classe d'action, avec des seuils plus élevés pour les modifications de l'indice de valeur, les pouvoirs d'urgence et d'autres actions critiques.
- **Delegation:**la délégation facultative avec des mandats publics, la divulgation des conflits et le rappel.
- **Coupe-circuits:**des pauses d'urgence avec des critères décrits, des opérateurs autorisés, des conditions de reprise et des autopsies requises.
- **La transparence:**les changements et les flux publiés, avec des preuves distinctes du règlement des swaps, de l'exécution par l'émetteur, des réserves, de l'utilisation limite, du routage et des garants.

**La gouvernance du registre.**Un déploiement CPP- compatible peut maintenir des registres de découverte de bons, de jetons et de pools. Les contrôles autorisés peuvent ajouter, mettre à jour, suspendre ou supprimer les entrées du registre à travers le processus de gouvernance divulgué du déploiement. La suppression du registre affecte la découverte et le routage à travers ce registre; elle ne supprime pas par elle-même un jeton, ne modifie pas le solde d'un titulaire, ne remplit pas l'obligation d'un émetteur ni ne désactive un contrat fonctionnel autrement.

Les règles du registre publiées devraient rendre le statut conditionnel et peuvent indiquer des manquements répétés, des fraudes ou des fausses déclarations, des comportements contractuels dangereux ou des violations persistantes des principes publiés comme motifs de suspension ou de retrait. Dans la mesure du possible, le processus devrait fournir un avis, une occasion de remédier et une voie d'appel. Le retrait d'urgence devrait nécessiter un rapport d'incident public et un examen automatique ou un coucher de soleil.

**Liste interdite.**Dans le cadre de ce modèle, un registre ne reconnaîtrait pas:

1. les instruments qui financent ou encouragent directement la destruction écologique au-delà des limites convenues, la violence ou l'armement, l'extraction forcée ou les abus systémiques; ou
2. une catégorie de coupons qui manque de clairs termes de présentation et de réalisation, de responsabilité et de voies de réparation.

La liste interdite serait révisée, vérifiable publiquement et changeable uniquement à travers le seuil et le délai d'action critique adoptés, illustrés comme Q3 + T3 à l'annexe D.

### **11.1 Taux de change et gouvernance limite**

**Les changements sont bloqués dans le temps.**Un déploiement suivant ce modèle modifierait les méthodes de taux de change et mettrait en œuvre séparément les paramètres limites uniquement après un verrouillage horaire public. Un itinéraire d'urgence utiliserait un processus d'autorisation divulgué séparément et comprendrait un coucher de soleil ou un examen automatique.

**Les seuils d'approbation.**Le modèle propose des seuils d'approbation plus élevés pour les changements de base de l'indice de valeur et les changements globaux de niveau limite, des seuils intermédiaires pour les changements de tiers spécifiques au groupe et des seuils standards pour les changements de redevances de routine.

**Des flux publiés.**Un déploiement participant publierait, pour chaque pool, les variables de l'indice en chaîne, les sources ou médians d'oracle, la cadence de mise à jour, les fenêtres et caps de limite, les modes de défaillance ou les constantes sécurisées.

**Critères de pause d'urgence.**Un déploiement participant déclarerait à l'avance des conditions telles qu'une panne oracle, une utilisation à haute limite combinée à des défaillances de remplissage ou une défaillance invariante, ainsi que des contrôles de CV et des exigences d'examen post-incident.

**Exemple de flux public d'indices pour un pool et un bon**

- **Le symbole:**par exemple, `Maize_50kg@IssuerY`.
- **Unité de référence:**Unité d'indice (IUX).
- **Value publiée:** 30.000 IUX.
- **Sources:**médiane des sources identifiées, telles qu'une enquête sur le marché local, le bulletin du ministère et la ligne de base du déploiement.
- **Mise à jour de la cadence:**tous les jours à 18 heures EAT, avec un verrouillage horaire de 24 heures.
- **Mode de défaillance:**congeler à la dernière valeur valide, appliquer une politique de limite révélée et faire une pause après une interruption de 72 heures.
- **Les raisons:**les notes publiées et un enregistrement des modifications de la mise à jour antérieure.
- **Signataires:**les adresses multisignes communiquées et le seuil d'approbation.

### **11.2 Cadre proposé des fonds d'assurance**

**Seulement de conception optionnelle.**Ce manuel ne s'applique qu'à un déploiement qui a expressément adopté et financé un fonds d'assurance et publié les événements couverts, les demandeurs admissibles, l'entité responsable, les actifs, les limites, les exclusions, les exigences en matière de preuve, le processus et les modalités de gouvernance. Ni le CLC App actuel ni GEF ne fournissent une couverture simplement parce que cette conception figure dans le livre blanc.

**Des déclencheurs possibles.**Une politique adoptée pourrait couvrir le non-respect de l'émetteur défini, un déficit de la réserve du pool ou une perte de pontage ou de garantie. Un incident technique ne se qualifie pas automatiquement; la politique applicable contrôlerait.

**Une évaluation.**L'organisme responsable concilierait les reçus de transaction, les soldes d'inventaire, les obligations de garantie, les dossiers de présentation du rachat, les réponses de l'émetteur et d'autres éléments de preuve requis, puis publierait un dossier d'incident conforme à la vie privée et au droit.

**Une cascade de perte illustrative.**Lorsque chaque couche existe et s'applique légalement, une politique pourrait utiliser: (1) des obligations d'émetteurs responsables ou des participations de garants → (2) des réserves au niveau du pool → (3) un fonds d'assurance réseau proposé → (4) une réduction temporaire à une demande de couverture facultative, uniquement lorsque les conditions existantes et la loi applicable l'autorisent expressément → (5) une récupération légale pour fraude ou abus prouvés.

Un ajustement de couverture ne réduit pas l'engagement sous-jacent d'un émetteur en matière de bons ou ne modifie pas un solde en chaîne, à moins que les conditions préexistantes et la législation applicable ne permettent expressément ce résultat et que le consentement requis du titulaire ne soit obtenu.

**Limits et exclusions.**La couverture publiée définirait les plafonds, les présentations admissibles, les éléments de preuve, les fenêtres de revendications, les itinéraires ou événements exclus, les restrictions géographiques et le traitement des réserves épuisées. Un paiement pourrait être nul après l'atteinte des limites applicables.

**Un calendrier de récupération illustratif.**En cas d'adoption et de publication:

1. les créances proviendraient d'abord de l'émetteur ou du garant responsable des obligations, puis des réserves de pool applicables, puis du fonds d'assurance réseau proposé;
2. toute réduction à une demande de couverture facultative serait limitée aux conditions de couverture préexistantes et à la législation applicable, jusqu'au plafond d'incident publié;
3. un plan de récupération pourrait appliquer une part déclarée de la valeur récupérée pour une période indiquée, après quoi tout déficit couvert restant deviendrait une perte enregistrée avec une mort publique; et
4. chaque décision produirait un reçu avec l'incident ID, les réclamations et bons affectés, la décision, le plan de récupération et la fenêtre d'appel.

### **11.3 Cadre de garantie**

Cette section distingue la responsabilité de l'émetteur, les protections optionnelles du pool et les garanties de tiers. Les piscines peuvent concurrencer sur la conservation, les conditions et les protections expressément offertes sans que cela implique que le CLC App, CPP, GEF ou tout autre réseau plus large garantit automatiquement un bon.

**Responsabilité de l'émetteur de référence**

- Chaque bon est d'abord et avant tout la responsabilité de son émetteur. L'émetteur s'engage à fournir le bien, le service ou l'équivalent de trésorerie légitime déclaré selon ses conditions publiées.
- Les émetteurs publieraient qui peut présenter le bon, ce que signifie l'accomplissement, où et quand il est disponible, quelles preuves sont requises et quels recours s'appliquent.
- En cas de non-respect par un émetteur, l'émetteur est la partie principale responsable. Les mesures de protection des réservoirs ou des réseaux ne s'appliquent que lorsqu'elles sont adoptées, financées et divulguées séparément.

**Protection de la piscine facultative**

Un gestionnaire de piscine peut choisir d'ajouter une protection étroitement définie aux bons admis. Il n'est pas automatique et nécessiterait l'identification de la partie responsable, du financement, des événements admissibles, des plafonds, des fenêtres, des preuves, des exclusions et des recours dans les métadonnées du pool et les termes applicables.

Les types de protection illustratifs comprennent:

1. **Couverture des actifs de réserve:**après non-respect vérifié par l'émetteur, l'entité responsable du pool verse un montant défini dans un actif de réserve désigné, sous réserve de sa plafond publié et de ses réserves financées disponibles.
2. **Fenêtre de retour:**après un événement de qualification, le groupe offre un parcours de swap limité dans le temps vers l'actif approuvé précédemment ou vers un autre actif, sous réserve de plafonds et d'inventaire. Il s'agit d'une protection de liquidité dépendante des stocks, pas une promesse selon laquelle chaque swap est réversible.
3. **L'accomplissement alternatif:**la partie responsable organise un fournisseur de remplacement agréé dans le cadre d'un plafond de quantité ou de valeur publié.
4. **Protection de la bande de change:**pour les catégories de bons sélectionnés, un pool ne propose que l'ajustement de couverture ou le recours à l'échange indiqué dans ses conditions préexistantes. Cela ne réduit pas l'obligation de bon sous-jacente de l'émetteur.

**Les sources de financement possibles**

- **Obligation de l'émetteur:**la garantie déposée par l'émetteur ou détenue dans une réserve divulguée et disponible après un événement couvert vérifié.
- **Réserve de piscines:**les actifs contrôlés par l'entité responsable du pool et affectés aux protections qu'elle annonce.
- **Obligations de garantie de tiers:**les garanties déposées par un garant externe identifié pour les émetteurs déclarés, les catégories de bons ou les événements.

La participation du garant suivrait les critères d'éligibilité publiés, la taille des obligations, les limites de concentration, l'autorité de décision et les règles d'exécution légale.

**Procédure de réclamation**

Une politique adoptée définirait les facteurs déclencheurs vérifiables, tels qu'une date limite d'exécution manquée après la présentation d'un remboursement valide, l'insolvabilité de l'émetteur vérifiée, une faillite de couverture ou d'une caution ou un état d'incident officiellement déclaré. Il définirait également:

- la manière dont un participant ouvre une demande et fournit les éléments de preuve de présentation et de satisfaction requises;
- qui vérifie les conditions du bon, les réponses de l'émetteur et les dossiers techniques;
- les fenêtres de décision et de recours; et
- la voie de paiement autorisée, les actifs, les plafonds et le reçu.

Les recettes provenant des émetteurs, de l'arbitrage ou de l'exécution légale rempliront les obligations ou réserves applicables conformément à la politique publiée avant d'être utilisées pour l'accès au réseau CLC.

**Les informations requises**

Pour chaque catégorie de réserves et de bons couverts, la partie responsable publie:

- si un garant est absent, facultatif ou requis;
- la taille des obligations ou des réserves et les plafonds de concentration;
- les types de protection, les actifs, les plafonds, les fenêtres et les exclusions;
- les délais de présentation, d'exécution, de réclamation et de recours; et
- Une déclaration en langage clair de qui garantit quoi et ce qui n'est pas garanti.

**Principe de conservation.**Les gestionnaires de piscine et les structures juridiques ou de gouvernance responsables sont responsables des protections qu'ils annoncent. Un déploiement CPP- compatible peut fournir des normes, des registres ou des politiques partagées facultatives, mais ni CLC ni GEF ne garantissent automatiquement des bons ou des Pools.

### **11.4 Gardiens anti-capture**

Dans le cadre de ce modèle, les actions critiques suivantes nécessiteraient le niveau d'homologation le plus élevé adopté et un délai long:

1. modifier la cascade proposée de redevances, y compris sa couverture et les priorités des opérations de base;
2. modifier les racines du registre canonique;
3. modification de la portée de la couverture, des plafonds de réclamation ou de l'autorité de décision;
4. l'extension des pouvoirs de pause d'urgence; ou
5. l'affaiblissement des engagements en matière de forcabilité, de transparence ou de souveraineté du Pool énoncés dans le présent document.

### **11.5 Procédure de forge et de sortie**

Si la gouvernance était capturée ou si les valeurs dérivaient de manière significative, les communautés, les gestionnaires de piscines et les opérateurs pourraient chercher à sortir en forçant la couche de gouvernance du réseau. La continuité des pools et des bons sous-jacents dépendrait des contrats déployés, des clés, des interfaces, des infrastructures, des services de tiers et des obligations applicables.

Un processus de sortie pourrait:

1. **Publier une photo instantanée:**Exporter les registres sélectionnés, les bons, les valeurs, les limites et les politiques de frais, puis publier un hash snapshot signé.
2. **Rédéployer les services de gouvernance:**déployer de nouvelles racines de registre, des services d'itinéraire et des modules de frais ou de couverture adoptés dans le cadre d'une nouvelle structure responsable.
3. **Réenregistrement:**permettre aux gestionnaires de pool de s'inscrire en enregistrant leurs adresses de pool sous la nouvelle racine sans obliger les titulaires à migrer des bons fonctionnels autrement.
4. **Remplacement des clients:**ajouter la nouvelle racine en tant que profil réseau sélectif dans les SDK et les interfaces, avec toute modification par défaut effectuée par le biais du processus de gouvernance divulgué.
5. **Gérer une période de pont:**maintenir des itinéraires compatibles où ils sont sûrs et refuser des itinéraires qui violent les règles du nouveau profil.

L'objectif de la conception est que la sortie d'un registre canonique ne désactive pas les piscines locales fonctionnelles autrement. La continuité réelle reste dépendante du déploiement; la fédération est une couche d'option de découverte et de coordination.
