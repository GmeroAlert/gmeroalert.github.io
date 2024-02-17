# 样式个性化

我们提供了一些手段来方便用户进行样式个性化，比如实现黑夜模式，修改卡片颜色等

## css 变量

我们目前提供了以下 css 变量，以下是默认设置

```css
.gmal {
  --gmal-bg: #fff;
  --gmal-text: #5a5a5a;
  --gmal-light: #d4d4d4;
  --gmal-border: 1px solid #d3d3d3;
  --gmal-shadow: rgba(0, 0, 0, 0.08);
  --gmal-shadow-v: 0 0 1px var(--gmal-shadow), 1px 2px 4px var(--gmal-shadow),
    1px 3px 8px var(--gmal-shadow);
}
```

如果你想实现黑夜模式，可以参考以下代码

```scss
[data-theme='dark'] .gmal {
  --gmal-bg: #303030;
  --gmal-text: #afafaf;
  --gmal-border: 1px solid #535353;
  --gmal-light: #535353;
  --gmal-shadow: rgb(255 255 255 / 10%);
}
```
