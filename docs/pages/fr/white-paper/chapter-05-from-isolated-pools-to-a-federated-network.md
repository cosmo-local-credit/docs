## **5°. De piscines isolées à un réseau fédéré**

Le Protocol v1.1.0 actuel prend en charge l'exécution directe par le biais d'un `SwapPool` et fournit un `SwapRouter` de cotation seulement. Il n'exécute pas de liaisons multi-hop, de liaisons HTLC, de liaisons de dépôt de dépôt, de netting par lots ou de compensation par réseau.

Ce chapitre propose comment les Pools gouvernés indépendamment pourraient se coordonner sans renoncer à leurs propres règles d'admission, d'évaluation, de limite, de frais, d'inventaire, d'autorisation et de gouvernance.

### **5.1 Mesures séparées d'échange et d'accomplissement**

La Fédération pourrait améliorer l'accès à l'inventaire, mais elle ne ferait pas fusionner le bon et échanger les cycles de vie. Toute mise en œuvre mesurerait ces événements séparément:

1. une route est indiquée;
2. un ou plusieurs swaps de pool sont exécutés et réglés sur la chaîne;
3. un titulaire présente aux émetteurs des unités de bon;
4. l'émetteur remplit l'engagement; et
5. les unités remplies sont déchargées.

Plus de routes citées ou exécutées ne prouvent pas plus d'accomplissement. Les rapports indiqueraient la cohorte, la période, les actifs, la méthode d'évaluation et le timestamp, les exclusions, les corrections et les éléments de preuve hors chaîne requis par l'appendice C.

**Route illustrative:**Une école possède des bons de maïs, mais elle a besoin de bons de transport. Un service de route identifie les stocks de réservoir compatibles. L'exécution ne réussirait que si chaque saut autorisé séparément restait dans ses limites de cotation, limites, frais, inventaire et politique. Les swaps résultants ne prouveraient pas que l'un ou l'autre émetteur ait plus tard respecté ses engagements en matière de bons.

### **5.2 Services proposés de routage et de rééquilibrage**

Un futur service routier pourrait soutenir deux activités distinctes.

**Exécution initiée par le participant.**Compte tenu des actifs d'entrée et de sortie, d'un montant et des contraintes des utilisateurs, le service pourrait identifier un chemin et préparer l'exécution. Chaque saut aurait son propre réservoir responsable, devis, autorisation, frais, limites, inventaire et reçu. Les lots atomiques, les HTLC et les escrocs sont des choix d'exécution futurs possibles, pas le comportement actuel du protocole.

**Le rééquilibrage de l'option Pool.**Les gestionnaires de pool pourraient publier des objectifs d'inventaire, des contreparties autorisées, des classes d'actifs, des limites de déviation des cotations et des limites par période. Un service responsable pourrait rechercher des cycles ou des chaînes compatibles et exécuter uniquement les intentions autorisées.

Le rééquilibrage serait opt-in. Un pool pourrait permettre des itinéraires aux participants tout en refusant un rééquilibrage sortant, ou il pourrait permettre uniquement des actifs, des contreparties et des montants sélectionnés. Chaque saut exécuté produirait un reçu et les frais de service seraient communiqués séparément des frais de base et des frais de protocole.

#### **5.2.1 Confédération et interoperabilité**

Les déploiements indépendants pourraient exploiter leurs propres registres, interfaces, services de route et profils de politiques tout en choisissant des normes de données et de réception compatibles. L'exécution interprofessionnelle resterait dépendante du déploiement.

Un profil compatible:

- identifier les racines de son registre, les opérateurs de services, les responsables du traitement et les termes applicables;
- communiquer les contreparties autorisées et refusées, les actifs, les adaptateurs et les itinéraires;
- appliquer les autorisations, les limites, les frais et les contraintes d'inventaire de chaque groupe participant;
- préserver les preuves de cotation à réception par boîte; et
- permettre aux Pools fonctionnels autrement de quitter ou de sélectionner un autre registre sans effacer les soldes ou les obligations de l'émetteur.

La compatibilité peut augmenter les voies d'échange disponibles et réduire la dépendance à un registre ou à un opérateur. Il ne rend pas le réseau, CLC App, GEF ou un autre Pool responsable de l'exécution d'un émetteur.

### **5.3 Modèle proposé de réseau et de frais de service**

Le Protocol v1.1.0 actuel facture une redevance de pool et, lorsqu'elle est configurée, une redevance de protocole supplémentaire sur un swap direct de pool. Ces redevances actuelles restent distinctes.

Un programme futur pourrait recevoir séparément:

