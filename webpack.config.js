const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './index.js',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/public/'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions:         ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    hot: true,
  }
};