const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
