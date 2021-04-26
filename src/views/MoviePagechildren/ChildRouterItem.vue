<template>
      <div id="routeritem">
        <router-link to="/moviepage/childrenishit" tag="div">正在热播</router-link>
        <router-link to="/moviepage/childrenupcoming" tag="div">即将上映</router-link>
      </div>
</template>
<script>
export default {
    name:"ChildRouterItem"
}
</script>
<style scoped>
#routeritem{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content:space-around;
    line-height: 50px;
    position: sticky;
    left: 0;
    right: 0;
    top: 0px;
    background-color: white;
    z-index: 10;
    font-size: 14px;
}
.action{
    color:#ff5f16;
    border-bottom:solid 1px #ff5f16;
}
</style>