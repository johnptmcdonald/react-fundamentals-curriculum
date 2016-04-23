var React = require('react');
var CityForm = require('../components/CityForm')


var CityFormContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		return {
			city: ""
		}
	},

	handleChange: function(event){
 		console.log("changing! to ", event.target.value)
 		this.setState({
 			city: event.target.value
 		})
	},

	handleSubmit: function(event){
		event.preventDefault()
	
		console.log("moving " + this.state.city + " to forecast page")
		this.context.router.push({
			pathname: '/forecast/' + this.state.city,
		})

	},


	render: function() {
		return (
			<CityForm inline={this.props.inline} city={this.state.city} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
		);
	}

});

module.exports = CityFormContainer;