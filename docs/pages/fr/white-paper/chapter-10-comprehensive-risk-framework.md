## **Il y en a 10. Cadre global des risques**

Ce cadre proposé sépare dix catégories de risques. Pour chaque catégorie, il identifie les indicateurs possibles, les contrôles, les tests de stress et l'appétit de risque indicatif. Il s'agit de recommandations de conception, pas de revendications selon lesquelles chaque contrôle est déployé, efficace ou suffisant. Les limites, les réserves, les garanties, le suivi, la couverture et la gouvernance ne peuvent pas éliminer les pertes.

### **10.1 Protocole et risques liés aux contrats intelligents**

- **Les menaces:**les bugs de contrat, les erreurs de mise à niveau, les défaillances de dépendance et les limites ou frais mal configurés.
- **Indicateurs:**les résultats de l'audit, les mouvements inexpliqués des stocks, les défaillances invariantes et les revers inhabituels.
- **Contrôles possibles:**des audits indépendants; des rôles privilégiés minimaux; des contrôleurs de proxy et de dépendance révélés; des mises à niveau en temps réel; la surveillance en chaîne; des pauses d'incident avec autorité et critères publiés; et un parcours de migration testé.
- **Tests de stress:**dépendances de quotas ou de limites indisponibles, déficits d'inventaire, arrêt des contrats et effondrement du trafic.
- **Appétit pour le risque:**faible avant la mise à l'échelle des obligations impayées ou du volume des swaps.

### **10.2 Risques économiques et de marché**

- **Les menaces:**l'inventaire mince, les flux unilatéraux, les retraits rapides et les références de prix manipulées ou périmées.
- **Indicateurs:**L'utilisation élevée du bilan des jetons de pool, l'élargissement des différences de cotation, le rejet fréquent des limites et l'inventaire concentré.
- **Contrôles possibles:**les plafonds de solde des jetons de pool actuels; les limites de roulement ou de compte proposées; les réserves adoptées séparément; les références de prix protégées; les exclusions des itinéraires; et les frais ou limites d'incident limités dans le temps.
- **Tests de stress:**des mouvements importants des prix de référence, des vagues de présentation, des demandes de retrait et des pannes des sources de données.
- **Appétit pour le risque:**modérée uniquement dans les paramètres publiés et la capacité de support des pertes financée.

### **10.3 Risque de l'émetteur et du bon**

- **Les menaces:**l'émission au-delà de la capacité de réalisation, le défaut de l'émetteur, les termes trompeurs et les fenêtres de disponibilité ou de présentation mal précisées.
- **Indicateurs:**diminution des taux d'exécution confirmés, vieillissement des bons impayés, plaintes non résolues et exposition concentrée à un émetteur.
- **Contrôles possibles:**la diligence raisonnable de l'émetteur; des bons et des conditions d'offre clairs; des limites d'émission ou d'admission; des obligations ou garanties financées indépendamment; des rapports de cohorte; et une vérification du registre responsable.
- **Tests de stress:**l'insolvabilité de l'émetteur, les chocs de production régionaux, les créances contrefaites et les retards prolongés en matière d'exécution.
- **Appétit pour le risque:**diminuer à mesure que la concentration de l'émetteur ou de l'offre augmente.

### **10.4 Risque de présentation et d'exécution du remboursement**

- **Les menaces:**une présentation invalide ou dupliquée, une capacité d'émetteur insuffisante, des stocks, des défaillances logistiques et des dossiers de décharge manquants.
- **Indicateurs:**la latence de l'exécution des demandes, les présentations ratées ou contestées, les stocks, les arriérés de billets et les unités remplies manquant de décharge.
- **Contrôles possibles:**les procédures publiées de présentation et d'exécution; la divulgation des capacités; les lieux d'exécution multiples où il est légitime; les normes de preuve; les voies de plainte et de recours; et les dossiers séparant la présentation, l'exécution et la décharge.
- **Tests de stress:**deux à quatre fois le volume de présentation, les pannes d'installation, les pannes des fournisseurs et les tentatives d'utilisation dupliquée.
- **Appétit pour le risque:**faible lorsque des biens essentiels, des participants vulnérables ou de longues fenêtres d'exécution sont impliqués.

