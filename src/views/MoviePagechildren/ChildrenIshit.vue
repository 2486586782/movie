<template>
    <div id="ChildrenIshititem">
        <!--引入list组件-->
         <van-list   v-model="loading"  :finished="finished"  finished-text="别拉了没有更多了"  @load="onLoad" :immediate-check="false">
          <van-cell v-for="item in datalist" :key="item.filmId" @click="btnclick(item.filmId)">
                <div><img :src="item.poster"></div>
                <div class="lastchild2">
                   <div class="itemname"><h4>{{item.name}}</h4><span>{{item.filmType.name}}</span></div>
                    <div class="itemgrade">观众评分:<span>{{item.grade}}</span></div>
                    <div>{{item.nation}} | {{item.runtime}}分钟</div>
                   <div class="itemactors2">主演:{{item.actors | itemactrs}}</div>
                </div>
                <div><button>购票</button></div>
            </van-cell>
    </van-list>
    </div>
</template>
<script>
import http from "@/network/http.js"
import Vue from 'vue';            //引入vue
import { List,Cell } from 'vant';    //引入组件
Vue.use(List).use(Cell);                 //使用组件
Vue.filter("itemactrs",(actrs)=>{
    if(actrs===undefined){return "暂无主演"}
      return actrs.map((n)=>{ return n.name;}).join(" ");
})//过滤器
export default {
   name:"ChildrenIshit",
    data(){
   return{
datalist:[],//接受数据
      loading: false,     //设置引入组件的值
      finished: false,     //设置引入组件的值
      current:1,//标记者是第几页数据
  }
   },
   methods: {
       btnclick(id){
           this.$router.push(`/details/${id}`)
       },
    onLoad(){      //引入的vant list组件到底部触发
     this.current++
//Ajax请求新数据
 http({
  url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3129205`,
  method:"get",
  headers:{
  'X-Host':'mall.film-ticket.film.list',
  }
}).then(success=>{
    //console.log(success.data.data.films);
    this.datalist=[...this.datalist,...success.data.data.films]
  });
//合并老数据
this.loading = false;
//加载状态结束this.loading = false;
        if (this.datalist.length >= 57) {
          this.finished = true;
        }
 // 数据全部加载完成
    },
   },
mounted(){
  http({
  url:"/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3129205",
  method:"get",
  headers:{
  'X-Host':'mall.film-ticket.film.list',
  }
}).then(success=>{
    console.log(success.data.data.films);
    this.datalist=success.data.data.films
  });
  }
}
</script>
<style scoped>
#ChildrenIshititem{
    width: 100vw;
}
.van-cell{
     width: 100vw;
}
.van-cell__value{
    display: flex;
    margin:5px 10px  5px 10px;
    justify-content:space-around;
    align-items: center;
}
img{
    width:100px;
}
.lastchild2{
    flex: 1;
    position: relative;
     margin-left:10px;
}
.itemname{
    display: flex;
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.itemname span{
    width: 40px;
    height: 20px;
    border-radius:15px;
    background-color: silver;
    text-align: center;
    line-height: 20px;
    margin-left: 5px;
}

.itemactors2{
    position: absolute;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  
}

.itemgrade span{
color: rgb(233, 162, 8);
}
</style>


