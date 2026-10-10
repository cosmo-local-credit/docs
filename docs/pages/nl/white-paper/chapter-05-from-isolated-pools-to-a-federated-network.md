## **5. Van geïsoleerde Fondsen tot een federaal netwerk**

Stroom Protocol v1.1.0 ondersteunt directe uitvoering via een `SwapPool` en bevat slechts een citaat `SwapRouter`. Het voert geen meervoudige routes, HTLC's, escrow routes of lotnetten uit of cross-network clearing.

In dit hoofdstuk wordt voorgesteld hoe onafhankelijk geregeerde Fondsen zich kunnen coördineren zonder hun eigen toelating, waardering, limiet, vergoeding, inventarisatie, machtiging en governance-regels op te geven.

### **5.1 Afzonderlijke uitwisselings- en vervullingsmaatregelen**

De Federatie zou de toegang tot inventaris kunnen verbeteren, maar zij zou de waardebon niet samenvoegen en levenscycli niet uitwisselen.

1. een route wordt aangegeven;
2. een of meer Fonds-swaps uitvoeren en afwikkelen in de keten;
3. een houder aan de uitgever waardebon-eenheden presenteert;
4. de uitgever voldoet aan de verbintenis; en
5. voltooide eenheden worden afgevoerd.

Meer genoteerde of uitgevoerde routes bewijzen niet meer voldoening. In de verslagen zou worden vermeld welke cohorte, periode, activa, waarderingsmethode en tijdstempel, uitsluitingen, correcties en bewijsmateriaal buiten de keten die in aanhangsel C vereist zijn.

**Illustratieve route:** Een school heeft maïsvouchers, maar heeft transportvoucher nodig. Een routedienst identificeert compatibele Poolvoorraad. De uitvoering zou alleen succesvol zijn als elke afzonderlijk gemachtigde hop binnen de quotalimieten, limieten, kosten, voorraad en beleid bleef.

### **5.2 Voorgestelde routing- en rebalanceringsdiensten**

Een toekomstige routedienst zou twee verschillende activiteiten kunnen ondersteunen.

**Een door de deelnemer geïnitieerde executie.** Gezien input en output assets, een bedrag en gebruikersbeperkingen, zou de dienst een pad kunnen identificeren en uitvoering kunnen voorbereiden. Elke hop zou zijn eigen verantwoordelijke fonds, quote, autorisatie, vergoedingen, limieten, inventaris en ontvangst hebben.

**Opt-in Fonds herbalanseren.** Fondsbeheerders kon inventarisdoelstellingen publiceren, toegestane tegenpartijen, activaclassen, quoted-deviation limits en per periode limieten.

Een fonds zou deelnemende routes kunnen toestaan terwijl hij de uitgaande rebalancing weigert, of het kan alleen geselecteerde activa, tegenpartijen en bedragen mogelijk maken.

#### **5.2.1 Confederatie en interoperabiliteit**

Onafhankelijke implementaties zouden hun eigen registers, interfaces, routediensten en beleidsprofielen kunnen beheren terwijl ze compatibele gegevens- en ontvangstnormen kiezen.

Een compatibel profiel zou:

- het identificeren van de registerwortels, dienstverleners, verwerkers en toepasselijke termen;
- het openbaar maken van toegestane en afgewezen tegenpartijen, activa, adapters en routes;
- de vergunningen, beperkingen, kosten en inventarisbeperkingen van elke deelnemende Fonds toepassen;
- het bewaren van aanmeldingsbewijzen per hop; en
- het mogelijk maken dat andersfunctioneel functionele fondsen een ander register kunnen verlaten of selecteren zonder de saldo's of verplichtingen van de uitgever te wissen.

De compatibiliteit kan de beschikbare uitwisselingsroutes vergroten en de afhankelijkheid van één register of een operator verminderen.CLC App, GEF, of een andere Fonds die verantwoordelijk is voor de nakoming van een uitgever.

### **5.3 Voorstel voor een model van netwerkrak en dienstverlening**

De huidige Protocol v1.1.0 vraagt een Poolvergoeding en, wanneer geconfigureerd, een aanvullende Protocolvergoed voor een directe Poolswap.

Een toekomstig programma kan afzonderlijk ontvangen:

1. (a) **netwerkrak**, gedefinieerd als een aangegeven aandeel van de verzamelde Poolvergoedingen van de deelnemende Fondsen; en
2. (a) **routing- of servicegeld**, voor een geïdentificeerde toekomstige dienst.

De voorgestelde netwerkrak is geen extra percentage dat wordt toegepast op het volledige swapbedrag nadat de Poolvergoeding reeds is geteld.`p`:

