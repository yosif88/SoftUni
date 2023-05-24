function evenAndOddSubtraction(arr){
    let evenSum = 0;
    let oddSum = 0;

    for (let number of arr) {
        number = Number(number);
        if (number % 2 === 0){
            evenSum += number;
        }else{
            oddSum += number;
        }
    }

    let diff = evenSum - oddSum;
    console.log(diff);
}

evenAndOddSubtraction([1,2,3,4,5,6])