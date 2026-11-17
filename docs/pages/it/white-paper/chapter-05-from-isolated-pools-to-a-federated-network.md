## **5. Da Fondi isolati a una rete federata**

L'attuale Protocol v1.1.0 supporta l'esecuzione diretta attraverso uno `SwapPool` e fornisce un contratto Solidity `SwapRouter` di sola quotazione. La CLC App e CLC Core in produzione coordinano percorsi sulla stessa catena, avviati dai partecipanti, attraverso un massimo di tre Fondi preparando un batch Calibur firmato. I contratti non eseguono autonomamente un percorso con più passaggi e l'attuale flusso App/Core non fornisce HTLC tra catene, percorsi tramite escrow, riequilibrio automatico dei Fondi, compensazione in batch o clearing tra reti.

Il presente capitolo spiega l'attuale percorso dei partecipanti e lo distingue dal coordinamento proposto che richiederebbe una nuova autorità del Fondo. In entrambi i casi, i pool indipendenti mantengono le proprie regole di ammissione, valutazione, limite, commissioni, inventario, autorizzazione e governance.

### **5.1 Misure separate di scambio e di adempimento**

L'instradamento può migliorare l'accesso all'inventario, ma non unisce il ciclo di vita del buono a quello dello scambio. La misurazione deve mantenere separati questi eventi:

1. è indicato un percorso;
2. uno o più swap di fondo eseguono e liquidano in catena;
3. il titolare presenta all'emittente le unità del buono;
4. l'emittente adempie all'impegno; e
5. le unità soddisfatte sono scaricate.

Più percorsi citati o eseguiti non dimostrano maggiore realizzazione. Le relazioni indicano la coorte, il periodo, le attività, il metodo di valutazione e il timestamp, le esclusioni, le correzioni e le prove fuori catena richieste dall'appendice C.

**Percorso illustrativo:** Una scuola possiede buoni di mais ma ha bisogno di buoni per il trasporto. CLC Core può identificare gli inventari Fondo compatibili, citare il percorso selezionato in un blocco fissato e preparare le chiamate limitate per il portafoglio della scuola. L'esecuzione ha successo solo se ogni salto rimane entro i suoi limiti di quotazione, limiti, commissioni, inventario, comportamento supportato e politica. Gli swap risultanti non dimostrano che uno degli emittenti abbia in seguito adempiuto ai suoi impegni sui buoni.

### **5.2 Routing attuale dei partecipanti e riequilibrio proposto**

Due attività richiedono autorità diverse.

**Esecuzione attuale avviata dal partecipante.** Dati un buono di input, un buono di output e un importo, CLC Core stima i percorsi a partire dalle disponibilità idonee del partecipante. Per il percorso selezionato, legge i Fondi allo stesso blocco fissato, produce una quotazione autorevole, simula l'intero batch e prepara tre chiamate per passaggio: azzeramento dell'autorizzazione, nuova autorizzazione e `SwapPool.withdraw`. Il partecipante firma e il relayer invia una transazione Calibur sulla stessa catena con `revertOnFailure` attivo. Se una chiamata fallisce, tutte le chiamate del percorso vengono annullate. L'App raggruppa la transazione e il regolamento di ciascun passaggio in un'unica ricevuta.

Ogni passaggio conserva il proprio Fondo responsabile, gli input di quotazione, l'autorizzazione, le commissioni, i limiti, l'inventario e l'evento di regolamento. L'App attuale non aggiunge una commissione separata per il servizio di instradamento. Il flusso corrente supporta portafogli EOA/Calibur compatibili con l'App, non Safe o altri portafogli a contratto.

**Riequilibrio volontario dei Fondi.** I Responsabili dei Fondi potrebbero pubblicare obiettivi di inventario, controparti ammesse, classi di attività, limiti di deviazione delle quotazioni e limiti per periodo. Un servizio responsabile potrebbe cercare cicli o catene compatibili ed eseguire soltanto le intenzioni autorizzate.

Il riequilibrio sarebbe opzionale. Un Fondo può consentire ai partecipanti ordinari di utilizzare rotte senza autorizzare un servizio a spostare l'inventario per il riequilibrio. Un futuro mandato potrebbe consentire solo attività, controparti e importi selezionati. Ogni hop eseguito produrrebbe una ricevuta e qualsiasi commissione di servizio sarebbe divulgata separatamente dalle commissioni del Fondo e del protocollo.

L'esecuzione cross-chain HTLC o escrow è anche separata dall'attuale lotto atomico della stessa catena. Ciò richiederebbe l'adozione di regole relative al timeout, all'aborto, al controllore, al recupero e al rischio residuo.

#### **5.2.1 Confederazione e interoperabilità**

Le implementazioni indipendenti possono gestire i propri registri, interfacce, servizi di percorso e profili delle politiche scegliendo standard compatibili per i dati e la ricezione. L'attuale App pubblica utilizza il suo profilo di servizio e registro configurato. L'esecuzione cross-profile rimane dipendente dalla distribuzione.

Un profilo compatibile:

- identificare le sue radici di registro, gli operatori dei servizi, i responsabili del trattamento e i termini applicabili;
- divulgare le controparti ammesse e le controparti rifiutate, le attività, gli adattatori e le rotte;
- applicare le autorizzazioni, i limiti, le tasse e i vincoli di inventario di ogni fondo partecipante;
- conservare le prove di quote-to-receipt per set; e
- consentire alle Fondi altrimenti funzionali di lasciare o selezionare un altro registro senza cancellare i saldi o gli obblighi dell'emittente.

