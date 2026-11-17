# 5. Des bassins isolés à un réseau fédéré

Le protocole v1.1.0 actuel prend en charge l'exécution directe au moyen d'un `SwapPool` et fournit un `SwapRouter` Solidity qui calcule uniquement des cotations. L'application CLC de production et CLC Core coordonnent des itinéraires sur une même chaîne, initiés par les participants et traversant jusqu'à trois Bassins, en préparant un seul lot signé par le portefeuille Calibur. Les contrats n'exécutent pas eux-mêmes un itinéraire à plusieurs étapes, et le flux actuel de l'application et de CLC Core ne fournit ni HTLC interchaînes, ni itinéraires d'entiercement, ni rééquilibrage automatique des Bassins, ni compensation par lots, ni compensation entre réseaux.

Ce chapitre explique l'itinéraire actuel des participants et le distingue de la coordination proposée qui nécessiterait une nouvelle autorité du Bassin. Dans les deux cas, les Bassins indépendants conservent leurs propres règles d'admission, de valorisation, de limite, de redevance, d'inventaire et d'autorisation ainsi que leurs règles de gouvernance.

## **5.1 Mesures d'échange et d'exécution distinctes**

Le routage peut améliorer l'accès à l'inventaire, mais il ne fusionne pas les cycles de vie du bon et de l'échange. Les mesures doivent distinguer les événements suivants :

1. un itinéraire est indiqué;
2. un ou plusieurs swaps de bassin sont exécutés et réglés en chaîne;
3. un détenteur présente des parts de bon d’échange à l'émetteur;
4. l'émetteur remplit l'engagement ; et
5. les unités remplies sont déchargées.

Plus d'itinéraires cités ou exécutés ne prouvent pas plus d'exécution. Les rapports indiquent la cohorte, la période, les actifs, la méthode d'évaluation et l'horodatage, les exclusions, les corrections et les éléments de preuve hors chaîne requis par l'appendice C.

**Itinéraire illustratif :** Une école détient des bons de maïs mais a besoin de bons de transport. CLC Core peut identifier les inventaires de Bassin compatibles, coter le chemin sélectionné à un bloc déterminé et préparer les appels bornés pour le portefeuille de l'école. L'exécution ne réussit que si chaque étape respecte les bornes de sa cotation, ses limites, ses frais, son inventaire, les comportements pris en charge et sa politique. Les échanges qui en résultent ne prouvent pas que l'un ou l'autre émetteur a ensuite honoré ses engagements liés aux bons.

## **5.2 Routage actuel des participants et rééquilibrage proposé**

Deux activités nécessitent une autorité différente.

**Exécution actuelle initiée par le participant.** À partir des bons d'entrée et de sortie et d'un montant, CLC Core estime les itinéraires en fonction des avoirs admissibles du participant. Pour l'itinéraire sélectionné, il lit les Bassins à un même bloc déterminé, produit une cotation faisant autorité, simule le lot complet et prépare trois appels par étape : remise à zéro de l'autorisation, octroi de l'autorisation et appel borné à `SwapPool.withdraw`. Le participant signe, puis le relayeur soumet une seule transaction Calibur sur la même chaîne avec `revertOnFailure` activé. L'échec d'un appel annule tous les appels de l'itinéraire. L'application regroupe la transaction et les règlements de chaque étape dans un seul reçu.

Chaque étape conserve son propre Bassin responsable, ses données de cotation, son autorisation, ses frais, ses limites, son inventaire et son événement de règlement. L'application actuelle n'ajoute pas de frais distincts pour le service de routage. Le flux actuel prend en charge les portefeuilles EOA ou Calibur compatibles avec l'application, mais pas les portefeuilles Safe ni les autres portefeuilles de contrats.

**Rééquilibrage facultatif des Bassins.** Les Gestionnaires de Bassins pourraient publier des objectifs d'inventaire, des contreparties autorisées, des catégories d'actifs, des bornes d'écart de cotation et des limites par période. Un service responsable pourrait rechercher des cycles ou des chaînes compatibles et n'exécuter que les intentions autorisées.

Le rééquilibrage serait facultatif. Un Bassin peut autoriser les itinéraires ordinaires des participants sans autoriser un service à déplacer l'inventaire pour le rééquilibrage. Un futur mandat pourrait n'autoriser que certains actifs, certaines contreparties et certains montants. Chaque étape exécutée produirait un reçu, et les éventuels frais de service seraient indiqués séparément des frais du Bassin et du protocole.

L'exécution interchaînes par HTLC ou entiercement est également distincte du lot atomique actuel sur une même chaîne. Elle nécessiterait l'adoption de règles concernant les délais, l'abandon, le contrôleur, la récupération et le risque résiduel.

