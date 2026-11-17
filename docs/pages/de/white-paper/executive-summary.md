# Zusammenfassung

Das **Commitment Pooling Protocol (CPP)** beschreibt, wie unabhängig verwaltete Commitment-Fonds einlösbare Verpflichtungen kuratieren, Methoden für Wechselkurse und Grenzen veröffentlichen, Bestände halten und verantwortlichen Tausch ermöglichen können. Herausgeber bleiben für ihre Gutscheinverpflichtungen verantwortlich. Fonds-Verantwortliche bleiben für die Fondsregeln und jede ausdrücklich übernommene Garantie verantwortlich. Weder die CLC App noch GEF sind universelle Garanten.

Protocol v1.1.0 stellt die aktuellen Bausteine für direkte Tausche bereit: `GiftableToken`, `SwapPool`, optionale Register und Bewertungsmodule, Fonds-Token-Saldenobergrenzen, Fondsgebühren, eine zusätzliche Protokollgebühr und einen Solidity-`SwapRouter`, der nur Kursangebote erstellt. Die produktive CLC App und CLC Core erkennen heute Routen innerhalb derselben Blockchain durch bis zu drei Fonds, erstellen Angebote auf Grundlage eines festgelegten Blocks, simulieren und bereiten signierte atomare Wallet-Batches vor, leiten sie weiter und fassen ihre Abwicklungsaufzeichnungen zusammen. Die Verträge erfassen weiterhin keine Erfüllung in der realen Welt, schaffen keine automatischen Anteile für Liquiditätsanbieter, führen kein Blockchain-übergreifendes Routing oder gebündelte Verrechnung aus und stellen keine universellen Reserven, Garantien oder Versicherungen bereit.

Das historische **Sarafu Network** verwendete Konzepte des Commitment Pooling in Gemeinschaftswährungen, Spargruppen, Systemen gegenseitiger Hilfe und Produktionsverpflichtungen. Sein Dienst ging später in die CLC App über. Dies war keine Aussage, dass jedes historische Konto, jede Geldbörse, jeder Token, Gutschein, Fonds, Saldo, Bericht, Teilnehmer oder jede Verpflichtung migriert wurde.

**Historische Momentaufnahme des Sarafu Network – Celo-Aktivität vom 5. Juli 2023 bis 20. Juli 2025**

**Quelle:** [Dune-Analytics-Dashboard](https://dune.com/grassrootseconomics/sarafu-network)

- 26.367 Nutzer
- 285.197 Tausche zwischen Nutzern
- 188 einzigartige aktive Commitment-Fonds
- 745 einzigartige aktive Gutscheine
- 320.692 USD Volumen von Fonds-Tauschen
- 899 veröffentlichte Berichte ([historisches Berichtsarchiv](https://sarafu.network/reports))

Diese Zahlen sind historische Nachweise und keine aktuellen CLC-Nutzungszahlen.

Die Zahlen geben die veröffentlichten Bezeichnungen des Dashboards für einen zusammenhängenden Messzeitraum wieder. „Nutzer“, „aktiv“, „Tausch“ und die Umrechnung des Fonds-Tauschvolumens in USD hängen von den zugrunde liegenden Dashboard-Abfragen und der Bewertungsmethode ab; sie sollten nicht als allgemeingültige CLC-KPI-Definitionen behandelt werden. Dieses Repository hat den Datensatz nicht unabhängig neu berechnet. Jede Weiterverwendung sollte Datum, Quellenlink, Bezeichnungen und historische Einordnung beibehalten. Die vorgeschlagenen Messanforderungen in [Anhang C](/de/white-paper/appendix-c-kpi-definitions) sind für künftige Berichte strenger.

Der weiter gefasste CLC-Entwurf verbindet das aktuelle Routing mit Vorschlägen dazu, wie kompatible Netzwerke:

1. verantwortliche Routing-Dienste auf zusätzliche Register- oder Richtlinienprofile und weitere Bereiche ausweiten könnten;
2. verantwortliche Netzwerkdienste koordinieren könnten, ohne die lokale Verantwortung zu verdrängen;
3. gesondert finanzierte Liquiditätsmandate, Garantien, Reserven oder Versicherungspolicen unterstützen könnten;
4. Fonds-Tausche getrennt von Gutscheinvorlage, Erfüllung und Ausbuchung messen könnten; und
5. einen vorgeschlagenen Netzwerkanteil und gesondert beschlossene Servicegebühren zur Finanzierung gemeinsamer Dienste verwenden könnten.

Der Entwurf umfasst einen **vorgeschlagenen CLC-Governance-Token** und einen **vorgeschlagenen CLC-Netzwerkfonds**. Beide sind weder Bestandteil der aktuellen App noch von Protocol v1.1.0.

Im vorgeschlagenen Modell könnten Teilnehmer nur über getrennte Programme mit veröffentlichten Regeln zu Berechtigung, Risiken, Kontrollen, Übertragungsrechten, Rückforderungsbedingungen und Gebühren an Liquidität und Governance teilhaben. Gewöhnliche Fonds-Einzahlungen schaffen keine automatischen Anteile, Rückzahlungen, Abhebungen, Belohnungen oder Governance-Rechte.

Das gemeinsame Ziel lautet:

> Verantwortlichen Tausch und die Erfüllung realer Verpflichtungen ausweiten und dabei Fürsorge, Fairness, lokale Verantwortlichkeit und Widerstandsfähigkeit bewahren.

Die Vermeidung vereinnahmender Strukturen und ein glaubwürdiger Ausstieg bleiben zentrale Gestaltungsziele. Zu den vorgeschlagenen Kontrollen gehören zeitverzögerte Governance, mehrere Genehmigungsschwellen, transparente Delegationen, Regeln für Interessenkonflikte, Überprüfung von Vorfällen und ein dokumentiertes Verfahren für Fork und Migration. Diese Kontrollen würden bestimmte Governance-Risiken verringern, aber keine Verluste ausschließen oder Ergebnisse garantieren.
