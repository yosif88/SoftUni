function factorialDivision(firstNumber, secondNumber){
    let first = calculateFactorial(firstNumber);
    let second = calculateFactorial(secondNumber);
    let result = first / second;
    function calculateFactorial(number){
        let res = 1;
        if (number > 0){
            res = number * calculateFactorial(number - 1);
            
        }
        return res;
    }
    
    return result.toFixed(2);
}

console.log(factorialDivision(5,2))