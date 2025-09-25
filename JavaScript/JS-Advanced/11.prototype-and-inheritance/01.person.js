function createPerson(firstName, lastName) {
    let result = {
        firstName,
        lastName,

    }

    Object.defineProperty(result, 'fullName',{
        enumerable: true,
        configurable: true,
        
        get(){
            return `${result.firstName} ${result.lastName}`
        },
        
        set(fullName){
            let [firstName,lastName] = fullName.split(' ');
            
            if(firstName && lastName){
               
               this.firstName = firstName;
               this.lastName = lastName;
                
            }

           
           
        }
    });
    return result;
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName); // Simpson