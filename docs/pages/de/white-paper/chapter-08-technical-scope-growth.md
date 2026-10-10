## **8. Technischer Umfang und Wachstum**

Dieses Kapitel beschreibt freiwillige oder vorgeschlagene Arbeiten. Es handelt sich nicht um eine Liste von Merkmalen, die in der aktuellen CLC App oder Protocol v1.1.0 garantiert vorhanden sind.

Zu den möglichen Arbeitsbereichen gehören:

- Ausführungsrouting über kompatible Fonds hinweg mit Registrierung, Angebot, Begrenzung, Gebühr und Inventarentdeckung
- Zeitverbindlich eingeschlossene Aufbewahrungs- oder HTLC-Adapter für die interdomainübergreifende Ausführung, wenn keine atomare Abwicklung verfügbar ist;
- Schnittstellen und politische Instrumente für kleine oder persönliche Fonds;
- Überprüfbare Register für Gutscheine, Fonds, Wechselkursmethoden, Limits, Verantwortliche und Gebühren;
- Bereitstellungsspezifische Zahlungsanbieter-Konnektoren, Checkout-Flows und Förderfähigkeitskontrollen;
- Verbindungen zu fungierbaren Vermögenswerten mit externen Liquiditätsanlagen zur Wiederausgleichs- und Zahlungsliquidität; und
- die politische Konversion von Finanzmitteln für übernommene Abdeckungen, Betriebskosten oder Liquiditätsmandate.

Die Preise auf dem Außenmarkt würden nicht bestimmen, was ein Emittent im Rahmen von Gutscheinen schuldet. Ein Fonds könnte eine geschützte externe Referenz für ein fungibles Vermögenswert verwenden, aber seine veröffentlichte Wechselkursmethode, Grenzen, Gebühren und Inventar würden seine Angebote regeln.

### **8.1 vorgeschlagene Strecken- und SDK-Normen**

**Die Entdeckung.** Ein vorgeschlagener Routendienst würde identifizierte Register für die Aufnahme von Vermögenswerten, Wechselkursmethoden, Grenzen, Gebühren, Bestand, Vorfälle und Daten des Controllers abfragen. Cached-Aufzeichnungen würden Frischheitsgrenzen und Quell-Identifikatoren enthalten.

**Netzwerkprofile.** Ein Client kann mehr als ein Registerroot- oder Richtlinienprofil unterstützen. Es würde dem Teilnehmer mitteilen, welches Profil, Gegenparteien, Adapter, Einschränkungen und verantwortungsbewusste Dienstleister ein Angebot verwendet. Eine Profilübergreifende Strecke müsse alle geltenden Bedingungen für den Hop erfüllen.

**Die Pfadpolitik.** Ein verantwortungsbewusster Betreiber könnte unsichere Abhängigkeiten oder Gegenparteien ausschließen und Grenzwerte für die Strecke, die Anforderungen an die Frische und die Gesundheitskriterien anwenden. Diese Signale würden eine Entscheidung unterstützen. Sie garantieren weder Erfüllung noch Schutz vor Verlust.

**Gebühren und Grenzen.** Ein Angebot würde die Poolgebühren, alle zusätzlichen aktuellen Protokollgebühren und alle separat vorgeschlagenen Routing- oder Servicegebühren auflösen. Die Vollstreckung würde verfallene Angebote oder verletzte Grenzen ablehnen.

**Atomität und Wiederherstellung.** Multi-Hop-Ausführung wäre Atom, wenn möglich. Wenn sie HTLCs oder Treuhänder verwendet hat, würde der Dienst Zeiträume, Abbrechungswege, verantwortliche Controller, Vorfallverfahren und Restrisiken offenlegen.

**Angebotene Partie-Vernetzung und Neuausgewogenheit.** Ein Opt-In-Dienst kann Absichten zur Wiedergewogenheit sammeln und nach kompatiblen Zyklen oder Ketten suchen. Es würde:

1. eine maschinenlesbare Quittung veröffentlichen, in der ausgeführte Zyklen, Vermögenswerte, Beträge, Bewertungszeiten und Gebühren identifiziert werden;
2. Durchsetzung der festgelegten Periodengrenzen und der Gegenparteienpolitik;
3. eine Tätigkeit ablehnen, die gegen die Genehmigung, die Grenzen oder die verfügbaren Bestände des teilnehmenden Fonds verstößt; und
4. Erhalt der deterministischen Eingaben und Einnahmen für die Überprüfung und die Bearbeitung von Streitigkeiten.

**SDK-Anforderungen.** Eine SDK für ausgeführte Strecken würde eine deterministische Quote-to-Receipt-Mapping, pro-Hop-Invariante-Kontrollen, verständliche Fehlercodes und auditierungsfreundliche Logs bereitstellen. Der aktuelle Protocol v1.1.0 `SwapRouter` enthält nur Zitate; es führt diese vorgeschlagenen Strecken nicht durch.

#### **8.1.1 Mindestkonföderationskompatibilitätsspezifikation**

Ein Fonds-Ökosystem, das eine Profilübertragung anstrebt, würde maschinenlesbare Informationen für:

1. **Registerwurzeln:** Identifikatoren für Vermögenswerte, Fonds, Wechselkursmethoden, Grenzen und Gebührenrichtlinien oder eine Wurzel, die sie deterministisch löst.
2. **Einnahmen:** das Profil, die eingegangenen und ausgehenden Vermögenswerte, die Beträge, die Quotenquelle und das Zeitstempel, die Grenzbilder, die Gebühren, das Inventarergebnis und die Ausführungsergebnisse für jeden Sprung.
3. **Betriebssignale:** Frischheitsbegrenzte Informationen über Bestand, Einsatzbegrenzung, Vorfälle und jegliche separat nachgewiesene Erfüllung oder finanzierten Schutz.
4. **Richtlinienbeschränkungen:** zulässige oder verweigerte Gegenparteien, Anlageklassen, Adapter und alle Treuhandverpflichtungen.
5. **Ausfallcode:** Deterministische Erklärungen für Ablehnung, Ablauf, Begrenzung, Bestand, Politik, Abhängigkeit oder Zwischenfälle.

Ein Profil könnte Abdeckung, Compliance, Schiedsverfahren oder andere Dienstleistungen hinzufügen, ohne sie zu Anforderungen für die grundlegende Kompatibilität von CPP zu machen. Jeder optionelle Dienst würde seine Verantwortliche, seine Autorität, seinen Umfang und seine Bedingungen identifizieren.

### **8.2 Lizenzierung, Überprüfung und Ausstieg**

Protocol v1.1.0-Verträge sind EVM--kompatibel. Verträge im `src`-Verzeichnis des Protokollrepositoriums werden unter AGPL-3.0 veröffentlicht, mit Ausnahme der identifizierten unmodifizierten Drittanbieterkomponenten, die ihre eigenen Bedingungen behalten. Veröffentlichte Quell-, ABI- und Einsatzleitungen unterstützen eine unabhängige Überprüfung, beweisen jedoch nicht alleine eine Prüfung, eine sichere Bereitstellung oder die gesetzliche Einhaltung.

Jede Bereitstellung würde ihre Codeversion, die Herkunft des Builds, Adressen, Controller- und Upgrade-Möglichkeiten, den Auditstatus, die Registrierspiegel sowie alle Schutzvorkehrungen zur Zeitversperrung oder Pause gesondert offenlegen.

Eine vorgeschlagene **Gabelgerät** könnten Folgendes umfassen:

1. Deterministische Bereitstellungsschriften;
2. Registry-Snapshot und Exportwerkzeuge;
3. ein dokumentierter Prozess zur Wiederverweisung von Route-Dienstleistungen, SDKs und Schnittstellen auf eine neue Registerroot;
4. eine Fonds-Verantwortliche Person-Checkliste für das sichere Verlassen eines geteilten Registers; und
5. eine Migrations-Checkliste für ausstehende Gutscheine, einschließlich Emittentenbenachrichtigungen, Vorlage- und Erfüllungsfristen, weiterhin Zugang zu Aufzeichnungen und Rechtsmittel.

Kompatible Gabeln können die Widerstandsfähigkeit verbessern, wenn Gemeinschaften, Genossenschaften, öffentliche Stellen, Verbände, Multisigs oder Dienstleistungsbetreiber eine andere Governance benötigen. Die tatsächliche Kontinuität hängt immer noch vom Vertragseigentum, den Schlüsseln, den Abhängigkeiten, den Schnittstellen, der Infrastruktur, den gesetzlichen Verpflichtungen und den Dienstleistungen Dritter ab.
