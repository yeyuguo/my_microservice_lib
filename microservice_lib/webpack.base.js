const path = require('path');
const {ModuleFederationPlugin} = require('webpack').container
console.log('ModuleFederationPlugin: ', ModuleFederationPlugin);

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    // 基础生成文件配置
    path: path.resolve(__dirname, './dist'),
    filename: 'util-libs.js', // 普通生成文件
    libraryTarget: 'umd', // 可在 commondjs 和 AMD 模式下正常执行
    globalObject: 'this',
    library: 'utils', // 暴露的API
    // 微服务地址
    // publicPath: "http://localhost:8888/", // service 启动端口
    // clean:true
  },
  externals: {
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // 开发环境
      // {
      //     test: /\.tsx?$/,
      //     use: 'ts-loader',
      //     exclude: /node_modules/,
      // },
      // 生产环境
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    // new ModuleFederationPlugin({
    //     name: "microservice_lib",
    //     filename: "util-libs.js", // 生成 chunk 名字
    //     exposes: {
    //       "./util-libs":"./dist/util-libs.js",
    //     }
    // })
  ],
}


module.exports = config