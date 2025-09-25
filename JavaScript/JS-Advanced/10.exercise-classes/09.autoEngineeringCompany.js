function autoEngineeringCompany(data) {
    cars = new Map();
    models = new Map();

    for (const line of data) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
            cars.get(carBrand).set(carModel, Number(producedCars));

        } else {
           
            if (!cars.get(carBrand).has(carModel)) {
                cars.get(carBrand).set(carModel,Number(producedCars))
           
            }else{
                let produced =cars.get(carBrand)
                cars.get(carBrand).set(carModel,produced.get(carModel) + Number(producedCars))
            }
           
        }
    }

    let brands = cars.keys();
    
    for (const brand of brands) {
        console.log(brand);
    
        for (const car of cars.get(brand)) {
            console.log(`###${car[0]} -> ${car[1]}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',

    'Citroen | C5 | 10'])