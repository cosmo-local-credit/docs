## **8. Das ist alles. Technischer Umfang und Wachstum**

Dieses Kapitel beschreibt freiwillige oder vorgeschlagene Arbeit. Es handelt sich nicht um eine Liste von Merkmalen, die in der aktuellen CLC App oder Protocol v1.1.0 garantiert vorhanden sind.

Zu den möglichen Arbeitsbereichen gehören:

- Ausführungsrouting über kompatible Pools hinweg mit Registrierung, Angebot, Begrenzung, Gebühr und Inventarentdeckung
- Zeitgebundene Treuhand- oder HTLC-Adapter für die spanübergreifende Ausführung, wenn keine atomare Abwicklung verfügbar ist;
- Schnittstellen und politische Instrumente für kleine oder persönliche Pools;
- Überprüfbare Register für Gutscheine, Pools, Wechselkursmethoden, Limits, Verantwortliche und Gebühren;
- Bereitstellungsspezifische Anschlüsse des Zahlungsanbieters, Checkout-Flows und Kontrollen der Förderfähigkeit;
- Verbindungen zu fungierbaren Vermögenswerten mit externen Liquiditätsanlagen zur Wiederausgleichs- und Zahlungsliquidität; und
- die politische Umrechnung von Finanzmitteln für die übernommene Deckung, Betriebskosten oder Liquiditätsmandate.

Die Preise auf dem Außenmarkt würden nicht bestimmen, was ein Emittent im Rahmen von Gutscheinen schuldet. Ein Pool könnte für einen fungiblen Vermögenswert eine geschützte externe Referenz verwenden, aber seine veröffentlichte Wechselkursmethode, Grenzen, Gebühren und Inventar würden seine Angebote regeln.

### **8.1 vorgeschlagene Route-Service- und SDK-Normen**

**Die Entdeckung.**Ein vorgeschlagener Routendienst würde identifizierte Register für die Aufnahme von Vermögenswerten, Wechselkursmethoden, Grenzen, Gebühren, Bestand, Vorfälle und Daten des Controllers abfragen. Die Cached-Aufzeichnungen enthalten Frischheitsgrenzen und Quell-Identifikatoren.

**Netzwerkprofile.**Ein Client kann mehr als ein Registerroot- oder Richtlinienprofil unterstützen. Es würde dem Teilnehmer mitteilen, welches Profil, Gegenparteien, Adapter, Einschränkungen und verantwortungsbewusste Dienstleister ein Angebot verwendet. Eine Profilübergreifende Strecke müsse alle geltenden Bedingungen für den Hop erfüllen.

**Die Pfadpolitik.**Ein verantwortungsbewusster Betreiber könnte unsichere Abhängigkeiten oder Gegenparteien ausschließen und Grenzwerte für die Strecke, die Anforderungen an die Frische und die Gesundheitskriterien anwenden. Diese Signale würden eine Entscheidung unterstützen; sie garantieren weder Erfüllung noch Schutz vor Verlust.

**Gebühren und Grenzen.**Ein Angebot würde die Poolgebühren, alle zusätzlichen aktuellen Protokollgebühren und alle separat vorgeschlagenen Routing- oder Servicegebühren auflösen. Die Vollstreckung würde verfallene Angebote oder verletzte Grenzen ablehnen.

**Atomität und Wiederherstellung.**Multi-Hop-Ausführung wäre Atom, wenn möglich. Wenn der Dienst HTLCs oder Treuhänder verwendet, würde er Zeiträume, Abbruchspfade, verantwortliche Controller, Vorfallverfahren und Restrisiken offenlegen.

**Das vorgeschlagene Partiennetzwerk und die Neuausgleichung.**Ein Opt-In-Dienst kann Absichten zur Wiedergewogenheit sammeln und nach kompatiblen Zyklen oder Ketten suchen. Es würde:

1. eine maschinenlesbare Quittung veröffentlichen, die ausgeführte Zyklen, Vermögenswerte, Beträge, Bewertungszeiten und Gebühren identifiziert;
2. Durchsetzung der festgelegten Periodengrenzen und der Gegenparteienpolitik;
3. eine Tätigkeit ablehnen, die gegen die Genehmigung, die Grenzen oder die verfügbaren Bestände des teilnehmenden Pools verstößt, und
4. Erhalt der deterministischen Eingaben und Einnahmen für die Überprüfung und die Bearbeitung von Streitigkeiten.

