module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	},
	watch: true
}