import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://47.106.93.239:9527';



Vue.config.productionTip = false
//引入路由
import router from './routers/index.js'




export default new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
