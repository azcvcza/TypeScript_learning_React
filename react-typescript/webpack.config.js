const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        }, {
            enforce:"pre",
            test:/\.js$/,
            loader:"source-map-loader"
        }]
    },
    devtool:"source-map",
    resolve:{
        extensions:[".js",".ts",".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}