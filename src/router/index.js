import Vue from 'vue'
import VueRouter from 'vue-router'
import MyFile from '../views/MyFile.vue'
import MyAdd from '../components/MyAdd.vue'
import ShowData from '../views/ShowData.vue'
import MyUpdate from '../views/MyUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/myfile',
  },
  {
    path: '/myfile',
    name: 'myfile',
    component: MyFile,
  },
  {
    path: '/myadd',
    name: 'myadd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MyAdd,
  },

  {
    path: '/MyUpdate',
    name: 'MyUpdate',
    component: MyUpdate,
  },
  {
    path: '/showdata',
    name: 'showdata',
    component: ShowData,
  },
]

const router = new VueRouter({
  routes,
})

export default router
