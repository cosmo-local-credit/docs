# 1. Protocollo di pooling degli impegni (CPP): il nucleo primitivo

**Modello mentale:** un Fondo di Impegni è un accordo governato per l'ammissione di buoni o di altre attività, la pubblicazione di regole di cambio, la detenzione di inventario e l'acquisizione di swap. In seguito i titolari presentano i buoni ai loro emittenti per l'adempimento nel mondo reale. Lo scambio del fondo e l'adempimento dell'emittente sono cicli di vita separati.

CPP coordina il valore attraverso impegni chiaramente descritti. Il modello è discusso in [Economia di base: riflessione e pratica](https://willruddick.substack.com/p/grassroots-economics-the-book-is).

## **1.1 Cos'è un impegno?**

Un impegno è la promessa di una parte identificata di una futura consegna, ad esempio cibo, trasporto, lavoro, stoccaggio o altro bene, servizio, beneficio o prestazione legale. A. **il buono** è un token o un record rappresentato come tale impegno in termini pubblicati.

Il contratto di token registra la meccanica digitale. I termini del buono identificano l'emittente, l'offerta, la capacità, il luogo, il tempo, le restrizioni, la presentazione, l'adempimento, i reclami e il processo di estinzione.

## **1.2 Che cos'è un Fondo di Impegni?**

Un Fondo di Impegni è l'accordo governato. Può essere gestita da un individuo, da una cooperativa, da un gruppo comunitario, da un'agenzia pubblica, da una federazione, da un multisig, da un operatore di servizi o da un'altra struttura responsabile.

I ruoli e le autorità pertinenti comprendono:

- **Responsabile del Fondo:** pubblica e amministra le regole del fondo e qualsiasi garanzia espressamente assunta;
- **Proprietario del Fondo:** detiene i poteri di proprietario attuali di `SwapPool`;
- **amministratore proxy:** può aggiornare un'implementazione proxy;
- **controllatori di dipendenza:** regolano i registri, i quotatori, i limitatori o le componenti delle tariffe configurati;
- **L'operatore di servizi itineranti:** può scoprire, citare, simulare, preparare, trasmettere e registrare un percorso autorizzato separatamente entro il suo ambito pubblicato; e
- **il garante:** assume un obbligo definito solo attraverso termini pubblicati e finanziati.

CPP raggruppa le funzioni di un Fondo in quattro concetti:

- **Curatela:** ammettere token o buoni supportati.
- **Valutazione:** pubblicare il metodo usato per produrre un tasso di cambio o una quotazione.
- **Limitazione:** applicare i massimali correnti del saldo dei token del fondo o altri controlli implementati separatamente.
- **Scambio:** mantenere l'inventario, eseguire gli swap, contabilizzare le commissioni e emettere registri delle transazioni.

Protocol v1.1.0 implementa queste funzioni tramite `SwapPool` e dipendenze opzionali. L'attuale `Limiter` limita il saldo di un token in un Fondo; non fornisce limiti mobili agli scambi, limiti per account o limiti per l'intera rete. L'attuale contratto Solidity `SwapRouter` calcola quotazioni attraverso più Fondi, ma non esegue scambi.

La CLC App e CLC Core in produzione implementano l'instradamento sulla stessa catena a livello applicativo, al di sopra di questi contratti. CLC Core scopre i percorsi, legge i Fondi selezionati allo stesso blocco fissato, prepara e simula un batch Calibur firmato, coordina il relay e raggruppa i registri di regolamento risultanti. L'attuale configurazione pubblica cerca percorsi attraverso un massimo di tre Fondi. Ogni Fondo resta governato in modo indipendente e ogni passaggio viene comunque eseguito direttamente attraverso il proprio `SwapPool`.

Il progetto CPP più ampio proposto può aggiungere limiti mobili, controlli per account, percorsi HTLC o tramite escrow tra domini, riequilibrio automatico dei Fondi e compensazione in batch. Sono componenti proposti, non descrizioni dell'attuale `Limiter`, del contratto Solidity `SwapRouter` o del flusso dei percorsi di CLC App e CLC Core.

## **1.3 Logica di scambio diretto attuale**

Swap di fondo diretto attuale:

1. verifica il registro facoltativo dei token di ingresso e di uscita;
2. misura l'input ricevuto;
3. ottiene un preventivo dal quotatore configurato o applica la parità di unità grezza;
4. controlla il risultante saldo dei token Fondo rispetto al limitatore facoltativo;
5. calcola le commissioni del gruppo e le eventuali commissioni supplementari del protocollo;
6. controlla l'inventario delle produzioni disponibili;
7. trasferisce le commissioni di protocollo e le produzioni e contabilizza le commissioni del gruppo; e
8. emette eventi di scambio.

La quotazione è un parametro di transazione, non prova della capacità dell'emittente, del valore di rimborso, del fair value, della convertibilità in contanti o di una garanzia.

## **1.4 Uso più ampio**

Fondi di Impegni può sostenere lo scambio comunitario, la produzione, l'aiuto reciproco, i programmi pubblici e altre strutture responsabili. Un prodotto creditizio documentato separatamente potrebbe utilizzare un buono come garanzia o come strumento di rimborso, ma richiederebbe termini supplementari e specifici per la transazione. Una normale spedizione, deposito del fondo, swap del fondo, presentazione del riscatto, adempimento o estinzione non costituiscono automaticamente un prestito o un rimborso.

CPP è destinato a registrazioni di scambi e di transazioni contabilizzabili, non a operazioni speculative. I registri in catena non dimostrano ancora la realizzazione del mondo reale o l'impatto sociale.
