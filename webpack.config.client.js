const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  devServer: {
    host: 'localhost',
    port: '6001',
    hot: true,
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: `postcss-loader`,
            options: {
              config: { path: path.resolve(__dirname, './postcss.config.js') },
            }
          }
        ],
      })
    }]
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'client.css' }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    path: path.join(__dirname, '.build'),
    filename: 'client.js',
  },
};
