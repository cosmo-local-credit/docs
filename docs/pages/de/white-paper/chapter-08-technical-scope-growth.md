# 8. Technischer Umfang und Wachstum

Dieses Kapitel trennt den aktuellen produktiven Routing-Dienst von optionalen oder vorgeschlagenen Erweiterungen. Eine hier als aktuell beschriebene Fähigkeit gilt für die öffentliche Bereitstellung von CLC App und CLC Core; sie ist nicht automatisch eine Eigenschaft der Verträge von Protocol v1.1.0 oder einer anderen Bereitstellung.

Der derzeitige öffentliche Einsatz umfasst:

- graphgestützte Erkennung von Gutscheinen, die über kompatible Fonds erreichbar sind;
- verbindliche Angebote auf Grundlage eines festgelegten Blocks für ausgewählte Routen innerhalb derselben Blockchain;
- Berechnung der Fonds- und Protokollgebühren, Mindestausgaben und Fristen je Schritt;
- Simulation des vollständigen Batchs, Signatur durch den Teilnehmer und weitergeleitete Calibur-Ausführung;
- eine Transaktion innerhalb derselben Blockchain, die sämtliche Routenaufrufe rückgängig macht, wenn ein Aufruf fehlschlägt; und
- zusammengefasste Belege und Abstimmung der Abwicklungsereignisse jedes Schritts.

Mögliche Wachstumsbereiche sind:

- zeitgebundene Escrow- oder HTLC-Adapter für Blockchain-übergreifende Ausführung, wenn keine atomare Abwicklung verfügbar ist;
- zusätzliche Register- oder Richtlinienprofile und profilübergreifendes Routing;
- freiwilliger Bestandsausgleich der Fonds und gebündelte Verrechnung;
- Schnittstellen und politische Instrumente für kleine oder persönliche Fonds;
- Überprüfbare Register für Gutscheine, Fonds, Wechselkursmethoden, Limits, Verantwortliche und Gebühren;
- Bereitstellungsspezifische Zahlungsanbieter-Konnektoren, Checkout-Flows und Förderfähigkeitskontrollen;
- Verbindungen zu fungierbaren Vermögenswerten mit externen Liquiditätsanlagen zur Wiederausgleichs- und Zahlungsliquidität; und
- die politische Konversion von Finanzmitteln für übernommene Abdeckungen, Betriebskosten oder Liquiditätsmandate.

Die Preise auf dem Außenmarkt würden nicht bestimmen, was ein Emittent im Rahmen von Gutscheinen schuldet. Ein Fonds könnte eine geschützte externe Referenz für ein fungibles Vermögenswert verwenden, aber seine veröffentlichte Wechselkursmethode, Grenzen, Gebühren und Inventar würden seine Angebote regeln.

## **8.1 Aktueller Routing-Dienst und weitergehende Standards**

**Routenerkennung.** CLC Core verwaltet einen abgestimmten Graphen aus konfigurierten Katalogen, Registerbeziehungen, Fondsparametern, Gebühren, Grenzen, Salden und Blockchain-Ereignissen. CLC Core schätzt, was die aktive Wallet erreichen kann, und kennzeichnet veraltete Daten. Die öffentliche Konfiguration durchsucht Routen mit bis zu drei Schritten. Die Erkennung ist kein ausführbares Versprechen.

**Verbindliches Angebot.** Für eine ausgewählte Route liest CLC Core die beteiligten Fonds in einem festgelegten Block und bildet die unterstützte `SwapPool`-Arithmetik nach. CLC Core weist Fonds- und Protokollgebühren aus, setzt Mindestausgaben je Schritt und eine Frist, bereitet die Wallet-Aufrufe vor und simuliert den vollständigen Batch. Nicht unterstützte Tokens, Kursanbieter, Wallets oder Fondsbedingungen werden abgelehnt.

