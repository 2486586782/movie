import httprequest from "./http"
export function getMoviePagehttp01(id){
return httprequest({
url:`/gateway?cityId=${id}&pageNum=1&pageSize=10&type=1&k=3129205`,   //电影页面正在热播请求数据前10条
  method:"get",
  headers:{
  'X-Host':'mall.film-ticket.film.list',
  }
    })
}
export function getMoviePagehttp02(id,current){
    return httprequest({
        url:`/gateway?cityId=${id}&pageNum=${current}&pageSize=10&type=1&k=3129205`, //完成上拉加载更多
        method:"get",
        headers:{
        'X-Host':'mall.film-ticket.film.list',
        }
        })
}
export function getMoviePagehttp03(id){
      return httprequest({
      url:`/gateway?cityId=${id}&pageNum=1&pageSize=10&type=2&k=2585364`,   //电影页面即将上映请求数据前10条
        method:"get",
        headers:{
        'X-Host':'mall.film-ticket.film.list',
        }
          })
}
export function getMoviePagehttp04(storecityId,current){
        return httprequest({
        url:`/gateway?cityId=${storecityId}&pageNum=${current}&pageSize=10&type=2&k=2585364`,   //电影页面即将上映上拉加载更多
          method:"get",
          headers:{
          'X-Host':'mall.film-ticket.film.list',
          }
            })
}