# 指南

移动端 UI 组件库。

## 安装

```
npm i @reasy-team/reasy-vui -S
```

## 完全引用

```
import ReasyVui from '@reasy-team/reasy-vui';

Vue.use(ReasyVui);
```

## 按需引用

1. 安装 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 插件
2. `.babelrc`配置

```js
plugins: [
  [
    "component",
    {
      libraryName: "@reasy-team/reasy-vui", //插件名称
      styleLibraryName: "css", //插件样式目录
      libDir: "dist/lib" //插件库路径
    }
  ]
];
```

3. `import`需要使用的组件

```js
import { Base, Datepicker, Input } from "@reasy-team/reasy-vui";

Vue.use(Base);
Vue.use(Datepicker);
Vue.use(Input);
```

> 其中`Base`为组件基础支撑项，必须引入项，否则组件会不生效。

## 示例

<VuiDemo></VuiDemo>
