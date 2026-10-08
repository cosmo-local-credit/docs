# Contrats intelligents

Cette page décrit les principaux contrats Pool et Voucher dans le protocole v1.1.0. Le comportement des contrats fournit une mécanique de règlement; il ne remplace pas les divulgations de l'émetteur, les règles du Pool ou d'autres termes de transaction qui s'appliquent à une utilisation particulière.

Utilisez [Concepts et vocabulaire](/fr/introduction/concepts) pour distinguer le Pool d'engagement réglementé de `SwapPool`, et le règlement par swap de la présentation, de l'exécution et de la décharge du rachat.


## Voucher (`GiftableToken`)

`GiftableToken` est un jeton ERC20 avec mécanique qu'un émetteur peut utiliser pour un bon:

- **Mise en forme autorisée**Le propriétaire peut désigner des écrivains qui peuvent émettre des jetons avec `mintTo`.
- **Expiration facultative**L'expiration de `0` signifie l'absence d'expiration au niveau du contrat. Dans le cas contraire, les transferts, la mouture et la combustion reviennent à l'heure ou après le timestamp configuré. N'importe qui peut persister dans l'état du terminal `expired` en appelant directement `applyExpiry`.
- **Comptabilité de l'offre**`totalMinted` et `totalBurned` exposent une activité d'approvisionnement cumulée. La fonction `burn` réservée au propriétaire brûle les jetons détenus par l'adresse du propriétaire.

Le contrat de jeton n'identifie pas les biens ou services de l'émetteur, ne fixe pas une valeur de rachat, ne prouve pas la capacité ou ne promet pas de conversion en espèces. Un `GiftableToken` ne devient un engagement redevable qu'à travers les modalités et les comportements publiés séparément par l'émetteur. Les émetteurs restent responsables de la description exacte et du respect de ces termes.


## Le groupe d'engagement (`SwapPool`)

`SwapPool` est un moteur de réserve de jetons et de règlement de swap. Bien qu'il expose les métadonnées ERC20 pour le nom, le symbole et les décimales du Pool, le contrat v1.1.0 ne produit pas de jetons Pool-share. La liquidité est fournie par le transfert de jetons dans le pool, et le titulaire du contrat peut retirer la liquidité disponible.

### Composition et dépendances facultatives

|Configuration|Lorsqu'il n'est pas réglé|Localisation d'adresse scellable|
| --- | --- | --- |
| `tokenRegistry` |N'importe quel jeton peut passer le contrôle de conservation de la piscine|Oui , c' est vrai .|
| `tokenLimiter` |Les dépôts n'ont pas de plafond de solde au niveau des contrats|Oui , c' est vrai .|
| `quoter` |La quantité d'entrée brute est considérée comme la quantité de production brute cotée|Oui , c' est vrai .|
| `feePolicy` |Les frais de la piscine sont zéro|Oui , c' est vrai .|
| `feeAddress` |Les frais de pool ne sont pas facturés comme frais rétractables pour un bénéficiaire désigné|Oui , c' est vrai .|
| `protocolFeeController` |Il n' y a pas de frais de protocole|Je ne veux pas.|

Les cinq bits d'étanchéité verrouillent définitivement les adresses `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry` et `tokenLimiter` actuelles contre leurs paramètres correspondants. `protocolFeeController` et `feesDecoupled` sont des valeurs d'initialisation et ne font pas partie de ces cinq bits.

Le scellage d'une tranche d'adresse ne gelera pas le contrat à cette adresse. Un registre scellé, un limiteur, une politique de cotation ou de frais et un contrôleur de frais de protocole configurés peuvent toujours changer si sa propre gouvernance le permet. L'administrateur proxy ERC-1967 peut également mettre à niveau la mise en œuvre de Pool. Une revendication d'immutabilité significative dépend donc de la gouvernance du propriétaire de la piscine, de l'administrateur par procuration et de toute dépendance configurée.

### Swap settlement

Pour un échange, `SwapPool`:

1. Vérifie que les jetons d'entrée et de sortie dépassent le registre facultatif et teste l'entrée demandée par rapport à la limite facultative de solde de pool.
2. Retire le jeton d'entrée de l'appelant et mesure le montant réellement reçu. Le prix utilise ce montant mesuré, y compris pour les jetons de frais de transfert.
3. Obtient une cotation brute du cotateur configuré, ou utilise le montant brut reçu lorsqu'aucun cotateur n'est établi.
4. Calcule les frais de pool et les frais de protocole supplémentaires, puis vérifie la liquidité disponible des jetons de sortie.
5. Envoie la redevance du protocole directement au destinataire du protocole configuré, transfère la sortie nette nominale au destinataire et enregistre la redevance du groupe lorsqu'une adresse de redevance est configurée.
6. Émet l'événement `Swap` et l'événement `SwapSettlement` plus détaillé.

`SwapSettlement` enregistre l'initiateur, les deux jetons, l'entrée mesurée, la sortie brute cotée, la sortie nominale envoyée, la sortie réellement observée au destinataire, la redevance de pool et la redevance de protocole. Les sorties nominales et observées peuvent différer lorsque le jeton de sortie lui-même facture une redevance de transfert. Le champ `fee` dans l'événement `Swap` hérité est uniquement la redevance de pool.

