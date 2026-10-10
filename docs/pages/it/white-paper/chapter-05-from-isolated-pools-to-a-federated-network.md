## **5. Da Fondi isolati a una rete federata**

L'attuale Protocol v1.1.0 supporta l'esecuzione diretta attraverso un solo `SwapPool` e fornisce una quotazione solo `SwapRouter`. Non esegue percorsi multi-hop, HTLC, percorsi escrow, rete di lotti o compensazione tra reti.

Questo capitolo propone come i Fondi governate in modo indipendente possano coordinarsi senza rinunciare alle proprie regole di ammissione, valutazione, limite, tasse, inventario, autorizzazione e governance.

### **5.1 Misure separate di scambio e di adempimento**

La Federazione potrebbe migliorare l'accesso all'inventario, ma non fonderà il buono e scambierà i cicli di vita. Qualsiasi attuazione misurerebbe separatamente questi eventi:

1. è indicato un percorso;
2. uno o più swap di fondo eseguono e liquidano in catena;
3. il titolare presenta all'emittente le unità del buono;
4. l'emittente adempie all'impegno; e
5. le unità soddisfatte sono scaricate.

Più percorsi citati o eseguiti non dimostrano maggiore realizzazione. Le relazioni indicano la coorte, il periodo, le attività, il metodo di valutazione e il timestamp, le esclusioni, le correzioni e le prove fuori catena richieste dall'appendice C.

**Il percorso illustrativo:** Una scuola ha i buoni per il mais, ma ha bisogno di buoni per il trasporto. Un servizio di percorso identifica gli inventari compatibili del Fondo. L'esecuzione sarebbe riuscita solo se ogni salto autorizzato separatamente rimaneva entro i suoi limiti di quotazione, limiti, commissioni, inventario e politica. Gli swap risultanti non dimostrerebbero che nessuno degli emittenti abbia più tardi adempiuto ai propri impegni in materia di buoni.

### **5.2 Servizi di routing e di riequilibrio proposti**

Un futuro servizio di rotta potrebbe supportare due attività distinte.

**Esecuzione iniziata dal partecipante.** In considerazione delle risorse di input e output, di un importo e dei vincoli degli utenti, il servizio potrebbe identificare un percorso e preparare l'esecuzione. Ogni salto avrebbe la sua Fondo responsabile, quote, autorizzazione, commissioni, limiti, inventario e ricevuta. Batch atomici, HTLC e custodia sono possibili futuri scelte di esecuzione, non attuale comportamento Protocollo.

**Opt-in Fondo riequilibrio.** Responsabili dei Fondi potrebbe pubblicare obiettivi di inventario, controparti autorizzate, classi di attività, limiti di deviazione delle quote e limiti per periodo. Un servizio responsabile potrebbe cercare cicli o catene compatibili e eseguire solo le intenzioni autorizzate.

Il riequilibrio sarebbe opt-in. Un fondo potrebbe consentire percorsi per i partecipanti rifiutando un riequilibrio in uscita, oppure potrebbe consentire solo attività, controparti e importi selezionati. Ogni salto eseguito produrrebbe una ricevuta e le eventuali commissioni di servizio sarebbero comunicate separatamente dalle commissioni di fondo e protocollo.

#### **5.2.1 Confederazione e interoperabilità**

Le implementazioni indipendenti potrebbero gestire i propri registri, interfacce, servizi di percorso e profili di politica, scegliendo al contempo standard di dati e ricezione compatibili. L'esecuzione multiprofile rimarrà dipendente dalla distribuzione.

Un profilo compatibile:

- identificare le sue radici di registro, gli operatori dei servizi, i responsabili del trattamento e i termini applicabili;
- divulgare le controparti ammesse e le controparti rifiutate, le attività, gli adattatori e le rotte;
- applicare le autorizzazioni, i limiti, le tasse e i vincoli di inventario di ogni fondo partecipante;
- conservare le prove di quote-to-receipt per set; e
- consentire alle Fondi altrimenti funzionali di lasciare o selezionare un altro registro senza cancellare i saldi o gli obblighi dell'emittente.

La compatibilità può aumentare i percorsi di scambio disponibili e ridurre la dipendenza da un registro o da un operatore. Non rende la rete, CLC App, GEF o un altro Fondo responsabile dell'adempimento di un emittente.

### **5.3 Modello proposto per la rete e per le tariffe di servizio**

L'attuale Protocol v1.1.0 addebiterà una quota di fondo e, quando configurata, una quota di protocollo aggiuntiva su uno swap di fondo diretto. Tali tasse correnti rimangono distinte.

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
