## **5. Von isolierten Fonds zu einem föderierten Netzwerk**

Der aktuelle Protocol v1.1.0 unterstützt die direkte Ausführung durch einen `SwapPool` und bietet nur ein Zitat `SwapRouter`. Es führt keine Multi-Hop-Routes, HTLCs, Escrow-Routes, Charge-Netting oder Cross-Network Clearing durch.

Dieses Kapitel schlägt vor, wie unabhängig regierte Fonds sich koordinieren könnten, ohne ihre eigenen Zulassungs-, Bewertungs-, Begrenzungs-, Gebühren-, Inventar-, Zulassungs- und Governance-Regeln aufzugeben.

### **5.1 Einzelne Austausch- und Erfüllungsmaßnahmen**

Die Föderation könnte den Zugang zum Inventar verbessern, aber sie würde den Gutschein nicht verschmelzen und Lebenszyklen austauschen. Jede Implementierung würde diese Ereignisse separat messen:

1. eine Strecke angegeben;
2. ein oder mehrere Fonds-Swaps werden in der Kette ausgeführt und abgewickelt;
3. ein Inhaber stellt dem Emittenten Gutscheine vor;
4. der Emittent erfüllt die Verpflichtung; und
5. Erfüllte Einheiten werden entladen.

Mehr zitierte oder ausgeführte Routen beweisen keine größere Erfüllung. In den Berichten würden die Kohorte, die Periode, die Vermögenswerte, die Bewertungsmethode und das Zeitstempel, die Ausschlüsse, Korrekturen und die außerhalb der Kette erforderlichen Beweise angegeben.

**Veranschaulichender Weg:** Eine Schule hat Mais-Gutscheine, braucht aber Transportgutscheine. Ein Route-Service identifiziert kompatible Fonds-Inventare. Die Ausführung würde nur erfolgreich sein, wenn jeder separat genehmigte Hop innerhalb seiner Quotegrenzen, Grenzen, Gebühren, Bestand und Politik blieb. Die daraus resultierenden Swaps würden nicht nachweisen, dass einer der beiden Emittenten später seine Gutscheinsverpflichtungen erfüllt habe.

### **5.2 Angebotene Routing- und Rebalancing-Dienste**

Ein zukünftiger Streckendienst könnte zwei verschiedene Tätigkeiten unterstützen.

**Die von den Teilnehmern initiierte Hinrichtung.** Angesichts der Eingangs- und Ausgangsaktiva, einer Menge und der Einschränkungen der Nutzer könnte der Dienst einen Weg identifizieren und die Ausführung vorbereiten. Jeder Hop hätte seinen eigenen verantwortlichen Fonds, Angebot, Zulassung, Gebühren, Limits, Bestand und Quittung. Atombatches, HTLCs und Treuhand sind mögliche zukünftige Ausführungsmöglichkeiten, nicht das aktuelle Protokollverhalten.

**Opt-in Fonds-Wiederausgleich.** Fonds-Verantwortliche könnte Bestandsziele, zulässige Gegenparteien, Anlageklassen, Quote-Abweichungsgrenzen und Periodegrenzen veröffentlichen. Ein verantwortungsbewusster Dienst könnte nach kompatiblen Zyklen oder Ketten suchen und nur die zugelassenen Absichten ausführen.

Eine Neuausgewogenheit wäre ein Opt-in. Ein Fonds könnte Teilnehmerrouten zulassen, während er sich einer ausgehenden Rebalanzierung weigert, oder es könnte nur ausgewählte Vermögenswerte, Gegenparteien und Beträge zulassen. Jeder ausgeführte Sprung würde eine Quittung erzeugen, und alle Dienstleistungsgebühren würden getrennt von Fonds- und Protokollgebühren bekannt gegeben.

#### **5.2.1 Konföderation und Interoperabilität**

Unabhängige Bereitstellungen könnten ihre eigenen Register, Schnittstellen, Routendienste und Richtlinienprofile betreiben und gleichzeitig kompatible Daten- und Empfangsstandards auswählen. Die Profilübergreifende Ausführung würde weiterhin vom Einsatz abhängig bleiben.

Ein kompatibles Profil würde:

- die Kennzeichnung der Registerwurzeln, der Dienstleistungsbetreiber, der Verantwortlichen und der anwendbaren Begriffe;
- Erlaubte und verweigerte Gegenparteien, Vermögenswerte, Adapter und Routen offenzulegen;
- die Genehmigungen, Begrenzungen, Gebühren und Bestandsbeschränkungen jedes teilnehmenden Fonds anwenden;
- die Beweise für die Einreichung von Zitat-zu-Empfangsbestätigungen pro Shop aufbewahren; und
- gestatten, dass ansonsten funktionsfähige Fonds ein anderes Register verlassen oder auswählen können, ohne die Salden oder die Verpflichtungen des Emittenten zu löschen.

Die Kompatibilität kann die verfügbaren Austauschwege erhöhen und die Abhängigkeit von einem Register oder einem Betreiber reduzieren. Sie macht das Netzwerk, CLC App, GEF oder einen anderen Fonds nicht für die Erfüllung eines Emittenten verantwortlich.

### **5.3 Das vorgeschlagene Netz-Rake- und Servicegebührenmodell**

Der aktuelle Protocol v1.1.0 erhebt eine Poolgebühr und, wenn sie konfiguriert ist, eine zusätzliche Protokollgebühr für einen direkten Fonds-Swap. Diese aktuellen Gebühren bleiben unterschiedlich.

F ≈ τ · Q_swap

