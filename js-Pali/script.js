//Task della prima esercitazione: Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Definire le variabili per l'operazioni
let input_user_par = window.prompt('Inserisci una parola a piacere:', '');

//Creazione della funzione di convalidazione

function Words_Ver(input) {
  if (input === 'Palindroma') {
    input = window.alert('La parola che hai scelto è correttamente corrispondente a quello inserito');
    console.log('La parola che hai scelto è correttamente corrispondente a quello inserito');
  } else {
    input = window.alert('La parola che hai scelto non è correttamente corrispondente a quello inserito');
    console.log('La parola che hai scelto non è correttamente corrispondente a quello inserito');
  }
}

//Implementazione della funzione
Words_Ver(input_user_par);