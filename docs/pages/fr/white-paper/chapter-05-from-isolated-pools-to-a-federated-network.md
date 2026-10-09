## **5. Des bassins isolés à un réseau fédéré**

L'actuel Protocol v1.1.0 prend en charge l'exécution directe par l'intermédiaire d'un `SwapPool` et fournit un `SwapRouter` à devis uniquement. Il n'exécute pas les routes multi-hop, les HTLC, les routes d'entiercement, la compensation par lots ou la compensation entre réseaux.

Ce chapitre propose comment les bassins indépendants pourraient se coordonner sans renoncer à leurs propres règles d'admission, d'évaluation, de limite, de redevance, d'inventaire, d'autorisation et de gouvernance.

### **5.1 Mesures d'échange et d'exécution distinctes**

La Fédération pourrait améliorer l'accès à l'inventaire, mais elle ne ferait pas fusionner le bon d’échange et échanger les cycles de vie. Toute mise en œuvre permettrait de mesurer ces événements séparément:

1. un itinéraire est indiqué;
2. un ou plusieurs swaps de bassin sont exécutés et réglés en chaîne;
3. un détenteur présente des parts de bon d’échange à l'émetteur;
4. l'émetteur remplit l'engagement ; et
5. les unités remplies sont déchargées.

Plus d'itinéraires cités ou exécutés ne prouvent pas plus d'exécution. Les rapports indiquent la cohorte, la période, les actifs, la méthode d'évaluation et l'horodatage, les exclusions, les corrections et les éléments de preuve hors chaîne requis par l'appendice C.

**Route illustrée:** Une école détient des bons d’échange de maïs mais a besoin de bons d’échange de transport. Un service d'itinéraire identifie les inventaires de bassin compatibles. L'exécution ne réussirait que si chaque étape autorisé séparément restait dans ses limites de quotas, ses limites, ses frais, son inventaire et sa politique. Les swaps qui en résultent ne prouvent pas que l'un ou l'autre émetteur a plus tard rempli ses engagements en matière de bons d’échange.

### **5.2 Services de routage et de rééquilibrage proposés**

Un futur service de liaison pourrait soutenir deux activités distinctes.

**Exécution initiée par le participant.** Compte tenu des actifs d'entrée et de sortie, d'un montant et des contraintes des utilisateurs, le service pourrait identifier un chemin et préparer l'exécution. Chaque étape aurait sa propre Bassin responsable, son devis, son autorisation, ses frais, ses limites, son inventaire et son reçu. Les lots atomiques, les HTLC et l'accréditation sont des choix d'exécution futurs possibles, pas le comportement actuel du protocole.

**Rééquilibrage du Bassin.** Gestionnaires de Bassins pourrait publier des objectifs d'inventaire, des contreparties autorisées, des catégories d'actifs, des limites d'écart de cotation et des limites par période. Un service responsable pourrait rechercher des cycles ou des chaînes compatibles et exécuter uniquement les intentions autorisées.

Le rééquilibrage serait une option. Un bassin pourrait autoriser les itinéraires des participants tout en refusant le rééquilibrage à l'extérieur, ou il pourrait autoriser uniquement des actifs, des contreparties et des montants sélectionnés. Chaque étape exécuté produirait un reçu, et toute redevance de service serait divulguée séparément des frais de bassin et de protocole.

#### **5.2.1 Confédération et interopérabilité**

Des déploiements indépendants pourraient exploiter leurs propres registres, interfaces, services de routage et profils de politiques tout en choisissant des normes de données et de réception compatibles. L'exécution interprofessionnelle resterait dépendante du déploiement.

Un profil compatible devrait:

- identifier les racines de son registre, les opérateurs de services, les contrôleurs et les termes applicables;
- communiquer les contreparties autorisées et refusées, les actifs, les adaptateurs et les itinéraires;
- appliquer l'autorisation, les limites, les frais et les contraintes d'inventaire de chaque groupe participant;
- préserver les preuves de l'offre à la réception ; et
- permettre aux bassins qui fonctionnent autrement de quitter ou de sélectionner un autre registre sans effacer les soldes ou les obligations de l'émetteur.

La compatibilité peut augmenter les voies d'échange disponibles et réduire la dépendance à l'égard d'un registre ou d'un opérateur. Il ne rend pas le réseau, CLC App, GEF ou un autre bassin responsable de l'exécution par un émetteur.

### **5.3 Modèle proposé de redevance réseau et de redevance de service**

L'actuel Protocol v1.1.0 facture une redevance de bassin et, lorsqu'il est configuré, une redevance de protocole supplémentaire sur un échange direct de bassin. Ces frais courants restent distincts.

