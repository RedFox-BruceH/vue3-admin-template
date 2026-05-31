# Vue3 Admin Template

基于 Vue 3 + Vite + Element Plus 的后台管理系统基础模板，开箱即用，适合快速搭建中后台项目。

## 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 框架 | Vue 3 | ^3.5 |
| 构建工具 | Vite | ^8.0 |
| 路由 | Vue Router | ^4.4 |
| 状态管理 | Pinia | ^2.2 |
| UI 组件库 | Element Plus | ^2.8 |
| 图标 | @element-plus/icons-vue | ^2.3 |
| HTTP 请求 | Axios | ^1.7 |
| 图表 | ECharts | ^5.5 |
| 日期处理 | Day.js | ^1.11 |
| CSS 预处理 | Sass | ^1.77 |
| 代码规范 | ESLint + Prettier | - |
| Mock 数据 | vite-plugin-fake-server + @faker-js/faker | - |

## 功能特性

- **路由权限控制** — 基于路由守卫的权限管理，支持本地/远程路由模式切换
- **动态路由加载** — 登录后按需加载路由，支持白名单机制
- **Axios 封装** — 统一请求/响应拦截，自动携带 Token，支持表单提交与文件下载
- **Pinia 状态管理** — 模块化 Store 设计（user / app / role / tag）
- **Element Plus 按需导入** — 结合 `unplugin-auto-import` 与 `unplugin-vue-components` 自动按需引入
- **Vue API 自动导入** — `vue`、`vue-router`、`pinia` 等模块 API 无需手动 import
- **NProgress 进度条** — 路由切换时顶部进度条提示
- **Mock 数据支持** — 基于 `vite-plugin-fake-server` 的本地 Mock 方案
- **环境变量配置** — `.env.development` / `.env.production` 多环境配置

## 项目结构

```
vue3-admin-template/
├── public/                  # 静态资源
├── src/
│   ├── api/                 # 接口请求模块
│   ├── assets/              # 静态资源（图片、SVG）
│   ├── components/          # 公共组件
│   │   └── HelloWorld.vue
│   ├── pinia/               # 状态管理
│   │   ├── index.js         # Pinia 实例
│   │   └── modules/         # Store 模块
│   │       ├── user.js      # 用户状态（Token、用户信息、路由、按钮权限）
│   │       ├── app.js       # 应用全局状态
│   │       ├── role.js      # 角色权限状态
│   │       └── tag.js       # 标签页状态
│   ├── plugins/             # 插件注册（Element Plus 图标、全局组件自动注册）
│   ├── router/              # 路由配置
│   │   └── index.js
│   ├── utils/               # 工具函数
│   │   ├── helper.js        # 辅助函数（环境判断）
│   │   ├── request.js       # Axios 封装
│   │   └── webStorage.js    # 本地存储封装（Token、用户信息）
│   ├── App.vue              # 根组件
│   ├── main.js              # 入口文件
│   ├── permission.js        # 路由权限守卫
│   └── style.css            # 全局样式
├── .env.development         # 开发环境变量
├── .env.production          # 生产环境变量
├── .eslintrc.js             # ESLint 配置
├── index.html               # HTML 入口
├── jsconfig.json            # JS 配置
├── package.json             # 项目依赖
└── vite.config.js           # Vite 构建配置
```

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 环境变量说明

| 变量名 | 说明 | 开发环境 | 生产环境 |
|--------|------|----------|----------|
| `VITE_API_BASEURL` | 接口基础地址 | `https://api.example.com` | `https://api.example.com` |
| `VITE_API_ISLOCAL` | 是否使用本地路由权限 | `true` | `false` |

## 核心模块说明

### 路由权限（permission.js）

- 白名单机制：`/login` 等页面无需认证即可访问
- 登录检测：通过 Token 判断登录状态，未登录跳转登录页
- 动态路由：首次登录后加载用户路由权限，后续访问直接使用缓存
- 页面标题：根据路由 `meta.title` 自动设置 document title

### 请求封装（request.js）

- 统一 baseURL 与超时配置（6s）
- 请求拦截：自动携带 `Authorization` Token
- 支持表单提交（`contentType: 'form'` 时自动 `qs.stringify`）
- 支持文件流下载（`responseType: 'blob'`）

### 本地存储（webStorage.js）

- `getToken()` / `setToken()` — Token 管理
- `getUserInfo()` / `setUserInfo()` — 用户信息管理
- `clearStorage()` — 清除所有本地存储
- 开发环境下 Token 自动返回默认值

### 插件系统（plugins/index.js）

- 全局注册 Element Plus 所有图标组件
- 自动扫描 `@components/*/index.js` 注册全局组件

## 代码规范

项目采用 Standard 规范 + Prettier 格式化，已禁用以下规则：

- `vue/multi-word-component-names` — 允许单词命名组件
- `vue/no-useless-template-attributes` — 关闭无用模板属性检查

## License

Private
