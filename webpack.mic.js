const path = require('path');
const {ModuleFederationPlugin} = require('webpack').container
const baseConfig = require('./webpack.base.js')

const config = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, './dist-remote/'),
    // 微服务地址
    publicPath: "http://localhost:8888/", // service 启动端口
    clean:true
  },
  plugins: [
    // 微服务 暴露
    new ModuleFederationPlugin({
        name: "microservice_lib",
        filename: "util-remote.js", // 生成 chunk 名字
        exposes: {
          // key:value
          // key: 作为应用里的名称: microservice_lib/util-libs 使用
          // value: 本地已有chunk文件
          "./util-libs":"./dist/util-libs.js", 
        }
    })
  ],
}

module.exports = () => config