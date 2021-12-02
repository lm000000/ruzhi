const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const { VueLoaderPlugin } = require('vue-loader');

// package.json     script:serve:webpack ./src/main.js      webpack是webpack-cli 的命令 是用来打包的
module.exports  = {
    target: "web",
    // 路径问题     这里的路径都是在最外层的路径
    entry: "./src/main.js",
    devtool:"source-map",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "dist.js"
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            // 解决 runtime-only 报错 即 runtime 版本，不支持编译 template 模板。
            vue$: "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "../src")
        }
    },
    module: {
      // 解决   Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
      unknownContextCritical: false,
        rules: [
            {
                test:/\.vue$/,
                // 还要安装  vue-template-compiler
                loader: "vue-loader"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(jpg|gif|svg|png|jpeg)$/,
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: "img/[name]_[hash:6][ext]",
                 },
            },
            {
                test:/\.js$/,
                // 还要安装  @babel/core @babel/preset-env
                loader:"babel-loader"
            }
        ]
    },
    plugins: [
        // 作用  会在打包文件中生成index.html文件    不用再外面自己创建index.html(引入打包文件)
        // 在开发环境中也要使用  开发环境也是使用webpack命令行打包   只不过不会真的生成打包文件
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title:"项目",
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
        new VueLoaderPlugin()
    ]
}

