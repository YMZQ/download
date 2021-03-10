/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/',
        component: () => import('@/views/layouts/index'),
        redirect: '/download',
        meta: {
            title: '首页',
            keepAlive: false
        },
        children: [
          {
            path: '/register',
            name: 'register',
            component: () => import('@/views/user/register'),
            meta: {title: '', keepAlive: false},
          },
            {
                path: '/register:inviteCode',
                name: 'register',
                component: () => import('@/views/user/register'),
                meta: {title: '', keepAlive: false},
                props: {default: true, sidebar: false}
            },
            {
                path: '/download',
                name: 'download',
                component: () => import('@/views/user/download'),
                meta: {title: '', keepAlive: false}
            },
            {
                path: '/activity',
                name: 'activity',
                component: () => import('@/views/user/activity'),
                meta: {title: '', keepAlive: false}
            },
            {
                path: '*',
                name: '404',
                component: () => import('@/views/user/download'),
            }
        ]
    }
]
