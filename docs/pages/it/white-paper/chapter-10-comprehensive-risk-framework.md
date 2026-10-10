## **10. Quadro completo dei rischi**

Questo quadro proposto separa dieci categorie di rischio. Per ciascuna categoria si identificano possibili indicatori, controlli, test di stress e un appetito di rischio indicativo. Si tratta di raccomandazioni di progettazione, non di affermazioni che ogni controllo sia implementato, efficace o sufficiente. Limiti, riserve, garanzie, monitoraggio, copertura e governance non possono eliminare le perdite.

### **10.1 Protocollo e rischio per contratti intelligenti**

- **minacce:** bug del contratto, errori di aggiornamento, errori di dipendenza e limiti o commissioni configurati erroneamente.
- **Indicatori:** i risultati dell'audit, movimenti di inventario inspiegabili, fallimenti invarianti e inversioni insolite.
- **Possibili controlli:** audit indipendenti; i ruoli privilegiati minimi; i controllori di proxy e di dipendenza comunicati; aggiornamenti fissati nel tempo; il monitoraggio in catena; le pause incidentali con autorità e criteri pubblicati; e un percorso migratorio testato.
- **Test dello stress:** non disponibili quote o limitazioni di dipendenza, carenze di inventario, contratti in pausa e traffico irrisolto.
- **L'appetito per rischi:** bassi prima di ridurre i volumi di obbligazioni in sospeso o di scambi.

### **10.2 Rischio economico e di mercato**

- **minacce:** inventario sottile, flussi unilaterali, ritiri rapidi e riferimenti sui prezzi manipolati o obsoleti.
- **Indicatori:** L'utilizzo del bilanciamento dei token del fondo è elevato, le differenze di quote aumentano, i rifiuti frequenti dei limiti e l'inventario concentrato.
- **Possibili controlli:** caps correnti per il saldo dei token del fondo; i limiti di rotazione o di conto proposti; riserve adottate separatamente; riferimenti sui prezzi protetti; esclusioni di rotta; e commissioni o limiti per incidenti a tempo limitato.
- **Test dello stress:** notevoli spostamenti dei prezzi di riferimento, aumenti di presentazione, richieste di prelievo e interruzioni delle fonti di dati.
- **L'appetito per rischi:** moderazione solo entro i parametri pubblicati e la capacità di copertura delle perdite finanziata.

### **10.3 Rischio dell'emittente e del buono**

- **minacce:** l'emissione oltre la capacità di soddisfazione, il default dell'emittente, le condizioni fuorvianti e le finestre di disponibilità o di presentazione poco specificate.
- **Indicatori:** diminuzione dei tassi di adempimento confermati, invecchiamento dei buoni in sospeso, reclami irrisolti e esposizione concentrata a un emittente.
- **Possibili controlli:** la dovuta diligenza dell'emittente; il buono chiaro e le condizioni dell'offerta; limiti di emissione o ammissione; obbligazioni o garanzie finanziate in modo indipendente; la segnalazione di coorte; e una revisione responsabile del registro.
- **Test dello stress:** l'insolvenza dell'emittente, gli shock di produzione regionali, i crediti contraffatti e i ritardi prolungati nell'adempimento.
- **L'appetito per rischi:** diminuire con l'aumento della concentrazione dell'emittente o dell'offerta.

### **10.4 Rischio di presentazione del rimborso e di adempimento**

- **minacce:** presentazione invalida o duplicata, capacità insufficiente dell'emittente, stanziamenti, guasti logistici e mancate registrazioni di estinzione.
- **Indicatori:** la latenza per l'adempimento delle richieste, le presentazioni fallite o in controversia, le scorte, gli arretrati dei biglietti e le unità soddisfatte che non hanno ricevuto il estinzione.
- **Possibili controlli:** le procedure di presentazione e di esecuzione pubblicate; le informazioni sulla capacità; i luoghi di realizzazione multipli, ove lecito; norme di prova; i percorsi di reclamo e di rimedio; e registrazioni che separano presentazione, adempimento e estinzione.
- **Test dello stress:** volume di presentazione da due a quattro volte, interruzioni delle strutture, guasti dei fornitori e tentativi di doppio utilizzo.
- **L'appetito per rischi:** bassi se sono coinvolti beni essenziali, partecipanti vulnerabili o lunghe finestre di realizzazione.

