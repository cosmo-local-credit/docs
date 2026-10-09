## **1. Die Kommission Verpflichtungspartnerprotokoll (CPP): das primitive Kernprotokoll**

**Geistiges Modell:**Ein Commitment Pool ist eine geregelte Regelung für die Zulassung von Gutscheinen oder anderen Vermögenswerten, die Veröffentlichung von Börsenregeln, das Inventarhalten und die Bereitstellung von Swaps. Die Inhaber übermitteln ihren Emittenten später Gutscheine, um sie in der realen Welt zu erfüllen. Der Pool-Austausch und die Abwicklung durch die Emittenten sind getrennte Lebenszyklen.

CPP koordiniert den Wert durch klar beschriebene Verpflichtungen. Das Modell wird in [Grassroots Economics: Reflection and Practice](https://willruddick.substack.com/p/grassroots-economics-the-book-is) diskutiert.

### **1.1 Was ist ein Engagement?**

Eine Verpflichtung ist das Versprechen einer identifizierten Partei einer zukünftigen Lieferung, z.B. Lebensmittel, Transport, Arbeit, Lagerung oder ein anderes gesetzliches Gut, Dienstleistung, Nutzen oder Leistung. Ein **Gutschein** ist ein Zeichen oder eine Aufzeichnung, die als diese Verpflichtung unter veröffentlichten Bedingungen dargestellt wird.

Der Token-Vertrag erfasst die digitale Mechanik. Die Emittenten, das Angebot, die Kapazität, der Ort, der Zeitpunkt, die Beschränkungen, die Darstellung, die Erfüllung, die Beschwerden und der Entlastungsprozess werden in den Voucherbedingungen angegeben.

### **1.2 Was ist ein Engagementpool?**

Ein Engagement Pool ist die geregelte Regelung. Es kann von einem Einzelnen, einer Genossenschaft, einer Gemeindegruppe, einer öffentlichen Behörde, einer Föderation, einem Multisig, einem Dienstleistungsbetreiber oder einer anderen verantwortungsvollen Struktur geleitet werden.

Zu den einschlägigen Aufgaben und Behörden gehören:

- **Pool Steward:**Veröffentlicht und verwaltet die Regeln des Pool und alle ausdrücklich übernommenen Garantien;
- **Poolbesitzer:**besitzt die aktuellen Eigentümerbefugnisse `SwapPool`;
- **Proxy-Administrator:**kann eine proxied-Implementierung aktualisieren;
- **Abhängigkeitscontroller:**Regeln konfigurierte Registrierungen, Zitaten, Begrenzungen oder Gebührenkomponenten;
- **Streckesucher oder -betreiber:**kann Zitate entdecken oder in einer künftigen Umsetzung eine separat genehmigte Strecke durchführen; und
- **Garantierer:**übernimmt eine definierte Verpflichtung nur durch veröffentlichte, finanzierte Bedingungen.

CPP Gruppen Pool-Funktionen sind in vier Konzepte unterteilt:

- **Verpflegung:**Akzeptieren Sie unterstützte Token oder Gutscheine.
- **Bewertungen:**die für einen Wechselkurs oder ein Angebot verwendete Methode veröffentlichen.
- **Einschränkung:**die geltenden Token-Gleichgewichtsgrenzwerte oder andere separat eingeführte Kontrollen anzuwenden.
- **Umtausch:**Inventar halten, Swaps ausführen, Gebühren berechnen und Transaktionsunterlagen ausstellen.

Protocol v1.1.0 implementiert diese Funktionen durch `SwapPool` und optionale Abhängigkeiten. Die derzeitige `Limiter` begrenzt ein Token-Guthaben an einem Pool; sie stellt keine rollenden, pro Konto oder Netzwerkweiten Swap-Limits vor. Die aktuellen `SwapRouter` berechnen Multi-Pool-Anleihen; sie führen keine Swaps durch.

Das breitere vorgeschlagene CPP-Design kann Rolllimits, Konto-Kontrollen, Ausführungsroutern, HTLC- oder Escrow-Wege und Charge-Netzungen hinzufügen. Das sind vorgeschlagene Komponenten, nicht Beschreibungen des aktuellen Limiters oder Routers.

### **1.3 Aktuelle Direkt-Swap-Logik**

Ein aktueller direkter Pool-Swap:

1. überprüft das optionale Register für die Eingabe- und Ausgabe-Token;
2. Messungen der erhaltenen Eingabe;
3. erhält ein Angebot aus dem konfigurierten Angebot oder wendet Roh-Einheitsparität an;
4. überprüft den resultierenden Pool-Token-Guthaben gegenüber dem optionalen Limiter;
5. berechnet die Poolgebühr und alle zusätzlichen Protokollgebühren;
6. Kontrollen des verfügbaren Output-Inventars;
7. überträgt die Protokollgebühr und die Ausgabe sowie die Rechnung für die Poolgebühr; und
8. Emission von Swap-Ereignissen.

Das Angebot ist ein Transaktionsparameter, nicht ein Nachweis der Emittentenkapazität, des Rückkaufswerts, des realen Werts, der Bargeldkonvertierbarkeit oder einer Garantie.

### **1.4 Weiterer Einsatz**

Engagement Pools können gemeinschaftlichen Austausch, Produktion, gegenseitige Hilfe, öffentliche Programme und andere verantwortungsbewusste Strukturen unterstützen. Ein separat dokumentiertes Kreditprodukt könnte einen Gutschein als Sicherheit oder als Rückzahlungsinstrument verwenden, erfordert jedoch zusätzliche und transaktionsspezifische Bedingungen. Ein gewöhnlicher Versand, eine Pool-Einzahlung, ein Pool-Swap, eine Erlösungserbringung, eine Erfüllung oder eine Entlastung sind nicht automatisch ein Darlehen oder eine Rückzahlung.

CPP ist für verantwortungsbewusste Börsen- und auditierbare Transaktionsunterlagen bestimmt, nicht für spekulative Churn. Die Aufzeichnungen auf der Kette beweisen immer noch keine reale Erfüllung oder soziale Wirkung.
