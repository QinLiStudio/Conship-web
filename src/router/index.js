import Vue from 'vue'
import VueRouter from 'vue-router'
import Push from '../views/Push'
import Push2 from '../views/Push2'
import Update from '../views/Update'
import Doc from '../views/Doc'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/push1' },
    { path: '/push1', component: Push },
    { path: '/push2', component: Push2 },
    { path: '/update', component: Update },
    { path: '/doc', component: Doc },
  ],
})

export default router
