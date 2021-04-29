import http from "@/network/http.js"  //引入http
export default {
    namespaced:true,
    state:{
        Theaterpagelist:[],                    //公共的请求数据集合
    },
    mutations:{
        Theaterpagelistvalue(state,listvalue){
            state.Theaterpagelist=listvalue      //把actions提交的方法值转给Theaterpagelis
      },
      
      clearTheaterpagelist(state){
            state.Theaterpagelist=[]             //解决城市页面缓存的问题
      }  
    },
    actions:{
        Theaterpageajax(context,cityId){
            return http({
               url:`/gateway?cityId=${cityId}&ticketFlag=1&k=52112`,
               headers:{
                 'X-Host':'mall.film-ticket.cinema.list',
               }
           }).then(
           res=>{
             //console.log(res.data.data.cinemas);
             context.commit('Theaterpagelistvalue',res.data.data.cinemas)
          });}
    }

}