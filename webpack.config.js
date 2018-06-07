/* eslint-disable import/no-extraneous-dependencies, no-console */
// @noflow

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const language = process.env.LANGUAGE || 'en';
const NODE_ENV = process.env.NODE_ENV || 'development';
const destination = path.join(__dirname, 'dist');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Smart FAQ demo',
  }),
  new Dotenv({
    systemvars: true,
  }),
  new CopyWebpackPlugin([
    { from: 'static', to: path.join(destination, 'static') },
  ]),
];
if (NODE_ENV === 'production') {
  plugins.push(
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  );
}

module.exports = {
  name: language,
  entry: ['./src/index.js'],
  devtool: 'source-map',
  output: {
    path: destination,
    filename: `smart-faq.${language}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [['styled-jsx/babel', { optimizeForSpeed: false }]],
        },
      },
    ],
  },
  plugins,
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    disableHostCheck: true,
  },
};
