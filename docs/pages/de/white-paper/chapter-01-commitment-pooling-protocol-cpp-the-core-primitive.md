## **1. Verpflichtungspartnerprotokoll (CPP): das primitive Kern**

**Geistiges Modell:** Eine Commitment-Fonds ist eine geregelte Regelung für die Zulassung von Gutscheinen oder anderen Vermögenswerten, die Veröffentlichung von Börsenregeln, das Inventarhalten und die Bereitstellung von Swaps. Die Inhaber stellen ihren Emittenten später Gutscheine zur Realisierung vor. Der Fonds-Austausch und die Abwicklung durch die Emittenten sind getrennte Lebenszyklen.

CPP koordiniert den Wert durch klar beschriebene Verpflichtungen. Das Modell wird in [Grundwirtschaft: Nachdenken und Praxis](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

### **1.1 Was ist eine Verpflichtung?**

Eine Verpflichtung ist das Versprechen einer identifizierten Partei einer zukünftigen Lieferung, z.B. Lebensmittel, Transport, Arbeit, Lagerung oder ein anderes gesetzliches Gut, Dienstleistung, Nutzen oder Leistung. Die A **Gutschein** ist ein Zeichen oder eine Aufzeichnung, die als diese Verpflichtung in veröffentlichten Begriffen dargestellt wird.

Der Token-Vertrag erfasst die digitale Mechanik. Die Bedingungen des Gutscheins identifizieren den Emittenten, das Angebot, die Kapazität, den Ort, den Zeitpunkt, die Beschränkungen, die Darstellung, die Erfüllung, die Beschwerden und den Entlastungsprozess.

### **1.2 Was ist ein Commitment-Fonds?**

Eine Commitment-Fonds ist die geregelte Regelung. Sie kann von einem Einzelnen, einer Genossenschaft, einer Gemeindegruppe, einer öffentlichen Agentur, einer Föderation, einem Multisig, einem Dienstleistungsbetreiber oder einer anderen verantwortungsvollen Struktur geleitet werden.

Zu den einschlägigen Aufgaben und Behörden gehören:

- **Fonds-Verantwortliche Person:** veröffentlicht und verwaltet die Regeln des Fonds und alle ausdrücklich übernommenen Garantien;
- **Poolbesitzer:** besitzt die aktuellen Eigentümerbefugnisse von `SwapPool`;
- **Proxy-Administrator:** kann eine proxied-Implementierung aktualisieren;
- **Abhängigkeitscontroller:** Regeln konfigurierte Registrierungen, Zitaten, Begrenzungen oder Gebührenkomponenten;
- **Streckesucher oder -betreiber:** kann Zitate entdecken oder in einer künftigen Umsetzung eine separat zugelassenen Route durchführen; und
- **Garantierer:** übernimmt eine definierte Verpflichtung nur durch veröffentlichte, finanzierte Bedingungen.

CPP Gruppen Fonds-Funktionen sind in vier Konzepte unterteilt:

- **Die Kuration:** Akzeptieren Sie unterstützte Token oder Gutscheine.
- **Bewertung:** die für einen Wechselkurs oder ein Angebot verwendete Methode veröffentlichen.
- **Einschränkung:** die gegenwärtigen Token-Gleichgewichtsgrenzwerte des Fonds oder andere separat eingeführte Kontrollen anzuwenden.
- **Umtausch:** Inventar halten, Swaps ausführen, Gebühren berechnen und Transaktionsunterlagen ausstellen.

Protocol v1.1.0 implementiert diese Funktionen durch `SwapPool` und optionale Abhängigkeiten. Sein aktueller `Limiter` begrenzt ein Token-Guthaben in einem Fonds; es enthält keine rolling-, pro-Konto- oder netzweiten Swap-Limits. Sein aktueller `SwapRouter` berechnet Kotierungen für mehrere Fonds; es führt keine Swaps durch.

Das breitere vorgeschlagene CPP-Design kann Rolllimits, Konto-Kontrollen, Ausführungsroutern, HTLC oder Escrow-Wege und Charge-Netzungen hinzufügen. Es handelt sich hierbei um vorgeschlagene Komponenten, nicht um Beschreibungen des aktuellen Limiters oder Routers.

### **1.3 Aktuelle Direkt-Swap-Logik**

Ein aktueller direkter Fonds-Swap:

1. prüft das optionale Register für die Eingabe- und Ausgabe-Token;
2. Messungen der erhaltenen Eingabe;
3. erhält ein Angebot aus dem konfigurierten Angebot oder wendet Roh-Einheitsparität an;
4. überprüft den resultierenden Fonds-Token-Guthaben gegenüber dem optionalen Limiter;
5. berechnet die Poolgebühr und alle zusätzlichen Protokollgebühren;
6. Kontrollen des verfügbaren Output-Inventars;
7. überträgt die Protokollgebühr und die Ausgabe sowie die Rechnung für die Poolgebühr; und
8. Emission von Swap-Events.

Das Angebot ist ein Transaktionsparameter, kein Nachweis der Emittentenkapazität, des Rückkaufswerts, des realen Werts, der Bargeldkonvertierbarkeit oder einer Garantie.

### **1.4 Weiterer Einsatz**

Commitment-Fonds kann den gemeinschaftlichen Austausch, die Produktion, die gegenseitige Hilfe, öffentliche Programme und andere verantwortungsvolle Strukturen unterstützen. Ein separat dokumentiertes Kreditprodukt könnte einen Gutschein als Sicherheit oder als Rückzahlungsinstrument verwenden, erfordert jedoch ergänzende und transaktionsspezifische Bedingungen. Ein gewöhnlicher Versand, eine Fonds-Einzahlung, ein Fonds-Swap, eine Rückzahlungsvorlage, eine Erfüllung oder eine Abgabe sind nicht automatisch ein Darlehen oder eine Rückzahlung.

CPP ist für verantwortungsbewusste Börsen- und auditierbare Transaktionsunterlagen bestimmt, nicht für spekulative Churn. Die Aufzeichnungen auf der Kette beweisen immer noch keine reale Erfüllung oder soziale Wirkung.
