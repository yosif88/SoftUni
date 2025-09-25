function employees(data) {
    let employee = {};

    for (const names of data) {

        
        employee[names] = names.length
    }
    
    for (const key in employee) {
        console.log(`Name: ${key} -- Personal Number: ${employee[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])