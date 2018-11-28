const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common');
const join = require('path').join;
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    name: 'client',
    target: 'web',
    entry: [
        'webpack-hot-middleware/client',
        join(__dirname, '../src/client/index')
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'app.client.js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [{
          test: /\.s?css$/,
          exclude: /node_modules/,
          use: [ExtractCssChunksPlugin.loader, { // to registering css to main.css
              loader: 'css-loader',
              options: {
                  modules: true,
                  localIdentName: '[name]__[local]'
              }
          }, 'ruby-sass-loader'
          ]
        },
        {
            test: /\.styl$/,
            use:  [ExtractCssChunksPlugin.loader, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }, 'stylus-loader']
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractCssChunksPlugin()
    ]
});
