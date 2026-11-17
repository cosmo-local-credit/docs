## **Sintesi**

Il **Protocollo di messa in comune degli impegni (CPP)** descrive come Fondi di Impegni governati in modo indipendente possano curare impegni riscattabili, pubblicare metodi e limiti di cambio, detenere inventario e consentire scambi responsabili. Gli emittenti restano responsabili degli impegni associati ai propri buoni. I Responsabili dei Fondi restano responsabili delle regole dei Fondi e delle garanzie che assumono espressamente. Né la CLC App né GEF costituiscono un garante universale.

Protocol v1.1.0 fornisce gli attuali componenti dello scambio diretto: `GiftableToken`, `SwapPool`, registri e moduli di valutazione facoltativi, limiti al saldo dei token del Fondo, commissioni del Fondo, un'eventuale commissione aggiuntiva del Protocollo e un contratto Solidity `SwapRouter` di sola quotazione. La CLC App e CLC Core in produzione scoprono ora percorsi sulla stessa catena attraverso un massimo di tre Fondi, producono quotazioni a un blocco fissato, simulano e preparano batch atomici firmati per il portafoglio, li trasmettono e raggruppano i relativi registri di regolamento. I contratti non registrano l'adempimento nel mondo reale, non creano automaticamente quote per i fornitori di liquidità, non eseguono instradamento tra catene o compensazione in batch e non forniscono riserve, garanzie o assicurazioni universali.

Lo storico **Sarafu Network** ha applicato concetti di messa in comune degli impegni a valute comunitarie, gruppi di risparmio, sistemi di mutuo aiuto e impegni produttivi. Il servizio è stato successivamente trasferito alla CLC App. Ciò non significa che ogni account, portafoglio, token, buono, Fondo, saldo, relazione, partecipante o obbligo storico sia migrato.

**Istantanea storica di Sarafu Network — attività su Celo dal 5 luglio 2023 al 20 luglio 2025**

**Fonte:** [Dashboard Dune Analytics](https://dune.com/grassrootseconomics/sarafu-network)

- 26.367 utenti
- 285.197 scambi peer-to-peer
- 188 Fondi di Impegni attivi unici
- 745 buoni attivi unici
- 320.692 USD di volume degli scambi nei Fondi
- 899 rapporti pubblicati ([archivio dei rapporti storici](https://sarafu.network/reports))

Queste cifre costituiscono prove storiche, non dati sull'uso attuale di CLC.

Il progetto CLC più ampio combina l'instradamento attuale con proposte su come reti compatibili potrebbero:

1. estendere servizi di instradamento responsabili ad altri profili e domini di registro o di policy;
2. coordinare servizi di rete responsabili senza oltrepassare la responsabilità locale;
3. sostenere mandati di liquidità, garanzie, riserve o polizze assicurative finanziati separatamente;
4. misurare gli scambi nei Fondi separatamente da presentazione, adempimento ed estinzione dei buoni; e
5. utilizzare una quota per la rete proposta e commissioni di servizio adottate separatamente per finanziare servizi condivisi.

La proposta comprende un **token di governance CLC proposto** e un **Fondo di rete CLC proposto**. Nessuno dei due fa parte dell'attuale App o di Protocol v1.1.0.

Nel modello proposto, i partecipanti alla liquidità e alla governance potrebbero agire soltanto attraverso programmi adottati separatamente che pubblichino ammissibilità, rischi, controlli, diritti di trasferimento, condizioni di recupero e regole sulle commissioni. I normali depositi in un Fondo non creano automaticamente quote, diritti di rimborso o prelievo, ricompense o poteri di governance.

L'obiettivo comune è:

> Aumentare gli scambi responsabili e l'adempimento degli impegni reali, preservando cura, equità, responsabilità locale e resilienza.

La prevenzione della cattura e la possibilità concreta di uscire restano obiettivi fondamentali del progetto. I controlli proposti comprendono governance con ritardo temporale, soglie multiple di approvazione, delega trasparente, regole sui conflitti, riesame degli incidenti e una procedura documentata di separazione e migrazione. Questi controlli potrebbero ridurre determinati rischi di governance, ma non eliminare le perdite né garantire risultati.
