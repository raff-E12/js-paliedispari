//Task della prima esercitazione: Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Definire le variabili per l'operazioni
let input_user_par = window.prompt('Inserisci una parola a piacere:', '');
const list_words = ['Pane', 'Farfalla', 'Spazio', 'Meme', 'Shrek', 'Palindroma'];
let index = 0;
let condition = true;

//Creazione della funzione di convalidazione

function Words_Ver(words){
  if (words === 'Palindroma') {
    while (list_words[0] === 5 && condition !== false){
        console.log('Complementi, sei riuscito a superare la prova di oggi');
        index++;
        break
    }
  } else{
    console.log('Mi dispiace, hai perso la tua occassione quindi riprova la tua occassione');
  }
}

Words_Ver(input_user_par);