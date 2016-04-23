var apiKeys = require('../config/apiKeys')
var axios = require('axios')
console.log(apiKeys)
var weatherKey = apiKeys.weather

var weatherHelper = {

	get: function(city){
		console.log('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=' + weatherKey + '&cnt=5')
		return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=' + weatherKey + '&cnt=5')
	}
}




module.exports = weatherHelper

// *9/5 -459.67
// this is the example call to expand upon
// http://api.openweathermap.org/data/2.5/forecast/daily?q=manchester,uk&appid=c749b20a4c1587fdce86b1d815d54fee&cnt=5
// http://openweathermap.org/img/w/10d.png