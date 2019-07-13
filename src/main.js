import Vue from 'vue';
import App from './App.vue';
import store from './store';



Vue.config.productionTip = false
//引入路由
import router from './routers/index.js'




export default new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