La surcharge de six arguments `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` est la voie d'exécution délimitée. Il revient après la date limite ou lorsque l'augmentation observée du solde du bénéficiaire est inférieure à `minAmountOut`. Les intégrateurs devraient le préférer parce qu'un devis affiché est temporaire: l'état du devis, la politique des frais, la liquidité, les limites et les données oracle peuvent changer avant l'exécution. Les anciennes surcharges de trois et de quatre arguments ne fournissent pas ces limites au niveau du Pool.

### Calcul des frais additifs

Les frais de base et de protocole sont tous deux déduits de la production brute cotée. Les frais de protocole ne sont pas déduits des frais de pool et le pool conserve la totalité des frais calculés.

Par exemple, pour une cotation brute de 100 unités:

- une redevance de 2% pour le pool s'accumule sur 2 unités pour le pool;
- un taux de protocole de 10% appliqué à cette redevance de pool envoie directement 0,2 unités supplémentaires au destinataire du protocole; et
- l'utilisateur reçoit 97,8 unités.

Le calcul du protocole utilise le plus élevé des frais de pool calculés et une base de frais supposée de 1%. Cela empêche une très petite taxe de pool de réduire le calcul du protocole à presque zéro. Les taux combinés invalides reviennent avec `FeeTooHigh`, et une cotation qui se réglerait à zéro revient avec `InsufficientOutput`.

### Les pouvoirs de propriétaire et de mise à niveau

Le propriétaire du contrat peut percevoir les frais de pool accumulés et peut appeler `withdrawLiquidity` pour transférer tout jeton Pool disponible à une adresse non zéro choisie. Lorsque les redevances sont découplées, les redevances accumulées sont réservées à partir de cette voie de retrait de liquidité; autrement, elles restent partie du solde du groupe. Les participants au pool ne devraient pas interpréter la liquidité déposée comme étant définitivement bloquée, sauf si des contrôles de gouvernance supplémentaires vérifiables établissent ce résultat.

Le scellage de configuration ne supprime pas ce pouvoir de retrait de liquidité. Il ne supprime pas non plus la puissance de mise à niveau de l'administrateur proxy ERC-1967 séparé.


## Modules d'évaluation

Les trois cotateurs mettent en œuvre les fonctions de cotation avant et arrière utilisées par `SwapPool` et `SwapRouter`:

- **`DecimalQuoter`**Normalisation décimale sans état sous une hypothèse de parité de valeur 1:1.
- **`RelativeQuoter`**Normalité décimale plus indices de prix relatifs gérés par le propriétaire. Un indice de jeton non défini par défaut à la parité.
- **`OracleQuoter`**Rate chaque jeton à travers un oracle configuré, avec une limite de stagnation globale ou par jeton et un multiplicateur de sortie optionnel de 0,9 à 1,0.

Un `OracleQuoter` n'est aussi fiable que sa sélection et son administration d'aliments. La dénomination et la direction des aliments pour animaux doivent être cohérentes, les décimales doivent être correctes, les mises à jour doivent être positives et fraîches, et la gouvernance peut remplacer les aliments pour animaux ou modifier les paramètres de fraîcheur. La manipulation de la source, les mises à jour retardées, les pannes de réseau, la configuration incorrecte des paires ou la perte de la clé propriétaire de l'oracle peuvent entraîner de mauvaises cotations ou faire revenir les swaps.

`OracleRelay` est un relais de dernière ronde optionnel à alimentation unique compatible avec l'interface oracle. Un écrivain désigné publie de nouveau les valeurs de source; il n'y a pas de preuve croisée et aucune histoire stockée. Le relais accepte les valeurs de l'écrivain avec seulement une vérification du timestamp futur. `OracleQuoter` rejette indépendamment les réponses non positives ou obsolètes, tandis que le propriétaire du relais peut faire tourner l'écrivain ou annuler la ronde courante. Les utilisateurs doivent donc évaluer l'alimentation source, le rédacteur du relais, le propriétaire du relais et le processus de surveillance.


## Politique des redevances et limites

`FeePolicy` stocke une redevance par défaut en pièces par million et la paire directionnelle optionnelle est annulée. Son propriétaire peut modifier ces taux à moins que la gouvernance en dehors du contrat ne restreigne ce pouvoir.

`Limiter` stocke un solde maximal pour un jeton à une adresse de pool particulière. Le propriétaire ou un écrivain autorisé peut modifier cette limite. Un limite zéro bloque les dépôts lorsque le limitateur est actif; un limitateur non réglé laisse les dépôts sans limite.

Ces limites décrivent l'exposition à des jetons configurés à un Pool. Ils ne classent pas, par eux-mêmes, un solde symbolique comme un prêt ou une dette légale, ne prouvent pas la capacité d'un émetteur ou ne garantissent pas l'exécution. Ces questions dépendent des conditions de l'émetteur, des règles du pool, de la transaction présentée à l'utilisateur et de la législation applicable.


## Contrôleur des frais de protocole

`ProtocolFeeController` est une composante optionnelle des frais de déploiement. Son propriétaire peut modifier le taux de protocole et le destinataire ou désactiver la taxe. Un seul contrôleur peut être partagé par plusieurs Pools, mais le protocole ne nécessite pas un contrôleur par réseau.

Lorsqu'il est actif et configuré, le destinataire est payé directement dans le jeton de sortie lors de chaque swap réussi. La manière dont ce bénéficiaire utilise les fonds—par exemple pour des opérations, une surveillance, un soutien à la liquidité ou un autre but publié—est une question de gouvernance et non une garantie du contrat.
