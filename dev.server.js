import opn from 'opn';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.dev.config.babel';
import config from './config';
import app from './src/server/app';
import routes from './src/server/routes/routes';

const compiler = webpack(webpackConfig);
const NODE_PORT = process.env.NODE_PORT || config.NODE_PORT;
const NODE_HOST = process.env.NODE_HOST || config.NODE_HOST;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));

routes(app);

const serverURL = `http://${NODE_HOST}:${NODE_PORT}`;
const logAndOpen = () => {
  opn(serverURL, {
    app: ['chrome']
  });
};

app.listen(NODE_PORT, (err) => err ? console.error(err) : logAndOpen());
