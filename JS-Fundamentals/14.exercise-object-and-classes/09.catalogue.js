function catalogue(data) {
    let sorted = data.sort((a, b) => a.localeCompare(b));
    let initialChars = [];
    let store = {};

    for (let i = 0; i < sorted.length; i++) {
        let ch = sorted[i][0];
        if (!chars.includes(ch)) {
            initialChars.push(ch);
        }
    }

    for (const line of data) {
        let [product, price] = line.split(' : ');
        store[product] = Number(price)

    }

    for (const ch of initialChars) {
        console.log(ch);
        for (const key in store) {
            if (ch === key[0]) {
                console.log(`  ${key}: ${store[key]}`);
            }
        }

    }


}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])