function hashTag(text) {
    let string = text.split(' ');

    for (const word of string) {
        
        if (word[0] === '#' && word.length > 1){
            let findWord = '';
           
            for (let i = 1; i < word.length; i++) {
                let ch = word[i].charCodeAt(0);
                
                if(!(ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122)) {
                    findWord = '';
                    break;
                   
                }else{
                    findWord += word[i];
                }
            }
            if (findWord.length > 0){
                console.log(findWord);
            }
        }   
        
    }

}

hashTag('The symbol #AD! is known #variously in English-speaking #regions as the #number sign')