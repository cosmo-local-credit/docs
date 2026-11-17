## **9. Voorgestelde economie voor liquiditeitsprogramma's**

Dit hoofdstuk beschrijft een toekomstig, afzonderlijk vastgesteld model. Het is geen huidige App-functie, aanbod, beloofd rendement of recht dat ontstaat door een storting in `SwapPool`.

### **9.1 Voorgestelde inkomstenbronnen**

Een toekomstige netwerkbegroting kan:

1. een bekendgemaakte **netwerkafdracht** als aandeel van de geïnde kosten van deelnemende Fondsen;
2. afzonderlijke routing- of servicekosten van geïmplementeerde gedeelde diensten; en
3. andere uitdrukkelijk aangenomen, ontvangen inkomsten.

Bruto Fondskosten die Fondsen behouden zijn geen netwerkinkomsten. Het huidige Protocol v1.1.0 gebruikt een ander model: een optionele protocolvergoeding komt bovenop de Fondskosten en wordt rechtstreeks naar de geconfigureerde ontvanger gestuurd.

De routeringsworkflow van de productieversie van de CLC App voegt geen afzonderlijke vergoeding voor de routedienst toe. Een gerouteerde wissel kan bij iedere stap wel Fonds- en protocolkosten maken. Deze huidige kosten per stap mogen niet als de voorgestelde netwerkafdracht worden aangeduid of opnieuw als toekomstige service-inkomsten worden geteld.

### **9.2 Illustratieve rake wiskunde**

Als een deelnemend Fonds 2,00% Fondskosten rekent en een vastgestelde netwerkafdracht 20% van die Fondskosten ontvangt, is het voorgestelde effectieve tarief van de netwerkafdracht over de gerouteerde waarde:

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
