// il software richiede un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16)
do {
    var diff = parseInt(
        prompt(
            "inserisci livello difficolta' fra: \n0 --> facile \n1 --> medio\n2 --> difficile"
        )
    );
} while (diff < 0 || diff > 2 || isNaN(diff));

var randomNums = impostaDifficolta(diff);
var mine = generaMine(16, randomNums);
console.log(`mine generate: ${mine}`);
console.log(`in totale sono ${mine.length}`);
// ------------------------------------------------------------------

// chiedere all utente di inserire un numero alla volta sempre compreso tra 1 e (100-80-50 a seconda del livello) se il numero dell utente e' presente nella LISTA delle mine il gioco termina, altrimenti il gioco continua chiedendo all utente un altro numero OPPURE fino a quando non ha piu scelte valide (100 - 16)

var arrNumeriUtente = [];
var contatore = 0;
do {
    var numeroUtente = parseInt(
        prompt(`Inserisci un numero tra 1 e ${randomNums}`)
    );

    if (arrNumeriUtente.includes(numeroUtente)) {
        alert("hai inserito gia questo numero");
    } else {
        arrNumeriUtente.push(numeroUtente);
        contatore++;
    }
} while (!mine.includes(numeroUtente) && contatore < randomNums - mine.length);
// -------------------------------------------------------------------

// al termine della partita devi comunicare quante volte hai giocato prima di perdere
// ? contando anche la giocata andata male?
console.log(`hai giocato ${contatore - 1} volte`);

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

function impostaDifficolta(difficolta) {
    // generare 16 numeri casuali tra 1 e 100 se il livello e' 0
    // generare 16 numeri casuali tra 1 e 80 se il livello e' 1
    // generare 16 numeri casuali tra 1 e 50 se il livello e' 2
    switch (difficolta) {
        case 0:
            var intervalloNumeri = 100;
            break;
        case 1:
            var intervalloNumeri = 80;
            break;
        case 2:
            var intervalloNumeri = 50;
            break;

        default:
            break;
    }
    return intervalloNumeri;
}
