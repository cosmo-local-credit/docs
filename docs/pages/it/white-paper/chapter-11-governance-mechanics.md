## **11. Meccanismi di governance**

Questo capitolo propone un modello di governance. Non rappresenta che l'attuale CLC App utilizzi il voto governance-token, i blocchi di tempo, l'assicurazione condivisa, un processo di rivendicazione o ogni controllo descritto di seguito. Ogni distribuzione dovrebbe identificare i propri fattori decisionali, le autorità, i contratti, i processi e le politiche.

- **Valori costituzionali:** L'obiettivo del programma è quello di promuovere l'ambiente, l'equità, la reciprocità, la non-dominanza e la resilienza.
- **Tipi di proposte:** variazioni delle tasse, del limite e dell'indice; mandati di liquidità; l'elenco delle riserve e le rimozioni; decisioni di copertura facoltativa; e barriere di parametri.
- **Processo responsabile:** assunzione → valutazione → revisione del rischio → approvazione → blocco di tempo se del caso → esecuzione. L'approvazione può provenire da amministratori, cooperative, agenzie pubbliche, federazioni, multisig, voto in catena o da un'altra struttura rivelata e responsabile.
- **soglie di omologazione:** parametrizzati per classe di azione, con soglie più elevate per le variazioni dell'indice di valore, i poteri di emergenza e altre azioni critiche.
- **Delegazione:** la delega facoltativa con mandati pubblici, la divulgazione dei conflitti e il richiamo.
- **Interruzioni di circuito:** le pause di emergenza con criteri stabiliti, gli operatori autorizzati, le condizioni di ripristino e i post-mortem richiesti.
- **Trasparenza:** le variazioni e i flussi pubblicati, con prove separate per il regolamento degli swap, l'adempimento dell'emittente, le riserve, l'utilizzo limite, il routing e i garante.

**Governance dei registri.** Una distribuzione CPP-compatibile può mantenere registri di scoperta per buoni, token e fondo. I controlli autorizzati possono aggiungere, aggiornare, sospendere o rimuovere le voci del registro attraverso il processo di governance divulgato della distribuzione. la rimozione del registro influisce sulla scoperta e sul percorso attraverso tale registro; non cancella da sola un token, non altera il saldo di un titolare, non adempie all'obbligo di un emittente o non invalida un contratto altrimenti funzionale.

Le norme di registro pubblicate dovrebbero rendere condizionato lo status e possono identificare ripetute non adempimenti, frodi o false dichiarazioni, comportamenti contrattuali non sicuri o persistenti violazioni dei principi pubblicati come motivi per la sospensione o la rimozione. Laddove possibile, il processo dovrebbe fornire un avviso, un'opportunità di rimedio e un percorso di ricorso. La rimozione di emergenza dovrebbe richiedere una relazione pubblica di incidente e un controllo automatico o il tramonto.

**Annunci proibiti.** In base a questo modello, un registro non ammetterebbe:

1. strumenti che finanziano o incentivano direttamente la distruzione ecologica al di là dei confini concordati, la violenza o l'armatura, l'estrazione forzata o l'abuso sistemico; o
2. una classe di buono che manca di termini chiari di presentazione e di adempimento, di responsabilità e di percorsi di rimedio.

L'elenco proibito sarebbe versionebile, verificabile pubblicamente e modificabile solo attraverso la soglia e il tempo di azione critica adottati, illustrati come Q3 + T3 nell'appendice D.

### **11.1 Governanza dei tassi di cambio e dei limiti**

**Cambiamenti bloccati nel tempo.** Un'implementazione secondo questo modello modificerebbe i metodi dei tassi di cambio e implementerebbe separatamente i parametri limite solo dopo un blocco temporale pubblico. Un percorso di emergenza utilizzerebbe un processo di autorizzazione rivelato separatamente e include un tramonto automatico o una revisione.

