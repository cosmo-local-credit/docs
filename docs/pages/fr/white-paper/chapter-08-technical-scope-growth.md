## **8. Portée technique et croissance**

Ce chapitre décrit les travaux facultatifs ou proposés. Il ne s'agit pas d'une liste de caractéristiques dont la présence est garantie dans l'actuel CLC App ou Protocol v1.1.0.

Les domaines de travail possibles sont les suivants:

- l'acheminement de l'exécution à travers des bassins compatibles, avec enregistrement, devis, limite, frais et découverte d'inventaire;
- les adaptateurs de dépôt à durée déterminée ou HTLC pour l'exécution interdomaine lorsque le règlement atomique n'est pas disponible;
- des interfaces et des outils stratégiques pour les petits groupes ou les groupes personnels;
- des registres vérifiables pour les bons d’échange, les bassins, les méthodes de change, les limites, les contrôleurs et les redevances;
- les connecteurs de prestataires de paiement spécifiques au déploiement, les flux de paiement et les contrôles d'éligibilité;
- des connexions d'actifs fungibles à des plates-formes de liquidité externes pour le rééquilibrage et la liquidité de paiement ; et
- conversion de trésorerie plafonnée par la politique pour la couverture adoptée, les coûts d'exploitation ou les mandats de liquidité.

Les prix du marché extérieur ne détermineraient pas ce qu'un émetteur doit en termes de bons. Un bassin pourrait utiliser une référence externe protégée pour un actif fongible, mais sa méthode de taux de change publiée, ses limites, ses frais et son inventaire régiraient ses cotations.

### **8.1 Normes proposées pour le service sur route et SDK**

**Découverte.** Un service d'itinéraire proposé interrogerait des registres identifiés pour l'admission d'actifs, les méthodes de taux de change, les limites, les frais, l'inventaire, les incidents et les informations sur le contrôleur. Les enregistrements en cache incluent les limites de fraîcheur et les identifiants de source.

**Les profils des réseaux.** Un client peut prendre en charge plus d'une racine de registre ou un profil de politique. Il indiquerait au participant le profil, les contreparties, les adaptateurs, les contraintes et les opérateurs de services responsables utilisés par un devis. Une route à profil croisé devrait satisfaire à toutes les conditions de étape applicables.

**Politique du parcours.** Un exploitant responsable pourrait exclure les dépendances ou les contreparties dangereuses et appliquer des plafonds au niveau de la route, des exigences de fraîcheur et des critères sanitaires. Ces signaux soutiendraient une décision; ils ne garantiraient pas l'exécution ou la protection contre la perte.

**Frais et limites.** Un devis détaillerait les frais de bassin, les frais de protocole actuels supplémentaires et les frais de routage ou de service proposés séparément. L'exécution rejetterait les offres expirées ou les limites dépassées.

**Atomicité et récupération.** L'exécution multi-hop serait atomique si possible. Lorsqu'il utilisait des HTLC ou des dépôts, le service divulguait les délais, les voies d'interruption, les contrôleurs responsables, les procédures d'incident et les risques résiduels.

**Proposition de mise en réseau et de rééquilibrage des lots.** Un service opt-in pourrait recueillir des intentions de rééquilibrage et rechercher des cycles ou des chaînes compatibles. Ce serait:

1. publier un reçu lisible par machine indiquant les cycles exécutés, les actifs, les montants, les dates d'évaluation et les honoraires;
2. appliquer les plafonds par période et les politiques de contrepartie adoptés;
3. rejeter toute activité qui enfreint l'autorisation, les limites ou l'inventaire disponible de tout groupe participant ; et
4. conserver les entrées et les reçus déterministes pour l'examen et le traitement des litiges.

**Exigences du SDK.** Un SDK pour les itinéraires exécutés fournirait une cartographie déterministe du devis à la réception, des vérifications invariantes par étape, des codes de défaillance compréhensibles et des journaux faciles à vérifier. L'actuel Protocol v1.1.0 `SwapRouter` fournit uniquement des cotations; Il n'exécute pas ces lignes proposées.

#### **8.1.1 Spécification minimale de compatibilité de la confédération**

Un écosystème de bassin cherchant un routage interprofil publierait des informations lisibles par machine pour:

1. **Les racines du registre:** identifiants pour les actifs, les bassins, les méthodes de taux de change, les limites et les politiques de redevance, ou une racine qui les résout de manière déterministe.
2. **Les reçus:** le profil, les actifs entrants et sortants, les montants, la source de cotation et l'horodatage, l'instantané des limites, les frais, le résultat de l'inventaire et le résultat de l'exécution pour chaque étape.
3. **Signaux opérationnels:** les informations relatives à la fraîcheur concernant l'inventaire, les limites d'utilisation, les incidents et toute réalisation attestée séparément ou toute protection financée.
4. **Des contraintes politiques:** les contreparties autorisées ou refusées, les catégories d'actifs, les adaptateurs et toute exigence d'acompte.
5. **Codes de défaillance:** explications déterministes pour le rejet, l'expiration, la limite, l'inventaire, la politique, la dépendance ou les défaillances occasionnelles.

Un profil pourrait ajouter des services de couverture, de conformité, d'arbitrage ou d'autres services sans en faire des exigences de compatibilité CPP de base. Chaque service facultatif devrait identifier sa partie responsable, son autorité, sa portée et ses modalités.

### **8.2 Autorisation, vérification et sortie**

Les contrats Protocol v1.1.0 sont compatibles avec EVM-. Les contrats dans le répertoire `src` du référentiel de protocoles sont publiés sous AGPL-3.0, à l'exception des composants tiers non modifiés identifiés qui conservent leurs propres termes. Les sources publiées, les ABI et les instructions de déploiement appuient l'examen indépendant, mais ne prouvent pas à elles seules un audit, un déploiement sûr ou une conformité légale.

Chaque déploiement révélerait séparément sa version de code, la provenance de la construction, les adresses, les pouvoirs du contrôleur et de la mise à niveau, l'état de l'audit, les miroirs du registre et toute protection contre le verrouillage temporel ou la pause.

Une proposition **Kit de fourchette** pourraient inclure:

1. les scripts de déploiement déterministiques;
2. les outils de capture instantanée et d'exportation du registre;
3. un processus documenté permettant de repenser les services de routage, les SDK et les interfaces vers une nouvelle racine de registre;
4. une liste de contrôle Gestionnaire de Bassin pour quitter en toute sécurité un registre partagé ; et
5. une liste de contrôle de migration pour les bons d’échange en cours, y compris les avis de l'émetteur, les délais de présentation et d'exécution, l'accès continu aux dossiers et les recours.

Les fourches compatibles peuvent améliorer la résilience lorsque les communautés, les coopératives, les agences publiques, les fédérations, les multinationales ou les opérateurs de services ont besoin d'une gouvernance différente. La continuité réelle dépend toujours de la propriété du contrat, des clés, des dépendances, des interfaces, de l'infrastructure, des obligations légales et des services de tiers.
