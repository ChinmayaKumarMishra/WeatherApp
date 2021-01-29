const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=44486b90024abdd80e6ece205dfd5fc4&query='+latitude+','+longitude
	
	request({url, json:true}, (error, {body})=>{
	
		if(error){
			callback('Unable to connect to weather services!', undefined)
		} else if(body.error){
			callback('Unable to find location. Try another search.', undefined)
		} else {			
			callback(undefined, {
				location: body.location.name, 
				region: body.location.region,
				country: body.location.country,
				Latitude: body.location.lat,
				Longitude: body.location.lon,
				weather_descriptions: body.current.weather_descriptions[0],
				temperature: body.current.temperature,
				humidity: body.current.humidity
			})
		}
	})
}

module.exports = forecast