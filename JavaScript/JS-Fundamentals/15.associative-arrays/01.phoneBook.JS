function phoneBook(input){

    let phoneBookObj = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');
        phoneBookObj[name] = phone;
        
    }

    for (const key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])