**Le soglie di approvazione.** Il modello propone soglie di approvazione più elevate per le variazioni della base dell'indice di valore e le variazioni globali del livello limite, soglie intermedi per le variazioni di terzi specifiche per il fondo e soglie standard per le variazioni di routine delle commissioni.

**Pubblicato feed.** Una distribuzione partecipante pubblicherà, per ciascun Fondo, le variabili dell'indice in catena, le fonti o i media dell'oracolo, la cadenza di aggiornamento, le finestre e le tappe limite e le modalità di fallimento o le costanti sicure.

**Criteri di pausa di emergenza.** Una distribuzione partecipante dichiarerebbe in anticipo condizioni come un'interruzione dell'oracolo, un'utilizzazione ad alto limite combinata con guasti di soddisfazione o un guasto invariante, insieme a controlli di riprese e requisiti di revisione post-incidente.

**Esempio di feed pubblico di indici per un fondo e buono**

- **Il simbolo:** per esempio, `Maize_50kg@IssuerY`.
- **Unità di riferimento:** Unità di indice (IUX).
- **Valore pubblicato:** 30.000 IUX.
- **Fonte:** media delle fonti identificate, come un'indagine sul mercato locale, il bulletin del ministero e la linea di base di distribuzione.
- **Aggiornamento della cadenza:** ogni giorno alle 18:00 EAT, con un blocco orario di 24 ore.
- **Modalità di fallimento:** congelare all'ultimo valore valido, applicare una politica di limite divulgata e fare una pausa dopo un'interruzione di 72 ore.
- **Ragione:** le note pubblicate e una registrazione delle modifiche effettuate dall'aggiornamento precedente.
- **Firmatari:** indirizzi multisig divulgati e soglia di omologazione.

### **11.2 Libro di riferimento proposto per i fondi assicurativi**

**Solo progettazione opzionale.** La presente guida si applica solo a una distribuzione che ha espressamente adottato e finanziato un fondo di assicurazione e pubblicato gli eventi coperti, i richiedenti ammissibili, l'entità responsabile, le attività, i limiti, le esclusioni, i requisiti di prova, il processo e i termini di gestione. Né l'attuale CLC App né GEF forniscono copertura solo perché questo disegno figura nel Libro bianco.

**Possibili trigger.** Una politica adottata potrebbe coprire il non adempimento definito da parte dell'emittente, un deficit di riserve di fondo o una perdita di bridge o escrow. Un incidente tecnico non si qualifica automaticamente; la politica applicabile controllerebbe.

**Valutazione.** L'organismo responsabile concilierebbe le ricevute delle transazioni, i saldi di inventario, le obbligazioni di garanzia, i registri di presentazione del riscatto, le risposte dell'emittente e altre prove richieste, per poi pubblicare un registro degli incidenti coerente con la privacy e la legge.

**Una cascata di perdita illustrativa.** Se ciascun strato esiste e si applica legalmente, una polizza potrebbe utilizzare: (1) obbligazioni di emittente responsabile o quote di garante → (2) riserve a livello di fondo → (3) un fondo di assicurazione di rete proposto → (4) una riduzione temporanea a un reclamo di copertura facoltativo, solo quando le condizioni preesistenti e la legge applicabile lo autorizzano espressamente → (5) recupero legale per prove di frode o abuso.

Un aggiustamento della copertura non riduce l'impegno sottostante di un emittente in merito al buono o non altera un saldo in catena, a meno che le condizioni preesistenti e la legge applicabile espressamente consentano tale risultato e non sia ottenuto il consenso richiesto dal titolare.

**Limiti e esclusioni.** La copertura pubblicata definirebbe i massimali, le presentazioni ammissibili, le prove, le finestre di domanda, le rotte o gli eventi esclusi, le restrizioni geografiche e il trattamento delle riserve esaurite. Un pagamento potrebbe essere pari a zero dopo il raggiungimento dei limiti applicabili.

**Calendario illustrativo di recupero.** Se approvato e pubblicato:

