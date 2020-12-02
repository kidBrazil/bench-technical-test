import Vue from 'vue'
import VueRouter from 'vue-router'
import Transactions from '../views/Transactions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Transactions',
    component: Transactions
  }
]

const router = new VueRouter({
  routes
})

export default router
