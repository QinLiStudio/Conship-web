/*
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:23:46
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-07-10 09:15:25
 * @FilePath: \前端\Conship-web\src\router\index.js
 * @Description:
 *
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved.
 */
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

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}
export default router