### **10.5 Risque de gouvernance**

- **Les menaces:**Capture du gestionnaire ou du contrôleur, changements de paramètres rapides, conflits d'intérêts, pouvoirs techniques cachés et faibles appels.
- **Indicateurs:**l'autorité concentrée, des actions d'urgence fréquentes, des changements de politique inexpliqués et des délais répétés.
- **Contrôles possibles:**les informations relatives au rôle et à la puissance; les seuils d'approbation proportionnels; les délais; les conflits et les règles de refus; les dossiers de changement publics; les appels; les couchers de soleil automatiques de l'énergie d'urgence; et la forquabilité.
- **Tests de stress:**les propositions contradictoires, la perte de signataires, les tentatives de corruption et la capture par accumulation ou contrôle délégué.
- **Appétit pour le risque:**faible pour les actions affectant les méthodes de valeur, les retraits, les racines du registre, la couverture ou les pouvoirs d'urgence.

Pour un déploiement futur du jeton de gouvernance CLC proposé, le test de capture comprendrait l'accumulation suivie de tentatives de redirection des budgets, d'affaiblissement des normes de registre, d'approbation des mandats des parties liées ou de drainage de la couverture financée. Les garanties possibles comprennent des blocs de gouvernance, des seuils plus élevés pour les actions critiques, un délai d'exécution, une surveillance transparente des délégations et des concentrations, un processus d'incident et une procédure crédible de forge et de sortie. Aucun n'est représenté comme déployé simplement en apparaissant ici.

### **10.6 Risque juridique et de conformité**

- **Les menaces:**un bon, un service, une promotion ou un actif de gouvernance recevant un traitement réglementaire inattendu; des défaillances de protection des consommateurs; une exposition au blanchiment d'argent ou à des sanctions; et des restrictions transfrontalières.
- **Indicateurs:**flags de juridiction, enquêtes du régulateur, plaintes, correspondances de parties restreintes et divergence entre le comportement annoncé et le comportement réel.
- **Contrôles possibles:**examen par catégorie et juridiction; divulgations précises; interfaces géographiques; contrôles proportionnés d'éligibilité ou d'attestation; contrôles de promotion; enregistrements d'autorité et d'acceptation; et des parties responsables claires.
- **Tests de stress:**une restriction de compétence, une résiliation du fournisseur, une reclassement obligatoire et une ordonnance de suspension d'une fonctionnalité ou d'une classe d'actifs.
- **Appétit pour le risque:**faible; restreindre ou interrompre l'activité non soutenue.

#### 10.6.1 Le positionnement juridique et le traitement des jetons proposés

1. **Infrastructure vérifiable:**Les contrats Protocol v1.1.0 sont compatibles avec EVM- et leur source est publiée dans les licences et les exceptions de tiers identifiées dans le référentiel du protocole. La publication permet une révision mais ne prouve pas elle-même un audit, un déploiement sécurisé ou la conformité légale. Chaque déploiement devrait divulguer sa version de code, sa provenance, ses adresses, les pouvoirs du contrôleur et son statut d'audit.
2. **Posture du jeton proposé:**Dans cette conception, le jeton de gouvernance CLC proposé coordonnerait la gouvernance et l'accès aux politiques. Il ne créerait pas de dividendes, de partage des bénéfices, de droits résiduels ni de garantie de valeur ou de liquidité.
3. **Actifs proposés liés:**une politique mise en œuvre séparément pourrait permettre de verrouiller le jeton de gouvernance CLC proposé à stCLC et pourrait autoriser une scope d'époque sCLC. Les termes adoptés devraient définir leurs droits exacts, leurs limites, leur expiration, leur transférabilité et leur traitement.
4. **Communiqués:**les matériaux pour tout déploiement proposé de jetons de gouvernance CLC, stCLC ou sCLC ne doivent pas promettre des bénéfices, une appréciation, un revenu passif ou un accès garanti.
5. **Contrôles de compétence:**un déploiement peut nécessiter un géofencing d'interface, des attestations pour les classes restreintes, des limites de promotion, un examen spécifique des actifs ou des contrôles qui suspendent une fonctionnalité proposée.
6. **Avis du participant:**les termes adoptés expliqueront quand l'accès peut être réduit ou désactivé pour des raisons légales, opérationnelles ou de risque et si une compensation ou un recours s'applique.

