export default {
    namespaced:true,
    state:{
        zzqtabbershow:true,        //动态显示底部导航栏的显示和隐藏
    },
    mutations:{
        bottomdisplay(state){
            state.zzqtabbershow=true
      },//显示底部导航栏的方法
      bottomhidden(state){
            state.zzqtabbershow=false
      },//隐藏底部导航栏的方法
    },
    actions:{

    }

}