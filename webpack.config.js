const webpack = require('webpack');
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.join(__dirname, "src"),
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				// used for loading css files.
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				// used for loading JS modules.
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	// this plugin helps generate HTML file in the bundle injecting the script in it.
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new webpack.BannerPlugin({ banner: "THIS is my Application Banner" }),
	],
}
