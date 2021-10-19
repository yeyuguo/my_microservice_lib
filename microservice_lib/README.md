[微服务参考webpack](https://github.com/anderlaw/react-webpack-MF)



## 启动项目

### 开发环境
```sh
yarn dev
yarn serve
```


### 生产环境
```sh
yarn build:b // 生成浏览器端
yarn serve
```




###  启动微服务

#### 1. 正常生成 dist/util-libs.js 文件
```sh
yarn build
```



####  2. 生成微服务文件 dist-remote/util-remote.js
```sh
# 生成微服务文件
yarn build:mic
# 提供可访问微服务
yarn serve:mic
```


#### 3. 在主应用中加载 微服务

webpack 加载微服务
```javascript
// 在主应用中加载微服务应用
// 此处是主应用的逻辑
new ModuleFederationPlugin({
  name: "main_app",
  remotes:{
    "microservice-lib":"microservice_lib@http://localhost:8888/util-remote.js"
  }
})

```



业务代码使用微服务
```js
const utils = require('microservice-lib/util-libs')
console.log('utils: ', utils);
utils && utils.test()

```