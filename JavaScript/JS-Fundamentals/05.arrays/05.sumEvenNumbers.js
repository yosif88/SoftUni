function sumEvenNumbers(arr) {
    let evenSum = 0;

    for (let el of arr) {
        let num = Number(el);
        if (num % 2 === 0) {
            evenSum += num
        }

    }
    console.log(evenSum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
console.log('----------------');
sumEvenNumbers(['3', '5', '7', '9'])
console.log('----------------');
sumEvenNumbers(['2', '4', '6', '8', '10']);

