## **11. Governance-Mechanismen**

Dieses Kapitel schlägt eine Governance-Vorlage vor. Es stellt nicht dar, dass die aktuelle CLC App governance-token-voting, timelocks, geteilte versicherung, einen anspruchsprozess oder jede nachstehend beschriebene kontrolle verwendet. Jeder Einsatz muss seine tatsächlichen Entscheidungsträger, Behörden, Verträge, Prozesse und Politiken identifizieren.

- **Verfassungswerte:** Für die Menschen sorgen, für die Umwelt sorgen, Gerechtigkeit, Gegenseitigkeit, Nicht-Dominance und Widerstandsfähigkeit.
- **Typen von Vorschlägen:** Änderungen der Gebühren, der Grenzwerte und der Indizes; Liquiditätsmandate; Auflistungen und Entfernungen von Fonds; Wahlrechtliche Abdeckungsentscheidungen; und Parameterschutzschutze.
- **Rechenschaftspflichtiger Prozess:** Einnahme → Bewertung → Risikoüberprüfung → Zulassung → Zeitverbindung gegebenenfalls → Ausführung. Die Genehmigung kann von Verwaltern, Genossenschaften, öffentlichen Stellen, Verbänden, Multisigs, auf der Kette abgestimmten Abstimmungen oder einer anderen offengelegten und rechenschaftspflichtigen Struktur erfolgen.
- **Genehmigungsschwellen:** die nach Aktionsklasse parametriert sind, wobei höhere Schwellenwerte für Veränderungen des Wertindex, Notfallbefugnisse und andere kritische Maßnahmen gelten.
- **Delegation:** Wahlrechtliche Delegierung mit öffentlichen Mandaten, Konfliktveröffentlichungen und Rückruf.
- **Streckenschalter:** Notfallpausen mit festgelegten Kriterien, autorisierten Betreibern, Wiederholungsbedingungen und erforderlichen Post-Mortems.
- **Transparenz:** veröffentlichte Änderungen und Flüsse mit separaten Nachweisen für die Swap-Abwicklung, die Erfüllung durch den Emittenten, die Reserven, die Grenznutzung, die Routing und die Bürgen.

**Registrierungsführung.** Eine CPP--kompatible Bereitstellung kann Entdeckungsregister für Gutscheine, Token und Fonds aufbewahren. Berechtigte Kontrollen können Registrierungselemente durch den offenbarten Governance-Prozess des Einsatzes hinzufügen, aktualisieren, suspendieren oder entfernen. Die Entfernung des Registers beeinflusst die Entdeckung und das Routen durch dieses Register; es löscht nicht von selbst ein Token, ändert den Saldo eines Inhabers, erfüllt die Verpflichtung eines Emittenten nicht oder deaktiviert einen ansonsten funktionalen Vertrag nicht.

Veröffentlichte Registrierungsregeln sollten den Status bedingungsmäßig gestalten und wiederholte Nichterfüllung, Betrug oder falsche Darstellung, unsicheres Vertragsverhalten oder anhaltendes Verstoß gegen veröffentlichte Grundsätze als Gründe für die Aussetzung oder Entfernung feststellen können. Gegebenenfalls sollte das Verfahren eine Benachrichtigung, eine Möglichkeit zur Rechtsbehelfung und einen Beschwerdeweg bieten. Für die Notfallentfernung sollte ein öffentlicher Vorfallbericht sowie eine automatische Überprüfung oder Sonnenuntergang erforderlich sein.

**Verbotene Auflistungen.** Unter dieser Vorlage würde ein Register nicht zugeben:

1. Instrumente, die die ökologische Zerstörung über die vereinbarten Grenzen hinaus direkt finanzieren oder fördern, Gewalt oder Waffenverwertung, Zwangsgewinnung oder systemische Missbrauch; oder
2. eine Gutscheinklasse, die keine klaren Vorlage- und Erfüllungsbedingungen, Rechenschaftspflicht und Abhilfemaßnahmen enthält.

