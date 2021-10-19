const path = require('path');
const baseConfig = require('./webpack.base.js')
const {ModuleFederationPlugin} = require('webpack').container

const config = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'util-libs.js', // 普通生成文件
    libraryTarget: 'umd', // 可在 commondjs 和 AMD 模式下正常执行
    globalObject: 'this',
    library: 'utils', // 暴露的API
    // 微服务地址
    // publicPath: "http://localhost:8888/", // service 启动端口
    // clean:true
  }
}

// console.log('process.env.production: ', process.env);


module.exports = () => config