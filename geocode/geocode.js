const request = require('request');

let geocodeAddress = (address, callback) => {
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
            callback('Unable to connect to server');
        }
        // if address is invalid
        else if(body.status === "ZERO_RESULTS"){
            callback("Address Not Founded");
        }
        // address is corrected
        else if(body.status === 'OK'){
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });   
        }
        // if daily request quota is exceeded for this API
        else if(body.status === 'OVER_QUERY_LIMIT') {
            console.log(body);
            
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;