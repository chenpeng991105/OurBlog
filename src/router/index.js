import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/Index/index'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/article',
        component: () => import(/* webpackChunkName: "article" */ '@/views/Article/index'),
        meta: {
            title: '文章'
        }
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/Login/index'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/user',
        component: () => import(/* webpackChunkName: "user" */ '@/views/User/index'),
        meta: {
            title: '个人页'
        }
    },
    {
        path: '/new',
        component: () => import(/* webpackChunkName: "user" */ '@/views/New/index'),
        meta: {
            title: '新建文章'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    /*路由发生变化修改页面title*/
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
export default router
