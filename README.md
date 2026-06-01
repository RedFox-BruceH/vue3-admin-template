# vite-vue-admin

基于 **Vue 3 + Vite 5 + Element Plus + Pinia** 构建的通用后台管理系统模板。

---

## 技术栈

| 技术                    | 版本     | 说明                     |
| ----------------------- | -------- | ------------------------ |
| **Vue**                 | 3.4.x    | 前端框架，Composition API + `<script setup>` |
| **Vite**                | 5.x      | 构建工具                  |
| **Element Plus**        | 2.8.x    | UI 组件库                 |
| **Pinia**               | 2.2.x    | 状态管理                  |
| **Vue Router**          | 4.4.x    | 路由管理                  |
| **Axios**               | 1.7.x    | HTTP 客户端               |
| **ECharts**             | 5.5.x    | 数据可视化（按需引入）     |
| **Sass**                | -        | CSS 预处理器              |
| **ESLint + Prettier**   | -        | 代码规范与格式化          |
| **Husky**               | 9.x      | Git hooks                |
| **dayjs**               | 1.11.x   | 日期处理                  |
| **nprogress**           | 0.2.x    | 页面加载进度条            |

### 自动化工具

- **[unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)** — 自动导入 Vue / Vue Router / Pinia API，无需手动 `import`
- **[unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)** — Element Plus 组件按需自动导入，无需全局注册
- **[vite-plugin-fake-server](https://github.com/condorheroblog/vite-plugin-fake-server)** — 内置 Mock 服务，开发无需后端

---

## 功能特性

- **用户认证** — 登录 / 退出 / Token 管理
- **权限控制** — 动态路由加载 + 按钮级权限
- **多标签页** — 页面标签缓存 (keep-alive)、右键菜单操作、刷新/关闭
- **侧边栏** — 可折叠，根据路由自动生成多级菜单
- **数据看板** — ECharts 图表（饼图、柱状图、折线图 + 自定义主题）
- **系统管理** — 用户管理、角色管理、权限管理（静态示例页面）
- **Mock 数据** — `@faker-js/faker` 生成随机测试数据
- **404 页面** — 路由匹配失败时的兜底页面
- **Element Plus 主题** — SCSS 变量覆盖，自定义主色

---

## 快速开始

```bash
# 1. 克隆项目
git clone <repo-url>

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 预览生产构建
npm run build
npm run preview
```

### 默认账号

| 用户名 | 密码   |
| ------ | ------ |
| admin  | 123456 |

---

## 目录结构

```
vue3-admin-template/
├── index.html                    # HTML 入口
├── vite.config.js                # Vite 配置文件
├── package.json                  # 依赖与脚本
├── .env.development              # 开发环境变量
├── .env.production               # 生产环境变量
├── .eslintrc.cjs                 # ESLint 配置
├── .eslintrc-auto-import.json    # 自动导入全局变量声明（自动生成）
├── .prettierrc.json              # Prettier 配置
├── jsconfig.json                 # 路径别名映射
├── mock/                         # Mock 服务
│   ├── index.fake.js             # Mock 入口
│   ├── user.js                   # 用户相关 Mock API
│   └── dashboard.js              # 看板 Mock API
├── src/
│   ├── main.js                   # 应用入口
│   ├── App.vue                   # 根组件
│   ├── permission.js             # 路由守卫 / 权限控制
│   ├── api/                      # API 接口层
│   │   ├── user.js               # 登录、退出、获取用户信息
│   │   ├── dashboard.js          # 看板数据接口
│   │   └── urls.js               # URL 常量
│   ├── assets/                   # 静态资源
│   │   ├── font/                 # 自定义图标字体
│   │   └── images/               # 图片资源
│   ├── components/               # 公共组件
│   │   ├── FtCard/               # 卡片容器组件
│   │   └── FtIcon/               # 图标组件（Element Plus Icons + iconfont）
│   ├── echarts/                  # ECharts 封装
│   │   ├── index.js              # 按需引入 + 注册自定义主题
│   │   ├── hooks.js              # useEchartHooks Composable
│   │   ├── color.js              # 渐变色工具
│   │   ├── legend.js             # 图例配置
│   │   ├── conponents/           # 自定义图表装饰组件
│   │   └── theme/                # ECharts 主题 JSON
│   ├── layout/                   # 布局组件
│   │   ├── Index.vue             # 主布局容器
│   │   ├── AppHeader/            # 顶部导航栏
│   │   ├── AppSider/             # 侧边栏（含递归菜单组件）
│   │   ├── AppMain/              # 主内容区（keep-alive + 过渡动画）
│   │   └── AppTag/               # 多标签页导航
│   ├── pinia/                    # 状态管理
│   │   ├── index.js              # Pinia 实例
│   │   └── modules/
│   │       ├── app.js            # 应用状态（侧边栏折叠）
│   │       ├── user.js           # 用户状态（token / 用户信息 / 动态路由）
│   │       └── tag.js            # 标签页状态（标签列表 / 缓存）
│   ├── plugins/
│   │   └── index.js              # 全局插件注册（Element Plus Icons）
│   ├── router/
│   │   ├── index.js              # 路由实例
│   │   └── router.config.js      # 动态路由配置（看板、系统管理）
│   ├── style/                    # 全局样式
│   │   ├── index.scss            # 样式入口（reset + 滚动条 + iconfont）
│   │   └── globalvar.scss        # SCSS 变量 + Element Plus 主题覆盖
│   ├── utils/                    # 工具函数
│   │   ├── request.js            # Axios 封装（拦截器/Token/错误处理）
│   │   ├── dealData.js           # 树数据处理工具
│   │   ├── helper.js             # 辅助函数
│   │   └── webStorage.js         # localStorage 封装
│   └── views/                    # 页面视图
│       ├── Dashboard/            # 首页看板
│       ├── Login/                # 登录页
│       ├── Welcome/              # 欢迎页
│       ├── Redirect/             # 重定向页（用于页面刷新）
│       ├── System/               # 系统管理
│       │   ├── Auth/             # 权限管理
│       │   ├── Role/             # 角色管理
│       │   └── User/             # 用户管理
│       └── Error/                # 404 页面
└── .husky/                       # Git hooks（pre-commit → npm test）
```

---

## 环境变量

| 变量名               | 说明                | 开发环境  | 生产环境  |
| -------------------- | ------------------- | --------- | --------- |
| `VITE_API_BASEURL`   | API 基础地址         | 自定义    | 自定义    |
| `VITE_API_ISLOCAL`   | 是否使用本地路由权限  | `true`    | `false`   |

`VITE_API_ISLOCAL=true` 时直接从 `router.config.js` 加载动态路由，适合本地开发调试。

---

## 开发指南

### 新增页面

1. 在 `src/views/` 下创建页面组件
2. 在 `src/router/router.config.js` 的 `innerRoutes` 中添加路由配置（`path`、`name`、`meta.title`、`component` 等）
3. 如需 API 接口，在 `src/api/` 中添加对应文件
4. 如需 Mock 数据，在 `mock/` 中添加对应文件并在 `mock/index.fake.js` 中引入

### 图标使用

项目使用 `FtIcon` 组件统一管理图标，支持：

- **Element Plus Icons**: `PrefixIcon="el-icon-name"`
- **自定义 iconfont**: `PrefixIcon="iconfont icon-name"`

### ECharts 图表

使用 `useEchartHooks` Composable 管理图表生命周期：

```js
import { useEchartHooks } from '@/echarts/hooks'
const { domRef, chartInstance, chartResize } = useEchartHooks()
// 在模板中绑定 ref 即可自动初始化/销毁
```

---

## 后端对接

当需要对接真实后端时：

1. 修改 `.env.production` 中的 `VITE_API_BASEURL` 为后端地址
2. 将 `VITE_API_ISLOCAL` 设为 `false`
3. 在 `src/pinia/modules/user.js` 中按需实现从后端获取路由的逻辑
4. 移除或禁用 `vite-plugin-fake-server`

---

## 脚本命令

| 命令             | 说明                     |
| ---------------- | ------------------------ |
| `npm run dev`    | 启动开发服务器            |
| `npm run build`  | 生产环境构建              |
| `npm run preview`| 预览生产构建              |
| `npm run test`   | ESLint 检查 + 自动修复    |
| `npm run prepare`| Husky 初始化             |

---

## License

MIT
