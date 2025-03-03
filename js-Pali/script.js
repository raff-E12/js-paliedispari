//Task della prima esercitazione: Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Definire le variabili per l'operazioni
let input_user_par = window.prompt('Inserisci una parola a piacere:', '');
// const reverse_palindroma = input_user_par.split("").reverse().join("");
let reverse = '';
let reverse_cycle = ()=>{
  for (let index = input_user_par.length - 1; index >= 0; index--) { // Soluzione: per ogni diminuzione dell'indice si compone la 
  // parola al contrario in modo da corrispondere a quella palindroma grazie al ciclo.
    reverse += input_user_par[index];
    console.log(reverse);
  }
  return reverse;
}

//Creazione della funzione di convalidazione

function Words_Ver(input) {
  const reverse_word = reverse_cycle();
  if (input === reverse_word) {
    window.alert('La parola che hai scelto è correttamente corrispondente a un palindromo.');
    console.log('La parola che hai scelto è correttamente corrispondente a un palindromo.');
  } else {
    window.alert('La parola che hai scelto non è correttamente corrispondente a un palindromo.');
    console.log('La parola che hai scelto non è correttamente corrispondente a un palindromo.');
  }
}

//Implementazione della funzione
Words_Ver(input_user_par);