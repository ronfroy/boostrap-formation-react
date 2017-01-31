'use strict';

var webpack = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin');

module.exports = {
  "target": 'web',
  "cache": true,
  "entry": {
    module: path.join(__dirname, 'app.js'),
  },

  "resolve": {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'react-formation.js',
    pathInfo: true
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react']
        }
      },
    ]
  },

  debug: true,
  devtool:'eval-cheap-module-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true
  },

  plugins: [
    new htmlPlugin({
      inject: true,
      template: path.join(__dirname, 'index.html')
    }),
    new webpack.NoErrorsPlugin()
  ]
};


