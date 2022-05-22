import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

// 创建并导出store对象,包裹前面的对象
export default new Vuex.Store({
    modules: {
        user
    }
})
