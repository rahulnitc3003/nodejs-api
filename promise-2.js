const request = require('request');

let geocodeAddress = (address) =>{
    return new Promise((resolve, reject) => {
    let encodedAdress = encodeURIComponent(address);
    //console.log(encodedAdress);

    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
        json : true,
    }, (error, Response, body) => {
        console.log('***********************');
        console.log('Body of geocode Address');
        console.log('***********************');
        // if URL is not exists
        if(error){
            reject('Unable to connect to server');
        }
        // if address is invalid
        else if(body.status === "ZERO_RESULTS"){
            reject("Address Not Founded");
        }
        // address is corrected
        else if(body.status === 'OK'){
            resolve({
                Address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });   
        }
        // if daily request quota is exceeded for this API
        else if(body.status === 'OVER_QUERY_LIMIT') {
            reject(body);
        }
    });
});
};

geocodeAddress("811105").then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
}).catch((err) => {
    console.log(err);
});