τ_p = f_p · r_p

waar `f_p` is het Fonds-fee tarief en `r_p` is het voorgestelde aandeel van die Poolvergoeding dat wordt toegewezen aan het netwerkopprogramma.

Voor een gemeten periode:

- **Bruto Poolvergoedingen** is de som van de daadwerkelijk verzamelde Poolvergoedingen voor elke fonds;
- **ontvangsten voor netwerkraken** zijn de aangegeven aandelen van deze verzamelde heffingen;
- **ontvangsten van de dienstverleningskosten** er worden afzonderlijk routing- of servicegeld geheven; en
- **ontvangsten van de programmafgifte** gelijke ontvangsten voor netwerkkosten plus ontvangsten van de servicegeld.

Geen enkele categorie wordt tweemaal geteld; de lopende protocollen zijn niet inbegrepen, tenzij een afzonderlijk goedgekeurd beleid de daadwerkelijke ontvangsten van de protocolling rechtmatig omleidt naar het toekomstige programma.

Voor een geaggregeerde benadering:

- `Q_swap` is de waarde van uitgevoerde Fonds swaps voor de gedefinieerde cohorte en periode; en
- `τ` is het effectieve tarief van de voorgestelde netwerkrak en afzonderlijk geïdentificeerde servicegeld ten opzichte van die uitgevoerde swapwaarde.

En dan:

F ≈ τ · Q_swap

Dit is een analytische benadering, geen belofte van inkomsten. Elke input vereist een opgegeven cohort, periode, eenheid, waarderingstijdstempel, uitsluitingen en correctiebeleid.

#### **5.3.1 In aanmerking komende ontvangsten in contanten en in natura**

De kosten kunnen komen in cash-eligible fungiebele activa of in waardebonnen en andere in natura activa. In natura ontvangsten kunnen niet automatisch betalen contante uitgaven of dekking claims. Elke uitwisseling of conversie zou autoriteit, beschikbare inventaris, openbaar gemaakte locaties, limieten en daadwerkelijke uitvoering vereisen.

Laat `χ` het gerealiseerde aandeel van de ontvangsten van honoraria zijn dat cash-eligibel is na beleidsbeperkingen, mislukte omschakelingen en slip.

F_cash ≈ χ · F

De begroting en de break-even analyse zouden realiseerde `F_cash` In een toekomstig programma zouden de bruto-poolvergoedingen, netwerkrekeningen, servicekosten, activacompositie, omrekeningsresultaten en contante ontvangsten apart worden vermeld.

### **5.4 Voorgestelde liquiditeitsprogramma's**

Een toekomstig, afzonderlijk gedocumenteerd liquiditeitsprogramma zou activa kunnen toewijzen aan aangewezen fondsen of routingdiensten.`SwapPool` de contracten maken geen aandelen van Fonds of creëren automatisch terugbetaling, intrekking, beloning, governance of winstrechten.

Elk programma zou publiceren:

- de verantwoordelijke entiteit en deelnemende Fondsbeheerders;
- bijdragen en of de overdracht terugbetaalbaar, onttrekkbaar, gespend of geschonken is;
- bewakings- en technisch-controlemaatregelen;
- toegestane toepassingen, beperkingen, vergrendelingen, terugtrekkingspoorten en verliesallocatie;
- de in aanmerking komendheid van een vergoeding of stimulans en of het bedrag nul kan zijn;
- verslaggeving, conflicten, klachten en rechtsmiddelen; en
- migratie, beëindiging en behandeling van resterende activa en verplichtingen.

Materiële risico's omvatten inventaris die moeilijk te ruilen of uit te voeren is, lage cash-eligibility, niet-prestatie van de uitgever, contract- of leveranciersfalen, veranderingen in governance en beperkingen op exit. Limits, reserves, ontvangsten en dashboards kunnen sommige risico' s verminderen of onthullen; ze elimineren geen verlies.

Voor een ex-post analytische metric:

- `ϕ` is het gerealiseerde deel van de ontvangsten van programmavergoedingen die zijn toegewezen op grond van de door het programma goedgekeurde voorwaarden; en
- `K` is de gemeten waarde van activa die onder het programma vallen volgens één aangegeven methode.

En dan:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Deze metric beschrijft gerealiseerde kostenvloei per gemeten programma-actief. Het is niet APY, een prognose, een dividend of een gegarandeerd rendement. Rapporten zouden het swapvolume, de terugbetalingsaanbieding, de nakoming van de uitgever, de afgifte, de houdingsduur, verliezen, onttrekkingen en ontvangsten van honoraria gescheiden houden.
