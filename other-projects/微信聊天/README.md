# 仿微信聊天 H5

使用 **Vue 2** 实现的仿微信聊天界面 H5 应用，纯前端实现，零构建工具。

> 推荐使用 Chrome 移动端模式浏览：F12 → 切换设备工具栏 → iPhone 12 Pro

## 功能

- 联系人列表（搜索过滤）
- 进入/退出聊天详情
- 发送消息 + 模拟自动回复
- 消息气泡（左右对齐、微信绿）
- 未读消息红点角标
- 时间标签显示
- 消息自动滚动到底部
- 底部导航栏（微信/通讯录/发现/我）
- localStorage 数据持久化

## 技术栈

| 层 | 技术 |
|------|------|
| 框架 | Vue 2.7 |
| 样式 | 微信风格 CSS |
| 数据 | 本地模拟 + localStorage |
| 动画 | CSS transition |

## 项目结构

```
微信聊天/
├── index.html    # 主页面（单文件，含 HTML/CSS/JS）
├── vue.js        # Vue 2.7 框架
└── README.md     # 项目说明
```

## 本地运行

直接双击 `index.html` 用浏览器打开即可，无需安装任何依赖。

---

Made for learning Vue 2 & mobile H5 development
