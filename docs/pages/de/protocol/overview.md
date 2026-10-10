# Protokoll

Die Verträge von Protocol v1.1.0 stellen die Bausteine auf der Blockchain für das **Commitment Pooling Protocol (CPP)** bereit, das in [Kapitel 1](/de/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) des Whitepapers beschrieben wird. Diese Referenz folgt der öffentlichen Version [`v1.1.0`](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Unter [Konzepte und Begriffe](/de/introduction/concepts) finden Sie die hier verwendeten Produktschichten, verantwortlichen Rollen, Handlungsabläufe, Werte, Grenzen, Gebühren und Statusangaben.

Die Grassroots Economics Foundation (GEF) betreibt die progressive Web-App unter [cosmolocal.credit](https://cosmolocal.credit). Sie ist eine Möglichkeit, mit diesen Verträgen zu interagieren. App und Verträge sind jedoch voneinander getrennt. Der Betrieb der Benutzeroberfläche macht GEF nicht automatisch zum Herausgeber eines Gutscheins, zur Fonds-Verantwortlichen, zum Verwahrer, Garanten oder Vertragspartner einer Nutzertransaktion. Diese Rollen hängen von der jeweiligen Bereitstellung, den Kontrolladressen und den veröffentlichten Bedingungen des Herausgebers oder Fonds ab. Siehe [Nutzungsbedingungen](/de/governance/terms).

## Bereitstellungsmuster

Die meisten zustandsbehafteten Module werden über Soladys `ERC1967Factory` als **ERC-1967-Proxy-Instanzen** initialisiert. Mehrere Instanzen können dieselbe Implementierung nutzen und dennoch getrennte Eigentümer, Konfigurationen und Speicher besitzen. Eine Bereitstellung kann außerdem deterministische Salts verwenden, damit Adressen bereits vor der Bereitstellung vorhergesagt werden können.

Nicht jeder Vertrag verwendet einen Proxy. `DecimalQuoter` und `SwapRouter` sind zustandslose direkte Bereitstellungen; auch `RescueVault` und `ERC1967Factory` werden direkt bereitgestellt. Die übrigen unten aufgeführten zustandsbehafteten Module sind für Proxy-Bereitstellungen vorgesehen.

Jeder Proxy hat einen Administrator, der seine Implementierung ersetzen kann. Die Proxy-Administration ist vom Vertragseigentum getrennt und sollte einer angemessen verwalteten Adresse zugewiesen werden. Ein Upgrade kann das Verhalten selbst dann ändern, wenn ein Fonds Teile seiner Konfiguration versiegelt hat. Nutzer sollten deshalb sowohl den Fonds-Eigentümer als auch den Proxy-Administrator prüfen.

Auch die Unterstützung von EIP-165 ist vertragsspezifisch und nicht allgemein vorhanden. `GiftableToken`, die drei Quoter, `OracleRelay`, `Limiter`, mehrere Register und Indizes, `Splitter`, `EthFaucet`, `PeriodSimple` und `RescueVault` stellen sie bereit. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` und `CAT` bieten in v1.1.0 kein `supportsInterface`.

## Komponentenübersicht

- **GiftableToken** — ERC20-Bestand, Prägen, Verbrennen und optionale Ablaufmechanik. Ein Herausgeber kann eine Instanz als Gutschein verwenden; der Vertrag allein legt jedoch nicht fest, was von wem, wo oder zu welchen Bedingungen eingelöst werden kann.
- **SwapPool** — Token-Tresor und Engine für die Tauschabwicklung. Eine Bereitstellung kann Komponenten für Kuratierung, Bewertung, Gebühren, Grenzen und Protokollgebühren anbinden oder unterstützte Abhängigkeiten ungesetzt lassen.
- **DecimalQuoter, RelativeQuoter und OracleQuoter** — Austauschbare Bewertungsmodule für Dezimalparität, vom Eigentümer verwaltete relative Kurse oder aus einem Orakel abgeleitete Kurse. `OracleRelay` kann einen externen Datenfeed für einen `OracleQuoter` weiterleiten.
- **FeePolicy und Limiter** — Optionale Regeln für Paargebühren und Token-bezogene Obergrenzen des Fonds-Saldos.
- **ProtocolFeeController** — Optionale, veränderbare Protokollgebühr mit Satz, Empfänger und Aktivstatus, die ein Fonds bei der Abwicklung abfragen kann.
- **TokenUniqueSymbolIndex, AccountsIndex und ContractRegistry** — Komponenten zur Suche nach Tokens, Konten und Adressen. `CAT` speichert die geordneten Präferenzen eines Kontos für Abwicklungs-Tokens.
- **SwapRouter** — Berechnet nur Kursangebote für exakte Ein- und Ausgabemengen entlang eines vorgeschlagenen Pfads durch mehrere Fonds. Er verwahrt keine Tokens und führt keine Tausche aus.
- **Splitter, EthFaucet, PeriodSimple und RescueVault** — Hilfsprogramme für Verteilung, Gas-Finanzierung, Ratenbegrenzung und Wiederherstellung von Vermögenswerten.

Die Verträge können unterschiedlich kombiniert werden. Ein Registereintrag, Kursangebot oder Graphpfad garantiert nicht, dass eine Transaktion ausgeführt wird. Aktuelle Liquidität, Token-Grenzen, Gebühren, Orakelzustand, Autorisierung, Fristen, Netzwerkbedingungen und die Konfiguration jedes Fonds gelten weiterhin.
