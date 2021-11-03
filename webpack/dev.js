const { resolve } = require('path');

const { config, plugins, getRules } = require('./common');

module.exports = {
  ...config,
  plugins,
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: 'http://localhost:3001/',
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: getRules(),
  },
};
