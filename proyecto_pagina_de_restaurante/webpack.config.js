import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
        publicPath: "./",
    },
    devtool: "eval-source-map",
    devServer:{
        watchFiles: ["./src/template.html"],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
           { test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: "asset/resource"
           },
        ],
    },

}