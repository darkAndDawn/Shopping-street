<template>
    <div class="goods">
        <div v-for="(item,index) in showList" class="item">
            <img :src="item.show.img" alt="" @load="imgLoad">
            <div class="bottom">
                <p class="title">{{item.title}}</p>
                <span class="price">￥{{item.price}}</span>
                <span class="cfav">{{item.cfav | formatCfav}}</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeMessageShow",
        props: {
            showList: {
                type: Array,
                default() {
                    return []
                }
            },
            bscroll:{
                type: Object,
                default() {
                    return {};
                }
            }
        },
        filters: {
            formatCfav(val) {
                return val > 10000 ? (val / 10000).toFixed(2) + '万' : val
            }
        },
        methods:{
            imgLoad(){
               this.bscroll.refresh()
            }
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .item {
        width: 48vw;
        padding: 5px;
        margin-top: 5px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);
        box-sizing: border-box;
        position: relative;
        padding-bottom: 45px;
        overflow: hidden;
    }

    .item img {
        width: 100%;
    }

    .item .title {
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #333;

    }

    .item .price {
        margin-left: 16px;
        color: #ff5777;
    }

    .item .cfav {
        font-size: 13px;
        margin-left: 5px;
    }

    .item .cfav::before {
        content: "";
        width: 14px;
        height: 14px;
        display: inline-block;
        background-image: url("~assets/img/collect.svg");
        background-size: 14px 14px;
        position: relative;
        top: 1.3px;
    }
    .bottom{
        width: 100%;
        position: absolute;
        bottom: 3px;
    }
</style>