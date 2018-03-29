/* eslint-disable import/no-extraneous-dependencies, no-console */
// @noflow

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const language = process.env.LANGUAGE || 'en';

module.exports = {
  name: language,
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `smart-faq.${language}.js`,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jpg$/, use: ['file-loader'] },
      { test: /\.png$/, use: ['url-loader?mimetype=image/png'] },
      {
        // compatibility issue between webpack 4 and Apollo:
        // https://github.com/apollographql/react-apollo/issues/1737
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.LANGUAGE': JSON.stringify(language),
      'process.env.TRANSLATION_PATH': JSON.stringify(
        `../i18n/${language}/translation.json`,
      ), // dynamic imports suck
    }),
    new HtmlWebpackPlugin({
      title: 'Smart FAQ demo',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    disableHostCheck: true, // That solved it
  },
};
