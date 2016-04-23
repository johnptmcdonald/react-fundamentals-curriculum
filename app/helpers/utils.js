var utils = {
	convertTimestamp: function(timestamp){
		var a = new Date(timestamp * 1000);
	  	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	  	var year = a.getFullYear();
	  	var month = months[a.getMonth()];
	  	var day = days[a.getDay()]
	  	var date = a.getDate();

	  	var time = day + ' ' + date + ' ' + month + ' ' + year  ;
	  	return time;
	},

	convertToFahrenheit: function(num){
		return Math.round(num*9/5 - 459.67)
	},

	convertToCelcius: function(num){
		return Math.round(num -273.15)
	}
}

module.exports = utils