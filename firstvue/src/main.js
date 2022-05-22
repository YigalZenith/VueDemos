import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入 elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入 axios 【新方法】
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 引入 axios 【老方法】
// import axios from 'axios'
// Vue.prototype.aaa = axios
axios.defaults.baseURL = 'https://autumnfish.cn';

Vue.config.productionTip = false

// 所有路由跳转之前的钩子函数
router.beforeEach((to,from,next) => {
  // 获取session,并存储到变量中
  let isLogin = sessionStorage.getItem('isLogin')

  if (to.path == '/logout') {
    // 注销时清空session
    sessionStorage.clear()
    next({path: '/login'})
  } else if (to.path == '/login') {
    if (isLogin == 'true'){
      next({path: '/main'})
    }
  }
  else {
    if (isLogin != 'true') {
      next({path:'/login'})
    }
  }

  next()
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
