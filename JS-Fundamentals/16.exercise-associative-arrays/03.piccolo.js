// object implementation

// function piccolo(input) {
//     let parkingObj = {};


//     for (const line of input) {
        
//         let [direction, carNumber] = line.split(', ');
        
//         if (direction === 'IN') {
//             parkingObj[carNumber] = carNumber;
//         } else {
//             delete parkingObj[carNumber];
//         }
//     }

//     if (Object.keys(parkingObj).length === 0) {
//         console.log('Parking Lot is Empty');

//     } else {
//         let sortedArr = Object.entries(parkingObj)
//             .sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

//         for (const [key, value] of sortedArr) {
//             console.log(key);
//         }
//     }
// }


// set implementation

function piccolo(input) {
    let parking = new Set();


    for (const line of input) {
        
        let [direction, carNumber] = line.split(', ');
        
        if (direction === 'IN') {
            parking.add(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }

   if (parking.size === 0){
        console.log('Parking Lot is Empty');
   }else{
    let sorted = Array.from(parking).sort((a,b) => a.localeCompare(b))
    for (const carNumber of sorted) {
        console.log(carNumber);
    }
    
   }
}


piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
console.log('-----------');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])