1. a) **Netzwerkanteil**, definiert als angegebener Anteil der von den teilnehmenden Fonds erhobenen Poolgebühren; und
2. a) **Routing- oder Servicegebühr**, für eine identifizierte zukünftige Dienstleistung berechnet.

Das vorgeschlagene Netz-Rake ist kein zusätzlicher Prozentsatz, der auf den vollen Swapbetrag angewendet wird, nachdem bereits die Poolgebühr gezählt wurde. Für Fonds `p`:

τ_p = f_p · r_p

wo `f_p` der Fonds-Gebührsatz ist und `r_p` der vorgeschlagene Anteil dieser Fonds-Gebühr ist, der dem Netzwerkprogramm zugewiesen wird.

Für einen gemessenen Zeitraum:

- **Brutto-Poolgebühren** sind die Summe der tatsächlich erhobenen Poolgebühren für jeden Fonds;
- **Einnahmen für Netzwerkanteil** sind die angegebenen Anteile der erhobenen Gebühren;
- **Dienstleistungsgebührenrechnungen** die Routing- oder Servicegebühren werden separat erhoben; und
- **Einnahmen für die Programmgebühren** Gleiche Netzkosten und Dienstleistungsgebühren.

Keine Kategorie wird zweimal gezählt. Die aktuellen Protokollgebühren werden nicht berücksichtigt, es sei denn, eine gesondert verabschiedete Politik verweist rechtmäßig die tatsächlichen Protokollgebühren in das zukünftige Programm um.

Bei einer aggregierten Annäherung:

- `Q_swap` ist der Wert der ausgeführten Fonds-Swaps für die definierte Kohorte und Periode; und
- `τ` ist der Effektivsatz des vorgeschlagenen Netzwerkracks und separat identifizierte Servicegebühren über den ausgeführten Swapwert.

Dann:

F ≈ τ · Q_swap

Das ist eine analytische Annäherung, nicht ein Versprechen von Einnahmen. Jeder Eintrag erfordert eine angegebene Kohorte, Periode, Einheit, Bewertungszeitstempel, Ausschlüsse und Korrekturpolitik.

#### **5.3.1 Zahlungsfähige und natürliche Einnahmen**

Die Gebühren können in barwertfähigen fungierbaren Vermögenswerten oder in Gutscheinen und anderen Sachverhältnissen entstehen. In natürlichen Quittungen können nicht automatisch Barkosten oder Deckungsansprüche bezahlt werden. Jeder Austausch oder Umwandlung würde Autorität, verfügbare Bestände, offengelegte Orte, Grenzen und tatsächliche Ausführung erfordern.

`χ` ist der realisierte Anteil an Gebühreneinnahmen, der nach Richtlinienbeschränkungen, fehlgeschlagenen Umrechnungen und Schlupf in Bargeld berechtigt ist. Die für Bargeld verwendbaren Quittungen sind:

F_cash ≈ χ · F

Bei der Haushalts- und Ausgleichsanalyse würden realisierte `F_cash` verwendet, nicht die Bruttoanbietergebühren oder der Nennwert des Inventars in der Art. Ein zukünftiges Programm würde Brutto-Fonds-Gebühren, Netzkosten, Dienstleistungsgebühren, Vermögenszusammensetzung, Umrechnungsergebnisse und nutzbare Einnahmen separat melden.

### **5.4 Angebotene Liquiditätsprogramme**

Ein zukünftig separat dokumentiertes Liquiditätsprogramm könnte Vermögenswerte für bestimmte Fonds oder Routing-Dienstleistungen vergeben. Aktuelle `SwapPool`-Verträge entwerfen keine Fonds-Aktien oder erzeugen automatisch Rückzahlungs-, Auszahlungs-, Vergütungs-, Governance- oder Gewinnrechte.

Jedes Programm würde veröffentlichen:

- die verantwortliche Stelle und die beteiligte Fonds-Verantwortliche;
- die gezahlten Vermögenswerte und die Frage, ob die Übertragung zurückzahlbar, zurückgezogen, gespendet oder vergeben ist;
- Aufbewahrungs- und technische Kontrollregelungen;
- zulässige Verwendungszwecke, Grenzwerte, Verriegelungen, Rückzugsportarten und Verlustzuweisung;
- Gebühren- oder Anreizberechtigung und ob der Betrag Null sein kann;
- Berichterstattung, Konflikte, Beschwerden und Rechtsmittel; und
- die Migration, die Beendigung und die Behandlung der verbleibenden Vermögenswerte und Pflichten.

Zu den wesentlichen Risiken gehören ein Inventar, das schwer auszutauschen oder zu erfüllen ist, eine geringe Cash-Eligibilität, eine Nichterfüllung des Emittenten, Vertrags- oder Anbieterversagen, Governance-Änderungen und Ausstiegsbeschränkungen. Grenzwerte, Reserven, Quittungen und Dashboards können einige Risiken reduzieren oder aufdecken; Sie eliminieren keinen Verlust.

Für eine ex-post-analytische Metrik:

- `ϕ` ist der realisierte Bruchteil der im Rahmen der festgelegten Bedingungen des Programms zugewiesenen Programmgebühreneinnahmen; und
- `K` ist der gemessene Wert der im Programm erfassten Vermögenswerte nach einer angegebenen Methode.

Dann:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Diese Metrik beschreibt den realisierten Gebührenfluss pro gemessenen Programmvermögenswert. Es handelt sich nicht um APY, eine Prognose, eine Dividende oder eine garantierte Rendite. In den Berichten werden das Swap-Volumen, die Erlösungserbringung, die Erfüllung des Emittenten, die Ausbuchung, die Aufbewahrungsdauer, Verluste, Auszahlungen und Gebühreneinnahmen getrennt gehalten.
