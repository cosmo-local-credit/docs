# Contrats intelligents

Cette page décrit les principaux contrats de bassin et de bon d’échange dans le Protocol v1.1.0. Le comportement du contrat fournit des mécanismes de règlement; il ne remplace pas les informations sur l'émetteur, les règles du bassin ou d'autres conditions de transaction applicables à une utilisation particulière.

Utilisation [Concepts et vocabulaire](/fr/introduction/concepts) pour distinguer le Bassin d’engagements réglementé du `SwapPool`, et le règlement d'échange de la présentation, de l'exécution et de la décharge du remboursement.


## bon d’échange (`GiftableToken`)

`GiftableToken` est un jeton ERC20 doté de mécanismes qu’un émetteur peut utiliser pour un bon d’échange :

- **Montage autorisé**— Le propriétaire peut désigner des rédacteurs pouvant émettre des jetons avec `mintTo`.
- **Expiration facultative** — L'expiration de `0` signifie qu'il n'y a pas d'expiration au niveau du contrat. Dans le cas contraire, les transferts, la frappe et la combustion reviennent au moment ou après l'horodatage configuré. N'importe qui peut maintenir l'état du terminal `expired` en appelant directement `applyExpiry`.
- **Comptabilité de l'offre**— `totalMinted` et `totalBurned` révèlent une activité cumulée d'approvisionnement. La fonction `burn` exclusive du propriétaire brûle les jetons détenus par l'adresse du propriétaire.

Le contrat symbolique le fait **pas** identifier les biens ou services de l'émetteur, fixer une valeur de rachat, prouver la capacité ou promettre la conversion en espèces. Un `GiftableToken` ne devient un engagement remboursable que par les conditions et la conduite publiées séparément par l'émetteur. Les émetteurs restent responsables de la description exacte et du respect de ces conditions.


## Bassin d’engagements (`SwapPool`)

`SwapPool` est un coffre-fort et un moteur de règlement d'échanges. Bien qu'il expose les métadonnées ERC20 pour le nom, le symbole et les décimales du bassin, le contrat v1.1.0 ne coupe pas les jetons Bassin-share. La liquidité est fournie par le transfert de jetons dans le bassin, et le propriétaire du contrat peut retirer la liquidité disponible.

### Composition et dépendances facultatives

|Configuration|Lorsqu'il est désactivé|Emplacement d'adresse verrouillable|
| --- | --- | --- |
| `tokenRegistry` |Tout jeton peut passer le contrôle de curation du Bassin|Oui|
| `tokenLimiter` |Les dépôts n'ont pas de plafond de solde au niveau du contrat|Oui|
| `quoter` |Le montant brut des intrants est traité comme le montant brut de la production cotée|Oui|
| `feePolicy` |Les frais du Bassin sont nuls .|Oui|
| `feeAddress` |Les frais de bassin ne sont pas comptabilisés comme frais rétractables pour un bénéficiaire désigné.|Oui|
| `protocolFeeController` |Aucuns frais de protocole ne sont facturés|Non|

Les cinq bits d'étanchéité verrouillent en permanence les adresses `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry` et `tokenLimiter` actuelles contre leurs définisseurs correspondants. `protocolFeeController` et `feesDecoupled` sont des valeurs d'initialisation et ne font pas partie de ces cinq bits.

Le verrouillage d'une adresse ne permet pas de geler le contrat à cette adresse. Un registre scellé, un limiteur, un cotateur ou une politique de redevance et un contrôleur de protocole de redevance configuré peuvent toujours être modifiés si sa propre gouvernance le permet. L'administrateur du proxy ERC-1967 peut également mettre à niveau l'implémentation du bassin. Une revendication d'immutabilité significative dépend donc de la gouvernance du propriétaire du bassin, de l'administrateur proxy et de chaque dépendance configurée.

### Règlement sur le swap

Pour un swap, `SwapPool`:

1. Vérifie que les jetons d'entrée et de sortie passent le registre facultatif et teste l'entrée demandée par rapport à la limite facultative du solde du bassin.
2. Retire le jeton d'entrée de l'appelant et mesure le montant réellement reçu. Le prix utilise ce montant mesuré, y compris pour les jetons de frais de transfert.
3. Obtient un devis brut à partir du devis configuré ou utilise le montant brut reçu lorsqu'aucun devis n'est défini.
4. Calcule les frais de bassin et les frais de protocole supplémentaires, puis vérifie la liquidité des jetons de sortie disponibles.
5. Envoie la redevance de protocole directement au destinataire du protocole configuré, transfère la sortie nette nominale au destinataire et enregistre la redevance de bassin lorsqu'une adresse de redevance est configurée.
6. Émet l'événement `Swap` hérité et l'événement `SwapSettlement` plus détaillé.

`SwapSettlement` enregistre l'initiateur, les deux jetons, l'entrée mesurée, la sortie brute cotée, la sortie nominale envoyée, la sortie réellement observée chez le destinataire, les frais de bassin et les frais de protocole. Les sorties nominales et observées peuvent différer lorsque le jeton de sortie lui-même facture une redevance de transfert. Le champ `fee` dans l'événement hérité `Swap` représente uniquement les frais de bassin.

