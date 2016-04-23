var React = require('react');
var FiveDayForecast = require('../components/FiveDayForecast')
var weatherHelper = require('../helpers/weatherHelper')


var ForecastContainer = React.createClass({

	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},

	getInitialState: function(){

		console.log(this.props)
		return {
			isLoading: true,
			city: "",
			forecast: {}
		}
	},

	componentDidMount: function(){
		console.log("running componentDidMount")
		console.log(this.props.routeParams.city)
		weatherHelper.get(this.props.routeParams.city)
			.then((data)=>{
				this.setState({
					isLoading: false,
					city: data.data.city.name,
					forecast: data.data.list
				})
			})
	},
	
	componentWillReceiveProps: function (nextProps) {
    	weatherHelper.get(nextProps.routeParams.city)
   			.then((data)=>{
				this.setState({
					isLoading: false,
					city: data.data.city.name,
					forecast: data.data.list
				})
			})
  	},


	render: function() {
		return (
			<FiveDayForecast forecast={this.state.forecast} isLoading={this.state.isLoading} city={this.state.city}/>
		)
	}

});

module.exports = ForecastContainer;