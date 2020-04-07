<template>
    <div>
        <nav-bar class="nav">
            <div slot="center">购物街</div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/navbar/NavBar";

    export default {
        name: "HomeNavBar",
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .nav {
        background: #ff5777;
        color: white;
    }
</style>