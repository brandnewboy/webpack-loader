const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [{
                test: /\.js$/,
                // use: [
                //     './loader/test/test4.js',
                //     './loader/test/test5.js',
                //     './loader/test/test6.js'
                // ]
                use: [
                    './loader/my-loaders/clean-log-loader/index.js',
                    {
                        loader: './loader/my-loaders/banner-loader/index.js',
                        options: {
                            author: '法外狂徒张三'
                        }
                    },
                    {
                        loader: './loader/my-loaders//babel-loader/index.js',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    './loader/my-loaders/style-loader/index.js',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: './loader/my-loaders/file-loader',
                type: "javascript/auto" // 解决图片重复打包问题
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        })
    ],
    mode: 'development'
}