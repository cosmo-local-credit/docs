## **1. Protocole de mise en commun des engagements (CPP): le principe primitif**

**Le modèle mental:** Un Bassin d’engagements est un arrangement réglementé pour l'admission de bons d’échange ou d'autres actifs, la publication de règles d'échange, la tenue d'inventaire et la possibilité de swaps. Les détenteurs présentent plus tard des bons d’échange à leurs émetteurs pour la réalisation du monde réel. L'échange en bassin et l'exécution par l'émetteur sont des cycles de vie distincts.

CPP coordonne la valeur à travers des engagements clairement décrits. Le modèle est examiné dans [L'économie de base: réflexion et pratique](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 C'est quoi un engagement ?**

Un engagement est la promesse d'une partie identifiée d'une livraison future, par exemple de nourriture, de transport, de main-d'œuvre, de stockage ou d'un autre bien, service, avantage ou performance légitime. À **bon d’échange de crédit** est un jeton ou un enregistrement représenté comme cet engagement selon des conditions publiées.

Le contrat de jeton enregistre la mécanique numérique. Les termes du bon d’échange identifient l'émetteur, l'offre, la capacité, le lieu, le moment, les restrictions, la présentation, l'exécution, les plaintes et le processus de décharge.

### **1.2 C'est quoi un Bassin d’engagements ?**

Un Bassin d’engagements est l'arrangement réglementé. Elle peut être gérée par un individu, une coopérative, un groupe communautaire, une agence publique, une fédération, un multisig, un opérateur de services ou une autre structure responsable.

Les rôles et les pouvoirs pertinents comprennent:

- **Gestionnaire de Bassin:** publie et administre les règles du bassin et toute garantie expressément assumée;
- **Propriétaire du Bassin:** détient les pouvoirs actuels de propriétaire de `SwapPool`;
- **administrateur par procuration:** peut mettre à niveau une mise en œuvre par procuration;
- **contrôleurs de dépendance:** régir les registres configurés, les cotations, les limitateurs ou les composantes de redevance;
- **opérateur du service de routage :** peut découvrir, coter, simuler, préparer, relayer et enregistrer un itinéraire autorisé séparément dans le cadre de son champ d'application publié ; et
- **le garant:** n'assume une obligation définie que par le biais de conditions publiées et financées.

CPP groupes Les fonctions de bassin sont divisées en quatre concepts:

- **La sélection:** admettre des jetons ou des bons d’échange pris en charge.
- **Une évaluation:** publier la méthode utilisée pour un taux de change ou une cotation.
- **Limitation de l'utilisation:** appliquer les plafonds actuels du solde des jetons de bassin ou d'autres contrôles mis en œuvre séparément.
- **Échange:** détenir des stocks, exécuter des swaps, comptabiliser les frais et émettre des enregistrements de transactions.

Protocol v1.1.0 met en œuvre ces fonctions au moyen de `SwapPool` et de dépendances facultatives. Son `Limiter` actuel plafonne le solde d'un jeton dans un Bassin ; il ne fournit pas de limites d'échange glissantes, par compte ou à l'échelle du réseau. Son `SwapRouter` Solidity actuel calcule des cotations entre plusieurs Bassins ; il n'exécute pas les échanges.

La CLC App et CLC Core de production mettent en œuvre, au-dessus de ces contrats, un routage sur une même chaîne au niveau de l'application. CLC Core découvre les chemins, lit les Bassins sélectionnés à un bloc déterminé, prépare et simule un lot signé par le portefeuille Calibur, coordonne son relais et regroupe les enregistrements de règlement qui en résultent. La configuration publique actuelle recherche des itinéraires comptant jusqu'à trois échanges de Bassin. Chaque Bassin reste gouverné indépendamment et chaque étape est toujours exécutée directement par son propre `SwapPool`.

La conception plus large proposée pour le CPP pourrait ajouter des limites glissantes, des contrôles de compte, des chemins HTLC ou d'entiercement interdomaines, un rééquilibrage automatique des Bassins et une compensation par lots. Il s'agit de composants proposés, et non de descriptions du limiteur actuel, du routeur Solidity ou du flux de routage de l'application et de CLC Core.

### **1.3 Logique actuelle d'échange direct**

Un échange de bassin direct en cours:

1. vérifie le registre facultatif pour les jetons d'entrée et de sortie;
2. mesure les entrées reçues;
3. obtient une cotation auprès de l'indicateur de cotation configuré ou applique la parité des unités brutes;
4. vérifie le solde de jetons de bassin obtenu par rapport au limiteur facultatif;
5. Calcule la redevance de bassin et toute redevance de protocole supplémentaire;
6. vérifie l'inventaire des produits disponibles;
7. transférer les frais de protocole et de sortie et comptabiliser les frais de bassin ; et
8. émet des événements d'échange.

La cotation est un paramètre de transaction, et non une preuve de la capacité de l'émetteur, de la valeur de rachat, de la juste valeur, de la convertibilité en espèces ou d'une garantie.

### **1.4 Utilisation plus large**

Bassins d’engagements peut soutenir l'échange communautaire, la production, l'aide mutuelle, les programmes publics et d'autres structures responsables. Un produit de crédit documenté séparément pourrait utiliser un bon d’échange comme garantie ou un instrument de remboursement, mais il nécessiterait des conditions supplémentaires et spécifiques à la transaction. Un envoi ordinaire, un dépôt de bassin, un échange de bassin, une présentation de remboursement, une exécution ou une décharge ne constituent pas automatiquement un prêt ou un remboursement.

CPP est destiné à un échange responsable et à des enregistrements de transactions vérifiables, et non à un décalage spéculatif. Les enregistrements en chaîne ne prouvent toujours pas l'exécution du monde réel ou l'impact social.
