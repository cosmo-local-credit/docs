# Contratti intelligenti

I contratti registrano i saldi dei token ed eseguono gli scambi nei Fondi. La [documentazione del software CLC](https://software.cosmolocal.credit/contracts/) è il riferimento definitivo per l'implementazione, attualmente in inglese. Questa pagina spiega cosa dovrebbero comprendere i partecipanti prima di usare questi contratti.

Consulti [Concetti e vocabolario](/it/introduction/concepts) per la differenza tra un Fondo di Impegni governato e il suo contratto `SwapPool`, e tra scambio e adempimento dell'Emittente.

## buono (`GiftableToken`)

Un Buono unisce un saldo digitale a una promessa pubblicata dall'Emittente. Le condizioni spiegano per cosa può essere usato, dove e quando è accettato e chi ne è responsabile. Creare un token non dimostra che l'Emittente possa fornire i beni o servizi promessi.

Per i meccanismi di creazione, conio, distruzione e scadenza, legga [Buoni](https://software.cosmolocal.credit/contracts/vouchers).

## Fondo di Impegni (`SwapPool`)

Un Fondo di Impegni riunisce Buoni selezionati secondo regole pubblicate. Il contratto detiene un inventario e scambia gli asset supportati. Un deposito non attribuisce automaticamente a chi deposita quote del Fondo né diritti di rimborso, prelievo, ricompensa o governance; tali diritti richiedono condizioni comunicate separatamente.

### Composizione e dipendenze opzionali

Controlli quali Buoni il Fondo accetta, come determina i tassi di cambio, i limiti e le commissioni e chi può modificarli. Il riferimento del software documenta la [configurazione del Fondo e il blocco delle impostazioni](https://software.cosmolocal.credit/contracts/pools).

### Risoluzioni di scambio

Uno scambio riuscito modifica i saldi interessati. Non dimostra che un Emittente abbia consegnato beni o servizi. Prima di confermare, controlli l'asset in entrata, quello in uscita, il destinatario, il minimo ricevuto e la scadenza della quotazione.

Per i metodi di esecuzione e i registri del regolamento, legga [Quotare e regolare gli scambi](https://software.cosmolocal.credit/contracts/swaps).

### Calcolo delle tasse aggiuntive

Uno scambio può includere sia una commissione del Fondo sia una commissione di protocollo aggiuntiva. Controlli il totale nella quotazione; un percorso attraverso più Fondi può comportare commissioni a ogni passaggio. Il [riferimento sugli scambi](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) contiene il calcolo e un esempio svolto aggiornati.

### Poteri di proprietario e di aggiornamento

Il proprietario del Fondo può prelevare l'inventario disponibile. Altre autorità possono controllare aggiornamenti o impostazioni. Prima di depositare o fare affidamento su un Fondo, esamini questi poteri insieme alle regole pubblicate dal Responsabile. Il blocco delle impostazioni, da solo, non dimostra che l'inventario sia vincolato in modo permanente.

Consulti [Fondi](https://software.cosmolocal.credit/contracts/pools) e [Verificare un'istanza](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) per i controlli tecnici.

## Moduli di valutazione

Il tasso di cambio di un Fondo è distinto dal valore dichiarato di un Buono e dalle condizioni di riscatto dell'Emittente. Esamini il metodo scelto dal Fondo e chi può modificarne i dati di ingresso. Il riferimento del software spiega i [moduli di quotazione (Quoter)](https://software.cosmolocal.credit/contracts/quoters) disponibili.

## Politica delle tasse e limiti

Il **«Limite di credito»** dell'App è il saldo massimo di un determinato Buono che un Fondo può detenere. Descrive la capacità di scambio, non un prestito personale o una garanzia di adempimento. Consulti le [regole e la configurazione del Fondo](https://software.cosmolocal.credit/contracts/pools) per sapere come vengono applicati limiti e commissioni.

## Controller delle commissioni protocolli

Una commissione di protocollo ha un destinatario configurato. Riceverla non rende automaticamente il destinatario il Responsabile del Fondo o un garante. Consulti il [riferimento sulle commissioni](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) per i meccanismi attuali e i [meccanismi di governance](/it/governance/mechanics) per responsabilità e comunicazioni.
