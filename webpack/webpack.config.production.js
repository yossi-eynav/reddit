const webpack = require('webpack')
const path = require('path');
const distPath = path.join(__dirname, '/../', 'dist' );
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');


module.exports = {
    devtool: 'source-map',
    context: __dirname+ '/..',
    progress: true,
    entry: [
        "./src/index.js"
    ],
    output: {
        path: distPath,
        filename: "bundle.js"
    },
    plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new CopyWebpackPlugin([
                {from: 'node_modules/font-awesome/css/font-awesome.min.css', to: distPath},
                {from: 'node_modules/font-awesome/fonts/', to: `${distPath}/fonts/`},
                {from: './assets', to: distPath},
            ]),
            new HtmlWebpackPlugin({
                title: 'reddit',    
            }),
            new HtmlWebpackIncludeAssetsPlugin({ assets: 'font-awesome.min.css', append: true })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, '../','src')
            },
            {
                test: /\.scss$|.css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
};