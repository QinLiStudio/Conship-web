<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-21 11:07:21
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:37:06
 * @FilePath: \Conship-web-main\src\views\SuccessView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <div class="home">
    <MyChose />
  </div>
</template>

<script>
import MyChose from '@/components/MyChose.vue'

export default {
  name: 'SuccessView',
  components: {
    MyChose,

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
