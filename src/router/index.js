import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: '',
        redirect: '/home'
    },
    // 主页
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    // 分类
    {
        path: '/classify',
        name: 'Classify',
        component: () =>
            import ('../views/Classify.vue')
    },
    // 时光轴
    {
        path: '/timeline',
        name: 'Timeline',
        component: () =>
            import ('../views/Timeline.vue')
    },
    // 留言板
    {
        path: '/message',
        name: 'Message',
        component: () =>
            import ('../views/Message.vue')
    },
    // 友链
    {
        path: '/link',
        name: 'Link',
        component: () =>
            import ('../views/Link.vue')
    },
    // 赞赏
    {
        path: '/reward',
        name: 'Reward',
        component: () =>
            import ('../views/Reward.vue')
    },
    // 更多
    {
        path: '/more',
        name: 'More',
        component: () =>
            import ('../views/More.vue')
    },
    // 登陆
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router