**Aktuelle Ausführung.** Der Teilnehmer signiert einen Calibur-Batch, der für jeden Schritt das Zurücksetzen und Erteilen der Freigabe sowie eine begrenzte Abhebung enthält. Ein Relayer übermittelt eine Transaktion innerhalb derselben Blockchain, bei der `revertOnFailure` aktiviert ist. Das bewirkt für die aktuelle Route ein Alles-oder-nichts-Verhalten auf Transaktionsebene. Es handelt sich weder um Blockchain-übergreifende Atomizität noch um HTLC- oder Escrow-Routing, automatischen Bestandsausgleich oder Verrechnung.

**Belege und Betrieb.** Die App fasst die Route unter einer Tracking-ID zusammen und erfasst Transaktionsstatus, Reihenfolge der Schritte, Fonds, Tokenpaare, angebotene und abgewickelte Beträge, Fondsgebühren, Protokollgebühren und verbleibende Zwischenbestände. Der Dienst überwacht die Aktualität des Graphen, Ergebnisse der Routensuche und Kursberechnung, Simulationsfehler, Dauer und Korrekturen der Abstimmung sowie ungeklärte oder unbekannte indexierte Einträge. Betriebliche Messdaten belegen keine Erfüllung durch einen Herausgeber.

**Netzwerkprofile.** Ein Client könnte mehr als eine Registerwurzel oder ein Richtlinienprofil unterstützen. Er würde dem Teilnehmer mitteilen, welches Profil, welche Gegenparteien, Adapter, Einschränkungen und verantwortlichen Dienstleister ein Angebot verwendet. Eine profilübergreifende Route müsste die Bedingungen jedes beteiligten Schritts erfüllen.

**Routenrichtlinie.** Ein verantwortlicher Betreiber könnte unsichere Abhängigkeiten oder Gegenparteien ausschließen und Routengrenzen, Aktualitätsanforderungen und Zustandskriterien anwenden. Diese Signale würden eine Entscheidung unterstützen, aber weder Erfüllung noch Schutz vor Verlust garantieren.

**Gebühren und Grenzen.** Das aktuelle Angebot weist für jeden Schritt Fondsgebühren und etwaige zusätzliche Protokollgebühren aus. Die öffentliche App erhebt derzeit keine gesonderte Gebühr für den Routing-Dienst. Jede zukünftige Servicegebühr würde gesondert offengelegt. Die Ausführung lehnt abgelaufene Angebote oder überschrittene Grenzen ab.

**Blockchain-übergreifende Atomizität und Wiederherstellung.** Kann eine zukünftige Route den aktuellen atomaren Batch innerhalb derselben Blockchain nicht verwenden und setzt stattdessen HTLCs oder Escrow ein, würde der Dienst Fristen, Abbruchwege, verantwortliche Kontrolleure, Vorfallverfahren und verbleibende Risiken offenlegen.

**Vorgeschlagene gebündelte Verrechnung und Bestandsausgleich.** Ein freiwilliger Dienst könnte Absichten zum Bestandsausgleich erfassen und nach kompatiblen Zyklen oder Ketten suchen. Er würde:

1. einen maschinenlesbaren Beleg veröffentlichen, der ausgeführte Zyklen, Vermögenswerte, Beträge, Bewertungszeitpunkte und Gebühren nennt;
2. beschlossene Grenzen je Zeitraum und Richtlinien für Gegenparteien durchsetzen;
3. Aktivitäten ablehnen, die gegen Autorisierung, Grenzen oder verfügbare Bestände eines beteiligten Fonds verstoßen; und
4. deterministische Eingaben und Belege für Prüfung und Streitbehandlung aufbewahren.

**SDK- und Schnittstellenanforderungen.** Eine wiederverwendbare Routing-Integration sollte eine deterministische Zuordnung von Angebot zu Beleg, Invariantenprüfungen je Schritt, verständliche Fehlercodes und prüffreundliche Protokolle bereitstellen. Die aktuelle produktive Implementierung von App und CLC Core bietet diese Funktionen für ihr eigenes Profil. Der Solidity-`SwapRouter` von Protocol v1.1.0 bleibt auf Kursangebote beschränkt und führt die Route nicht aus.

