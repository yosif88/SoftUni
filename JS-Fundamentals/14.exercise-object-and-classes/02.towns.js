function towns(data){
    let geoLocation = {};

    for (let params of data) {
        let [city, latitude,longitude]= params.split(' | ');
         
        
            geoLocation.town= city;
            geoLocation.latitude= Number(latitude).toFixed(2);
            geoLocation.longitude= Number(longitude).toFixed(2);
            console.log(geoLocation);
    }
    
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])