Die verbotene Liste würde nur durch die angenommenen kritischen Maßnahmen-Schwelle und -Zeit eingeschränkt, die in Anlage D als Q3 + T3 dargestellt sind, versionisiert, öffentlich überprüfbar und veränderbar sein.

### **11.1 Wechselkurs- und Grenzregelung**

**Zeitverschiebungen.** Eine Einführung nach dieser Vorlage würde die Wechselkursmethoden ändern und die Grenzparameter nur nach einer öffentlichen Zeitversperrung separat implementieren. Ein Notweg würde einen separat offengelegten Zulassungsprozess verwenden und einen automatischen Sonnenuntergang oder eine Überprüfung umfassen.

**Genehmigungsschwellen.** Die Vorlage schlägt höhere Zulassungsschwellen für Änderungen der Wertindexbasis und Änderungen der globalen Grenzstufe, Zwischenschwellen für Änderungen von Fonds-spezifischen Drittanbietern und Standardschwellen für routinemäßige Gebührenänderungen vor.

**Veröffentlichtes Feed.** Eine teilnehmende Bereitstellung würde für jeden Fonds die Indexvariablen in der Kette, die Orakelquellen oder -mediane, die Aktualisierungskadenz, die Grenzfenster und -Kappen sowie die Ausfallmodi oder sichere Konstanten veröffentlichen.

**Notfallpausenkriterien.** Ein teilnehmender Einsatz würde Bedingungen wie einen Oracle-Ausfall, eine hohe Grenznutzung in Kombination mit Ausfällen bei der Erfüllung oder einem invarianten Ausfall, zusammen mit Erfolgsuntersuchungen und Anforderungen für die Überprüfung nach dem Vorfall, vorher erklären.

**Beispiel öffentlicher Index-Feed für einen Fonds und einen Gutschein**

- **Symbol:** beispielsweise `Maize_50kg@IssuerY`.
- **Referenzinheit:** Index-Einheit (IUX).
- **Veröffentlichter Wert:** 30.000 IUX.
- **Quelle:** Median der identifizierten Quellen, wie z. B. eine lokale Marktumfrage, das Ministeriumblatt und die Einsatzbasis.
- **Aktualisierungsrate:** täglich um 18:00 Uhr EAT, mit einer 24-Stunden-Zeitsperre.
- **Ausfallmodus:** einfrieren bei dem letzten gültigen Wert, eine offenbarte Grenzrichtlinie anwenden und nach einem 72-stündigen Ausfall pausieren.
- **Die Begründung:** veröffentlichte Notizen und eine Änderungsaufzeichnung der vorherigen Aktualisierung.
- **Unterzeichner:** offenbarte Multisig-Adressen und Genehmigungsschwelle.

### **11.2 Das vorgeschlagene Versicherungsfondslaufbuch**

**Nur optionales Design.** Dieses Runbook gilt nur für eine Bereitstellung, die ausdrücklich einen Versicherungsfonds angenommen und finanziert hat und die abgedeckten Ereignisse, berechtigte Antragsteller, verantwortliche Stelle, Vermögenswerte, Grenzen, Ausschlüsse, Beweisvorgaben, Verfahren und Regelungsbedingungen veröffentlicht hat. Weder die aktuelle CLC App noch GEF bieten eine Abdeckung, nur weil dieses Design im Weißbuch erscheint.

**Wahrscheinliche Auslöser.** Eine verabschiedete Politik könnte die Nichterfüllung definierter Emittenten, einen Fonds-Reservenmangel oder einen Verlust durch Brücken- oder Treuhandvergütung abdecken. Ein technischer Vorfall qualifiziert sich nicht automatisch. die anwendbare Politik kontrollieren würde.

