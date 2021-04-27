<template>
    <div id="headeritem">
       <van-nav-bar
  :title="titleA"
  left-text=""
  left-arrow
  @click-left="onClickLeft"
/>
   </div>
</template>
<script>
import Vue from 'vue';
import { NavBar,Toast } from 'vant';
Vue.use(NavBar).use(Toast);
export default {
   name:"Detailsheader",
   props:['titleA'],
    methods: {
    onClickLeft() {
      Toast('返回');
      this.$router.back()
    },
  },
}
</script>
<style scoped>
#headeritem{
  font-size: 17px;
    line-height: 44px;
    width: 100vw;
    text-align: center;
    background-color: rgb(212, 211, 211);
    position:fixed;
    top:0px;
    left:0px ;
    right:0px;
    z-index:999;
   line-height: 50px;
}
</style>