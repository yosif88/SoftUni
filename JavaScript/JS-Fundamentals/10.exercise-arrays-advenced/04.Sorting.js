function sorting(arr) {
    arr.sort((a, b) => a - b);

    let result = [];
    //     len = arr.length;

    //    for (let i = 0; i < len; i++){
    //       let biggestNum = arr.pop();
    //       let smallestNum = arr.shift();
    //       result.push(biggestNum,smallestNum);
    //    }

    while (arr.length > 0) {
        let biggestNum = arr.pop();
        let smallestNum = arr.shift();
        result.push(biggestNum, smallestNum);
    }
    console.log(result.join(' '));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])