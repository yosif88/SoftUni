function lowerOrUpper(chars){
    // let result = char === char.toUpperCase() ? 'upper-case':'lower-case';
    // console.log(result);

    let ascii = chars.charCodeAt(0);
    let result = ascii >= 65 && ascii <= 90 ? 'upper-case': 'lower-case';
    console.log(result);
}

lowerOrUpper('A')