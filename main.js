// il software richiede un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16)
do {
    var diff = parseInt(
        prompt(
            "inserisci livello difficolta' fra 0 --> facile, 1 --> medio, e 2 --> difficile"
        )
    );
    // generare 16 numeri casuali tra 1 e 100 se il livello e' 0
    // generare 16 numeri casuali tra 1 e 80 se il livello e' 1
    // generare 16 numeri casuali tra 1 e 50 se il livello e' 2
    if (diff == 0) {
        var randomNums = 100;
    } else if (diff == 1) {
        var randomNums = 80;
    } else if (diff == 2) {
        var randomNums = 50;
    }
} while (diff < 0 || diff > 2 || isNaN(diff));

var mine = generaMine(16, randomNums);
console.log(`mine generate: ${mine}`);
console.log(`in totale sono ${mine.length}`);

// chiedere all utente di inserire un numero alla volta sempre compreso tra 1 e (100-80-50 a seconda del livello) se il numero dell utente e' presente nella LISTA delle mine il gioco termina, altrimenti il gioco continua chiedendo all utente un altro numero OPPURE fino a quando non ha piu scelte valide (100 - 16)

var contatore = 0;
do {
    var numeroUtente = parseInt(
        prompt(`Inserisci un numero tra 1 e ${randomNums}`)
    );
    contatore++;
} while (!mine.includes(numeroUtente) && contatore < 100 - mine.length);

// al termine della partita devi comunicare quante volte hai giocato prima di perdere
// ? contando anche la giocata andata male?
console.log(`hai giocato ${contatore} volte`);

function generaMine(numeroMine, rNums) {
    var arr = [];
    while (arr.length < numeroMine) {
        var numero = Math.floor(Math.random() * rNums) + 1;

        //se 'numero' non esiste nell'array allora lo pusho dentro
        //! questa e' l'istruzione che fara' terminare il ciclo perche' pushando aumenta la lunghezza di arr
        if (arr.indexOf(numero) === -1) {
            arr.push(numero);
        }
    }
    return arr.sort((a, b) => a - b);
}