### **8.1.1 Mindestkonföderationskompatibilitätsspezifikation**

Ein Fonds-Ökosystem, das eine Profilübertragung anstrebt, würde maschinenlesbare Informationen für:

1. **Registerwurzeln:** Identifikatoren für Vermögenswerte, Fonds, Wechselkursmethoden, Grenzen und Gebührenrichtlinien oder eine Wurzel, die sie deterministisch löst.
2. **Einnahmen:** das Profil, die eingegangenen und ausgehenden Vermögenswerte, die Beträge, die Quotenquelle und das Zeitstempel, die Grenzbilder, die Gebühren, das Inventarergebnis und die Ausführungsergebnisse für jeden Sprung.
3. **Betriebssignale:** Frischheitsbegrenzte Informationen über Bestand, Einsatzbegrenzung, Vorfälle und jegliche separat nachgewiesene Erfüllung oder finanzierten Schutz.
4. **Richtlinienbeschränkungen:** zulässige oder verweigerte Gegenparteien, Anlageklassen, Adapter und alle Treuhandverpflichtungen.
5. **Ausfallcode:** Deterministische Erklärungen für Ablehnung, Ablauf, Begrenzung, Bestand, Politik, Abhängigkeit oder Zwischenfälle.

Ein Profil könnte Abdeckung, Compliance, Schiedsverfahren oder andere Dienstleistungen hinzufügen, ohne sie zu Anforderungen für die grundlegende Kompatibilität von CPP zu machen. Jeder optionelle Dienst würde seine Verantwortliche, seine Autorität, seinen Umfang und seine Bedingungen identifizieren.

## **8.2 Lizenzierung, Überprüfung und Ausstieg**

Protocol v1.1.0-Verträge sind EVM--kompatibel. Verträge im `src`-Verzeichnis des Protokollrepositoriums werden unter AGPL-3.0 veröffentlicht, mit Ausnahme der identifizierten unmodifizierten Drittanbieterkomponenten, die ihre eigenen Bedingungen behalten. Veröffentlichte Quell-, ABI- und Einsatzleitungen unterstützen eine unabhängige Überprüfung, beweisen jedoch nicht alleine eine Prüfung, eine sichere Bereitstellung oder die gesetzliche Einhaltung.

Jede Bereitstellung würde ihre Codeversion, die Herkunft des Builds, Adressen, Controller- und Upgrade-Möglichkeiten, den Auditstatus, die Registrierspiegel sowie alle Schutzvorkehrungen zur Zeitversperrung oder Pause gesondert offenlegen.

Eine vorgeschlagene **Gabelgerät** könnten Folgendes umfassen:

1. Deterministische Bereitstellungsschriften;
2. Registry-Snapshot und Exportwerkzeuge;
3. ein dokumentierter Prozess zur Wiederverweisung von Route-Dienstleistungen, SDKs und Schnittstellen auf eine neue Registerroot;
4. eine Fonds-Verantwortliche Person-Checkliste für das sichere Verlassen eines geteilten Registers; und
5. eine Migrations-Checkliste für ausstehende Gutscheine, einschließlich Emittentenbenachrichtigungen, Vorlage- und Erfüllungsfristen, weiterhin Zugang zu Aufzeichnungen und Rechtsmittel.

Kompatible Gabeln können die Widerstandsfähigkeit verbessern, wenn Gemeinschaften, Genossenschaften, öffentliche Stellen, Verbände, Multisigs oder Dienstleistungsbetreiber eine andere Governance benötigen. Die tatsächliche Kontinuität hängt immer noch vom Vertragseigentum, den Schlüsseln, den Abhängigkeiten, den Schnittstellen, der Infrastruktur, den gesetzlichen Verpflichtungen und den Dienstleistungen Dritter ab.
