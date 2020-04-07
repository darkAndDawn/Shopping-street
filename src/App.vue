<template>
  <div id="app">
    <tab-bar-main></tab-bar-main>
    <router-view/>
  </div>
</template>

<style>
@import "assets/css/base.css";
</style>
<script>
  import TabBarMain from "./components/tabBarMain/TabBarMain";
  export default {
    name:'App',
    components:{
      TabBarMain
    }
  }
</script>