**Beurteilung.** Die zuständige Stelle würde Transaktionsergebnisse, Bestandsguthaben, Bürgschaftsanleihen, Aufzeichnungen über die Einreichung von Erlösungen, Antworten der Emittenten und andere erforderliche Beweise vereinbaren und dann eine mit der Privatsphäre und dem Recht übereinstimmende Vorfallsaufzeichnung veröffentlichen.

**Illustrativer Verlust Wasserfall.** Wenn jede Schicht existiert und rechtmäßig gilt, könnte eine Politik: (1) verantwortliche Emittenten-Anleihen oder Bürgschaftsanteile → (2) Fonds-Level-Reserven → (3) ein vorgeschlagener Netzversicherungsfonds → (4) eine vorübergehende Reduktion auf einen optionalen Deckungsanspruch verwenden, nur wenn die vorhandenen Bedingungen und das anwendbare Recht dies ausdrücklich zulassen → (5) rechtmäßige Rückforderung für nachgewiesene Betrug oder Missbrauch.

Eine Berichtigung der Abdeckung reduziert nicht die zugrunde liegende Gutschriftverpflichtung eines Emittenten oder ändert einen Überschuss auf der Kette, es sei denn, gültige vorhandene Bedingungen und das anwendbare Recht erlauben dieses Ergebnis ausdrücklich und die erforderliche Einwilligung des Inhabers wird erhalten.

**Grenzen und Ausgrenzungen.** Die veröffentlichte Berichterstattung würde Höchstwerte, zulässige Vorlagen, Beweise, Anspruchsfenster, ausgeschlossenen Strecken oder Ereignissen, geografische Beschränkungen und die Behandlung erschöpfter Reserven definieren. Eine Auszahlung könnte nach Erreichen der geltenden Grenzen null sein.

**Ein illustrativer Erholungsplan.** Bei Annahme und Veröffentlichung:

1. Ansprüche würden zunächst vom zuständigen Emittenten oder Bürgschaftsanleihen, anschließend aus den geltenden Poolreserven und anschließend aus dem vorgeschlagenen Netzversicherungsfonds stammen;
2. jede Verringerung auf einen optionalen Deckungsanspruch würde auf die vorherigen Deckungsbedingungen und das anwendbare Recht beschränkt sein, bis zu der veröffentlichten Vorfallobergrenze;
3. Ein Rückgewinnungsplan könnte einen angegebenen Anteil des zurückgewinnten Werts für einen angegebenen Zeitraum anwenden, danach würde ein verbleibender gedeckter Mangel zu einem registrierten Verlust bei einem öffentlichen Post-Mortem werden; und
4. jede Entscheidung würde eine Quittung mit dem Vorfall ID, betroffenen Ansprüchen und Gutscheinen, Entscheidung, Erholungsplan und Beschwerdefenster ergeben.

### **11.3 Garantienrahmen**

Dieser Abschnitt unterscheidet zwischen der Emittentenverantwortung, optionalen Fonds-Schutzmaßnahmen und Garantien von Dritten. Fonds können sich auf Kurations-, Bedingungen- und ausdrücklich angebotene Schutzbedingungen bewerben, ohne dass das CLC App, CPP, GEF oder ein breiteres Netzwerk automatisch einen Gutschein garantiert.

**Die Ausgangsverantwortung des Emittenten**

- Jeder Gutschein liegt in erster Linie in der Verantwortung des Emittenten. Der Emittent verpflichtet sich, das angegebene Gut, die angegebene Dienstleistung oder das gesetzliche Bargeldäquivalent gemäß seinen veröffentlichten Bedingungen zu liefern.
- Die Emittenten würden veröffentlichen, wer den Gutschein vorlegen kann, was die Erfüllung bedeutet, wo und wann er verfügbar ist, welche Beweise erforderlich sind und welche Rechtsmittel gelten.
- Wenn ein Emittent nicht erfüllt, ist der Emittent die Hauptverantwortliche. Fonds- oder Netzschutzmaßnahmen gelten nur, wenn sie getrennt angenommen, finanziert und bekannt gegeben werden.

