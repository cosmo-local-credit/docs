## C. vorgeschlagene Definitionen von KPI

Diese KPIs bilden eine vorgeschlagene Messspezifikation, nicht eine Aussage, dass die aktuelle App oder das aktuelle Protokoll jedes erforderliche Ereignis aufzeichnet.

Jedes veröffentlichte KPI muss Folgendes enthalten:

- verantwortlicher Verleger und Datenquelle;
- Definition von Ereignissen oder Zuständen;
- Kohorten- oder Messzeit;
- Einheit und Bewertungsmethode;
- Bewertungszeitstempel;
- Einbeziehungs- und Ausschlussvorschriften;
- Behandlung von teilweisen, streitigen, abgelaufenen, nicht zugänglichen und korrigierten Aufzeichnungen;
- erforderliche Beweise oder Zertifizierungen außerhalb der Kette;
- Revisionsgeschichte und Datenqualitätsbeschränkungen; und
- ob das Ergebnis in der Kette, gemeldet, bestätigt, unabhängig überprüft oder geschätzt ist.

| KPI | vorgeschlagene Definition | Erforderliche Beweise und Ausschlüsse |
| --- | --- | --- |
| **Gültige Darstellungen** | Anzahl oder Einheiten, die während eines Zeitraums in den Rückzahlungsprozess des Emittenten aufgenommen wurden | Vorlage-Identifikator, Emittent, Genehmigung des Inhabers, Höhe, Uhrzeit, Status; Duplikate und ungültige Anträge auszuschließen |
| **Erfüllungsrate** | Erfüllte gültige Präsentationen geteilt durch gültige Präsentationen für die gleiche reife Kohorte | getrennte Beweise für die Leistung der Emittenten; Bericht über geöffnete, abgelehnte, streitige, teilweise und korrigierte Fälle |
| **Vollständigkeit der Ausbuchung** | Erfüllte Vorträge mit Entlastungsregister unterteilt durch erfüllte Vorträge | Verbrennung, Stornierung, Deaktivierung oder andere Beweise für die Nichtwiederverwendung, die mit der Erfüllung verbunden sind |
| **Erfüllungslatenz** | Median und 90er Perzentil der Vorlage-zu-Erfüllungszeit | Ersetzen Sie nicht die Aufbewahrungszeit von Emission bis Vorlage oder von Erwerb bis Vorlage |
| **Aufbewahrungsdauer** | Median und Verteilung der Zeit vom Erwerb bis zur Vorlage | Identifizieren Sie das Akquisitionsereignis und ausschließen Sie unbekannte Akquisitionszeiten |
| **Ausstehende förderfähige Verpflichtungen** | Berechtigte Verpflichtungen von Dritten, die nach definierten Ausschlüssen verbleiben | Identität und Bedingungen des Emittenten die einschlägigen Emittenteninventar, Ablauf, Verbrennung, Ausbuchung, Tests und Nichtverpflichtungs-Token ausschließen |
| **Volumen direkter Fonds-Tausche** | Wert abgeschlossener Tausche, die als Tausch über einen einzelnen Fonds nach einer offengelegten Bewertungsmethode begonnen wurden | Abwicklungsereignisse auf der Blockchain, Token-Einheiten, Kursquelle und Zeitpunkt; nicht als Erfüllung durch den Herausgeber einstufen |
| **Versuche der Routenerkennung** | Gültige Anfragen innerhalb eines Zeitraums, erreichbare Gutscheine oder mögliche Routen zu finden | Graphversion, indexierter Block, Aktualität, Wallet-Umfang, gewünschte Tiefe, Anzahl der Ergebnisse, Auslassungen oder Suchbudget; kein verbindliches Angebot |
| **Verfügbare mögliche Routen** | Mögliche Routen, die die Erkennung für die festgelegte Anfragekohorte zurückgibt | Jeden einzelnen geordneten Fonds-/Tokenweg zählen; Routentiefe und Ausschlüsse angeben; nicht als ausführbar oder abgewickelt einstufen |
| **Erfolgsrate von Routenangeboten** | Zurückgegebene verbindliche Routenangebote geteilt durch gültige Angebotsversuche | Festgelegter Block, Route, Betragsmodus, Ablauf, Ergebnis oder Ablehnungsgrund; getrennt vom Erfolg der Erkennung und Ausführung halten |
| **Ausführungsrate von Routen** | Bestätigte geroutete Transaktionen geteilt durch gültige signierte Ausführungsversuche derselben ausgereiften Kohorte | Tracking-ID, Transaktionshash, Übermittlungsstatus, Bestätigung oder Rückabwicklung, Routentiefe und Fehlergrund; nicht signierte Angebote ausschließen |
| **Volumen der gesamten Route** | Ein- und Ausgabewert bestätigter Tausche über Routen, einmal je Route gezählt | Abgewickelte Eingabe des ersten Schritts und abgewickelte Ausgabe des letzten Schritts nach einer einheitlichen Bewertungsmethode verwenden; nicht die Werte aller Schritte als unabhängiges Wirtschaftsvolumen addieren |
| **Abwicklung je Schritt** | Abgewickelte Eingabe, Bruttoausgabe, Fondsgebühr, Protokollgebühr und Nettoausgabe für jeden Schritt einer bestätigten Route | Geordnete Fonds- und Tokenkennungen, Abwicklungsereignisse, Transaktionshash, Block, Logindex und verbleibende Zwischenbestände |
| **Routengebühren** | Aktuelle Fonds- und Protokollgebühren, die tatsächlich über die Route abgewickelt wurden | Jeden Schritt und die Summe nach Gebührenart ausweisen; nicht als vorgeschlagenen Netzwerkanteil oder nicht umgesetzte Servicegebühr bezeichnen |
| **Routeneinschränkungen** | Anzahl und Anteil abgelehnter Routen oder Angebote nach benanntem Grund | Zulassung, Einzahlungsgrenze, Liquidität, Gebührendomäne, nicht unterstützter Token oder Kursanbieter, Wallet-Saldo oder -Typ, Gas, Suchbudget, Ablauf, Abweichung oder Simulationsnachweis |
| **Zustand der Routenabstimmung** | Aktualität und Zuverlässigkeit des indexierten Graphen und der zusammengefassten Abwicklungsdaten | Graphversion und -alter, Tiefe der Warteschlange für Änderungen, Dauer der Abstimmung, Berichtigungen, Fehler, unbekannte Einträge und ungeklärte Belege |
| **Inventar der Fonds** | Bewertete gestützte Vermögenswerte, die ein Fonds zu einem bestimmten Zeitpunkt hält | Vertragssalden, Gebührenvorbehalt, nicht zugängliche Vermögenswerte, Bewertungsmethode und Auszahlungsbefugnisse des Eigentümers |
| **Reserven angemessen** | Berechtigte verfügbare Reservenwerte aufgeteilt nach ausdrücklich gedeckten Risikopositionen | die Abdeckungspolitik, die Anspruchsfähigkeit von Vermögenswerten, die Aufbewahrung/Kontrolle, die Verbindlichkeiten, die Ausschlüsse und die Bewertung; nicht die gesamte Tokenversorgung standardmäßig |
| **Einsatzbegrenzung** | Messbares Fonds-Token-Guthaben geteilt durch seine aktuell konfigurierte Grenzwerte | Limiter Adresse, Token, Fonds, Zeitstempel, Änderungen und Perioden ohne Begrenzung |
| **Rückgewinnung des Garantiers** | Berechtigte Rückforderung, geteilt nach gezahlten abgedeckten Forderungen | Identifizierter Bürger, Anspruchspolitik, Zeitplan, Kosten, Streitigkeiten und Abschreibungen |
| **Angebotene Netzerlöse** | Erhaltene vorgeschlagene Netz-Rake plus erhaltene separate Routing-/Service-Gebühren | Die Brutto-Poolgebühren, die von Fonds aufbewahrt werden, sind ausgeschlossen und die Rake nicht zweimal gezählt wird. |
| **Zeitmäßigkeit der Governance** | Zeit, einen Vorfall zu erkennen, zu entscheiden, zu pausieren, zu reparieren und zu schließen | Definition der Uhrzeiten, zuständige Stellen, Notfallbefugnisse, Beschwerden und fehlende Ereignisse |

Die Ansprüche auf soziale Auswirkungen erfordern eine separate Methodik. Die Blockchain-Aktivität allein stellt keine Identität, die Leistung des Emittenten, die Zufriedenheit, die Gesundheit der Gemeinschaft, die Kausalität oder die Auswirkungen fest.
