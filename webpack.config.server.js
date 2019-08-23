const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  target: 'node',

  entry: [
    'webpack/hot/poll?1000',
    './app/server'
  ],

  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],

  resolve: {
    modules: [path.resolve(__dirname, 'app'), 'node_modules'],
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
      test: /\.(scss|css)$/,
      use: [
        'isomorphic-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, './postcss.config.js'),
            },
          }
        },
      ],
    }]
  },

  plugins: [
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect=9022'],
    }),
    new webpack.DefinePlugin({
      window: JSON.stringify(undefined),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],

  output: {
    path: path.join(__dirname, '.build'),
    filename: 'server.js'
  }
};