La surcharge de six arguments `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` est le chemin d'exécution délimité. Il revient après la date limite ou lorsque l'augmentation observée du solde du bénéficiaire est inférieure à `minAmountOut`. Les intégrateurs devraient le préférer car une cotation affichée est temporaire: l'état de la cotation, la politique des frais, la liquidité, les limites et les données de l'oracle peuvent changer avant l'exécution. Les anciennes surcharges à trois et quatre arguments ne prévoient pas ces limites au niveau du bassin.

### Calcul de la redevance additive

Les frais de bassin et de protocole sont tous deux déduits de la production brute cotée. Les frais de protocole sont:**non déduit de la redevance de bassin**, et le bassin conserve l'intégralité de sa redevance calculée.

Par exemple, sur une cotation brute de 100 unités:

- une redevance de 2% accrue de 2 unités au fonds commun;
- un taux de protocole de 10% appliqué à cette redevance de bassin envoie une autre unité 0.2 directement au destinataire du protocole ; et
- l'utilisateur reçoit des unités 97.8.

Le calcul du protocole utilise le plus élevé des frais de bassin calculés et une base de frais supposée de 1%. Cela empêche un très petit frais de bassin de réduire le calcul du protocole à près de zéro. Les taux combinés invalides sont inversés avec `FeeTooHigh`, et une cotation qui s'arrêterait à zéro est inversée avec `InsufficientOutput`.

### Pouvoirs de propriétaire et de mise à niveau

Le propriétaire du contrat peut percevoir les frais de bassin accumulés et peut appeler `withdrawLiquidity` pour transférer tout jeton de bassin disponible à une adresse non nulle choisie. Lorsque les redevances sont découplées, les redevances acquises sont réservées à cette voie de retrait de liquidités; dans le cas contraire, elles restent dans le solde du bassin. Les participants au bassin ne devraient pas interpréter la liquidité déposée comme étant définitivement verrouillée, à moins que des contrôles de gouvernance complémentaires et vérifiables n'en établissent ce résultat.

L'étanchéité par configuration n'élimine pas ce pouvoir de retrait de liquidités. Il ne supprime pas non plus le pouvoir de mise à niveau de l'administrateur proxy ERC-1967 séparé.


## Modules d'évaluation

Les trois modules de cotation mettent en œuvre les fonctions de cotation directe et inverse utilisées par `SwapPool` et `SwapRouter` :

- **`DecimalQuoter`**— Normalisation décimale sans état dans le cadre d'une hypothèse de parité de valeur à 1:1.
- **`RelativeQuoter`**— normalisation décimale plus indices de prix relatifs gérés par les propriétaires. Un indice de jeton non défini est par défaut à la parité.
- **`OracleQuoter`** — Évalue chaque jeton au moyen d’un oracle configuré, avec une limite globale ou propre à chaque jeton pour l’ancienneté des données et un multiplicateur de sortie facultatif compris entre 0,9 et 1,0.

Un `OracleQuoter` n'est aussi fiable que sa sélection et son administration. La dénomination et la direction des flux doivent être cohérentes, les décimales doivent être correctes, les mises à jour doivent être positives et fraîches, et la gouvernance peut remplacer les flux ou modifier les paramètres de fraîcheur. La manipulation de la source, les mises à jour retardées, les pannes de réseau, la configuration incorrecte des paires ou la perte de la clé du propriétaire de l'oracle peuvent causer de mauvaises cotations ou faire revenir les échanges.

`OracleRelay` est un relais optionnel à alimentation unique, compatible avec l'interface oracle. Un auteur désigné réédite les valeurs sources; Il n'y a pas de preuves croisées ni d'historique circulaire. Le relais accepte les valeurs de l'écrivain avec seulement un timestamp futur. `OracleQuoter` rejette indépendamment les réponses non positives ou obsolètes, tandis que le propriétaire du relais peut faire pivoter l'écrivain ou invalider le tour en cours. Les utilisateurs doivent donc évaluer l'alimentation source, l'écrivain du relais, le propriétaire du relais et le processus de surveillance.


## Politique et limites des redevances

`FeePolicy` stocke une redevance par défaut en parties par million et les paires directionnelles optionnelles sont écartées. Son propriétaire peut modifier ces taux à moins que la gouvernance en dehors du contrat ne limite ce pouvoir.

`Limiter` stocke un solde maximum pour un jeton à une adresse de bassin particulière. Le propriétaire ou un rédacteur autorisé peut modifier cette limite. Une limite zéro bloque les dépôts lorsque le limiteur est actif; un limiteur non réglé laisse les dépôts sans plafond.

Ces limites décrivent **exposition au jeton** dans un Bassin. Ils ne classent pas, par eux-mêmes, un solde symbolique comme un prêt ou une dette légale, ne prouvent pas la capacité d'un émetteur ou ne garantissent pas l'exécution. Ces questions dépendent des conditions de l'émetteur, des règles du bassin, de la transaction présentée à l'utilisateur et de la législation applicable.


## Contrôleur des frais de protocole

`ProtocolFeeController` est une composante facultative de frais au niveau du déploiement. Son propriétaire peut modifier le tarif et le bénéficiaire du protocole ou désactiver la redevance. Un seul contrôleur peut être partagé par plusieurs bassins, mais le protocole n'exige pas un contrôleur par réseau.

Lorsqu'il est actif et configuré, le bénéficiaire est payé directement dans le jeton de sortie lors de chaque échange réussi. La manière dont ce bénéficiaire utilise les fonds (par exemple pour les opérations, le suivi, le soutien à la liquidité ou à d'autres fins publiées) est une question de gouvernance, et non une garantie fournie par le contrat.