1. un **rack de réseau**, défini comme une part déclarée des frais de pool collectés par les piscines participantes; et
2. une redevance de routage ou de service, facturée pour un service futur identifié.

L'impôt sur le réseau proposé n'est pas un pourcentage supplémentaire appliqué à l'intégralité du montant des swaps après avoir déjà compté les frais de pool. Pour la piscine `p`:

T_p = f_p · r_p

où `f_p` est le taux de la redevance de pool et `r_p` est la part proposée de cette redevance de pool allouée au programme de réseau.

Pour une période mesurée:

- **frais bruts de la piscine**sont la somme des redevances réelles collectées par chaque pool;
- **Résultats de la mise en réseau**sont les parts déclarées de ces honoraires collectés;
- **reçus des frais de service**les frais de routage ou de service sont collectés séparément; et
- **les reçus des honoraires du programme**réceptions égales pour les frais de réseau plus les réceptions pour les frais de service.

Aucune catégorie n'est comptée deux fois. Les frais actuels du protocole ne sont pas inclus, à moins qu'une politique adoptée séparément ne redirige légalement les recettes réelles des frais du protocole vers le futur programme.

Pour une approximation globale, laissez:

- `Q_swap` est la valeur des swaps de pool exécutés pour la cohorte et la période définies; et
- `τ` est le taux effectif de la mise en réseau proposée et les frais de service identifiés séparément sur cette valeur de swap exécutée.

Alors:

F ≈ τ · Q_swap

C'est une approximation analytique, pas une promesse de revenus. Chaque entrée nécessite une cohorte, une période, une unité, un timestamp d'évaluation, des exclusions et une politique de correction.

#### **5.3.1 Résultats en espèces admissibles et en nature**

Les redevances peuvent provenir d'actifs fonciers admissibles en espèces ou de bons et d'autres actifs en nature. Les reçus en nature ne peuvent pas payer automatiquement les frais en espèces ou les créances de couverture. Tout échange ou conversion nécessiterait l'autorité, l'inventaire disponible, les lieux divulgués, les limites et l'exécution effective.

Que `χ` soit la part réalisée des reçus de redevances qui est admissible en espèces après les restrictions de politique, les conversions ratées et le glissement. Les reçus utilisables en espèces sont:

F_cash ≈ χ · F

L'analyse budgétaire et de l'équilibre utiliserait `F_cash` réalisé, et non les frais cotés bruts ou la valeur nominale de l'inventaire en nature. Un programme futur rapporterait séparément les honoraires bruts du pool, les honoraires de réseau, les honoraires de service, la composition des actifs, les résultats de conversion et les honoraires de trésorerie utilisables.

### **5.4 Programmes de liquidité proposés**

Un futur programme de liquidité documenté séparément pourrait allouer des actifs aux pools désignés ou aux services de routage. Les contrats `SwapPool` actuels ne montrent pas les actions de Pool ni ne créent automatiquement des droits de remboursement, de retrait, de récompense, de gouvernance ou de bénéfice.

N'importe quel programme publierait:

- l'entité responsable et les gestionnaires participant au pool;
- les actifs contribués et si le transfert est remboursable, rétractable, donné ou doté;
- les modalités de garde et de contrôle technique;
- les utilisations autorisées, les limites, les verrouillages, les portes de retrait et l'allocation des pertes;
- l'éligibilité des frais ou des incitations et si le montant peut être nul;
- les rapports, les conflits, les plaintes et les recours; et
- la migration, la résiliation et le traitement des actifs et obligations restants.

Les risques importants comprennent l'inventaire difficile à échanger ou à remplir, la faible éligibilité en espèces, la non-exécution de l'émetteur, les défaillances de contrat ou de fournisseur, les changements de gouvernance et les restrictions de sortie. Les limites, les réserves, les reçus et les tableaux de bord peuvent réduire ou révéler certains risques; ils n'éliminent pas les pertes.

Pour une métrique d'analyse ex-post, laissez:

- `ϕ` est la fraction réalisée des recettes des honoraires du programme allouées en vertu des conditions adoptées par le programme; et
- `K` est la valeur mesurée des actifs couverts par le programme selon une méthode indiquée.

Alors:

FeeFlow_LP ≈ (φ · F) / K = (φ · τ · Q_swap) / K

Cette métrique décrit le flux de redevances réalisé par actif du programme mesuré. Ce n'est pas APY, une prévision, un dividende ou un rendement garanti. Les rapports tiennent séparés le volume des swaps, la présentation des remboursements, l'exécution par l'émetteur, la décharge, la durée de détention, les pertes, les retraits et les reçus de redevances.
