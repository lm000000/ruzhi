const {merge} = require("webpack-merge")
const common = require("./webpack.common.config")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const CompressionWebpackPlugin = require("compression-webpack-plugin")


module.exports = merge(common,{
    mode:"production",
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns:[{
                from:"./public",
                globOptions:{
                    ignore:[
                        "**/index.html"
                    ]
                }
            }
            ]
        }),
        new UglifyWebpackPlugin(),
        // 对打包文件比较大的进行gzip压缩
        new CompressionWebpackPlugin({
            // 匹配
            test:/\.js$|\.vue$|.css$/,
            // 对大于10KB的文件
            threshold:10240,
            // 是否删除原文件
            deleteOriginalAssets:false
        })
    ]

})
