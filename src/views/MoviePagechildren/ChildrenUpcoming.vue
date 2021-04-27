<template>
    <van-list   v-model="loading"  :finished="finished"  finished-text="别拉了没有更多了"  @load="onLoad" :immediate-check="false">
         
          <van-cell v-for="item in datalist" :key="item.filmId">
              <div class="buttonitemclick"  @click="btnclick(item.filmId)">
                <div><img :src="item.poster"></div>
                <div class="lastchild2">
                    <div class="itemname"><h4>{{item.name}}</h4><span>{{item.filmType.name}}</span></div>
                    <div class="itemgrade">观众评分:<span>{{item.grade}}</span></div>
                    <div>{{item.nation}} | {{item.runtime}}分钟</div>
                    <div class="itemactors2">主演:{{item.actors | itemactrs}}</div>
                </div>
              </div>
                 <div><movie-pagechildren-button>购票</movie-pagechildren-button></div>
         </van-cell>

    </van-list>
</template>
<script>
import {getMoviePagehttp03,getMoviePagehttp04 } from "@/network/MoviePagehttp"

import Vue from 'vue';            
import { List,Cell} from 'vant';    //引入vant组件
import MoviePagechildrenButton from './MoviePagechildrenButton.vue';
Vue.use(List).use(Cell);                   //使用vant组件

Vue.filter("itemactrs",(actrs)=>{
      if(actrs===undefined){return "暂无主演"}
      return actrs.map((n)=>{ return n.name;}).join(" ");    //过滤器
})

export default {
  components: { MoviePagechildrenButton },
   name:"ChildrenUpcoming",
   data(){
     return{
      datalist:[],//接受数据
      loading: false,      //设置引入组件的值
      finished: false,     //设置引入组件的值
      refreshing: false,
      current:1,           //标记者是第几页数据
  }},


 methods:{
       btnclick(id){
           this.$router.push(`/details/${id}`)
       },
onLoad(){      //引入的vant list组件到底部触发
     this.current++
//Ajax请求新数据
getMoviePagehttp04(this.$store.state.cityId,this.current).then(success=>{
    //console.log(success.data.data.films);
    this.datalist=[...this.datalist,...success.data.data.films]
  });
//合并老数据
this.loading = false;
//加载状态结束this.loading = false;
        if (this.datalist.length >= 15) {
          this.finished = true;
        }
 // 数据全部加载完成
},},



mounted() {
      getMoviePagehttp03().then(success=>{
        //console.log(success.data.data.films);
        this.datalist=success.data.data.films
  });},
//电影页面正在热播请求数据前10条
}
</script>
<style scoped>
.van-list{ width: 100vw;}/*内容整体宽度*/
.van-cell{
     width: 100vw;   /*内容整体宽度*/
}
.van-cell__value{
    display: flex;
    margin:5px 10px  5px 10px;
    justify-content: space-between;   /*内容每一个小整体宽度*/
    align-items: center;
}
img{
    width:90px;
    height: 130px;   /*图片大小*/
}
.buttonitemclick{
display: flex;    /*设置跳转点击面积大小 */
flex: 1;
position: relative;
}
.lastchild2{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column; /*内容文字大小*/
    flex: 1;
    margin-left:5px;
}
.itemname{
    display: flex;
    overflow: hidden;     /*内容文字第一行大小*/
    white-space: nowrap;    
    text-overflow: ellipsis;
}
.itemname span{
    width: 40px;
    height: 20px;
    border-radius:15px;
    color: #fff;
    background-color: #d2d6dc;    /*几D电影样式*/
    text-align: center;
    line-height: 20px;
    margin-left: 5px;
}
.itemactors2{
    overflow: hidden;
    width:200px;
    white-space: nowrap;    /*演员溢出隐藏 */
    text-overflow: ellipsis;
}
.itemgrade span{
color: #ffb232;     /* 评分样式*/
font-size: 14px;
}
</style>


