# Protokoll

Protocol v1.1.0-Verträge stellen die Bausteine für das in [Kapitel 1](/de/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) des Weißbuchs beschriebene **Commitment Pooling Protocol (CPP)** vor. Dieser Verweis folgt auf die öffentliche [`v1.1.0` Veröffentlichung](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Verwenden Sie [Konzepte und Vokabular](/de/introduction/concepts) für die hier verwendeten Produktschichten, verantwortlichen Rollen, Aktionslebenszyklus, Werte, Grenzen, Gebühren und Statusbegriffe.

Grassroots Economics Foundation (GEF) betreibt die Progressive Web App unter [cosmolocal.credit](https://cosmolocal.credit), die eine Möglichkeit zur Interaktion mit diesen Verträgen bietet. Die App und die Verträge unterscheiden sich. Die Bedienung der Schnittstelle macht GEF nicht von sich selbst zum Emittenten von Gutscheinen, Pool Steward, Verwalter, Bürger oder Gegenpartei einer Benutzertransaktion. Diese Funktionen hängen von der entsprechenden Bereitstellung, den Adressen des Verantwortlichen und den veröffentlichten Emittenten- oder Poolbedingungen ab. Siehe [Nutzungsbedingungen](/de/governance/terms).


## Einsatzmuster

Die meisten staatlichen Module werden als **ERC-1967 Proxy-Instanzen** durch Solady's `ERC1967Factory` initialisiert. Mehrere Instanzen können eine Implementierung teilen und gleichzeitig separate Eigentümer, Konfiguration und Speicherung behalten. Ein Einsatz kann auch deterministische Salze verwenden, so dass Adressen vor dem Einsatz vorhergesagt werden können.

Nicht jeder Vertrag ist beauftragt. `DecimalQuoter` und `SwapRouter` sind staatlose direkte Einsätze; `RescueVault` und `ERC1967Factory` werden ebenfalls direkt eingesetzt. Die nachstehend aufgeführten verbleibenden Statusmodule sind für den Proxy-Einsatz ausgelegt.

Jeder Proxy hat einen Administrator, der seine Implementierung ersetzen kann. Die Stellvertreterverwaltung ist vom Vertragseigentum getrennt und sollte an eine ordnungsgemäß geregelte Adresse zugewiesen werden. Ein Upgrade kann das Verhalten ändern, auch nachdem ein Pool die Konfiguration versiegelt hat, so dass Benutzer sowohl den Pool-Besitzer als auch den Proxy-Administrator bewerten sollten.

EIP-165-Unterstützung ist auch vertragsspezifisch und nicht universell. Es wird von `GiftableToken`, den drei Quoten, `OracleRelay`, `Limiter`, mehreren Registern und Indexen, `Splitter`, `EthFaucet`, `PeriodSimple` und `RescueVault` ausgesetzt. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` und `CAT` stellen `supportsInterface` in v1.1.0 nicht dar.


## Komponentenkarte

- **GiftableToken**ERC20 Versorgung, Schmieden, Verbrennen und Optional-Expiration-Mechanik. Ein Emittent kann eine Instanz als Gutschein verwenden, aber der Vertrag allein definiert nicht, was erlöst werden kann, von wem, wo oder unter welchen Bedingungen.
- **SwapPool**Token-Vault und Swap-Settlement-Engine. Eine Bereitstellung kann die Komponenten Curation, Valuation, Gebühr, Limit und Protokollgebühr anbringen oder unterstützte Abhängigkeiten unbestimmt lassen.
- **DecimalQuoter, RelativeQuoter und OracleQuoter**Austauschbare Bewertungsmodule für Dezimalparität, von Eigentümern verwaltete relative Raten oder oracle-abgeleitete Raten. `OracleRelay` kann ein externes Feed für eine `OracleQuoter` weiterleiten.
- **Gebührenpolitik und Grenzwerte**Optionelle Paargebührregeln und Pool-Balance-Grenzen pro Token.
- **ProtokollGebührKontroller**Optional, wechselbare Protokollgebühr, Empfänger und aktiver Zustand, den ein Pool während der Abwicklung konsultieren kann.
- **TokenUniqueSymbolIndex, KontenIndex und Vertragsregister**Token-, Konto- und Adressentdeckungskomponenten. `CAT` erfasst die angeordneten Abrechnungstokenpräferenzen eines Kontos.
- **SwapRouter**Berechnungen der exakten Eingabe- und Exaktorleistung über einen vorgeschlagenen Multi-Pool-Pfad. Es speichert keine Token und führt keine Swaps durch.
- **Splitter, EthFaucet, PeriodSimple und RescueVault**Unterstützung von Verteilung, Gasfinanzierung, Ratenlimit und Vermögensrückgewinnung.

Die Verträge können auf verschiedene Weise kombiniert werden. Eine Registerliste, ein Angebot oder ein Grafikweg ist keine Garantie dafür, dass eine Transaktion ausgeführt wird: aktuelle Liquidität, Token-Limits, Gebühren, Orakelzustand, Zulassung, Fristen, Netzwerkbedingungen und die Konfiguration jedes Pools gelten immer noch.
