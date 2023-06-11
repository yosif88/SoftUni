function buildAWall(arr) {
    let pesos = 1900;
    let heightPerDay = 195;
    let days = 0;
    let amountOfConcrete = [];
    let crews = arr.length;

    while (arr.length > 0) {

        for (let i = 0; i < arr.length; i++) {

            let index = arr.indexOf(30)

            if (index !== -1) {
                arr.splice(index, 1)
                crews--;
                continue;

            }

            amountOfConcrete.push(crews * heightPerDay)
            arr = arr.map((x) => x + 1);
            days++;
        }
    }
    
    let totalPrice = 0;
    
    for (const el of amountOfConcrete) {
        totalPrice += el;

    }

    totalPrice *= pesos;
    console.log(amountOfConcrete.join(', '));
    console.log(`${totalPrice} pesos`);
}

buildAWall([21, 25, 28])