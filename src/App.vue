<template>
<div id="app">
<router-view id="view"></router-view>
<zzq-tabber v-show="this.$store.state.zzqtabbershow"></zzq-tabber>  <!--底部导航使用Vuex控制显示和隐藏-->
</div>
</template>
<script>
import ZzqTabber from './components/tabbar/ZzqTabber'          //导入底部导航
export default {
  components: { ZzqTabber },
}
</script>
<style>
@import "./assets/css/base.css";                /*引入配置默认的样式 */
#view{
    margin-bottom: 50px;                        /*底部导航样式*/
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;           /*阿里巴巴图样式引入*/
  fill: currentColor;
  overflow: hidden;
}
</style>