# Protocollo

Il **Protocollo di messa in comune degli impegni (CPP)** descrive come Fondi governati in modo indipendente selezionano Buoni, pubblicano regole di scambio e rendono possibili gli scambi. In seguito, un Titolare usa un Buono presso il suo Emittente per ottenere i beni o servizi promessi. Sono passaggi distinti, con responsabilità distinte.

Questo sito spiega questi concetti e come usare la CLC App. La [documentazione del software CLC](https://software.cosmolocal.credit/) è il riferimento definitivo per l'implementazione del software, i contratti, le API, l'installazione e la gestione. Al momento è disponibile in inglese.

Inizi da [Concetti e vocabolario](/it/introduction/concepts) per i termini condivisi, oppure dal [Libro bianco](/it/white-paper) per il modello e le proposte più ampie.

## Modello di implementazione

Comunità e organizzazioni diverse possono gestire software compatibile secondo le proprie regole. Grassroots Economics Foundation gestisce la [CLC App pubblica](https://cosmolocal.credit). Ogni implementazione dovrebbe indicare i propri operatori, contratti e autorità responsabili.

Per gli indirizzi dei contratti, le istruzioni di installazione e la verifica dei proprietari e dei poteri di aggiornamento, consulti [Implementazioni e verifica](https://software.cosmolocal.credit/contracts/deployments). Per gestire i servizi di supporto, inizi dall'[API CLC Core](https://software.cosmolocal.credit/core-api/).

## Mappa dei componenti

Consulti il riferimento del software per:

| Argomento | Documentazione definitiva del software |
| --- | --- |
| Creazione, quantità emessa e scadenza dei Buoni | [Buoni](https://software.cosmolocal.credit/contracts/vouchers) |
| Configurazione, depositi, prelievi e controllo dei Fondi | [Fondi](https://software.cosmolocal.credit/contracts/pools) |
| Calcolo dei tassi di cambio | [Moduli di quotazione (Quoter)](https://software.cosmolocal.credit/contracts/quoters) |
| Esecuzione degli scambi, commissioni e registri delle transazioni | [Quotare e regolare gli scambi](https://software.cosmolocal.credit/contracts/swaps) |
| Scambio attraverso più Fondi | [Instradamento](https://software.cosmolocal.credit/contracts/routing) |
| Scoperta e contratti di supporto | [Registri e strumenti](https://software.cosmolocal.credit/contracts/registries) |
| Richieste e risposte delle API | [Riferimento OpenAPI](https://software.cosmolocal.credit/core-api/reference) |
| Impostazioni del backend e dell'instradamento | [Configurazione](https://software.cosmolocal.credit/core-api/configuration) |

## Scambio instradato a livello dell'applicazione

L'App può aiutare un partecipante a scambiare attraverso più Fondi quando è disponibile un percorso adatto. Il partecipante esamina la quotazione e autorizza lo scambio. Ogni Fondo mantiene le proprie regole e i propri responsabili.

Consulti [Percorsi e responsabilità](/it/protocol/network) per le implicazioni per i partecipanti e [Implementazione dell'instradamento](https://software.cosmolocal.credit/contracts/routing) per sapere come il software quota ed esegue i percorsi.

Il software rende possibile lo scambio; gli Emittenti restano responsabili delle promesse dei loro Buoni e i Responsabili dei Fondi delle regole pubblicate. L'uso dell'App pubblica è regolato dai [Termini di servizio](/it/governance/terms).
