<template>
    <div class="swiper-container">  <!--swiper容器-->
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imglist" :key="item">
              <img :src="item">
              </div>       <!--轮播的三个内容包裹-->
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>  
</div>
</template>
<script>
import Swiper from 'swiper/bundle';//引入swiper.js
import "swiper/swiper-bundle.min.css"//引入swiper.css
export default {
  name:"ZzqSwiper",
  data(){
    return{
      imglist:["https://static.maizuo.com/pc/v5/usr/movie/637447e2e85b1efebbc53bc05098d363.jpg?x-oss-process=image/quality,Q_70",
      "https://static.maizuo.com/pc/v5/usr/movie/947906c4689a464364b5d96e977de6d2.jpg?x-oss-process=image/quality,Q_70",
      "https://static.maizuo.com/pc/v5/usr/movie/5be64dca3fac27effc5a8bb663764f28.jpg?x-oss-process=image/quality,Q_70"]
    }
  },
  mounted() {
   new Swiper ('.swiper-container',{
            loop:true,//循环模式选项
            //direction: 'vertical', // 垂直切换选项


        speed: 2000,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
        })
   }
  
}
</script>
<style scoped>
.swiper-container {
    width:100%;
    height:240px;
    background-color: rgb(221, 23, 23);
            } 
 .swiper-container img{
   width: 100%;
 }
</style>