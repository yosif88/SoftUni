function negativeOrPositiveNumbers(arr){
    let result = [];

    for (const el of arr) {
        if (el >= 0){
            result.push(el);
        }else{
            result.unshift(el);
        }
    }

    console.log(result.join('\n'));


}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])
console.log('----');
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
