function maxNumber(arr) {
    let biggestNum = [];

    for (let i = 0; i < arr.length; i++) {
        let isBigger = true;
        let firstNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];

            if (nextNum >= firstNum) {
                isBigger = false;
            }
        }
        if (isBigger) {
            biggestNum.push(firstNum);
        }
    }
    
    console.log(biggestNum.join(' '));


}


maxNumber([1, 4, 3, 2])
console.log('------');
maxNumber([14, 24, 3, 19, 15, 17])
console.log('----');
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
