<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-19 14:32:46
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:36:39
 * @FilePath: \Conship-web-main\src\components\MyHelp.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <!-- main主界面 -->
  <div class="main">
    <HelpDocuments />
  </div>
</template>

<script>
import HelpDocuments from '@/components/HelpDocument.vue'
export default {
  name: 'MyHelp',
  components: { HelpDocuments },
}
</script>

<style>
/* main框 */

.main {
  width: 600px;
  height: 500px;
  margin-left: 20px;
  border: 2px black solid;
  border-radius: 20px;
}
</style>
