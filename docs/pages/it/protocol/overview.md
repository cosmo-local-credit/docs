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
