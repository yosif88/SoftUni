function passwordGenerator(input) {
    let firstString = input[0];
    let secondString = input[1];
    let word = input[2];


    let concatStr = firstString + secondString;
    let vowels = ['a', 'o', 'e', 'u', 'i'];
    let password = '';
    let index = 0;


    for (let char of concatStr) {
        if (vowels.includes(char)) {
        
            if (index === word.length) {
                index = 0;
            }

            letter = word[index];
            concatStr = concatStr.replace(char, letter.toUpperCase());

            index++;

        }
    }


    for (let i = concatStr.length - 1; i >= 0; i--) {
        password += concatStr[i];
    }
    console.log(`Your generated password is ${password}`);
}


passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)