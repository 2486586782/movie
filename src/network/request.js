import axios from "axios"
export function httprequest(config){
const instance=axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 5000,
    headers:{
        "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"110100"}',
        'X-Host':"mall.film-ticket.film.info"
               }
})
//拦截器
instance.interceptors.request.use(
    config=>{
        Toast.loading({
            message: '加载中...',  //使用vant组件
            forbidClick: true,
            overlay:true,
            duration:0,
            });          
        return config;
    },
    err=>{
        //console.log(err)
    })//请求拦截

    instance.interceptors.response.use(
        res=>{
           // console.log(res);
           Toast.clear();//数据加载成功清除使用的弹出层
            return res;
          
        },
        err=>{
            //console.log(err)
        })  //响应拦截


return instance(config)

}