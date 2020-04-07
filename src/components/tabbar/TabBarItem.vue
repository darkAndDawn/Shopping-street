<template>

  <div class="tab-bar-item" @click="itemClick">
    <div class="item-img" v-if="isActiveImg">
      <slot name="item-img"></slot>
    </div>
    <div class="item-img" v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div class="item-text" :style="isActive">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",

    props:{
      path:{
        type:String
      },
      color:{
        type:String,
        default:"#ff5777"
      }
    },
    methods:{
      itemClick(){
        if(this.$route.path === this.path){
          return
        }
        this.$router.push(this.path)
        setTimeout(()=>{
        },300)
      }
    },
    computed:{
      isActive(){
        //return this.$route.path == this.path
        return this.isActiveImg ? {} : {color:this.color}
      },
      isActiveImg(){
        return this.$route.path !== this.path
      }
    }
  }
</script>

<style scoped>
  .active{
    color: #ff5777;
  }
  .tab-bar-item {
    flex: 1;
    height: 50px;
    text-align: center;
  }
  .item-img img{
    width: 24px;
    height: 24px;
    margin: 4px auto 0 auto;
  }
  .item-text{
    font-size: 12px;
  }
</style>
