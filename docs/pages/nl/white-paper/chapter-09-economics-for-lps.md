## **9. Voorgestelde economie voor liquiditeitsprogramma's**

Dit hoofdstuk beschrijft een toekomstig, afzonderlijk aangenomen model. het is geen huidige app-functie, een aanbod, een beloofde terugkeer of een recht dat wordt gecreëerd door in `SwapPool` te deponeren.

### **9.1 Voorgestelde inkomstenbronnen**

Een toekomstige netwerkbegroting kan:

1. een onthuld **netwerkrak** als aandeel van de verzamelde vergoedingen van de deelnemende Fondsen;
2. afzonderlijke routing- of servicekosten van geïmplementeerde gedeelde diensten; en
3. andere uitdrukkelijk aangenomen, ontvangen inkomsten.

De huidige Protocol v1.1.0 maakt gebruik van een ander model: een optionele protocollenvergoeding is aanvullend op de Poolvergoede en wordt rechtstreeks naar de geconfigureerde ontvanger verzonden.

### **9.2 Illustratieve rake wiskunde**

Indien een deelnemende Fonds een poolvergoeding van 2.00% in rekening brengt en een geadopteerde netwerkrak 20% van die Poolvergoede ontvangt, is het voorgestelde effectieve netwerkrake-tarief op de geleidelijke waarde:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Indien 25% van de ontvangen rake- en dienstverleningsactiviteiten in aanmerking komen en converteerbaar zijn voor een aangegeven gebruik in contant valuta na kosten, bedraagt het contante deel van de 40-bps rake ongeveer 10 bps.

De voorgestelde inkomsten uit het netwerk zijn:

`network_rake_received + routing_or_service_fees_received`

Voeg niet de bruto Fonds-heffingen toe aan het netwerk rake: de rake is een overdracht van die heffingen en zou anders tweemaal worden geteld.

### **9.3 Liquiditeitsprogrammarechten**

Een programma dat afzonderlijk wordt aangenomen, kan de financiering van Fonds-inventarisatie, routingdiensten, monitoring of andere opdrachten uitvoeren.

- of een overdracht een geschenk, endowment, lening, terugvorderbare bijdrage of aankoop is;
- de voogdij en controle;
- de regels voor terugtrekking, terugbetaling, verlies en prioriteit;
- de in aanmerking komende vergoeding en beloning;
- bestuursrechten;
- beoordelings- en rapportagemethoden; en
- opschorting, beëindiging en rechtsmiddelen.

De huidige `SwapPool` creëert geen Fonds-share token of automatische contributeursrecht.
