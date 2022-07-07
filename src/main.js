/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-07-05 14:17:22
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-07-05 18:21:21
 * @FilePath: \Conship-web\src\main.js
 * @Description:
 *
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved.
 */
// 该文件是整个项目的入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
//关闭Vue生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
