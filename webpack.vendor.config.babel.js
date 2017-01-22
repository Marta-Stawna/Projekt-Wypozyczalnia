import path from 'path';
import webpack from 'webpack';
import config from './config';

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'babel-polyfill',
      'react-tap-event-plugin',
      'material-ui',
      'redux-thunk'
    ]
  },

  output: {
    filename: '[name].dll.js',
    path: config.APP_BUILD_DIRECTORY,
    library: '[name]'
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(config.APP_BUILD_DIRECTORY, '[name].json')
    })
  ]
};