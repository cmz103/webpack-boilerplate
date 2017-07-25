const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Creates it's own index.html file (dynamic, so you don't have to put static values)
const CleanWebpackPlugin = require('clean-webpack-plugin'); // Cleans dist folder for unsused assets

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map', // Generate Source Maps for debugging
    devServer: {
        contentBase: './dist' //Tell webpack-dev-server where to look
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // Handle css files
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            // Handle images files
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },

            // Handle font files
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

            // Handle csv, tsv, and xml
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            }, {
                test: /\.xml$/,
                use: ['xml-loader']
            }

        ]
    }
};