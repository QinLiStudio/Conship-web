<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-19 13:49:24
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:36:43
 * @FilePath: \Conship-web-main\src\components\MyChose.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <!-- chose边框 -->
  <div class="chose">
    <ul class="ChoiceBox">
      <router-link class="choice" to="/upload">上传</router-link>
      <router-link class="choice" to="/change">修改</router-link>
      <router-link class="choice" to="/help">文档</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyChose',
}
</script>

<style scoped>
/* chose边框 */

.chose {
  width: 100px;
  height: 120px;
  border: 2px black solid;
  border-radius: 20px;
}

.ChoiceBox {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.choice {
  width: 65px;
  height: 20px;
  border: 2px black solid;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
}

.choice:hover {
  background-color: aliceblue;
  cursor: pointer;
}

.choice:active {
  background-color: rgb(246, 196, 196);
}
</style>
