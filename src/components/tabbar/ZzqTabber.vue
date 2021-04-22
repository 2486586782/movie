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
    background: linear-gradient(to top,rgb(204, 190, 190),rgb(228, 227, 227));
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 10px;
    z-index: 10;
}
.icon{
    font-size: 25px;
    margin-bottom: 3px;

}
.tabberitem{
    flex: 1;
    height:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right:solid 1px white;
}
.action{
    color: tomato;
}
</style>