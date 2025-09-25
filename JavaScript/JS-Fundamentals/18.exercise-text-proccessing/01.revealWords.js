function revealWords(words, text){
    let wordsArr = words.split(', ');
    
    for (const word of wordsArr) {
        if (text.includes('*')){
            text = text.replace('*'.repeat(word.length),word);
        }
        
    }
    console.log(text);

}

revealWords('great','softuni is ***** place for learning new programming languages')
console.log('-------------------');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')