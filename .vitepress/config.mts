import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'GmAlert官方文档',
  description: 'GmAlert是一个简而不凡的原生js弹出层组件',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    // ['script', {src:'/js/gmalert-bundle.min.js'}],
    ['link', { rel: 'stylesheet', href: '/gmalert.min.css' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '快速入门',
        link: '/guide/getting-started',
        activeMatch: '/guide/',
      },
    ],

    sidebar: [
      {
        text: '介绍',
        base: '/guide/',
        items: [
          { text: '为什么选择我们', link: 'why-gmalert' },
          { text: '快速入门', link: 'getting-started' },
        ],
      },
      {
        text: '进阶',
        base: '/guide/',
        items: [
          { text: 'api详解', link: 'api' },
          { text: '样式个性化', link: 'custom' },
          { text: '在alert中使用html', link: 'alert-html' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GmeroAlert/GmAlert' },
    ],
  },
})
