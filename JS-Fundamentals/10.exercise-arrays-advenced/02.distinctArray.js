function distinctArray(arr){
    let res = []; 

    for (const el of arr) {
        if (!res.includes(el)){
            res.push(el);
        }
    }

    console.log(res.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])