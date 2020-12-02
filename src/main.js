import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Setup Axios Global plugin
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: 'https://resttest.bench.co/'
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