### **10.5 Rischio di governance**

- **minacce:** Capture steward o controller, cambiamenti di parametri precipitati, conflitti di interesse, poteri tecnici nascosti e deboli appelli.
- **Indicatori:** l'autorità concentrata, le azioni di emergenza frequenti, i cambiamenti di politica inspiegabili e le ripetute sovrapposizioni.
- **Possibili controlli:** le informazioni relative al ruolo e al potere; le soglie di omologazione proporzionali; i tempi; i conflitti e le norme di rifiuto; registrazione pubblica dei cambiamenti; ricorsi; tramonto automatico di energia di emergenza; e la forcabilità.
- **Test dello stress:** le proposte di contrasto, la perdita dei firmatari, i tentativi di corruzione e la cattura attraverso l'accumulo o il controllo delegato.
- **L'appetito per rischi:** basso per le azioni che influenzano i metodi di valore, i prelievi, le radici del registro, la copertura o i poteri di emergenza.

Per una futura implementazione del token governance CLC proposto, il test di cattura includerà l'accumulo seguito da tentativi di riorientare i bilanci, indebolire gli standard di registro, approvare i mandati delle parti correlate o esaurire la copertura finanziata. Le possibili garanzie includono blocchi di governance, soglie più elevate per le azioni critiche, ritardo nell'esecuzione, controllo trasparente delle delegazioni e delle concentrazioni, un processo di incidente e una procedura credibile di forcamento e di uscita. Nessuno è rappresentato come dispiegato semplicemente apparendo qui.

### **10.6 Rischio legale e di conformità**

- **minacce:** un buono, un servizio, una promozione o un bene di governance che riceve un trattamento normativo inaspettato; fallimenti nella protezione dei consumatori; il riciclaggio di denaro o l'esposizione a sanzioni; e restrizioni transfrontaliere.
- **Indicatori:** le bandiere di giurisdizione, le indagini dei regolatori, i reclami, le partite limitate e la divergenza tra il comportamento pubblicizzato e quello effettivo.
- **Possibili controlli:** revisione per categoria e giurisdizione; informazioni accurate; interfacce geofineate; controlli di ammissibilità o di attestazione proporzionati; controlli di promozione; registrazioni dell'autorità e dell'accettazione; e chiare parti responsabili.
- **Test dello stress:** una restrizione giurisdizionale, la chiusura del fornitore, la riclassificazione obbligatoria e un ordine di sospensione di una caratteristica o di una classe di attività.
- **L'appetito per rischi:** basso; limitare o interrompere l'attività non supportata.

#### 10.6.1 Posizionamento giuridico e trattamento del token proposto

1. **Infrastrutture verificabili:** I contratti Protocol v1.1.0 sono compatibili con EVM- e la loro fonte è pubblicata in base alle licenze e alle eccezioni di terzi identificate nel repository del protocollo. La pubblicazione consente la revisione, ma non dimostra in sé un audit, un'implementazione sicura o la conformità alla legge. Ogni implementazione dovrebbe divulgare la sua versione di codice, la provenienza della costruzione, gli indirizzi, i poteri del controllore e lo stato di audit.
2. **Proposta postura del token:** nel presente progetto, il token governance CLC proposto coordinerebbe la governance e l'accesso alle politiche. Non creerebbe dividendi, ripartizione dei profitti, diritti residui o garanzia di valore o liquidità.
3. **Attività proposte correlate:** una politica attuata separatamente potrebbe consentire di bloccare il token di governance CLC proposto in stCLC e potrebbe autorizzare sCLC a scala epocale. I termini adottati dovrebbero definire esattamente i loro diritti, i limiti, la scadenza, la trasferibilità e il trattamento.
4. **Comunicazioni:** i materiali per qualsiasi impiego proposto di CLC-token di governance, stCLC o sCLC non dovrebbero promettere profitto, apprezzamento, reddito passivo o accesso garantito.
5. **Controlli di giurisdizione:** una implementazione potrebbe richiedere il geofencing di interfaccia, le certificazioni per le classi limitate, i limiti di promozione, la revisione specifica dell'attività o i controlli che interrompono una caratteristica proposta.
6. **Avviso del partecipante:** le condizioni adottate spiegherebbero quando l'accesso può essere ridotto o disabilitato per ragioni legali, operative o di rischio e se si applica alcuna compensazione o rimedio.

