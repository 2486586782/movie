import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import http from "@/network/http.js"  //引入http

export default new Vuex.Store({
  state: {
    cityId:"310100",
    cituName:"上海",
    zzqtabbershow:true,            //动态显示底部导航栏的显示和隐藏
    Theaterpagelist:[],
  },     
  //共享的数据
  mutations: {
    cituNamemodification(state,name){       //定义方法修改状态
      state.cituName=name
    },
    cityIdmodification(state,id){
      state.cityId=id
    },

    bottomdisplay(state){
      state.zzqtabbershow=true
    },//显示底部导航栏的方法
    bottomhidden(state){
      state.zzqtabbershow=false
    },//隐藏底部导航栏的方法

    Theaterpagelistvalue(state,listvalue){
      state.Theaterpagelist=listvalue
    },

    clearTheaterpagelist(state){
      state.Theaterpagelist=[]
    }
    
  },
  actions: {
    Theaterpageajax(store,cityId){
     return  http({
        url:`/gateway?cityId=${cityId}&ticketFlag=1&k=52112`,
        headers:{
          'X-Host':'mall.film-ticket.cinema.list',
           "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"110100"}'
        }
    }).then(
    res=>{
      console.log(res.data.data.cinemas);
      store.commit('Theaterpagelistvalue',res.data.data.cinemas)
    });

    }
  },
  modules: {





  }
})
