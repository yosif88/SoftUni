function stringOccurrences(text, word){
    let textAsArr = text.split(' ');
    let count = 0;

    for (const el of textAsArr) {
        if (el === word) {
            count++;
        }
    }
    console.log(count);

}

stringOccurrences('This is a word and it also is a sentence',
'is')