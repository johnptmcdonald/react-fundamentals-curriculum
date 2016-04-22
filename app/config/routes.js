var React = require('react')
var ReactRouter = require('react-router')

var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link 
var IndexRoute = ReactRouter.IndexRoute 
var browserHistory = ReactRouter.browserHistory 

var Main = require('../containers/Main')

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			{/* Routes go here, inside Main*/}
		</Route>

	</Router>
)

module.exports = routes