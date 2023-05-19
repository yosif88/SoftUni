function amazingNumbers(num) {
    let numToStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numToStr.length; i++){
        sum += Number(numToStr[i])
    }

    let result = sum.toString().includes(9)?'Amazing? True': 'Amazing? False';
    console.log(`${num} ${result}`);

}

amazingNumbers(999)