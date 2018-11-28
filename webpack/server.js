const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const join = require('path').join;
const nodeExternals = require('../scripts/node-externals');

module.exports = merge(common, {
    mode: 'development',
    name: 'server',
    target: 'node',
    externals: nodeExternals,
    entry: [
        join(__dirname, '../src/server/index')
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'app.server.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [{
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]'
                }
            }, 'ruby-sass-loader'
            ]
          },
          {
            test: /\.styl/,
            exclude: /node_modules/,
            use: [{
                loader: 'css-loader/locals',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }, {
                loader: 'stylus-loader'
            }]
        },
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
        }]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
});
