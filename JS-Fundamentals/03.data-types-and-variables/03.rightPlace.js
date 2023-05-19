function rightPlace(string, char, word){
    
    let replaceStr = string.replace('_', char);
    
    let result = replaceStr === word ? 'Matched':'Not Matched';
    console.log(result);
}

rightPlace('Str_ng', 'i', 'String')