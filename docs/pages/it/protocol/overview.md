# Protocollo

I contratti di Protocol v1.1.0 forniscono i componenti on-chain del **Protocollo di messa in comune degli impegni (CPP)** descritto nel [Capitolo 1](/it/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) del Libro bianco. Questo riferimento segue la versione pubblica [`v1.1.0`](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Consulti [Concetti e vocabolario](/it/introduction/concepts) per i livelli del prodotto, i ruoli responsabili, il ciclo di vita delle azioni, i valori, i limiti, le commissioni e i termini relativi allo stato usati in questa sezione.

Grassroots Economics Foundation (GEF) gestisce l'applicazione web progressiva disponibile su [cosmolocal.credit](https://cosmolocal.credit), che offre un modo per interagire con questi contratti. L'app e i contratti sono distinti. La gestione dell'interfaccia non rende di per sé GEF l'emittente di un buono, il Responsabile di un Fondo, un custode, garante o controparte di una transazione dell'utente. Questi ruoli dipendono dall'implementazione pertinente, dagli indirizzi di controllo e dalle condizioni pubblicate dall'emittente o dal Fondo. Consulti i [Termini di servizio](/it/governance/terms).

## Modello di implementazione

La maggior parte dei moduli con stato viene inizializzata come **istanza proxy ERC-1967** tramite `ERC1967Factory` di Solady. Più istanze possono condividere un'implementazione mantenendo separati proprietari, configurazione e archiviazione. Un'implementazione può anche usare salt deterministici, così da prevedere gli indirizzi prima dell'implementazione.

Non tutti i contratti usano un proxy. `DecimalQuoter` e `SwapRouter` sono implementazioni dirette senza stato; anche `RescueVault` ed `ERC1967Factory` vengono implementati direttamente. Gli altri moduli con stato elencati di seguito sono progettati per l'implementazione tramite proxy.

Ogni proxy ha un amministratore che può sostituirne l'implementazione. L'amministrazione del proxy è distinta dalla proprietà del contratto e dovrebbe essere assegnata a un indirizzo con una governance adeguata. Un aggiornamento può modificare il comportamento anche dopo che un Fondo ha sigillato la propria configurazione; gli utenti dovrebbero quindi valutare sia il proprietario del Fondo sia l'amministratore del proxy.

Anche il supporto EIP-165 dipende dal singolo contratto e non è universale. È esposto da `GiftableToken`, dai tre quotatori, da `OracleRelay`, `Limiter`, vari registri e indici, `Splitter`, `EthFaucet`, `PeriodSimple` e `RescueVault`. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` e `CAT` non espongono `supportsInterface` nella versione v1.1.0.

## Mappa dei componenti

- **GiftableToken** — Meccanismi ERC20 per offerta, conio, distruzione e scadenza facoltativa. Un emittente può usare un'istanza come buono, ma il contratto da solo non definisce cosa può essere riscattato, da chi, dove o a quali condizioni.
- **SwapPool** — Deposito di token e motore per il regolamento degli scambi. Un'implementazione può collegare componenti per curatela, valutazione, commissioni, limiti e commissioni di protocollo, oppure lasciare non configurate le dipendenze supportate.
- **DecimalQuoter, RelativeQuoter e OracleQuoter** — Moduli di valutazione intercambiabili per parità decimale, tassi relativi gestiti dal proprietario o tassi derivati da un oracolo. `OracleRelay` può inoltrare un feed esterno a un `OracleQuoter`.
- **FeePolicy e Limiter** — Regole facoltative per le commissioni per coppia e per i limiti al saldo di ogni token nel Fondo.
- **ProtocolFeeController** — Tasso, destinatario e stato attivo facoltativi e modificabili per la commissione di protocollo che un Fondo può consultare durante il regolamento.
- **TokenUniqueSymbolIndex, AccountsIndex e ContractRegistry** — Componenti per la scoperta di token, account e indirizzi. `CAT` registra le preferenze ordinate di un account per i token di regolamento.
- **SwapRouter** — Calcoli di sola quotazione, con input o output esatto, lungo un percorso proposto tra più Fondi. Non custodisce token e non esegue scambi.
- **Splitter, EthFaucet, PeriodSimple e RescueVault** — Strumenti di supporto per distribuzione, finanziamento del gas, limitazione della frequenza e recupero degli asset.

I contratti possono essere combinati in modi diversi. La presenza in un registro, una quotazione o un percorso nel grafo non garantiscono l'esecuzione di una transazione: rimangono rilevanti la liquidità attuale, i limiti dei token, le commissioni, lo stato dell'oracolo, le autorizzazioni, le scadenze, le condizioni della rete e la configurazione di ogni Fondo.


## Scambio instradato a livello dell'applicazione

La CLC App in produzione fa più che interrogare il contratto Solidity `SwapRouter`. CLC Core mantiene un grafo riconciliato delle relazioni idonee tra Fondi, stima quali buoni sono raggiungibili, legge i Fondi selezionati allo stesso blocco fissato per produrre una quotazione autorevole, simula l'intero percorso e prepara un batch per il portafoglio Calibur. L'utente firma il batch e un relayer lo invia come singola transazione sulla stessa catena.

Ogni passaggio chiama direttamente un `SwapPool`. Il batch azzera e imposta l'autorizzazione necessaria per il token, quindi chiama la versione di `SwapPool.withdraw` con limiti, specificando un output minimo e una scadenza. `revertOnFailure` è attivo: se una chiamata fallisce, l'intera transazione viene annullata. L'App presenta poi una ricevuta raggruppata con i dettagli del regolamento e delle commissioni per ciascun passaggio.

Questo flusso di instradamento è una funzionalità di CLC App e CLC Core costruita sul Protocol v1.1.0. Non trasforma il contratto Solidity `SwapRouter` in un router di esecuzione, non cambia il proprietario o il Responsabile di un Fondo e non rende un Fondo responsabile delle regole di un altro Fondo o dell'adempimento di un emittente. Per il flusso completo, vedere [Architettura della rete del protocollo](/it/protocol/network).
