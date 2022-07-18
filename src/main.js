/*
 * @Author: Solitude-DDD
 * @Date: 2022-06-16 14:06:34
 * @FilePath: \Conship-web\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // render函数指定的组件渲染到index.html中
  render: (h) => h(App),
}).$mount('#app')
