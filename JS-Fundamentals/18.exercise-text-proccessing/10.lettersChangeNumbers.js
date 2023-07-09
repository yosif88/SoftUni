// function lettersChangeNumbers(input) {
//     let words = input.split(' ');
//     let totalSum = 0;

//     let alphabet = {
//         'a': 1,
//         'b': 2,
//         'c': 3,
//         'd': 4,
//         'e': 5,
//         'f': 6,
//         'g': 7,
//         'h': 8,
//         'i': 9,
//         'j': 10,
//         'k': 11,
//         'l': 12,
//         'm': 13,
//         'n': 14,
//         'o': 15,
//         'p': 16,
//         'q': 17,
//         'r': 18,
//         's': 19,
//         't': 20,
//         'u': 21,
//         'v': 22,
//         'w': 23,
//         'x': 24,
//         'y': 25,
//         'z': 26,
//     }

//     for (const word of words) {
//         let index = 0;
//         let number = Number(word.substring(1, word.length - 1));

//         for (const letter of word) {
//             let char = letter.charCodeAt(0);
//             let firstPosition = 0;
//             let lastPosition = 0;

//             if (index === 0) {

//                 if ( char >= 65 && char <= 90) {

//                     if (alphabet.hasOwnProperty(letter.toLowerCase())) {
//                         firstPosition = alphabet[letter.toLowerCase()]
//                         number /= firstPosition;
//                     }

//                 } else {
//                     if (alphabet.hasOwnProperty(letter.toLowerCase())) {
//                         firstPosition = alphabet[letter.toLowerCase()]
//                         number *= firstPosition;
//                     }
//                 }

//             } else {

//                 if (char >= 97 && char <= 122) {

//                     if (alphabet.hasOwnProperty(letter.toLowerCase())) {
//                         lastPosition = alphabet[letter.toLowerCase()]
//                         number += lastPosition;
//                     }

//                 } else {
//                     if (alphabet.hasOwnProperty(letter.toLowerCase())) {
//                         lastPosition = alphabet[letter.toLowerCase()]
//                         number -= lastPosition;
//                     }

//                 }
//             }
//             index++;
//         }

//         totalSum += number;

//     }

//     console.log(totalSum.toFixed(2));
// }


function lettersChangeNumbers(input) {
    let words = input.split(' ').filter(x => x.length > 1);
    let totalSum = 0;
    
    let alphabet = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26,
    }

    for (const word of words) {
        let firstChar = word[0];
        let number = Number(word.substring(1, word.length - 1));
        let lastChar = word[word.length - 1];
        let position = 0;

        if (firstChar.charCodeAt(0) >= 65 && firstChar.charCodeAt(0) <= 90) {

            position = alphabet[firstChar.toLowerCase()]
            number /= position;

        } else {

            position = alphabet[firstChar.toLowerCase()]
            number *= position;

        }

        if (lastChar.charCodeAt(0) >= 97 && lastChar.charCodeAt(0) <= 122) {

            position = alphabet[lastChar.toLowerCase()]
            number += position;

        } else {

            position = alphabet[lastChar.toLowerCase()]
            number -= position;
        }

        totalSum += number;

    }

    console.log(totalSum.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f   H456z')