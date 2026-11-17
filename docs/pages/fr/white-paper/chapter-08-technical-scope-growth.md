## **8. Portée technique et croissance**

Ce chapitre distingue le service de routage actuellement en production des évolutions facultatives ou proposées. Toute capacité actuelle décrite ici est propre au déploiement public de la CLC App et de CLC Core ; elle ne constitue pas automatiquement une fonctionnalité des contrats de Protocol v1.1.0 ni d'un autre déploiement.

Le déploiement public actuel comprend:

- la découverte, à partir d'un graphe, des bons accessibles au moyen de Bassins compatibles ;
- des cotations faisant autorité, établies à un bloc déterminé pour des itinéraires sélectionnés sur une même chaîne ;
- le calcul, à chaque étape, des frais du Bassin et du protocole, des sorties minimales et des échéances ;
- la simulation du lot complet, la signature par le participant et l'exécution Calibur relayée ;
- une seule transaction sur la même chaîne, qui annule tous les appels de l'itinéraire si l'un d'eux échoue ; et
- des reçus regroupés et le rapprochement des événements de règlement de chaque étape.

Les domaines de croissance possibles sont les suivants:

- les adaptateurs de dépôt à durée déterminée ou HTLC pour l'exécution interdomaine lorsque le règlement atomique n'est pas disponible;
- des profils de registre ou de politique supplémentaires et un routage entre les profils;
- le rééquilibrage des stocks du Bassin et la compensation par lots;
- des interfaces et des outils stratégiques pour les petits groupes ou les groupes personnels;
- des registres vérifiables pour les bons d’échange, les bassins, les méthodes de change, les limites, les contrôleurs et les redevances;
- les connecteurs de prestataires de paiement spécifiques au déploiement, les flux de paiement et les contrôles d'éligibilité;
- des connexions d'actifs fungibles à des plates-formes de liquidité externes pour le rééquilibrage et la liquidité de paiement ; et
- conversion de trésorerie plafonnée par la politique pour la couverture adoptée, les coûts d'exploitation ou les mandats de liquidité.

Les prix du marché extérieur ne détermineraient pas ce qu'un émetteur doit en termes de bons. Un bassin pourrait utiliser une référence externe protégée pour un actif fongible, mais sa méthode de taux de change publiée, ses limites, ses frais et son inventaire régiraient ses cotations.

### **8.1 Service de routage actuel et normes plus générales**

**Découverte.** CLC Core maintient un graphe rapproché à partir des catalogues configurés, des relations de registre, des paramètres des Bassins, des frais, des limites, des soldes et des événements sur la chaîne. Il estime ce qu'un portefeuille de session peut atteindre et signale les données obsolètes. La configuration publique recherche des itinéraires comportant jusqu'à trois étapes. La découverte ne constitue pas une promesse exécutable.

**Cotation faisant autorité.** Pour un itinéraire sélectionné, CLC Core lit les Bassins participants à un bloc déterminé et reproduit les calculs `SwapPool` pris en charge. Il détaille les frais du Bassin et du protocole, fixe une sortie minimale pour chaque étape ainsi qu'une échéance, prépare les appels du portefeuille et simule le lot complet. Les jetons, modules de cotation, portefeuilles ou conditions de Bassin non pris en charge sont refusés.

**Exécution actuelle.** Le participant signe un lot Calibur contenant, pour chaque étape, la remise à zéro de l'autorisation, l'octroi de l'autorisation et un retrait borné. Un relayeur soumet une seule transaction sur la même chaîne avec `revertOnFailure` activé. L'itinéraire actuel est ainsi exécuté intégralement ou annulé au niveau de la transaction. Il ne s'agit ni d'une atomicité interchaînes, ni d'un routage par HTLC ou entiercement, ni d'un rééquilibrage automatique, ni d'une compensation.

**Reçus et opérations.** L'application regroupe l'itinéraire sous un seul identifiant de suivi et enregistre l'état de la transaction, l'ordre des étapes, les Bassins, les paires de jetons, les montants cotés et réglés, les frais des Bassins, les frais du protocole et les reliquats intermédiaires. Le service surveille la fraîcheur du graphe, les résultats de l'énumération et de la cotation des itinéraires, les échecs de simulation, la durée et les corrections du rapprochement, ainsi que les membres indexés non résolus ou inconnus. La télémétrie opérationnelle ne prouve pas que l'émetteur a honoré son engagement.

**Profils de réseau.** Un client pourrait prendre en charge plusieurs racines de registre ou profils de politique. Il indiquerait au participant le profil, les contreparties, les adaptateurs, les contraintes et les opérateurs de services responsables utilisés par une cotation. Un itinéraire entre profils devrait respecter les conditions applicables à chaque étape.

Un exploitant responsable pourrait exclure les dépendances ou contreparties dangereuses et appliquer des plafonds au niveau de la route, des exigences en matière de fraîcheur et des critères sanitaires. Ces signaux appuieraient une décision; ils ne garantiraient pas l'accomplissement ou la protection contre les pertes.

**Frais et limites.** La cotation actuelle détaille, pour chaque étape, les frais du Bassin et les éventuels frais de protocole supplémentaires. L'application publique n'ajoute actuellement pas de frais distincts pour le service de routage. Tout futur frais de service serait indiqué séparément. L'exécution rejette les cotations expirées ou les bornes dépassées.

**Atomicité et récupération interdomaines.** Lorsqu'un futur itinéraire ne pourrait pas utiliser le lot atomique actuel sur une même chaîne et recourrait plutôt à des HTLC ou à un entiercement, le service indiquerait les délais, les voies d'abandon, les contrôleurs responsables, les procédures d'incident et les risques résiduels.

**Compensation par lots et rééquilibrage proposés.** Un service facultatif pourrait recueillir des intentions de rééquilibrage et rechercher des cycles ou des chaînes compatibles. Il devrait :

1. publier un reçu lisible par machine indiquant les cycles exécutés, les actifs, les montants, les horodatages de valorisation et les frais ;
2. appliquer les plafonds par période et les politiques de contrepartie adoptés ;
3. rejeter toute activité qui enfreint l'autorisation, les limites ou l'inventaire disponible de tout Bassin participant; et
4. conserver des données d'entrée et des reçus déterministes pour les examens et le règlement des différends.

**Exigences relatives au SDK et à l'interface.** Une intégration de routage réutilisable devrait fournir une correspondance déterministe entre la cotation et le reçu, des vérifications d'invariants à chaque étape, des codes d'échec compréhensibles et des journaux faciles à auditer. L'implémentation de production actuelle de l'application et de CLC Core fournit ces fonctions pour son propre profil. Le `SwapRouter` Solidity du protocole v1.1.0 calcule toujours uniquement des cotations et n'exécute pas l'itinéraire.

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
