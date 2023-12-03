# 快速入门

我们提供了两种安装方法，对于新手我们推荐直接在浏览器引入，如果你只需要 GmAlert 中的某个功能，可以使用 npm 安装后在使用 esm 导入，这需要你有一定的前端编程知识

## 在线尝试

我们准备了一个简单的 Demo 让你可以体验 GmAlert: [StackBlitz](https://stackblitz.com/edit/gmalertdemo?file=script.js).

## 安装

> 你可以直接在浏览器端引入 iife 格式的文件，或者使用 es 来在你的项目中导入组件(支持 treeshake)

### 浏览器安装

首先，我们需要在 [Releases](https://github.com/GmeroAlert/GmAlert/releases) 下载编译好的`gmalert.min.js`
和`gmalert.min.css`文件, 你也可以下载`gmalert-bundle.min.js`, 这个文件使用`css inject`的方法，在 js 初始化的时候将样式注入 head

::: code-group

```html [css and js]
<head>
  <!-- inject to head -->
  <link rel="stylesheet" href="/assets/css/gmalert.min.css" />
</head>

<body>
  <!-- inject to body bottom -->
  <script src="/assets/js/gmalert.min.js"></script>
</body>
```

```html [js bundle]
<body>
  <!-- inject to body bottom -->
  <script src="/assets/js/gmalert-bundle.min.js"></script>
</body>
```

:::

### npm 安装

对于 npm 安装，我们提供了一个完善的 esm 格式的文件，它将 GmAlert 的 4 个组件进行了分别导出，对于样式文件也进行了分割，
这意味着你可以选择你希望在项目中引入的功能，从而减小代码量

```sh
npm add gmalert
```

然后我们就可以在项目中轻松使用了，注意需要导入相应的 css

```ts
import { alert, information, message, notice } from 'gmalert'
```

## 使用

无论是使用什么安装方式，我们都提供了一致的 api 接口

### Alert

<script setup>
import { alert,message,notice,information } from '../components/gmalert.esm.js'
import GmBtn from '../components/GmBtn.vue'
import BtnGroup from '../components/BtnGroup.vue'
</script>

<BtnGroup>
    <GmBtn :onClick="()=>{alert('怎么了啊')}">Alert 1</GmBtn>
    <GmBtn :onClick="()=>{alert('oops...', 'error', {
        showConfirm: true,
        timeout: 5000,
    })}">Alert 2</GmBtn>
    <GmBtn :onClick="()=>{
        alert({content: 'Hello',text: 'world',showConfirm: true,showCancel: true,
            onClosed(code){
            if (code === 1) notice('你点击了确认') 
            else message('你点击了取消')
            }})
    }">Alert 3</GmBtn>
</BtnGroup>

::: details 代码

```js
Gmal.alert('怎么了啊')

Gmal.alert('oops..', 'error', {
  showConfirm: true,
})

Gmal.alert({
  content: 'Hello',
  text: 'world',
  showConfirm: true,
  showCancel: true,
  onClosed(code) {
    if (code === 1) {
      Gmal.notice('你点击了确认')
    } else {
      Gmal.message('你点击了取消')
    }
  },
})
```

:::

### Message

<BtnGroup>
    <GmBtn :onClick="()=>{message('怎么了啊')}">Message 1</GmBtn>
    <GmBtn :onClick="()=>{message('oops...', 'error')}">Message 2</GmBtn>
</BtnGroup>

::: details 代码
```js
Gmal.message('怎么了啊')
Gmal.message('oops..', 'error')
```
:::

### Notice

<BtnGroup>
    <GmBtn :onClick="()=>{notice('怎么了啊')}">Notice 1</GmBtn>
    <GmBtn :onClick="()=>{notice('警告你一次', 'warning')}">Notice 2</GmBtn>
</BtnGroup>

::: details 代码
```js
Gmal.notice('怎么了啊')
Gmal.notice('警告你一次', 'warning')
```
:::

### Infomation

<BtnGroup>
    <GmBtn :onClick="()=>{information('怎么了啊')}">Infomation 1</GmBtn>
    <GmBtn :onClick="()=>{information('警告你一次', 'warning')}">Infomation 2</GmBtn>
</BtnGroup>

::: details 代码
```js
Gmal.information('怎么了啊')
Gmal.information('警告你一次', 'warning')
```
:::

::: tip
更多使用方法，请查看[进阶](/guide/api)章节
:::