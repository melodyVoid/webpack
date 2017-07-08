
const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    "file-loader"
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    "file-loader"
                ]
            },
            {
                test:/\.(csv|tsv)$/,
                use:[
                    "csv-loader"
                ]
            },
            {
                test:/\.xml$/,
                use:[
                    "xml-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new HtmlWebpackPlugin({
            title:"我是新生成的页面"
        })
    ],
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};
