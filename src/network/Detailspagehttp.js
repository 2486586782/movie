import httprequest from "./http"
export function Detailspagehttp01(routeparamsid){
   return httprequest({
        url:`/gateway?filmId=${routeparamsid}&k=3554534`,    //详情页面数据
        methods:"get",
    })
}