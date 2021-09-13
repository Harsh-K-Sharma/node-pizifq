const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(defaultConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.[contenthash].js'
  }
});
