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
            name: 'Main',
            path: '/main',
            component: () => import('../views/Main.vue'),
            children: [
                {
                    path: '/member/list',
                    component: () => import('../views/Member/MemberList.vue')
                },
                {
                    path: '/member/level',
                    component: () => import('../views/Member/MemberLevel.vue')
                },
                {
                    path: '/member/level/:xxx',
                    component: () => import('../views/Member/MemberLevel.vue'),
                    name: 'ML',
                    props: true
                }
            ]
        },
        {
            path: '*',
            component: () => import('../views/NotFound.vue'),
        }
    ]
})
