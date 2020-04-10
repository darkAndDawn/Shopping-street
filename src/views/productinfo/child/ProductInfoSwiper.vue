<template>
    <div>
        <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
            <swiper-slide v-for="(item,index) in bannerList" :key="index">
               <img :src="item" alt="" @load="swiperLoad">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "ProductInfoSwiper",
        props: {
            bannerList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components: {
            Swiper, SwiperSlide
        },
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true,
                    autoplay: {
                        delay: 2000
                    }
                }
            }
        },
        methods:{
            swiperLoad(){
                this.$emit("swiperLoadEnd")
            }
        }
    }
</script>

<style scoped>
    .swiper{
        width: 100vw;
        height: 300px;
        margin-top: 44px;
    }
    .swiper img {
        width: 100%;
    }

    .swiper-container {
        --swiper-theme-color: white;
    }
</style>