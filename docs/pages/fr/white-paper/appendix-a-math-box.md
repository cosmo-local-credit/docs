## C'est le cas de A. Modèle de mesure et de redevance proposé

Cette annexe définit un cadre de mesure proposé. Protocol v1.1.0 n'enregistre pas l'exécution de l'émetteur, la décharge dans le monde réel ou tous les champs de données requis ci-dessous.

### Définitions de l'événement et du stock

Pour la classe de bon *j*, la cohorte ou la période *t*, et une méthode d'évaluation divulguée *m*:

- `O_{j,t,m}`: valeur des engagements éligibles en suspens à la limite de mesure.
- `X_{j,t,m}`: la valeur des swaps de pool réalisés au cours de la période.
- `P_{j,t}`: unités validement présentées à l'émetteur en vue de leur rachat.
- `F_{j,t}`: unités présentées avec une satisfaction de l'émetteur démontrée séparément.
- `G_{j,t}`: unités remplies avec un enregistrement de décharge empêchant une réutilisation.

`O` ne peut être déduit uniquement de l'offre de jetons. Une politique de mesure doit identifier l'émetteur responsable et exclure, le cas échéant, l'inventaire détenu par l'émetteur, les unités brûlées, les unités expirées, les unités déchargées, les soldes d'essai, les soldes inaccessibles et les jetons dont les conditions ne créent pas un engagement de tiers en suspens.

Chaque mesure évaluée doit publier l'unité, la source, la méthode d'évaluation, le timestamp et le traitement des taux de change divergents du Pool. Un transfert en chaîne peut soutenir `X` ou des preuves de présentation; il n'établit pas par lui-même `F` ou `G`.

### Mesures d'exécution basées sur des cohorts

Pour une cohorte de présentations de rachat valides:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Utilisez la même cohorte fermée ou mature dans chaque numérateur et dénominateur. Rapport rejeté, retiré, expiré, contesté, partiellement accompli, corrigé et présentations encore ouvertes séparément.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

La latence d'exécution mesure le service de l'émetteur après présentation. La durée de conservation est une mesure distincte et ne doit pas être étiquetée comme la latence de rachat.

### Mesures de vitesse distinctes

Une vitesse de décharge d'engagement proposée ne peut être calculée que lorsque `O` et la valeur accomplie utilisent la même méthode d'évaluation:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Une mesure d'activité de swap pool est distincte:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Aucune de ces valeurs ne prouve l'impact social, la capacité de l'émetteur, la rentabilité ou la convertibilité en espèces.

### Résultats du réseau proposés

Laissez:

- `PF_t` sont les frais de pool générés au cours de la période;
- `NR_t` est le rake réseau proposé réellement reçu en tant que part divulguée de ces frais de pool;
- `RF_t` sont des frais de routage ou de service proposés séparément et effectivement reçus; et
- `χ_t` est la part mesurée des recettes reçues qui est admissible et convertible pour une utilisation déclarée en espèces après les coûts et les contraintes de politique.

Du point de vue du budget de réseau proposé:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

N'ajoutez pas `PF_t` à `NR_t`: le rake est un transfert des honoraires bruts du pool et serait autrement compté deux fois. Le Protocol v1.1.0 actuel supporte plutôt une redevance de protocole supplémentaire; ses reçus doivent être déclarés séparément de ce modèle de rake proposé.