**Optional Fonds-Schutze**

Ein Fonds-Verantwortliche Person kann sich entscheiden, den zugelassenen Gutscheinen einen eng definierten Schutz hinzuzufügen. Es ist nicht automatisch und müsste die verantwortliche Partei, die Finanzierung, die zulässigen Veranstaltungen, die Höchstgrenzen, die Fenster, die Beweise, die Ausschlüsse und die Rechtsmittel in den Metadaten des Fonds und den anwendbaren Bedingungen identifizieren.

Beispiele für Schutztypen sind:

1. **Abdeckung von Reservevermögen:** nach einer verifizierten Nichtverfüllung durch den Emittenten zahlt das zuständige Poolunternehmen einen festgelegten Betrag in einem bezeichneten Reservevermögen, wobei die veröffentlichte Obergrenze und die verfügbaren finanzierten Reserven berücksichtigt werden.
2. **Schaltfenster:** Nach einem Qualifikationsereignis bietet der Fonds einen zeitlich begrenzten Swapweg in das vorherige oder ein anderes genehmigte Vermögenswert an, unter Berücksichtigung von Obergrenzen und Bestandsauflagen. Dies ist ein lagerabhängiger Liquiditätsschutz, nicht ein Versprechen, dass jeder Swap reversibel ist.
3. **Alternative Erfüllung** die zuständige Partei organisiert einen zugelassenen Ersatzdienstleister innerhalb einer veröffentlichten Menge- oder Wertobergrenze.
4. **Schutz des Wechselkursbands:** für ausgewählte Gutscheinklassen bietet ein Fonds nur die Berichtigung der Abdeckung oder die Rückzahlungsregelung an, die in seinen vorhandenen Bedingungen angegeben ist. Dies verringert die zugrunde liegende Gutscheinverpflichtung des Emittenten nicht.

**Mögliche Finanzierungsquellen**

- **Schuldverschreibung des Emittenten** Sicherheiten, die vom Emittenten hinterlegt oder in einer offensichtlichen Reserve gehalten werden und nach einem überprüften geschützten Ereignis verfügbar sind.
- **Poolreserve:** Vermögenswerte, die von der zuständigen Fonds-Einheit kontrolliert werden und den von ihr angekündigten Schutzmaßnahmen zugeteilt werden.
- **Schuldverschreibung durch Drittanbieter** Sicherheiten, die von einem identifizierten externen Bürgen für angegebene Emittenten, Gutscheinklassen oder Ereignisse abgewickelt wurden.

Die Beteiligung der Bürgschaft würde den veröffentlichten Förderkriterien, der Anleihungsgröße, den Konzentrationsgrenzen, der Entscheidungsbefugnis und den rechtmäßigen Durchsetzungsbestimmungen entsprechen.

**Anspruchsverfahren**

Eine verabschiedete Politik würde überprüfbare Auslöser definieren, wie z. B. eine nach einer gültigen Rückzahlung vorgelegten Frist für die Erfüllung, eine verifizierte Insolvenz des Emittenten, eine abgedeckte Brücke oder ein Verwahrungsversagen oder ein offiziell deklarierter Vorfallzustand. Es würde auch definieren:

- die Art und Weise, wie ein Teilnehmer einen Anspruch eröffnet und die erforderlichen Vorlage- und Erfüllungsnachweise vorlegt;
- wer die Bedingungen des Gutscheins, die Antworten der Emittenten und die technischen Aufzeichnungen überprüft;
- die Entscheidung und die Beschwerdefenster; und
- der zugelassenen Auszahlungsweg, die Vermögenswerte, die Höchstmengen und die Quittung.

Die Einnahmen aus Emittenten, Schiedsverfahren oder rechtlicher Durchsetzung würden die geltenden Anleihen oder Reserven gemäß der veröffentlichten Richtlinie nachfüllen, bevor sie für den vorgeschlagenen CLC Network Fonds-Swap-Zugriff verwendet werden.

