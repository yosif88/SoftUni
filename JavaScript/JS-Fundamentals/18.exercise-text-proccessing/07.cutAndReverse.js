function cutAndReverse(text){
    
    // let firstWord = text.substring(0,text.length / 2).
    // split('').
    // reverse().
    // join('');
    
    // let secondWord = text.substring(text.length/2).
    // split('').
    // reverse().
    // join('');

    // console.log(firstWord);
    // console.log(secondWord);

    let firstWord = text.substring(0,text.length / 2);
    let secondWord = text.substring(text.length/2);

    let printFistWords = '';
    let printSecondWords = '';
   
    for (let i = firstWord.length - 1; i >= 0; i--){
        printFistWords += firstWord[i];
    }

    for (let i = secondWord.length - 1; i >= 0; i--){
        printSecondWords += secondWord[i];
    }
    console.log(printFistWords);
    console.log(printSecondWords);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')