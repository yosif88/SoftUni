function bombNumbers(arr, sequences){
    let bomb = sequences[0];
    let power = sequences[1];

    let index = arr.indexOf(bomb);

    while(index !== -1){
        let start = Math.max(0,index - power);
        let end = power * 2 + 1;

        arr.splice(start, end);
        index = arr.indexOf(bomb);
    }
    let sum = arr.reduce((a,b) => a + b, 0);
    console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])