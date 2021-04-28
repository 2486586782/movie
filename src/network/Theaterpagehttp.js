import httprequest from "./http"
/*export function Theaterpagehttp(id){
   return httprequest({
    url:`/gateway?cityId=${id}&ticketFlag=1&k=926262`,
    headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"310100"}',
        "X-Host":' mall.film-ticket.cinema.list',
    }
    })
}//影院数据*/


export function Theaterpagehttpcity(){
    return httprequest({
        url:"/gateway?k=3890404",                     
        headers:{
           'X-Host':"mall.film-ticket.city.list",
        }
     })
 }//city页面数据