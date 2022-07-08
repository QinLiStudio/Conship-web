<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-16 15:10:10
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:36:52
 * @FilePath: \Conship-web-main\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <div id="app">
    <router-view />
    <!-- <MonacoEditor
      width="800"
      height="500"
      theme="vs-dark"
      language="javascript"
      :options="options"
      @change="onChange"
    ></MonacoEditor> -->
  </div>
</template>
<script>
// import MonacoEditor from 'monaco-editor-vue'
export default {
  name: 'App',
  methods: {
    uploadMsg() {
      this.$router.push({ path: '/upload' })
    },
    changeMsg() {
      this.$router.push({ path: '/change' })
    },
    readHelp() {
      this.$router.push({ path: '/home' })
    },
  },
  // components: {
  //   MonacoEditor,
  // },
  // data() {
  //   return {
  //     options: {
  //       //Monaco Editor Options
  //     },
  //   }
  // },
  // methods: {
  //   // onChange(value) {
  //   //   console.log(value)
  //   // },
  // },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<!-- /*开发日志 */
1.完成三个组件化页面
2.整理路由实现页面跳转√
3、封装axios -->

/*第一版思路 是将chose块当做组件写多个页面vue 实现跳转 后有思路，将chose块写死在app.vue
尝试是否可以解决切换单页面内容不成功的问题 */
