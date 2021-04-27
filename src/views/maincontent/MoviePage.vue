<template>
    <div>
<zzq-swiper></zzq-swiper>
<child-router-item></child-router-item>
<router-view></router-view>
    </div>
</template>
<script>
import ZzqSwiper from '@/components/swiper/ZzqSwiper.vue'
import ChildRouterItem from '../MoviePagechildren/ChildRouterItem.vue'
export default {
  components: { ZzqSwiper, ChildRouterItem },
   name:"MoviePage",
}
</script>
<style scoped>
</style>