// Task della seconda esercitazione: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Definizione delle Variabili per il processo.

let input_window_user = window.prompt('Inserisci Pari o Dispari:', '');
let number_user_input = Number(window.prompt('Inserisci un numero da 1 a 5:', ''));
let operation_number = 0;
let Number_user = '';
let computer_number = 0;
let result_number = 0;


//Funzione di generativa per il computer.

function Number_random(){
    return Math.ceil(Math.random() * 5) + 1;
}

//Funzione di verifica sul numero scelto dall'utente.

function Method_result(user, number){
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

  Method_result(input_window_user, number_user_input);

  //Operazione procedurale sul risultato finale.
  computer_number = Number_random();
  operation_number = Math.ceil(Math.random() * isNaN(number_user_input)) + 1;
  result_number = operation_number + computer_number;

 //Funzione di confronto sul risultato ottenuto per stabilire il vincitore. 
function Result_Op(result) {
    if (result % 2 === 0) {
        window.alert("Ha vinto l'utente, Complimenti.");
        console.log("Ha vinto l'utente, Complimenti.");
      } else {
        window.alert("Ha vinto il computer, Hai Perso.");
        console.log("Ha vinto il computer, Hai Perso.")
      }
    
}

Result_Op(result_number);
