function personInfo(firstName, lastName, age){
    let info = {
        // firstName: firstName,
        // lastName: lastName,
        // age: age
    }

    info.firstName = firstName;
    info.lastName = lastName;
    info.age = age;
    
    return info;
}

console.log(personInfo("Peter",
"Pan",
"20"))