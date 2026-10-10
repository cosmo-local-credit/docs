## A. Voorgestelde meet- en vergoedingsmodel

Protocol v1.1.0 registreert niet de nakoming van de emittenten, real-world discharge of elk hieronder vereiste gegevensveld.

### De definities van gebeurtenis en voorraad

Voor voucherklasse *j*, cohorte of periode *t* en een aangegeven waarderingsmethode *m*:

- `O_{j,t,m}`: waarde van uitlopende in aanmerking komende verplichtingen bij de meetgrens.
- `X_{j,t,m}`: waarde van voltooide Fonds swaps gedurende de periode.
- `P_{j,t}`: eenheden die geldig aan de uitgever worden gepresenteerd voor terugbetaling.
- `F_{j,t}`: gepresenteerde eenheden met afzonderlijk aangetoonde voldoening van de uitgever.
- `G_{j,t}`: voltooide eenheden met een ontladingsregister die hergebruik voorkomt.

`O` kan niet alleen afgeleid worden uit het aanbod van tokens. Een meetbeleid moet de verantwoordelijke uitgever identificeren en, indien van toepassing, de door de emittente gehouden inventaris, verbrandde eenheden, vervallen eenheden en afgevuurde eenheden uitvoeren, testbalansen, ontoegankelijke saldo's en tokens waarvan de voorwaarden geen uitstaande verplichting van derden creëren.

Iedere gewaardeerde maatstaf moet de eenheid, bron, waarderingsmethode, tijdstempel en behandeling van uiteenlopende Fondswisselkoersen publiceren. Een overdracht op de blockchain kan bewijs voor `X` of een aanbieding ter inwisseling ondersteunen, maar stelt op zichzelf `F` of `G` niet vast.

### Cohortgebaseerde vervullingsmaatregelen

Voor een cohorte van geldige terugbetalingsaanbiedingen:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Gebruik dezelfde gesloten of rijpe cohorte in elke teller en noemer. Rapport afgekeurd, ingetrokken, verlopen, betwist, gedeeltelijk volbracht, gecorrigeerd en nog open presentaties apart.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

De latentie van nakoming meet de uitgevende dienst na presentatie.

### Verschillende snelheidsmetingen

Een voorgestelde snelheid van verbintenisontlading mag alleen worden berekend wanneer `O` en de vervuld waarde dezelfde waarderingsmethode gebruiken:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Een Fonds swap-activiteitsmaatregel is afzonderlijk:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Beide waarden bewijzen geen maatschappelijke impact, vermogen van de uitgever, winstgevendheid of cash convertibility.

### Voorgestelde inkomsten uit het netwerk

Laat:

- `PF_t` zijn bruto Poolvergoedingen die tijdens de periode worden gegenereerd;
- `NR_t` is de voorgestelde netwerkrak die daadwerkelijk werd ontvangen als een openbaar deel van deze Poolvergoedingen;
- `RF_t` zijn afzonderlijk voorgestelde routing- of servicegeld die daadwerkelijk zijn ontvangen; en
- `χ_t` is het gemeten aandeel van de ontvangen inkomsten dat in aanmerking komt en converteerbaar is voor een aangegeven gebruik in contant valuta na kosten en beleidsbeperkingen.

Uit het voorgestelde netwerkbegrotingsperspectief:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Niet toevoegen `PF_t` aan `NR_t` De kosten van de vergoeding worden in het algemeen niet meer dan een halfjaar berekend.Protocol v1.1.0 de ontvangsten daarvan moeten afzonderlijk worden gerapporteerd van dit voorgestelde rake-model.
