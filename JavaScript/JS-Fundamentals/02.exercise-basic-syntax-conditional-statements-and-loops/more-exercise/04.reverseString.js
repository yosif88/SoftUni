function reverseString(text){
    
    // let reverseWord = text.split('').reverse()
    // console.log(reverseWord.join(''));
    
    let res = '';
    for (let i = text.length - 1; i >= 0; i--){
        res += text[i];
    }
    console.log(res);
    
    
}

reverseString('Hello')