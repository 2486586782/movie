import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import zzqtabbermodel from "./module/ZzqtabberModel"
import Theaterpage from "./module/TheaterpageModel"
import city from "./module/CityModule"
import createPersistedState from "vuex-persistedstate";//vuex持久化
export default new Vuex.Store({
plugins: [createPersistedState()],
state: {},     
mutations: {},
actions: {},
modules: {
  zzqtabbermodel,
  Theaterpage,
  city,
}
})
