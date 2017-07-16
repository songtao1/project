var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
	entry: "./root.js",
	module: {
		loaders:[{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		}, {
			test: /\.css?$/,
			loader: "style-loader!css-loader"
		
		},{
			test: /\.less?$/,
			loader: "style-loader!css-loader!less-loader"
		
		}]
	},
plugins:[
     new webpack.DefinePlugin({
	"process.env":{
	"NODE_ENV":JSON.stringify("production")
		}
	}),
	new webpack.optimize.UglifyJsPlugin()
],

	output: {
		path: __dirname,
		filename: "./bundle.js"
	}

}