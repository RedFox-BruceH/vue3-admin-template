import { isLocal } from './helper';

export const getToken = () => {
    if (isLocal()) {
        return 'token';
    } else {
        // 生产环境获取token/cookie的方式
        const token = localStorage.getItem('token');
        return token;
    }
}

export const setToken = val => {
    localStorage.setItem('token', val);
}

export const getUserInfo = () => { 
    const userInfo = localStorage.getItem('userInfo') ?? '{}';
    return JSON.parse(userInfo);
}

export const setUserInfo = val => {
    localStorage.setItem('userInfo', JSON.stringify(val));
}

export const clearStorage = () => {
    localStorage.clear();
}