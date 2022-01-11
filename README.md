[微服务参考webpack](https://github.com/anderlaw/react-webpack-MF)



## 启动项目

### 开发环境
```sh
yarn dev
yarn serve
```
访问地址 [http://127.0.0.1:8888/examples/browser/](http://127.0.0.1:8888/examples/browser/)


#### 在第三方网址测试方法
```js
loadScript('http://localhost:8888/dist/util-libs.js', ()=> {
  console.log('utils: ', utils);
  console.log(utils.utilApp)
  console.log(utils.utilBase)
})
function loadScript(url, callback) {
  try {
    let script = document.createElement("script");
    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // 其他浏览器
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  } catch (error) {
    console.log("error: ", error);
  }
}

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






## 生成文档
```sh
# 9999 端口
yarn doc

```




## todo 列表

- [ ] 埋点
  - [ ] 埋点服务
  - [ ] 点击埋点
  - [ ] 曝光埋点
  - [ ] 曝光时长埋点
  - [ ] 错误埋点
  - [ ] 公共错误
- [ ] 公共注册插件
  - [ ] 公共请求插件
- [ ] 设计模式模版化
- [ ] 倒计时
- [ ] 多选/批量功能
  - [ ] 删除
  - [ ] 选中





## 参考文章
- [个人封装常用utils](https://github.com/dragonir/Utils.js#uuidgenerator)   
 - 