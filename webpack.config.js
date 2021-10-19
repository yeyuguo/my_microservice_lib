const path = require('path');

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'util-libs.js',
    libraryTarget: 'umd', // 可在 commondjs 和 AMD 模式下正常执行
    globalObject: 'this',
    // libraryExport: 'default',
    library: 'utils' // 暴露的API
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
}

// console.log('process.env.production: ', process.env);


module.exports = () => config