<template>
    <div>
        <!--        头部导航-->
        <product-info-nav-bar></product-info-nav-bar>
        <div id="wrap" ref="wrap">
            <div class="content">
                <!--        轮播-->
                <product-info-swiper @swiperLoadEnd="swiperLoadEnd" :bannerList="bannerList"></product-info-swiper>
                <!--        商品数据-->
                <product-message :productInfo="productInfo"></product-message>
                <!--        店铺-->
                <product-shop :productShop="productShop"></product-shop>
                <!--        商品展示-->
                <product-show @showLoadEnd="showLoadEnd" :productShow="productShow"></product-show>
                <!--        商品参数-->
                <product-params :productParams="productParams"></product-params>
            </div>
        </div>
        <!--                底部 -->
        <product-bottom-bar @addCart="addCart"></product-bottom-bar>
    </div>
</template>

<script>
    import scroll from 'better-scroll'
    import ProductInfoNavBar from "./child/ProductInfoNavBar";
    import ProductInfoSwiper from "./child/ProductInfoSwiper";
    import ProductMessage from "./child/ProductMessage";
    import ProductShop from "./child/ProductShop";
    import ProductShow from "./child/ProductShow";
    import ProductParams from "./child/ProductParams";
    import ProductBottomBar from "./child/ProductBottomBar";

    export default {
        name: "ProductInfo",
        components: {
            ProductInfoNavBar,
            ProductInfoSwiper,
            ProductMessage,
            ProductShop,
            ProductShow,
            ProductParams,
            ProductBottomBar
        },
        data() {
            return {
                bscroll: null,
                productId: null,//商品id
                bannerList: null,//轮播图
                //商品信息
                productInfo: {
                    title: null,
                    price: null,
                    oldPrice: null,
                    discountDesc: null,
                    columns: null,
                    services: null,
                    lowNowPrice:null,
                    desc:null
                },
                //店铺信息
                productShop: {
                    shopLogo: null,
                    shopName: null,
                    cSells: null,
                    cGoods: null,
                    score: null,
                    shopUrl: null,
                },
                //商品展示
                productShow: [],
                //尺寸参数
                productParams: {
                    info: null,
                    rele: null
                }
            }
        },
        created() {
            this.productId = this.$route.query.iid;
            this.getProductInfoData()
        },
        methods: {
            //加入购物车
            addCart(){
                this.$toast('加入购物车成功')
                let obj= {
                    iid:this.productId,
                    img:this.bannerList[0],
                    title:this.productInfo.title,
                    price:this.productInfo.lowNowPrice,
                    desc:this.productInfo.desc,
                    checked:true,
                    count:1
                }
                this.$store.commit('addCartData',obj)
            },
            swiperLoadEnd() {
                this.bscroll.refresh()
            },
            showLoadEnd() {
                this.bscroll.refresh()
            },
            getProductInfoData() {
                //请求数据
                this.request({
                    url: this.url.ProductInfoData,
                    method: 'get',
                    params: {
                        iid: this.productId
                    }
                }).then(res => {
                    console.log(res);
                    //保存请求数据
                    this.bannerList = res.result.itemInfo.topImages;//轮播图
                    this.productInfo.title = res.result.itemInfo.title;//商品标题
                    this.productInfo.price = res.result.itemInfo.price;//商品价格
                    this.productInfo.oldPrice = res.result.itemInfo.oldPrice;//商品价格(旧)
                    this.productInfo.discountDesc = res.result.itemInfo.discountDesc;//商品折扣
                    this.productInfo.columns = res.result.columns;//销量收藏
                    this.productInfo.services = res.result.shopInfo.services;//服务
                    this.productInfo.lowNowPrice = res.result.itemInfo.lowNowPrice;//价格 -- 购物车
                    this.productInfo.desc = res.result.itemInfo.desc;//商品描述 -- 购物车

                    //店铺信息
                    this.productShop.shopLogo = res.result.shopInfo.shopLogo;//店铺Logo
                    this.productShop.shopName = res.result.shopInfo.name;//店铺名称
                    this.productShop.cSells = res.result.shopInfo.cSells;//销量
                    this.productShop.cGoods = res.result.shopInfo.cGoods;//全部宝贝
                    this.productShop.score = res.result.shopInfo.score;//评分
                    this.productShop.shopUrl = res.result.shopInfo.shopUrl;//店铺链接


                    //商品展示
                    this.productShow = res.result.detailInfo.detailImage[0].list;//图片展示
                    //参数
                    this.productParams.info = res.result.itemParams.info.set;//图片展示
                    this.productParams.rele = res.result.itemParams.rule.tables[0];//图片展示

                })
            }
        },
        mounted() {
            this.bscroll = new scroll(this.$refs.wrap, {})
        }
    }
</script>

<style scoped>
    #wrap {
        height: calc(100vh - 44px - 58px);
        margin-top: 44px;
        overflow: hidden;
    }
</style>