function printAndSum(start,end){
    let sum = 0;
    let printNum = '';

    for (let i = start; i <= end; i++ ){
        printNum += `${i} `;
        sum += i;
    }
    console.log(printNum);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10)