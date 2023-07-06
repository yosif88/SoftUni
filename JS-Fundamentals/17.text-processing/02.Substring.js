function substring(text, stratIndex, count) {
    let result = text.substring(stratIndex,count + stratIndex);
    console.log(result); 

}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7)