**SDK-Anforderungen.**Eine SDK für ausgeführte Strecken würde eine deterministische Quote-to-Receive-Mapping, Überprüfungen von Invarianten pro Hop, verständliche Fehlercodes und auditierungsfreundliche Logs bereitstellen. Die derzeitige Protocol v1.1.0 `SwapRouter` stellt nur Angebote zur Verfügung; sie führt diese vorgeschlagenen Strecken nicht aus.

#### **8.1.1 Mindestkonföderationskompatibilitätsspezifikation**

Ein Pool-Ökosystem, das eine Profilübertragung anstrebt, veröffentlicht maschinenlesbare Informationen für:

1. **Registerwurzeln:**Identifikatoren für Vermögenswerte, Pools, Wechselkursmethoden, Grenzen und Gebührenrichtlinien oder eine Wurzel, die sie deterministisch löst.
2. **Quittungen:**das Profil, die eingegangenen und ausgehenden Vermögenswerte, die Beträge, die Quotenquelle und das Zeitstempel, die Grenzbilder, die Gebühren, das Inventarergebnis und das Ausführungsergebnis für jeden Sprung.
3. **Betriebssignale:**frischkeitsbegrenzte Informationen über Bestand, Einsatzbegrenzung, Vorfälle und jegliche separat nachgewiesene Erfüllung oder finanzierten Schutz.
4. **Politische Einschränkungen:**zulässige oder verweigerte Gegenparteien, Anlageklassen, Adapter und alle Treuhandverpflichtungen.
5. **Ausfallcodes:**Deterministische Erklärungen für Ablehnung, Ablauf, Begrenzung, Bestand, Politik, Abhängigkeit oder Zwischenfälle.

Ein Profil könnte Abdeckung, Compliance, Schiedsverfahren oder andere Dienstleistungen hinzufügen, ohne sie zu Anforderungen für die grundlegende Kompatibilität von CPP zu machen. Jeder freiwillige Dienst würde seine verantwortliche Partei, seine Autorität, seinen Umfang und seine Bedingungen identifizieren.

### **8.2 Zulassung, Überprüfung und Ausstieg**

Protocol v1.1.0-Verträge sind EVM--kompatibel. Verträge im `src`-Verzeichnis des Protokollrepositoriums werden unter AGPL-3.0 veröffentlicht, mit Ausnahme der identifizierten unmodifizierten Drittanbieterkomponenten, die ihre eigenen Bedingungen behalten. Veröffentlichte Quellen-, ABIs- und Einsatzleitungen unterstützen eine unabhängige Überprüfung, beweisen jedoch nicht alleine eine Prüfung, eine sichere Bereitstellung oder die gesetzliche Einhaltung.

Jede Bereitstellung würde ihre Codeversion, die Herkunft des Builds, Adressen, Controller- und Upgrade-Möglichkeiten, den Auditstatus, die Registrierspiegel sowie jegliche Zeit- oder Pause-Schutzmaßnahmen separat offenlegen.

Eine vorgeschlagene "Fork Kit" könnte Folgendes umfassen:

1. Deterministische Einsatzskripte;
2. Registry-Snapshot und Exportwerkzeuge;
3. ein dokumentierter Prozess zur Wiederverweisung von Route-Dienstleistungen, SDKs und Schnittstellen auf eine neue Registerroot;
4. eine Checkliste des Pool Steward für die sichere Veröffentlichung eines gemeinsamen Registers; und
5. eine Migrations-Checkliste für ausstehende Gutscheine, einschließlich Emittentenbenachrichtigungen, Vorlage- und Erfüllungsfristen, kontinuierlicher Zugriff auf Aufzeichnungen und Rechtsmittel.

Kompatible Gabeln können die Widerstandsfähigkeit verbessern, wenn Gemeinschaften, Genossenschaften, öffentliche Stellen, Verbände, Multisigs oder Dienstleistungsbetreiber eine andere Governance benötigen. Die tatsächliche Kontinuität hängt immer noch von dem Vertragseigentum, den Schlüsseln, den Abhängigkeiten, den Schnittstellen, der Infrastruktur, den gesetzlichen Verpflichtungen und den Dienstleistungen Dritter ab.
