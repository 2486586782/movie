<template>
<v-touch @swiperight="onSwiperight">
    <div v-if="detailslistdata">
      <detailsheader v-header :titleA="detailslistdata.name"></detailsheader><!--头部下拉显示导航-->
      <div class="dataimg"><img :src="detailslistdata.poster"></div> <!--标题图-->

      <div class="dataitem"><!--详情内容-->
      <div class="detailslistdatanameitem">
          <div class="detailslistdatanameitem1">{{detailslistdata.name}} 
          <span class="spanitem1">{{detailslistdata.filmType.name}}</span></div>
          <span class="spanitem2">{{detailslistdata.grade}}分</span>
      </div>
      <div class="detailslistdatacategoryitem">{{detailslistdata.category}}</div>
       <div class="detailslistdatacategoryitem">{{detailslistdata.premiereAt | premiereAtdatatime}}上映</div>
       <div class="detailslistdatacategoryitem">{{detailslistdata.nation}} | {{detailslistdata.runtime}}分钟</div>
     <div :class="isshow?'detailslistdatasynopsisitem':'detailslistdatacategoryitem'">{{detailslistdata.synopsis}}</div>
     <div class="center" @click="btnisshow">
          <svg class="icon" aria-hidden="true">
          <use :xlink:href="isshow?'#icon-iconfontjiantou':'#icon-jiantoushang'"></use>
          </svg>
     </div>
     </div>
    
    <div class="details01swiperitem"><!--演员图轮播-->
              <span>演职人员</span>
              <details-01-swiper :pres="5" swiperclass="actor">
                    <div class="swiper-slide" v-for="(item,data) in detailslistdata.actors" :key="data" >
                        <img :src="item.avatarAddress"/>
                        <h3>{{item.name}}</h3>
                        <h3>{{item.role}}</h3>
                        </div>     
              </details-01-swiper>
     </div>
    <div class="details01swiperitem2"><!--剧照图轮播-->
              <div><span>剧照</span></div>
              <details-01-swiper :pres="3" swiperclass="stagephoto">
                    <div class="swiper-slide" v-for="(item,data) in detailslistdata.photos" :key="data" >
                    <img :src="item"  @click="imgbtn(data)"/>
                    </div>     
              </details-01-swiper>
          </div>
  </div>
</v-touch>
</template>
<script>
import Vuetouch from "vue-touch"
Vue.use(Vuetouch,{name:"v-touch"})

import {Detailspagehttp01} from "@/network/Detailspagehttp"
import Vue from "vue"    
import {ImagePreview} from 'vant';//导入vant组件
import moment from "moment"  //导入日期转换库

import Details01Swiper from './Details01Swiper.vue'
import Detailsheader from './Detailsheader.vue'

Vue.filter("premiereAtdatatime",(data)=>{           //使用过滤器
    return  moment(data).format('YYYY-MM-DD')       //使用日期转换
})
Vue.directive("header",{     //下拉显示自定义指令
    inserted(el){
       el.style.display="none";
       window.onscroll=()=>{
            if(document.body.scrollTop || document.documentElement.scrollTop >50){
               el.style.display="block";
               }else{
                el.style.display="none";
               }}} ,
               unbind(){     //销毁指令
                window.onscroll=null
               }  
})

export default {
  components: { Details01Swiper, Detailsheader },
    name:"Details",
     data(){
        return{
            detailslistdata: null ,      //接受数据
            isshow:true,                 //默认
             }},
    methods: {
       onSwiperight(){
            this.$router.push("/moviepage")

        },//手势右侧滑动事件

        btnisshow(){
            this.isshow=!this.isshow;    //点击下拉隐藏和显示切换
         },

        imgbtn(data){
        ImagePreview({
        images:this.detailslistdata.photos,                      //图片预览
        startPosition: data,//指定起始位置
        closeable: true,   //展示关闭按钮
                 });}
                 },

mounted(){Detailspagehttp01(this.$route.params.id).then(//拿点击页面传过来的id
            res=>{
           // console.log(res.data.data.film);
            this.detailslistdata=res.data.data.film;
            })},//数据请求
}
</script>
<style scoped>
.dataimg{
    width: 100%;
    height: 240px;
    overflow: hidden;   /*头部包裹图片的div*/
}
.dataimg img{
   width: 100%;/*图片的样式*/
}
.dataitem{
    margin: 10px 5px; /*包裹介绍的所以div*/
    border-bottom: solid 10px  rgb(244,244,244);
   
}
.detailslistdatacategoryitem{
    font-size: 15px;
    color: #797d82;
    margin-bottom: 10px;   /*包裹介绍的里面的统一样式*/
}
.detailslistdatanameitem{
display: flex;
height: 24px;
justify-content:space-between;
align-items: center;
margin: 10px 0 10px 0;
}   /**包裹介绍的里面的第一个div*/

.detailslistdatanameitem1{
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
}
.spanitem1{
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
}
.spanitem2{
    text-align: right;
    color: #ffb232;
}/**包裹介绍的里面的第一个div里面样式*/


.detailslistdatasynopsisitem{
    font-size: 15px;
    color: #797d82;
    margin-bottom: 10px;       /*电影内容介绍特别样式*/
    height: 50px;
    overflow: hidden;
}
.center{width: 100%;
text-align: center;}   /*箭头样式*/



/*介绍内容*/
.swiper-slide{
    font-size: 10px;
    color: #797d82;
    margin: 10px;
}
.swiper-slide img{
    height: 100px;
}
.details01swiperitem{
    border-bottom: solid 10px rgb(244,244,244);
}
.details01swiperitem2{
    margin:15px;
}
.details01swiperitem2 img{
    height: 100px;
    height: 80px;
}
.headnavigation{
    height: 50px;
    width: 100%;
    background-color: rgb(85, 37, 37);
}
</style>