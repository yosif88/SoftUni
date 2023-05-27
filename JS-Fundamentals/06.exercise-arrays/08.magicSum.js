function magicSum(arr, number){
 
    for (let i = 0; i < arr.length; i++){
        let firstNum = arr[i];
        let sum = 0;
        for (let j = i + 1; j < arr.length;j++){
            let nextNum = arr[j];
            sum = firstNum + nextNum;
            if (sum === number){
                console.log(`${firstNum} ${nextNum}`);
            }
        }
    }


}

magicSum([1, 7, 6, 2, 19, 23], 8)