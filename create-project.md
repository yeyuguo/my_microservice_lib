


## webpack 搭建过程

## 0. 安装 webapck5 版本
```shell
pnpm i -D webpack@5
```

### 1. 安装babel 和 ts 包
```shell
pnpm install --save-dev typescript @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-typescript
```

### 2. 创建一个新的 ts 配置文件 tsconfig.json 
```shell
tsc --init --declaration --allowSyntheticDefaultImports --target esnext --outDir lib

```


### 3. 创建 `.babelrc`
```js
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1",
                    "ie": "8"
                }
            }
        ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```



## 4. ts-loader 处理方式
```js
// 发布环境
{
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
}



// 开发环境
{
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
}
```



## 5. 添加兼容性 (IE浏览器下)

```shell
npm i core-js -D
```
引入 core-js
```js
// .babelrc
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": {
                    //core-js的版本
                    "version": 3
                },
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1",
                    "ie": "8"
                }
            }
        ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```







- 参考文章
  
[webpack5 typescript](https://www.jianshu.com/p/89c94c9ad013)  
[webpack 生成lib](https://www.webpackjs.com/guides/author-libraries/)  
[webpack lib github demo](https://github.com/kalcifer/webpack-library-example)