## **10. Cadre global des risques**

Ce cadre proposé distingue dix catégories de risques. Pour chaque catégorie, il identifie les indicateurs possibles, les contrôles, les tests de résistance et un appétit au risque indicatif. Ce sont des recommandations de conception, pas des affirmations selon lesquelles chaque contrôle est déployé, efficace ou suffisant. Les limites, les réserves, les garanties, la surveillance, la couverture et la gouvernance ne peuvent éliminer les pertes.

### **10.1 Protocole et risque lié aux contrats intelligents**

- **Des menaces:** des erreurs de contrat, des erreurs de mise à niveau, des défaillances de dépendance et des limites ou frais mal configurés.
- **Indicateurs:** les résultats de l'audit, les mouvements d'inventaire inexpliqués, les défaillances invariantes et les retours inhabituels.
- **Contrôles possibles:** des audits indépendants; les rôles privilégiés minimaux; les contrôleurs par procuration et les contrôleurs de dépendance divulgués; les mises à niveau dans des délais déterminés; la surveillance de la chaîne; les pauses d'incident avec autorisation et critères publiés; et un parcours de migration éprouvé.
- **Tests de résistance:** les cotations non disponibles ou les dépendances à la limite, les déficits d'inventaire, les contrats suspendus et le trafic éclatant.
- **Appétit pour le risque:** faible avant la mise à l'échelle des obligations en souffrance ou du volume des swaps.

### **10.2 Risque économique et de marché**

- **Des menaces:** l'inventaire mince, les flux unilatéraux, les retraits rapides et les références de prix manipulées ou obsolètes.
- **Indicateurs:** l'utilisation élevée du plafond du solde des jetons de bassin, l'élargissement des différences de cotation, les rejets fréquents des limites et l'inventaire concentré.
- **Contrôles possibles:** les plafonds du solde actuel des jetons de bassin; les limites mobiles ou de compte proposées; réserves adoptées séparément; des références de prix protégées; l'exclusion des itinéraires; et des frais ou limites pour les incidents limités dans le temps.
- **Tests de résistance:** des mouvements importants des prix de référence, des hausses de présentation, des demandes de retrait et des pannes de sources de données.
- **Appétit pour le risque:** modérée dans les limites des paramètres publiés et de la capacité à supporter les pertes financée.

### **10.3 Risque de l'émetteur et du bon d’échange**

- **Des menaces:** l'émission dépassant la capacité d'exécution, le défaut de l'émetteur, des conditions trompeuses et des fenêtres de disponibilité ou de présentation mal spécifiées.
- **Indicateurs:** la baisse des taux d'exécution confirmés, le vieillissement des bons d’échange en souffrance, les plaintes non résolues et l'exposition concentrée à un seul émetteur.
- **Contrôles possibles:** la diligence raisonnable de l'émetteur; les conditions du bon d’échange et de l'offre sont claires; les limites d'émission ou d'admission; les obligations ou garanties financées de manière indépendante; les rapports de cohorte; et l'examen du registre responsable.
- **Tests de résistance:** l'insolvabilité de l'émetteur, les chocs de production régionaux, les créances contrefaites et les retards prolongés dans l'exécution.
- **Appétit pour le risque:** inférieure à mesure que la concentration de l'émetteur ou de l'offre augmente.

### **10.4 Risque de remboursement et de réalisation**

- **Des menaces:** présentation invalide ou en double, capacité d'émetteur insuffisante, ruptures de stocks, défaillances logistiques et manquants enregistrements de décharge.
- **Indicateurs:** la latence de la demande à l'exécution, les présentations infructueuses ou contestées, les ruptures de stock, les arriérés de billets et les unités exécutées sans décharge.
- **Contrôles possibles:** les procédures de présentation et d'exécution publiées; les informations relatives à la capacité; plusieurs lieux d'exécution, le cas échéant; les normes de preuve; les voies de plainte et de recours; et des enregistrements séparant la présentation, l'exécution et la décharge.
- **Tests de résistance:** deux à quatre fois le volume de présentation, les pannes d'installation, les défaillances des fournisseurs et les tentatives d'utilisation en double.
- **Appétit pour le risque:** faible lorsqu'il s'agit de biens essentiels, de participants vulnérables ou de longues fenêtres d'exécution.

