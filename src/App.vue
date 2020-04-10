<template>
  <div id="app">
<!--    keep-alive路由跳转不刷新数据-->
    <keep-alive include="Home"><router-view/></keep-alive>

  </div>
</template>

<style>
@import "assets/css/base.css";
</style>
<script>
  export default {
    name:'App',
  }
</script>
