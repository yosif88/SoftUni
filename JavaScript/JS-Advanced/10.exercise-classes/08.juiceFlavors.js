function juiceFlavors(input) {

    let store = new Map();
    let storeBottle = new Map();

    for (const line of input) {
        let [type, quantity] = line.split(' => ');

        if (!store.has(type)) {
            store.set(type, Number(quantity));
        } else {
            store.set(type, store.get(type) + Number(quantity))
        }

        if (store.get(type) >= 1000) {
            let bottle = parseInt(store.get(type) / 1000);
            store.set(type, store.get(type) - bottle * 1000);

            if (!storeBottle.has(type)) {
                storeBottle.set(type, bottle);
            }else{
                storeBottle.set(type, storeBottle.get(type) + bottle)
            }

        }

    }
    for (const[key, value] of storeBottle) {
        console.log(`${key} => ${value}`);
    }

}

juiceFlavors(['Orange => 2000',

    'Peach => 1432',

    'Banana => 450',

    'Peach => 600',

    'Strawberry => 549'])