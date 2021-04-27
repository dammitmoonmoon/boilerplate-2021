const HtmlWebpackPlugin = require('html-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = () => ({
    mode: 'development',
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.[tj]sx?$/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
});
