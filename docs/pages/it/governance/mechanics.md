# Meccanismi di governance

La governance in Cosmo-Local Credit (CLC) è divisa tra ruoli distinti anziché assegnata a un'autorità universale. Questa pagina descrive le opzioni di governance per reti compatibili con CLC; non prescrive una sola forma giuridica, un unico sistema di voto o un'unica organizzazione.

Grassroots Economics Foundation (GEF) gestisce la CLC App, l'applicazione web progressiva pubblica su `cosmolocal.credit`, e i suoi servizi di supporto. In tale ruolo, GEF può mantenere interfacce e cataloghi, applicare standard minimi di inserimento o sicurezza, moderare contenuti, limitare le funzionalità dell'App e coordinare le operazioni tecniche. A meno che non accetti espressamente un altro ruolo per uno specifico accordo, GEF non è l'emittente di un buono creato dall'utente, il Responsabile di un Fondo creato dall'utente, un garante, un assicuratore, un custode, un creditore, un debitore, il responsabile del riscatto o una parte di una transazione tra utenti.

I [Termini di servizio](/it/governance/terms) disciplinano l'uso dell'App pubblica e spiegano queste responsabilità in dettaglio.

[Concetti e vocabolario](/it/introduction/concepts) mette in relazione questi ruoli pubblici con la proprietà dei contratti, l'amministrazione dei proxy, il controllo delle dipendenze, la moderazione del catalogo e la ricezione delle commissioni.

## Responsabilità per ruolo

- **Emittenti di buono** governano le loro offerte. Pubblicano informazioni precise sull'identità, la capacità, l'offerta, la valutazione, la scadenza, la presentazione, l'adempimento, la situazione geografica, il calendario, le tasse, le restrizioni e i rimedi e rimangono responsabili del rispetto di tali impegni.
- **Responsabili dei Fondi** regolano l'ammissione, la custodia delle attività, la valutazione, le commissioni, i limiti, l'inventario, le riserve, i contributi, i conflitti, la provenienza, la configurazione, le pause, gli aggiornamenti e qualsiasi meccanismo di garanzia o di ripartizione delle perdite per i loro fondo.
- **Gli amministratori del registro e dei servizi** possono stabilire quali pool o attività appaiono in un registro e le regole operative per la scoperta, il routing, il monitoraggio, il supporto alla liquidità o altri servizi condivisi. La loro autorità di servizio non si estende automaticamente alle attività del Fondo o agli obblighi dell'emittente.
- **Utenti** decidono se l'emittente, il buono, il fondo, l'offerta e la transazione sono accettabili e leciti per loro. L'iscrizione al registro o l'iscrizione all'app non è una garanzia o un'approvazione.

Una persona o un'organizzazione può svolgere più di un ruolo, ma deve rivelare ciascun ruolo e i conflitti e gli obblighi che ne derivano.

## Gestione a livello di Fondo

Un Responsabile del Fondo è responsabile della cura pubblicata, della valutazione, delle limitazioni, delle commissioni, delle condizioni di scambio, degli impegni accettati, della politica di inventario, delle controversie locali, del processo di riparazione e dei cambiamenti di governance autorizzati. L'autorità tecnica può essere ripartita tra un `SwapPool` proprietario, amministratore delegato, controllori di dipendenze, firmatari multisig e destinatari delle commissioni; le norme pubbliche dovrebbero identificare tali poteri piuttosto che trattarli come un unico ruolo.

La riparazione all'interno di un Fondo rimane affidata alla sua amministrazione autorizzata e alle parti responsabili. Un Steward può correggere una configurazione, sospendere un'ammissione, affrontare una controversia locale o adottare un rimedio nell'ambito della sua autorità. Non può cancellare la cronologia delle transazioni pubbliche o assolvere in silenzio all'obbligo di un emittente di fornire un Buono separato.

## Operazioni a livello di rete

Le applicazioni di produzione CLC e CLC Core gestiscono la scoperta condivisa, la quotazione dei percorsi, la preparazione del portafoglio-batch, il coordinamento delle relè, l'indicizzazione, la riconciliazione e le ricevute di scambio raggruppate. Gli incidenti a livello di rete possono includere dati di rotta obsoleti o non disponibili, errori di riconciliazione, dipendenze non supportate, guasti di relè e problemi di interoperabilità tra Fondo.

Un operatore può mettere in pausa o correggere il proprio servizio, aggiornare lo stato indicizzato, escludere i percorsi non supportati, spiegare un guasto e coordinarsi con gli Steward interessati. Tale ruolo operativo non conferisce l'autorizzazione a modificare le regole di un Fondo indipendente, spostare il suo inventario, rinunciare all'impegno di un emittente o risolvere una controversia in materia di esecuzione locale.

