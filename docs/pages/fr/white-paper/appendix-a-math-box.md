## A. Modèle proposé de mesure et de frais

Cette annexe définit un cadre de mesure proposé. Protocol v1.1.0 n'enregistre pas l'exécution par l'émetteur, la décharge réelle ou tous les champs de données requis ci-dessous.

### Définitions des événements et des stocks

Pour la classe de bons *j*, la cohorte ou la période *t*, et une méthode d'évaluation divulguée *m*:

- `O_{j,t,m}`: valeur des engagements éligibles en cours à la limite de mesure.
- `X_{j,t,m}`: valeur des swaps effectués au cours de la période.
- `P_{j,t}`: unités présentées validement à l'émetteur pour le remboursement.
- `F_{j,t}`: unités présentées avec preuve séparée de conformité de l'émetteur.
- `G_{j,t}`: unités remplies avec un enregistrement de décharge empêchant la réutilisation.

`O` ne peut être déduit uniquement de l'offre de jetons. Une politique de mesure doit identifier l'émetteur responsable et exclure, le cas échéant, l'inventaire détenu par l'émetteur, les unités brûlées, les unités expirées, les unités déchargées, les soldes d'essai, les soldes inaccessibles et les jetons dont les conditions ne créent pas d'engagement de tiers en suspens.

Chaque mesure évaluée doit publier l'unité, la source, la méthode d'évaluation, l'horodatage et le traitement des taux de change divergents. Un transfert en chaîne peut prendre en charge `X` ou des preuves de présentation. il ne détermine pas par lui-même `F` ou `G`.

### Mesures d'exécution fondées sur la cohorte

Pour une cohorte de présentations de remboursement valables:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Utilisez la même cohorte fermée ou mature dans chaque numérateur et dénominateur. Rapport rejeté, retiré, expiré, contesté, partiellement rempli, corrigé et présentations encore ouvertes séparément.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

La latence d'exécution mesure le service de l'émetteur après la présentation. La durée de détention est une mesure distincte et ne doit pas être qualifiée de latence de remboursement.

### Mesures de vitesse distinctes

Une vitesse d'engagement-décharge proposée ne peut être calculée que lorsque `O` et la valeur accomplie utilisent la même méthode d'évaluation:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Une mesure de l'activité de swap de bassin est distincte:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Aucune des deux valeurs ne prouve l'impact social, la capacité d'émetteur, la rentabilité ou la convertibilité en espèces.

### Revenus de réseau proposés

Pour:

- `PF_t` être les frais bruts de bassin générés au cours de la période;
- `NR_t` est le prélèvement de réseau proposé réellement reçu en tant que part divulguée de ces frais de bassin;
- `RF_t` sont des frais d'acheminement ou de service proposés distincts réellement perçus ; et
- `χ_t` est la part mesurée des recettes reçues qui est éligible et convertible pour une utilisation déclarée libellée en espèces après les coûts et les contraintes politiques.

Du point de vue du budget du réseau proposé:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Ne pas ajouter `PF_t` à `NR_t`: le prélèvement est un transfert des frais bruts de bassin et serait autrement compté deux fois. L'actuel Protocol v1.1.0 supporte plutôt une redevance de protocole supplémentaire; ses recettes doivent être déclarées séparément de ce modèle proposé.
