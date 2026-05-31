import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/login',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/welcome',
                name: 'Welcome',
                component: () => import('@/views/welcome/index.vue')
            },
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/404/index.vue')
            },
            {
                path: 'redirect/:pathMatch(.*)',
                name: 'Redirect',
                component: () => import('@/views/redirect/index.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;