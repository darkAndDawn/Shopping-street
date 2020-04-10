<template>
    <div class="show">
        <div class="text">图片展示</div>
        <div class="item" v-for="(item,index) in productShow">
            <img :src="item" alt="" @load="showLoad">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductShow",
        props:{
            productShow:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            showLoad(){
                this.$emit('showLoadEnd')
            }
        }
    }
</script>

<style scoped>
    .show{
        border-bottom: 5px solid rgba(100,100,100,.1);
    }
.text{
    font-weight: bold;
    color: #666;
    text-align: center;
    margin: 10px;
}
    .item{
        width: 100vw;
    }
.item img{
    width: 100%;
}
</style>