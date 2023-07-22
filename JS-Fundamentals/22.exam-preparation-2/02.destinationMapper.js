function destinationMapper(input){
    
    let pattern = /(\/|=)(?<destination>[A-Z][A-Za-z]{2,})\1/g
    let matches = input.matchAll(pattern);
    let travelPoints = 0;
    let destinations = [];
    
    for (const info of matches) {
       
        travelPoints += info.groups.destination.length;
        destinations.push(info.groups.destination)
        
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);


}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")