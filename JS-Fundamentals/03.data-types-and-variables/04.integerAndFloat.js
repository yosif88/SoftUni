function integerAndFloat(numOne,numTwo,numThree){
    let sum = numOne + numTwo + numThree;

    // let result = sum % 1 === 0 ? ' - Integer':' - Float';
    let result = Number.isInteger(sum) ? ' - Integer':' - Float';
    console.log(`${sum}${result}`);
}

integerAndFloat(100, 200, 303)