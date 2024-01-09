/* 
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
*/

// Chiedo l'età
const userAge = prompt("Quanti anni hai?");
console.log(userAge);

// Chiedo i kilometri
const userKm = prompt("Quanti chilometri devi percorrere?");
console.log(userKm);

// Calcolo il biglietto
let ticketPrice = userKm * 0.21;
// console.log(ticketPrice);  Per controllare gli sconti

if (userAge < 18) {
  const discount = ticketPrice * 0.2;
  ticketPrice = ticketPrice - discount;
  console.log(ticketPrice);
} else if (userAge > 65) {
  const discount = ticketPrice * 0.4;
  ticketPrice = ticketPrice - discount;
  console.log(ticketPrice);
} else console.log(ticketPrice);
