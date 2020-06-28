const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { SRC_FOLDER, ENTRY_POINT } = require('./webpack.consts'); 

module.exports = {
  entry: ENTRY_POINT,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          cacheDirectory: true,
        }
      }
    }, {
      test: [/\.css$/, /\.scss$/],
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: true,
        }
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }, {
        loader: 'postcss-loader',
        options: { plugins: () => [require('autoprefixer')] }
      }]
    }]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, SRC_FOLDER),
    }
  },
}