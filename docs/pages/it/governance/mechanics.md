# Meccanismi di governance

La governance in Cosmo-Local Credit (CLC) è divisa tra ruoli distinti piuttosto che assegnata a un'autorità universale. Questa pagina descrive le opzioni di governance per le reti compatibili CLC-; non prescrive una sola forma giuridica, un unico sistema di voto o un'unica organizzazione.

Grassroots Economics Foundation (GEF) gestisce l'app web progressiva pubblica su `cosmolocal.credit` e i suoi servizi di supporto. In tale ruolo, GEF può mantenere interfacce e cataloghi, applicare standard minimi di inserimento o di sicurezza, moderare il contenuto, limitare le funzionalità dell'app e coordinare le operazioni tecniche. A meno che non accetti espressamente un altro ruolo per un particolare accordo, GEF non è l'emittente di un buono creato dall'utente, il gestore di un fondo creato dall'utente, un garante, un assicuratore, un custode, un creditore, un mutuatario, un redentore o una parte di una transazione tra utente e utente.

La Commissione [Termini di servizio](/it/governance/terms) governare l'utilizzo dell'app pubblica e spiegare in dettaglio queste responsabilità.

[Concetti e vocabolario](/it/introduction/concepts) Mappa questi ruoli pubblici per la proprietà contrattuale, l'amministrazione proxy, il controllo delle dipendenze, la moderazione del catalogo e la ricezione delle commissioni.

## Responsabilità per ruolo

- **Emittenti di buono** governano le loro offerte. Pubblicano informazioni precise sull'identità, la capacità, l'offerta, la valutazione, la scadenza, la presentazione, l'adempimento, la situazione geografica, il calendario, le tasse, le restrizioni e i rimedi e rimangono responsabili del rispetto di tali impegni.
- **Responsabili dei Fondi** regolano l'ammissione, la custodia delle attività, la valutazione, le commissioni, i limiti, l'inventario, le riserve, i contributi, i conflitti, la provenienza, la configurazione, le pause, gli aggiornamenti e qualsiasi meccanismo di garanzia o di ripartizione delle perdite per i loro fondo.
- **Direttori di registro e di servizio** può disciplinare le fondo o le attività che figurano in un registro e le norme e le commissioni per l'inviato, il monitoraggio, il supporto alla liquidità o altri servizi condivisi.
- **Utenti** decidono se l'emittente, il buono, il fondo, l'offerta e la transazione sono accettabili e leciti per loro. L'iscrizione al registro o l'iscrizione all'app non è una garanzia o un'approvazione.

Una persona o un'organizzazione può svolgere più di un ruolo, ma deve rivelare ciascun ruolo e i conflitti e gli obblighi che ne derivano.

## Strutture di governance responsabili

Un fondo, un registro o un servizio compatibile con CLC- può essere governato da una fondazione senza scopo di lucro, cooperativa, gruppo comunitario, federazione, azienda, multisig, agenzia pubblica, consiglio istituzionale, sistema di voto in catena o da un'altra struttura responsabile. Qualunque sia la struttura scelta, i partecipanti dovrebbero essere in grado di determinare:

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

Questi strumenti sono facoltativi. La discussione di token voting, assicurazione condivisa, routing su tutta la rete, netting o programmi di liquidità non significa che ogni funzionalità sia attiva nell'app pubblica o sia governata da GEF. Ogni distribuzione deve identificare i propri fattori decisionali, contratti, fornitori di servizi e politiche.

## Azione dell'interfaccia e stato in catena

L'operatore di app o il gestore di registro può nascondere, segnalare, sospendere o rimuovere un elemento da un'interfaccia. Tale azione non richiede necessariamente la sospensione di un contratto intelligente, l'annullamento di una transazione completata, la rimozione di un record di blockchain pubblico, l'eliminazione di un saldo o l'adempimento di un obbligo tra gli utenti. I piani di governance dovrebbero distinguere i controlli di interfaccia dalle autorità che esistono in catena e dai doveri legali che continuano fuori della catena.

Per un approccio più ampio, vedere il Libro bianco [Capitolo Meccanica della governance](/it/white-paper/chapter-11-governance-mechanics).
