/* eslint-disable import/no-extraneous-dependencies, no-console */
// @noflow

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const language = process.env.LANGUAGE || 'en';
const destination = path.join(__dirname, 'dist');

module.exports = {
  name: language,
  entry: ['./src/index.js'],
  output: {
    path: destination,
    filename: `smart-faq.${language}.js`,
    publicPath: '/',
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Smart FAQ demo',
    }),
    new Dotenv({
      systemvars: true,
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: path.join(destination, 'static') },
    ]),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    disableHostCheck: true,
  },
};
