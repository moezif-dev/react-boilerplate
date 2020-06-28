const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require('./webpack.config.common');
const { BUILD_DIST, HTML_TEMPLATE } = require('./webpack.consts'); 

const BUNDLE_NAME = '[name].bundle.js';

const dev = process.env.NODE_ENV !== 'production';

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: BUNDLE_NAME,
    path: BUILD_DIST,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
});