# 仿抖音短视频 H5

使用 **Vue 2** 实现的仿抖音短视频滑动切换 H5 应用，纯前端实现，零构建工具。

> 推荐使用 Chrome 移动端模式浏览：F12 → 切换设备工具栏 → iPhone 12 Pro

## ✨ 功能

- 上滑/下滑切换视频（CSS transition 过渡动画）
- 点击暂停/播放（带图标动画反馈）
- 视频播放进度条
- 右侧爱心点赞 + 双击红心飘出动画
- 底部评论弹窗（支持添加评论）
- 分享面板弹窗
- Canvas 动态动画背景（视频加载失败时自动切换）
- 视频预加载（提前加载相邻视频）
- 加载状态指示器（旋转圈）
- 键盘方向键 ↑↓ 切换、空格暂停（桌面端调试）

## 🛠 技术栈

| 层 | 技术 |
|------|------|
| 框架 | Vue 2.7 |
| 视频播放 | HTML5 `<video>` API |
| 手势识别 | 原生 `touchstart` / `touchmove` / `touchend` |
| 动画 | CSS `transition` + `@keyframes` |
| Canvas | 动态渐变背景 + 浮动粒子 + 波浪线 |
| 数据 | 本地 JSON（无后端） |

## 📁 项目结构

```
仿抖音H5/
├── index.html    # 主页面（单文件，含 HTML/CSS/JS）
├── vue.js        # Vue 2.7 框架
└── README.md     # 项目说明
```

## 🚀 本地运行

直接双击 `index.html` 用浏览器打开即可，无需安装任何依赖。

## 📹 视频源

当前已配置在线视频链接。如需本地视频：

```js
// 修改 index.html 中 list 数组的 src 字段
src: 'video/my-video.mp4'
```

## 📱 手机调试

1. 电脑开启热点，手机连接同一网络
2. 用 VS Code Live Server 或 `npx http-server` 启动本地服务
3. 手机浏览器访问 `http://<电脑IP>:端口`

## 🔮 可扩展

- [ ] 无限加载更多
- [ ] 后端 API 接入
- [ ] WebSocket 实时评论
- [ ] 视频上传

---

Made for learning Vue 2 & mobile H5 development
