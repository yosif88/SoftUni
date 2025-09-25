function calculator(numberOne, operator, numberTwo){
    let result = 0;

    switch(operator){
        case '+': result = numberOne + numberTwo; break;
        case '-' : result = numberOne - numberTwo; break;
        case '*': result = numberOne * numberTwo; break;
        case '/': result = numberOne / numberTwo; break;
    }
    console.log(result.toFixed(2));

}

calculator(5,'+',10)