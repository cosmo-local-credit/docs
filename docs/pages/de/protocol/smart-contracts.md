# Smart Contracts

Diese Seite beschreibt die wichtigsten Fonds- und Voucherverträge im Protokoll v1.1.0. Vertragsverhalten bietet eine Abwicklungsmechanik; es ersetzt nicht die Angaben des Emittenten, die Fonds-Regeln oder andere Transaktionsbedingungen, die für eine bestimmte Verwendung gelten.

Gebrauch [Konzepte und Begriffe](/de/introduction/concepts) die Regelung Commitment-Fonds von `SwapPool` zu unterscheiden und die Swap-Abwicklung von der Einreichung, Erfüllung und Ausbuchung der Erlösung zu unterscheiden.


## Gutschein (`GiftableToken`)

`GiftableToken` ist ein ERC20-Token mit Mechanik, die ein Emittent für einen Gutschein verwenden kann:

- **Zulassung** Der Eigentümer kann Schriftsteller benennen, die Token mit `mintTo` ausstellen können.
- **Wahlmäßige Ablaufzeit** Ein Ablauf von `0` bedeutet kein Vertragsablauf. Ansonsten kehren die Übertragungen, das Mengen und das Verbrennen am oder nach dem konfigurierten Zeitstempel zurück. Jeder kann den Terminal `expired`-Zustand beibehalten, indem er `applyExpiry` direkt anruft.
- **Bereitstellungsrechnungslegung** `totalMinted` und `totalBurned` weisen kumulative Lieferaktivitäten auf. Die Eigentümerfunktion `burn` verbrennt Token, die von der Adresse des Eigentümers gehalten werden.

Der Token-Vertrag macht **nicht** die Waren oder Dienstleistungen des Emittenten identifizieren, einen Rückzahlungswert festlegen, die Kapazität nachweisen oder Bargeldumrechnung versprechen. Eine `GiftableToken` wird nur durch die gesondert veröffentlichten Bedingungen und Verhaltensweisen des Emittenten zu einer einlösbaren Verpflichtung. Die Emittenten sind weiterhin dafür verantwortlich, diese Bedingungen genau zu beschreiben und zu beachten.


## Commitment-Fonds (`SwapPool`)

`SwapPool` ist ein Token-Kopf und Swap-Settlement-Engine. Obwohl er ERC20 Metadaten für den Fonds-Namen, das Symbol und die Dezimalzahlen offenlegt, mintet der v1.1.0-Vertrag keine Fonds-Share-Token. Die Liquidität wird durch die Übertragung von Token in den Fonds geliefert, und der Vertragsinhaber kann die verfügbare Liquidität abheben.

### Zusammensetzung und optionale Abhängigkeiten

| Konfiguration | Wenn nicht eingestellt | Versiegelbarer Adressplatz |
| --- | --- | --- |
| `tokenRegistry` | Jedes Token kann den Bewältigungscheck des Fonds bestehen. | - Ja . |
| `tokenLimiter` | Die Einlagen haben keine Vertragsgrenze für den Saldo | - Ja . |
| `quoter` | Die Roh-Input-Menge wird als die Roh-notierte Output-Menge behandelt | - Ja . |
| `feePolicy` | Die Poolgebühr ist null . | - Ja . |
| `feeAddress` | Die Poolgebühren werden für einen benannten Empfänger nicht als abziehbare Gebühren erhoben. | - Ja . |
| `protocolFeeController` | Keine Protokollgebühr erhoben wird | - Nein . |

Die fünf Siegelbits sperren die aktuellen Adressen `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry` und `tokenLimiter` dauerhaft gegen ihre entsprechenden Setter ein. `protocolFeeController` und `feesDecoupled` sind Initialisierungswerte und gehören nicht zu diesen fünf Bits.

Das Versiegeln eines Adressplatzes vereinfacht den Vertrag an dieser Adresse nicht. Eine versiegelte Registrierung, ein Begrenzungsdatum, eine Quote oder eine Gebührenrichtlinie und ein konfigurierter Protokoll-Gebühren-Kontroller können sich immer noch ändern, wenn ihre eigene Governance dies zulässt. Der Proxy-Administrator von ERC-1967 kann auch die Fonds-Implementierung aktualisieren. Eine bedeutende Unveränderbarkeitsanspruchung hängt daher von der Governance des Fonds-Inhabers, des Proxy-Administrators und jeder konfigurierten Abhängigkeit ab.

