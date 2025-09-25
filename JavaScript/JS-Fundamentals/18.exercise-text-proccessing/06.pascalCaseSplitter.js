function pascalCaseSplitter(text){
    
    let result = [];
    let index = 0;
    for (let i = 1; i < text.length; i++) {
        let ch = text[i].charCodeAt(0);
        
        if (ch >= 65 && ch <= 90){
            result.push(text.substring(index, i));
            index = i;
           
        }
        if (i === text.length - 1){
            result.push(text.substring(index))
        }
        
    }
    console.log(result.join(', '));


}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')