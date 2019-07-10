import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
import router from './routers/index.js'
console.log(router)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
