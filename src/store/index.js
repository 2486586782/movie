import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import http from "@/network/http.js"  //引入http

export default new Vuex.Store({
  state: {
    cityId:"310100",
    cituName:"上海",            //默认显示地址


    zzqtabbershow:true,        //动态显示底部导航栏的显示和隐藏


    Theaterpagelist:[],                    //公共的请求数据集合
  },     
  //共享的数据
  mutations: {
    cituNamemodification(state,name){      
      state.cituName=name
    },
    cityIdmodification(state,id){
      state.cityId=id
    },
 //定义方法修改状态


bottomdisplay(state){
      state.zzqtabbershow=true
},//显示底部导航栏的方法
bottomhidden(state){
      state.zzqtabbershow=false
},//隐藏底部导航栏的方法



Theaterpagelistvalue(state,listvalue){
      state.Theaterpagelist=listvalue      //把actions提交的方法值转给Theaterpagelis
},



clearTheaterpagelist(state){
      state.Theaterpagelist=[]             //解决城市页面缓存的问题
}



},


actions: {
  Theaterpageajax(store,cityId){
     return http({
        url:`/gateway?cityId=${cityId}&ticketFlag=1&k=52112`,
        headers:{
          'X-Host':'mall.film-ticket.cinema.list',
        }
    }).then(
    res=>{
      //console.log(res.data.data.cinemas);
      store.commit('Theaterpagelistvalue',res.data.data.cinemas)
   });}


  },



modules: {}
})
