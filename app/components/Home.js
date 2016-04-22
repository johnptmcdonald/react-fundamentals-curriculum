var React = require('react');

var styles = {
	container: {
		backgroundSize: 'cover',
	 	backgroundImage: "url('app/images/pattern.svg')",
	    display: 'flex',
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center',
	    height: '100vh',
	    width: '100%'
    },
    header: {
    	fontSize: 45,
    	color: '#fff',
    	fontWeight: 100
    }
}

var Home = React.createClass({

	getInitialState: function(){
		return {
			city: ""
		}
	},

	onSubmitCity: function(){
		
	},

	handleChange: function(event){
		console.log(event.target.value)
		this.setState({
			city: event.target.value
		})
	},

	render: function() {
		return (
			<div className="text-center" style={styles.container}>
				<h1>Enter a City/State or ZIP code</h1>
				<form onSubmit={this.onSubmitCity}>
					<div className="form-group">
						<input value={this.state.value} onChange={this.handleChange} className="form-control" type="text" placeholder="St. George, Utah"/>
					</div>
					
					<button className="btn btn-lg btn-success">
						Get Weather
					</button>
					

				</form>
			</div>
		);
	}

});

module.exports = Home;