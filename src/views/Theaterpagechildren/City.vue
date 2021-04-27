<template>
    <div>

                                                 <!--点击索引栏的字符时触发-->
  <van-index-bar  :index-list="componedcitylist" @select="selectclick"><!--索引字符列表-->

  <div v-for="item in citylist" :key="item.type">
  <van-index-anchor :index="item.type"/>   <!--标题-->
  <van-cell :title="nub.name" v-for="(nub,data) in item.list" :key="data"  @click="pushrouter(nub.name,nub.cityId)"/>
                                          <!--文本-->
  </div>

</van-index-bar>



</div>
</template>
<script> 
import {Theaterpagehttpcity} from "@/network/Theaterpagehttp"
import Vue from 'vue';
import { IndexBar, IndexAnchor,Cell,Toast} from 'vant';
Vue.use(IndexAnchor).use(Cell).use(Toast).use(IndexBar);

export default {
   name:"City",
   data() {
       return {
           citylist:[]
           }},


   computed:{
     componedcitylist(){
         return this.citylist.map(item => item.type)//过滤出字母，给侧边展示
    },},



    methods: {
           citiesdata(data){
         //进行数据转换成自己需要的数据
         const letterArr=[];//26个字母集合
         const newCities=[];//进行数据转换成自己需要的数据形式
         for(let code=65;code<91;code++){
             letterArr.push(String.fromCharCode(code))}//把编码转换成字母

             letterArr.forEach(item=>{
                  const list=data.filter(item2=>item2.pinyin.substring(0,1).toUpperCase()===item);//过滤首字母转换成大小一个个对比a-Z的集合
                  if(list.length>0){//如果有字母
                      newCities.push({
                          type:item,
                          list:list,
                      })//进行数据转换成自己需要的数据形式
                  }
                  })
                //console.log(newCities)
                 return newCities
                 },



//点击城市字符触发弹框形式所点击的字母
          selectclick(index){
              Toast(index);
           },



//点击城市跳转路由
        pushrouter(name,id){
        this.$router.back();//点击之后返回上一层页面
        this.$store.commit("cituNamemodification",name)
        this.$store.commit("cityIdmodification",id)
           }},





//请求数据
     mounted() {
           Theaterpagehttpcity().then(
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