
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

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
    plugins:[
        new HtmlWebpackPlugin({
            title:"Outpun Management",
            favicon:"./favicon.ico"
        })
    ]
};
