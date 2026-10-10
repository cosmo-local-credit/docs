# Contratti intelligenti

Questa pagina descrive i principali contratti Fondo e buono nel protocollo v1.1.0. Il comportamento contrattuale fornisce meccanismi di regolamento; non sostituisce le informazioni dell'emittente, le regole del fondo o altre condizioni di transazione applicabili a un determinato uso.

Utilizzare [Concetti e vocabolario](/it/introduction/concepts) per distinguere il Fondo di Impegni disciplinata da `SwapPool`, e il regolamento dello swap dalla presentazione, adempimento e estinzione del riscatto.


## buono (`GiftableToken`)

`GiftableToken` è un token ERC20 con meccanica che un emittente può utilizzare per un buono:

- **Legatura autorizzata** Il proprietario può designare scrittori che possono emettere token con `mintTo`.
- **Scadenza facoltativa** La scadenza di `0` significa l'assenza di scadenza a livello contrattuale. In caso contrario, i trasferimenti, la verniciatura e la combustione ritornano al momento o dopo il timestamp configurato. Chiunque può mantenere lo stato terminal `expired` chiamando `applyExpiry` direttamente.
- **Contabilità delle forniture** `totalMinted` e `totalBurned` espongono l'attività di approvvigionamento cumulativa. La funzione `burn` di proprietario esclusivo brucia i token detenuti dall'indirizzo del proprietario.

Il contratto di token **non** identificare i beni o i servizi dell'emittente, fissare un valore di riscatto, dimostrare la capacità o promettere una conversione in contanti. Un `GiftableToken` diventa un impegno rimborsabile solo attraverso i termini e il comportamento separatamente pubblicati dall'emittente. Gli emittenti restano responsabili di descrivere accuratamente e rispettare tali termini.


## Fondo di Impegni (`SwapPool`)

`SwapPool` è un motore di token vault e swap-settlement. Anche se espone i metadati ERC20 per il nome, il simbolo e le decimali del fondo, il contratto v1.1.0 non fornisce token Fondo-share. La liquidità viene fornita tramite il trasferimento di token nel fondo e il titolare del contratto può ritirare la liquidità disponibile.

### Composizione e dipendenze opzionali

| Configurazione | Quando non è impostato | Spazio di indirizzo sigillabile |
| --- | --- | --- |
| `tokenRegistry` | Qualsiasi token può superare il controllo di cura del Fondo. | . |
| `tokenLimiter` | I depositi non sono soggetti ad un limite massimo del saldo a livello contrattuale. | . |
| `quoter` | Il quantitativo di input greggio è considerato come il quantitativo di output greggio quotato | . |
| `feePolicy` | La quota del Fondo è zero. | . |
| `feeAddress` | Le tasse del fondo non sono accumulate come tasse ritirabili per un destinatario designato | . |
| `protocolFeeController` | Non viene addebitata alcuna quota di protocollo | - No, no. |

I cinque bit di sigillazione bloccano permanentemente gli indirizzi `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry` e `tokenLimiter` correnti contro i loro setter corrispondenti. `protocolFeeController` e `feesDecoupled` sono valori di inizializzazione e non sono tra quei cinque bit.

La chiusura di un slot di indirizzo non congela il contratto a tale indirizzo. Un registro sigillato, un limite, una quotazione o una politica di tariffa e un controllore protocollo-tariffa configurato possono comunque cambiare se la propria governance lo consente. L'amministratore proxy ERC-1967 può anche aggiornare l'implementazione di Fondo. Un'affermazione di immutabilità significativa dipende quindi dalla governance del proprietario del fondo, dall'amministratore proxy e da ogni dipendenza configurata.

### Risoluzioni di scambio

Per lo swap, `SwapPool`:

1. Verifica che i token di input e output superino il registro facoltativo e verifica l'input richiesto rispetto al limite facoltativo di bilanci di fondo.
2. Ritrae il token di input dal richiamatore e misura l'importo effettivamente ricevuto. I prezzi utilizzano questo importo misurato, anche per i token a pagamento del trasferimento.
3. Ottiene una quotazione lordo dal quotatore configurato o utilizza l'importo ricevuta in bruto quando non è impostato alcun quotatore.
4. Calcola la commissione del fondo e qualsiasi commissione protocollo aggiuntiva, quindi verifica la liquidità disponibile per i token di uscita.
5. Invia la tariffa del protocollo direttamente al destinatario del protocollo configurato, trasferisce l'output netto nominale al destinatario e registra la tariffa del fondo quando viene configurato un indirizzo di tariffa.
6. Emette l'eredità `Swap` evento e l'evento più dettagliato `SwapSettlement` evento.

`SwapSettlement` registra l'iniziatore, entrambi i token, l'input misurato, l'output quotato lordo, l'output nominale inviato, l'output effettivamente osservato al destinatario, la quota di fondo e la quota di protocollo. Le uscite nominali e le uscite osservate possono differire quando il token di uscita stesso impone una commissione di trasferimento. Il campo `fee` nell'eredità dell'evento `Swap` è solo la quota del Fondo.

