
React.js Fundamentals Curriculum
========

####For more information on React.js Program, [click here](http://reactjsprogram.com)

##Objective
Build a functioning Weather app using the [Open Weather API](http://openweathermap.org/api). The end result of this project can be found [HERE](http://www.reactjsprogram.com/React-Fundamentals-Project). 

### Notes
A few things I took away from this:

####Setting up webpack.config.js
If you want to use browserHistory instead of hashHistory (as recommended by the ugys who made react-router), you need to do two pieces of config:

1 - configure the webpack server start script in package.json
```json
"start": "webpack-dev-server --inline --content-base . --history-api-fallback"
```

2 - make sure the bundled app.js that is being injected into your index.html is an absolute path:
```webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports ={
	entry: [
		'./app/app.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: "/app.js" 		//<==== this is the key line!
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}
``` 


####Using componentDidMount
This is where you'll make a call to your apiHelper, which can use axios. It will act just like an angular factory


####Using componentWillReceiveProps
This will make a component re-render if its props change (e.g. if it is using data from the routeParams to make an API call)

####Using contextTypes.router
```
contextTypes: {
	router: React.PropTypes.object.isRequired
}
```

This will allow components to change the routing. You can pass in queries or just concatenate a path


####Dealing with promises
Your component might render before your promise from an api call is resolved. In this case, we can put an ```isLoading``` boolean in the state, and then render the component conditionally.