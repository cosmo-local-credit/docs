# Smart Contracts

Verträge zeichnen Token-Salden auf und führen Fonds-Tausche aus. Die [CLC-Softwaredokumentation](https://software.cosmolocal.credit/contracts/) ist die maßgebliche Implementierungsreferenz und derzeit auf Englisch verfügbar. Diese Seite erklärt, was Teilnehmende vor der Nutzung dieser Verträge verstehen sollten.

Unter [Konzepte und Begriffe](/de/introduction/concepts) wird zwischen einem verwalteten Commitment-Fonds und seinem `SwapPool`-Vertrag sowie zwischen Tausch und Erfüllung durch den Herausgeber unterschieden.

## Gutschein (`GiftableToken`)

Ein Gutschein verbindet einen digitalen Saldo mit einem veröffentlichten Versprechen des Herausgebers. Seine Bedingungen erklären, wofür er verwendet werden kann, wo und wann er akzeptiert wird und wer verantwortlich ist. Die Erstellung eines Tokens beweist nicht, dass der Herausgeber die versprochenen Waren oder Dienstleistungen bereitstellen kann.

Die Mechanismen für Erstellung, Prägen, Verbrennen und Ablauf finden Sie unter [Gutscheine](https://software.cosmolocal.credit/contracts/vouchers).

## Commitment-Fonds (`SwapPool`)

Ein Commitment-Fonds führt ausgewählte Gutscheine unter veröffentlichten Regeln zusammen. Sein Vertrag hält Bestände und tauscht unterstützte Vermögenswerte. Eine Einzahlung gibt der einzahlenden Person nicht automatisch Fondsanteile oder Rechte auf Rückzahlung, Abhebung, Belohnung oder Governance; solche Rechte benötigen gesondert offengelegte Bedingungen.

### Zusammensetzung und optionale Abhängigkeiten

Prüfen Sie, welche Gutscheine ein Fonds akzeptiert, wie er Wechselkurse festlegt, welche Grenzen und Gebühren gelten und wer sie ändern kann. Die Softwarereferenz beschreibt die [Konfiguration und Versiegelung von Fonds](https://software.cosmolocal.credit/contracts/pools).

### Swap-Abwicklung

Ein erfolgreicher Tausch ändert die betreffenden Salden. Er beweist nicht, dass ein Herausgeber Waren oder Dienstleistungen geliefert hat. Prüfen Sie vor der Bestätigung Eingabe, Ausgabe, Empfänger, Mindestbetrag und Ablaufzeitpunkt des Kursangebots.

Ausführungsmethoden und Abwicklungsaufzeichnungen finden Sie unter [Tausche berechnen und abwickeln](https://software.cosmolocal.credit/contracts/swaps).

### Berechnung der Zusatzgebühr

Ein Tausch kann sowohl eine Fondsgebühr als auch eine zusätzliche Protokollgebühr enthalten. Prüfen Sie den Gesamtbetrag im Kursangebot; auf einer Route durch mehrere Fonds können bei jedem Schritt Gebühren anfallen. Die [Tauschreferenz](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) enthält die aktuelle Berechnung und ein durchgerechnetes Beispiel.

### Eigentümer- und Upgradebefugnisse

Der Fonds-Eigentümer kann verfügbare Bestände abheben. Andere Stellen können Upgrades oder Einstellungen kontrollieren. Prüfen Sie diese Befugnisse zusammen mit den veröffentlichten Regeln der Fonds-Verantwortlichen Person, bevor Sie einzahlen oder sich auf einen Fonds verlassen. Versiegelte Einstellungen allein belegen nicht, dass Bestände dauerhaft gesperrt sind.

Technische Prüfungen finden Sie unter [Fonds](https://software.cosmolocal.credit/contracts/pools) und [Eine Instanz verifizieren](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance).

## Bewertungsmodule

Der Wechselkurs eines Fonds ist vom angegebenen Wert eines Gutscheins und den Einlösungsbedingungen des Herausgebers getrennt. Prüfen Sie die gewählte Methode und wer ihre Eingabewerte ändern kann. Die Softwarereferenz erklärt die verfügbaren [Kursmodule (Quoter)](https://software.cosmolocal.credit/contracts/quoters).

## Gebührenpolitik und Grenzwerte

Das **„Kreditlimit“** der App ist der maximale Saldo eines bestimmten Gutscheins, den ein Fonds halten darf. Es beschreibt die Tauschkapazität statt persönlicher Kreditaufnahme oder einer Erfüllungsgarantie. Unter [Fondsregeln und Konfiguration](https://software.cosmolocal.credit/contracts/pools) wird erklärt, wie Grenzen und Gebühren angewendet werden.

## Protokollgebührencontroller

Eine Protokollgebühr hat einen konfigurierten Empfänger. Ihr Empfang macht ihn nicht automatisch zur Fonds-Verantwortlichen Person oder zum Garanten. Die [Gebührenreferenz](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) erklärt die aktuelle Funktionsweise; [Governance-Mechanismen](/de/governance/mechanics) erklären Verantwortung und Offenlegung.
