function needForSpeed(input) {
    let n = Number(input.shift());

    let cars = {};

    for (let i = 0; i < n; i++) {
        let [model, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        if (!cars.hasOwnProperty(model)) {
            cars[model] = [];
            cars[model].push(mileage, fuel);
        }
    }

    for (const line of input) {
        let tokens = line.split(' : ');
        let command = tokens[0];

        if (command === 'Drive') {
            let car = tokens[1];
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);

            if (fuel > cars[car][1]) {
                console.log("Not enough fuel to make that ride");

            } else {
                cars[car][0] += distance;
                cars[car][1] -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (cars[car][0] >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if (command === 'Refuel') {
            let car = tokens[1];
            let fuel = Number(tokens[2]);
            let totalFuel = fuel + cars[car][1];

            if (totalFuel > 75) {
                cars[car][1] = 75;
                totalFuel -= fuel;
                console.log(`${car} refueled with ${cars[car][1] - totalFuel} liters`);

            }else{
                cars[car][1] += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        
        }else if (command === 'Revert'){
            let car = tokens[1];
            let kilometers = Number(tokens[2]);

            cars[car][0]-= kilometers;

            if (cars[car][0] < 10000){
                cars[car][0] = 10000;
            }else{
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }

        }
    }
    
    Object.entries(cars).forEach(el => {
        console.log(`${el[0]} -> Mileage: ${el[1][0]} kms, Fuel in the tank: ${el[1][1]} lt.`);
    })


}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])

// needForSpeed([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ])