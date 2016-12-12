const webpack = require('webpack');
const path = require('path');
const argv = require('yargs').argv;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackDevServer = require("webpack-dev-server");
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const DEV_URL = require('./config/dev_url.js');

const PATH_BASE = path.join(DEV_URL, 'base');
const PATH_CHAINAPP = path.join(DEV_URL, 'chainApp');
const PATH_COMPONMENT = path.join(DEV_URL, 'componment');
const PATH_CORE = path.join(DEV_URL, 'core');
const PATH_IMG = path.join(DEV_URL, 'img');
const PATH_LIB = path.join(DEV_URL, 'lib');
const PATH_LOGIN = path.join(DEV_URL, 'login/');
const PATH_SCSS = path.join(DEV_URL, 'scss');
const PATH_SINGLEAPP = path.join(DEV_URL, 'singleApp/');


module.exports = {
    entry: require('./config/entry.js')(!!argv.mylocal),
    output: require('./config/output.js')(argv),
    devtool: !!argv.mylocal ? 'eval-source-map' : false,
    module: require('./config/modules.js'),
    resolve: {
        extensions: ['','.js', '.json'],
        alias: require('./config/alias.js'),
    },
    externals:{},
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            minimize: true,
            beautify: false,
            mangle: true
        }),
        new HtmlWebpackPlugin(require('./config/htmlLogin.js')),
        // new HtmlWebpackPlugin(require('./config/htmlChainApp.js')),
        new HtmlWebpackPlugin(require('./config/htmlSingleApp.js')),
        new webpack.DefinePlugin({
            __PROD__: argv.prod,
            __DEST__: argv.dest,
            __DEMO__: argv.demo,
            __LOCAL__: argv.mylocal
        }),
    ],
};
