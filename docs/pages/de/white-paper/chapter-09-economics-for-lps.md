## **9. Angebotene Ökonomie für Liquiditätsprogramme**

Dieses Kapitel beschreibt ein zukünftiges, separat angenommenes Modell. Es handelt sich nicht um eine aktuelle App-Funktion, ein Angebot, eine versprochene Rückgabe oder ein Recht, das durch Einzahlung in `SwapPool` erzeugt wird.

### **9.1 Angebotene Einnahmequellen**

Ein zukünftiger Netzebudget könnte Folgendes erhalten:

1. eine offenbarte **Netzwerkanteil** als Anteil der von den teilnehmenden Fonds erhobenen Gebühren genommen;
2. getrennte Routing- oder Servicegebühren für implementierte geteilte Dienste; und
3. sonstige ausdrücklich erlassene Einnahmen.

Brutto-Fonds-Gebühren, die von Fonds aufbewahrt werden, sind keine Einnahmen aus dem Netzwerk. Der aktuelle Protocol v1.1.0 verwendet ein anderes Modell: Eine optionale Protokollgebühr ergänzt die Poolgebühr und wird direkt an den konfigurierten Empfänger gesendet.

### **9.2 Illustrative Rake Mathematik**

Wird ein teilnehmender Fonds eine Poolgebühr von 2.00% berechnen und erhält ein angenommenes Netzwerkanteil 20% dieser Poolgebühr, beträgt der vorgeschlagene wirksame Netzwerkanteil-Rate auf den geleiteten Wert:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Wenn 25% der erhaltenen Rake- und Servicegebührenwerte für eine angegebene Bargeldnutzung nach Kosten berechtigt und konvertierbar sind, beträgt der bargeldnutzbare Anteil des 40-Bps-Rake ungefähr 10 Bps.

Die vorgeschlagenen Einnahmen aus dem Netz sind:

`network_rake_received + routing_or_service_fees_received`

Hinzufügen Sie nicht Brutto-Fonds-Gebühren zum Netzwerkanteil: Der Rake ist eine Übertragung aus diesen Gebühren und würde sonst zweimal gezählt werden.

### **9.3 Liquiditätsprogrammrechte**

Ein separat verabschiedetes Programm könnte das Inventar des Fonds, die Routingdienste, die Überwachung oder andere Mandate finanzieren. Die Bedingungen müssen Folgendes offenlegen:

- ob eine Übertragung ein Geschenk, eine Stiftung, ein Darlehen, ein erstattungsfähiger Beitrag oder ein Kauf ist;
- Aufbewahrung und Kontrolle;
- Auszahlungs-, Rückzahlungs-, Verlust- und Prioritätsregeln;
- Gebühren- und Prämienberechtigung;
- Regierungsrechte;
- Bewertungs- und Berichtsmethoden; und
- Aussetzung, Beendigung und Rechtsbehelf.

Die aktuelle `SwapPool` erzeugt kein Fonds-Share-Token oder automatisches Beitrittsrecht. Alle Ex-post-Metriken müssen auf realisierten Einnahmen und Verlusten basieren, dürfen nicht als versprochener Rendite dargestellt werden und können null oder negativ sein.
