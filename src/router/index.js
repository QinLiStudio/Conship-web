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
  { name: '/home', path: '/home', component: HomePage },
  { name: '/post', path: '/post', component: PostPage },
  { name: '/file', path: '/file', component: FilePage },
  { name: '/modify', path: '/modify', component: ModifyPage },
]

const router = new VueRouter({
  routes,
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}

export default router
