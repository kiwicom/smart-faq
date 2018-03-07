const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const languages = require('./i18n/languages');

const langs = process.env.LANGUAGE ? [process.env.LANGUAGE] : languages;

module.exports = langs.map(language => ({
  name: language,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `smart-faq.${language}.js`
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.LANGUAGE': JSON.stringify(language),
      'process.env.TRANSLATION_PATH': JSON.stringify(`../i18n/${language}/translation.json`), // dynamic imports suck
    }),
    new HtmlWebpackPlugin({
      title: 'Smart FAQ demo',
    })
  ],
  devServer: {
    contentBase: './dist'
  }
}));