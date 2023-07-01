function companyUsers(input) {
    let users = {};

    for (const line of input) {

        let [employee, id] = line.split(' -> ');

        if (!users.hasOwnProperty(employee)) {
            users[employee] = new Set();
        }

        users[employee].add(id);
    }

    let sorted = Object.entries(users)
        .sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const [company, employees] of sorted) {
        console.log(company);
       
        for (const employee of Array.from(employees)) {
            console.log(`-- ${employee}`);

        }
    }
}


companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])