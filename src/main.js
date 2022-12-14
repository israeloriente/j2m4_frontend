import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import api from './apiCaller'

Vue.config.productionTip = false
Vue.prototype.api = api

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
