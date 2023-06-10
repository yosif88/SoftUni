function searchForANumber(arrOne, arrTwo){
    let takeElement = arrTwo[0];
    let removeEl = arrTwo[1];
    let searchEl = arrTwo[2]; 

    let numbers = arrOne.slice(0,takeElement);
    numbers.splice(0, removeEl);
   
    
    let count = numbers.filter((el) => el === searchEl);
    // let counter = 0;
    // for (const el of seqance) {
    //     if (el === searchEl) {
    //         counter++;
    //     }       
    // }
    console.log(`Number ${searchEl} occurs ${count.length} times.`);
}

// searchForANumber(
//     [5, 2, 3, 4, 1, 6],
//     [5, 2, 3])
// console.log('-------');
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])

