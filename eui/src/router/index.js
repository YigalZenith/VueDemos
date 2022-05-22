import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装使用路由
Vue.use(VueRouter)

// 通过new VueRouter()创建一个对象,并导出
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/main',
            name: 'Main',
            component: () => import('../views/Main.vue')
        }
    ]
})