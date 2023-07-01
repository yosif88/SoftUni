// function cardGame(input){
//     let cardsPowerNum = {
//         '1':1,
//         '2':2,
//         '3':3,
//         '4':4,
//         '5':5,
//         '6':6,
//         '7':7,
//         '8':8,
//         '9':9,
//         '10':10,
//         'J': 11,
//         'Q': 12,
//         'K': 13,
//         'A': 14,
//     }

//     let cardTypeNum = {
//         'S': 4,
//         'H': 3,
//         'D': 2,
//         'C': 1,
//     }

//     let players = new Map();

//     for (const line of input) {
//         let [name,cards] = line.split(": ");
        
//         if (!players.has(name)){
//             players.set(name, new Set())
//         }
//         let cardsArr = cards.split(', ')
//         for (const card of cardsArr) {
//             players.get(name).add(card);
//         }
       
//     }

//     for (let line of Array.from(players)) {
//         let [name, cards] = line;
//         let sum = 0;

//         for (let cardInfo of Array.from(cards)) {
//             let card = cardInfo.split('');
//             let powerAsString = card.splice(0,card.length - 1).join('');
//             let typeAsString = card[card.length -1];
            
//             sum += cardsPowerNum[powerAsString] * cardTypeNum[typeAsString];
//         }
//         console.log(`${name}: ${sum}`);
        
//     }
    

// }

function cardGame(input){
    let cardsPowerNum = {
        '1':1,
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9,
        '10':10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }

    let cardTypeNum = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }

    let players = {};

    for (const line of input) {
        let [name,cards] = line.split(": ");
        
        if (!players.hasOwnProperty(name)) {
            players[name] = new Set();
        }
        let cardsArr = cards.split(', ')
        for (const card of cardsArr) {
            players[name].add(card);
        }
       
    }

    for (let line of Object.entries(players)) {
        let [name, cards] = line;
        let sum = 0;

        for (let cardInfo of Array.from(cards)) {
            let card = cardInfo.split('');
            let powerAsString = card.splice(0,card.length - 1).join('');
            let typeAsString = card[card.length -1];
            
            sum += cardsPowerNum[powerAsString] * cardTypeNum[typeAsString];
        }
        console.log(`${name}: ${sum}`);
        
    }
    

}



cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])