const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require('./webpack.config.common');
const { BUILD_DIST, HTML_TEMPLATE } = require('./webpack.consts'); 

const BUNDLE_NAME = '[name].[contentHash].bundle.js';

const htmlMinConfig = {
  removeComments: true,
  collapseWhitespace: true,
  ignoreCustomFragments: [/\{\{[\s\S]*?\}\}/]
};

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: BUNDLE_NAME,
    path: BUILD_DIST,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE,
      minify: htmlMinConfig,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
})