# Mécanismes de gouvernance

La gouvernance dans Cosmo-Local Credit (CLC) est divisée entre des rôles distincts plutôt que d'être attribuée à une seule autorité universelle. Cette page décrit les options de gouvernance pour les réseaux compatibles CLC-; Il ne prévoit pas une forme juridique unique, un système de vote ou une organisation.

Grassroots Economics Foundation (GEF) exploite l'application Web progressive publique à `cosmolocal.credit` et ses services de soutien. Dans ce rôle, GEF peut maintenir des interfaces et des catalogues, appliquer des normes minimales d'inscription ou de sécurité, modérer le contenu, restreindre les fonctionnalités de l'application et coordonner les opérations techniques. À moins qu'il n'accepte expressément un autre rôle pour un arrangement particulier, GEF n'est pas l'émetteur d'un bon d’échange créé par l'utilisateur, l'administrateur d'un bassin créé par l'utilisateur, un garant, un assureur, un dépositaire, un prêteur, un emprunteur, un racheteur ou une partie à une transaction utilisateur-utilisateur.

Le [Conditions d'utilisation](/fr/governance/terms) régir l'utilisation de l'application publique et expliquer ces responsabilités en détail.

[Concepts et vocabulaire](/fr/introduction/concepts) désigne ces rôles publics comme la propriété du contrat, l'administration par procuration, le contrôle de la dépendance, la modération du catalogue et la réception des honoraires.

## Responsabilité par rôle

- **Émetteurs de bons** gouvernent leurs propres offrandes. Ils publient des informations précises sur l'identité, la capacité, la fourniture, la valorisation, l'expiration, la présentation, l'exécution, la géographie, le calendrier, les frais, les restrictions et les mesures correctives, et restent responsables de respecter ces engagements.
- **Gestionnaires de Bassins** régir l'admission, la conservation des actifs, l'évaluation, les frais, les limites, l'inventaire, les réserves, les contributions, les conflits, la provenance, la configuration, les pauses, les mises à niveau et tout mécanisme de garantie ou d'allocation des pertes pour leurs bassins.
- **Administrateurs des registres et des services** peuvent régir les bassins ou les actifs figurant dans un registre et les règles et les frais pour l'acheminement, la surveillance, le soutien à la liquidité ou d'autres services partagés.
- **Utilisateurs** décider si un émetteur, un bon d’échange, un bassin, un devis et une transaction sont acceptables et légaux pour eux. Une inscription dans le registre ou une liste d'applications n'est pas une garantie ou une approbation.

Une personne ou une organisation peut occuper plus d'un rôle, mais elle doit divulguer chaque rôle et les conflits et obligations qui en découlent.

## Structures de gouvernance responsables

Un bassin, un registre ou un service CLC-compatible peut être géré par une fondation à but non lucratif, une coopérative, un groupe communautaire, une fédération, une entreprise, un multisig, une agence publique, un conseil institutionnel, un système de vote en chaîne ou une autre structure responsable. Quelle que soit la structure choisie, les participants devraient pouvoir déterminer:

- qui a le pouvoir de prendre et d'exécuter des décisions;
- la manière dont les actifs, les émetteurs et les participants sont admis, réexaminés, suspendus ou retirés;
- les modalités d'établissement et de modification des évaluations, des frais, des limites, des réserves, des garanties et d'autres paramètres importants;
- les dépendances ou contrats pouvant être améliorés, remplacés, mis en pause ou scellés définitivement;
- la manière dont les conflits d'intérêts sont divulgués et traités;
- les enregistrements, les avis, les approbations et les périodes d'examen applicables;
- quels sont les pouvoirs d'urgence et comment leur utilisation est contrôlée ; et
- comment les participants peuvent se plaindre, se retirer, migrer ou s'attaquer à des obligations non résolues.

Les règles publiées devraient correspondre aux pouvoirs disponibles dans les contrats et services pertinents. La gouvernance devrait maintenir la transparence et la vérifiabilité des décisions importantes et ne devrait pas décrire la convertibilité, la liquidité, les rendements, les assurances, les réserves ou les garanties de manière plus large que ce que la partie responsable peut effectivement fournir.

## Options de gouvernance technique

Lorsque le vote symbolique est approprié, un déploiement peut utiliser [OpenZeppelin Gouverneur](https://docs.openzeppelin.com/contracts/4.x/api/governance) des contrats et une interface telle que Tally. D'autres déploiements peuvent s'appuyer sur des approbations multisig, des résolutions de coopération, des décisions du conseil d'administration, des mandats d'agences publiques ou des processus hybrides.

Ces outils sont facultatifs. La discussion sur le vote symbolique, l'assurance partagée, le routage à l'échelle du réseau, la compensation ou les programmes de liquidité ne signifie pas que chaque capacité est active dans l'application publique ou régie par GEF. Chaque déploiement doit identifier ses décideurs réels, ses contrats, ses fournisseurs de services et ses politiques.

## Action de l'interface et état en chaîne

Un opérateur d'application ou un administrateur du registre peut masquer, marquer, suspendre ou supprimer un élément d'une interface. Cette action n'interrompt pas nécessairement un contrat intelligent, n'annule pas une transaction terminée, ne supprime pas un enregistrement public de la chaîne de blocs, n'élimine pas un solde ou n'exécute pas une obligation entre utilisateurs. Les plans de gouvernance devraient distinguer les contrôles d'interface des autorités qui existent dans la chaîne et des obligations légales qui persistent en dehors de la chaîne.

Pour une conception plus large, voir le livre blanc de [Chapitre mécanique de la gouvernance](/fr/white-paper/chapter-11-governance-mechanics).
