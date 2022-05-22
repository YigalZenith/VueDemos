    <template>
        <div id="app">
            <router-view></router-view>
        </div>
    </template>

    <script>
    export default {
        name: 'App',
        mounted(){
            // 监听到页面刷新后, 把state对象的值保存起来
            window.addEventListener('unload',this.saveState)
        },
        methods: {
            saveState(){
                // console.log(JSON.stringify(this.$store.state))
                sessionStorage.setItem('state',JSON.stringify(this.$store.state.user))
            }
        }
    }
    </script>

    <style>

    </style>
