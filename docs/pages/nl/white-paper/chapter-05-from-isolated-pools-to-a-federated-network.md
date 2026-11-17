## **5. Van geïsoleerde Fondsen tot een federaal netwerk**

Het huidige Protocol v1.1.0 ondersteunt directe uitvoering via één `SwapPool` en biedt een Solidity-`SwapRouter` die alleen offertes berekent. De productieversies van de CLC App en CLC Core coördineren door deelnemers gestarte routes binnen één blockchainnetwerk via maximaal drie Fondsen door één ondertekende Calibur-walletbatch voor te bereiden. De contracten voeren zelf geen route met meerdere stappen uit. De huidige App/Core-workflow biedt geen cross-chain HTLC's, escrowroutes, automatische herbalancering van Fondsen, batchverrekening of verrekening tussen netwerken.

Dit hoofdstuk legt de huidige route voor deelnemers uit en onderscheidt deze van de voorgestelde coördinatie die een nieuwe Fonds-autoriteit vereist. In beide gevallen behouden de onafhankelijke Fondsen hun eigen regels inzake toelating, waardering, limiet, vergoeding, voorraad, machtiging en governance.

### **5.1 Afzonderlijke uitwisselings- en vervullingsmaatregelen**

Routering kan de toegang tot voorraad verbeteren, maar voegt de levenscyclus van een Waardebon niet samen met die van een swap. Metingen moeten deze gebeurtenissen gescheiden houden:

1. een route wordt geoffreerd;
2. één of meer Fondsswaps worden on-chain uitgevoerd en afgewikkeld;
3. een houder biedt eenheden van een Waardebon aan de Uitgever aan;
4. de Uitgever komt de toezegging na; en
5. de geleverde eenheden worden afgehandeld.

Meer genoteerde of uitgevoerde routes bewijzen niet meer voldoening. In de verslagen zou worden vermeld welke cohorte, periode, activa, waarderingsmethode en tijdstempel, uitsluitingen, correcties en bewijsmateriaal buiten de keten die in aanhangsel C vereist zijn.

**Illustratieve route:** Een school bezit maïsbonnen maar heeft vervoerbonnen nodig. CLC Core kan compatibele Fondsvoorraden vinden, het gekozen pad offreren op basis van één vastgezet blok en begrensde contractaanroepen voor de wallet van de school voorbereiden. De uitvoering slaagt alleen als iedere stap binnen de offerte, limieten, kosten, voorraad, ondersteunde werking en het beleid blijft. De resulterende swaps bewijzen niet dat een van de Uitgevers later zijn toezeggingen is nagekomen.

### **5.2 Huidige routing van deelnemers en voorgestelde herbalancering**

Twee activiteiten vereisen verschillende autoriteit.

**Huidige, door de deelnemer gestarte uitvoering.** Op basis van een invoerwaardebon, een doelwaardebon en een bedrag schat CLC Core mogelijke paden uit de daarvoor geschikte bezittingen van de deelnemer. Voor een gekozen route leest CLC Core de Fondsen op één vastgezet blok, maakt een gezaghebbende offerte, simuleert de volledige batch en bereidt per stap drie aanroepen voor: de bestaande toestemming op nul zetten, een nieuwe toestemming verlenen en een begrensde `SwapPool.withdraw` uitvoeren. De deelnemer ondertekent en de relayer dient één Calibur-transactie binnen hetzelfde blockchainnetwerk in met `revertOnFailure` ingeschakeld. Als één aanroep mislukt, worden alle aanroepen van de route teruggedraaid. De App bundelt de transactie en de afwikkeling per stap in één overzicht.

Iedere stap behoudt zijn eigen verantwoordelijke Fonds, invoer voor de offerte, autorisatie, kosten, limieten, voorraad en afwikkelingsgebeurtenis. De huidige App voegt geen afzonderlijke vergoeding voor de routedienst toe. De huidige workflow ondersteunt EOA- en Calibur-wallets die met de App werken, maar geen Safes of andere contractwallets.

**Opt-in Fonds herbalancering.** Fondsbeheerders kunnen inventarisdoelen, toegestane tegenpartijen, activaklassen, quotadeviatielimieten en limieten per periode publiceren. Een verantwoordelijke dienst zou kunnen zoeken naar compatibele cycli of ketens en alleen de toegestane intenties uitvoeren.

Herbalansering zou opt-in zijn. Een Fonds kan gewone deelnemende routes toestaan zonder een dienst te machtigen voorraad te verplaatsen ter herbalancering. Een toekomstig mandaat zou alleen geselecteerde activa, tegenpartijen en bedragen mogelijk kunnen maken. Elke uitgevoerde hop zou een ontvangstbewijs opleveren, en eventuele servicekosten zouden afzonderlijk van de Fonds- en Protocolkosten worden bekendgemaakt.

Cross-chain uitvoering met HTLC's of escrow staat ook los van de huidige atomaire batch binnen één blockchainnetwerk. Hiervoor zouden regels nodig zijn voor time-outs, afbreken, verantwoordelijke beheerders, herstel en resterende risico's.

#### **5.2.1 Confederatie en interoperabiliteit**

