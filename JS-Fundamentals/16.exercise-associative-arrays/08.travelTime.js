function travelTime(input) {
    let travel = {};

    for (const line of input) {
        let [countryName, townName, cost] = line.split(' > ');
        cost = Number(cost);

        if (!travel.hasOwnProperty(countryName)) {
            travel[countryName] = {};
            travel[countryName][townName] = cost;
       
        } else {
            if (!travel[countryName].hasOwnProperty(townName)) {
                travel[countryName][townName] = cost;

            } else {
                let odlCost = travel[countryName][townName];
                if (odlCost > cost) {
                    travel[countryName][townName] = cost;
                }
            }
        }



    }
    let sortedAsContry = Object.entries(travel)
        .sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))

    for (const [country, town] of sortedAsContry) {
        let print = '';
        print += `${country} -> `;

        let sorted = Object.entries(town).sort((kvpA, kvpB) => kvpA[0] - kvpB[1]);
        for (const [name, cost] of sorted) {
            print += `${name} -> ${cost} `


        }
        console.log(print);
    }


}


travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])
console.log('--------------');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])
