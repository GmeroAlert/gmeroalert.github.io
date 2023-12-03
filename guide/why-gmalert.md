# 为什么选择GmAlert

<script setup>
import { alert,message,notice } from 'gmalert'
import GmBtn from '../components/GmBtn.vue'
</script>

<p><GmBtn :onClick="()=>{alert({
        content: 'Hello',
        text: 'world',
        showConfirm: true,
        showCancel: true,
        onClosed(code){
            if (code === 1) {
                notice('你点击了确认')
            } else {
                message('你点击了取消')
            }
        }
    })}">点我试试</GmBtn></p>

GmAlert 是一个基于原生js的轻量多合一浏览器弹出层组件，我们提供了 alert，message，notice，information 四个核心模块，而且每个模块都有 error, warning，success，info，loading 的预定样式。在保持轻量(css+js 18kb)的同时，尽可能的保证了功能的完善与易用

- 🪶 轻量至极的设计，18kb的全量体积，而且支持按需引入
- 🔒 我们使用 ts + eslint 编程，安全是我们考虑的首要目标
- 🆗 提供完整的类型支持
- 👌 简单易用的api

## 用例

- **项目没有一个合适的消息组件**
  
  如果你的项目使用原生js构建，或者使用的组件库没有提供一个功能完善的消息组件，那么你可以很轻松的使用GmAlert来完善你的项目，因为GmAlert不依赖任何框架，可以引入任何基于浏览器的项目

- **寻找一个极其轻量的消息组件**
  
  GmAlert即使全功能引入也只有18kb的内容, 而且我们提供了esm模块来实现treeshake，你可以按需引入你需要的组件

