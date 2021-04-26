<template>
<div id="tabber">
<router-link to="/moviepage" tag="div"  class="tabberitem">
<div><svg class="icon" aria-hidden="true"><use xlink:href="#icon-ziyuan"></use></svg></div>
<div>电影</div>
</router-link>

<router-link to="/theaterpage" tag="div" class="tabberitem">
<div><svg class="icon" aria-hidden="true"><use xlink:href="#icon-yingyuan"></use></svg></div>
<div>影院</div>
</router-link>


<router-link to="/message" tag="div" class="tabberitem">
<div><svg class="icon" aria-hidden="true"><use xlink:href="#icon-dibudaohanglan-"></use></svg></div>
<div>资讯</div>
</router-link>

<router-link to="/mine" tag="div" class="tabberitem">
<div><svg class="icon" aria-hidden="true"><use xlink:href="#icon-iconfuzhi"></use></svg></div>
<div>我的</div>
</router-link>
</div>
</template>

<script>
export default {
   name:"ZzqTabber",
}
</script>
<style scoped>
#tabber{
    display: flex;
    height: 50px;
    width: 100%;
    justify-content:space-around;
    align-items: center;
    background: linear-gradient(to top,rgb(247, 235, 235),rgb(228, 227, 227));  /*底部导航框布局*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 10px;
    z-index: 10;
    box-shadow:0 -1px 3px rgba(100,100, 100, 0.3);
}
.icon{
    font-size: 25px;
    margin-bottom: 3px;            /*图片大小样式*/
}
.tabberitem{
    flex: 1;
    height:50px;
    display: flex;
    flex-direction: column;         /*包裹图片框布局 */
    justify-content: center;
    align-items: center;
    border-right:solid 1px white;
}
#tabber .tabberitem:last-child{
    border-right: none;              /*清除外边线*/
}
.action{
    color: rgb(238, 42, 8);        /*动态颜色改变*/
}
</style>