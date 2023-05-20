function sumDigits(numbers){
    let numAsStr = numbers.toString();

    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++){
        let currentNumber = Number(numAsStr[i]);
        sum += currentNumber;

    }
    console.log(sum);
}

sumDigits(245678)