var React = require('react');

var styles = {
	button: {
		float: 'right',
		marginLeft: '10px',

	},
	form: {
		float: 'right',
		display: 'inline',
		

	},
	input: {
		float: 'left',
		height: '46px',
	},

	
}

var CityForm = React.createClass({

	render: function() {
		return this.props.inline 
		? 	<form style={styles.form} onSubmit={this.props.onSubmit}>

				<div style={styles.input} className="form-group">
					<input style={styles.input} value={this.props.city} onChange={this.props.onChange} className="form-control" type="text" placeholder="St. George, Utah"/>
				</div>
				<button style={styles.button} className="btn btn-lg btn-success">
					Get Weather
				</button>

			
			</form>
		: 
			<form onSubmit={this.props.onSubmit}>
				<div className="form-group">
					<input value={this.props.city} onChange={this.props.onChange} className="form-control" type="text" placeholder="St. George, Utah"/>
				</div>
				
				<button className="btn btn-lg btn-success">
					Get Weather
				</button>
			
			</form>
		
	}

});

module.exports = CityForm;