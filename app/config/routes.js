var React = require('react')
var ReactRouter = require('react-router')

var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link 
var IndexRoute = ReactRouter.IndexRoute 
var browserHistory = ReactRouter.browserHistory 

var MainContainer = require('../containers/MainContainer')
var HomeContainer = require('../containers/HomeContainer')
var ForecastContainer = require('../containers/ForecastContainer')

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={MainContainer}>
			{/* Routes go here, inside Main*/}
			<IndexRoute component={HomeContainer}/>
			<Route path="/forecast/:city" component={ForecastContainer}/>
		</Route>

	</Router>
)

module.exports = routes