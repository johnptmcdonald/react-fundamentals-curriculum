var React = require('react');
var CityFormContainer = require('../containers/CityFormContainer')

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

	render: function() {
		return (
			<div className="text-center" style={styles.container}>
				<h1>Enter a City/State or ZIP code</h1>
				<CityFormContainer inline={false}/>
			</div>
		);
	}

});

module.exports = Home;