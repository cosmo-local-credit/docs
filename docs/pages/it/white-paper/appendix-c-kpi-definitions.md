## C. Proposte definizioni di KPI

Questi KPI costituiscono una specifica di misurazione proposta, non una dichiarazione secondo cui l'app o il protocollo attuale registra ogni evento richiesto.

Ogni KPI pubblicato deve contenere:

- l'editore responsabile e la fonte dei dati;
- definizione di evento o di stato;
- periodo di coorte o di misurazione;
- unità e metodo di valutazione;
- timestamp di valutazione;
- norme di inclusione e di esclusione;
- il trattamento di documenti parziali, contestati, scaduti, inaccessibili e corretti;
- la prova o l'attestazione richiesta fuori catena;
- storia di revisione e limitazioni della qualità dei dati; e
- se il risultato è on-chain, segnalato, attestato, verificato indipendentemente o stimato.

| KPI | Definizione proposta | Le prove richieste e le esclusioni |
| --- | --- | --- |
| **Presentazioni valide** | Conteggio o unità accettate nel processo di rimborso dell'emittente durante un periodo | Identificatore di presentazione, emittente, autorizzazione del titolare, importo, tempo, status; escludere i duplicati e le richieste non valide |
| **Tasso di adempimento** | Presentazioni valide soddisfatte divise per presentazioni valide per la stessa coorte matura | Separate prove sulle prestazioni dell'emittente; Relazione di casi aperti, respinti, contestati, parziali e corretti |
| **Completità dello estinzione** | Presentazioni soddisfatte con un registro di estinzione diviso per presentazioni soddisfatte | Bruciare, cancellare, disattivare la registrazione o altre prove di non riutilizzo legate all'adempimento |
| **La latenza dell'esecuzione** | Mediana e 90° percentil del tempo di presentazione-adempimento | Non sostituire il tempo di conservazione da emissione a presentazione o da acquisizione a presentazione |
| **Durata di detenzione** | Mediano e distribuzione del tempo tra l'acquisizione e la presentazione | Identificare l'evento di acquisizione e escludere tempi di acquisizione sconosciuti |
| **Impegni in sospeso ammissibili** | Impegni di terzi ammissibili rimanenti dopo le esclusioni definite | l'identità e le condizioni dell'emittente; escludere l'inventario applicabile dell'emittente, i token di scadenza, combustione, estinzione, test e non impegno |
| **Volume di scambio di fondo** | Valore degli swap diretti completati del fondo in base a un metodo di valutazione divulgato | Eventi di regolamento in catena, unità di token, fonte di tasso, tempo; non sono classificati come soddisfazione dell'emittente |
| **Inventario dei Fondi** | Attività sostenute misurate detenute da un fondo in un momento specificato | Saldi contrattuali, riserve di tasse, attività inaccessibili, metodo di valutazione e poteri di recesso del proprietario |
| **Adequatezza delle riserve** | Riserve disponibili e ammissibili divise per esposizione esplicitamente coperta | Politica di copertura, ammissibilità delle attività, custodia/controllo, passività, esclusioni e valutazione; non l'offerta totale di token per impostazione predefinita |
| **L'utilizzo limite** | Soldo dei token del fondo misurato diviso per il suo limite attuale configurato | Limiter indirizzo, token, fondo, timestamp, modifiche e periodi senza limite |
| **Rate di passaggio delle quote** | Risposte di citazione di successo suddivise da tentativi di citazione validi | Risultato solo per quote; non esecuzione del percorso |
| **Tasso di esecuzione del percorso** | Esecuzioni multi-hop completate suddivise per tentativi di esecuzione validi | Applicabile solo a un sistema di esecuzione implementato; Rapporto sulle regole di atomicalità e per hop |
| **Ritorno del garante** | Recupero ammissibile ricevuto diviso per crediti coperti pagati | Garante identificato, politica dei crediti, calendario, costi, controversie e cancellazioni |
| **Rivenuti della rete proposti** | Raccolta di rete proposta ricevuta più tariffe di routing/servizio separate ricevute | Escludere le tasse grossiste dei Fondi trattenute dalle Fondi ed evitare di contare il rake due volte |
| **La tempestività della governance** | Tempo per rilevare, decidere, fermare, riparare e chiudere un incidente | Orologi definiti, organismi responsabili, poteri di emergenza, ricorsi e eventi mancanti |

Le richieste di impatto sociale richiedono una metodologia separata. L'attività blockchain da sola non stabilisce l'identità, le prestazioni dell'emittente, la soddisfazione, la salute della comunità, la causalità o l'impatto.
