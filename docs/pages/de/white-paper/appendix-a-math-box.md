## A.  Das vorgeschlagene Mess- und Gebührenmodell

Dieser Anhang definiert einen vorgeschlagenen Messrahmen. Protocol v1.1.0 erfasst nicht die Erfüllung des Emittenten, die reale Ausbuchung oder jedes nachstehend erforderliche Datenfeld.

### Definitionen von Ereignissen und Bestand

Für die Gutscheinklasse *j*, Kohorte oder Periode *t* und eine offensichtliche Bewertungsmethode *m*:

- `O_{j,t,m}`: Wert der ausstehenden förderfähigen Verpflichtungen an der Messgrenze.
- `X_{j,t,m}`: Wert der im Zeitraum abgeschlossenen Fonds-Swaps.
- `P_{j,t}`: Einheiten, die dem Emittenten gültig zur Rückzahlung vorgelegt werden.
- `F_{j,t}`: präsentierte Einheiten mit separat nachgewiesener Emittentenverwirklichung.
- `G_{j,t}`: ausgefüllte Einheiten mit einem Entladungsregister, der eine Wiederverwendung verhindert.

`O` kann nicht allein aus dem Tokenangebot abgeleitet werden. Eine Messrichtlinie muss den verantwortlichen Emittenten identifizieren und gegebenenfalls das Emittenten-Inventar, verbrannte Einheiten, verfallene Einheiten, entlassenen Einheiten, Prüfguthaben, nicht zugängliche Salden und Token ausschließen, deren Bedingungen keine ausstehende Verpflichtung von Dritten erzeugen.

Jede bewertete Maßnahme muss die Einheit, die Quelle, die Bewertungsmethode, den Zeitstempel und die Behandlung divergenter Poolkurse veröffentlichen. Eine Übertragung auf der Kette kann `X` oder Beweise für die Vorlage unterstützen; es stellt nicht allein `F` oder `G` fest.

### Kohortenbasierte Erfüllungsmaßnahmen

Für eine Kohorte von gültigen Erlösungsvorlagen:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Verwenden Sie die gleiche geschlossene oder reife Kohorte in jedem Zähler und Nenner. Berichte, die abgelehnt, zurückgezogen, ausgelaufen, bestritten, teilweise erfüllt, korrigiert und noch offen sind.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

Erfüllungslatenz misst den Emittentendienst nach der Präsentation. Die Aufbewahrungsdauer ist eine separate Maßnahme und darf nicht als Rückzahlungslatenz bezeichnet werden.

### Unterschiedliche Geschwindigkeitsmessungen

Eine vorgeschlagene Verpflichtungsentlastungsgeschwindigkeit darf nur berechnet werden, wenn `O` und erfüllter Wert dieselbe Bewertungsmethode verwenden:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Eine Fonds-Swap-Aktivitätsmaßnahme ist getrennt:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Kein der beiden Werte beweist soziale Auswirkungen, Emittentenkapazität, Rentabilität oder Cash Convertibility.

### Angebotene Netzerlöse

Lassen Sie:

- `PF_t` sind Brutto-Polargebühren, die während des Zeitraums entstanden sind;
- `NR_t` ist das vorgeschlagene Netzwerkanteil, das tatsächlich als offenbarter Anteil dieser Fonds-Gebühren erhalten wurde;
- `RF_t` sind getrennt vorgeschlagene Routing- oder Servicegebühren, die tatsächlich erhoben wurden; und
- `χ_t` ist der gemessene Anteil der eingegangenen Einnahmen, der für eine angegebene Verwendung in Bargelddenomination nach Kosten und politischen Einschränkungen berechtigt und konvertierbar ist.

Aus dem vorgeschlagenen Netzbudget:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Fügen Sie `PF_t` nicht zu `NR_t` hinzu: Der Rake ist eine Übertragung von Brutto-Fonds-Gebühren und würde sonst zweimal gezählt werden. Der aktuelle Protocol v1.1.0 unterstützt stattdessen eine zusätzliche Protokollgebühr; seine Einnahmen müssen getrennt von diesem vorgeschlagenen Rake-Modell gemeldet werden.
