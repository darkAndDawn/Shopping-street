<template>
    <div class="settlement">
        <div class="select">
            <img :class="{active:allChecked}" src="~assets/img/tick.svg" @click="allClick"> 全选
        </div>
        <div class="total">合计：￥{{totalPrice}}</div>
        <div class="com">去计算({{totalCount}})</div>
    </div>

</template>

<script>
    export default {
        name: "Settlement",
        data(){
            return{
                isAllActive:true
            }
        },
        computed:{
            allChecked(){
                return this.$store.getters.isAllActive
            },
            totalPrice(){
                let total = 0
                this.$store.state.cart.forEach(item =>{
                    if (item.checked){
                        total += item.price*item.count
                    }
                })
                return total.toFixed(2)
            },
            totalCount(){
                let count = 0
                this.$store.state.cart.forEach(item =>{
                    if (item.checked){
                        count++
                    }
                })
                return count
            }
        },
        methods:{
            allClick(){
                this.$store.commit('changeCartAllChecked',this.allChecked)
            },

        }
    }
</script>

<style scoped>
    .settlement {
        width: 100vw;
        height: 40px;
        background-color: #eeeeee;
        position: fixed;
        bottom: 50px;
        z-index: 999;
        display: flex;
        line-height: 40px;
        font-size: 14px;
        color: #646464;
        padding: 0 10px;
    }

    .select {
        width: 24%;
    }
    .select img{
        width: 18px;
        height: 18px;
        border: 2px solid #ccc;
        border-radius: 50%;
        vertical-align: middle;
    }
    .active{
        background: #ff5777;
    }
    .total {
        width: 42%;
    }

    .com {
        width: 34%;
        background-color: #fe5200;
        color: #fff;
        text-align: center;
    }
</style>