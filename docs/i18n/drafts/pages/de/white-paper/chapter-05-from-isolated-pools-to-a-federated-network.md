## **5. Das ist der Fall. Von isolierten Pools zu einem vereinigten Netzwerk**

Der aktuelle Protocol v1.1.0 unterstützt die direkte Ausführung über einen `SwapPool` und bietet nur ein Zitat `SwapRouter`. Es führt keine Multi-Hop-Routes, HTLCs, Escrow-Routes, Charge-Netting oder Cross-Network Clearing durch.

Dieses Kapitel schlägt vor, wie unabhängig regierte Pools sich koordinieren könnten, ohne ihre eigenen Zulassungs-, Bewertungs-, Begrenzungs-, Gebühren-, Inventar-, Zulassungs- und Governance-Regeln aufzugeben.

### **5.1 Getrennte Austausch- und Erfüllungsmaßnahmen**

Die Föderation könnte den Zugang zum Inventar verbessern, aber sie würde den Gutschein nicht verschmelzen und Lebenszyklen austauschen. Jede Implementierung würde diese Ereignisse separat messen:

1. eine Route angegeben;
2. eine oder mehrere Pool-Swaps in der Kette ausführen und abwickeln;
3. ein Inhaber stellt dem Emittenten Gutscheine vor;
4. der Emittent erfüllt die Verpflichtung; und
5. Erfüllte Einheiten werden entladen.

Mehr zitierte oder ausgeführte Routen beweisen keine größere Erfüllung. In den Berichten würden die Kohorte, die Periode, die Vermögenswerte, die Bewertungsmethode und das Zeitstempel, die Ausschlüsse, die Korrekturen und die außerhalb der Kette erforderlichen Beweise angegeben.

**Veranschaulichender Weg:**Eine Schule hat Mais-Gutscheine, braucht aber Transportgutscheine. Ein Route-Service identifiziert kompatible Pool-Inventare. Die Ausführung würde nur erfolgreich sein, wenn jeder separat genehmigte Hop innerhalb seiner Quotegrenzen, Grenzen, Gebühren, Bestand und Politik blieb. Die daraus resultierenden Swaps würden nicht nachweisen, dass einer der beiden Emittenten später seine Gutscheinsverpflichtungen erfüllt habe.

### **5.2 vorgeschlagene Routing- und Rebalancing-Dienste**

Ein zukünftiger Streckendienst könnte zwei verschiedene Tätigkeiten unterstützen.

**Die von den Teilnehmern initiierte Hinrichtung.**Angesichts der Eingabe- und Ausgabevermögen, einer Menge und Nutzerbeschränkungen könnte der Dienst einen Weg identifizieren und die Ausführung vorbereiten. Jeder Hop hätte seinen eigenen verantwortlichen Pool, Angebot, Zulassung, Gebühren, Limits, Bestand und Quittung. Atombatches, HTLCs und Treuhand sind mögliche zukünftige Ausführungsmöglichkeiten, nicht das aktuelle Protokollverhalten.

**Opt-in Pool-Wiederausgleich.**Die Pool Stewards könnten Bestandsziele, zulässige Gegenparteien, Anlageklassen, Quote-Abweichungsgrenzen und Periodegrenzen veröffentlichen. Ein verantwortungsbewusster Dienst könnte nach kompatiblen Zyklen oder Ketten suchen und nur die zugelassenen Absichten ausführen.

Eine Neuausgewogenheit wäre ein Opt-in. Ein Pool könnte Teilnehmerrouten zulassen, während er sich einer ausgehenden Rebalanzierung weigert, oder es könnte nur ausgewählte Vermögenswerte, Gegenparteien und Beträge zulassen. Jeder ausgeführte Sprung würde eine Quittung erzeugen, und alle Dienstleistungsgebühren würden getrennt von Pool- und Protokollgebühren bekannt gegeben.

#### **5.2.1 Konföderation und Interoperabilität**

Unabhängige Bereitstellungen könnten ihre eigenen Register, Schnittstellen, Routendienste und Richtlinienprofile betreiben und gleichzeitig kompatible Daten- und Empfangsstandards auswählen. Die Profilübergreifende Ausführung würde weiterhin vom Einsatz abhängig bleiben.

Ein kompatibles Profil würde:

- Identifizieren Sie die Registerwurzeln, die Dienstleister, die Verantwortlichen und die anwendbaren Begriffe;
- Erlaubte und verweigerte Gegenparteien, Vermögenswerte, Adapter und Routen offenzulegen;
- die Genehmigungen, Begrenzungen, Gebühren und Bestandsbeschränkungen jedes teilnehmenden Pools anwenden;
- die Beweise für die Einreichung von Zitat-zu-Empfangsbestätigungen aufbewahren; und
- die sonstigen funktionsfähigen Pools erlauben, ein anderes Register zu verlassen oder auszuwählen, ohne die Salden oder die Verpflichtungen des Emittenten zu löschen.

Die Kompatibilität kann die verfügbaren Austauschwege erhöhen und die Abhängigkeit von einem Register oder einem Betreiber reduzieren. Es macht das Netzwerk, CLC App, GEF oder einen anderen Pool nicht für die Erfüllung eines Emittenten verantwortlich.

### **5.3 Das vorgeschlagene Modell für Netzwerk- und Dienstleistungsgebühren**

Der aktuelle Protocol v1.1.0 berechnet eine Poolgebühr und, wenn sie konfiguriert ist, eine zusätzliche Protokollgebühr für einen direkten Pool-Swap. Diese aktuellen Gebühren bleiben unterschiedlich.

Für ein zukünftiges Programm könnten:

1. ein **Netzwerk-Rake**, definiert als angegebener Anteil der entrichteten Poolgebühren der teilnehmenden Pools; und
2. eine **Routing- oder Dienstleistungsgebühr**, die für einen identifizierten zukünftigen Dienst erhoben wird.

Das vorgeschlagene Netz-Rake ist kein zusätzlicher Prozentsatz, der nach Berechnung der Poolgebühr auf den vollen Swapbetrag angewendet wird. Für Pool `p`:

τ_p = f_p · r_p

wo `f_p` der Pool-Gebührsatz ist und `r_p` der für das Netzwerkprogramm zugewiesene vorgeschlagene Anteil dieser Pool-Gebühr ist.

Für einen gemessenen Zeitraum:

- **Brutto-Poolgebühren**sind die Summe der tatsächlich erhobenen Poolgebühren für jeden Pool;
- **Einnahmen für Netzwerk-Rake**sind die angegebenen Anteile der erhobenen Gebühren;
- **Dienstleistungsgebührenrechnungen**die Routing- oder Servicegebühren separat erhoben werden; und
- **Einnahmen für die Programmgebühren**Gleiche Einnahmen für die Netzergebnisse plus Einnahmen für die Dienstleistungsgebühren.

Keine Kategorie wird zweimal gezählt. Die aktuellen Protokollgebühren werden nicht berücksichtigt, es sei denn, eine separat verabschiedete Politik verweist die tatsächlichen Protokollgebühren in das zukünftige Programm rechtmäßig um.

Bei einer aggregierten Annäherung:

- `Q_swap` ist der Wert der ausgeführten Pool-Swaps für die definierte Kohorte und Periode; und
- `τ` ist der Effektivsatz des vorgeschlagenen Netzwerkarracks und separat identifizierte Servicegebühren über den ausgeführten Swapwert.

Dann:

F ≈ τ · Q_swap

Das ist eine analytische Annäherung, keine Einnahmeverheißung. Jede Eingabe erfordert eine angegebene Kohorte, Periode, Einheit, Bewertungstempel, Ausschlüsse und Korrekturpolitik.

#### **5.3.1 Zahlungsfähige und natürliche Einnahmen**

Die Gebühren können in barwertfähigen fungierbaren Vermögenswerten oder in Gutscheinen und anderen Sachverhältnissen entstehen. In natürlichen Quittungen können nicht automatisch Barkosten oder Deckungsansprüche bezahlt werden. Eine beliebige Austausch- oder Umrechnung würde Autorität, verfügbare Bestände, offengelegte Orte, Grenzen und tatsächliche Ausführung erfordern.

Lassen Sie `χ` den realisierten Anteil an Gebühreneinnahmen sein, der nach Richtlinienbeschränkungen, fehlgeschlagenen Umrechnungen und Slippage bargeldberechtigt ist. Die für Bargeld verwendbaren Quittungen sind:

Bargeld ≈ χ · F

Budget- und Break-Even-Analyse würde realisierte `F_cash` verwenden, nicht Brutto-notierte Gebühren oder den Nennwert des Inventars. Ein zukünftiges Programm würde Brutto-Pool-Gebühren, Netzergebühren, Servicegebühren, Vermögenszusammensetzung, Umrechnungsergebnisse und nutzbare Einnahmen separat melden.

### **5.4 vorgeschlagene Liquiditätsprogramme**

Ein zukünftig separat dokumentiertes Liquiditätsprogramm könnte Vermögenswerte an bestimmte Pools oder Routing-Dienste vergeben. Aktuelle `SwapPool`-Verträge entwerfen keine Pool-Aktien oder schaffen automatisch Rückzahlungs-, Auszahlungs-, Vergütungs-, Governance- oder Gewinnrechte.

Jedes Programm würde veröffentlichen:

- die zuständige Stelle und die teilnehmenden Pool Stewards;
- die beitragenen Vermögenswerte und ob die Übertragung zurückzahlbar, zurückziehbar, gespendet oder vergeben ist;
- Aufbewahrungs- und technische Kontrollregelungen;
- zulässige Verwendungszwecke, Grenzwerte, Verriegelungen, Rückzugsportarten und Verlustzuweisung;
- Gebühren- oder Anreizberechtigung und ob der Betrag Null sein kann;
- Berichterstattung, Konflikte, Beschwerden und Rechtsmittel; und
- die Migration, die Beendigung und die Behandlung der verbleibenden Vermögenswerte und Pflichten.

Zu den wesentlichen Risiken zählen ein Inventar, das schwer auszutauschen oder zu erfüllen ist, eine geringe Cash-Eligibilität, eine Nichterfüllung des Emittenten, Vertrags- oder Anbieterversagen, Governance-Änderungen und Ausstiegsbeschränkungen. Grenzen, Reserven, Quittungen und Dashboards können einige Risiken reduzieren oder aufdecken; sie eliminieren keinen Verlust.

Für eine ex-post-analytische Metrik:

- `ϕ` ist der realisierte Bruchteil der in den angenommenen Bedingungen des Programms zugewiesenen Programmgebühreneinnahmen; und
- `K` ist der gemessene Wert der im Programm abgedeckten Vermögenswerte nach einer angegebenen Methode.

Dann:

FeeFlow_LP ≈ (φ · F) / K = (φ · τ · Q_swap) / K

Diese Metrik beschreibt den realisierten Gebührenfluss pro gemessenen Programmvermögenswert. Es handelt sich nicht um APY, eine Prognose, eine Dividende oder eine garantierte Rendite. In den Berichten werden das Swap-Volumen, die Erlösungserbringung, die Erfüllung durch den Emittenten, die Entlastung, die Dauer des Aufbewahrens, Verluste, Auszahlungen und Gebührenrechnungen getrennt gehalten.
