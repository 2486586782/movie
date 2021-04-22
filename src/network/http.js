import axios from "axios"
import {Toast} from 'vant'
import Vue from "vue"
Vue.use(Toast)
const http = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 4000,
    headers:{
        "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"110100"}',
        'X-Host':"mall.film-ticket.film.info"
               }
  });

//拦截器
http.interceptors.request.use(
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

    http.interceptors.response.use(
        res=>{
           // console.log(res);
           Toast.clear();//数据加载成功清除使用的弹出层
            return res;
          
        },
        err=>{
            //console.log(err)
        })  //响应拦截



  export default http 