Il sovraccarico di sei argomenti `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` è il percorso di esecuzione limitato. Ritorna dopo la scadenza o quando l'aumento osservato del saldo del beneficiario è inferiore a `minAmountOut`. Gli integratori dovrebbero preferirlo perché un preventivo visualizzato è temporaneo: lo stato del preventivo, la politica delle tasse, la liquidità, i limiti e i dati oracoli possono cambiare prima dell'esecuzione. Gli antichi sovraccarichi di tre e quattro argomenti non forniscono tali limiti a livello di fondo.

### Calcolo delle tasse aggiuntive

Entrambe le commissioni di fondo e di protocollo sono detratte dal prodotto lordo quotato. La tariffa del protocollo è **non esteso dalla tassa del fondo**, e il fondo conserva la sua commissione calcolata completa.

Per esempio, per un quotato lordo di 100 unità:

- una commissione pari al 2% per il fondo è destinata a 2 unità per il fondo;
- un tasso di protocollo del 10% applicato a tale commissione di fondo invia un'altra unità 0.2 direttamente al destinatario del protocollo; e
- l'utente riceve unità 97.8.

Il calcolo del protocollo utilizza il massimo della commissione di fondo calcolata e una base di commissione presunta dell'1%. Ciò impedisce di ridurre il calcolo del protocollo a quasi zero. I tassi combinati invalidi si riversano con `FeeTooHigh`, e una quotazione che si stabilizzerebbe a zero si riversa con `InsufficientOutput`.

### Poteri di proprietario e di aggiornamento

Il titolare del contratto può prelevare le commissioni del fondo accumulate e può chiamare `withdrawLiquidity` per trasferire qualsiasi token del fondo disponibile ad un indirizzo non zero scelto. Quando le commissioni sono decuplate, le commissioni accumulate sono riservate a tale percorso di prelievo di liquidità; in caso contrario restano parte del saldo del fondo. I partecipanti al fondo non dovrebbero interpretare la liquidità depositata come permanentemente bloccata, a meno che tali risultati non siano stabiliti da controlli di governance aggiuntivi verificabili.

Il sigillo di configurazione non elimina questo potere di prelievo di liquidità. Inoltre non rimuove la potenza di aggiornamento dell'amministratore proxy ERC-1967 separato.


## Moduli di valutazione

Tutti e tre i quotatori implementano le funzioni di quote in avanti e in inverso utilizzate da `SwapPool` e `SwapRouter`:

- **`DecimalQuoter`** Normalizzazione decimale senza stato sotto un'ipotesi di parità di valore 1:1.
- **`RelativeQuoter`** Normalizzazione decimale più indici relativi dei prezzi gestiti dal proprietario. Un indice di token non impostato è impostato per parità.
- **`OracleQuoter`** Valuta ogni token attraverso un oracolo configurato, con un limite di stabilità globale o per token e un moltiplicatore di uscita opzionale 0.9-to-1.0.

Un `OracleQuoter` è affidabile solo quanto la sua selezione e somministrazione di mangimi. La denominazione e la direzione degli alimenti devono essere coerenti, le decimali devono essere corrette, gli aggiornamenti devono essere positivi e freschi e la governance può sostituire gli alimenti o modificare le impostazioni di freschezza. La manipolazione della fonte, l'aggiornamento ritardato, l'interruzione della rete, la configurazione della coppia non corretta o la perdita della chiave di proprietario dell'oracolo possono causare cattive quote o far tornare indietro gli swap.

`OracleRelay` è un relay facoltativo a feed singolo e ultimo round, compatibile con l'interfaccia dell'oracolo. Un autore designato ripubblica i valori di origine; non esiste una prova cross-chain né una cronologia archiviata. Il relay accetta i valori dell'autore con il solo controllo del timestamp futuro. `OracleQuoter` respinge autonomamente le risposte non positive o obsolete, mentre il proprietario del relay può cambiare l'autore o invalidare il round attuale. Gli utenti devono quindi valutare il feed di origine, l'autore del relay, il proprietario del relay e il processo di monitoraggio.


## Politica delle tasse e limiti

`FeePolicy` memorizza una tariffa predefinita in parti per milione e sovrappone la coppia di direzioni opzionale. Il suo proprietario può modificare tali tariffe a meno che la governance al di fuori del contratto non limiti tale potere.

`Limiter` memorizza un saldo massimo per un token ad un determinato indirizzo Fondo. Il proprietario o uno scrittore autorizzato può cambiare quel limite. Un limite zero blocca i depositi quando il limitatore è attivo; un limitatore non impostato lascia i depositi senza limite.

Questi limiti descrivono le configurazioni **esposizione token** in un Fondo. Non classificano, da soli, un saldo simbolico come prestito o debito legale, non dimostrano la capacità di un emittente o garantiscono l'adempimento. Tali domande dipendono dai termini dell'emittente, dalle regole del fondo, dalla transazione presentata all'utente e dalla legge applicabile.


## Controller delle commissioni protocolli

`ProtocolFeeController` è un componente facoltativo per le commissioni a livello dell'implementazione. Il proprietario può modificare la commissione di protocollo e il destinatario, oppure disattivare la commissione. Più Fondi possono condividere un singolo controller, ma il protocollo non richiede un controller per ogni rete.

Quando è attivo e configurato, il destinatario viene pagato direttamente nel token di uscita durante ogni swap di successo. Il modo in cui il beneficiario utilizza i fondi, ad esempio per operazioni, monitoraggio, sostegno alla liquidità o per altri scopi pubblicati, è una questione di governance, non una garanzia del contratto.
