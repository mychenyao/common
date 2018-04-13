const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   plugins: [
 	new HtmlWebpackPlugin({
 		title: 'Output Management',
 		template:path.resolve(__dirname,"index.html"),
 		filename:"index.html"
 		 })
  ],
  devServer: {
 		contentBase: './dist',
 		host:'localhost',
 		port:9090,
 		compress:true
  },
};