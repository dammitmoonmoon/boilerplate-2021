const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = (env) => ({
    mode: env.production === 'production' ? 'production' : 'development',
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin()],
});

const client = () => ({
    name: 'client',
    target: 'web',
    entry: ['webpack-hot-middleware/client', './src/client/client-entry.ts'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'client.js',
        publicPath: '/static/',
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
    plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
});

const server = () => ({
    name: 'server',
    target: 'node',
    entry: ['./src/client/server-entry.ts'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                    },
                ],
            },
        ],
    },
});

module.exports = (env) => {
    process.env.NODE_ENV = env.production ? 'production' : 'development';

    const clientConfig = merge(common(env), client());
    const serverConfig = merge(common(env), server());

    return [clientConfig, serverConfig];
};
