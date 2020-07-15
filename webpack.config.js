const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/repList.js'),
        repPage: path.resolve(__dirname, 'src/repPage.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/assets/repList_template.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new HTMLwebpackPlugin({
            template: './src/assets/repPage_template.html',
            filename: 'repPage.html',
            chunks: ['repPage']
        }),       
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, 'src/assets/favicon.jpg'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/rep.jpg'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/star.jpg'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 3000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions:['.js'],
        alias: {
            '@js': path.resolve(__dirname,'src/js'),
            '@': path.resolve(__dirname,'src')
        }
    }
}