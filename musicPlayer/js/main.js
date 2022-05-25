/*
    1:歌曲搜索接口
        请求地址:https://autumnfish.cn/search
        请求方法:get
        请求参数:keywords(查询关键字)
        响应内容:歌曲搜索结果

    2:歌曲url获取接口【已废弃】
        请求地址:https://autumnfish.cn/song/url
        请求方法:get
        请求参数:id(歌曲id)
        响应内容:歌曲url地址

        新方法: 此方法不用ajax请求,根据id直接拼接成字符串即可
            this.musicUrl="http://music.163.com/song/media/outer/url?id="+musicId+".mp3"

    3.歌曲详情获取【已废弃】
        请求地址:https://autumnfish.cn/song/detail
        请求方法:get
        请求参数:ids(歌曲id)
        响应内容:歌曲详情(包括封面信息)

        新接口
            获取专辑内容
            请求地址:https://autumnfish.cn/album
            请求方法:get
            必选参数: id: 专辑 id
            响应内容: 传入专辑id,可获得专辑内容,专辑id可以通过搜索接口的返回结果获取

    4.热门评论获取
        请求地址:https://autumnfish.cn/comment/hot?type=0
        请求方法:get
        请求参数:id(歌曲id,地址中的type固定为0)
        响应内容:歌曲的热门评论

    5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/

var app = new Vue({
    el: "#player",
    data: {
        // 搜索关键字
        query: "",
        // 歌曲数组
        musicList: [],
        // 歌曲地址
        musicUrl: "",
        // 专辑封面
        albumCover: "",
        // 歌曲评论
        hotComments: [],
        // 播放按钮状态
        isPlaying: false,
        // MV地址
        mvUrl: "",
        // 是否显示MV
        showMV: false,
        // 跟去封面
        coverUrl: ""
    },
    methods: {
        // 歌曲搜索
        searchMusic() {
            var that = this
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
                function (response) {
                    // console.log(response)
                    that.musicList = response.data.result.songs
                },
                function (error) { }
            )
        },
        // 歌曲播放
        playMusic(musicId, albumId) {
            console.log(musicId, albumId)
            var that = this

            // 拼接歌曲地址
            this.musicUrl = "http://music.163.com/song/media/outer/url?id=" + musicId + ".mp3"

            // 专辑封面图片获取
            axios.get("https://autumnfish.cn/album?id=" + albumId).then(
                function (response) {
                    // console.log(response.data.album.picUrl)
                    that.albumCover = response.data.album.picUrl + "?param=210y210"
                },
                function (err) { }
            )

            // 歌曲评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
                function (response) {
                    // console.log(response)
                    that.hotComments = response.data.hotComments
                },
                function (error) { }
            )

        },
        // 播放
        play() {
            this.isPlaying = true
        },
        // 暂停
        pause() {
            this.isPlaying = false
        },
        // 播放MV
        playMV(mvId) {
            // console.log(mvId)
            this.showMV = true
            var that = this
            axios.get("https://autumnfish.cn/mv/url?id=" + mvId).then(
                function (response) {
                    // console.log(response.data.data.url)
                    that.mvUrl = response.data.data.url
                },
                function (error) { }
            )

        },
        // 关闭MV
        closeMV() {
            var myVideo = document.getElementById("myVideo");
            myVideo.pause()
            this.showMV = false
        }
    }
})
