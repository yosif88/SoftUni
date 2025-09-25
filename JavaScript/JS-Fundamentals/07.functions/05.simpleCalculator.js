function simpleCalculator(numOne, numTwo, operator) {
    switch(operator) {
        case 'add': 
            let add=(a,b)=> a + b;
            console.log(add(numOne, numTwo)); 
            break;
        case 'subtract':
            let sub=(a,b)=> a - b;
            console.log(sub(numOne, numTwo));
            break;
        case 'multiply':
            let mul=(a,b)=> a * b;
            console.log(mul(numOne, numTwo));
            break;
        case 'divide':
            let div=(a,b)=> a / b;
            console.log(div(numOne,numTwo))
            break;
    }

}

simpleCalculator(10,
    5,
    'divide')