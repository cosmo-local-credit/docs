# Regierungsmechanik

Die Regierungsführung in Cosmo-Local Credit (CLC) ist eher auf verschiedene Rollen aufgeteilt als auf eine universelle Behörde zugeordnet. Diese Seite beschreibt Governance-Optionen für CLC--kompatible Netzwerke; sie schreibt keine einzige Rechtsform, Stimmsystem oder Organisation vor.

Grassroots Economics Foundation (GEF) betreibt die öffentliche progressive Web-App bei `cosmolocal.credit` und ihre unterstützenden Dienste. In dieser Funktion kann GEF Schnittstellen und Kataloge aufrechterhalten, Mindestverzeichnungs- oder Sicherheitsstandards anwenden, Inhalte moderaten, App-Funktionen einschränken und technische Operationen koordinieren. Es sei denn, GEF akzeptiert ausdrücklich eine andere Rolle für eine bestimmte Vereinbarung, ist nicht der Aussteller eines von Benutzern erstellten Gutscheins, der Verwalter eines von Benutzern erstellten Pools, ein Bürger, Versicherer, Verwalter, Kreditgeber, Kreditnehmer, Erlöser oder Partei einer Benutzer-zu-Benutzer-Transaktion.

Die [Nutzungsbedingungen](/de/governance/terms) regeln die Nutzung der öffentlichen App und erklären diese Verantwortlichkeiten ausführlich.

[Konzepte und Vokabular](/de/introduction/concepts) verzeichnet diese öffentlichen Rollen in Bezug auf Vertragseigentum, Proxy-Administration, Abhängigkeitskontrolle, Katalogmoderation und Gebührenerhebung.

## Verantwortlichkeit nach Rolle

- **Aussteller von Gutscheinen**ihre eigenen Opfer zu regeln. Sie veröffentlichen genaue Informationen über Identität, Kapazität, Angebot, Bewertung, Ablauf, Darstellung, Erfüllung, Geographie, Zeit, Gebühr, Beschränkung und Abhilfe und bleiben für die Einhaltung dieser Verpflichtungen verantwortlich.
- **Pool Stewards**die Zulassung, Vermögensverwaltung, Bewertung, Gebühren, Begrenzungen, Lagerbestände, Reserven, Beiträge, Konflikte, Herkunft, Konfiguration, Pausen, Upgrades sowie jegliche Garantie- oder Verlustzuweisungsmechanismen für ihre Pools regeln.
- **Registrierungs- und Dienstverwalter**kann regeln, welche Pools oder Vermögenswerte in einem Register erscheinen und die Regeln und Gebühren für Routing, Überwachung, Liquiditätsunterstützung oder andere geteilte Dienste.
- **Benutzer**sie entscheiden, ob ein Emittent, ein Gutschein, ein Pool, ein Angebot und eine Transaktion für sie akzeptabel und rechtmäßig sind. Eine Registrierung oder eine Anmeldung der App ist keine Garantie oder Bestätigung.

Eine Person oder Organisation kann mehr als eine Rolle spielen, aber sie sollte jede Rolle und die daraus resultierenden Konflikte und Verpflichtungen offenlegen.

## Rechenschaftspflichtige Verwaltungsstrukturen

Eine CLC--kompatible Pool, Register oder Dienstleistung kann von einer gemeinnützigen Stiftung, einer Genossenschaft, einer Gemeindegruppe, einer Föderation, einem Unternehmen, einer Multisig, einer öffentlichen Agentur, einem institutionellen Vorstand, einem Wahlsystem in der Kette oder einer anderen verantwortungsvollen Struktur geregelt werden. Welche Struktur auch immer gewählt wird, die Teilnehmer sollten in der Lage sein zu bestimmen:

- der die Befugnis hat, Entscheidungen zu treffen und auszuführen;
- wie Vermögenswerte, Emittenten und Teilnehmer zugelassen, überprüft, suspendiert oder entfernt werden;
- wie Bewertungen, Gebühren, Grenzwerte, Reserven, Garantien und andere wesentliche Einstellungen festgelegt und geändert werden;
- welche Abhängigkeiten oder Verträge aktualisiert, ersetzt, unterbrochen oder dauerhaft versiegelt werden können;
- wie Interessenkonflikte offenbart und behandelt werden;
- welche Aufzeichnungen, Mitteilungen, Genehmigungen und Überprüfungsfristen gelten;
- welche Notfallbefugnisse bestehen und wie ihre Nutzung überprüft wird; und
- wie die Teilnehmer Beschwerden, Ausscheidungen, Migrationen oder die Behebung ungelöster Verpflichtungen durchführen können.

Die veröffentlichten Vorschriften sollten den in den betreffenden Verträgen und Dienstleistungen verfügbaren Befugnissen entsprechen. Die Regierungsführung sollte wesentliche Entscheidungen transparent und überprüfbar halten und die Konvertierbarkeit, Liquidität, Renditen, Versicherungen, Reserven oder Garantien nicht breiter beschreiben als die zuständige Partei tatsächlich bereitstellen kann.

## Technische Governance-Optionen

Wenn Token-Voting angemessen ist, kann eine Bereitstellung [OpenZeppelin Governor](https://docs.openzeppelin.com/contracts/4.x/api/governance)-Kontrakte und eine Schnittstelle wie Tally verwenden. Andere Bereitstellungen können sich auf Multisig-Zulassungen, Kooperationsresolutionen, Vorstandsentscheidungen, Mandate öffentlicher Stellen oder Hybridprozesse stützen.

Diese Werkzeuge sind optional. Die Diskussion von Token-Voting, geteilter Versicherung, Netzwerk-weiter Routing, Nettierung oder Liquiditätsprogrammen bedeutet nicht, dass jede Funktion in der öffentlichen App aktiv ist oder von GEF geregelt wird. Jeder Einsatz muss seine tatsächlichen Entscheidungsträger, Verträge, Dienstleister und Richtlinien identifizieren.

## Interface-Action und Zustand in der Kette

Ein App-Betreiber oder ein Registry Steward kann ein Element aus einer Schnittstelle verstecken, markieren, suspendieren oder entfernen. Diese Maßnahme unterbricht nicht unbedingt einen intelligenten Vertrag, rückgängig macht eine abgeschlossene Transaktion, entfernt eine öffentliche Blockchain-Anmeldung, beseitigt einen Saldo oder erfüllt eine Verpflichtung zwischen den Nutzern. Governance-Pläne sollten die Schnittstellenkontrollen von den Behörden unterscheiden, die in der Kette existieren, und von den rechtlichen Pflichten, die außerhalb der Kette bestehen.

Weitere Informationen finden Sie im [Governance Mechanics Kapitel](/de/white-paper/chapter-11-governance-mechanics) des Weißen Buches.
