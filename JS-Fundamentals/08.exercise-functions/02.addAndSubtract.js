function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sum(a, b) {
        return a + b;
    }
    let add = sum(firstNumber, secondNumber);
    function subtract(a, b) {
        return a - b;
    }
    
    return subtract(add,thirdNumber);
}

console.log(addAndSubtract(23, 6, 10));