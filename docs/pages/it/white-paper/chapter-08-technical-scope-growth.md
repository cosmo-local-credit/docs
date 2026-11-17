## **8. Portata tecnica e crescita**

Questo capitolo distingue il servizio di instradamento attualmente in produzione dalle funzionalità facoltative o proposte. Una capacità attuale descritta qui resta specifica della distribuzione pubblica di CLC App e CLC Core; non è automaticamente una caratteristica dei contratti Protocol v1.1.0 o di un'altra distribuzione.

L'attuale distribuzione pubblica comprende:

- scoperta, attraverso un grafo, dei buoni raggiungibili tramite Fondi compatibili;
- quotazioni autorevoli a un blocco fissato per percorsi selezionati sulla stessa catena;
- calcolo delle commissioni del Fondo e del Protocollo per ciascun passaggio, degli output minimi e delle scadenze;
- simulazione dell'intero batch, firma del partecipante ed esecuzione tramite relay con Calibur;
- una transazione sulla stessa catena che annulla tutte le chiamate del percorso se una chiamata fallisce; e
- ricevute raggruppate e riconciliazione degli eventi di regolamento per ciascun passaggio.

Le aree di crescita possibili comprendono:

- gli adattatori escrow o HTLC temporaneamente bloccati per l'esecuzione transdominiale in caso di non disponibilità di regolamento atomico;
- ulteriori profili di registro o policy e routing tra profili;
- il riequilibrio dell'inventario del Fondo e la compensazione dei lotti;
- le interfacce e gli strumenti politici per i Fondi piccole o personali;
- i registri verificabili per i buoni, le fondo, i metodi di cambio, i limiti, i responsabili del trattamento e le commissioni;
- i connettori specifici del fornitore di pagamenti, i flussi di cassa e i controlli di ammissibilità;
- le connessioni di attività fungible con sedi di liquidità esterne per il riequilibrio e la liquidità dei pagamenti; e
- la conversione dei tesori coperti dalla politica per la copertura adottata, i costi operativi o i mandati di liquidità.

I prezzi di mercato esterno non determinano il debito di un emittente in base ai termini del buono. Un fondo potrebbe utilizzare un riferimento esterno protetto per un asset fungible, ma il suo metodo di cambio pubblicato, i limiti, le commissioni e l'inventario reggerebbero le sue quotazioni.

### **8.1 Servizio di instradamento attuale e regole più ampie**

**Scoperta.** CLC Core mantiene un grafo riconciliato a partire da cataloghi configurati, relazioni dei registri, parametri dei Fondi, commissioni, limiti, saldi ed eventi della catena. Stima ciò che un portafoglio di sessione può raggiungere e segnala i dati obsoleti. La configurazione pubblica cerca percorsi fino a tre passaggi. La scoperta non costituisce una promessa eseguibile.

Per un percorso selezionato, CLC Core legge i Fondi partecipanti allo stesso blocco fissato e riproduce l'aritmetica supportata di `SwapPool`. Dettaglia le commissioni del Fondo e del Protocollo, imposta output minimi per ciascun passaggio e una scadenza, prepara le chiamate del portafoglio e simula l'intero batch. Token, quotatori, portafogli o condizioni del Fondo non supportati vengono rifiutati.

**Esecuzione attuale.** Il partecipante firma un batch Calibur che contiene l'azzeramento dell'autorizzazione, la nuova autorizzazione e il prelievo con limiti per ciascun passaggio. Un relayer invia una transazione sulla stessa catena con `revertOnFailure` attivo. Ciò fornisce un comportamento tutto o niente a livello di transazione per il percorso corrente. Non equivale ad atomicità tra catene, instradamento HTLC o tramite escrow, riequilibrio automatico o compensazione.

**Ricevute e operazioni.** L'App raggruppa il percorso sotto un ID di tracciamento e registra lo stato della transazione, l'ordine dei passaggi, i Fondi, le coppie di token, gli importi quotati e regolati, le commissioni del Fondo e del Protocollo e i residui intermedi. Il servizio monitora la freschezza del grafo, l'enumerazione dei percorsi e i risultati delle quotazioni, gli errori di simulazione, la durata della riconciliazione, le correzioni e i membri indicizzati irrisolti o sconosciuti. La telemetria operativa non dimostra l'adempimento dell'emittente.

**Profili di rete.** Un client potrebbe supportare più di un profilo radice o policy del registro. Indicherebbe al partecipante il profilo, le controparti, gli adattatori, i vincoli e gli operatori di servizi responsabili usati da una quotazione. Un percorso tra profili dovrebbe soddisfare tutte le condizioni applicabili a ciascun passaggio.

**Politica del percorso.** Un operatore responsabile potrebbe escludere le dipendenze o le controparti non sicure e applicare limiti a livello di percorso, requisiti di freschezza e criteri sanitari. Questi segnali avrebbero supportato una decisione; non avrebbero garantito l'adempimento o la protezione dalla perdita.

