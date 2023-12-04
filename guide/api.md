# Api接口

对于GmAlert的四个核心模块来说，我们提供了一致的Api接口，确保了使用的简单和一致性

## 核心Props

我们所有的接口都是基于该类型

```ts
export interface MsgPropsFull {
  content: string
  type: 'success' | 'error' | 'warn' | 'info' | 'loading'
  timeout?: number // 超时消失
  text?: string // alert 和 information 独有
  headerLeft?: string // information 独有
  headerRight?: string // information 独有
  hideClose?: boolean // alert 和 information 独有
  onClosed?: (status: number) => void // 在关闭动画播放完，且组件从dom树上移除后触发
  showConfirm?: boolean // alert 独有
  showCancel?: boolean // alert 独有
  html?: string | HTMLElement // alert 独有
}

```

## 类型检测

我们通过对传入的参数进行类型检测，来实现最简化的调用模式，以下的调用方式都是支持的

```js
Gmal.alert("hahaha", 5000)
Gmal.alert("hahaha","error")
Gmal.alert("hahaha",{
  timeout: 1500,
  text: "content"
})
Gmal.alert({
  content: "hahaha",
  text: "contnet"
})
```