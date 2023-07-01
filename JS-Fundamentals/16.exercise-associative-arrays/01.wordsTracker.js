// first version Map

// function wordsTracker(input) {
//     let map = new Map();

//     let wordsToCheck = input.shift().split(' ');

//     wordsToCheck.forEach(el => {
//         map.set(el, 0);
//     })

//     for (const word of input) {
//         if (map.has(word)){
//             let times = map.get(word);
//             times ++;
//             map.set(word, times);
//         }

//     }

//     let sorted = Array.from(map.entries())
//     .sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

//     for (const [key, times] of sorted){

//         console.log(`${key} - ${times}`);

//     }

// }


// second version  Associative array /object/

function wordsTracker(input) {
    let words = {};

    let wordsToCheck = input.shift().split(' ');

    wordsToCheck.forEach(el => {
        words[el] = 0;
    })

    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    }

    let sorted = Object.entries(words)
    .sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    for (const [key, times] of sorted) {

        console.log(`${key} - ${times}`);

    }

}


wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'])