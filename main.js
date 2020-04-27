// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50

// generare 16 numeri casuali tra 1 e 100, queste saranno le mine
var mine = generaMine(16);
console.log(`mine generate: ${mine}`);
console.log(`in totale sono ${mine.length}`);

// chiedere all utente di inserire un numero alla volta sempre compreso tra 1 e 100 se il numero dell utente e' presente nella LISTA delle mine il gioco termina, altrimenti il gioco continua chiedendo all utente un altro numero OPPURE fino a quando non ha piu scelte valide (100 - 16)

var contatore = 0;
do {
    var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    contatore++;
} while (!mine.includes(numeroUtente) && contatore < 100 - mine.length);

// al termine della partita devi comunicare quante volte hai giocato prima di perdere
// ? contando anche la giocata andata male?
console.log(`hai giocato ${contatore} volte prima di perdere`);

function generaMine(numeroMine) {
    var arr = [];
    while (arr.length < numeroMine) {
        var numero = Math.floor(Math.random() * 100) + 1;

        //se 'numero' non esiste nell'array allora lo pusho dentro
        if (arr.indexOf(numero) === -1) {
            arr.push(numero);
        }
    }
    return arr.sort((a, b) => a - b);
}
