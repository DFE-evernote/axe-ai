# axe-ai AI 原子组件库

基于Tailwind CSS构建的AI交互组件库，智能化的 LEGO 积木。 基于 AI 驱动的原子化设计系统，提供高度可组合的底层 UI 元件。通过机器学习优化交互反馈，让每一个按钮、输入框和图标都具备“感知”能力，助力开发者以最小成本构建次世代 Web 应用。

## 特性

* AI优先
专为AI应用场景设计的组烊，支持流式输出、打字机效果等特性
* Tailwindcss
基于TailwindCSS构建，高度可定制，支持暗色模式
* TypeScript
完整的TypeScript类型定义，提供优秀的开发体验
* 轻量高效
Tree-shaking友好，按需引入，最小化打包体积

## 目录结构

```bash
.
├── dist/                    # 编译输出目录
├── packages/             # 【核心资产区】
│   ├── ui/                  # 基于 Tailwind 的 AI 原子组件库
│   ├── ts-configs/          # 统一 TypeScript 配置
│   └── utils/               # 共享工具函数（可被 AIAgent 调用的工
├── websites/             # 【应用消费区】
│   ├── docs/                # 基于 Rspress 的组件文档 &＆ 演练场
├── .husky/                  # Git Hooks 脚本
├── .vscode/                 # 编辑器配置
├── .npmrc/                  # npm 镜像与提升配置
├── pnpm-workspace.yaml/     # Workspace 拓扑定义
└── package.json             # 根依赖管理
```

## 说明

1、在 packages/ui 场景下，推荐采用 Shared Config + Presets 模式，确保宿主应用与组件库样式统一。  
2、使用更松散、更灵活、更原子化的架构，实现AI友好型组件库  
3、tsup、tailwind、postcss等工具链均采用pnpm工作空间模式管理

```bash
packages/
├── config/
│   └── tailwind-config/   # 共享配置包
│       └── base.js        # 基础预设 (Presets)
├── ui/
│   ├── src/components/    # 业务组件
│   └── tailwind.config.js # 继承 base.js 并扩展组件库特有配置
└── apps/web/              # 宿主应用
```

## ui 组件库 与 rspress站点文档

1、导入tailwind依赖并把style样式拆离开，样式单独构建到一个单独的css文件里，以备后续组件独立引用。基于tailwind和postcss做单独的打包构建处理，增加样式build:css构建命令  
2、使用peerDependencies对等依赖约束当前仓库或工具里依赖的库  
3、开发期间，组件库调试使用基于 [Rspress](https://rspress.rs/zh/) 文档库构建 

# TODO:
* [ ] mcp服务搭建
