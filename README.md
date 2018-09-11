# sftx-comm-control

[![Latest Version on NPM](https://img.shields.io/npm/v/sftx-comm-control.svg?style=flat-square)](https://npmjs.com/package/sftx-comm-control)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://api.travis-ci.org/Dickkk/sftx-comm-control.svg?branch=master)](https://travis-ci.org/Dickkk/sftx-comm-control)
[![npm](https://img.shields.io/npm/dt/sftx-comm-control.svg?style=flat-square)](https://www.npmjs.com/package/sftx-comm-control)

## 说明
vue的业务组件库，对一些公共的业务组件抽离成单独的npm模块，业务系统公用。
## 关于测试
基于jest，在发布前会进行dom与快照的基本测试，开发组件的时候需要同时把单元测试完善。

## 安装、发布步骤
``` bash
# 安装
npm install

# 发布
npm run pub

# 测试
npm run test
```

## 业务工程使用说明
安装依赖
```
npm i sftx-comm-control -S
```
引用
```
import {Expression} from 'sftx-comm-control';
```
全局注册
```
Vue.use(Expression.name,Expression);
```
局部注册
```
const vueapp=new Vue({
    el: '#app',
    components: { Expression },
    template: '<Expression/>'
})
```
## 目录
```
.
├── README.md
├── __tests__                 # jest 测试程序目录
│   ├── Expression.test.js
│   ├── __snapshots__
│   │   └── Expression.test.js.snap
│   └── helpers
│       └── LocalStorageMock.js
├── lib                       # es5入口
│   └── index.js
├── package-lock.json
├── package.json
├── src                       # 代码目录
│   ├── assets
│   ├── components
│   │   ├── Expression.vue
│   │   ├── Tab.vue
│   │   └── Tabs.vue
│   └── index.js              #es6+ 入口，程序主入口
├── webpack.base.js
└── webpack.config.js
```