### **10.7 Risque de routage et de cross-domaine**

- **Les menaces:**l'exécution partielle, les sauts bloqués, les exploits de ponts ou d'escrocs, les cotations obsolètes, l'inflation et l'avancement des changements de valeur annoncés.
- **Indicateurs:**les taux d'expiration de l'itinéraire, les arriérés de garanties, les différences entre les cotations et l'exécution, les sauts inutiles répétés et les incidents de pont.
- **Contrôles possibles:**l'exécution atomique, le cas échéant; les délais de conservation HTLC ou de délais de dépôt; les politiques relatives aux itinéraires et aux contreparties; les plafonds au niveau des itinéraires; la cartographie déterministe des cotes à la réception; et les opérateurs de services responsables.
- **Tests de stress:**Un arrêt de pont, une réorganisation de la chaîne, une panne de dépendance, et un saut échoué dans une route multi-hop proposée.
- **Appétit pour le risque:**faible à modéré uniquement pour les dépendances identifiées et surveillées.

### **10.8 Risque de garde et de gestion des clés**

- **Les menaces:**les clés perdues ou compromises, la collusion entre signataires et l'autorité de récupération ou d'administration non claire.
- **Indicateurs:**signatures anormales, changements de contrôleur, rotations ratées et retraits inhabituels.
- **Contrôles possibles:**Autorisation multisigne ou seuil; clés supportées par le matériel; séparation de rôles; rotation du signataire; stocks de contrôleurs publics; limites de retrait surveillées; et procédures de récupération testées.
- **Appétit pour le risque:**Il est bas.

### **10.9 Réputation et risque social**

- **Les menaces:**les revendications trompeuses, les incitations nuisibles, les plaintes inaccessibles, les mauvaises expériences de satisfaction, les défaillances de la vie privée et les protections qui favorisent les initiés.
- **Indicateurs:**les plaintes par cohorte, les litiges non résolus, les tendances de performance des émetteurs, la concentration des bénéfices ou des pertes et les commentaires de la communauté.
- **Contrôles possibles:**des informations en langage clair; des moyens de rectification des griefs; des éléments de preuve accessibles; des rapports transparents; l'examen des incidents; et des sanctions proportionnées en cas de fausse déclaration.
- **Appétit pour le risque:**Il s'agit d'un programme d'aide aux populations touchées et aux participants vulnérables.

### **10.10 Risque de concentration et de fragmentation**

- **Les menaces:**dépendance d'un petit nombre d'émetteurs, de pools, de contrôleurs, de fournisseurs, de réseaux ou de fourches incompatibles.
- **Indicateurs:**mesures de concentration par émetteur, pool, inventaire, contrôleur ou fournisseur de services; défaillances de route entre clusters; et dépendances critiques individuelles.
- **Contrôles possibles:**les seuils de concentration publiés; les opérateurs responsables multiples; les normes compatibles; les registres indépendants; les procédures de sortie testées; et l'interopérabilité sûre.
- **Tests de stress:**la perte du plus grand émetteur, du plus grand pool, de l'opérateur, du fournisseur ou de la racine du registre.
- **Appétit pour le risque:**déploiement spécifique et divulguée, avec des limites plus strictes pour les services essentiels ou les dépendances irremplaçables.
