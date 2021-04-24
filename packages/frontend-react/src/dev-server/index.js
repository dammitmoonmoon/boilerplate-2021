const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use(WebpackDevMiddleware(compiler));
app.use(WebpackHotMiddleware(compiler));

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('DevServer is ready at port 3000'));
