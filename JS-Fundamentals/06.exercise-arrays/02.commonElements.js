function commonElements(firstArr,secondArr){
    //variant with for of loop
    // for (const currentEl of firstArr) {
    //     if (secondArr.includes(currentEl)){
    //         console.log(currentEl);
    //     }
        
    // }

    //variant with for loop
    for (let index = 0; index < firstArr.length - 1; index++){
        let currentEl = firstArr[index];
        for(let j = 0; j < secondArr.length; j++){
            if (currentEl === secondArr[j]){
                console.log(currentEl);
            }
        }
        
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)