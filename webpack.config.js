var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {fornac: './scripts/fornac.js',
      rnaplot: './scripts/rnaplot.js'},
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    libraryTarget: 'var',
    library: '[name]'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
};
