import path from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import precss from "precss";
import atImport from "postcss-import";
import autoprefixer from "autoprefixer";

import config from './config';


module.exports = {
devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    './src/client/index'
  ],
  output: {
    path: config.APP_BUILD_DIRECTORY,
    filename: 'client.js',
    publicPath: '/public/'
  },
  resolve: {
    root: path.join(__dirname, 'src')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"],
          cacheDirectory: true,
          plugins: ["react-hot-loader/babel", "transform-object-rest-spread"],
          env: {
            development: {
              presets: ["react-hmre"]
            }
          },
          babelrc: false
        },
        include: [
          path.join(__dirname, 'src/client'),
          path.join(__dirname, 'config.js')
        ]
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
		  { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
         {
        test: /\.svg$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]_[hash]',
          prefixize: true
        })
      }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer({browsers: ['last 2 versions']}),
      atImport({
        path: './src/css/*.css',
        addDependencyTo: webpack
      }),
      precss
    ];
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.join(config.APP_BUILD_DIRECTORY, 'vendor.json'))
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
