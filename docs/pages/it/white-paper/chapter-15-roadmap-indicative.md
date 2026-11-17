## **15. Roadmap indicativa**

### **15.1 Fondamento attuale**

GEF gestisce la CLC App su `cosmolocal.credit`, su Gnosis Chain. L'App fornisce accesso supportato ad account e portafogli, un catalogo pubblico del Market e interfacce per token, buoni, Offerte, Want, Fondi di Impegni, trasferimenti, scambi diretti nei Fondi e scambi instradati.

Protocol v1.1.0 fornisce l'attuale base contrattuale: `GiftableToken`, esecuzione diretta tramite `SwapPool`, registri, quotatori, limiti al saldo dei token, politiche delle commissioni, un controller delle commissioni del Protocollo e un contratto `SwapRouter` di sola quotazione.

CLC Core fornisce ora la base di instradamento e osservabilità sulla stessa catena per l'App pubblica: scoperta tramite un grafo riconciliato, percorsi attraverso un massimo di tre Fondi, quotazioni a un blocco fissato, limiti e commissioni per ciascun passaggio, simulazione dell'intero batch, esecuzione atomica firmata con Calibur, monitoraggio del relay, riconciliazione dei regolamenti, ricevute raggruppate e metriche operative. La disponibilità dipende comunque dall'interfaccia, dal comportamento supportato del portafoglio e dei token, dai contratti distribuiti, dall'inventario, dalla configurazione, dalla freschezza del servizio, dallo stato della rete, dall'ammissibilità, dai fornitori, dalla giurisdizione e dai termini pubblicati dagli emittenti o dai Fondi.

### **15.2 Traguardi proposti**

Questi traguardi rappresentano direzioni progettuali, non numeri di versione, date di consegna o impegni al rilascio di una funzionalità.

- **Fondamenti di governance:** token di governance CLC proposto; Fondo di rete CLC proposto; adattatori per le commissioni; quorum, timelock e basi di governance.
- **Instradamento e osservabilità:** estendere le attuali interfacce dei percorsi e delle ricevute ad altri profili; pubblicare dashboard sullo stato e rendicontazione dei livelli di servizio; sviluppare un quadro per le policy assicurative; progettare intenti volontari di riequilibrio; e creare un prototipo di compensazione in batch.
- **Strumenti di rischio tra domini:** instradamento HTLC o tramite escrow; moduli di garanzia governati separatamente; configurazioni predefinite per limiti mobili, per account e per livello.
- **Accesso regolamentato:** servizi di pagamento di terzi specifici della distribuzione; micro-Fondi personali; individuazione di servizi di conformità; verifiche di terzi sulle classi di buoni.

Qualsiasi servizio di pagamento sarebbe fornito da terzi identificati separatamente, secondo giurisdizione, ammissibilità, commissioni, limiti e condizioni applicabili. La CLC App e i contratti di Protocol v1.1.0 non gestiscono autonomamente canali in valuta fiat.

L'esecuzione con più passaggi tra domini, il riequilibrio automatico dei Fondi, l'assicurazione condivisa, il token di governance CLC proposto, il Fondo di rete CLC proposto, la compensazione in batch, i micro-Fondi personali e i servizi di pagamento regolamentati restano proposti o dipendenti dall'implementazione finché un'implementazione e i relativi termini di governance non li identificano come attivi. L'attuale instradamento sulla stessa catena, avviato dai partecipanti nella CLC App pubblica, è una funzionalità corrente.
