<template>
    <div class="goTop">
        <img src="~assets/img/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "GoTop"
    }
</script>

<style scoped>
.goTop{
    width: 48px;
    height: 48px;
    position: fixed;
    bottom: 54px;
    right: 10px;
    z-index: 99;
}
.goTop img{
    width: 100%;
    height: 100%;
    opacity: 0.7;
}
</style>