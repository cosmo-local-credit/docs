## A. Modello di misurazione e tasse proposto

L'appendice definisce un quadro di misurazione proposto. Protocol v1.1.0 non registra l'adempimento dell'emittente, il rilascio nel mondo reale o ogni campo di dati richiesto di seguito.

### Definizioni dell'evento e dello stock

Per la classe di buono *j*, coorte o periodo *t*, e un metodo di valutazione divulgato *m*:

- `O_{j,t,m}`: valore degli impegni in sospeso ammissibili al limite di misurazione.
- `X_{j,t,m}`: valore degli swap di fondo completati durante il periodo.
- `P_{j,t}`: unità validamente presentate all'emittente per il rimborso.
- `F_{j,t}`: unità presentate con soddisfazione da parte dell'emittente attestata separatamente.
- `G_{j,t}`: unità soddisfatte con un record di estinzione che impedisce il riutilizzo.

`O` non può essere dedotto solo dall'offerta di token. Una politica di valutazione deve identificare l'emittente responsabile e escludere, se del caso, l'inventario detenuto dall'emittente, le unità bruciate, le unità scadute, le unità rilasciate, i saldi di prova, i saldi inaccessibili e i token le cui condizioni non creano un impegno di terzi in sospeso.

Ogni misura valutata deve pubblicare l'unità, la fonte, il metodo di valutazione, il timestamp e il trattamento dei tassi di cambio divergenti del fondo. Un trasferimento in catena può supportare `X` o prove di presentazione; non stabilisce da sola `F` o `G`.

### Misure di adempimento basate su coorte

Per una coorte di presentazioni di rimborso valide:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Utilizzare la stessa coorte chiusa o matura in ogni numeratore e denominatore. Rapporto respinto, ritirato, scaduto, contestato, parzialmente soddisfatto, corretto e presentazioni ancora aperte separatamente.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

La latenza di esecuzione misura il servizio dell'emittente dopo la presentazione. La durata della conservazione è una misura separata e non deve essere etichettata come latenza di rimborso.

### Misure di velocità distinte

La velocità di estinzione degli impegni proposta può essere calcolata solo se `O` e il valore soddisfatto utilizzano lo stesso metodo di valutazione:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Una misura di attività di swap fondo è separata:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Nessuno dei due valori dimostra l'impatto sociale, la capacità dell'emittente, la redditività o la convertibilità dei contanti.

### Rivenuti della rete proposti

Lasciate:

- `PF_t` le commissioni del fondo generate durante il periodo;
- `NR_t` è il reddito di rete proposto effettivamente ricevuto come quota divulgata di tali tasse del fondo;
- `RF_t` siano separate le commissioni di rottazione o di servizio proposte effettivamente ricevute; e
- `χ_t` è la quota misurata dei ricavi ricevuti che è ammissibile e convertibile per un utilizzo denominato in contanti dichiarato dopo i costi e i vincoli politici.

Dal punto di vista proposto del bilancio della rete:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Non aggiungere `PF_t` a `NR_t`: il rake è un trasferimento dalle tasse del fondo lordo e altrimenti sarebbe contato due volte. L'attuale Protocol v1.1.0 supporta invece una tassa di protocollo aggiuntiva; le sue entrate devono essere segnalate separatamente da questo modello di rake proposto.
