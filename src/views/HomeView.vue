<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-16 15:10:10
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:37:03
 * @FilePath: \Conship-web-main\src\views\HomeView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <div class="home">
    <MyChose />
    <MyHelp />
    <!-- 添加帮助文档 -->
    <!-- </MyHelp> -->

    <!-- <MonacoEditor
      width="500"
      height="400"
      theme="vs-dark"
      language="javascript"
      :options="options"
      @change="onChange"
    ></MonacoEditor> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MyChose from '@/components/MyChose.vue'
import MyHelp from '@/components/MyHelp.vue'
// import MonacoEditor from 'monaco-editor-vue'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld,
  // },
  components: {
    MyChose,
    MyHelp,
    // MonacoEditor,
  },
}
</script>

<style>
/*清除默认样式*/

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  vertical-align: top;
  border: none;
}

.home {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
