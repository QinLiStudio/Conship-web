<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-21 11:07:21
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-07-07 23:33:28
 * @FilePath: \Conship-web\src\views\SuccessView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <div class="home">
    <MyChose />
    <div class="main">
      <element class="feature">
        <i></i>
      </element>
      <p>提交成功！</p>
      <div class="infor-Input">
        <p>链接：</p>
        <p>{{ this.$route.query.url }}</p>
      </div>
      <div class="infor-Input">
        <p>密钥：</p>
        <p>{{ this.$route.query.secret }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyChose from '@/components/MyChose.vue'
// import MyInput from '@/components/MyInput.vue'

export default {
  name: 'SuccessView',
  components: {
    MyChose,
    // MyInput,
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

.main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* 对勾css */
.feature i {
  width: 140px;
  height: 60px;
  display: inline-block;
  border: 1px solid #23b8ff;
  border-width: 0 0 2px 2px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  vertical-align: baseline;
}

/* input框style */
.infor-Input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
