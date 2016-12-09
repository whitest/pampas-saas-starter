// webpack module 配置

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    loaders: [{
        test: /\.html$/,
        loader: "raw"
    }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
    }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
    }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
    }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'stage-1']
        }
    }],
};
