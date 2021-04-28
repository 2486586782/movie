<template>
<div class="Theatwepage">
    <van-nav-bar title="影院" left-arrow @click-left="clickleft" @click-right="clickright" class="index"> 
    <template #left>
     {{$store.state.cituName}}                                    <!--向vuex拿城市信息-->  
    <van-icon name="arrow-down" size="18" color="black" />
    </template> 
    <template #right>
    <van-icon name="search" size="25" color="black"/>
    </template>
    </van-nav-bar>

    <div class="scrollinghelper" :style="{height:getheight}"><!--使用BScroll组件和动态获取高度-->
            <ul>
          <van-cell v-for="item in $store.state.Theaterpagelist" :key="item.cinemaId"><!--TheaterPagelistarr是一个计算属性-->
              <div class="itemname"><div>{{item.name}}</div><span>{{item.lowPrice | itemlowPrice}}</span></div>
              <div class="itemaddress"><div>{{item.address}}</div></div>
          </van-cell>
          </ul>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { NavBar,icon, Cell} from 'vant';
Vue.use(NavBar).use(icon).use(Cell);
import BScroll from '@better-scroll/core'//导入BScroll组件

Vue.filter("itemlowPrice",(data)=>{   //过滤器
    return '￥'+data/100+"起"
})
//import {Theaterpagehttp} from "@/network/Theaterpagehttp"       //修改前请求


export default {
   name:"TheaterPage",
   data(){
       return{
        //TheaterPagelist:[]     //修改前接受数据
       }
   },



   mounted() {
        this.$store.commit("bottomhidden")                     //进入这个组件让底部导航隐藏
   /*   Theaterpagehttp(this.$store.state.cityId).then(            //请求数据
     res=>{
          console.log(res.data.data.cinemas);
          this.TheaterPagelist=res.data.data.cinemas;
           this.$nextTick(()=>{
             let bs = new BScroll('.scrollinghelper', {         //$nextTick方法比较晚触发
             })                                                 //使用BScroll组件滚动
          })
     })*/
      if(this.$store.state.Theaterpagelist.length===0){
         this.$store.dispatch("Theaterpageajax",this.$store.state.cityId).then(
              res=>{
                  this.$nextTick(()=>{
                   let bs = new BScroll('.scrollinghelper', {                       //使用BScroll组件滚动  
                   })                                                
                   })  
              }
         );    //使用Vuex请求数据
          }else{
          console.log("缓存")
          }
   },


 beforeDestroy() {
         this.$store.commit("bottomdisplay")      //离开这个组件让底部导航显示
   },


computed:{
getheight(){
    return document.documentElement.clientHeight+"px"        //利用计算属性动态获取视口高度
},
},


methods: {
       clickleft(){
            this.$router.push("/city")   //点击跳转city页面
       },
       clickright(){
            this.$router.push("/theaterpage/search")   //点击跳转/theaterpage/search页面
       },
   },
}
</script>
<style scoped>
ul{
    width: 100%;
}
.itemname{
    display: flex;
     color: #191a1b;
    font-size: 15px;
    justify-content: space-between;   /*每组第一行div样式*/
    align-items: center;
}
.itemname span{
    font-size: 15px;               /*价格样式 */
    color: #ff5f16;             
}
.itemaddress{
    color: #797d82;
    font-size: 12px;              /*每组里面第二行div样式*/
    margin-top: 5px;
}
.scrollinghelper{
    width: 100%;
    overflow: hidden;
}
.index{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
   /* margin-bottom:50px;*/
}
</style>