function filterEmployees(data, criteria) {
    let employee = JSON.parse(data);
    let [property, value] = criteria.split("-");

    employee.
        filter(e => e[property] == value)
        .map((emp, i) =>
            `${i}. ${emp.first_name} ${emp.last_name} - ${emp.email}`)
        .forEach(element => {
            console.log(element);
        });


}

let employee = filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')

console.log(employee);