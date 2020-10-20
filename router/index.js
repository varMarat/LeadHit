import Vue from 'vue'
import VueRouter from 'vue-router'
import Authorization from '../src/components/Authorization.vue'
import Analytics from '../src/components/Analytics.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Authorization},
  { path: '/analytics', component: Analytics},
  { path: '*', component: Authorization}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router