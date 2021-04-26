const express = require('express');
const webpack = require('webpack');
const argumentsParser = require('minimist');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.js');
const { serverConfig } = require('../../config/dev-server/config');

const args = argumentsParser(process.argv.slice(2), {
    boolean: ['ssr'],
});

const app = express();
const compiler = webpack(webpackConfig({ ...serverConfig, ssr: args.ssr }));

app.use(WebpackDevMiddleware(compiler));
app.use(WebpackHotMiddleware(compiler));

// // eslint-disable-next-line no-console
app.listen(3000, () => console.log('DevServer is ready at port 3000'));
