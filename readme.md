# Human code

### Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

### Soluzione

- Chiedo all'utente quanti anni ha.
- L'utente immette l'età e la conservo in una variabile userAge
- Chiedo all'utente quanti chilometri vuole percorrere
- L'utente immette i chilometri e conservo il dato in una variabile userKm
- Calcolo il biglietto:
  - ticketPrice = 0.21 \* userKm
- Applico eventuali sconti:
  - Se userAge < 18 allora ticketPrice = 20% ticketPrice
  - Se userAge > 65 allora ticketPrice = 40% ticketPrice
- Stampo a schermo il prezzo finale ticketPrice.
