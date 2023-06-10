function firstAndLastKNumbers(arr){
    let k = arr.shift();
    let firstNumber = arr.slice(0,k);
    let lastNumber = arr.slice(-k);

    console.log(firstNumber.join(' '));
    console.log(lastNumber.join(' '));
    
}

firstAndLastKNumbers([2,
    7, 8, 9])