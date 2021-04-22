<template>
    <div>
<van-button loading type="info" loading-text="加载中..." />
    </div>
</template>
<script>
import Vue from 'vue';     //使用Vant组件导入vue
import { Button } from 'vant';   //使用Vant组件导入Button
Vue.use(Button);     //注册Button
export default {
    name:"Login"
}
</script>
<style scoped>

</style>