**Commissioni e limiti.** L'attuale quotazione specifica le commissioni del Fondo e le eventuali commissioni aggiuntive del Protocollo per ciascun passaggio. L'App pubblica non aggiunge attualmente una commissione separata per il servizio di instradamento. Le eventuali commissioni per servizi futuri saranno comunicate separatamente. L'esecuzione rifiuta quotazioni scadute o limiti superati.

Quando un percorso futuro non può utilizzare l'attuale lotto atomico della stessa catena e invece utilizza HTLC o escrow, il servizio rivelerebbe timeout, percorsi di aborto, controllori responsabili, procedure di incidente e rischi residui.

Un servizio opt-in potrebbe raccogliere le intenzioni di riequilibrio e cercare cicli o catene compatibili. Sarebbe:

1. pubblicare una ricevuta leggibile a macchina che identifichi i cicli eseguiti, le attività, gli importi, i timestamp della valutazione e le commissioni;
2. applicare i limiti massimi per periodo e le politiche delle controparti adottate;
3. rifiutare le attività che violano l'autorizzazione, i limiti o l'inventario disponibile di qualsiasi Fondo partecipante; e
4. conservare gli input e le ricevute deterministici per la revisione e la gestione delle controversie.

**Requisiti per SDK e interfacce.** Un'integrazione riutilizzabile dei percorsi dovrebbe fornire una corrispondenza deterministica dalla quotazione alla ricevuta, controlli invarianti per ciascun passaggio, codici di errore comprensibili e registri facili da verificare. L'attuale implementazione in produzione di CLC App e CLC Core fornisce queste funzioni per il proprio profilo. Il contratto Solidity `SwapRouter` di Protocol v1.1.0 resta di sola quotazione e non esegue il percorso.

#### **8.1.1 Specifica minima di compatibilità con la confederazione**

Un ecosistema Fondo che cerchi un routing a profilo incrociato pubblicherà informazioni leggibili dalla macchina per:

1. **Radici del registro:** Identificatori per attività, fondo, metodi di cambio, limiti e politiche sulle tasse, o una radice che li risolve deterministicamente.
2. **Ricevute:** il profilo, le attività entrate e uscite, gli importi, la fonte delle quote e il timestamp, l'istantanea limite, le commissioni, il risultato dell'inventario e il risultato dell'esecuzione per ogni salto.
3. **Segnali operativi:** informazioni limitate alla freschezza sull'inventario, sull'utilizzo limitato, sugli incidenti e su qualsiasi soddisfazione o protezione finanziata separate.
4. **Restrizioni politiche:** controparti autorizzate o negate, classi di attività, adattatori e eventuali requisiti di custodia.
5. **Codici di fallimento:** le spiegazioni deterministe per il rifiuto, la scadenza, il limite, l'inventario, la politica, la dipendenza o i fallimenti di incidenti.

Un profilo potrebbe aggiungere copertura, conformità, arbitrato o altri servizi senza rendere questi requisiti per la compatibilità di base di CPP. Ogni servizio facoltativo identificerebbe la parte responsabile, l'autorità, la portata e i termini.

### **8.2 Licenza, verifica e uscita**

I contratti Protocol v1.1.0 sono compatibili con EVM-. I contratti nella directory `src` del repository del protocollo sono pubblicati sotto AGPL-3.0, ad eccezione dei componenti di terzi non modificati identificati che conservano i propri termini. Le fonti, le API e le istruzioni di implementazione pubblicate supportano una revisione indipendente, ma non dimostrano di per sé un'audit, una implementazione sicura o una conformità legale.

Ogni implementazione avrebbe rivelato separatamente la sua versione di codice, la provenienza di build, gli indirizzi, i poteri di controllo e aggiornamento, lo stato di audit, gli specchi di registro e eventuali protezioni di blocco temporale o di pausa.

Una proposta **kit di forchetta** potrebbe includere:

1. scrittori di distribuzione deterministica;
2. le immagini del registro e gli strumenti di esportazione;
3. un processo documentato per riportare i servizi di percorso, i SDK e le interfacce a una nuova radice di registro;
4. una lista di controllo Responsabile del Fondo per lasciare in sicurezza un registro condiviso; e
5. un elenco di controllo migratorio per i buoni in sospeso, compresi gli avvisi dell'emittente, le scadenze di presentazione e di adempimento, l'accesso continuato ai registri e i rimedi.

Le forchette compatibili possono migliorare la resilienza quando comunità, cooperative, agenzie pubbliche, federazioni, multisig o operatori di servizi hanno bisogno di una governance diversa. La continuità effettiva dipende ancora dalla proprietà contrattuale, dalle chiavi, dalle dipendenze, dalle interfacce, dalle infrastrutture, dagli obblighi legali e dai servizi di terzi.
