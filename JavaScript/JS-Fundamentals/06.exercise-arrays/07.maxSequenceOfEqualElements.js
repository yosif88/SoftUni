function maxSeqence(arr){
    let sequence = [];

    for (let i = 0; i < arr.length; i++){
        let firstNum = arr[i];
        let currentSeqence = [firstNum]
       
        for (let j = i + 1; j < arr.length; j++){
            let nextNum = arr[j];
            if (firstNum === nextNum){
                currentSeqence.push(nextNum);
           
            }else{
                break;
            }
           
        }
        if (currentSeqence.length > sequence.length){
            sequence = currentSeqence;
        }
       
    }
    console.log(sequence.join(' '));
}

maxSeqence([1, 1, 1, 2, 3, 1, 3, 3])
maxSeqence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSeqence([4, 4, 4, 4])
maxSeqence([0, 1, 1, 5, 2, 2, 6, 3, 3])