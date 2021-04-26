import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'//引入浏览器的宽度一致性
import "./assets/img/iconfont.js"  //引入阿里巴巴图标库js文件



Vue.config.productionTip = false
new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')
