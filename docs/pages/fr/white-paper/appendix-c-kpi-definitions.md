## C. Définitions proposées KPI

Ces KPI constituent une spécification de mesure proposée, et non une déclaration selon laquelle l'application ou le protocole actuel enregistre chaque événement requis.

Chaque KPI publié doit inclure:

- l'éditeur responsable et la source de données;
- définition de l'événement ou de l'état;
- période de cohorte ou de mesure;
- unité et méthode d'évaluation;
- le timestamp d'évaluation;
- les règles d'inclusion et d'exclusion;
- traitement des dossiers partiels, contestés, expirés, inaccessibles et corrigés;
- la preuve ou l'attestation requise hors chaîne;
- les antécédents de révision et les limitations de la qualité des données; et
- si le résultat est en chaîne, déclaré, attesté, vérifié indépendamment ou estimé.

| KPI |Définition proposée|Les éléments de preuve requis et les exclusions|
| --- | --- | --- |
| **Présentations valables** |Compte ou unités acceptées dans le processus de rachat de l'émetteur pendant une période|Identificateur de présentation, émetteur, autorisation du titulaire, montant, heure, statut; exclure les copies et les demandes invalides|
| **Taux d'exécution** |Présentations valides remplies divisées par des présentations valides pour la même cohorte mûre|Des éléments de preuve distincts de la performance de l'émetteur; indiquer les cas ouverts, rejetés, contestés, partiels et corrigés|
| **Completé de la décharge** |Présentations remplies avec enregistrement de décharge divisé par présentations remplies|Brûler, annuler, désactiver ou autres preuves de non réutilisation liées à l'accomplissement|
| **La latence d'exécution** |La moyenne et le 90e percentile du temps de présentation à réalisation|Ne remplace pas le temps de conservation de l'émission à la présentation ou de l'acquisition à la présentation|
| **Durée de conservation** |Médiane et répartition du temps entre l'acquisition et la présentation|Identifier l'événement d'acquisition et exclure les temps d'acquisition inconnus|
| **Engagements éligibles en suspens** |Engagements de tiers admissibles restant après exclusions définies|Identification et conditions de l'émetteur; exclure l'inventaire, l'expiration, la combustion, la décharge, les essais et les jetons de non-engagement applicables de l'émetteur|
| **Volume d'échange de piscine** |La valeur des swaps directs réalisés dans le cadre d'une méthode d'évaluation divulguée|Evénements de règlement en chaîne, unités de jetons, source de taux, temps; ne sont pas classés comme satisfaction de l'émetteur|
| **Inventaire des piscines** |Actifs soutenus mesurés détenus par un groupe à un moment donné|Salles de contrats, réserves de redevances, actifs inaccessibles, méthode d'évaluation et pouvoirs de retrait des propriétaires|
| **L'adéquation des réserves** |Actifs de réserve disponibles éligibles divisés par exposition couverte expressément|Politique de couverture, éligibilité des actifs, détention/contrôle, passifs, exclusions et valorisation; non fourniture totale de jetons par défaut|
| **Utilisation limite** |Le solde des jetons de pool mesuré divisé par son plafond actuel configuré|Adresse limite, jeton, pool, timestamp, changements et périodes sans limiteur|
| **Taux de réussite des cotations** |Réponses de devis réussies divisées par tentatives de devis valides|Résultat en cotation seulement; pas d'exécution de route|
| **Taux d'exécution de la route** |Exécutions multi-hop terminées divisées par tentatives d'exécution valides|Applicable uniquement à un système d'exécution mis en œuvre; règles de rapport par hop et d'atomisation|
| **Récupération du garant** |Recouvrement admissible reçu divisé par créances couvertes versées|Garant identifié, politique de réclamation, calendrier, coûts, litiges et annulations|
| **Résultats du réseau proposés** |Réservation de réseau proposée reçue plus frais de routage/service distincts reçus|Exclure les frais bruts des piscines retenus par les piscines et évite de compter le rake deux fois|
| **Temps de gouvernance** |Le temps de détecter, de décider, de faire une pause, de réparer et de fermer un incident|Horloges définies, organes responsables, pouvoirs d'urgence, appels et événements manquants|

Les revendications d'impact social nécessitent une méthodologie distincte. L'activité blockchain seule n'établit pas l'identité, la performance de l'émetteur, la satisfaction, la santé communautaire, la causalité ou l'impact.
