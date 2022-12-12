import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router"
import VueCookies from 'vue-cookies'
import '@/config/boostrap-vue'

Vue.use(VueCookies)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
