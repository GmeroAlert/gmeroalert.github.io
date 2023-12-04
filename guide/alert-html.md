<script setup>
import { alert,message } from '../components/gmalert.esm.js'
import GmBtn from '../components/GmBtn.vue'
import BtnGroup from '../components/BtnGroup.vue'
const input = document.createElement('input')
input.classList.add('gm-input')
const handleInput = () => {
    const value = input.value.trim()
    if (value) {
        message("你输入了 "+value)
    } else {
        message("你没有输入任何内容")
    }
}
const inputAlert = () => {
    alert('OK', {
        html: input,
        showConfirm: true,
        showCancel: true,
        onClosed(code){
            if (code === 1) {
                handleInput()
            } else {
                message('你点击了取消')
            }
        },
    })
}
</script>
<style lang="scss">
.gm-input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--vp-c-brand-light);
    border-radius: 5px;
    padding: 0 10px;

    &:focus {
        border-color: var(--vp-c-brand);
    }
}
</style>
# 在 alert 组件中使用 html

我们在 alert 组件中引入了 html 支持，请确保该功能不会接受任何不受信任的提供者所给予的html

## 以字符串的形式使用

如果你不需要对传入的html进行什么交互的话，你可以选择直接引入html代码

<BtnGroup>
    <GmBtn :onClick="()=>{alert('OK', {
        html: `<div style='color:red;font-size:18px;'>HaHaHa</div>`
    })}">Alert HTML</GmBtn>
</BtnGroup>

```ts
Gmal.alert('OK', {
    html: '<div style="color:red;font-size:18px;">HaHaHa</div>'
    })
```

## 以HTMLElement的方式使用

你也可以传入HTMLElement，这样保证了对传入的组件的数据获取与跟踪，比如你需要让用户在alert中输入账号密码之类的，求可以这么使用

<BtnGroup>
    <GmBtn :onClick="inputAlert">Alert Input</GmBtn>
</BtnGroup>

```js
const $input = document.createElement('input')
const handleInput = () => {
    const value = $input.value.trim()
    if (value) {
        message("你输入了 "+value)
    } else {
        message("你没有输入任何内容")
    }
}
const inputAlert = () => {
    alert('OK', {
        html: $input,
        showConfirm: true,
        showCancel: true,
        onClosed(code){
            if (code === 1) {
                handleInput()
            } else {
                message('你点击了取消')
            }
        },
    })
}
```