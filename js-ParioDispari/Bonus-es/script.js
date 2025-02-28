// Bonus seconda esercitazione: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

//Definizione delle Variabili per il processo

let input_window_user = window.prompt('Inserisci Pari o Dispari:', '');
let Number_ver_input = Number(window.prompt('Inserisci un numero da 1 a 5:', ''));

//Definire la Funzione per la task

function Number_Ver(user, number){
  if (user === 'Pari') {
    if (!isNaN(number) && number % 2 === 0) {
        console.log('Il numero che hai scelto è Pari.');
    } else{
        console.log('Il numero che hai scelto non è Pari.');
    }
  } else if(user === 'Dispari') {
    if (!isNaN(number) && number % 2 !== 0) {
        console.log('Il numero che hai scelto è Dispari.');
    } else{
        console.log('Il numero che hai scelto non è Dispari.');
    }
  } else{
    console.log('Non hai inserito correttamente i valori di input, ricarica e riprova');
  }
}

//Denominazione di funzione
Number_Ver(input_window_user, Number_ver_input);