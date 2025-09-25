function replaceRepeatingChars(text){
    let output = text[0];

    for(let i = 1; i < text.length; i++){
        let currentChar = text[i];
        let previousChar = text[i - 1];

        if (currentChar !== previousChar){
            output += currentChar;
        }
    }
    console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')