1. i crediti derivano prima dall'emittente responsabile o dal garante obbligazionario, poi dalle riserve di fondo applicabili, e poi dal fondo di assicurazione di rete proposto;
2. Qualsiasi riduzione di una domanda di copertura facoltativa sarebbe limitata alle condizioni di copertura preesistenti e alla legge applicabile, fino al massimale di incidenti pubblicato;
3. un piano di recupero potrebbe applicare una quota dichiarata del valore recuperato per un determinato periodo, dopo il quale qualsiasi deficit coperto rimanente sarebbe diventato una perdita registrata con un post mortem pubblico; e
4. ogni decisione fornisce una ricevuta con l'incidente ID, la domanda e i buoni interessati, la decisione, il piano di recupero e la finestra di ricorso.

### **11.3 Quadro di garanzia**

Questa sezione distingue la responsabilità dell'emittente, le protezioni facoltative del fondo e le garanzie di terzi. Le fondo possono competere su curazioni, termini e protezioni espressamente offerte senza implicare che CLC App, CPP, GEF o qualsiasi rete più ampia garantisca automaticamente un buono.

**Responsabilità dell'emittente di base**

- Ogni buono è prima di tutto responsabilità dell'emittente. L'emittente si impegna a fornire il bene, il servizio o l'equivalente liquido legale dichiarato secondo i suoi termini pubblicati.
- Gli emittenti pubblicheranno chi può presentare il buono, cosa significa soddisfare, dove e quando è disponibile, quali prove sono richieste e quali rimedi si applicano.
- Se un emittente non soddisfa, l'emittente è la principale parte responsabile. Le misure di protezione del fondo o della rete si applicano solo se adottate, finanziate e divulgate separatamente.

**Protezioni facoltative per i Fondi**

Un Responsabile del Fondo può scegliere di aggiungere una protezione strettamente definita ai buoni ammessi. Non è automatico e dovrebbe identificare la parte responsabile, il finanziamento, gli eventi ammissibili, i massimali, le finestre, le prove, gli esclusioni e i rimedi nei metadati del fondo e nei termini applicabili.

I tipi di protezione illustrativi includono:

1. **Copertura delle riserve:** dopo il non adempimento verificato da parte dell'emittente, l'entità responsabile del fondo paga un importo definito in un'attività di riserva designata, soggetto al suo massimale pubblicato e alle riserve finanziate disponibili.
2. **Swap-back window:** dopo un evento di qualificazione, il fondo offre un percorso di swap a tempo limitato verso l'attività precedentemente approvata o un'altra attività, soggetto a massimali e inventario. Si tratta di una protezione della liquidità dipendente dagli inventari, non di una promessa che ogni swap sia reversibile.
3. **Completamento alternativo:** la parte responsabile organizza un fornitore sostitutivo autorizzato entro un massimale di quantità o di valore pubblicato.
4. **Protezione della banda dei tassi di cambio:** per le classi di buoni selezionate, un fondo offre solo l'aggiustamento della copertura o il rimedio dello swap-back indicato nelle sue condizioni preesistenti. Ciò non riduce l'obbligo di garanzia sottostante dell'emittente.

**Possibili fonti di finanziamento**

- **obbligazioni dell'emittente:** la garanzia depositata dall'emittente o detenuta in una riserva rivelata e disponibile dopo un evento coperto verificato.
- **Riserva del Fondo:** le attività controllate dall'entità responsabile del fondo e assegnate alle protezioni da essa pubblicizzate.
- **obbligazioni di garanzia di terzi:** la garanzia depositata da un garante esterno identificato per gli emittenti, le classi di buoni o gli eventi indicati.

La partecipazione del garante dovrebbe seguire i criteri di ammissibilità pubblicati, la dimensione delle obbligazioni, i limiti di concentrazione, l'autorità di decisione e le norme di esecuzione legale.

**Procedura dei reclami**

