const path = require('path');
const HTML = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

// entry['index'].push('webpack-hot-middleware/client');

module.exports = {
    entry: './src/index.js',
    output: {

        filename: './js/script.js',
        path: path.resolve(__dirname, 'dist/')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HTML({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HTML({
            filename: 'offers.html',
            template: './src/offers.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style/style.css'
        }),
        
        new webpack.HotModuleReplacementPlugin()    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(mp4|mov|avi)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/video/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(mp3|ogg|m4a)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/audio/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(rar|zip|pdf)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/file/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }

        ]
    },
    optimization: {
        //  minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    }
}