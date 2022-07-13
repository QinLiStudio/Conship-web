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
        <MonacoEditor width="700" height="600" theme="vs" language="html" v-model="content"></MonacoEditor>
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
  data() {
    return {
      content:
        '嘿！这是一个关于简化配置文件的网站！\n\n功能介绍：\n  上传配置文件后，本网站自动储存并翻译成文档。\n\n具体使用：\n  上传页面用于上传配置文件；\n  修改页面用于查询并修改或者删除您的配置文件；\n  上传成功后将返回链接或密钥，您可以通过链接或密钥查询。',
    }
  },
}
</script>

<style></style>
