# Mécanique de gouvernance

La gouvernance dans Cosmo-Local Credit (CLC) est divisée en rôles distincts plutôt qu'attribuée à une autorité universelle. Cette page décrit les options de gouvernance pour les réseaux CLC- compatibles; elle ne prévoit pas une seule forme juridique, système de vote ou organisation.

Grassroots Economics Foundation (GEF) exploite l'application Web progressiste publique à `cosmolocal.credit` et ses services de soutien. Dans ce rôle, GEF peut maintenir des interfaces et des catalogues, appliquer des normes minimales d'inscription ou de sécurité, modérer le contenu, restreindre les fonctionnalités de l'application et coordonner les opérations techniques. À moins qu'il n'accepte expressément un autre rôle pour un arrangement particulier, GEF n'est pas l'émetteur d'un bon créé par l'utilisateur, le gestionnaire d'un pool créé par l'utilisateur, un garant, un assureur, un gardien, un prêteur, un emprunteur, un racheteur ou une partie à une transaction utilisateur-utilisateur.

Les [termes de service](/fr/governance/terms) régissent l'utilisation de l'application publique et expliquent ces responsabilités en détail.

[Concepts et vocabulaire](/fr/introduction/concepts) trace ces rôles publics à la propriété des contrats, à l'administration par procuration, au contrôle de la dépendance, à la modération du catalogue et à la réception des frais.

## Responsabilité par rôle

- **Émetteurs de bons**gouverner leurs propres offrandes. Ils publient des informations précises sur l'identité, la capacité, l'offre, l'évaluation, l'expiration, la présentation, l'exécution, la géographie, le calendrier, les frais, les restrictions et les mesures correctives, et restent responsables de respecter ces engagements.
- **Gardiens de piscine**régir l'admission, la conservation des actifs, l'évaluation, les frais, les limites, l'inventaire, les réserves, les contributions, les conflits, la provenance, la configuration, les pauses, les mises à niveau et tout mécanisme de garantie ou d'allocation des pertes pour leurs Pools.
- **Directeurs du registre et du service**peut régir les pools ou les actifs figurant dans un registre et les règles et frais de routage, de surveillance, de soutien à la liquidité ou d'autres services partagés.
- **Utilisateurs**décider si un émetteur, un bon, un pool, un devis et une transaction sont acceptables et légitimes pour eux. Une inscription au registre ou une liste d'applications ne constitue ni une garantie ni une approbation.

Une personne ou une organisation peut avoir plus d'un rôle, mais elle doit révéler chaque rôle et les conflits et obligations qui en découlent.

## Structures de gouvernance responsables

Une piscine, un registre ou un service compatible CLC- peuvent être gérés par une fondation à but non lucratif, une coopérative, un groupe communautaire, une fédération, une entreprise, un multisig, une agence publique, un conseil institutionnel, un système de vote en chaîne ou une autre structure responsable. Quelle que soit la structure choisie, les participants devraient être en mesure de déterminer:

- qui a le pouvoir de prendre et d'exécuter des décisions;
- comment les actifs, les émetteurs et les participants sont admis, examinés, suspendus ou supprimés;
- la façon dont les évaluations, les honoraires, les limites, les réserves, les garanties et autres paramètres importants sont établis et modifiés;
- les dépendances ou contrats pouvant être améliorés, remplacés, suspendus ou définitivement scellés;
- la manière dont les conflits d'intérêts sont divulgués et traités;
- quels registres, avis, approbations et périodes de réexamen s'appliquent;
- quels sont les pouvoirs d'urgence et comment leur utilisation est révisée; et
- comment les participants peuvent se plaindre, quitter, migrer ou s'attaquer à des obligations non résolues.

Les règles publiées devraient correspondre aux compétences disponibles dans les contrats et services pertinents. La gouvernance devrait garder les décisions importantes transparentes et auditables et ne pas décrire la convertibilité, la liquidité, les rendements, les assurances, les réserves ou les garanties plus largement que la partie responsable ne peut réellement fournir.

## Options de gouvernance technique

Lorsque le vote par jeton est approprié, un déploiement peut utiliser les contrats [OpenZeppelin Governor](https://docs.openzeppelin.com/contracts/4.x/api/governance) et une interface telle que Tally. D'autres déploiements peuvent s'appuyer sur des approbations multisig, des résolutions de coopération, des décisions du conseil d'administration, des mandats d'agences publiques ou des processus hybrides.

Ces outils sont facultatifs. La discussion du vote par jeton, de l'assurance partagée, du routage à l'échelle du réseau, du netting ou des programmes de liquidité ne signifie pas que chaque fonctionnalité soit active dans l'application publique ou régie par GEF. Chaque déploiement doit identifier ses décideurs réels, ses contrats, ses fournisseurs de services et ses politiques.

## L'action de l'interface et l'état en chaîne

Un opérateur d'application ou un gestionnaire de registre peut cacher, flagger, suspendre ou supprimer un élément d'une interface. Cette action n'arrête pas nécessairement un contrat intelligent, n'annule pas une transaction accomplie, ne supprime pas un enregistrement public de la blockchain, n'élimine pas un solde ou ne remplit pas une obligation entre les utilisateurs. Les plans de gouvernance devraient faire la distinction entre les contrôles d'interface et les autorités qui existent sur la chaîne et les tâches légales qui se poursuivent en dehors de la chaîne.

Pour une conception plus générale, voir le livre blanc [chapitre mécanique de la gouvernance](/fr/white-paper/chapter-11-governance-mechanics).
