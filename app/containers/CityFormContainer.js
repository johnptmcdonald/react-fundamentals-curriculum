var React = require('react');
var CityForm = require('../components/CityForm')

var CityFormContainer = React.createClass({

	getInitialState: function(){
		return {
			city: ""
		}
	},

	handleChange: function(event){
 		console.log("changing!")
 		this.setState({
 			city: event.target.value
 		})
	},

	handleSubmit: function(event){
		event.preventDefault()
		console.log("submitting" + this.state.city)
	},


	render: function() {
		return (
			<CityForm inline={this.props.inline} value={this.state.city} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
		);
	}

});

module.exports = CityFormContainer;