La compatibilità può aumentare i percorsi di scambio disponibili e ridurre la dipendenza da un registro o da un operatore. Non rende la rete, CLC App, GEF o un altro Fondo responsabile dell'adempimento di un emittente.

### **5.3 Modello proposto per la rete e per le tariffe di servizio**

L'attuale Protocol v1.1.0 addebiterà una quota di fondo e, quando configurata, una quota di protocollo aggiuntiva su uno swap di fondo diretto. Tali tasse correnti rimangono distinte.

La borsa di routing della produzione applica tali commissioni correnti in modo indipendente ad ogni salto e le espone dettagliatamente nel preventivo e nella ricevuta. Attualmente non aggiunge una tariffa separata per il servizio di routing.

Un programma futuro potrebbe ricevere separatamente:

1. a) **Quota di rete**, definito come una quota dichiarata delle commissioni raccolte da parte delle fondo partecipanti; e
2. a) **tariffa di rotta o di servizio**, pagato per un servizio futuro identificato.

Il reddito di rete proposto non è una percentuale aggiuntiva applicata all'importo totale dello swap dopo aver già calcolato la commissione del fondo. Per il fondo `p`:

τ_p = f_p · r_p

in cui `f_p` è il tasso delle commissioni di fondo e `r_p` è la quota proposta di tale commissione di fondo assegnata al programma di rete.

Per un periodo misurato:

- **tasse del fondo** sono la somma delle tasse effettivamente riscosse per ciascuna fondo;
- **ricevute per la rottura di rete** sono le quote dichiarate di tali commissioni riscosse;
- **ricevute per le tasse di servizio** le commissioni di rotta o di servizio sono addebitate separatamente; e
- **ricevute delle tasse del programma** ricevute pari per la rete più ricevute per le tariffe di servizio.

Nessuna categoria viene contata due volte. Le commissioni attuali del protocollo non sono incluse a meno che una politica adottata separatamente non reindirizzi legalmente le ricevute effettive delle commissioni del protocollo nel futuro programma.

Per un'approssimazione aggregata, let:

- `Q_swap` è il valore degli swap di fondo eseguiti per la coorte e per il periodo definiti; e
- `τ` è il tasso effettivo del raggio di rete proposto e le commissioni di servizio individuate separatamente sul valore dello swap eseguito.

Allora:

F ≈ τ · Q_swap

Questo è un'approssimazione analitica, non una promessa di entrate. Ogni input richiede una coorte, un periodo, un'unità, un timestamp di valutazione, un'esclusione e una politica di correzione.

#### **5.3.1 Ricevute in contanti e in natura ammissibili**

Le commissioni possono arrivare in attività fungibili ammissibili in contanti o in buoni e altre attività in natura. Le ricevute in natura non possono pagare automaticamente le spese in contanti o i crediti di copertura. Qualsiasi scambio o conversione richiederebbe autorità, inventario disponibile, luoghi divulgati, limiti e esecuzione effettiva.

Che `χ` sia la quota realizzata delle entrate delle commissioni che è ammissibile in contanti dopo restrizioni alle politiche, conversioni fallite e slippage. Le ricevute utilizzabili in contanti sono:

F_cash ≈ χ · F

L'analisi di bilancio e di equilibrio utilizzerebbe `F_cash` realizzato, non le commissioni quotate lotte o il valore nominale dell'inventario in natura. Un futuro programma riferirebbe separatamente le commissioni lorde del fondo, le entrate per la rete, le entrate per i servizi, la composizione delle attività, i risultati della conversione e le entrate utilizzabili in contanti.

### **5.4 Programmi di liquidità proposti**

Un futuro programma di liquidità separatamente documentato potrebbe assegnare attività a fondo designati o servizi di routing. Gli attuali contratti `SwapPool` non controllano azioni Fondo né creano automaticamente diritti di rimborso, prelievo, ricompensa, governance o profitto.

Qualsiasi programma pubblicerebbe:

- l'entità responsabile e l'entità partecipante Responsabili dei Fondi;
- le attività contribuite e se il trasferimento è rimborsabile, ritirabile, donato o dotato;
- accordi di custodia e controllo tecnico;
- gli usi consentiti, i limiti, i blocchi, i cancelli di ritiro e l'assegnazione delle perdite;
- l'ammissibilità delle commissioni o degli incentivi e se l'importo può essere pari a zero;
- la segnalazione, i conflitti, i reclami e i rimedi; e
- la migrazione, la cessazione e il trattamento delle attività e degli obblighi rimanenti.

I rischi materiali includono inventario difficile da scambiare o adempiere, scarsa idoneità di liquidità, non esecuzione dell'emittente, fallimenti contrattuali o di fornitore, cambiamenti di governance e restrizioni all'uscita. Limiti, riserve, ricevute e schede di controllo possono ridurre o rivelare alcuni rischi; non eliminano le perdite.

Per una metrica analitica ex-post, lasciate:

- `ϕ` è la frazione realizzata delle entrate delle tasse del programma assegnate in base ai termini adottati dal programma; e
- `K` è il valore misurato delle attività coperte dal programma secondo un metodo specificato.

Allora:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Questa metrica descrive il flusso di commissioni realizzato per asset del programma misurato. Non è APY, una previsione, un dividendo o un rendimento garantito. Le relazioni manterrebbero separati il volume dello swap, la presentazione del rimborso, l'adempimento dell'emittente, il rilascio, la durata della detenzione, le perdite, i prelievi e le ricevute delle commissioni.
