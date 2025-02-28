//Task della prima esercitazione: Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Definire le variabili per l'operazioni
let input_user_par = window.prompt('Inserisci una parola a piacere:', '');
const list_words = ['Pane', 'Farfalla', 'Spazio', 'Meme', 'Shrek', 'Palindroma'];
let index = 0;
let condition = true;

//Creazione della funzione di convalidazione

function Words_Ver(input) {
   while (index < list_words.length && condition === true) {
      if (list_words[index] === 'Palindroma') {
        if (input === 'Palindroma') {
            input = window.alert('Complimenti, hai vinto la sfida di oggi.');
            console.log('Complimenti, hai vinto la sfida di oggi.');
        } else {
            input = window.alert('Mi dispiace, non hai vinto la sfida di oggi.');
            console.log('Mi dispiace, non hai vinto la sfida di oggi.');
        }
        condition = false;
        break
      }
      index++;
   }
   if (condition === false) {
    input = window.alert('Hai esaurito il tentativo, ricarica la pagina per riprovare.')
    console.log('Hai esaurito il tentativo, ricarica la pagina per riprovare.');
   }
}

//Implementazione della funzione
Words_Ver(input_user_par);