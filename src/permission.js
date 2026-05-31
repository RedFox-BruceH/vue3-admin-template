import router from "@/router";
import { getToken } from "@/utils/webStorage";
import NProgress from "nprogress";
import { useUserStore } from "@/pinia/modules/user";

// 白名单
const whiteList = ["/login"];

// 是否已经加载路由
let routerIsLoaded = false;

// 是否加载本地路由
const isLocal = import.meta.env.VITE_ROUTER_LOCAL === "true";

// 加载路由
export const loadRoutes = async () => {
    // 获取用户信息
    const userStore = useUserStore();
    await userStore.getUserInfo();
    routerIsLoaded = true;
}

// 路由守卫
router.beforeEach(async (to, from, next) => {

    // 开启进度条
    NProgress.start();

    // 设置页面标题
    if (to.meta.title) document.title = to.meta.title;

    // 跳转到登录login页面，重新加载路由
    if (to.path === "/login") routerIsLoaded = false;

    // 白名单以内直接跳转进入
    if (whiteList.includes(to.path)) {
        next();
        return;
    }

    // 判断是否需要登录
    if (getToken()) {
        // 判断是否已经加载路由
        if (routerIsLoaded) {
            if(to.matched.length) {
                next();
            } else {
                next("404");
            }
        } else {
            // 路由未加载则等待路由加载后，进行下一步
            await loadRoutes();
            next({ ...to, replace: true });
        }
    } else {
        // 未登录则跳转到登录页面
        next();
    }
});

router.afterEach(() => {
    // 关闭进度条
    NProgress.done();
});