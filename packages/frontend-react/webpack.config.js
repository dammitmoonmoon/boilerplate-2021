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
            templateContent: `
              <html lang='en'>
                <bod id='root'>
                  <script src='./dist/index.js'></script>
                </body>
              </html>
            `,
        }),
    ],
};
