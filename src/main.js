import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCurrencyFilter from 'vue-currency-filter'

// Global Styles import
import "@/assets/styles/global-main.scss"

// Setup Axios Global plugin
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: 'https://resttest.bench.co/'
    })
  }
})

// Enable Vue-moment to work with dates
Vue.use(require('vue-moment'));

// Enable vue-currency filter to work with currency values
Vue.use(VueCurrencyFilter,
{
  symbol : '$',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
