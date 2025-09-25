function mergeArrays(firstArr, secondArr) {
    let mergeArr = [];

    for (let index = 0; index < firstArr.length; index++) {
        let firstArrNum = firstArr[index];
        let secondArrNum = secondArr[index];
        
        if (index % 2 === 0){
            mergeArr[index] = Number(firstArrNum) + Number(secondArrNum);
        }else{
            mergeArr[index] = firstArrNum + secondArrNum; 
        }

    }
    console.log(mergeArr.join(' - '));
}


mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)