Onafhankelijke implementaties kunnen hun eigen registers, interfaces, routediensten en beleidsprofielen beheren en tegelijk voor compatibele gegevens- en transactieoverzichtsstandaarden kiezen. De huidige openbare App gebruikt haar geconfigureerde register- en serviceprofiel. Uitvoering tussen profielen blijft implementatieafhankelijk.

Een compatibel profiel zou:

- het identificeren van de registerwortels, dienstverleners, verwerkers en toepasselijke termen;
- het openbaar maken van toegestane en afgewezen tegenpartijen, activa, adapters en routes;
- de vergunningen, beperkingen, kosten en inventarisbeperkingen van elke deelnemende Fonds toepassen;
- het bewaren van aanmeldingsbewijzen per hop; en
- het mogelijk maken dat andersfunctioneel functionele fondsen een ander register kunnen verlaten of selecteren zonder de saldo's of verplichtingen van de uitgever te wissen.

Compatibiliteit kan meer uitwisselingsroutes beschikbaar maken en de afhankelijkheid van één register of exploitant verminderen. Ze maakt het netwerk, de CLC App, GEF of een ander Fonds niet verantwoordelijk voor de nakoming door een Uitgever.

### **5.3 Voorgesteld model voor netwerkafdracht en servicekosten**

Het huidige Protocol v1.1.0 rekent Fondskosten en, indien geconfigureerd, een aanvullende protocolvergoeding voor een directe Fondsswap. Deze huidige kosten blijven van elkaar onderscheiden.

De productieversie van de gerouteerde wissel past deze huidige kosten bij iedere stap afzonderlijk toe en specificeert ze in de offerte en het transactieoverzicht. Zij voegt momenteel geen afzonderlijke vergoeding voor de routedienst toe.

Een toekomstig programma kan afzonderlijk ontvangen:

1. een **netwerkafdracht**, gedefinieerd als een vastgesteld aandeel van de geïnde Fondskosten van deelnemende Fondsen; en
2. een **routerings- of servicevergoeding**, geheven voor een geïdentificeerde toekomstige dienst.

De voorgestelde netwerkafdracht is geen aanvullend percentage over het volledige swapbedrag nadat de Fondskosten al zijn meegerekend. Voor Fonds `p`:

τ_p = f_p · r_p

waarbij `f_p` het tarief van de Fondskosten is en `r_p` het voorgestelde aandeel van die Fondskosten dat aan het netwerkprogramma wordt toegewezen.

Voor een gemeten periode:

- **bruto Fondskosten** zijn de som van de daadwerkelijk geïnde Fondskosten van ieder Fonds;
- **ontvangsten uit de netwerkafdracht** zijn de vastgestelde aandelen van die geïnde kosten;
- **ontvangsten uit servicevergoedingen** zijn afzonderlijk geïnde routerings- of servicevergoedingen; en
- **ontvangsten uit programmakosten** zijn de ontvangsten uit de netwerkafdracht plus de ontvangsten uit servicevergoedingen.

Geen enkele categorie wordt tweemaal geteld; de lopende protocollen zijn niet inbegrepen, tenzij een afzonderlijk goedgekeurd beleid de daadwerkelijke ontvangsten van de protocolling rechtmatig omleidt naar het toekomstige programma.

Voor een geaggregeerde benadering:

- `Q_swap` is de waarde van uitgevoerde Fondsswaps voor het gedefinieerde cohort en de periode; en
- `τ` is het effectieve tarief van de voorgestelde netwerkafdracht en afzonderlijk geïdentificeerde servicevergoedingen ten opzichte van die uitgevoerde swapwaarde.

En dan:

F ≈ τ · Q_swap

Dit is een analytische benadering, geen belofte van inkomsten. Elke input vereist een opgegeven cohort, periode, eenheid, waarderingstijdstempel, uitsluitingen en correctiebeleid.

#### **5.3.1 In aanmerking komende ontvangsten in contanten en in natura**

De kosten kunnen komen in cash-eligible fungiebele activa of in waardebonnen en andere in natura activa. In natura ontvangsten kunnen niet automatisch betalen contante uitgaven of dekking claims. Elke uitwisseling of conversie zou autoriteit, beschikbare inventaris, openbaar gemaakte locaties, limieten en daadwerkelijke uitvoering vereisen.

Laat `χ` het gerealiseerde aandeel van de ontvangsten van honoraria zijn dat cash-eligibel is na beleidsbeperkingen, mislukte omschakelingen en slip.

F_cash ≈ χ · F

De begroting en de break-even analyse zouden realiseerde `F_cash` In een toekomstig programma zouden de bruto-poolvergoedingen, netwerkrekeningen, servicekosten, activacompositie, omrekeningsresultaten en contante ontvangsten apart worden vermeld.

### **5.4 Voorgestelde liquiditeitsprogramma's**

Een toekomstig, afzonderlijk gedocumenteerd liquiditeitsprogramma zou activa kunnen toewijzen aan aangewezen Fondsen of routediensten. De huidige `SwapPool`-contracten creëren geen Fondsaandelen en geen automatisch recht op terugbetaling, opname, beloning, governance of winst.

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
