const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    request({
        url : `https://api.darksky.net/forecast/41ae0459ea1ea58b6dbc985a2163ad75/${latitude},${longitude}`,
        json : true,
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect forecast.io Server');
        }
        else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        }
        else if(response.statusCode === 200){
            callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
            });
        }
        /* --- same thing here 
        if (!error &&response.statusCode === 200) {
            console.log(body.currently.temperature);
        }
        else{
            console.log("Unable to fetch weather");
        }   --- */
    });
};

module.exports.getWeather = getWeather;