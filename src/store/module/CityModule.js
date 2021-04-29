export default {
    namespaced:true,
    state:{
        cityId:"310100",
        cituName:"上海",            //默认显示地址

    },
    mutations:{
        cituNamemodification(state,name){      
            state.cituName=name
          },
          cityIdmodification(state,id){
            state.cityId=id
          },
       //定义方法修改状态
    },
    actions:{

    }

}