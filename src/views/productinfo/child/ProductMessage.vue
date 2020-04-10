<template>
    <div class="msg">
        <h3 class="title">{{productInfo.title}}</h3>
        <div class="price">
            <span class="new_price">{{productInfo.price}}</span>
            <span class="bef_price">{{productInfo.oldPrice}}</span>
            <span class="discount">{{productInfo.discountDesc}}</span>
        </div>
        <div class="columns">
            <span v-for="(item,index) in productInfo.columns" :key="index">{{item}}</span>
        </div>
        <div class="services">
            <div class="item" v-for="(item,index) in productInfo.services" :key="index">
                <img :src="url(item.icon)">
                <span>{{item.name}}</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProductMessage",
        props:{
            productInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods:{
            url(icon){
                return icon ? icon : '//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png'
            }
        },
    }
</script>

<style scoped>
.msg{
        padding: 8px;
    }
.title{
    font-size: 18px;
}
.price{
    margin: 10px 0;
}
.price .new_price{
    font-size: 16px;
    color: #ff5777;
}
.price .bef_price{
    margin: 0 6px;
    font-size: 12px;
    color: #999;
    text-decoration:line-through
}
.discount{
    font-size: 12px;
    background: #ff5777;
    border-radius: 4px;
    padding: 2px;
    color: white;
}
.columns{
    line-height: 30px;
    font-size: 13px;
    color: #999;
    display: flex;
    border-bottom: 1px solid rgba(100,100,100,.5);
}
.columns span{
    flex: 1;
}
.services{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 5px solid rgba(100,100,100,.1);
}
.services .item{
    width: 33.333%;
    font-size: 13px;
    line-height: 30px;
}
.services img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
}
    .shop{
        padding: 20px 8px;
        border-bottom: 5px solid rgba(100,100,100,.1);
    }
</style>