Una politica adottata definisce i fattori scatenanti verificabili, come una scadenza di adempimento mancata dopo la presentazione di un rimborso valido, l'insolvenza verificata dell'emittente, un ponte coperto o un fallimento escrow o un stato di incidente formalmente dichiarato. Esso definirebbe anche:

- il modo in cui un partecipante apre una domanda e fornisce le prove di presentazione e di soddisfazione richieste;
- che verifica le condizioni del buono, le risposte dell'emittente e i registri tecnici;
- le finestre di decisione e di ricorso; e
- il percorso di pagamento autorizzato, le attività, i massimali e la ricevuta.

I proventi di recupero provenienti da emittenti, arbitrato o esecuzione legale riempirebbero le obbligazioni o le riserve applicabili in base alla politica pubblicata prima di essere utilizzati per l'accesso allo swap della rete CLC.

**Rivelazioni richieste**

Per ogni classe di fondo e di buono coperti, la parte responsabile pubblicherà:

- se un garante è assente, facoltativo o richiesto;
- dimensioni delle obbligazioni o delle riserve e massimali di concentrazione;
- i tipi di protezione, le attività, i tappi, le finestre e le esclusioni;
- i termini di presentazione, adempimento, rivendicazione e ricorso; e
- una dichiarazione in chiaro di chi garantisce cosa e cosa non è garantito.

**Principio di cura.** Responsabili dei Fondi e le strutture giuridiche o di governance responsabili sono responsabili delle protezioni che pubblicizzano. Una distribuzione CPP-compatibile può fornire standard, registri o politiche condivise opzionali, ma né CLC né GEF garantiscono automaticamente buoni o fondo.

### **11.4 Garda anti cattura**

In base a questo modello, le seguenti azioni critiche richiedono il livello di omologazione più elevato adottato e un lungo periodo di tempo:

1. modificare la proposta di cascata delle tasse, compresa la copertura e le priorità delle operazioni di base;
2. modificare le radici del registro canonico;
3. modificare l'ambito di copertura, i massimali dei crediti o l'autorità di decisione;
4. l'espansione dei poteri di pausa di emergenza; o
5. il debolezza della forcabilità, della trasparenza o degli impegni relativi alla sovranità dei Fondo indicati nel presente documento.

### **11.5 Procedura per la forca e l'uscita**

Se la governance fosse catturata o i valori fossero sostanzialmente spostati, le comunità, Responsabili dei Fondi, e gli operatori potrebbero cercare di uscire forcando lo strato di governance della rete. La continuità dei fondo e dei buoni sottostanti dipende dai contratti, dalle chiavi, dalle interfacce, dalle infrastrutture, dai servizi di terzi e dagli obblighi applicabili.

Un processo di uscita potrebbe:

1. **Pubblica un' istantanea:** esportare i registri, i buoni, i valori, i limiti e le politiche sulle tariffe selezionati, quindi pubblicare un hash di snapshot firmato.
2. **Redistribuire i servizi di governance:** implementare nuove radici di registro, servizi di rotta e eventuali moduli di tariffa o copertura adottati nell'ambito di una nuova struttura responsabile.
3. **Ri-registrazione:** consentire a Responsabili dei Fondi di aderire registrando i propri indirizzi Fondo sotto la nuova radice senza richiedere ai titolari di migrare buoni altrimenti funzionali.
4. **Clienti di ripetizione:** aggiungere il nuovo root come profilo di rete selezionabile nei SDK e nelle interfacce, con eventuali modifiche predefinite effettuate attraverso il processo di governance divulgato.
5. **Gestire un periodo di bridge:** mantenere percorsi compatibili dove sono sicuri e negare percorsi che violino le regole del nuovo profilo.

L'obiettivo della progettazione è che lasciare un registro canonico non disattiva i Fondi locali altrimenti funzionali. La continuità effettiva rimane dipendente dall'impiego; La federazione è uno strato di scoperta e di coordinamento.
