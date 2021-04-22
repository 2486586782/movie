<template>
        <div class="swiper-container" :class=" swiperclass"> 
        <div class="swiper-wrapper">
          <slot></slot>      
        </div>
        </div>
</template>
<script>
import Swiper from "swiper"//引入swiper
import "swiper/swiper-bundle.min.css"//引入swiper.css
export default {
   name:"Details01Swiper",
    props:{
        pres:{
            type:Number,
            default:3
    },
    swiperclass:{
        type:String,
        default:"swiper-container",
    }
    },
   mounted() {
       new Swiper ('.'+this.swiperclass,{    //使用swiper组件
        slidesPerView:this.pres,
        spaceBetween: 10,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
       });
   },
}
</script>
<style scoped>
 .swiper-container {
    width: 100%;
    height: 150px;
   /*设置轮播的大小 */
}  
</style>