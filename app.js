const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

/* --- sample code to fetch google address api
request({
    url : 'http://maps.googleapis.com/maps/api/geocode/json?address=2021%20nit%20calicut',
    json : true
}, (error, response, body)=>{
    console.log(body.results[0].formatted_address);
    
    let jsonObj = JSON.stringify(response, undefined, 2);
    console.log(jsonObj);
    
    let result = JSON.parse(jsonObj);
    console.log(result.statusCode);
}); --- */

const argv = yargs
    .options( {
        address : {
            demand : true,
            alias : 'a',
            describe : 'To fetch address for weather',
            string : true
        }
    })
    .help()
    .alias('help','h')
    .argv;
    console.log('----------------');
    console.log("Passed Arguments");
    console.log('----------------');
    console.log(argv);
    console.log('----------------');

geocode.geocodeAddress(argv.address, (errorMessage,result) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        //let addressObj = JSON.stringify(result, undefined, 2);
        console.log("Address: ",result.Address);
        console.log("Latitude: ",result.Latitude);
        console.log("Longitude: ",result.Longitude);
        
        /*--- used forecast.io API for getting temperature ---*/
        weather.getWeather(result.Latitude, result.Longitude, (errorMSg, weatherResult) => {
        if (errorMSg) {
            console.log(errorMSg);
        }
        else{
            console.log("Temperature: ",weatherResult.temperature);
            console.log("ApperentTemperature: ",weatherResult.apparentTemperature);
        }
    });
}
});