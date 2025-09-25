function flightSchedule(data) {
    let dict = {};
    
    data[0].forEach(line =>{
        let [sector,destination,] = line.split(' ');
        dict[sector] ={
            'Destination': destination,
            'Status': "Ready to fly",
        }
    })

    data[1].forEach(line =>{
        let[sector,command] = line.split(' ');
        
        if (dict.hasOwnProperty(sector)){
            dict[sector].Status = command;
        }
    })

    Object.keys(dict).forEach(key =>{
        let command = data[2][0];
        if (dict[key].Status === command) {
            console.log(dict[key]);
        }
    })
    
    // for (const key in dict) {
    //     let command = data[2][0];
    //     if (dict[key].Status === command) {
    //        console.log(dict[key]);
            
    //     }
    // }

   
}

// flightSchedule([
//     ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], 
//     ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
//      ['Cancelled']
//      ])

flightSchedule([
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
    ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
    ['Ready to fly']
])