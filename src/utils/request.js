import axios from "axios";

import { getToken } from "@utils/webStorage";

import qs from "qs";

const server = axios.create({
    baseURL: '/api',
    // 是否携带cookie
    withCredentials: true,
    timeout: 6000,
});

// 字节流下载flag
let isBlob = false;

// 请求拦截器
server.interceptors.request.use(
    config => {
        // 根据请求头判断是否是字节流
        isBlob = config.responseType === "blob";

        // 处理头部信息，添加token
        config.headers["Authorization"] = getToken();

        // 请求为表单
        if (config.contentType === "form") {
            config.headers["Content-Type"] = "application/x-www-form-urlencoded"
            config.data = qs.stringify(config.data);
        }
    },
)