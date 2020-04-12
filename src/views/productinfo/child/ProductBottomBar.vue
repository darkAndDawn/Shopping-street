<template>
    <div id="tab">
        <div class="bottomLeft">
            <div class="service">
                <div class="img"></div>
                <div class="txt">客服</div>
            </div>
            <div class="shop">
                <div class="img"></div>
                <div class="txt">店铺</div>
            </div>
            <div class="like">
                <div class="img"></div>
                <div class="txt">收藏</div>
            </div>
        </div>
        <div class="bottomRight">
            <div class="addCart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductBottomBar",
        methods:{
            addCart(){
                this.$emit('addCart')
            }
        }
    }
</script>

<style scoped>
    #tab {
        width: 100vw;
        height: 58px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        display: flex;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
    }

    #tab .bottomLeft {
        flex: 1;
        display: flex;
    }

    #tab .bottomRight {
        flex: 1;
    }
    .bottomLeft > div{
        flex: 1;
        text-align: center;
        font-size: 13px;
    }
    .bottomLeft .img{
        width: 22px;
        height: 22px;
        background-image: url("~assets/img/detail_bottom.png");
        background-repeat: no-repeat;
        background-size: 22px 150px;
        margin: 10px auto 4px auto;
    }
    .bottomLeft .service .img{
        background-position: 0 -52px;
    }
    .bottomLeft .shop .img{
        background-position: 0 -98px;
    }
    .bottomLeft .like .img{
        background-position: 0 0;
    }

    .bottomRight{
        text-align: center;
        font-size: 13px;
        display: flex;
    }
    .bottomRight .addCart{
        background-color: #FF8A00;
        width: 50%;
        height: 30px;
        margin-top: 14px;
        font-size: 13px;
        border-radius: 10px 0 0 10px;
        text-align: center;
        line-height: 30px;
        color: #fff;
    }
    .bottomRight .buy{
        background-color: #FF4400;
        width: 50%;
        height: 30px;
        margin-top: 14px;
        font-size: 13px;
        border-radius: 0 10px 10px 0;
        text-align: center;
        line-height: 30px;
        color: #fff;
    }
</style>