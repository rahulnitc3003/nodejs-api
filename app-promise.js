const axios = require('axios');
const yargs = require('yargs');
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

    var encodedAdress = encodeURIComponent(argv.address);
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`;

    axios.get(geocodeUrl).then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to Find input Address');
        }
        else if (response.data.status === "OVER_QUERY_LIMIT") { 
            throw new Error(response.data.error_message);
        }
        var address = response.data.results[0].formatted_address;
        var latitude = response.data.results[0].geometry.location.lat;
        var longitude = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/41ae0459ea1ea58b6dbc985a2163ad75/${latitude},${longitude}`;
        console.log('Address: ', address);
        console.log('Latitude: ', latitude);
        console.log('Logitude: ', longitude);
        return axios.get(weatherUrl);
    }).then((response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log('Temperature: ', temperature);
        console.log('apparentTemperature: ', apparentTemperature);
    }).catch((err) => {
        if (err.code === 'ENOTFOUND') {
            console.log('Unable to connect API Server');            
        }
        else{
            console.log(err.message);            
        }
    });