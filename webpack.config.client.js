const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: 'inline-source-map',

  devServer: {
    host: 'localhost',
    port: '6001',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With'
    }
  },

  entry: [
    'react-hot-loader/patch',
    './app/client',
  ],

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
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: false
          }
        },
        {
          loader: `postcss-loader`,
          options: {
            config: { path: path.resolve(__dirname, './postcss.config.js') },
          }
        }
      ],
    }]
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'client.css' }),
  ],

  output: {
    path: path.join(__dirname, '.build'),
    publicPath: 'http://localhost:6001/',
    filename: 'client.js',
  },
};
