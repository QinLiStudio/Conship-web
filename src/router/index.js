/*
 * @FilePath: \Conship-web\src\router\index.js
 * @Author: Solitude-DDD
 * @Date: 2022-06-16 14:06:34
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomeView.vue'
import PostPage from '@/views/PostView.vue'
import FilePage from '@/views/FileView.vue'
import ModifyPage from '@/views/ModifyView.vue'
Vue.use(VueRouter)

const routes = [
  // 初始页面
  { path: '/', redirect: '/home' },
  // 页面配置
  { path: '/home', component: HomePage },
  { path: '/post', component: PostPage },
  { path: '/file', component: FilePage },
  { path: '/modify', component: ModifyPage },
]

const router = new VueRouter({
  routes,
})
export default router
