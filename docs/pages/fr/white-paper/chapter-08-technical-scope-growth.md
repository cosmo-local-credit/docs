## **8 - Je vous en prie. La portée technique et la croissance**

Ce chapitre décrit des travaux facultatifs ou proposés. Il ne s'agit pas d'une liste de caractéristiques garanties pour être présentes dans le CLC App actuel ou Protocol v1.1.0.

Les domaines de travail possibles comprennent:

- le routage d'exécution entre les pools compatibles, avec enregistrement, cotation, limite, frais et découverte d'inventaire;
- adaptateurs de dépôt de dépôt ou de dépôt de dépôt HTLC pour l'exécution interdomaine lorsque le règlement atomique n'est pas disponible;
- les interfaces et les outils de politique pour les petites piscines ou les piscines personnelles;
- les registres auditables pour les bons, les pools, les méthodes de taux de change, les limites, les contrôleurs et les frais;
- les connecteurs des fournisseurs de paiement spécifiques au déploiement, les flux de paiement et les contrôles d'éligibilité;
- connexions d'actifs fungibles à des lieux de liquidité externes pour le rééquilibrage et la liquidité des paiements; et
- la conversion du trésor couverte par la politique pour la couverture adoptée, les coûts d'exploitation ou les mandats de liquidité.

Les prix du marché extérieur ne détermineraient pas ce qu'un émetteur doit en vertu des conditions du bon. Un groupe pourrait utiliser une référence externe protégée pour un actif fungible, mais sa méthode de taux de change publiée, ses limites, ses frais et son inventaire régiront ses cotations.

### **8.1 Normes proposées en matière de services de route et de SDK**

**La découverte.**Un service de route proposé permettrait de consulter les registres identifiés pour l'admission d'actifs, les méthodes de taux de change, les limites, les frais, l'inventaire, les incidents et les informations du contrôleur. Les dossiers en cache inclueraient des limites de fraîcheur et des identifiants de source.

**Des profils réseau.**Un client peut prendre en charge plus d'un profil de base de registre ou de politique. Il indiquerait au participant le profil, les contreparties, les adaptateurs, les contraintes et les opérateurs de services responsables utilisés par un devis. Un itinéraire cross-profil devrait satisfaire à toutes les conditions applicables.

**Politique du parcours.**Un opérateur responsable pourrait exclure les dépendances ou les contreparties dangereuses et appliquer des plafonds au niveau de l'itinéraire, des exigences en matière de fraîcheur et des critères de santé. Ces signaux soutiendraient une décision; ils ne garantiraient ni l'accomplissement ni la protection contre les pertes.

**Frais et limites.**Un devis détaillerait les frais de pool, les frais de protocole en cours supplémentaires et les frais de routage ou de service proposés séparément. L'exécution rejetterait les offres expirées ou les limites violées.

**L'atomisation et la récupération.**L'exécution multiple serait atomique là où c'est possible. Lorsqu'il utilisait des HTLC ou des escrocs, le service divulguerait des délais, des itinéraires d'arrêt, des contrôleurs responsables, des procédures d'incident et des risques résiduels.

**Proposition de mise en réseau et de rééquilibrage des lots.**Un service d'opt-in pourrait recueillir des intentions de rééquilibrage et rechercher des cycles ou des chaînes compatibles. Il serait:

1. publier un reçu lisible par machine qui identifie les cycles, les actifs, les montants, les timestamps d'évaluation et les frais exécutés;
2. mettre en œuvre les plafonds et les politiques de contrepartie adoptés par période;
3. rejeter une activité qui enfreint l'autorisation, les limites ou l'inventaire disponible du groupe participant; et
4. préserver les entrées et les recettes déterministes pour l'examen et le traitement des litiges.

**Les exigences SDK.**Un SDK pour les itinéraires exécutés fournirait une cartographie déterministe des devis à la réception, des contrôles d'invariabilité par hop, des codes de défaillance compréhensibles et des journaux adaptés à l'audit. Le Protocol v1.1.0 `SwapRouter` actuel ne fournit que des devis; il n'exécute pas ces itinéraires proposés.

#### **8.1.1 Spécifications minimales de compatibilité avec la confédération**

Un écosystème Pool cherchant à parcourir des profils différents publierait des informations lisibles par machine pour:

1. **Les racines du registre:**les identifiants pour les actifs, les pools, les méthodes de taux de change, les limites et les politiques de redevances, ou une racine qui les résout déterministiquement.
2. **Résultats:**le profil, les actifs entrants et sortants, les montants, la source de devis et le timestamp, la capture instantanée, les frais, le résultat de l'inventaire et le résultat de l'exécution pour chaque saut.
3. **Signes opérationnels:**les informations limitées à la fraîcheur sur l'inventaire, l'utilisation limitée, les incidents et toute satisfaction ou protection financée prouvée séparément.
4. **Restrictions politiques:**les contreparties autorisées ou refusées, les classes d'actifs, les adaptateurs et toute exigence de garantie.
5. **Codes de défaillance:**explications déterministes du rejet, de l'expiration, de la limite, de l'inventaire, de la politique, de la dépendance ou des échecs d'incident.

Un profil pourrait ajouter une couverture, la conformité, l'arbitrage ou d'autres services sans en faire des exigences pour la compatibilité de base CPP. Chaque service facultatif identifierait sa partie responsable, son autorité, sa portée et ses termes.

### **8.2 Licence, vérification et sortie**

Les contrats Protocol v1.1.0 sont compatibles avec EVM-. Les contrats figurant dans le répertoire `src` du référentiel du protocole sont publiés sous AGPL-3.0, à l'exception des composants tiers non modifiés identifiés qui conservent leurs propres conditions. Les sources publiées, les ABI et les instructions de déploiement soutiennent l'examen indépendant, mais ne prouvent pas par elles-mêmes un audit, un déploiement sécurisé ou une conformité légale.

Chaque déploiement révélerait séparément sa version de code, la provenance de la construction, les adresses, les pouvoirs de contrôleur et de mise à niveau, l'état d'audit, les miroirs du registre et toute protection contre le verrouillage temporel ou la pause.

Un kit de fourchette proposé pourrait inclure:

1. les scripts de déploiement déterministes;
2. une capture instantanée du registre et des outils d'exportation;
3. un processus documenté pour rediriger les services de route, les KDD et les interfaces vers une nouvelle racine de registre;
4. une liste de contrôle de pool steward pour quitter en toute sécurité un registre partagé; et
5. une liste de contrôle de migration des bons en circulation, y compris les avis de l'émetteur, les délais de présentation et d'exécution, l'accès continu aux dossiers et les recours.

Les fourches compatibles peuvent améliorer la résilience lorsque des communautés, des coopératives, des agences publiques, des fédérations, des multinationales ou des opérateurs de services ont besoin d'une gouvernance différente. La continuité réelle dépend toujours de la propriété des contrats, des clés, des dépendances, des interfaces, des infrastructures, des obligations légales et des services de tiers.
