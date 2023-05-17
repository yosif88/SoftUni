function englishName(numbers){
    let numToString = numbers.toString().split('');
    let lastDigit = numToString[numToString.length - 1];
    let printResult = '';
    switch(lastDigit){
        case '0':
            printResult='zero';
            break;
        case '1':
            printResult='one';
           break;
        case '2':
            printResult='two';
            break;
        case '3':
            printResult='three';
            break;
        case '4':
            printResult='four';
            break;
        case '5':
            printResult='five';
            break;
        case '6':
            printResult='six';
            break;
        case '7':
            printResult='seven';
            break;
        case '8':
            printResult='eight';
            break;
        case '9':
            printResult='nine';
            break;
        
    }
    console.log(printResult);
    
}

englishName(1)