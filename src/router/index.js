/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-07-05 14:17:22
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-07-07 23:03:52
 * @FilePath: \Conship-web\src\router\index.js
 * @Description:
 *
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import HomeView from '../views/HomeView.vue'
import UploadView from '@/views/UploadView.vue'
import ChangeView from '@/views/ChangeView.vue'
import SuccessView from '@/views/SuccessView.vue'

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
    path: '/change', //修改
    component: ChangeView,
  },
  {
    path: '/help', //帮助
    component: HomeView,
  },
  {
    path: '/success', //成功
    component: SuccessView,
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
