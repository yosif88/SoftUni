function processOddNumbers(arr){
    
    let oddfilteredNum = arr.filter((el, i) => i % 2 !== 0);
    
    let doubledNum = oddfilteredNum.map(el => el * 2);
    
    let reversedNum = doubledNum.reverse();
    
    console.log(reversedNum.join(' '));
}

processOddNumbers([10, 15, 20, 25])