<template>
    <div class="shop">
        <div class="top">
            <img :src="productShop.shopLogo" alt="">
            <span class="name">{{productShop.shopName}}</span>
        </div>
        <div class="centent">
            <div class="left">
                <div class="sell">
                    <div class="shop-sells-count">{{productShop.cSells | fontCount}}</div>
                    <div class="shop-sells-text">销量</div>
                </div>
                <div class="goods">
                    <div class="shop-goods-count">{{productShop.cGoods}}</div>
                    <div class="shop-goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="right">
                <table>
                    <tr v-for="(item,index) in productShop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{isScore : item.isBetter}">{{item.score}}</td>
                        <td class="higAndLow" :class="{ishigAndLow : item.isBetter}">{{item.isBetter ? "高" : "低"}}</td>
                    </tr>
                </table>
            </div>

        </div>
        <div class="shop-bottom">
            <a href="http://m.meilishuo.com/shop/index/1cp5kk">进店逛逛</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductShop",
        props: {
            productShop: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            fontCount(val) {
                if (val >= 10000) {
                    return (val / 10000).toFixed(2) + '万'
                } else {
                    return val
                }
            }
        }
    }
</script>

<style scoped>
    .shop {
        padding: 20px 8px;
        border-bottom: 5px solid rgba(100,100,100,.1);
    }

    .centent {
        display: flex;
        padding: 10px;
        margin-top: 15px;
        align-items: center;
        height: 50px
    }

    .centent .left {
        flex: 1;
        display: flex;
        text-align: center;
        border-right: 1px solid #ccc;
    }

    .centent .left .sell {
        flex: 1;
    }

    .shop-sells-count {
        color: #999999;
    }

    .shop-goods-count {
        color: #999999;
    }

    .shop-sells-text {
        font-size: 12px;
    }

    .shop-goods-text {
        font-size: 12px;
    }

    .centent .left .goods {
        flex: 1;
    }

    .centent .right {
        flex: 1;
    }

    .centent .right {
        font-size: 12px;
        text-align: center;

    }

    .centent .right table {
        margin: auto;
    }

    .top img {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,.1);
        vertical-align: middle
    }

    .top .name {
        margin-left: 10px;
        font-size: 13px;
        font-weight: bold;

    }

    .centent .right .score {
        color: yellowgreen;
        padding: 0 2px;
    }

    .isScore {
        color: #ff5777 !important;
    }

    .centent .right .higAndLow {
        background: yellowgreen;
        color: white;
        padding: 1px;
    }

    .ishigAndLow {
        background: #ff5777 !important;
    }

    .shop-bottom {
        margin-top: 10px;
    }

    .shop-bottom a {
        display: block;
        width: 150px;
        height: 30px;
        line-height: 30px;
        background: #f2f5f8;
        font-size: 14px;
        text-align: center;
        border-radius: 10px;
        margin: auto;
    }
</style>