### Swap-Abwicklung

Bei einem Swap `SwapPool`:

1. Überprüft, ob Eingabe- und Ausgabe-Token das optionelle Register überschreiten und prüft den angeforderten Eingabe gegen die optionelle Fonds-Balance-Grenze.
2. Zieht das Eingabe-Token vom Anrufer und misst den tatsächlich erhaltenen Betrag. Bei der Preisgestaltung wird dieser gemessene Betrag verwendet, auch für Gebühren-auf-Transfer-Token.
3. Erhält ein Brutto-Zitat aus dem konfigurierten Zitat oder verwendet den empfangenen Rohbetrag, wenn kein Zitat festgelegt ist.
4. Berechnet die Poolgebühr und alle zusätzlichen Protokollgebühren und überprüft dann die verfügbare Liquidität des Output-Token.
5. Sendet die Protokollgebühr direkt an den konfigurierten Protokollempfänger, überträgt die nominelle Nettoleistung an den Empfänger und erfasst die Poolgebühr, wenn eine Gebühradresse konfiguriert wird.
6. Erträgt das ältere `Swap`-Ereignis und das detailliertere `SwapSettlement`-Ereignis.

`SwapSettlement` erfasst den Initiator, beide Token, gemessene Eingabe, Brutto-notierte Ausgabe, gesendete nominale Ausgabe, tatsächlich beim Empfänger beobachtete Ausgabe, Poolgebühr und Protokollgebühr. Die nominalen und beobachteten Ausgänge können sich unterscheiden, wenn das Ausgabe-Token selbst eine Übertragungsgebühr berechnet. Das Feld `fee` im erblichen Event `Swap` ist nur die Poolgebühr.

Die sechs Argumente `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` Überlast ist der begrenzte Ausführungsweg. Sie rückläuft nach Ablauf der Frist oder wenn die beobachtete Saldoerhöhung des Empfängers unter `minAmountOut` liegt. Integratoren sollten es bevorzugen, weil ein angezeigtes Angebot vorübergehend ist: Angebotszustand, Gebührenpolitik, Liquidität, Limits und Oracle-Daten können sich vor der Ausführung ändern. Die älteren Überlastungen mit drei und vier Argumenten stellen diese Grenzen auf Fonds-Ebene nicht dar.

### Berechnung der Zusatzgebühr

Sowohl die Fonds- als auch die Protokollgebühren werden von der notierten Bruttoproduktion abgezogen. Die Protokollgebühr ist: **nicht aus der Poolgebühr abgeschnitten**, und der Fonds behält seine vollständigen berechneten Gebühren.

Zum Beispiel bei einer Bruttoquote von 100 Einheiten:

- Eine 2%-Fonds-Gebühr erfolgt für 2 Einheiten des Fonds;
- ein Protokollsatz von 10% für diese Poolgebühr sendet eine weitere 0.2-Einheit direkt an den Protokollempfänger; und
- Der Benutzer erhält 97.8 Einheiten.

Bei der Protokollberechnung wird die höhere der berechneten Poolgebühren und eine voraussichtliche Gebührenbasis von 1% verwendet. Dies verhindert, dass eine sehr geringe Poolgebühr die Protokollberechnung auf fast Null reduziert. Invalide kombinierte Zinssätze kehren mit `FeeTooHigh` zurück, und ein Angebot, das bei Null ausfallen würde, kehrt mit `InsufficientOutput` zurück.

### Eigentümer- und Upgradebefugnisse

Der Vertragsinhaber kann fällige Poolgebühren erheben und `withdrawLiquidity` anrufen, um alle verfügbaren Fonds-Token an eine gewählte nicht-Null-Adresse zu übertragen. Wenn die Gebühren entkoppelt werden, werden aufgelaufene Gebühren von diesem Liquiditätsrückzahlungsweg reserviert; ansonsten bleiben sie Teil des Fonds-Gleichgewichts. Die Poolteilnehmer sollten die hinterlegte Liquidität nicht als dauerhaft gesperrt interpretieren, es sei denn, zusätzliche, überprüfbare Governance-Kontrollen belegen dieses Ergebnis.

