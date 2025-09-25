function storage(data){
    let storageMap = new Map();

    for (const line of data) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if(storageMap.has(item)){
            quantity += storageMap.get(item);
        }
        storageMap.set(item, quantity);
        
        
    }

   for (const [item, quantity] of storageMap) {
        console.log(`${item} -> ${quantity}`);
   }


}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])