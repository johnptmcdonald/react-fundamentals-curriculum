var React = require('react');
var CityFormContainer = require('./CityFormContainer')

var styles = {
	inline: {
		display: "inline"
	},
	topBar: {
		background: "orange",
		padding: "20px 15px 25px 15px"
	},

}

var MainContainer = React.createClass({
	
	render: function() {
		return (
			<div>
				<div style={styles.topBar}>
					<h1 style={styles.inline}>Weather Time</h1>
					<CityFormContainer inline={true}/>
				</div>
					{this.props.children}

			</div>
		);
	}

});

module.exports = MainContainer;

