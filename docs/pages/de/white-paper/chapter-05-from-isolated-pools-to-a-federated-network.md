# 5. Von isolierten Fonds zu einem föderierten Netzwerk

Das aktuelle Protocol v1.1.0 unterstützt die direkte Ausführung über einen `SwapPool` und stellt einen Solidity-`SwapRouter` bereit, der nur Kursangebote erstellt. Die produktive CLC App und CLC Core koordinieren von Teilnehmern ausgelöste Routen innerhalb derselben Blockchain durch bis zu drei Fonds, indem sie einen signierten Calibur-Wallet-Batch vorbereiten. Die Verträge selbst führen keine mehrstufige Route aus. Der aktuelle Ablauf von App und CLC Core bietet weder Blockchain-übergreifende HTLCs oder Escrow-Routen noch automatischen Bestandsausgleich der Fonds, gebündelte Verrechnung oder Netzwerk-übergreifende Verrechnung.

Dieses Kapitel erklärt den aktuellen Routing-Ablauf für Teilnehmer und grenzt ihn von vorgeschlagener Koordination ab, die neue Befugnisse über Fonds erfordern würde. In beiden Fällen behalten unabhängige Fonds ihre eigenen Regeln für Zulassung, Bewertung, Grenzen, Gebühren, Bestände, Autorisierung und Governance.

## **5.1 Einzelne Austausch- und Erfüllungsmaßnahmen**

Routing kann den Zugang zu Beständen verbessern, vereint aber nicht die Lebenszyklen von Gutschein und Tausch. Messungen sollten diese Ereignisse getrennt halten:

1. eine Strecke angegeben;
2. ein oder mehrere Fonds-Swaps werden in der Kette ausgeführt und abgewickelt;
3. ein Inhaber stellt dem Emittenten Gutscheine vor;
4. der Emittent erfüllt die Verpflichtung; und
5. Erfüllte Einheiten werden entladen.

Mehr zitierte oder ausgeführte Routen beweisen keine größere Erfüllung. In den Berichten würden die Kohorte, die Periode, die Vermögenswerte, die Bewertungsmethode und das Zeitstempel, die Ausschlüsse, Korrekturen und die außerhalb der Kette erforderlichen Beweise angegeben.

**Beispielroute:** Eine Schule besitzt Maisgutscheine, benötigt aber Transportgutscheine. CLC Core kann kompatible Fondsbestände erkennen, die ausgewählte Route in einem festgelegten Block berechnen und die begrenzten Aufrufe für die Wallet der Schule vorbereiten. Die Ausführung gelingt nur, wenn jeder Schritt innerhalb seiner Angebotsgrenzen, Limits, Gebühren, Bestände, des unterstützten Verhaltens und der geltenden Regeln bleibt. Die daraus entstehenden Tausche belegen nicht, dass einer der Herausgeber seine Gutscheinverpflichtungen später erfüllt.

## **5.2 Aktuelles Teilnehmer-Routing und vorgeschlagener Bestandsausgleich**

Zwei Tätigkeiten erfordern unterschiedliche Befugnisse.

**Aktuelle, vom Teilnehmer ausgelöste Ausführung.** Ausgehend von Eingabe- und Ausgabegutscheinen sowie einem Betrag schätzt CLC Core mögliche Routen aus den geeigneten Beständen des Teilnehmers. Für eine ausgewählte Route liest CLC Core die Fonds in einem festgelegten Block, erstellt ein verbindliches Angebot, simuliert den vollständigen Batch und bereitet je Schritt drei Aufrufe vor: Freigabe zurücksetzen, Freigabe erteilen und begrenztes `SwapPool.withdraw`. Der Teilnehmer signiert; der Relayer übermittelt eine Calibur-Transaktion innerhalb derselben Blockchain, bei der `revertOnFailure` aktiviert ist. Ein fehlgeschlagener Aufruf macht sämtliche Routenaufrufe rückgängig. Die App fasst die Transaktion und die Abwicklung jedes Schritts in einem Beleg zusammen.

Jeder Schritt behält seinen eigenen verantwortlichen Fonds, seine Eingaben für Kursangebote, Autorisierung, Gebühren, Grenzen, Bestände und sein Abwicklungsereignis. Die aktuelle App erhebt keine gesonderte Gebühr für den Routing-Dienst. Der aktuelle Ablauf unterstützt App-kompatible EOA-/Calibur-Wallets, jedoch keine Safes oder anderen Smart-Contract-Wallets.

