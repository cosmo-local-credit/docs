## **8. Portata tecnica e crescita**

Questo capitolo descrive il lavoro opzionale o proposto. Non si tratta di un elenco di caratteristiche garantite presenti nell'attuale CLC App o Protocol v1.1.0.

Le possibili aree di lavoro includono:

- routing di esecuzione tra fondo compatibili, con registrazione, quotazione, limite, tariffa e inventario;
- gli adattatori escrow o HTLC temporaneamente bloccati per l'esecuzione transdominiale in caso di non disponibilità di regolamento atomico;
- le interfacce e gli strumenti politici per i Fondi piccole o personali;
- i registri verificabili per i buoni, le fondo, i metodi di cambio, i limiti, i responsabili del trattamento e le commissioni;
- i connettori specifici del fornitore di pagamenti, i flussi di cassa e i controlli di ammissibilità;
- le connessioni di attività fungible con sedi di liquidità esterne per il riequilibrio e la liquidità dei pagamenti; e
- la conversione dei tesori coperti dalla politica per la copertura adottata, i costi operativi o i mandati di liquidità.

I prezzi di mercato esterno non determinano il debito di un emittente in base ai termini del buono. Un fondo potrebbe utilizzare un riferimento esterno protetto per un asset fungible, ma il suo metodo di cambio pubblicato, i limiti, le commissioni e l'inventario reggerebbero le sue quotazioni.

### **8.1 Norme proposte per il servizio di rotta e SDK**

**La scoperta.** Un servizio di rotta proposto richiederebbe i registri identificati per l'ammissione di attività, i metodi di cambio, i limiti, le commissioni, l'inventario, gli incidenti e le informazioni del controllore. I registri in cache includono limiti di freschezza e identificatori di sorgente.

**Profili di rete.** Un cliente potrebbe supportare più di un profilo di base di registro o di politica. Essa indicherebbe al partecipante quale profilo, controparti, adattatori, vincoli e operatori di servizi responsabili utilizza un preventivo. Un percorso a profilo incrociato dovrebbe soddisfare tutte le condizioni applicabili.

**Politica del percorso.** Un operatore responsabile potrebbe escludere dipendenze o controparti non sicure e applicare massimali a livello di percorso, requisiti di freschezza e criteri sanitari. Questi segnali supporterebbero una decisione; non garantiscono l'adempimento o la protezione contro le perdite.

**Tariffe e limiti.** Un preventivo indicherebbe le commissioni del gruppo, eventuali commissioni aggiuntive del protocollo in corso e eventuali commissioni di routing o di servizio proposte separatamente. L'esecuzione respingerebbe le quotazioni scadute o i limiti violati.

**Atomicità e recupero.** L'esecuzione multi-hop sarebbe atomica dove possibile. In caso di utilizzo di HTLC o di escrow, il servizio avrebbe rivelato i tempi di uscita, i percorsi di interrompimento, i responsabili del controllo, le procedure di incidente e i rischi residui.

**Proposta di rete di lotti e di riequilibrio.** Un servizio di opt-in potrebbe raccogliere intenzioni di riequilibrio e cercare cicli o catene compatibili. Sarebbe:

1. pubblicare una ricevuta leggibile in macchina che identifichi i cicli eseguiti, le attività, gli importi, i timestamp di valutazione e le commissioni;
2. applicare i massimali per periodo e le politiche di controparte adottate;
3. rifiutare attività che violino l'autorizzazione, i limiti o l'inventario disponibile del fondo partecipante; e
4. conservare le entrate e le entrate deterministe per la revisione e la gestione delle controversie.

**Requisiti dell'SDK.** Un SDK per le rotte eseguite fornirebbe una mappatura deterministica del quote-to-receipt, controlli di invarianti per hop, codici di errore comprensibili e registri amichevoli all'audit. L'attuale Protocol v1.1.0 `SwapRouter` fornisce solo quote; non esegue tali rotte proposte.

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
