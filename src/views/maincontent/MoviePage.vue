<template>
    <div>
    <zzq-swiper></zzq-swiper>
    <div id="routeritem">
        <router-link to="/moviepage/childrenishit" tag="div">正在热播</router-link>
         <router-link to="/moviepage/childrenupcoming" tag="div">即将上映</router-link>
    </div>
<router-view></router-view>
    </div>
</template>
<script>
import ZzqSwiper from '../MoviePagechildren/ZzqSwiper.vue'
export default {
  components: { ZzqSwiper },
   name:"MoviePage",
}
</script>
<style scoped>
#routeritem{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content:space-around;
    line-height: 60px;
    position: sticky;
    left: 0;
    right: 0;
    top: 0px;
    background-color: white;
    z-index: 10;
}
.action{
    color:red;
    border-bottom:solid 3px red;
}
</style>