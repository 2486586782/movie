import httprequest from "./http"


export function getMoviePagehttp01(){
return httprequest({
url:"/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3129205",   //电影页面正在热播请求数据前10条
  method:"get",
  headers:{
  'X-Host':'mall.film-ticket.film.list',
  }
    })
}

export function getMoviePagehttp02(storecityId,current){
    return httprequest({
        url:`/gateway?cityId=${storecityId}&pageNum=${current}&pageSize=10&type=1&k=3129205`, 
       // url:`/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3129205`,
        method:"get",
        headers:{
        'X-Host':'mall.film-ticket.film.list',
        }
        })
    }