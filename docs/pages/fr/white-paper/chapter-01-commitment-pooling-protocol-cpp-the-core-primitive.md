## **1°. Protocole de regroupement des engagements (CPP): le noyau primitif**

**Modèle mental:**Un groupe d'engagements est un arrangement réglementé pour l'admission de bons ou d'autres actifs, la publication de règles de change, la tenue d'inventaires et la mise en place de swaps. Les titulaires présentent plus tard des bons à leurs émetteurs pour leur réalisation dans le monde réel. L'échange de fonds et l'exécution par l'émetteur sont des cycles de vie distincts.

CPP coordonne la valeur à travers des engagements clairement décrits. Le modèle est discuté dans [Economie de base: réflexion et pratique](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 Qu'est-ce qu'un engagement?**

Un engagement est la promesse d'une partie identifiée d'une livraison future, par exemple de nourriture, de transport, de main-d'œuvre, de stockage ou d'un autre bien, service, avantage ou performance légaux. Un **voucher** est un symbole ou un enregistrement représenté comme cet engagement en termes publiés.

Le contrat de jeton enregistre la mécanique numérique. Les termes du bon identifient l'émetteur, l'offre, la capacité, le lieu, le moment, les restrictions, la présentation, l'exécution, les plaintes et le processus de décharge.

### **1.2 Qu'est- ce qu'un groupe d'engagement?**

Un ensemble d'engagements est l'arrangement réglementé. Elle peut être gérée par un individu, une coopérative, un groupe communautaire, une agence publique, une fédération, une multisig, un opérateur de services ou une autre structure responsable.

Les rôles et les autorités pertinents comprennent:

- **Éleveur de piscine:**publie et administre les règles du pool ainsi que toute garantie expressément assumée;
- **Propriétaire de piscine:**détient les pouvoirs de propriétaire `SwapPool` actuels;
- **administrateur proxy:**peut mettre à niveau une mise en œuvre proxy;
- **contrôleur de dépendance:**régir les registres, les cotations, les limitateurs ou les composantes des frais configurés;
- **détecteur ou opérateur de route:**peut découvrir des devis ou, dans une mise en œuvre future, effectuer une route autorisée séparément; et
- **garantie:**n'assume une obligation définie qu'à travers des conditions publiées et financées.

Groups CPP Les fonctions du Pool sont divisées en quatre concepts:

- **La conservation:**admettre des jetons ou des bons soutenus.
- **Évaluation:**publier la méthode utilisée pour un taux de change ou une cotation.
- **Limitation:**appliquer les plafonds de solde des jetons du groupe ou d'autres contrôles mis en œuvre séparément.
- **Échange:**détenir un inventaire, exécuter des swaps, comptabiliser les frais et émettre des dossiers de transaction.

Protocol v1.1.0 met en œuvre ces fonctions par l'intermédiaire de `SwapPool` et des dépendances facultatives. Son `Limiter` actuel couvre un solde de jetons à un Pool; il ne prévoit pas de limites de rotation, par compte ou de swap à l'échelle du réseau. Son `SwapRouter` actuel calcule les cotations multi-pools; il n'exécute pas de swaps.

La conception plus large proposée de CPP peut ajouter des limites de roulement, des contrôles de compte, des routeurs d'exécution, des itinéraires HTLC ou de dépôt de garanties et des réseaux de lots. Il s'agit de composants proposés, pas de descriptions du limitateur ou du routeur courant.

### **1.3 Logique des échanges directs courants**

Un échange direct courant de pool:

1. vérifie le registre facultatif des jetons d'entrée et de sortie;
2. mesure les entrées reçues;
3. obtient un devis auprès du cotateur configuré ou applique une parité unitaire brute;
4. vérifie le solde des jetons Pool résultant par rapport au limitateur facultatif;
5. calcule la redevance du groupe et toute redevance de protocole supplémentaire;
6. vérifie l'inventaire des sorties disponibles;
7. transfère les frais de protocole et de sortie ainsi que les comptes pour les frais de pool; et
8. émet des événements d'échange.

La cotation est un paramètre de transaction et non une preuve de capacité de l'émetteur, de valeur de rachat, de juste valeur, de convertibilité en espèces ou de garantie.

### **1.4 Utilisation plus large**

Les Pools d'engagement peuvent soutenir les échanges communautaires, la production, l'entraide, les programmes publics et d'autres structures responsables. Un produit de crédit documenté séparément pourrait utiliser un bon comme garantie ou instrument de remboursement, mais il nécessiterait des conditions supplémentaires et spécifiques à la transaction. Un envoi ordinaire, un dépôt de pool, un swap de pool, une présentation de rachat, une réalisation ou une décharge ne constituent pas automatiquement un prêt ou un remboursement.

CPP est destiné à des registres d'échanges et d'opérations auditables responsables, et non à des opérations spéculatives. Les enregistrements en chaîne ne prouvent toujours pas l'accomplissement du monde réel ou l'impact social.
