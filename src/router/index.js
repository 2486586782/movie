import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const MoviePage=()=>import("../views/maincontent/MoviePage")        //电影页面懒加载
const TheaterPage=()=>import("../views/maincontent/Theaterpage.vue")//影院页面懒加载
const Message=()=>import("../views/maincontent/Message")            //资讯页面懒加载
const Mine=()=>import("../views/maincontent/Mine")                  //我的页面懒加载
const ChildrenIshit=()=>import("../views/MoviePagechildren/ChildrenIshit")   //电影页面正在热播页面懒加载 
const ChildrenUpcoming=()=>import("../views/MoviePagechildren/ChildrenUpcoming")//电影页面即将上映页面
const Details=()=>import("../views/Detailspage/Details")            //电影页面跳转详情页面
const Login=()=>import("../views/login/Login")                      //登录页面
const City=()=>import("../views/Theaterpagechildren/City")          //院院页面城市页面
const Search=()=>import("../views/Theaterpagechildren/Search")      //院院页面搜索页面
const routes = [
  {
    path:"",
    redirect:"/moviepage",      //默认路径路由
  },
  {
  path:"/moviepage",            //电影路径路由
  component:MoviePage,         
  children:[
  {
      path:"",
      redirect:"childrenishit",  //二级路由默认页面
  },
  {
      path:"childrenishit",
      component:ChildrenIshit   //二级路由正在热播页面
  },
  {
      path:"childrenupcoming",
      component:ChildrenUpcoming    //二级路由即将上映页面
  },
  ],
  meta:{
    title:"电影"
  }
},



{
  path:"/theaterpage",
  component:TheaterPage,   //影院页面路由
  meta:{
    title:"影院"
  }
},
{
  path:"/message",        //资讯页面路由
  component:Message,
  meta:{
    title:"资讯"
  }
},
{
  path:"/mine",            //我的页面路由
  component:Mine,
  meta:{
    title:"我的"
  }
},
{
  path:"/details/:id",      //详情页面动态路由
  component:Details
},
{
  path:"/login",
  component:Login           //登录页面路由
},
{
path:"/city",                //城市页面路由
component:City
},
{
  path:"/theaterpage/search",  //搜索页面路由
  component:Search
}]


const router = new VueRouter({
  routes,
  mode:"history",              //路由html5模式
  linkActiveClass:"action"     //动态高亮颜色  
})



router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title         //给每个跳转加标签


  let allpath=["/mine"];
  if(allpath.includes(to.fullPath)){

    if(!localStorage.getItem("token")){ 
      next("/login");                            //全局导航守卫
    }else{ 
      next();
    }


  }else{
    next();
  }
})
export default router
