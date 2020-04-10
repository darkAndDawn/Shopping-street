<template>
    <div>
        <nav-bar class="nav">
            <div slot="center">购物车</div>
        </nav-bar>
        <tab-bar-main></tab-bar-main>
        <settlement></settlement>
    </div>
</template>

<script>
    import NavBar from "../../components/navbar/NavBar";
    import TabBarMain from "../../components/tabBarMain/TabBarMain";
    import Settlement from "./child/Settlement";
    export default {
        name: "Cart",
        components:{
            NavBar,
            TabBarMain,
            Settlement,
        }
    }
</script>

<style scoped>
    .nav {
        background: #ff5777;
        color: white;
    }
</style>