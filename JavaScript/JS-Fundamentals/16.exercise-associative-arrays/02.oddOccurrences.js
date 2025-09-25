function oddOccurrences(input){

    let  wordsArr = input.split(' ').map(el => el.toLowerCase());
    
    let wordsObj = {};

    for (const word of wordsArr) {
        if (!wordsObj.hasOwnProperty(word)){
            wordsObj[word] = 0;
        }
        wordsObj[word] += 1;
        
    }
    
    let result = [];
    
    for (const [key, value] of Object.entries(wordsObj)) {
        if (value % 2 !== 0)   {    
            result.push(key);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')