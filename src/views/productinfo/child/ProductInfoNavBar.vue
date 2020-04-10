<template>
    <div>
        <nav-bar class="nav">
            <div slot="left" @click="$router.back()"><img src="~assets/img/back.svg" alt="" class="navImg"></div>
            <div slot="center">商品详情</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/navbar/NavBar";
    export default {
        name: "ProductInfoNavBar",
        components:{
            NavBar
        },
    }
</script>

<style scoped>
    .nav{
        background: white;
        z-index: 99;
    }
    .navImg{
        margin: 12px 30px 0 0;
    }
</style>