### **10.7 Rischio di routing e di cross-domain**

- **minacce:** l'esecuzione parziale, i salti bloccati, gli sfruttamenti di bridge o escrow, le quote obsolete, l'inflazione del percorso e l'avanguardia dei cambiamenti di valore annunciati.
- **Indicatori:** i tassi di scadenza del percorso, gli arretrati di garanzia, le differenze tra quote e esecuzione, i ripetuti saltati inutili e gli incidenti di ponte.
- **Possibili controlli:** esecuzione atomica, ove disponibile; i tempi conservativi di HTLC o di escrow; il percorso e le politiche delle controparti; limiti a livello di percorso; la mappatura deterministica quote-to-receive; e operatori di servizi responsabili.
- **Test dello stress:** un arresto di ponte, riorganizzazione della catena, interruzione della dipendenza e un salto fallito in un percorso multi-hop proposto.
- **L'appetito per rischi:** bassi a moderati solo per le dipendenze identificate e monitorate.

### **10.8 Rischio di custodia e gestione delle chiavi**

- **minacce:** chiavi perdute o compromesse, collusione del firmatario e non chiara autorità di recupero o di amministrazione.
- **Indicatori:** le firme anomali, le modifiche del controller, le rotazioni fallite e i ritiri insoliti.
- **Possibili controlli:** autorizzazione multisig o soglia; chiavi supportate da hardware; separazione dei ruoli; rotazione del signatore; gli inventari dei controllori pubblici; i limiti di ritiro monitorati; e procedure di recupero testate.
- **L'appetito per rischi:** basso.

### **10.9 Rischio sociale e reputazione**

- **minacce:** affermazioni fuorvianti, incentivi nocivi, reclami inaccessibili, scarse esperienze di soddisfazione, fallimenti della privacy e protezioni che favoriscono gli addetti all'interno.
- **Indicatori:** reclami per coorte, controversie irrisolte, tendenze di performance degli emittenti, concentrazione di benefici o perdite e feedback della comunità.
- **Possibili controlli:** le informazioni comunicate in lingua semplice; i percorsi di denuncia e correzione; prove accessibili; la segnalazione trasparente; revisione degli incidenti; e sanzioni proporzionate per la falsità.
- **L'appetito per rischi:** L'obiettivo del programma è quello di promuovere l'accesso alle comunità interessate e ai partecipanti vulnerabili.

### **10.10 Rischio di concentrazione e frammentazione**

- **minacce:** dipendenza da un piccolo numero di emittenti, fondo, responsabili del trattamento, fornitori, reti o forch incompatibili.
- **Indicatori:** misure di concentrazione da parte dell'emittente, del gruppo, dell'inventario, del titolare del trattamento o del fornitore di servizi; errori di rotta tra i cluster; e dipendenze singole critiche.
- **Possibili controlli:** le soglie di concentrazione pubblicate; più operatori responsabili; norme compatibili; registri indipendenti; le procedure di uscita testate; e sicurezza dell'interoperabilità.
- **Test dello stress:** perdita del più grande emittente, fondo, operatore, fornitore o radice di registro.
- **L'appetito per rischi:** specifico per l'impiego e comunicato, con limiti più rigorosi per i servizi essenziali o le dipendenze insostituibili.
