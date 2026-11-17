## **6. Proposta di liquidità e governance a livello di rete**

L'esperienza della storica Sarafu Network ha motivato la ricerca su due domande di progettazione più ampie:

1. come Fondi gestiti in modo indipendente potrebbero coordinare servizi di liquidità e instradamento; e
2. come i servizi condivisi possano rimanere responsabili con l'aumento della partecipazione.

Un progetto CLC proposto introduce un **Fondo di rete CLC proposto** come sistema di compensazione e coordinamento dei saldi a livello di rete, oltre a un **token di governance CLC proposto**. Nessuno dei due esiste nell'attuale App o in Protocol v1.1.0. Altre implementazioni potrebbero usare cooperative, agenzie pubbliche, federazioni, multisig, operatori di servizi o altre strutture responsabili senza adottare nessuna delle due proposte.

### **6.1 Controlli verso il basso e opzionalità**

L'attuale Protocol v1.1.0 può applicare limiti di saldo dei token Fondo e controlli di inventario. Tali controlli limitano le azioni contrattuali selezionate; non impediscono la non esecuzione dell'emittente, la perdita di valore, la perdita di chiavi, il fallimento del contratto o qualsiasi altra perdita.

Una futura distribuzione potrebbe aggiungere interruttori di circuito, blocchi temporali, riserve, garanzie o assicurazioni. Qualsiasi protezione avrebbe bisogno di una parte responsabile identificata, di un evento coperto, di un finanziamento, di un limite massimo, di esclusioni, di una durata, di prove, di un processo di rivendicazione e di termini applicabili.

La governance proposta dovrebbe mantenere ristretti e verificabili i poteri di registrazione e di servizio. Le azioni ordinarie possono utilizzare procedure di avviso, ritardo, pubblicazione di ragioni, ricorso e correzione. Le azioni di emergenza dovrebbero produrre registrazioni degli incidenti e scadere o ricevere un riesame nell'ambito di una politica adottata.

La CLC App e CLC Core in produzione forniscono ora la scoperta di percorsi compatibili e l'esecuzione con più passaggi sulla stessa catena per i percorsi autorizzati dai partecipanti attraverso il profilo pubblico configurato. Le quotazioni applicano, a ogni passaggio, limiti, commissioni, disponibilità dell'inventario e simulazione; un batch firmato per il portafoglio viene annullato per intero se una chiamata fallisce.

Questo servizio non autorizza il riequilibrio automatico dei Fondi né il controllo dell'inventario dei Fondi a livello di rete. Riequilibrio, compensazione in batch, esecuzione HTLC o tramite escrow tra domini e governance della liquidità condivisa richiederebbero autorità, software, limiti, gestione degli errori e regole adottate aggiuntivi. Un maggior numero di scambi quotati o eseguiti non dimostra di per sé l'adempimento dei buoni o un impatto sociale.
