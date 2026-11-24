# Contrats intelligents

Les contrats enregistrent les soldes de jetons et exécutent les échanges des Bassins. La [documentation des logiciels CLC](https://software.cosmolocal.credit/contracts/) est la référence technique, actuellement en anglais. Cette page présente ce que les participants doivent comprendre avant d’utiliser ces contrats.

Consultez [Concepts et vocabulaire](/fr/introduction/concepts) pour distinguer un Bassin d’engagements gouverné de son contrat `SwapPool`, ainsi que l’échange de l’exécution des engagements par l’Émetteur.

## bon d’échange (`GiftableToken`)

Un Bon d’échange associe un solde numérique à la promesse publiée d’un Émetteur. Ses conditions précisent ce qu’il permet d’obtenir, où et quand il est accepté et qui en est responsable. La création d’un jeton ne prouve pas que l’Émetteur peut fournir les biens ou services promis.

Pour les mécanismes de création, d’émission, de destruction et d’expiration, consultez [Bons d’échange](https://software.cosmolocal.credit/contracts/vouchers).

## Bassin d’engagements (`SwapPool`)

Un Bassin d’engagements rassemble des Bons sélectionnés selon des règles publiées. Son contrat détient l’inventaire et échange les actifs pris en charge. Un dépôt ne donne pas automatiquement au déposant des parts du Bassin ni des droits de remboursement, de retrait, de récompense ou de gouvernance. De tels droits exigent des conditions distinctes et communiquées aux participants.

### Composition et dépendances facultatives

Vérifiez quels Bons le Bassin accepte, comment il établit ses taux de change, ses limites et ses frais, et qui peut les modifier. La référence technique décrit la [configuration et le verrouillage des paramètres d’un Bassin](https://software.cosmolocal.credit/contracts/pools).

### Règlement sur le swap

Un échange réussi modifie les soldes concernés. Il ne prouve pas qu’un Émetteur a livré les biens ou services. Avant de confirmer, vérifiez ce que vous donnez et recevez, le destinataire, le minimum reçu et l’expiration de la cotation.

Pour les méthodes d’exécution et les enregistrements du règlement, consultez [Cotation et règlement des échanges](https://software.cosmolocal.credit/contracts/swaps).

### Calcul de la redevance additive

Un échange peut comporter des frais de Bassin et des frais de protocole supplémentaires. Vérifiez le total affiché dans la cotation ; un itinéraire passant par plusieurs Bassins peut entraîner des frais à chaque étape. La [référence sur les échanges](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) présente le calcul et un exemple chiffré.

### Pouvoirs de propriétaire et de mise à niveau

Le propriétaire du Bassin peut retirer l’inventaire disponible. D’autres autorités peuvent contrôler les mises à niveau ou les paramètres. Examinez ces pouvoirs et les règles publiées du Gestionnaire avant de déposer des actifs ou de vous appuyer sur un Bassin. Le seul verrouillage des paramètres ne prouve pas que l’inventaire est immobilisé de façon permanente.

Consultez [Bassins](https://software.cosmolocal.credit/contracts/pools) et [Vérifier une instance](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) pour les contrôles techniques.

## Modules d'évaluation

Le taux de change d’un Bassin est distinct de la valeur déclarée d’un Bon et des conditions d’utilisation fixées par l’Émetteur. Examinez la méthode choisie par le Bassin et identifiez qui peut modifier ses données. La référence technique explique les [modules de cotation (Quoter)](https://software.cosmolocal.credit/contracts/quoters) disponibles.

## Politique et limites des redevances

La **« Limite de crédit »** de l’Application est le solde maximal d’un Bon donné que le Bassin peut détenir. Elle décrit une capacité d’échange, plutôt qu’un emprunt personnel ou une garantie d’exécution. Consultez les [règles et la configuration du Bassin](https://software.cosmolocal.credit/contracts/pools) pour comprendre l’application des limites et des frais.

## Contrôleur des frais de protocole

Les frais de protocole ont un destinataire configuré. Les recevoir ne fait pas automatiquement de ce destinataire le Gestionnaire du Bassin ni un garant. Consultez la [référence sur les frais](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) pour les mécanismes actuels, et les [mécanismes de gouvernance](/fr/governance/mechanics) pour les responsabilités et les informations à publier.
