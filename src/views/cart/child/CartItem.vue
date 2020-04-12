<template>
    <div>
        <div class="cart-item" v-for="(item,index) in cart" :key="item.iid">
            <div class="list-item">
                <div class="item-select">
                    <img src="~assets/img/tick.svg" @click="selectClick(item.iid)" :class="{active:item.checked}">
                </div>
                <div class="item-img">
                    <img :src="item.img" alt="">
                </div>
                <div class="item-info">
                    <h3 class="title">{{item.title}}</h3>
                    <p class="desc">{{item.desc}}</p>
                    <div class="bottom">
                        <span class="price">￥{{item.price}}</span>
                        <span class="count">X{{item.count}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props:{
            cart:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            selectClick(id){
                this.$store.commit('changeCartChecked',id)
            }
        }
    }
</script>

<style scoped>
    .list-item {
        display: flex;
        padding: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, .3);
    }

    .item-select {
        display: flex;
        align-items: center;
    }

    .item-select img {
        width: 18px;
        height: 18px;
        border: 2px solid #ccc;
        border-radius: 50%;
    }

    .active {
        background: #ff5777;
    }

    .item-img img {
        width: 80px;
        height: 100px;
        border-radius: 5px;
        display: block;
        vertical-align: middle;
    }

    .item-info {
        padding: 5px 10px;
        overflow: hidden;
    }

    .item-info .title,.desc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .item-info .desc {
        font-size: 12px;
        color: #666;
        margin-top: 15px;
    }

     .item-info .bottom {
        margin-top: 20px;
        display: flex;
        font-size: 14px;
        justify-content: space-between
    }

    .bottom .price {
        color: orangered;
    }

</style>