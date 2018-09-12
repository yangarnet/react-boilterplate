const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['index']),
        new HtmlWebpackPlugin({
        title: 'Minimum-Viable',
        filename: 'index.html',
        template: './static/index.html',
        })
    ]
};