function convertToObject(data){
    let obj = JSON.parse(data);
    
    for (const key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')