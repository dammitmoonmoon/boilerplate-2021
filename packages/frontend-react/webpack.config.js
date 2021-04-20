const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [require.resolve('react-refresh/babel')],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
};
