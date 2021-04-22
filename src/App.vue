<template>
  <div id="app">
    <div id="view">
<router-view></router-view>
    </div>
<zzq-tabber v-show="this.$store.state.zzqtabbershow"></zzq-tabber>
  </div>
</template>


<script>
import ZzqTabber from './components/tabbar/ZzqTabber'
export default {
  components: { ZzqTabber },
}
</script>
<style>
@import "./assets/css/base.css";/*引入配置默认的样式 */
#view{
    margin-bottom: 50px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
