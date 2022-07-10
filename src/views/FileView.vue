<!--
 * @FilePath: \Conship-web\src\views\FileView.vue
 * @Author: Solitude-DDD
 * @Date: 2022-06-20 18:20:40
 * @Description: readme文档查看页面
-->
<template>
  <div class="filepage">
    <el-row type="flex" justify="center" align="top" class="mian-container">
      <!-- 左侧菜单栏 -->
      <MenuBar></MenuBar>
      <!-- 右侧内容块 -->
      <el-col type="flex" justify="center" class="main-content-box" :span="15">
        <MonacoEditor width="700" height="600" theme="vs" language="json"></MonacoEditor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'
import MenuBar from '@/components/MenuBar.vue'
export default {
  components: {
    MonacoEditor,
    MenuBar,
  },
}
</script>

<style></style>
