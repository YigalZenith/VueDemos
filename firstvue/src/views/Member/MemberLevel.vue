<template>
    <div>
        <p>会员等级 {{ xxx }}</p> 
        {{ remoteData }} 
    </div>
</template>>

<script>
// import Vue from 'vue'
export default {
    props: ['xxx'],
    data() {
        return {
            remoteData: {}
        }
    },
    name: 'MemberLevel',
    methods: {
        getdata(){
            // this.aaa.get("/album?id=25437").then(
            this.axios.get("/album?id=25437").then(
                res => {
                    // console.log(res)
                    this.remoteData = res.data.album
                }
            )
        }
    },
    beforeRouteEnter: (to,from,next) => {
        console.log("进入会员等级页面之前");
        next(vm => {
            vm.getdata()
        })
    },    
    beforeRouteLeave: (to,from,next) => {
        console.log("离开会员等级页面之前");
        next()
    }
}
</script>