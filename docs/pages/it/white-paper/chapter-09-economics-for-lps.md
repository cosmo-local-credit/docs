# 9. Economia proposta per i programmi di liquidità

Questo capitolo descrive un modello futuro, adottato separatamente. Non è una funzione attuale dell'app, un'offerta, un ritorno promesso o un diritto creato depositando in `SwapPool`.

## **9.1 Fonti di entrate proposte**

Un futuro bilancio della rete potrebbe ricevere:

1. una **quota per la rete** dichiarata, prelevata come parte delle commissioni riscosse dai Fondi partecipanti;
2. commissioni di instradamento o di servizio separate per servizi condivisi effettivamente implementati; e
3. altre entrate ricevute espressamente adottate.

Le commissioni lorde dei Fondi non costituiscono ricavi della rete. L'attuale Protocol v1.1.0 usa un modello diverso: un'eventuale commissione del Protocollo si aggiunge alla commissione del Fondo e viene inviata direttamente al destinatario configurato.

Il flusso di instradamento della CLC App in produzione non aggiunge una commissione separata per il servizio di instradamento. Uno scambio instradato può comunque applicare una commissione del Fondo e una commissione del Protocollo a ciascun passaggio. Queste commissioni attuali per passaggio non devono essere indicate come quota per la rete proposta né conteggiate di nuovo come futuri ricavi di servizio.

## **9.2 Matematica grafica illustrativa**

Se un Fondo partecipante applica una commissione del 2,00% e una quota per la rete adottata riceve il 20% di tale commissione, il tasso effettivo della quota per la rete sul valore instradato è:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Se il 25% delle attività ricevute per il rake e le spese di servizio sono ammissibili e convertibili per un utilizzo denominato in contanti dichiarato dopo i costi, la quota di utilizzabilità in contanti del rake di 40 bps è di circa 10 bps.

Le entrate di rete proposte sono:

`network_rake_received + routing_or_service_fees_received`

Non aggiungere le commissioni del Fondo alla quota per la rete: la quota per la rete è un trasferimento tratto da quelle commissioni e, altrimenti, verrebbe conteggiata due volte.

## **9.3 Diritti del programma di liquidità**

Un programma adottato separatamente potrebbe finanziare l'inventario del Fondo, i servizi di routing, il monitoraggio o altri mandati. I suoi termini dovrebbero rivelare:

- se un trasferimento è un dono, una dotazione, un prestito, un contributo recuperabile o un acquisto;
- custodia e controllo;
- regole di ritiro, rimborso, perdita e priorità;
- l'ammissibilità delle tasse e delle ricompense;
- diritti di governance;
- metodi di valutazione e di segnalazione; e
- sospensione, risoluzione e rimedi.

L'attuale `SwapPool` non crea alcun token fondo-share o diritto di contribuente automatico. Qualsiasi metrica ex post deve essere basata su entrate e perdite realizzate, non deve essere presentata come rendimento promesso e può essere zero o negativo.
