# 15. Fahrplan (Anzeige)

## **15.1 Aktuelle Grundlagen**

GEF betreibt die CLC App unter `cosmolocal.credit` auf Gnosis Chain. Die App bietet unterstützten Zugang zu Konten und Wallets, einen öffentlichen Markt-Katalog sowie Benutzeroberflächen für Tokens, Gutscheine, Angebote, Wünsche, Commitment-Fonds, Übertragungen, direkte Fonds-Tausche und Tausche über Routen.

Protocol v1.1.0 stellt die aktuelle Vertragsgrundlage bereit: `GiftableToken`, direkte Ausführung über `SwapPool`, optionale Register, Bewertungsmodule, Fonds-Tokenlimits, Fondsgebühren, eine zusätzliche Protokollgebühr und einen Solidity-`SwapRouter`, der nur Kursangebote erstellt.

CLC Core stellt jetzt die Grundlage der öffentlichen App für Routing und Beobachtbarkeit innerhalb derselben Blockchain bereit: einen abgestimmten Graphen, Routen mit bis zu drei Fonds-Tauschen, Angebote auf Grundlage eines festgelegten Blocks, Grenzen und Gebühren je Schritt, Simulation des vollständigen Batchs, signierte atomare Calibur-Ausführung, Relayer-Verfolgung, Abstimmung der Abwicklung, zusammengefasste Belege und betriebliche Messdaten. Die Verfügbarkeit hängt weiterhin von Benutzeroberfläche, unterstütztem Wallet- und Tokenverhalten, bereitgestellten Verträgen, Beständen, Konfiguration, Aktualität des Dienstes, Netzwerkzustand, Berechtigung, Anbietern, Rechtsordnung und den veröffentlichten Bedingungen von Herausgeber oder Fonds ab.

## **15.2 vorgeschlagene Meilensteine**

Diese genannten Meilensteine sind Entwurfsanweisungen, nicht Veröffentlichungsnummern, Liefertermine oder Verpflichtungen, die ein Feature starten wird.

- **Die Stiftung Governance:** der vorgeschlagene Governance-Token CLC; der vorgeschlagene CLC-Netzwerkpool; Gebührenadapter; Die Kommission hat in ihrem Bericht eine Reihe von Vorschlägen vorgelegt, mit denen sie sich auf die Erörterungen der Kommission und der Kommission bezieht.
- **Routing & Beobachtbarkeit:** aktuelle Routen- und Belegschnittstellen auf zusätzliche Profile ausweiten; Zustandsübersichten und Berichte auf Dienstebene veröffentlichen; einen Rahmen für Versicherungsrichtlinien entwickeln; freiwillige Absichten zum Bestandsausgleich entwerfen; und gebündelte Verrechnung prototypisch erproben.
- **Cross-Domain-Risiko-Tools:** HTLC oder Treuhandverweisung; getrennte Bürgschaftsmodule; Roll-, Konto- und Stufengrenzvoranschläge.
- **Regulierter Zugang:** die bereitstellungsspezifischen Zahlungsdienste Dritter; persönliche Mikro-Fonds; die Entdeckung des Compliance-Service; Prüfungen der Gutscheinklassen durch Dritte.

Jeder Zahlungsdienst würde von separat identifizierten Dritten unter der geltenden Gerichtsbarkeit, Berechtigung, Gebühren, Grenzen und Bedingungen erbracht werden. Die CLC App- und Protocol v1.1.0-Verträge betreiben selbst keine Fiat-Schienen.

Blockchain-übergreifende mehrstufige Ausführung, automatischer Bestandsausgleich der Fonds, gemeinsame Versicherung, der vorgeschlagene CLC-Governance-Token und der vorgeschlagene CLC-Netzwerkfonds, gebündelte Verrechnung, persönliche Mikro-Fonds und regulierte Zahlungsdienste bleiben vorgeschlagen oder bereitstellungsabhängig, bis eine Umsetzung und ihre geltenden Bedingungen sie als aktiv ausweisen. Von Teilnehmern ausgelöstes Routing innerhalb derselben Blockchain in der öffentlichen CLC App ist aktuell.
