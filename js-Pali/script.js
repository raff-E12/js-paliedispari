//Task della prima esercitazione: Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Definire le variabili per l'operazioni
let input_user_par = window.prompt('Inserisci una parola a piacere:', '');
const reverse_palindroma = input_user_par.split("").reverse().join("");

//Creazione della funzione di convalidazione

function Words_Ver(input) {
  if (input === reverse_palindroma) {
    window.alert('La parola che hai scelto è correttamente corrispondente a un palindromo.');
    console.log('La parola che hai scelto è correttamente corrispondente a un palindromo.');
  } else {
    window.alert('La parola che hai scelto non è correttamente corrispondente a un palindromo.');
    console.log('La parola che hai scelto non è correttamente corrispondente a un palindromo.');
  }
}

//Implementazione della funzione
Words_Ver(input_user_par);