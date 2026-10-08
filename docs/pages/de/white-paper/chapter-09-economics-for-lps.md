## **9. Das ist alles. Angebotene Ökonomie für Liquiditätsprogramme**

Dieses Kapitel beschreibt ein zukünftiges, getrennt angenommenes Modell. Es handelt sich nicht um eine aktuelle App-Funktion, ein Angebot, eine versprachene Rückgabe oder ein Recht, das durch Einzahlung in `SwapPool` erzeugt wird.

### **9.1 vorgeschlagene Einnahmequellen**

Ein zukünftiger Netzebudget könnte:

1. ein offenkundiges **Netzwerk-Rake**, das als Anteil der erhobenen Gebühren der teilnehmenden Pools entnommen wird;
2. getrennte Routing- oder Servicegebühren von implementierten geteilten Diensten; und
3. sonstige ausdrücklich erlassene Einnahmen.

Die Brutto-Pool-Gebühren, die von Pools aufbewahrt werden, sind keine Einnahmen aus dem Netzwerk. Der aktuelle Protocol v1.1.0 verwendet ein anderes Modell: Eine optionale Protokollgebühr ergänzt die Poolgebühr und wird direkt an den konfigurierten Empfänger gesendet.

### **9.2 Illustrative Rake-Mathematik**

Wenn ein teilnehmender Pool eine Poolgebühr von 2,00% berechnet und ein angenommenes Netz-Rake 20% dieser Poolgebühr erhält, beträgt der vorgeschlagene wirksame Netz-Rake-Rate auf den weitergeleiteten Wert:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Wenn 25% der erhaltenen Rake- und Servicegebührenwerte für eine angegebene Bargeldnutzung nach Kosten berechtigt und konvertierbar sind, beträgt der bargeldnutzbare Anteil des 40-Bps-Rake ungefähr 10 Bps.

Die vorgeschlagenen Einnahmen aus dem Netz sind:

`network_rake_received + routing_or_service_fees_received`

Hinzufügen Sie nicht Brutto-Pool-Gebühren zum Netzwerk-Rake: Der Rake ist eine Übertragung aus diesen Gebühren und würde sonst zweimal gezählt werden.

### **9.3 Liquiditätsprogrammrechte**

Ein separat verabschiedetes Programm könnte das Inventar des Pools, die Routing-Dienste, die Überwachung oder andere Mandate finanzieren. Die Bedingungen müssen Folgendes offenlegen:

- ob eine Übertragung ein Geschenk, eine Stiftung, ein Darlehen, ein erstattungsfähiger Beitrag oder ein Kauf ist;
- das Sorgerecht und die Kontrolle;
- Auszahlungs-, Rückzahlungs-, Verlust- und Prioritätsregeln;
- Gebühren- und Prämienberechtigung;
- Regierungsrechte;
- Bewertungs- und Berichtsmethoden und
- Aufschub, Kündigung und Rechtsmittel.

Die aktuelle `SwapPool` erzeugt keine Pool-Share-Token oder automatische Beitrittsberechtigung. Jede ex-post-Metrik muss auf realisierten Einnahmen und Verlusten basieren, darf nicht als versprochener Rendite dargestellt werden und kann null oder negativ sein.