### **10.5 Risque de gouvernance**

- **Des menaces:** Capture de l'intendant ou du contrôleur, changements de paramètres précipités, conflits d'intérêts, pouvoirs techniques cachés et appels faibles.
- **Indicateurs:** L'autorité concentrée, les actions d'urgence fréquentes, les changements de politique inexpliqués et les annulations répétées.
- **Contrôles possibles:** les informations sur les rôles et les pouvoirs; les seuils d'approbation proportionnels; les timelocks; les conflits et les règles de récusation; les enregistrements publics des modifications; les recours; les couchers de soleil automatiques à énergie d'urgence; et la forcabilité.
- **Tests de résistance:** propositions contradictoires, perte de signataires, tentatives de corruption et capture par accumulation ou contrôle délégué.
- **Appétit pour le risque:** faible pour les actions affectant les méthodes de valeur, les retraits, les racines du registre, la couverture ou les pouvoirs d'urgence.

Pour un déploiement futur du jeton de gouvernance CLC proposé, le test de capture comprendrait l'accumulation suivie de tentatives de réorientation des budgets, d'affaiblissement des normes de registre, d'approbation des mandats des parties liées ou de vidage de la couverture financée. Les mesures de sauvegarde possibles comprennent des blocages de gouvernance, des seuils plus élevés pour les actions critiques, des délais d'exécution, une délégation transparente et un suivi de la concentration, un processus d'incident et une procédure crédible de "fork and exit". Aucune n'est représentée comme déployée simplement en apparaissant ici.

### **10.6 Risque juridique et de conformité**

- **Des menaces:** un bon d’échange, un service, une promotion ou un actif de gouvernance bénéficiant d'un traitement réglementaire inattendu; les défaillances en matière de protection des consommateurs; l'exposition au blanchiment d'argent ou aux sanctions; et les restrictions transfrontalières.
- **Indicateurs:** les signaux de juridiction, les enquêtes des régulateurs, les plaintes, les correspondances avec des parties restreintes et la divergence entre le comportement annoncé et le comportement réel.
- **Contrôles possibles:** l'examen par catégorie et par juridiction; des informations précises; les interfaces géoconfinées; des contrôles proportionnés de l'éligibilité ou de l'attestation; les contrôles de promotion; les enregistrements de l'autorité et de l'acceptation; et détermine les parties responsables.
- **Tests de résistance:** une restriction de compétence, la résiliation du fournisseur, une reclassement obligatoire et une ordonnance de mise en pause d'une caractéristique ou d'une classe d'actifs.
- **Appétit pour le risque:** faible; limiter ou mettre en pause une activité non soutenue.

#### 10.6.1 Le positionnement juridique et le traitement proposé des jetons

1. **Infrastructure vérifiable:** Les contrats Protocol v1.1.0 sont compatibles avec EVM- et leur source est publiée dans le cadre des licences et des exceptions de tiers identifiées dans le référentiel du protocole. La publication permet l'examen mais ne prouve pas en elle-même un audit, un déploiement sécurisé ou une conformité légale. Chaque déploiement doit divulguer sa version de code, la provenance de la construction, les adresses, les pouvoirs du contrôleur et l'état de l'audit.
2. **Position du jeton proposée:** Dans cette conception, le jeton de gouvernance CLC proposé coordonnerait la gouvernance et l'accès à la politique. Il ne créerait pas de dividendes, de partage des bénéfices, de droits résiduels, ni de garantie de valeur ou de liquidité.
3. **Actifs proposés connexes:** une politique mise en œuvre séparément pourrait permettre de verrouiller le jeton de gouvernance CLC proposé à stCLC et pourrait autoriser sCLC à portée d'époque. Les termes adoptés devraient définir leurs droits exacts, leurs limites, leur date d'expiration, leur transférabilité et leur traitement.
4. **Pour les communications:** les matériaux pour tout déploiement proposé de jetons de gouvernance CLC, stCLC ou sCLC ne devraient pas promettre de profit, d'appréciation, de revenu passif ou d'accès garanti.
5. **Contrôles de compétence:** un déploiement pourrait nécessiter des barrières géographiques à l'interface, des attestations pour les classes restreintes, des limites de promotion, une revue spécifique à un actif ou des contrôles qui mettent en pause une fonctionnalité proposée.
6. **Avis du participant:** les termes adoptés expliqueraient quand l'accès peut être réduit ou désactivé pour des raisons juridiques, opérationnelles ou de risque et si une compensation ou un recours peut s'appliquer.

