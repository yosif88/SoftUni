function addressBook(data){

    let addressBookObj = {};    

    for (const line of data) {
        let [name, address] = line.split(':');
        addressBookObj[name] = address;
    }

   let sortedAddressBookObj = Object.entries(addressBookObj)
   .sort((kvpA,kvpB) => kvpA[0].localeCompare(kvpB[0]));

   for (const [name, address] of sortedAddressBookObj) {
        console.log(`${name} -> ${address}`);
   }
   

}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])