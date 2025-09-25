function sumFirstAndLastElement(arr){
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());
    console.log(firstNum + lastNum);

}

sumFirstAndLastElement(['20', '30', '40'])