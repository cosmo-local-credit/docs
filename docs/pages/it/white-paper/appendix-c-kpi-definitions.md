## C. Definizioni proposte dei KPI

Questi KPI costituiscono una specifica di misurazione proposta, non un'affermazione secondo cui l'attuale App o il Protocollo registrano ogni evento richiesto.

Ogni KPI pubblicato deve includere:

- l'editore responsabile e la fonte dei dati;
- la definizione dell'evento o dello stato;
- la coorte o il periodo di misurazione;
- l'unità e il metodo di valutazione;
- il momento della valutazione;
- le regole di inclusione ed esclusione;
- il trattamento di registri parziali, contestati, scaduti, inaccessibili e corretti;
- le prove o attestazioni off-chain richieste;
- la cronologia delle revisioni e i limiti di qualità dei dati; e
- se il risultato è on-chain, dichiarato, attestato, verificato in modo indipendente o stimato.

| KPI | Definizione proposta | Prove richieste ed esclusioni |
| --- | --- | --- |
| **Presentazioni valide** | Numero o unità accettate nella procedura di riscatto dell'emittente durante un periodo | Identificativo della presentazione, emittente, autorizzazione del titolare, importo, ora e stato; escludere duplicati e richieste non valide |
| **Tasso di adempimento** | Presentazioni valide adempiute divise per le presentazioni valide della stessa coorte matura | Prove separate sulla prestazione dell'emittente; riportare casi aperti, rifiutati, contestati, parziali e corretti |
| **Completezza dell'estinzione** | Presentazioni adempiute con un registro di estinzione divise per le presentazioni adempiute | Distruzione, cancellazione, registro di disattivazione o altra prova di non riutilizzo collegata all'adempimento |
| **Latenza dell'adempimento** | Mediana e 90º percentile del tempo tra presentazione e adempimento | Non sostituire con il tempo di detenzione tra emissione e presentazione o tra acquisizione e presentazione |
| **Durata della detenzione** | Mediana e distribuzione del tempo tra acquisizione e presentazione | Identificare l'evento di acquisizione ed escludere i tempi di acquisizione sconosciuti |
| **Impegni idonei in essere** | Impegni idonei di terzi rimasti dopo le esclusioni definite | Identità e termini dell'emittente; escludere, se applicabile, inventario dell'emittente, scadenza, distruzione, estinzione, test e token che non rappresentano impegni |
| **Volume degli scambi diretti nei Fondi** | Valore degli scambi completati avviati come operazioni attraverso un solo Fondo, secondo un metodo di valutazione dichiarato | Eventi di regolamento on-chain, unità dei token, fonte del tasso e momento; non classificare come adempimento dell'emittente |
| **Tentativi di scoperta del percorso** | Richieste valide per trovare buoni raggiungibili o percorsi candidati durante un periodo | Versione del grafo, blocco indicizzato, freschezza, ambito del portafoglio, profondità richiesta, numero di candidati, stato delle omissioni o del budget di ricerca; non è una quotazione autorevole |
| **Percorsi candidati disponibili** | Percorsi candidati restituiti dalla scoperta per la coorte di richieste definita | Contare separatamente ogni sequenza ordinata di Fondi e token; indicare profondità ed esclusioni; non classificarla come eseguibile o regolata |
| **Tasso di successo delle quotazioni del percorso** | Quotazioni autorevoli restituite divise per i tentativi validi di quotazione | Blocco fissato, percorso, modalità dell'importo, scadenza, risultato o motivo del rifiuto; mantenere separato dal successo della scoperta e dall'esecuzione |
| **Tasso di esecuzione del percorso** | Transazioni instradate confermate divise per i tentativi validi di esecuzione firmati della stessa coorte matura | ID di tracciamento, hash della transazione, stato dell'invio, conferma o annullamento, profondità del percorso e motivo dell'errore; escludere quotazioni non firmate |
| **Volume dell'intero percorso** | Valore di input e output degli scambi instradati confermati, conteggiato una sola volta per percorso | Usare l'input regolato del primo passaggio e l'output regolato dell'ultimo secondo un unico metodo di valutazione; non sommare tutti i valori dei passaggi come volume economico indipendente |
| **Regolamento per passaggio** | Input regolato, output lordo, commissione del Fondo, commissione del Protocollo e output netto per ciascun passaggio di un percorso confermato | Identificativi ordinati dei Fondi e dei token, eventi di regolamento, hash della transazione, blocco, indice del log ed eventuale residuo intermedio |
| **Commissioni del percorso** | Commissioni correnti dei Fondi e del Protocollo effettivamente regolate lungo il percorso | Riportare ogni passaggio e il totale per tipo di commissione; non definirle come quota per la rete proposta o commissione di servizio non implementata |
| **Vincoli del percorso** | Numero e quota dei rifiuti di percorso o quotazione per causa identificata | Ammissione, limite di deposito, liquidità, dominio delle commissioni, token o quotatore non supportato, saldo o tipo di portafoglio, gas, budget di ricerca, scadenza, discrepanza o prova di simulazione |
| **Stato della riconciliazione dei percorsi** | Freschezza e affidabilità del grafo indicizzato e dei registri di regolamento raggruppati | Versione ed età del grafo, profondità della coda non riconciliata, durata della riconciliazione, correzioni, errori, membri sconosciuti e ricevute irrisolte |
| **Inventario del Fondo** | Attività supportate e misurate detenute da un Fondo in un momento dichiarato | Saldi contrattuali, riserve per commissioni, attività inaccessibili, metodo di valutazione e poteri di prelievo del proprietario |
| **Adeguatezza delle riserve** | Attività di riserva idonee e disponibili divise per l'esposizione espressamente coperta | Policy di copertura, idoneità delle attività, custodia o controllo, passività, esclusioni e valutazione; non usare per impostazione predefinita l'offerta totale dei token |
| **Utilizzo del limite** | Saldo misurato di un token nel Fondo diviso per il limite massimo attualmente configurato | Indirizzo del `Limiter`, token, Fondo, timestamp, modifiche e periodi senza limitatore |
| **Recupero dal garante** | Recupero idoneo ricevuto diviso per i sinistri coperti pagati | Garante identificato, policy sui sinistri, tempi, costi, controversie e cancellazioni contabili |
| **Ricavi di rete proposti** | Quota per la rete proposta ricevuta più commissioni separate di instradamento o di servizio ricevute | Escludere le commissioni lorde dei Fondi trattenute dai Fondi ed evitare di contare due volte la quota per la rete |
| **Tempestività della governance** | Tempo necessario per rilevare, decidere, sospendere, riparare e chiudere un incidente | Intervalli definiti, organi responsabili, poteri di emergenza, ricorsi ed eventi mancanti |

Le affermazioni sull'impatto sociale richiedono una metodologia separata. L'attività su blockchain, da sola, non dimostra identità, prestazione dell'emittente, soddisfazione, salute della comunità, causalità o impatto.
