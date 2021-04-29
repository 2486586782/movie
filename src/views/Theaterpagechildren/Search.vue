<template>
    <div>
    <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"        
    @cancel="onCancel"
  />
</form>
<div>
    <van-list>
          <van-cell v-for="item in computedTheaterpagelist" :key="item.cinemaId"><!--模糊查询到的数据进行展示-->
              <div class="itemname"><div>{{item.name}}</div><span>{{item.lowPrice | itemlowPrice}}</span></div>
              <div class="itemaddress"><div>{{item.address}}</div></div>
          </van-cell>
      </van-list>
</div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Search,Toast,list,Cell } from 'vant';
import { mapActions, mapState } from 'vuex';
Vue.use(Search).use(Toast).use(list).use(Cell);
Vue.filter("itemlowPrice",(data)=>{   //过滤器
    return '￥'+data/100+"起"
})
export default {
   name:"Search",
   data() {
    return {
      value: '',//初始值
    };
  },



  methods: {
    ...mapActions("Theaterpage",["Theaterpageajax"]),
    onSearch(val) {
      Toast(val);   //搜索点击轻提示
    },
    onCancel() {
      this.$router.replace("/theaterpage")   //点击取消按钮时触发
    },
  },


   computed:{
     ...mapState("Theaterpage",["Theaterpagelist"]),
     ...mapState("city",["cityId"]),
       computedTheaterpagelist(){
       return this.Theaterpagelist.filter(
           item=>{
               return item.name.toUpperCase().includes(this.value.toUpperCase() || item.address.includes(this.value))
           })
       }//模糊查询对应的数据
   },



   mounted() {
       if(this.Theaterpagelist.length===0){
      this.Theaterpageajax(this.cityId)
      }else{
          console.log("缓存")                                 //向vuex请求数据      
      }
     // console.log(this.$store.state.Theaterpagelist)
   },

}
</script>
<style scoped>
.itemname{
    display: flex;
     color: #191a1b;
    font-size: 15px;
    justify-content: space-between;   /*lil里面第一行div样式*/
    align-items: center;
}
.itemaddress{
    color: #797d82;
    font-size: 12px;              /*lil里面第二行div样式*/
    margin-top: 5px;
}
.itemname span{
    font-size: 15px;               /*价格样式 */
    color: #ff5f16;             
}
</style>