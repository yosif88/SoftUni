function lastKNumbersSequence(n, k){
    let seq = [1];

    while (n > seq.length){
        let sum = 0;
        let result = seq.slice(-k);

        for (let i = 0; i < result.length; i++){
            sum += result[i];
        }
        seq.push(sum);
    }

    console.log(seq.join(' '));
}

lastKNumbersSequence(6, 3)