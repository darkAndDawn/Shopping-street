<template>
    <div>
        <h1>首页</h1>
        <home-nav-bar></home-nav-bar>
        <home-swiper :bannerList="bannerList"></home-swiper>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-pop></home-pop>
    </div>
</template>

<script>
    import HomeNavBar from "./child/HomeNavBar";
    import HomeSwiper from "./child/HomeSwiper";
    import HomeRecommend from "./child/HomeRecommend";
    import HomePop from "./child/HomePop";
    export default {
        name: "Home",
        components: {
            HomeNavBar,
            HomeSwiper,
            HomeRecommend,
            HomePop
        },
        data() {
            return {
                bannerList: [],//轮播图数据
                recommendList: [],//推荐的数据
            }
        },
        created() {
            this.request({
                url: this.url.multidata
            }).then(res => {
                console.log(res)
                this.bannerList = res.data.banner.list
                this.recommendList = res.data.recommend.list
            })
        }
    }
</script>

<style scoped>

</style>
