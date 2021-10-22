

# 项目启动
直接用 lerna 启动微任务与主任务
```sh
lerna run start
```

### 微服务程序启动
```sh
cd microservice_lib
yarn start
```

### 主程序服务启动
```sh
cd main-app
yarn start
```


# 常用 lerna 命令
```js
// 常用
lerna bootstrap  // 安装所有依赖项并链接任何交叉依赖项
//例 node_modules 下载到根目录: 
lerna bootstrap --npm-client yarn --use-workspaces
//例 node_modules 下载到各自模块里: 
lerna bootstrap --npm-client yarn 

lerna exec       // 在每个包中执行任意命令
//例: lerna exec 'yarn remove lodash' // 删除

lerna add        // 安装依赖，支持交叉依赖
// lerna add packageA --scope=packageB

// 版本发布
lerna changed    // 检查自上次发布以来哪些软件包已经更新
lerna diff       // 自上次发布以来，对所有包或单个包进行区分
lerna publish    // 发布版本

// 常用
lerna clean      // 清除项目中所有 node_modules
lerna init       // 初始化项目
lerna create     // 创建项目中的子package

// 其它
lerna run        // 在包含该脚本的包中运行 npm 脚本
lerna info       // 查看信息
lerna import     // 导入
lerna link       // 软链
lerna version    // 查看版本
lerna ls         // 列出当前 lerna 项目中的公共包

```



# git submodule

## **Tips**

### 1. 初始化安装

```bash
# 后面的路径是前端项目的地址 这样可以保持之前原有的项目结构
git submodule add [git-submodule-remote-url] [submodule-install-path]
```

#### 1.1. 报错： already exists in the index
在主项目重新拉取项目
```bash
 # 报错信息： git clone '[submodule-install-path]' already exists in the index
git rm --cached [submodule-install-path] && rm -d [submodule-install-path]
git submodule add [git-remote] [submodule-install-path]
```

#### 1.2 【非1和1.1的方式】使用 update 方式更新线上到本地
```bash
git submodule set-url [submodule-install-path] [git-submodule-remote-url]
git submodule update --init --recursive 
```



### 2. 已有 submodule 的项目下载 submodule
```bash
# 例如clone union-coupon项目:  git clone --recurse-submodules [git-submodule-remote-url]
git clone --recurse-submodules ***
```