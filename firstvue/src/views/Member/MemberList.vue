<template>
    <div>
        <p>会员列表</p>
        {{ localData }}
    </div>

</template>>

<script>
export default {
    name: 'MemberList',
    data() {
        return {
            localData: {}
        }
    },
    methods: {
        getdata(){
            // this.aaa.get("/album?id=25437").then(
            this.axios.get("http://localhost:8081/static/mock/data.json").then(
                res => {
                    // console.log(res)
                    this.localData = res.data
                }
            )
        }
    },
    beforeRouteEnter: (to,from,next) => {
        console.log("进入会员列表页面之前");
        next(vm => {
            vm.getdata()
        })
    },   
}
</script>