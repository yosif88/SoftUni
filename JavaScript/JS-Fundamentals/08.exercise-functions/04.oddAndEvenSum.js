function oddAndEvenSum(number){
    let evenSum = 0;
    let oddSum = 0;
    let numAsStr = number.toString();

    for (let i = 0; i < numAsStr.length; i++){
        let nums = Number(numAsStr[i]);
        if (nums % 2 === 0){
            evenSum += nums;
        }else{
            oddSum += nums
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

console.log(oddAndEvenSum(1000435))