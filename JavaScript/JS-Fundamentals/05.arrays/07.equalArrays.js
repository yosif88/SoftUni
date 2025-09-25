function equalArrays(arr1, arr2) {
    let sum = 0;
    let isEqual = false;
    
    for (let i = 0; i < arr1.length; i++) {
        let numOne = Number(arr1[i]);
        let numTwo = Number(arr2[i]);

        if (numOne === numTwo) {
            sum += numOne;
            isEqual = true;
        } else {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(
    ['10', '20', '30'],
    ['10', '20', '30']
)
console.log('------');
equalArrays(
    ['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5'])
console.log('---------');
equalArrays(
    ['1'], 
    ['10']
)

