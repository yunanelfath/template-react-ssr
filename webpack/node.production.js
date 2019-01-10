const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const join = require('path').join;
const extendedNodeExternals = require('../scripts/extended-node-externals');

module.exports = merge(common, {
    mode: 'production',
    target: 'node',
    externals: extendedNodeExternals,
    node: {
        __dirname: false,
        __filename: false
    },
    entry: [
        'babel-polyfill',
        join(__dirname, '../src/index')
    ],
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
        },
        {
          test: /\.cjsx$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'coffee-jsx-loader',
              options: {
                query: {
                  presets: ['es2015'],
                },
              }
            },
          ]
        }
      ]
    },
    output: {
        filename: 'index.js',
        path: join(__dirname, '../public'),
    }
});