**Freiwilliger Bestandsausgleich der Fonds.** Fonds-Verantwortliche könnten Bestandsziele, zulässige Gegenparteien, Vermögensklassen, Grenzen für Kursabweichungen und Grenzen je Zeitraum veröffentlichen. Ein verantwortlicher Dienst könnte nach kompatiblen Zyklen oder Ketten suchen und nur autorisierte Absichten ausführen.

Ein Bestandsausgleich wäre freiwillig. Ein Fonds kann gewöhnliche Teilnehmer-Routen zulassen, ohne einen Dienst zu ermächtigen, Bestände zum Ausgleich zu bewegen. Ein zukünftiges Mandat könnte nur ausgewählte Vermögenswerte, Gegenparteien und Beträge erlauben. Jeder ausgeführte Schritt würde einen Beleg erzeugen; jede Servicegebühr würde getrennt von Fonds- und Protokollgebühren offengelegt.

Blockchain-übergreifende HTLC- oder Escrow-Ausführung ist ebenfalls vom aktuellen atomaren Batch innerhalb derselben Blockchain zu trennen. Sie würde beschlossene Regeln für Fristen, Abbruch, Kontrolle, Wiederherstellung und Restrisiken erfordern.

### **5.2.1 Konföderation und Interoperabilität**

Unabhängige Bereitstellungen können eigene Register, Benutzeroberflächen, Routing-Dienste und Richtlinienprofile betreiben und zugleich kompatible Daten- und Belegstandards wählen. Die aktuelle öffentliche App verwendet ihr konfiguriertes Register- und Dienstprofil. Profilübergreifende Ausführung bleibt bereitstellungsabhängig.

Ein kompatibles Profil würde:

- die Kennzeichnung der Registerwurzeln, der Dienstleistungsbetreiber, der Verantwortlichen und der anwendbaren Begriffe;
- Erlaubte und verweigerte Gegenparteien, Vermögenswerte, Adapter und Routen offenzulegen;
- die Genehmigungen, Begrenzungen, Gebühren und Bestandsbeschränkungen jedes teilnehmenden Fonds anwenden;
- die Beweise für die Einreichung von Zitat-zu-Empfangsbestätigungen pro Shop aufbewahren; und
- gestatten, dass ansonsten funktionsfähige Fonds ein anderes Register verlassen oder auswählen können, ohne die Salden oder die Verpflichtungen des Emittenten zu löschen.

Die Kompatibilität kann die verfügbaren Austauschwege erhöhen und die Abhängigkeit von einem Register oder einem Betreiber reduzieren. Sie macht das Netzwerk, CLC App, GEF oder einen anderen Fonds nicht für die Erfüllung eines Emittenten verantwortlich.

## **5.3 Das vorgeschlagene Netz-Rake- und Servicegebührenmodell**

Der aktuelle Protocol v1.1.0 erhebt eine Poolgebühr und, wenn sie konfiguriert ist, eine zusätzliche Protokollgebühr für einen direkten Fonds-Swap. Diese aktuellen Gebühren bleiben unterschiedlich.

Der produktive Tausch über eine Route wendet diese aktuellen Gebühren für jeden Schritt gesondert an und weist sie im Angebot und im Beleg aus. Derzeit kommt keine gesonderte Gebühr für den Routing-Dienst hinzu.

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

### **5.3.1 Zahlungsfähige und natürliche Einnahmen**

Die Gebühren können in barwertfähigen fungierbaren Vermögenswerten oder in Gutscheinen und anderen Sachverhältnissen entstehen. In natürlichen Quittungen können nicht automatisch Barkosten oder Deckungsansprüche bezahlt werden. Jeder Austausch oder Umwandlung würde Autorität, verfügbare Bestände, offengelegte Orte, Grenzen und tatsächliche Ausführung erfordern.

`χ` ist der realisierte Anteil an Gebühreneinnahmen, der nach Richtlinienbeschränkungen, fehlgeschlagenen Umrechnungen und Schlupf in Bargeld berechtigt ist. Die für Bargeld verwendbaren Quittungen sind:

F_cash ≈ χ · F

Bei der Haushalts- und Ausgleichsanalyse würden realisierte `F_cash` verwendet, nicht die Bruttoanbietergebühren oder der Nennwert des Inventars in der Art. Ein zukünftiges Programm würde Brutto-Fonds-Gebühren, Netzkosten, Dienstleistungsgebühren, Vermögenszusammensetzung, Umrechnungsergebnisse und nutzbare Einnahmen separat melden.

## **5.4 Angebotene Liquiditätsprogramme**

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
