<template>
    <div>
        <cart-nav-bar></cart-nav-bar>
        <div class="content">
            <cart-item :cart="cart"></cart-item>
        </div>

        <tab-bar-main></tab-bar-main>
        <settlement></settlement>
    </div>
</template>

<script>
    import CartNavBar from "./child/CartNavBar";
    import CartItem from "./child/CartItem";
    import TabBarMain from "../../components/tabBarMain/TabBarMain";
    import Settlement from "./child/Settlement";
    export default {
        name: "Cart",
        data(){
            return{
                cart:null
            }
        },
        created() {
            this.cart = this.$store.state.cart
        },
        components:{
            CartNavBar,
            TabBarMain,
            Settlement,
            CartItem
        }
    }
</script>

<style scoped>
.content{
    height: calc(100vh - 44px - 50px);
    margin-top: 44px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>