<template>
    <div>
        <!--        头部导航-->
        <home-nav-bar></home-nav-bar>
        <!--        底部导航-->
        <tab-bar-main></tab-bar-main>
        <!--        tab切换-->
        <home-tab-control class="tab_control" :tabData="['流行','新款','精选']" @tabClick="tabClick" v-show="isTabTop"></home-tab-control>
        <div id="wrap">
            <div class="content">
                <!--        轮播图-->
                <home-swiper @swiperLoad="swiperLoad" :bannerList="bannerList"></home-swiper>
                <!--        推荐-->
                <home-recommend :recommendList="recommendList"></home-recommend>
                <!--        流行-->
                <home-pop></home-pop>
                <!--        tab切换-->
                <home-tab-control ref="control" :tabData="['流行','新款','精选']" @tabClick="tabClick"></home-tab-control>
                <!--        商品列表-->
                <home-message-show :showList="goods[clickType].list" :bscroll="bscroll"></home-message-show>
            </div>
        </div>
        <!--        回到顶部-->
        <go-top @click.native="goTop" v-show="isTopShow"></go-top>

    </div>
</template>

<script>
    import HomeNavBar from "./child/HomeNavBar";
    import TabBarMain from "../../components/tabBarMain/TabBarMain";
    import HomeSwiper from "./child/HomeSwiper";
    import HomeRecommend from "./child/HomeRecommend";
    import HomePop from "./child/HomePop";
    import HomeTabControl from "./child/HomeTabControl";
    import HomeMessageShow from "./child/HomeMessageShow";
    import GoTop from "./child/GoTop";
    import Scroll from 'better-scroll'

    export default {
        name: "Home",
        components: {
            HomeNavBar,
            TabBarMain,
            HomeSwiper,
            HomeRecommend,
            HomePop,
            HomeTabControl,
            HomeMessageShow,
            GoTop
        },
        data() {
            return {
                isTabTop:false,
                tabDistTop:0,
                isTopShow: false,
                bscroll: null,
                bannerList: [],//轮播图数据
                recommendList: [],//推荐的数据
                goods: {
                    pop: {page: 1, list: []},
                    new: {page: 1, list: []},
                    sell: {page: 1, list: []},
                },
                clickType: 'pop'
            }
        },
        created() {
            this.getBannerAndRecommend()
            this.getGoodsData('pop')
            this.getGoodsData('new')
            this.getGoodsData('sell')

        },
        mounted() {
            this.bscroll = new Scroll('#wrap', {
                click: true,
                pullUpLoad: true
            })
            this.bscroll.on('pullingUp', () => {
                this.getGoodsData(this.clickType)
            })
            this.bscroll.on('scroll', o => {
                this.isTopShow = -o.y > 1500
                this.isTabTop = -o.y >= this.tabDistTop - 44
            })
        },
        methods: {
            //轮播图加载完成
            swiperLoad(){
                this.tabDistTop = this.$refs.control.$el.offsetTop
            },
            //回到顶部
            goTop() {
                this.bscroll.scrollTo(0, 0, 400)
            },
            //切换
            tabClick(val) {
                switch (val) {
                    case 0:
                        this.clickType = 'pop'
                        break
                    case 1:
                        this.clickType = 'new'
                        break
                    case 2:
                        this.clickType = 'sell'
                        break
                }
            },
            //获取轮播图和推荐数据
            getBannerAndRecommend() {
                this.request({
                    url: this.url.multidata
                }).then(res => {
                    this.bannerList = res.data.banner.list
                    this.recommendList = res.data.recommend.list
                })
            },
            //获取商品展示的数据
            getGoodsData(type) {
                let page = ++this.goods[type].page
                this.request({
                    url: this.url.goodsData,
                    method: 'get',
                    params: {
                        type: type,
                        page: page
                    }
                }).then(res => {

                    let data = res.data.list
                    data.forEach(item => {
                        this.goods[type].list.push(item)
                    })
                    this.bscroll.finishPullUp()
                })
            }
        }
    }
</script>

<style scoped>
    #wrap {
        height: calc(100vh - 94px);
        overflow: hidden;
        margin-top: 44px;
    }
    .tab_control{
        position: fixed;
        background: white;
        z-index: 999;
    }
</style>
