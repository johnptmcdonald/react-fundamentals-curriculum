var React = require('react');
var utils = require('../helpers/utils')

var FiveDayForecast = React.createClass({
	
	renderDay: function(day){
		console.log("rendering ", day)
		var imgUrl = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png"
		var date = utils.convertTimestamp(day.dt)

		return (
			<div>
				<img src={imgUrl} alt=""/>
				<div>{date}</div>
			</div>
		)
		return day
	},

	render: function() {
		console.log(this.props.forecast)

		return this.props.isLoading ?
			<div>Loading</div>
		:
			<div>
				{this.props.forecast.map((day)=>{
					return <div key={utils.convertTimestamp(day.dt)}>{this.renderDay(day)}</div>
				})}
			</div>
		
	}

});

module.exports = FiveDayForecast;



	// renderDay: function(day){
	// 	console.log("rendering ", day)
	// 	var imgUrl = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png"
	// 	var date = utils.convertTimestamp(day.dt)
	// 	var max = utils.convertToFahrenheit(day.temp.max)
	// 	var min = utils.convertToFahrenheit(day.temp.min)
	// 	var humidity = day.humidity + "%"
		
	// 	console.log("returning ", imgUrl, date, max, min, humidity)
	// 	return (
	// 		<div>
	// 			<img src={imgUrl} alt=""/>
	// 			<div>{date}</div>
	// 			<div>Highest temperature: {max}</div>
	// 			<div>Lowest temperature: {min}</div>
	// 			<div>Humidity: {humidity}</div>
	// 		</div>
	// 	)
	// 	return day
	// },