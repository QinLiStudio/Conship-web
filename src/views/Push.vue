<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:24:31
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-06-21 18:19:19
 * @FilePath: \前端\Conship-web\src\views\Push.vue
 * @Description: 配置文件托管平台上传
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->

<template>
  <div id="app">
    <Button :content="this.options.value"></Button>
    <MonacoEditor
      class="editor"
      width="800"
      height="500"
      theme="vs-dark"
      :language="language"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
    <Language
      class="language"
      @languagejson="changejson"
      @languagejavascript="changejavascript"
      @languagehtml="changehtml"
      @languagexml="changexml"
    ></Language>
    <p class="language">当前所使用语言应为{{ language }}</p>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'
import Language from '../components/Language'
import Button from '../components/Button.vue'
export default {
  name: 'Push',
  components: {
    MonacoEditor,
    Language,
    Button,
  },
  data() {
    return {
      options: {
        // Monaco Editor Options
        value: '',
      },
      language: '',
    }
  },
  methods: {
    onChange(value) {
      this.options.value = value
    },
    changejson(val) {
      this.language = val
      console.log(this.language)
    },
    changejavascript(val) {
      this.language = val
      console.log(this.language)
    },
    changehtml(val) {
      this.language = val
      console.log(this.language)
    },
    changexml(val) {
      this.language = val
      console.log(this.language)
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  margin-left: 130px;
  border: 2px solid black;
  border-radius: 10px;
}
.editor {
  margin-left: 50px;
  margin-top: 15px;
}
.language {
  margin-top: 10px;
  margin-left: 60px;
  font-size: 20px;
}
</style>
