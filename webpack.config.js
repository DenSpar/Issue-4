const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/assets/template.html'
        }),
    ],
    devServer: {
        port: 3000,
        hot: true
    },
}