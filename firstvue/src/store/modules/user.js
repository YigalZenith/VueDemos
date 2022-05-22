const user = {
    // state对象,用于保存所有组件的公共数据(类似数据库)
    // 判断sessionStorage是否保存了state,有的话反解成对象后使用,否则使用新创建的对象
    state : sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
        inneruser: {
            name: ''
        }
    },
    
    // 监听state对象的值的最新状态(计算属性)
    getters : {
        getUser(state){
            return state.inneruser
        }
    },
    
    // 唯一一个可以修改state值的方法(同步执行)
    mutations : {
        updateUser(state,newobj){
            state.inneruser = newobj
        }
    },
    
    // 异步修改数据
    actions : {
        asynUpdateUser(context,newobj){
            context.commit('updateUser',newobj)
        }
    }
}

export default user