Die Konfigurationsversiegelung entfernt diese Liquiditätsentziehungskraft nicht. Es entfernt auch nicht die Upgrade-Leistung des separaten Proxy-Administrators ERC-1967.


## Bewertungsmodule

Alle drei Anbieter implementieren die von `SwapPool` und `SwapRouter` verwendeten Forward- und Reverse-Anbieterfunktionen:

- **`DecimalQuoter`** Staatlose Dezimalnormalisierung unter einer 1:1-Wertparität-Annahme.
- **`RelativeQuoter`** Dezimalnormalisierung plus vom Eigentümer verwaltete relative Preisindizes. Ein nicht eingestellter Token-Index ist standardmäßig in Parität.
- **`OracleQuoter`** Rate jedes Token durch ein konfiguriertes Orakel, mit einer globalen oder pro Token Staleness-Grenze und einem optionalen Ausgangsmultiplikator 0.9-to-1.0.

Ein `OracleQuoter` ist nur so zuverlässig wie seine Futtermittelwahl und -verwaltung. Die Kennzeichnung und die Richtung des Futters müssen konsistent sein, die Dezimalzahlen müssen korrekt sein, die Aktualisierungen müssen positiv und frisch sein, und die Governance kann die Futtermittel ersetzen oder die Frischeinstellungen ändern. Manipulationen der Quellen, verzögerte Updates, Netzwerkunterbrechungen, falsche Paarkonfiguration oder Verlust des Oracle-Eigentümer-Schlüssels können zu schlechten Zitaten führen oder Swap-Rückgängigkeiten führen.

`OracleRelay` ist ein optional einmaliges, neueste Runde Relais, das mit der Orakeloberfläche kompatibel ist. Ein ausgewiesener Autor veröffentlicht die Quellwerte neu; Es gibt keine Überschneidungsnachweise und keine gespeicherte Geschichte. Das Relais akzeptiert die Werte des Schriftstellers nur mit einem Zukunftszeitstempel-Check. `OracleQuoter` lehnt nicht-positive oder veraltete Antworten unabhängig ab, während der Relaisbesitzer den Schriftsteller drehen oder die aktuelle Runde ungültig machen kann. Die Benutzer müssen daher den Quellfeed, den Relais-Schreiber, den Relaisbesitzer und den Überwachungsprozess bewerten.


## Gebührenpolitik und Grenzwerte

`FeePolicy` speichert eine Standardgebühr in Teilen pro Million und überschreitet die optionalen Richtungspaare. Der Eigentümer kann diese Zinssätze ändern, es sei denn, diese Befugnis wird durch eine außervertragliche Steuerung eingeschränkt.

`Limiter` speichert einen maximalen Saldo für ein Token an einer bestimmten Fonds-Adresse. Der Eigentümer oder ein autorisierter Schriftsteller kann diese Grenze ändern. Ein Nulllimit blockiert Einlagen, wenn der Begrenzer aktiv ist; ein nicht eingestellter Begrenzer lässt Einlagen unbegrenzt.

Diese Grenzen beschreiben konfigurierte **Token-Exposition** in einem Fonds. Sie klassifizieren selbst keine Token-Saldo als Darlehen oder juristische Schulden, beweisen nicht die Fähigkeit eines Emittenten oder garantieren die Erfüllung. Diese Fragen hängen von den Emittentbedingungen, den Fonds-Regeln, der dem Benutzer vorgelegten Transaktion und dem geltenden Recht ab.


## Protokollgebührencontroller

`ProtocolFeeController` ist eine optionale Gebührenkomponente für den Einsatz. Der Eigentümer kann die Protokollrate und den Empfänger ändern oder die Gebühr deaktivieren. Ein einzelner Controller kann von mehreren Fonds geteilt werden, aber das Protokoll erfordert nicht einen Controller pro Netzwerk.

Bei Aktivierung und Konfiguration wird der Empfänger während eines jeden erfolgreichen Swaps direkt im Output-Token bezahlt. Die Art und Weise, wie der Empfänger die Mittel verwendet—zum Beispiel für Operationen, Überwachung, Liquiditätsunterstützung oder einen anderen veröffentlichten Zweck—ist eine Frage der Governance, nicht eine Garantie des Vertrages.
