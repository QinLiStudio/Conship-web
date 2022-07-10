<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:24:31
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-07-10 09:10:53
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
    <el-dropdown>
      <span class="el-dropdown-link"> 请选择语言<i class="el-icon-arrow-down el-icon--right"></i> </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><button @click="jsonlanguage()">json</button></el-dropdown-item>
        <el-dropdown-item><button @click="javascriptlanguage()">javascript</button></el-dropdown-item>
        <el-dropdown-item><button @click="htmllanguage()">html</button></el-dropdown-item>
        <el-dropdown-item><button @click="xmllanguage()">xml</button></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <p class="language">当前所使用语言应为{{ language }}</p>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'
import Button from '../components/Button.vue'
export default {
  name: 'Push',
  components: {
    MonacoEditor,
    // Language,
    Button,
  },
  data() {
    return {
      options: {
        // Monaco Editor Options
        value: '',
      },
      language: '',
      select: [
        {
          value: '选项1',
          label: 'json',
        },
        {
          value: '选项2',
          label: 'javascript',
        },
        {
          value: '选项3',
          label: 'html',
        },
        {
          value: '选项4',
          label: 'xml',
        },
      ],
    }
  },
  methods: {
    onChange(value) {
      this.options.value = value
    },
    jsonlanguage() {
      this.language = this.select[0].label
    },
    javascriptlanguage() {
      this.language = this.select[1].label
    },
    htmllanguage() {
      this.language = this.select[2].label
    },
    xmllanguage() {
      this.language = this.select[3].label
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  margin-left: 50px;
  width: 150px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
button {
  border: none;
  background-color: white;
  width: 70px;
}
</style>