### **5.2.1 Confédération et interopérabilité**

Les déploiements indépendants peuvent exploiter leurs propres registres, interfaces, services d'itinéraire et profils de politique tout en choisissant des normes de données et de réception compatibles. L'application publique actuelle utilise son registre et son profil de service configurés. L'exécution entre profils reste dépendante du déploiement.

Un profil compatible devrait:

- identifier les racines de son registre, les opérateurs de services, les contrôleurs et les termes applicables;
- communiquer les contreparties autorisées et refusées, les actifs, les adaptateurs et les itinéraires;
- appliquer l'autorisation, les limites, les frais et les contraintes d'inventaire de chaque groupe participant;
- préserver les preuves de l'offre à la réception ; et
- permettre aux bassins qui fonctionnent autrement de quitter ou de sélectionner un autre registre sans effacer les soldes ou les obligations de l'émetteur.

La compatibilité peut augmenter les voies d'échange disponibles et réduire la dépendance à l'égard d'un registre ou d'un opérateur. Il ne rend pas le réseau, CLC App, GEF ou un autre bassin responsable de l'exécution par un émetteur.

## **5.3 Modèle proposé de redevance réseau et de redevance de service**

L'actuel Protocol v1.1.0 facture une redevance de bassin et, lorsqu'il est configuré, une redevance de protocole supplémentaire sur un échange direct de bassin. Ces frais courants restent distincts.

L'échange routé de production applique ces frais actuels indépendamment à chaque étape et les détaille dans la cotation et le reçu. Il n'ajoute actuellement pas de frais distincts pour le service de routage.

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

### **5.3.1 Récettes éligibles en espèces et en nature**

Les redevances peuvent être versées sous forme d'actifs fongibles éligibles à la liquidité ou sous forme de bons d’échange et d'autres actifs en nature. Les reçus en nature ne peuvent pas automatiquement payer les dépenses en espèces ou les créances de couverture. Tout échange ou conversion nécessiterait une autorisation, un inventaire disponible, des lieux divulgués, des limites et une exécution effective.

La part réalisée des recettes de redevances qui est éligible à l'encaissement après les restrictions imposées par la politique, les conversions manquées et le glissement est `χ`. Les reçus utilisables en espèces sont les suivants:

F_cash ≈ χ · F

L'analyse du budget et du rendement net utiliserait `F_cash` réalisé, et non les frais bruts cotés ou la valeur nominale de l'inventaire en nature. Un programme futur déclarerait séparément les frais bruts de bassin, les recettes de réseau, les frais de service, la composition des actifs, les résultats de conversion et les recettes utilisables en espèces.

## **5.4 Programmes de liquidité proposés**

Un futur programme de liquidité documenté séparément pourrait allouer des actifs à des bassins désignés ou à des services de routage. Les contrats actuels `SwapPool` ne frappent pas d'actions de bassin ni ne créent automatiquement de droits de remboursement, de retrait, de récompense, de gouvernance ou de bénéfice.

N'importe quel programme publierait:

- l'entité responsable et le participant Gestionnaires de Bassins;
- les actifs versés et la question de savoir si le transfert est remboursable, rétractable, offert ou doté;
- les dispositions relatives à la garde et au contrôle technique;
- les utilisations autorisées, les limites, les blocages, les portes de retrait et la répartition des pertes;
- l'admissibilité à des frais ou à une incitation et la possibilité que le montant soit nul ;
- les déclarations, les conflits, les plaintes et les recours ; et
- la migration, la résiliation et le traitement des actifs et obligations restants.

Les risques importants comprennent des stocks difficiles à échanger ou à satisfaire, une faible éligibilité des liquidités, le non-respect des émetteurs, les défaillances des contrats ou des fournisseurs, les changements de gouvernance et les restrictions à la sortie. Les limites, les réserves, les reçus et les tableaux de bord peuvent réduire ou révéler certains risques; Ils n'éliminent pas les pertes.

Pour une métrique analytique ex post, indiquer:

- `ϕ` est la fraction réalisée des recettes des frais de programme allouées en vertu des conditions adoptées par le programme ; et
- `K` être la valeur mesurée des actifs couverts par le programme selon une méthode spécifiée.

Alors:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Cette métrique décrit le flux de redevances réalisé par actif de programme mesuré. Ce n'est pas APY, une prévision, un dividende, ou un rendement garanti. Les rapports tiendront séparés le volume des swaps, la présentation des remboursements, l'exécution par l'émetteur, la décharge, la durée de détention, les pertes, les retraits et les reçus de frais.