**Erforderliche Angaben**

Für jede abgedeckte Fonds- und Voucherklasse veröffentlicht die zuständige Partei:

- ob ein Bürger abwesend, optional oder notwendig ist;
- Anleihen- oder Reservegrößen und Konzentrationsdeckungen;
- die Schutztypen, Vermögenswerte, Kappen, Fenster und Ausschlüsse;
- Fristen für Vorlage, Erfüllung, Anspruch und Beschwerde; und
- Ein klares Statement darüber, wer was garantiert und was nicht.

**Kurationsprinzip.** Fonds-Verantwortliche und die zuständigen Rechts- oder Verwaltungsstrukturen sind für die von ihnen angekündigten Schutzmaßnahmen verantwortlich. Eine CPP--kompatible Implementierung kann Normen, Registrierungen oder optional geteilte Richtlinien bereitstellen, aber weder CLC noch GEF garantieren automatisch Gutscheine oder Fonds.

### **11.4 Schutzschutzschutzschutzschrauben**

Nach dieser Vorlage sind folgende kritische Maßnahmen erforderlich, die die höchste genehmigungsstufe und eine lange zeitliche Frist erfordern:

1. Änderung des vorgeschlagenen Gebührenwasserwassers, einschließlich seiner Abdeckung und der Prioritäten der Kernbetriebe;
2. Änderung der Wurzeln des kanonischen Registers;
3. Änderung des Deckungsbereichs, der Anspruchsobergrenzen oder der Entscheidungsbefugnis;
4. die Erweiterung der Notfallpausenbefugnisse; oder
5. die in diesem Papier festgelegten Verpflichtungen zur Forkabilität, Transparenz oder Fonds-Souveränität zu schwächen.

### **11.5 Fork- und Ausgangsverfahren**

Wenn die Governance erfasst oder die Werte wesentlich gedreht werden, könnten Gemeinschaften, Fonds-Verantwortliche und Betreiber versuchen, die Netzwerk-Governance-Schicht zu entfernen. Die Kontinuität der zugrunde liegenden Fonds und Gutscheine würde von den eingesetzten Verträgen, Schlüsseln, Schnittstellen, Infrastrukturen, Dienstleistungen Dritter und den geltenden Verpflichtungen abhängen.

Ein Ausgangsprozess könnte:

1. **Veröffentlichen Sie einen Schnappschuss:** Exportieren Sie die ausgewählten Register, Gutscheine, Werte, Grenzwerte und Gebührenrichtlinien und veröffentlichen Sie dann einen signierten Snapshot-Hash.
2. **Umverteilung von Governance-Dienstleistungen:** neue Registerwurzeln, Routendienste und alle angenommenen Gebühren- oder Abdeckungsmodule unter einer neuen verantwortungsvollen Struktur einrichten.
3. **Neuanmeldung:** erlauben Fonds-Verantwortliche, sich zu entscheiden, indem sie ihre Fonds-Adressen unter der neuen Wurzel registrieren, ohne dass die Inhaber ansonsten funktionelle Gutscheine migrieren müssen.
4. **Wiederverleihungskunden:** die neue Root als auswählbares Netzwerkprofil in SDKs und Schnittstellen hinzufügen, wobei alle Standardänderungen im Rahmen des offenbarten Governance-Prozesses vorgenommen werden.
5. **Verwalten Sie eine Brückenzeit:** bei der Sicherung kompatibler Routen und bei der Verweigerung von Routen, die gegen die Regeln des neuen Profils verstoßen.

Das Entwurfsziel ist, dass das Verlassen eines kanonischen Registers die ansonsten funktionsfähigen lokalen Fonds nicht deaktiviert. Die tatsächliche Kontinuität bleibt vom Einsatz abhängig; Die Föderation ist eine Opt-in-Entdeckungs- und Koordinationsschicht.
