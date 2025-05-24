

type nameType = typeof names;
type locationType = typeof locations;

function createCombinedFunction(names:nameType, locations:locationType){
    return function(combinedObject:nameType & locationType){
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
        
    }
}


let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };

let locations = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`}};


let combinedFunction = createCombinedFunction(names, locations);
let combinedPerson = Object.assign({}, names, locations);
combinedFunction(combinedPerson);