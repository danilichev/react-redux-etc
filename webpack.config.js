var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

console.log({path: path.resolve(ROOT_PATH, './client/index.js')});

module.exports = {  
  entry: [
    path.resolve(ROOT_PATH, './client/index.js')
  ],
  output: {
    path: path.resolve(ROOT_PATH, './build'),
    publicPath: path.resolve(ROOT_PATH, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, './build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './client/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};