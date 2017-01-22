/* global __dirname */
import path from 'path';

export default {
  APP_HOME: __dirname,
  APP_BUILD_DIRECTORY: path.join(__dirname, 'build'),
  INDEX_HTML: path.join(__dirname, 'static'),
  NODE_PORT: 3000,
  NODE_HOST: 'localhost'
}