# Protokoll

Das **Commitment-Pooling-Protokoll (CPP)** beschreibt, wie unabhängig verwaltete Fonds Gutscheine auswählen, Tauschregeln veröffentlichen und den Tausch ermöglichen. Ein Inhaber nutzt einen Gutschein später bei dessen Herausgeber für die versprochenen Waren oder Dienstleistungen. Das sind getrennte Schritte mit getrennten Verantwortlichkeiten.

Diese Website erklärt diese Konzepte und die Nutzung der CLC App. Die [CLC-Softwaredokumentation](https://software.cosmolocal.credit/) ist die maßgebliche Referenz für Softwareimplementierung, Verträge, APIs, Bereitstellung und Betrieb. Sie ist derzeit auf Englisch verfügbar.

Beginnen Sie mit [Konzepten und Begriffen](/de/introduction/concepts) für die gemeinsamen Begriffe oder dem [Whitepaper](/de/white-paper) für den übergreifenden Entwurf und die Vorschläge.

## Bereitstellungsmuster

Verschiedene Gemeinschaften und Organisationen können kompatible Software nach eigenen Regeln betreiben. Grassroots Economics Foundation betreibt die [öffentliche CLC App](https://cosmolocal.credit). Jede Bereitstellung sollte ihre Betreiber, Verträge und verantwortlichen Stellen nennen.

Vertragsadressen, Bereitstellungsanleitungen und die Prüfung von Eigentümern und Upgradebefugnissen finden Sie unter [Bereitstellung und Verifizierung](https://software.cosmolocal.credit/contracts/deployments). Für den Betrieb der unterstützenden Dienste beginnen Sie mit der [CLC Core API](https://software.cosmolocal.credit/core-api/).

## Komponentenübersicht

Nutzen Sie die Softwarereferenz für:

| Thema | Maßgebliche Softwaredokumentation |
| --- | --- |
| Erstellung, Umlaufmenge und Ablauf von Gutscheinen | [Gutscheine](https://software.cosmolocal.credit/contracts/vouchers) |
| Konfiguration, Einzahlungen, Abhebungen und Kontrolle von Fonds | [Fonds](https://software.cosmolocal.credit/contracts/pools) |
| Berechnung von Wechselkursen | [Kursmodule (Quoter)](https://software.cosmolocal.credit/contracts/quoters) |
| Tauschausführung, Gebühren und Transaktionsaufzeichnungen | [Tausche berechnen und abwickeln](https://software.cosmolocal.credit/contracts/swaps) |
| Tausch über mehrere Fonds | [Routing](https://software.cosmolocal.credit/contracts/routing) |
| Auffindbarkeit und unterstützende Verträge | [Register und Hilfsmittel](https://software.cosmolocal.credit/contracts/registries) |
| API-Anfragen und -Antworten | [OpenAPI-Referenz](https://software.cosmolocal.credit/core-api/reference) |
| Backend- und Routing-Einstellungen | [Konfiguration](https://software.cosmolocal.credit/core-api/configuration) |

## Tausch über Routen auf Anwendungsebene

Die App kann Teilnehmenden beim Tausch über mehrere Fonds helfen, wenn eine geeignete Route verfügbar ist. Die teilnehmende Person prüft das Kursangebot und autorisiert den Tausch. Jeder Fonds behält seine eigenen Regeln und verantwortlichen Parteien.

Unter [Routen und Verantwortlichkeiten](/de/protocol/network) erfahren Sie, was das für Teilnehmende bedeutet. Die [Routing-Implementierung](https://software.cosmolocal.credit/contracts/routing) erklärt, wie die Software Routen berechnet und ausführt.

Die Software ermöglicht den Tausch; Herausgeber bleiben für ihre Gutscheinversprechen und Fonds-Verantwortliche für ihre veröffentlichten Regeln verantwortlich. Für die Nutzung der öffentlichen App gelten die [Nutzungsbedingungen](/de/governance/terms).
