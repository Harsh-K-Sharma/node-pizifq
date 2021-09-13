const {merge} = require('webpack-merge')
const defaultConfig = require('./webpack.config')
const path = require('path')

module.exports = merge(defaultConfig,{
  mode:'development'
})