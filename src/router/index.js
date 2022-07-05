import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import HomeView from '../views/HomeView.vue'
import UploadView from '@/views/UploadView.vue'
import ChangeView from '@/views/ChangeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/upload', //上传页面路径
    component: UploadView,
  },
  {
    path: '/change',
    component: ChangeView,
  },
  {
    path: '/help',
    component: HomeView,
  },
  // {
  //     path: '/about',
  //     name: '',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //         import ( /* webpackChunkName: "about" */ '@/views/UploadView.vue'),
  // },
]

const router = new VueRouter({
  routes,
})

export default router