Un programme futur pourrait recevoir séparément:

1. un **prélèvement de réseau**, défini comme une part déclarée des frais de Bassin perçus par les Bassins participants ; et
2. à **frais d'itinéraire ou de service**, facturés pour un service futur identifié.

Le prélèvement de réseau proposé n'est pas un pourcentage supplémentaire appliqué à l'intégralité du montant du swap après calcul de la redevance de bassin. Pour le groupe `p`:

τ_p = f_p · r_p

où `f_p` est le taux de redevance de bassin et `r_p` est la part proposée de cette redevance de bassin allouée au programme de réseau.

Pour une période déterminée:

- **Frais bruts pour le bassin** sont la somme des frais de bassin effectivement perçus pour chaque bassin;
- **les reçus de réseau** sont les parts déclarées de ces honoraires perçus;
- **les reçus des frais de service** sont des frais de routage ou de service perçus séparément ; et
- **les reçus des frais de programme** des recettes de réseau égales plus des recettes de frais de service.

Aucune catégorie n'est comptée deux fois. Les redevances de protocole actuelles ne sont pas incluses à moins qu'une politique adoptée séparément ne réoriente légalement les recettes réelles des redevances de protocole dans le futur programme.

Pour une approximation agrégée, calculer:

- `Q_swap` est la valeur des swaps de bassin exécutés pour la cohorte et la période définies ; et
- `τ` est le taux effectif du prélèvement de réseau proposé et des frais de service identifiés séparément sur cette valeur de swap exécutée.

Alors:

F ≈ τ · Q_swap

C'est une approximation analytique, pas une promesse de revenus. Chaque entrée nécessite une cohorte, une période, une unité, un calendrier d'évaluation, des exclusions et une politique de correction.

#### **5.3.1 Récettes éligibles en espèces et en nature**

Les redevances peuvent être versées sous forme d'actifs fongibles éligibles à la liquidité ou sous forme de bons d’échange et d'autres actifs en nature. Les reçus en nature ne peuvent pas automatiquement payer les dépenses en espèces ou les créances de couverture. Tout échange ou conversion nécessiterait une autorisation, un inventaire disponible, des lieux divulgués, des limites et une exécution effective.

La part réalisée des recettes de redevances qui est éligible à l'encaissement après les restrictions imposées par la politique, les conversions manquées et le glissement est `χ`. Les reçus utilisables en espèces sont les suivants:

F_cash ≈ χ · F

L'analyse du budget et du rendement net utiliserait `F_cash` réalisé, et non les frais bruts cotés ou la valeur nominale de l'inventaire en nature. Un programme futur déclarerait séparément les frais bruts de bassin, les recettes de réseau, les frais de service, la composition des actifs, les résultats de conversion et les recettes utilisables en espèces.

### **5.4 Programmes de liquidité proposés**

Un futur programme de liquidité documenté séparément pourrait allouer des actifs à des bassins désignés ou à des services de routage. Les contrats actuels `SwapPool` ne frappent pas d'actions de bassin ni ne créent automatiquement de droits de remboursement, de retrait, de récompense, de gouvernance ou de bénéfice.

N'importe quel programme publierait:

- l'entité responsable et le participant Gestionnaires de Bassins;
- les actifs versés et la question de savoir si le transfert est remboursable, rétractable, offert ou doté;
- les dispositions relatives à la garde et au contrôle technique;
- les utilisations autorisées, les limites, les blocages, les portes de retrait et la répartition des pertes;
- l'admissibilité à une redevance ou à une incitation et si le montant peut être égal à zéro;
- les déclarations, les conflits, les plaintes et les recours ; et
- la migration, la résiliation et le traitement des actifs et obligations restants.

Les risques importants comprennent des stocks difficiles à échanger ou à satisfaire, une faible éligibilité des liquidités, le non-respect des émetteurs, les défaillances des contrats ou des fournisseurs, les changements de gouvernance et les restrictions à la sortie. Les limites, les réserves, les reçus et les tableaux de bord peuvent réduire ou révéler certains risques; Ils n'éliminent pas les pertes.

Pour une métrique analytique ex post, indiquer:

- `ϕ` est la fraction réalisée des recettes des frais de programme allouées en vertu des conditions adoptées par le programme ; et
- `K` être la valeur mesurée des actifs couverts par le programme selon une méthode spécifiée.

Alors:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Cette métrique décrit le flux de redevances réalisé par actif de programme mesuré. Ce n'est pas APY, une prévision, un dividende, ou un rendement garanti. Les rapports tiendront séparés le volume des swaps, la présentation des remboursements, l'exécution par l'émetteur, la décharge, la durée de détention, les pertes, les retraits et les reçus de frais.
