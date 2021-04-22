<template>
    <div>
 <van-index-bar  :index-list="componedcitylist" @select="selectclick">
 <div v-for="item in citylist" :key="item.type">
  <van-index-anchor :index="item.type"/>
  <van-cell :title="nub.name" v-for="(nub,data) in item.list" :key="data"  @click="pushrouter(nub.name,nub.cityId)"/>
  </div>
</van-index-bar>
</div>
</template>
<script> 
import http from "@/network/http.js"
import Vue from 'vue';
import { IndexBar, IndexAnchor,Cell,Toast} from 'vant';
Vue.use(IndexBar);
Vue.use(IndexAnchor).use(Cell).use(Toast);
export default {
   name:"City",
   data() {
       return {
           citylist:[]
           }
           },
   computed:{
     componedcitylist(){
         return this.citylist.map(item => item.type)

    },
   },
       methods: {
           citiesdata(data){
         //进行数据转换成自己需要的数据
         const letterArr=[];
         const newCities=[];
         for(let code=65;code<91;code++){
             letterArr.push(String.fromCharCode(code))}
             letterArr.forEach(item=>{
                  const list=data.filter(item2=>item2.pinyin.substring(0,1).toUpperCase()===item);
                  if(list.length>0){
                      newCities.push({
                          type:item,
                          list:list,
                      })
                  }
                  })
                //console.log(newCities)
                 return newCities
                
           },
          //点击城市字符触发
           selectclick(index){
              Toast(index);
           },
         //点击城市跳转路由
           pushrouter(name,id){
          this.$router.back();
          this.$store.commit("cituNamemodification",name)
           this.$store.commit("cityIdmodification",id)
           }
           },


//请求数据
     mounted() {
           http({
               url:"/gateway?k=3890404",
               headers:{
                  'X-Host':"mall.film-ticket.city.list",
               }
              }).then(
               res=>{
                   //console.log(res.data.data.cities);
                   this.citylist=this.citiesdata(res.data.data.cities);
               }
           )
       },
}
</script>
<style scoped>
</style>