Anche l'attuale routing avviato dai partecipanti non autorizza il riequilibrio automatico del Fondo. Qualsiasi servizio di riequilibrio, compensazione, liquidità condivisa, garanzia o assicurazione richiederebbe autorità, controlli, parti responsabili e condizioni pubblicate separati.

## Amministrazione a livello di registro

Un amministratore di registro o catalogo può affrontare elenchi errati, l'integrità dell'identità e dei metadati, le autorizzazioni del registro, lo stato di pubblicazione, i guasti del servizio e le procedure di correzione, sospensione o ricorso. Una registrazione di registro aiuta la scoperta; essa stessa non è una valutazione della capacità dell'emittente, una garanzia del Fondo o un record di adempimento.

La rettifica o la rimozione di una quotazione non revoca un regolamento on-chain, non rimuove un saldo, non modifica la configurazione indipendentemente governata di un Fondo né assolve un impegno in essere. Tali risultati richiedono l'autorità e il processo applicabili al contratto, al Fondo, all'emittente o all'obbligo giuridico in questione.

## Evidenza del percorso e responsabilità

Uno scambio routed preserva i confini tra i suoi hop. Ogni Fondo applica i propri diritti di ammissione, quotazione, limite massimo del saldo, commissioni, inventario e poteri di controllore. CLC Core raggruppa il risultato tecnico in un'unica ricevuta, ma tale ricevuta non fonde la governance del Fondo né trasferisce la responsabilità di un emittente all'operatore di rotta.

La ricevuta può dimostrare la selezione del percorso, l'autorizzazione, lo stato della transazione, gli importi di regolamento per salto e le commissioni. La presentazione nel mondo reale, l'adempimento, la soddisfazione e lo scarico richiedono prove separate e rimangono con l'emittente identificato e il processo applicabile.

## Strutture di governance responsabili

Un Fondo, un registro o un servizio compatibile con CLC può essere governato da una fondazione senza scopo di lucro, una cooperativa, un gruppo comunitario, una federazione, un'impresa, un multisig, un'agenzia pubblica, un consiglio istituzionale, un sistema di voto on-chain o un'altra struttura responsabile. Qualunque sia la struttura scelta, i partecipanti dovrebbero essere in grado di determinare:

- che è autorizzato a prendere e ad eseguire decisioni;
- il modo in cui gli asset, gli emittenti e i partecipanti vengono ammessi, esaminati, sospesi o rimossi;
- il modo in cui vengono stabilite e modificate le valutazioni, le commissioni, i limiti, le riserve, le garanzie e altre impostazioni sostanziali;
- quali dipendenze o contratti possono essere aggiornati, sostituiti, sospesi o sigillati in modo permanente;
- le modalità di divulgazione e di gestione dei conflitti di interesse;
- quali registri, notifiche, approvazioni e periodi di riesame si applicano;
- quali poteri di emergenza esistono e come viene riesaminato il loro utilizzo; e
- il modo in cui i partecipanti possono lamentarsi, uscire, migrare o affrontare obblighi irrisolti.

Le norme pubblicate dovrebbero corrispondere ai poteri disponibili nei contratti e nei servizi pertinenti. La governance dovrebbe mantenere le decisioni sostanziali trasparenti e verificabili e non dovrebbe descrivere convertibilità, liquidità, rendimenti, assicurazioni, riserve o garanzie in modo più ampio di quanto la parte responsabile possa effettivamente fornire.

## Opzioni di governance tecnica

Qualora il voto token sia appropriato, una distribuzione può utilizzare [OpenZeppelin Governatore](https://docs.openzeppelin.com/contracts/4.x/api/governance) contratti e un'interfaccia come Tally. Altre implementazioni possono basarsi su approvazioni multisig, risoluzioni di cooperazione, decisioni del consiglio di amministrazione, mandati delle agenzie pubbliche o processi ibridi.

Questi strumenti sono facoltativi. L'App pubblica attualmente fornisce il routing della stessa catena avviato dai partecipanti attraverso CLC Core, ma ciò non implica voto token, riequilibrio automatico, compensazione, assicurazione condivisa, programmi di liquidità di rete o governance centrale da parte di GEF. Ogni implementazione deve identificare i suoi attuali responsabili delle decisioni, contratti, fornitori di servizi e politiche.

## Azione dell'interfaccia e stato in catena

L'operatore di app o il gestore di registro può nascondere, segnalare, sospendere o rimuovere un elemento da un'interfaccia. Tale azione non richiede necessariamente la sospensione di un contratto intelligente, l'annullamento di una transazione completata, la rimozione di un record di blockchain pubblico, l'eliminazione di un saldo o l'adempimento di un obbligo tra gli utenti. I piani di governance dovrebbero distinguere i controlli di interfaccia dalle autorità che esistono in catena e dai doveri legali che continuano fuori della catena.

Per un approccio più ampio, vedere il Libro bianco [Capitolo Meccanica della governance](/it/white-paper/chapter-11-governance-mechanics).
