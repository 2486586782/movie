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
          <van-cell v-for="item in computedTheaterpagelist" :key="item.cinemaId">
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
Vue.use(Search).use(Toast).use(list).use(Cell);
Vue.filter("itemlowPrice",(data)=>{   //过滤器
    return '￥'+data/100+"起"
})
export default {
   name:"Search",
   data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
      this.$router.replace("/theaterpage")
    },
  },
   computed:{
       computedTheaterpagelist(){
       return this.$store.state.Theaterpagelist.filter(
           item=>{
               return item.name.toUpperCase().includes(this.value.toUpperCase() || item.address.includes(this.value))
           }
       )
       }
   },
   mounted() {
       if(this.$store.state.Theaterpagelist.length===0){
      this.$store.dispatch("Theaterpageajax",this.$store.state.cityId)
      }else{
          console.log("缓存")
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
</style>