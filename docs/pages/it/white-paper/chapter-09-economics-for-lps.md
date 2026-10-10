## **9. Economia proposta per i programmi di liquidità**

Questo capitolo descrive un modello futuro, adottato separatamente. Non è una funzione attuale dell'app, un'offerta, un ritorno promesso o un diritto creato depositando in `SwapPool`.

### **9.1 Fonti di entrate proposte**

Un futuro bilancio della rete potrebbe ricevere:

1. a divulgato **Quota di rete** prese come quota delle commissioni riscosse dalle Fondi partecipanti;
2. le tariffe di routing o di servizio separate rispetto ai servizi condivisi implementati; e
3. altre entrate ricevute espressamente adottate.

Le commissioni fornite dalle fondo non costituiscono entrate della rete. L'attuale Protocol v1.1.0 utilizza un modello diverso: una tassa di protocollo facoltativa è aggiunta alla tassa di fondo e viene inviata direttamente al destinatario configurato.

### **9.2 Matematica grafica illustrativa**

Se un fondo partecipante impone una commissione per il fondo di 2.00% e un quota di rete adottato riceve il 20% di tale commissione per il fondo, il tasso effettivo di rata di rete proposto sul valore di rotta è:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Se il 25% delle attività ricevute per il rake e le spese di servizio sono ammissibili e convertibili per un utilizzo denominato in contanti dichiarato dopo i costi, la quota di utilizzabilità in contanti del rake di 40 bps è di circa 10 bps.

Le entrate di rete proposte sono:

`network_rake_received + routing_or_service_fees_received`

Non aggiungere le tasse del fondo al quota di rete: il rake è un trasferimento da tali tasse e altrimenti sarebbe contato due volte.

### **9.3 Diritti del programma di liquidità**

Un programma adottato separatamente potrebbe finanziare l'inventario del Fondo, i servizi di routing, il monitoraggio o altri mandati. I suoi termini dovrebbero rivelare:

- se un trasferimento è un dono, una dotazione, un prestito, un contributo recuperabile o un acquisto;
- custodia e controllo;
- regole di ritiro, rimborso, perdita e priorità;
- l'ammissibilità delle tasse e delle ricompense;
- diritti di governance;
- metodi di valutazione e di segnalazione; e
- sospensione, risoluzione e rimedi.

L'attuale `SwapPool` non crea alcun token fondo-share o diritto di contribuente automatico. Qualsiasi metrica ex post deve essere basata su entrate e perdite realizzate, non deve essere presentata come rendimento promesso e può essere zero o negativo.