### **10.7 Risque de routage et risque interdomaine**

- **Des menaces:** l'exécution partielle, les hops bloqués, les exploits de ponts ou d'escrows, les cotations obsolètes, l'inflation de trajectoire et l'avancée des changements de valeur annoncés.
- **Indicateurs:** les taux d'expiration des itinéraires, les arriérés d'escrow, les écarts entre les cotations et l'exécution, les étapes répétés inutiles et les incidents de ponts.
- **Contrôles possibles:** l'exécution atomique, le cas échéant; des délais conservateurs HTLC ou des délais d'accréditation; la voie et les politiques des contreparties; les plafonds au niveau de la route; la cartographie déterministe de la cotation à la réception; et des opérateurs de services responsables.
- **Tests de résistance:** Un arrêt du pont, une réorganisation de la chaîne, une interruption de la dépendance, et un étape raté dans un itinéraire multi-étape proposé.
- **Appétit pour le risque:** faible à modéré uniquement pour les dépendances identifiées et surveillées.

### **10.8 Risque de dépôt et de gestion des clés**

- **Des menaces:** les clés perdues ou compromises, la collusion des signataires et une autorité de récupération ou d'administrateur peu claire.
- **Indicateurs:** Signatures anormales, changements de contrôleur, rotations manquées et retraits inhabituels.
- **Contrôles possibles:** l'autorisation à signes multiples ou à seuil; les clés matérielles; la séparation des rôles; la rotation des signataires; les inventaires du contrôleur public; les limites de retrait surveillées; et des procédures de récupération testées.
- **Appétit pour le risque:** Il est bas.

### **10.9 Réputation et risque social**

- **Des menaces:** des allégations trompeuses, des incitations nuisibles, des plaintes inaccessibles, des expériences de satisfaction médiocres, des manquements à la vie privée et des protections qui favorisent les initiés.
- **Indicateurs:** les plaintes par cohorte, les litiges non résolus, les tendances des performances des émetteurs, la concentration des bénéfices ou des pertes et les commentaires de la communauté.
- **Contrôles possibles:** les informations communiquées dans un langage simple; les voies de traitement des griefs et de correction; les éléments de preuve accessibles; une déclaration transparente; l'examen des incidents; et des sanctions proportionnées pour fausse présentation.
- **Appétit pour le risque:** Il s'agit d'un programme d'action en faveur de l'égalité des chances dans les pays en voie de développement.

### **10.10 Risque de concentration et de fragmentation**

- **Des menaces:** dépendance à l'égard d'un petit nombre d'émetteurs, de bassins, de contrôleurs, de fournisseurs, de réseaux ou de fourches incompatibles.
- **Indicateurs:** les mesures de concentration par émetteur, par groupe, par inventaire, par contrôleur ou par prestataire de services; les défaillances des routes entre groupes; et dépendances critiques uniques.
- **Contrôles possibles:** les seuils de concentration publiés; plusieurs opérateurs responsables; les normes compatibles; les registres indépendants; les procédures de sortie testées; et l'interopérabilité sûre.
- **Tests de résistance:** perte de l'émetteur, du bassin, de l'opérateur, du fournisseur ou de la racine du registre le plus important.
- **Appétit pour le risque:** déploiement spécifique et divulgué, avec des limites plus strictes pour les services essentiels ou les dépendances irremplaçables.
