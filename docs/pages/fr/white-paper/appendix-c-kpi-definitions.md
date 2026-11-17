# C. Définition proposée des indicateurs clés

Ces indicateurs clés de performance forment une spécification de mesure proposée, et non une déclaration selon laquelle l'application ou le protocole actuel enregistre chaque événement requis.

Chaque KPI publié doit inclure:

- l'éditeur responsable et la source des données;
- définition de l'événement ou de l'état;
- cohorte ou période de mesure;
- l'unité et la méthode d'évaluation;
- date et heure de l'évaluation;
- les règles d'inclusion et d'exclusion;
- le traitement des documents partiels, contestés, périmés, inaccessibles et corrigés;
- la preuve ou l'attestation requise en dehors de la chaîne;
- les antécédents de révision et les limites de la qualité des données ; et
- si le résultat est en chaîne, déclaré, attesté, vérifié de manière indépendante ou estimé.

| KPI |Définition proposée|Évidence requise et exclusions|
| --- | --- | --- |
| **Présentations valables** |Nombre d'unités acceptées dans le processus de remboursement de l'émetteur au cours d'une période|Identifiant de la présentation, émetteur, autorisation du titulaire, montant, heure, statut; exclure les doublons et les demandes non valides|
| **Taux d'exécution** |Présentations valides remplies divisées par présentations valides pour la même cohorte mature|preuve distincte du rendement de l'émetteur; déclarer les affaires ouvertes, rejetées, contestées, partielles et corrigées|
| **Complétitude de la décharge** |Présentations remplies avec un dossier de décharge divisé par présentations remplies|Brûler, annuler, désactiver l'enregistrement ou toute autre preuve de non-réutilisation liée à l'exécution|
| **Délais d'exécution** |Médiane et 90e percentile du temps de présentation à l'exécution|Ne pas remplacer le temps de conservation de l'émission à la présentation ou de l'acquisition à la présentation|
| **Durée de détention** |Médiane et répartition du temps allant de l'acquisition à la présentation|Identifier l'événement d'acquisition et exclure les délais d'acquisition inconnus|
| **Obligations éligibles en suspens** |Résidu d'engagements admissibles de tiers après exclusions définies|l'identité et les modalités de l'émetteur; exclure l'inventaire applicable des émetteurs, l'expiration, la combustion, la décharge, les tests et les jetons de non-engagement|
| **Volume des échanges directs de Bassin** | Valeur des échanges achevés et initiés comme des échanges dans un seul Bassin, selon une méthode de valorisation publiée | Événements de règlement sur la chaîne, unités de jeton, source du taux et heure ; ne pas les classer comme exécution de l'engagement par l'émetteur |
| **Tentatives de découverte d'itinéraires** | Demandes valides visant à trouver des bons accessibles ou des chemins candidats au cours d'une période | Version du graphe, bloc indexé, fraîcheur, périmètre du portefeuille, profondeur demandée, nombre de candidats, état d'omission ou budget de recherche ; il ne s'agit pas d'une cotation faisant autorité |
| **Itinéraires candidats disponibles** | Chemins candidats renvoyés par la découverte pour la cohorte de demandes définie | Compter séparément chaque chemin ordonné de Bassins et de jetons ; indiquer la profondeur et les exclusions ; ne pas les classer comme exécutables ou réglés |
| **Taux de réussite des cotations d'itinéraire** | Cotations d'itinéraire faisant autorité renvoyées, divisées par les tentatives de cotation valides | Bloc déterminé, chemin, mode de montant, expiration, résultat ou motif du refus ; tenir ce taux séparé de la réussite de la découverte et de l'exécution |
| **Taux d'exécution des itinéraires** | Transactions routées confirmées, divisées par les tentatives d'exécution valides et signées pour la même cohorte arrivée à maturité | Identifiant de suivi, hachage de transaction, état de l'envoi, confirmation ou annulation, profondeur de l'itinéraire et motif de l'échec ; exclure les cotations non signées |
| **Volume de l'ensemble de l'itinéraire** | Valeur d'entrée et de sortie des échanges routés confirmés, comptée une seule fois par itinéraire | Utiliser l'entrée réglée de la première étape et la sortie réglée de la dernière selon une même méthode de valorisation ; ne pas additionner la valeur de toutes les étapes comme s'il s'agissait de volumes économiques indépendants |
| **Règlement par étape** | Entrée réglée, sortie brute, frais du Bassin, frais du protocole et sortie nette pour chaque étape d'un itinéraire confirmé | Identifiants ordonnés des Bassins et des jetons, événements de règlement, hachage de transaction, bloc, index du journal et éventuel reliquat intermédiaire |
| **Frais de l'itinéraire** | Frais actuels des Bassins et du protocole effectivement réglés sur l'ensemble de l'itinéraire | Présenter chaque étape et le total par type de frais ; ne pas les qualifier de prélèvement de réseau proposé ni de frais de service non mis en œuvre |
| **Contraintes de l'itinéraire** | Nombre et proportion de refus d'itinéraire ou de cotation, répartis par cause identifiée | Admission, plafond de dépôt, liquidité, domaine de frais, jeton ou module de cotation non pris en charge, solde ou type de portefeuille, gaz, budget de recherche, expiration, incohérence ou preuve de simulation |
| **Santé du rapprochement des itinéraires** | Fraîcheur et fiabilité du graphe indexé et des enregistrements de règlement regroupés | Version et âge du graphe, profondeur de la file des éléments à rapprocher, durée du rapprochement, corrections, échecs, membres inconnus et reçus non résolus |
| **Inventaire des Bassins** |Actifs soutenus mesurés détenus par un bassin à un moment précisé|Solde contractuels, réserves de redevances, actifs inaccessibles, méthode d'évaluation et pouvoirs de rétractation du propriétaire|
| **Adéquation des réserves** |Actifs de réserve disponibles éligibles divisés par exposition expressément couverte|Politique de couverture, éligibilité des actifs, garde/contrôle, passifs, exclusions et évaluation; Pas d'offre totale de jetons par défaut|
| **Limite d'utilisation** |Réserve de jetons de bassin mesurée divisée par son plafond configuré actuel|Limiter adresse, jeton, bassin, horodatage, changements et périodes sans limiteur|
| **Recouvrement par le garant** |Récupération admissible reçue divisée par créances couvertes payées|Garant désigné, politique de réclamation, calendrier, coûts, litiges et annulations|
| **Revenus de réseau proposés** |Réseau proposé plus frais de routage/services reçus séparément|Exclure les frais bruts de bassin retenus par les bassins et éviter de compter le prélèvement deux fois|
| **Rapidité de la gouvernance** |Temps pour détecter, décider, faire une pause, réparer et fermer un incident|Définition des horaires, des organes responsables, des pouvoirs d'urgence, des appels et des événements manquants|

Les demandes d'impact social nécessitent une méthodologie distincte. L'activité blockchain à elle seule n'établit pas l'identité, les performances de l'émetteur, l'exécution, la santé de la communauté, la causalité ou l'impact.
